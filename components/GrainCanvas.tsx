"use client";

import { useEffect, useRef } from "react";

/**
 * Quiet, code-generated grain texture used behind the hero instead of video.
 * Cheap on mobile: small canvas, low opacity, redrawn only every few frames.
 */
export default function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const scale = 0.25; // render small, scale up via CSS - cheap on mobile GPUs
    let width = 0;
    let height = 0;

    const resize = () => {
      width = Math.floor(window.innerWidth * scale);
      height = Math.floor(window.innerHeight * scale);
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let raf: number;
    const draw = () => {
      frame++;
      // Only redraw every 4th frame - grain doesn't need 60fps to read as "alive"
      if (frame % 4 === 0) {
        const imageData = ctx.createImageData(width, height);
        const buffer = imageData.data;
        for (let i = 0; i < buffer.length; i += 4) {
          const v = 245 + Math.random() * 10 - 5;
          buffer[i] = v;
          buffer[i + 1] = v - 2;
          buffer[i + 2] = v - 6;
          buffer[i + 3] = 14; // very low opacity - quiet texture, not noise
        }
        ctx.putImageData(imageData, 0, 0);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{ imageRendering: "pixelated" }}
      aria-hidden="true"
    />
  );
}

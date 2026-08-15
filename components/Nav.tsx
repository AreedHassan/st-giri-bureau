"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/bureau", label: "The Bureau" },
  { href: "/confessions", label: "Confessions" },
  { href: "/tea", label: "The Tea" },
  { href: "/topic-of-the-day", label: "Topic of the Day" },
  { href: "/bulletin", label: "Bulletin" },
  { href: "/class-xii", label: "Class XII" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-serif text-lg tracking-tight text-bureau-ink">
          The Bureau
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 glass rounded-full px-1.5 py-1.5">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-bureau-ink/70 hover:text-bureau-ink hover:bg-bureau-ink/5 transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/submit"
          className="hidden md:inline-block rounded-full bg-bureau-ink text-bureau-paper text-sm font-medium px-5 py-2.5 hover:bg-bureau-ink/90 transition-colors duration-200"
        >
          Submit
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
          aria-label="Menu"
        >
          <div className="w-4 flex flex-col gap-[3px] items-center">
            <span
              className={`block h-[1.5px] w-4 bg-bureau-ink transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-bureau-ink transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-bureau-ink transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-bureau-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 glass-dark px-6 pt-24 pb-10 flex flex-col gap-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-bureau-paper/85 hover:bg-white/10 hover:text-bureau-paper transition-colors"
              style={{
                transitionDelay: open ? `${i * 50}ms` : "0ms",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/submit"
            onClick={() => setOpen(false)}
            className="mt-auto rounded-full bg-bureau-paper text-bureau-ink text-center font-medium py-3.5"
          >
            Submit to the Bureau
          </Link>
        </div>
      </div>
    </>
  );
}

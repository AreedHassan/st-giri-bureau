# The St. Giri Bureau — V1

Next.js + TypeScript + Tailwind. Mobile-first, Dossier design direction.

## What's built

- Home (hero, Topic of the Day, latest confession, trending feed)
- The Bureau, Confessions, The Tea, Bulletin (feed pages)
- Topic of the Day (response UI)
- Class XII (Science/Commerce landing — subpages not built yet)
- Submit (public submission form, full Dossier styling)
- Admin (password-gate stub + post creation form — NOT real auth yet)

All content currently comes from `lib/mock-data.ts`. Nothing is wired to
Supabase yet — that's the next step.

## How to get this onto GitHub

1. Unzip this folder locally.
2. Go to github.com → New repository → name it `st-giri-bureau` → **do not**
   initialize with a README (you already have one) → Create repository.
3. On the new repo's page, click **"uploading an existing file"** (under the
   quick setup section).
4. Drag in every file and folder from the unzipped project **except**
   `node_modules` (there isn't one yet, so this won't be an issue on first
   upload).
5. Commit directly to `main`.

If you'd rather use git commands instead of the browser uploader:

```
cd st-giri-bureau
git init
git add .
git commit -m "V1 scaffold"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/st-giri-bureau.git
git push -u origin main
```

## Connecting to Vercel

1. vercel.com → Add New → Project → Import the `st-giri-bureau` GitHub repo.
2. Framework preset: Next.js (auto-detected, no changes needed).
3. Deploy. It will build and give you a live URL immediately, even with mock
   data.

## Next steps (not yet built)

- Wire `submit` and `admin` pages to Supabase (`submissions` and `posts`
  tables) — needs your Supabase project URL + anon key as environment
  variables on Vercel.
- Replace the admin password stub with real Supabase Auth.
- Build out Science/Commerce subpages under Class XII.
- Swap mock data for live Supabase queries on Home and all feed pages.

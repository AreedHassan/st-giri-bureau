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

## Next steps (not yet built)

- Wire `submit` and `admin` pages to Supabase (`submissions` and `posts`
  tables) — needs your Supabase project URL + anon key as environment
  variables on Vercel.
- Replace the admin password stub with real Supabase Auth.
- Build out Science/Commerce subpages under Class XII.
- Swap mock data for live Supabase queries on Home and all feed pages.

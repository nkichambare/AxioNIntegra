# Keystatic CMS Integration Plan (Resources + Blog, EN/FR/DE)

## Summary

Integrate a free, Git-based CMS using **Keystatic** to replace hardcoded resource cards and add CMS-managed blog posts.
Scope includes:

1. CMS-managed Resources cards for homepage section.
2. CMS-managed blog post collection with dynamic slug pages.
3. Multilingual modeling as **one post per locale** (EN/FR/DE) via shared translation key.
4. Vercel-compatible setup with minimal operational overhead.

## Why This CMS (Options Reviewed)

- **Selected: Keystatic** (open-source package, Next.js-friendly local/GitHub/cloud storage modes): [keystatic.com](https://keystatic.com/), [npm package](https://www.npmjs.com/package/%40keystatic/core), [docs](https://keystatic.com/docs/overview)
- Alternative considered:

1. TinaCMS (free tier exists but usage limits): [tina.io/pricing](https://tina.io/pricing), [i18n guide](https://tina.io/docs/guides/internationalization)
2. Decap CMS (OSS + i18n support; more auth/setup friction on Vercel): [decapcms.org/docs/intro](https://decapcms.org/docs/intro/), [i18n support](https://decapcms.org/docs/i18n/)

## Important Changes to Interfaces/Types

1. Add CMS schema/config:

- New file: [`/Users/pushkarthakur/Developer/axionintegra/keystatic.config.ts`](/Users/pushkarthakur/Developer/axionintegra/keystatic.config.ts)

2. Add content collections (repo-backed):

- New directories:
  - `/Users/pushkarthakur/Developer/axionintegra/content/resources`
  - `/Users/pushkarthakur/Developer/axionintegra/content/posts`

3. Add typed content mapping layer:

- New file: [`/Users/pushkarthakur/Developer/axionintegra/src/lib/content.ts`](/Users/pushkarthakur/Developer/axionintegra/src/lib/content.ts)
- New exported types:
  - `Locale = 'en' | 'fr' | 'de'`
  - `ResourceCard`
  - `BlogPostSummary`
  - `BlogPost`

4. Update UI contract for resources:

- Update [`/Users/pushkarthakur/Developer/axionintegra/src/components/resources-section.tsx`](/Users/pushkarthakur/Developer/axionintegra/src/components/resources-section.tsx) to consume CMS data props instead of local `resources` constant.
- Add link target per card (`href`) to blog post detail.

5. Add blog route:

- New route: [`/Users/pushkarthakur/Developer/axionintegra/src/app/resources/[slug]/page.tsx`](/Users/pushkarthakur/Developer/axionintegra/src/app/resources/[slug]/page.tsx)
- Optional listing page: `/src/app/resources/page.tsx` if needed for discoverability.

## Implementation Plan

1. Install and wire Keystatic in Next.js app router.
2. Define two collections:

- `resources`: title, preview, cover image, href/slug, locale, sort order.
- `posts`: slug, title, excerpt, cover image, body (rich text/markdown), locale, `translationKey`, publish date, optional tags.

3. Seed initial EN content by migrating existing hardcoded resources.
4. Build content loader functions in `src/lib/content.ts`:

- `getResources(locale)`
- `getPostBySlug(slug, locale)`
- `getPosts(locale)`
- `getPostTranslations(translationKey)`

5. Refactor homepage to read `resources` from CMS loader (server-side fetch; section can remain interactive client-side).
6. Create dynamic blog detail page using slug + locale-aware filtering/fallback.
7. Add locale fallback rule:

- If requested locale post missing, fallback to EN for rendering.

8. Keep styling consistent with AGENTS design system (no visual language drift).

## Test Cases and Scenarios

1. Content loading:

- Resources render from CMS data with no hardcoded fallback.
- Posts render correctly by slug.

2. Localization:

- EN/FR/DE resource and post retrieval works.
- Missing FR/DE content falls back to EN.

3. Routing:

- Valid slug resolves to post page.
- Invalid slug returns `notFound`.

4. Editor workflow:

- Create/edit/delete resource/post in CMS reflects on site after build/revalidate.

5. UI regression:

- Resources slider behavior unchanged on desktop/mobile after data source swap.

6. Build checks:

- `pnpm build` passes with CMS content present.
- TypeScript type safety enforced for content mapping.

## Assumptions and Defaults

1. Deployment target is **Vercel**.
2. Initial rollout includes homepage resources + blog detail pages (not full-site CMS migration).
3. Multilingual model is **separate entry per locale** with shared `translationKey`.
4. First phase seeds English content; FR/DE can be added progressively.
5. Free/low-overhead priority outweighs advanced enterprise editorial workflows.

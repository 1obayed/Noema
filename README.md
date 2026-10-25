# Md Obayed Reza Hridoy — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS v4. Statically prerendered and deployed on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build && npm start
```

## Updating content

All content lives in `src/data/`. Components render whatever is in these files, so you rarely need to touch UI code.

| File | What it controls |
| --- | --- |
| `profile.ts` | Name (and the Md / Obayed Reza / Hridoy hero split), headline, intro, About text, areas of focus, email, phone, social links and handle, résumé path, portrait |
| `experience.ts` | Experience rows. `duration` is the large number (e.g. "3+") |
| `projects.ts` | Project cards. `repoUrl`, `liveUrl`, `image` and `recognition` are optional and only render when set |
| `skills.ts` | Language star ratings (1–5) and skill groups |
| `achievements.ts` | Recognition cards. Leave `year`, `description`, `evidenceUrl` out unless verified |
| `certifications.ts` | Certificate cards. An empty array hides the section and its nav link |
| `education.ts` | Education cards |

### Phone number

The phone number is shown in the hero and contact section. To hide it, set `showPhone: false` in `src/data/profile.ts`. The downloadable résumé in `public/resume/` also contains the number; replace that file to change it.

### Adding a project image

Put the image in `public/images/`, then add to the project:

```ts
image: { src: "/images/greensync.webp", alt: "GreenSync prototype", width: 1600, height: 960 },
```

### Adding a certificate

1. Copy the PDF to `public/certifications/` (use a lowercase-hyphenated name).
2. Create a first-page preview in `public/certifications/thumbs/`, about 900px wide, WebP. With poppler and ImageMagick installed:
   ```bash
   pdftoppm -r 110 -png -f 1 -l 1 -singlefile public/certifications/NAME.pdf thumbs-tmp
   magick thumbs-tmp.png -resize 900x -quality 80 public/certifications/thumbs/NAME.webp
   ```
   Any image editor or online PDF-to-image tool works too.
3. Append an entry to `src/data/certifications.ts` with the title, issuer and date exactly as printed on the certificate, plus the thumbnail's width and height.

Cards sort newest first by `issuedISO`.

## Deployment (Vercel)

Import the GitHub repository in Vercel. The framework preset is detected automatically as Next.js and no environment variables are required.

Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`) once a custom domain is attached, so canonical URLs, the sitemap and Open Graph tags use it. Without it, the Vercel production URL is used.

## Structure

```
src/app/            layout, page, sitemap, robots, OG image, icon
src/components/     header, footer, buttons, certificate card, etc.
src/components/sections/   one file per page section
src/data/           all site content
src/lib/site.ts     site URL and navigation
public/             résumé, certificates, thumbnails, portrait
```

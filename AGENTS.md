<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:indian-imagery-rules -->
# Imagery: India-only, realistic

When adding or changing photos on this site (hero, services, blogs, industries, about, OG images):

1. **India context only** — people, uniforms, vehicles, architecture, signage, and environments must look like India / Delhi NCR (Gurugram, Noida, Faridabad, Manesar, etc.).
2. **Realistic photography look** — prefer documentary/photorealistic images. Avoid cartoon, illustrated, generic Western office stock, or obviously foreign street scenes.
3. **Prefer local files** under `public/` or `public/images/`. Update `src/lib/images.ts` as the single source of image paths.
4. **Do not** pull random Unsplash/Pexels people photos that read as US/Europe unless the subject is clearly India (e.g. existing Gurugram Cyber City hero).
5. **Alt text** should describe the Indian context naturally when relevant (e.g. “Security guard at a Gurugram corporate gate”).
6. Compress JPEGs (~1400×900, quality ~70–75) before committing large assets.
<!-- END:indian-imagery-rules -->

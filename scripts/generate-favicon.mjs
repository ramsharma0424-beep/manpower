import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source = path.join(root, "public", "favicon-source.png");

const BG = { r: 28, g: 25, b: 23, alpha: 1 };

/** Tight crop around the UR monogram (no tagline text). */
const CROP = { left: 140, top: 320, width: 440, height: 280 };

async function buildIcon(size) {
  const cropped = await sharp(source)
    .rotate()
    .extract(CROP)
    .toBuffer();

  const trimmed = await sharp(cropped).trim({ threshold: 12 }).toBuffer();

  const glyphSize = Math.round(size * 0.82);
  const glyph = await sharp(trimmed)
    .negate({ alpha: false })
    .resize(glyphSize, glyphSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BG,
    },
  })
    .composite([{ input: glyph, gravity: "center" }])
    .png()
    .toBuffer();
}

const icon32 = await buildIcon(32);
const icon48 = await buildIcon(48);
const icon180 = await buildIcon(180);

await writeFile(path.join(root, "src", "app", "icon.png"), icon32);
await writeFile(path.join(root, "src", "app", "apple-icon.png"), icon180);
await writeFile(path.join(root, "public", "favicon.png"), icon48);

console.log("Generated favicon assets (32, 48, 180px)");

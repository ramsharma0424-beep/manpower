import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source = path.join(root, "public", "logo.png");

/** Build a circular, transparent PNG at the given size from the brand logo. */
async function buildCirclePng(size) {
  const resized = await sharp(source)
    .resize(size, size, { fit: "cover", position: "centre" })
    .ensureAlpha()
    .png()
    .toBuffer();

  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
    </svg>`,
  );

  return sharp(resized)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

/** Pack PNG buffers into a multi-size .ico (PNG-in-ICO). */
function encodeIco(images) {
  const count = images.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = images.map(({ size, buffer }) => {
    const entry = {
      width: size >= 256 ? 0 : size,
      height: size >= 256 ? 0 : size,
      bytes: buffer.length,
      offset,
    };
    offset += buffer.length;
    return entry;
  });

  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);

  let pos = 6;
  for (const entry of entries) {
    out.writeUInt8(entry.width, pos);
    out.writeUInt8(entry.height, pos + 1);
    out.writeUInt8(0, pos + 2);
    out.writeUInt8(0, pos + 3);
    out.writeUInt16LE(1, pos + 4);
    out.writeUInt16LE(32, pos + 6);
    out.writeUInt32LE(entry.bytes, pos + 8);
    out.writeUInt32LE(entry.offset, pos + 12);
    pos += 16;
  }

  let imgPos = headerSize;
  for (const { buffer } of images) {
    buffer.copy(out, imgPos);
    imgPos += buffer.length;
  }
  return out;
}

const sizes = [16, 32, 48, 180, 192, 512];
const pngBySize = Object.fromEntries(
  await Promise.all(sizes.map(async (size) => [size, await buildCirclePng(size)])),
);

const ico = encodeIco(
  [16, 32, 48].map((size) => ({ size, buffer: pngBySize[size] })),
);

// App Router files — these are what browsers & Google pick up first.
// Replacing src/app/favicon.ico removes the default Vercel triangle.
await writeFile(path.join(root, "src", "app", "favicon.ico"), ico);
await writeFile(path.join(root, "src", "app", "icon.png"), pngBySize[48]);
await writeFile(path.join(root, "src", "app", "apple-icon.png"), pngBySize[180]);

// Public copies for explicit <link> tags + PWA manifest.
await writeFile(path.join(root, "public", "favicon.ico"), ico);
await writeFile(path.join(root, "public", "favicon.png"), pngBySize[48]);
await writeFile(path.join(root, "public", "favicon-32.png"), pngBySize[32]);
await writeFile(path.join(root, "public", "icon.png"), pngBySize[48]);
await writeFile(path.join(root, "public", "icon-48.png"), pngBySize[48]);
await writeFile(path.join(root, "public", "icon-192.png"), pngBySize[192]);
await writeFile(path.join(root, "public", "icon-512.png"), pngBySize[512]);
await writeFile(path.join(root, "public", "apple-icon.png"), pngBySize[180]);

console.log("Generated Rudra lion favicon (16/32/48 ICO + PNG sizes)");

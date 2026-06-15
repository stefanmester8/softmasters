import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'assets/logo/originals');
const outDir = path.join(root, 'public/images/logo');

const sources = {
  iconBrand: path.join(srcDir, 'icon-brand.png'),
  iconDark: path.join(srcDir, 'icon-dark.png'),
  iconLight: path.join(srcDir, 'icon-light.png'),
  wordmarkDark: path.join(srcDir, 'wordmark-dark.png'),
  wordmarkLight: path.join(srcDir, 'wordmark-light.png'),
  wordmarkBrand: path.join(srcDir, 'wordmark-brand.png'),
};

async function cropSquare(input, output, size = 256) {
  const meta = await sharp(input).metadata();
  const side = Math.min(meta.width, meta.height);
  const left = Math.round((meta.width - side) / 2);
  const top = Math.round((meta.height - side) / 2);

  await sharp(input)
    .extract({ left, top, width: side, height: side })
    .resize(size, size)
    .png()
    .toFile(output);
}

async function trimWordmark(input, output, { height = 48, paddingY = 10 } = {}) {
  const trimmed = await sharp(input).trim({ threshold: 12 }).toBuffer();
  const meta = await sharp(trimmed).metadata();

  const targetHeight = height - paddingY * 2;
  const scale = targetHeight / meta.height;
  const scaledWidth = Math.round(meta.width * scale);
  const canvasWidth = Math.max(scaledWidth + 8, 180);

  const resized = await sharp(trimmed)
    .resize(scaledWidth, targetHeight, { fit: 'inside' })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: canvasWidth,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
    .toFile(output);
}

async function trimWordmarkBrand(input, output) {
  const trimmed = await sharp(input).trim({ threshold: 12 }).toBuffer();
  const meta = await sharp(trimmed).metadata();
  const paddingY = Math.round(meta.height * 0.35);
  const canvasHeight = meta.height + paddingY * 2;

  await sharp({
    create: {
      width: meta.width,
      height: canvasHeight,
      channels: 4,
      background: { r: 238, g: 43, b: 71, alpha: 1 },
    },
  })
    .composite([{ input: trimmed, gravity: 'center' }])
    .png()
    .toFile(output);
}

await mkdir(outDir, { recursive: true });

await cropSquare(sources.iconBrand, path.join(outDir, 'icon-brand.png'), 256);
await cropSquare(sources.iconDark, path.join(outDir, 'icon-dark.png'), 256);
await cropSquare(sources.iconLight, path.join(outDir, 'icon-light.png'), 256);

await trimWordmark(sources.wordmarkDark, path.join(outDir, 'wordmark-dark.png'));
await trimWordmark(sources.wordmarkLight, path.join(outDir, 'wordmark-light.png'));
await trimWordmarkBrand(sources.wordmarkBrand, path.join(outDir, 'wordmark-brand.png'));

await sharp(path.join(outDir, 'icon-brand.png'))
  .resize(32, 32)
  .png()
  .toFile(path.join(outDir, 'favicon-32.png'));

await sharp(path.join(outDir, 'icon-brand.png'))
  .resize(180, 180)
  .png()
  .toFile(path.join(outDir, 'apple-touch-icon.png'));

console.log('Logos prepared in public/images/logo/');

import sharp from 'sharp';
import { readdir, stat, readFile, writeFile } from 'fs/promises';
import path from 'path';

const WEDDING_DIR = 'public/images/wedding';
const MAX_WIDTH = 1200;  // Max width in pixels (plenty for mobile wedding site)
const JPEG_QUALITY = 80; // Good quality with significant size reduction

async function optimizeImages() {
  const files = await readdir(WEDDING_DIR);
  const jpgFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Found ${jpgFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of jpgFiles) {
    const filePath = path.join(WEDDING_DIR, file);
    const originalSize = (await stat(filePath)).size;
    totalOriginal += originalSize;

    // Read entire file into memory first to avoid file lock issues
    const inputBuffer = await readFile(filePath);
    const metadata = await sharp(inputBuffer).metadata();

    let pipeline = sharp(inputBuffer).rotate(); // Apply EXIF orientation to pixels

    // Resize if wider than MAX_WIDTH
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    // Compress as JPEG
    const buffer = await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();

    // Write back
    await writeFile(filePath, buffer);

    totalOptimized += buffer.length;
    const savings = ((1 - buffer.length / originalSize) * 100).toFixed(1);
    console.log(
      `${file}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(buffer.length / 1024).toFixed(0)}KB (${savings}% smaller)`
    );
  }

  // Also optimize bg_image.png
  const bgPath = 'public/images/bg_image.png';
  try {
    const bgOrigSize = (await stat(bgPath)).size;
    const bgInput = await readFile(bgPath);
    const bgBuffer = await sharp(bgInput)
      .png({ quality: 80, compressionLevel: 9 })
      .toBuffer();
    await writeFile(bgPath, bgBuffer);
    console.log(
      `\nbg_image.png: ${(bgOrigSize / 1024).toFixed(0)}KB → ${(bgBuffer.length / 1024).toFixed(0)}KB`
    );
    totalOriginal += bgOrigSize;
    totalOptimized += bgBuffer.length;
  } catch (e) {
    // skip if not found
  }

  console.log(`\n✅ Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB`);
  console.log(`   Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(1)}MB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(0)}% reduction)`);
}

optimizeImages().catch(console.error);

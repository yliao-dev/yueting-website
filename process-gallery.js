// process-gallery.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

// === CONFIG ===
const inputDir = path.resolve("public/images/gallery/set1");
const outputPreviewDir = path.resolve("public/images/gallery/preview");
const outputThumbDir = path.resolve("public/images/gallery/thumbs");

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const processImage = async (file) => {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);

  const { size: inputSize } = fs.statSync(inputPath);
  const inputSizeMB = inputSize / 1024 / 1024;
  if (inputSizeMB > 10) {
    console.warn(`⚠️  Skipped (too large > 10MB): ${file}`);
    return;
  }

  // === Preview (same size, just convert to WebP) ===
  ensureDir(outputPreviewDir);
  const previewPath = path.join(outputPreviewDir, `${baseName}.webp`);
  if (!fs.existsSync(previewPath)) {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .withMetadata({ exif: false })
      .toFile(previewPath);
    console.log(`✅ Created preview: ${previewPath}`);
  } else {
    console.log(`⚠️  Skipped (already exists): ${previewPath}`);
  }

  // === Thumbnail (resized) ===
  ensureDir(outputThumbDir);
  const thumbPath = path.join(outputThumbDir, `${baseName}.webp`);
  if (!fs.existsSync(thumbPath)) {
    await sharp(inputPath)
      .resize({ width: 600 })
      .webp({ quality: 80 })
      .withMetadata({ exif: false })
      .toFile(thumbPath);
    console.log(`✅ Created thumbnail: ${thumbPath}`);
  } else {
    console.log(`⚠️  Skipped (already exists): ${thumbPath}`);
  }
};

const run = async () => {
  const files = fs
    .readdirSync(inputDir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f));
  for (const file of files) {
    try {
      await processImage(file);
    } catch (err) {
      console.error(`❌ Failed to process ${file}:`, err);
    }
  }
};

run();

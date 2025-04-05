// process-gallery.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

// === CONFIG ===
const SOURCE_FOLDER_PATH = "public/images/gallery/set1";
const inputDir = path.resolve(SOURCE_FOLDER_PATH + "/source");
const outputPreviewDir = path.resolve(SOURCE_FOLDER_PATH + "/preview");
const outputThumbDir = path.resolve(SOURCE_FOLDER_PATH + "/thumbs");

const MAX_INPUT_MB = 10;
const QUALITY = 80;
const PREVIEW_RESIZED_WIDTH = 1600;
const THUMBNAIL_RESIZED_WIDTH = 600;

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const processImage = async (file) => {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);

  const { size: inputSize } = fs.statSync(inputPath);
  const inputSizeMB = inputSize / 1024 / 1024;
  if (inputSizeMB > MAX_INPUT_MB) {
    console.warn(`⚠️  Skipped (too large > ${MAX_INPUT_MB}MB): ${file}`);
    return;
  }

  // === Preview ===
  ensureDir(outputPreviewDir);
  const previewPath = path.join(outputPreviewDir, `${baseName}.webp`);
  if (!fs.existsSync(previewPath)) {
    await sharp(inputPath)
      .resize({ width: PREVIEW_RESIZED_WIDTH })
      .webp({ quality: QUALITY })
      .toFile(previewPath);
    console.log(`✅ Created preview: ${previewPath}`);
  } else {
    console.log(`⚠️  Skipped (already exists): ${previewPath}`);
  }

  // === Thumbnail ===
  ensureDir(outputThumbDir);
  const thumbPath = path.join(outputThumbDir, `${baseName}.webp`);
  if (!fs.existsSync(thumbPath)) {
    await sharp(inputPath)
      .resize({ width: THUMBNAIL_RESIZED_WIDTH })
      .webp({ quality: QUALITY })
      .toFile(thumbPath);
    console.log(`✅ Created thumbnail: ${thumbPath}. Width: ${thumbWidth}`);
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

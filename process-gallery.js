// process-gallery.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

// === CONFIG ===
const inputDir = path.resolve("public/images/gallery/set1");
const outputPreviewDir = path.resolve("public/images/gallery/preview");
const outputThumbDir = path.resolve("public/images/gallery/thumbs");

const sizes = [
  { width: 1600, outputDir: outputPreviewDir }, // preview
  { width: 600, outputDir: outputThumbDir }, // thumbnail
];

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const processImage = async (file) => {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);

  for (const { width, outputDir } of sizes) {
    ensureDir(outputDir);
    const outputPath = path.join(outputDir, `${baseName}.webp`);

    // Skip if file already exists (duplicate detection)
    if (fs.existsSync(outputPath)) {
      console.log(`⚠️  Skipped (already exists): ${outputPath}`);
      continue;
    }

    const { size: inputSize } = fs.statSync(inputPath);
    const inputSizeMB = inputSize / 1024 / 1024;
    if (inputSizeMB > 5) {
      console.warn(`⚠️  Skipped (too large > 5MB): ${file}`);
      continue;
    }

    await sharp(inputPath)
      .resize({ width })
      .webp({ quality: 80 })
      .withMetadata({ exif: false }) // EXIF stripping
      .toFile(outputPath);

    console.log(`✅ Created: ${outputPath}`);
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

import sharp from "sharp";
import fs from "fs";
import path from "path";

// === CONFIG ===
const inputDir = path.resolve("src/assets/images"); // <- your target folder
const thumbWidth = 800;
const quality = 80;
const maxInputMB = 10;

const validExtensions = [".jpg", ".jpeg", ".png"];

const ensureWebP = async (file) => {
  const ext = path.extname(file);
  if (!validExtensions.includes(ext.toLowerCase())) return;

  const inputPath = path.join(inputDir, file);
  const baseName = path.basename(file, ext);
  const outputPath = path.join(inputDir, `${baseName}.webp`);

  const { size } = fs.statSync(inputPath);
  if (size / 1024 / 1024 > maxInputMB) {
    console.warn(`⚠️  Skipped (too large): ${file}`);
    return;
  }

  if (fs.existsSync(outputPath)) {
    console.log(`⚠️  Skipped (already exists): ${outputPath}`);
    return;
  }

  await sharp(inputPath)
    .resize({ width: thumbWidth })
    .webp({ quality })
    .toFile(outputPath);

  console.log(`✅ Converted: ${file} → ${baseName}.webp`);
};

const run = async () => {
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    try {
      await ensureWebP(file);
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err);
    }
  }
};

run();

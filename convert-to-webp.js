import sharp from "sharp";
import fs from "fs";
import path from "path";

// === CONFIG ===
const inputDir = path.resolve("public/images/portfolio"); // Root folder to process
const thumbWidth = 800;
const quality = 80;
const maxInputMB = 10;

const validExtensions = [".jpg", ".jpeg", ".png"];

const ensureWebP = async (inputPath) => {
  const ext = path.extname(inputPath);
  if (!validExtensions.includes(ext.toLowerCase())) return;

  const baseName = path.basename(inputPath, ext);
  const outputPath = path.join(path.dirname(inputPath), `${baseName}.webp`);

  const { size } = fs.statSync(inputPath);
  if (size / 1024 / 1024 > maxInputMB) {
    console.warn(`⚠️  Skipped (too large): ${inputPath}`);
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

  console.log(`✅ Converted: ${inputPath} → ${outputPath}`);
};

const processFolder = async (folderPath) => {
  const entries = fs.readdirSync(folderPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry.name);

    if (entry.isDirectory()) {
      await processFolder(fullPath); // 🔁 Recurse
    } else if (entry.isFile()) {
      await ensureWebP(fullPath);
    }
  }
};

const run = async () => {
  await processFolder(inputDir);
};

run();

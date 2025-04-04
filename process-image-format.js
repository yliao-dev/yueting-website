import sharp from "sharp";
import fs from "fs";
import path from "path";

// === CONFIG ===
const SOURCE_FOLDER_PATH = "public/images/gallery/set2";
const inputDir = path.resolve(SOURCE_FOLDER_PATH + "/source");
const outputPreviewDir = path.resolve(SOURCE_FOLDER_PATH + "/preview");
const outputThumbDir = path.resolve(SOURCE_FOLDER_PATH + "/thumbs");
const outputMetaFile = path.resolve("src/data/galleryMeta2.json");

const MAX_INPUT_MB = 10;
const QUALITY = 80;
const PREVIEW_RESIZED_WIDTH = 1600;
const THUMBNAIL_RESIZED_WIDTH = 800;

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

// Load existing metadata if available
let metaData = [];
if (fs.existsSync(outputMetaFile)) {
  metaData = JSON.parse(fs.readFileSync(outputMetaFile, "utf-8"));
}
const existingFiles = new Set(metaData.map((entry) => entry.filename));

const processImage = async (file) => {
  if (existingFiles.has(file)) {
    console.warn(`⚠️  Skipped metadata (already exists): ${file}`);
    return;
  }

  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);

  const { size: inputSize } = fs.statSync(inputPath);
  const inputSizeMB = inputSize / 1024 / 1024;
  if (inputSizeMB > MAX_INPUT_MB) {
    console.warn(`⚠️  Skipped (too large > ${MAX_INPUT_MB}MB): ${file}`);
    return;
  }

  const metadata = await sharp(inputPath).metadata();

  metaData.push({
    filename: file,
    title: "",
    location: "",
    date: "",
    tags: [],
    width: metadata.width,
    height: metadata.height,
  });

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
    console.log(`⚠️  Skipped preview (already exists): ${previewPath}`);
  }

  // === Thumbnail ===
  ensureDir(outputThumbDir);
  const thumbPath = path.join(outputThumbDir, `${baseName}.webp`);
  if (!fs.existsSync(thumbPath)) {
    await sharp(inputPath)
      .resize({ width: THUMBNAIL_RESIZED_WIDTH })
      .webp({ quality: QUALITY })
      .toFile(thumbPath);
    console.log(`✅ Created thumbnail: ${thumbPath}`);
  } else {
    console.log(`⚠️  Skipped thumbnail (already exists): ${thumbPath}`);
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

  fs.writeFileSync(outputMetaFile, JSON.stringify(metaData, null, 2));
  console.log(`\n✅ Metadata saved to ${outputMetaFile}`);
};

run();

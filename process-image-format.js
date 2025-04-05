// process-gallery.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

// === LOAD CONFIG ===
const config = JSON.parse(fs.readFileSync("gallery-config.json", "utf-8"));

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const processSet = async ({
  input_source,
  output_preview,
  output_thumbs,
  output_meta,
  preview_width = 1600,
  thumb_width = 800,
  quality = 80,
  max_input_mb = 10,
}) => {
  const inputDir = path.resolve(input_source);
  const outputPreviewDir = path.resolve(output_preview);
  const outputThumbDir = path.resolve(output_thumbs);
  const outputMetaFile = path.resolve(output_meta);

  const metaData = [];

  const files = fs
    .readdirSync(inputDir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);

    const { size: inputSize } = fs.statSync(inputPath);
    const inputSizeMB = inputSize / 1024 / 1024;
    if (inputSizeMB > max_input_mb) {
      console.warn(`⚠️  Skipped (too large > ${max_input_mb}MB): ${file}`);
      continue;
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

    // Preview
    ensureDir(outputPreviewDir);
    const previewPath = path.join(outputPreviewDir, `${baseName}.webp`);
    if (!fs.existsSync(previewPath)) {
      await sharp(inputPath)
        .resize({ width: preview_width })
        .webp({ quality })
        .toFile(previewPath);
      console.log(`✅ Created preview: ${previewPath}`);
    } else {
      console.log(`⚠️  Skipped (exists): ${previewPath}`);
    }

    // Thumbnail
    ensureDir(outputThumbDir);
    const thumbPath = path.join(outputThumbDir, `${baseName}.webp`);
    if (!fs.existsSync(thumbPath)) {
      await sharp(inputPath)
        .resize({ width: thumb_width })
        .webp({ quality })
        .toFile(thumbPath);
      console.log(`✅ Created thumbnail: ${thumbPath}`);
    } else {
      console.log(`⚠️  Skipped (exists): ${thumbPath}`);
    }
  }

  fs.writeFileSync(outputMetaFile, JSON.stringify(metaData, null, 2));
  console.log(`\n✅ Metadata saved to ${outputMetaFile}`);
};

const run = async () => {
  for (const collection of config.collections) {
    await processSet(collection);
  }
};

run();

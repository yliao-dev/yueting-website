import sharp from "sharp";
import fs from "fs";
import path from "path";

const config = JSON.parse(fs.readFileSync("images-config.json", "utf-8"));

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const findSourceFolders = (baseDir) => {
  const folders = [];
  const walk = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "source") {
          folders.push(fullPath);
        } else {
          walk(fullPath);
        }
      }
    }
  };
  walk(baseDir);
  return folders;
};

const processCollection = async (
  sourcePath,
  { preview_width, thumb_width, quality, max_input_mb, output_meta }
) => {
  const projectDir = path.dirname(sourcePath);
  const outputPreviewDir = path.join(projectDir, "preview");
  const outputThumbDir = path.join(projectDir, "thumbs");
  const metaData = [];

  const files = fs
    .readdirSync(sourcePath)
    .filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of files) {
    const inputPath = path.join(sourcePath, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);

    const { size } = fs.statSync(inputPath);
    if (size / 1024 / 1024 > max_input_mb) {
      console.warn(`⚠️  Skipped (too large): ${file}`);
      continue;
    }

    const imageMeta = await sharp(inputPath).metadata();
    metaData.push({
      filename: file,
      title: "",
      location: "",
      date: "",
      tags: [],
      width: imageMeta.width,
      height: imageMeta.height,
    });

    ensureDir(outputPreviewDir);
    const previewPath = path.join(outputPreviewDir, `${baseName}.webp`);
    if (!fs.existsSync(previewPath)) {
      await sharp(inputPath)
        .resize({ width: preview_width })
        .webp({ quality })
        .toFile(previewPath);
      console.log(`✅ Preview: ${previewPath}`);
    } else {
      console.log(`⚠️  Skipped (exists): ${previewPath}`);
    }

    ensureDir(outputThumbDir);
    const thumbPath = path.join(outputThumbDir, `${baseName}.webp`);
    if (!fs.existsSync(thumbPath)) {
      await sharp(inputPath)
        .resize({ width: thumb_width })
        .webp({ quality })
        .toFile(thumbPath);
      console.log(`✅ Thumbnail: ${thumbPath}`);
    } else {
      console.log(`⚠️  Skipped (exists): ${thumbPath}`);
    }
  }

  if (output_meta && output_meta.trim()) {
    ensureDir(path.dirname(output_meta));
    fs.writeFileSync(output_meta, JSON.stringify(metaData, null, 2));
    console.log(`✅ Meta written to: ${output_meta}`);
  }
};

const run = async () => {
  const mode = config.mode;
  const entries = config[mode] || [];

  for (const collection of entries) {
    const { input_source } = collection;
    const folders = findSourceFolders(input_source);
    for (const folder of folders) {
      console.log(`\n📂 Processing: ${folder}`);
      await processCollection(folder, collection);
    }
  }
};

run();

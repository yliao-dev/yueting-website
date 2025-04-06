import fs from "fs";
import path from "path";

// === Load Config ===
const configPath = path.resolve("images-config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];

const renameImagesInFolder = (folderPath) => {
  const files = fs
    .readdirSync(folderPath)
    .filter((file) =>
      validExtensions.includes(path.extname(file).toLowerCase())
    )
    .sort();

  files.forEach((file, index) => {
    const ext = path.extname(file);
    const newName = `${String(index + 1).padStart(3, "0")}${ext}`;
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, newName);

    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Renamed: ${file} → ${newName}`);
    } else {
      console.log(`⚠️  Skipped (already named): ${file}`);
    }
  });
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

const run = () => {
  const mode = config.mode;
  const targets = config[mode] || [];

  for (const item of targets) {
    const sourceFolders = findSourceFolders(item.input_source);
    for (const folder of sourceFolders) {
      if (fs.existsSync(folder)) {
        console.log(`\n📂 Renaming images in: ${folder}`);
        renameImagesInFolder(folder);
      } else {
        console.warn(`❌ Folder does not exist: ${folder}`);
      }
    }
  }
};

run();

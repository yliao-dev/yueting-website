// process-image-names.js
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

// Go through each collection input_source folder
for (const collection of config.collections) {
  const folderPath = path.resolve(collection.input_source);
  if (fs.existsSync(folderPath)) {
    console.log(`\n📂 Processing folder: ${folderPath}`);
    renameImagesInFolder(folderPath);
  } else {
    console.warn(`❌ Folder does not exist: ${folderPath}`);
  }
}

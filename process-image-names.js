import fs from "fs";
import path from "path";

const rootFolder = path.resolve("public/images/gallery");
const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];

const renameImagesInFolder = (folderPath) => {
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return validExtensions.includes(ext);
    })
    .sort();

  files.forEach((file, index) => {
    const ext = path.extname(file).toLowerCase();
    const newName = `${String(index + 1).padStart(3, "0")}${ext}`;
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, newName);

    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ ${path.basename(folderPath)}: ${file} → ${newName}`);
    }
  });
};

const walkFolders = (baseDir) => {
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  renameImagesInFolder(baseDir); // Process current folder

  entries.forEach((entry) => {
    const fullPath = path.join(baseDir, entry.name);
    if (entry.isDirectory()) {
      walkFolders(fullPath); // Recurse into subfolder
    }
  });
};

// Run it
walkFolders(rootFolder);

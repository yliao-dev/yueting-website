const { execSync } = require("child_process");

const mode = process.argv[2];

if (!mode) {
  console.error("❌ Please specify a mode (e.g. blog, gallery, portfolio)");
  process.exit(1);
}

try {
  execSync(`node process-images-rename.js ${mode}`, { stdio: "inherit" });
  execSync(`node process-images-reformat.js ${mode}`, { stdio: "inherit" });
  console.log(`✅ All done for: ${mode}`);
} catch (err) {
  console.error("❌ Failed to run image update scripts:", err);
}

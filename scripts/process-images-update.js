import { execSync } from "child_process";

const mode = process.argv[2];

if (!mode) {
  console.error("❌ Please specify a mode (e.g. thoughts, gallery, portfolio)");
  process.exit(1);
}

try {
  execSync(`node ./scripts/process-images-rename.js ${mode}`, {
    stdio: "inherit",
  });
  execSync(`node ./scripts/process-images-reformat.js ${mode}`, {
    stdio: "inherit",
  });
  console.log(`✅ All done for: ${mode}`);
} catch (err) {
  console.error("❌ Failed to run image update scripts:", err);
}

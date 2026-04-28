import { readFileSync, existsSync } from "node:fs";
import { readdirSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const docsRoot = join(repoRoot, "docs", "ai");
const l1Root = join(docsRoot, "L1");
const deepDiveRoot = join(l1Root, "L2");
const rootFiles = ["AGENTS.md", "CLAUDE.md", "docs/ai/L0_repo_card.md"];
const requiredL1 = [
  "01_setup.md",
  "02_architecture.md",
  "03_code_map.md",
  "04_conventions.md",
  "05_workflows.md",
  "06_interfaces.md",
  "07_gotchas.md",
  "08_security.md",
];

const requiredDeepDives = [
  "entry_points_and_optional_dependencies.md",
  "realtime_integrations.md",
  "demo_app_and_ci_workspace.md",
  "theming.md",
  "voice_components.md",
  "chat_components.md",
  "video_components.md",
  "session_integration.md",
  "biomarker_components.md",
  "_index.md",
];

const errors = [];

function walkMarkdown(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walkMarkdown(full));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

for (const rel of rootFiles) {
  if (!existsSync(join(repoRoot, rel))) {
    errors.push(`Missing required file: ${rel}`);
  }
}

for (const rel of requiredL1) {
  const full = join(l1Root, rel);
  if (!existsSync(full)) {
    errors.push(`Missing required L1 file: docs/ai/L1/${rel}`);
  }
}

const actualL1 = readdirSync(l1Root, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
  .map((entry) => entry.name)
  .sort();

if (actualL1.length !== 8) {
  errors.push(`Expected exactly 8 L1 markdown files, found ${actualL1.length}`);
}

for (const rel of requiredDeepDives) {
  const full = join(deepDiveRoot, rel);
  if (!existsSync(full)) {
    errors.push(`Missing required deep dive: docs/ai/L1/L2/${rel}`);
  }
}

const packageJson = JSON.parse(
  readFileSync(join(repoRoot, "package.json"), "utf8"),
);
const uikitPackageJson = JSON.parse(
  readFileSync(join(repoRoot, "packages", "uikit", "package.json"), "utf8"),
);
const knownScripts = new Set([
  ...Object.keys(packageJson.scripts ?? {}),
  ...Object.keys(uikitPackageJson.scripts ?? {}),
]);

const markdownFiles = walkMarkdown(docsRoot);
const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;
const inlineCodePattern = /`([^`]+)`/g;

for (const file of markdownFiles) {
  const text = readFileSync(file, "utf8");
  const relativeFile = file.slice(repoRoot.length + 1);

  let match;
  while ((match = linkPattern.exec(text))) {
    const target = match[1];
    if (target.includes("://") || target.startsWith("#")) continue;
    const resolved = resolve(dirname(file), target);
    if (!existsSync(resolved)) {
      errors.push(`Broken relative link in ${relativeFile}: ${target}`);
    }
  }

  while ((match = inlineCodePattern.exec(text))) {
    const token = match[1].trim();
    if (
      token.startsWith("pnpm ") ||
      token.startsWith("npm ") ||
      token.startsWith("yarn ")
    ) {
      const scriptMatch = token.match(/pnpm(?:\s+run)?\s+([a-zA-Z0-9:_-]+)/);
      if (scriptMatch) {
        const scriptName = scriptMatch[1];
        if (
          !token.includes("--filter") &&
          !["install", "add", "build", "dev", "lint", "typecheck"].includes(scriptName) &&
          !knownScripts.has(scriptName)
        ) {
          errors.push(`Unknown script reference in ${relativeFile}: ${token}`);
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error("AI docs validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("AI docs validation passed.");

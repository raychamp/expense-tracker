// PostToolUse hook: lint the edited .js/.jsx file with ESLint.
// Exits 2 with ESLint output on stderr so Claude sees and fixes lint errors.
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";

const input = JSON.parse(readFileSync(0, "utf8") || "{}");
const file = input.tool_response?.filePath ?? input.tool_input?.file_path;
if (!file || !/\.(m?js|jsx)$/.test(file)) process.exit(0);

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const eslintBin = path.join(projectDir, "node_modules", "eslint", "bin", "eslint.js");

const result = spawnSync(process.execPath, [eslintBin, file], {
  cwd: projectDir,
  encoding: "utf8",
});

if (result.status === 1) {
  process.stderr.write(`ESLint found problems in ${file}:\n${result.stdout}${result.stderr}`);
  process.exit(2);
}
process.exit(0);

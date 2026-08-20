import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, extname, resolve, relative } from "node:path";

const root = process.cwd();
const publicRoots = ["README.md", "README.en.md", "docs", "journal", "experiments"];
const errors = [];
const markdownFiles = [];

function walk(path) {
	if (!existsSync(path)) return;
	const stat = statSync(path);
	if (stat.isFile()) {
		if (extname(path).toLowerCase() === ".md") markdownFiles.push(path);
		return;
	}
	for (const entry of readdirSync(path)) {
		if (entry === ".git" || entry === "node_modules") continue;
		walk(join(path, entry));
	}
}

for (const entry of publicRoots) walk(join(root, entry));

function display(path) {
	return relative(root, path).replaceAll("\\", "/") || ".";
}

function report(path, message) {
	errors.push(`${display(path)}: ${message}`);
}

function isExternal(target) {
	return target.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("//");
}

function localTarget(target) {
	const withoutAnchor = target.split(/[?#]/, 1)[0];
	return withoutAnchor.replace(/^<|>$/g, "");
}

const markdownLink = /!?(?:\[[^\]]*\])\((<[^>]+>|[^)\s]+)(?:\s+[^)]*)?\)/g;
const privatePath = /(?:^|[\s("'`])(?:[A-Za-z]:[\\/]|\/(?:Users|home)[\\/])|codex-clipboard/i;

for (const file of markdownFiles) {
	const text = readFileSync(file, "utf8");
	if (privatePath.test(text)) report(file, "contains a machine-local path or clipboard filename");

	for (const match of text.matchAll(markdownLink)) {
		const target = match[1].replace(/^<|>$/g, "");
		if (isExternal(target)) continue;
		const pathTarget = localTarget(target);
		if (!pathTarget) continue;
		const candidate = resolve(dirname(file), pathTarget);
		if (!existsSync(candidate)) report(file, `broken local link: ${target}`);
	}
}

const requiredFiles = [
	"docs/source-index.md",
	"docs/source-index.en.md",
	"docs/glossary.md",
	"docs/glossary.en.md",
	"docs/pi-overview.en.md",
	"docs/architecture.en.md",
	"docs/agent-core.en.md",
	"docs/extensions.en.md",
	"docs/evals.en.md",
	"docs/contribution-playbook.en.md",
];
for (const file of requiredFiles) {
	if (!existsSync(join(root, file))) errors.push(`${file}: required file is missing`);
}

const chineseIndex = readFileSync(join(root, "docs/README.md"), "utf8");
const englishIndex = readFileSync(join(root, "docs/README.en.md"), "utf8");
for (const [name, text] of [
	["docs/README.md", chineseIndex],
	["docs/README.en.md", englishIndex],
]) {
	for (const required of name.endsWith(".en.md") ? ["source-index.en.md", "glossary.en.md"] : ["source-index.md", "glossary.md"]) {
		if (!text.includes(`(${required})`)) errors.push(`${name}: missing index link to ${required}`);
	}
}

const sourceIndex = readFileSync(join(root, "docs/source-index.md"), "utf8");
const sourceIndexEn = readFileSync(join(root, "docs/source-index.en.md"), "utf8");
for (const [name, text] of [["docs/source-index.md", sourceIndex], ["docs/source-index.en.md", sourceIndexEn]]) {
	if (!/b7bb00b936dbe21b8e160b3e89efdec361846699/.test(text)) {
		errors.push(`${name}: missing reference source revision`);
	}
}

if (errors.length > 0) {
	console.error(errors.map((error) => `- ${error}`).join("\n"));
	process.exit(1);
}

console.log(`Documentation checks passed: ${markdownFiles.length} Markdown files, local links and public hygiene verified.`);

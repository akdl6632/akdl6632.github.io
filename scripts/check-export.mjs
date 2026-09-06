import { existsSync, readFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';

const output = resolve('dist/client');
const html = readFileSync(resolve(output, 'index.html'), 'utf8');
const failures = [];
const ids = new Set(
  [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
);
const localResources = new Set();

if (!/<html[^>]+lang="ko"/.test(html))
  failures.push('The document language must be Korean.');
if (!html.includes('김태현 | 게임 클라이언트 프로그래머'))
  failures.push('The portfolio title is missing.');
if (
  html.includes('Untitled site') ||
  html.includes('Your site is taking shape')
)
  failures.push('Starter placeholder content remains.');

for (const [, raw] of html.matchAll(/\b(?:src|href|poster)="([^"]+)"/g)) {
  if (raw.startsWith('#')) {
    if (!ids.has(raw.slice(1))) failures.push(`Missing anchor: ${raw}`);
    continue;
  }
  if (/^(?:https?:|mailto:|data:|tel:|\/\/)/.test(raw)) continue;
  const pathname = decodeURIComponent(raw.split(/[?#]/)[0]);
  const file = resolve(
    output,
    `.${pathname.startsWith('/') ? pathname : `/${pathname}`}`,
  );
  if (file !== output && !file.startsWith(`${output}${sep}`)) {
    failures.push(`Resource escapes output directory: ${raw}`);
    continue;
  }
  const target = pathname.endsWith('/') ? resolve(file, 'index.html') : file;
  localResources.add(target);
  if (!existsSync(target)) failures.push(`Missing local resource: ${raw}`);
}

for (const asset of [
  'portfolio-wanted.pptx',
  'images/wanted-gameplay.webp',
  'images/wanted-first-person.webp',
  'images/directx-poster.webp',
  'videos/directx-demo.mp4',
  'images/snow-brothers.webp',
  'images/pollen-search.webp',
]) {
  if (!existsSync(resolve(output, asset)))
    failures.push(`Required portfolio asset is missing: ${asset}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `Verified Korean metadata, ${ids.size} anchors and ${localResources.size} local resources.`,
  );
}

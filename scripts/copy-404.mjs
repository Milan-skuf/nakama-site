// Vercel: для путей, не совпавших ни с одним rewrite и ни с одним реальным файлом,
// отдаётся dist/404.html с настоящим HTTP-статусом 404 (в отличие от общего rewrite на index.html,
// который всегда возвращает 200). Файл идентичен index.html — тот же бандл SPA грузится и рендерит
// маршрут "*" (NotFoundPage) внутри обычных Navbar/Footer.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const src = path.join(distDir, 'index.html');
const dest = path.join(distDir, '404.html');

fs.copyFileSync(src, dest);
console.log('Copied index.html -> 404.html for real HTTP 404 responses on Vercel');

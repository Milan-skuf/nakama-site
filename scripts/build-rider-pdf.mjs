// Генерирует статический public/files/nakama-rider.pdf.
// Запуск: node scripts/build-rider-pdf.mjs
// Перезапускать при изменении текста райдера ниже или контактов в src/data/content.ts.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { jsPDF } from 'jspdf';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MARGIN_X = 18;

const CONTACT_INFO = {
  managerName: 'Анна',
  phone: '8-906-980-65-25',
  telegram: 'https://t.me/nakama_band',
  geography: 'База — Новокузнецк, работаем в Новосибирске и по всей России',
};

function loadFontBase64(fileName) {
  const buf = fs.readFileSync(path.join(ROOT, 'public', 'fonts', fileName));
  return buf.toString('base64');
}

function registerCyrillicFont(doc) {
  doc.addFileToVFS('Roboto-Regular.ttf', loadFontBase64('Roboto-Regular.ttf'));
  doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');
  doc.addFileToVFS('Roboto-Bold.ttf', loadFontBase64('Roboto-Bold.ttf'));
  doc.addFont('Roboto-Bold.ttf', 'Roboto', 'bold');
  doc.setFont('Roboto', 'normal');
}

const doc = new jsPDF({ unit: 'mm', format: 'a4' });
registerCyrillicFont(doc);

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const contentWidth = pageWidth - MARGIN_X * 2;
let y = 20;

const ensureSpace = (needed) => {
  if (y + needed > pageHeight - 20) {
    doc.addPage();
    y = 20;
  }
};

const drawSectionTitle = (text) => {
  ensureSpace(12);
  doc.setFont('Roboto', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(184, 130, 40);
  doc.text(text, MARGIN_X, y);
  y += 7;
};

const drawBulletList = (items) => {
  doc.setFont('Roboto', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 28, 32);
  items.forEach((item) => {
    const lines = doc.splitTextToSize(`•  ${item}`, contentWidth - 4);
    ensureSpace(lines.length * 5.5 + 2);
    doc.text(lines, MARGIN_X, y);
    y += lines.length * 5.5 + 2;
  });
  y += 3;
};

const drawParagraph = (text) => {
  doc.setFont('Roboto', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 28, 32);
  const lines = doc.splitTextToSize(text, contentWidth);
  ensureSpace(lines.length * 5.5 + 2);
  doc.text(lines, MARGIN_X, y);
  y += lines.length * 5.5 + 6;
};

// Header
doc.setFont('Roboto', 'bold');
doc.setFontSize(20);
doc.setTextColor(20, 18, 24);
doc.text('NAKAMA — Технический райдер', MARGIN_X, y);
y += 8;

doc.setFont('Roboto', 'normal');
doc.setFontSize(10);
doc.setTextColor(90, 90, 95);
const introLines = doc.splitTextToSize(
  'Требования по звуку и сцене для проведения живого выступления кавер-группы NAKAMA.',
  contentWidth
);
doc.text(introLines, MARGIN_X, y);
y += introLines.length * 5 + 3;

doc.setDrawColor(210, 205, 195);
doc.line(MARGIN_X, y, pageWidth - MARGIN_X, y);
y += 8;

drawSectionTitle('Состав на сцене');
drawBulletList([
  '10 артистов: 6 вокалистов (мужской и женский состав) + ритм-секция — барабаны, бас-гитара, электро- и акустическая гитара, клавишные',
  'Штатный звукорежиссёр группы — управляет цифровым пультом на протяжении всего выступления',
]);

drawSectionTitle('Сцена и площадка');
drawBulletList([
  'Минимальный размер сцены — от 5×4 м',
  'Бэклайн — по согласованному списку, адаптируется под возможности площадки',
  'Собственный In-Ear мониторинг — привозим с собой',
]);

drawSectionTitle('Звук');
drawBulletList([
  'Персональная настройка микрофонного парка вокального ансамбля (6 вокалистов)',
  'Цифровой стейджбокс / мультикор для коммутации',
  'Контроль комфортной громкости в зале — драйв на танцполе без перегрузки у столов',
]);

drawSectionTitle('Тайминг');
drawBulletList([
  'Прибытие команды на площадку — за 3–4 часа до начала мероприятия',
  'Полная готовность и тишина в зале — строго за 2 часа до сбора первых гостей',
]);

drawParagraph('Полная версия документа с точным списком оборудования передаётся при согласовании договора.');

// Contact footer
ensureSpace(26);
doc.setDrawColor(210, 205, 195);
doc.line(MARGIN_X, y, pageWidth - MARGIN_X, y);
y += 8;
doc.setFont('Roboto', 'bold');
doc.setFontSize(11);
doc.setTextColor(20, 18, 24);
doc.text('Контакты для организаторов', MARGIN_X, y);
y += 6;
doc.setFont('Roboto', 'normal');
doc.setFontSize(10);
doc.setTextColor(70, 68, 72);
doc.text(`Менеджер ${CONTACT_INFO.managerName}: ${CONTACT_INFO.phone}`, MARGIN_X, y);
y += 5;
doc.text(`Telegram: ${CONTACT_INFO.telegram}`, MARGIN_X, y);
y += 5;
doc.text(CONTACT_INFO.geography, MARGIN_X, y);

// Page numbers
const pageCount = doc.getNumberOfPages();
for (let i = 1; i <= pageCount; i += 1) {
  doc.setPage(i);
  doc.setFont('Roboto', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(150, 145, 140);
  doc.text(`${i} / ${pageCount}`, pageWidth - MARGIN_X, pageHeight - 10, { align: 'right' });
}

const outDir = path.join(ROOT, 'public', 'files');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'nakama-rider.pdf');
fs.writeFileSync(outPath, Buffer.from(doc.output('arraybuffer')));
console.log('Written:', outPath);

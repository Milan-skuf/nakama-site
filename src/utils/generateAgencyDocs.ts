import { jsPDF } from 'jspdf';
import { CONTACT_INFO, PACKAGES_DATA, INCLUDED_IN_ALL_PACKAGES } from '../data/content';
import { registerCyrillicFont, stampPageNumbers } from './pdfFonts';

const MARGIN_X = 18;

interface DocContext {
  doc: jsPDF;
  pageWidth: number;
  pageHeight: number;
  contentWidth: number;
  y: number;
}

async function createDoc(): Promise<DocContext> {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  await registerCyrillicFont(doc);
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  return { doc, pageWidth, pageHeight, contentWidth: pageWidth - MARGIN_X * 2, y: 20 };
}

function ensureSpace(ctx: DocContext, needed: number): void {
  if (ctx.y + needed > ctx.pageHeight - 20) {
    ctx.doc.addPage();
    ctx.y = 20;
  }
}

function drawHeader(ctx: DocContext, title: string, subtitle: string): void {
  const { doc } = ctx;
  doc.setFont('Roboto', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(20, 18, 24);
  doc.text(`NAKAMA — ${title}`, MARGIN_X, ctx.y);
  ctx.y += 8;

  doc.setFont('Roboto', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(90, 90, 95);
  const lines = doc.splitTextToSize(subtitle, ctx.contentWidth);
  doc.text(lines, MARGIN_X, ctx.y);
  ctx.y += lines.length * 5 + 3;

  doc.setDrawColor(210, 205, 195);
  doc.line(MARGIN_X, ctx.y, ctx.pageWidth - MARGIN_X, ctx.y);
  ctx.y += 8;
}

function drawSectionTitle(ctx: DocContext, text: string): void {
  ensureSpace(ctx, 12);
  const { doc } = ctx;
  doc.setFont('Roboto', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(184, 130, 40);
  doc.text(text, MARGIN_X, ctx.y);
  ctx.y += 7;
}

function drawBulletList(ctx: DocContext, items: string[]): void {
  const { doc } = ctx;
  doc.setFont('Roboto', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 28, 32);

  items.forEach((item) => {
    const lines = doc.splitTextToSize(`•  ${item}`, ctx.contentWidth - 4);
    ensureSpace(ctx, lines.length * 5.5 + 2);
    doc.text(lines, MARGIN_X, ctx.y);
    ctx.y += lines.length * 5.5 + 2;
  });
  ctx.y += 3;
}

function drawParagraph(ctx: DocContext, text: string): void {
  const { doc } = ctx;
  doc.setFont('Roboto', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 28, 32);
  const lines = doc.splitTextToSize(text, ctx.contentWidth);
  ensureSpace(ctx, lines.length * 5.5 + 2);
  doc.text(lines, MARGIN_X, ctx.y);
  ctx.y += lines.length * 5.5 + 6;
}

function drawContactFooter(ctx: DocContext): void {
  ensureSpace(ctx, 26);
  const { doc } = ctx;
  doc.setDrawColor(210, 205, 195);
  doc.line(MARGIN_X, ctx.y, ctx.pageWidth - MARGIN_X, ctx.y);
  ctx.y += 8;

  doc.setFont('Roboto', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(20, 18, 24);
  doc.text('Контакты для организаторов', MARGIN_X, ctx.y);
  ctx.y += 6;

  doc.setFont('Roboto', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(70, 68, 72);
  doc.text(`Менеджер ${CONTACT_INFO.managerName}: ${CONTACT_INFO.phone}`, MARGIN_X, ctx.y);
  ctx.y += 5;
  doc.text(`Telegram: ${CONTACT_INFO.telegram}`, MARGIN_X, ctx.y);
  ctx.y += 5;
  doc.text(CONTACT_INFO.geography, MARGIN_X, ctx.y);
}

function finish(ctx: DocContext, fileName: string): void {
  drawContactFooter(ctx);
  stampPageNumbers(ctx.doc, MARGIN_X);
  ctx.doc.save(fileName);
}

export async function downloadTechnicalRiderPdf(): Promise<void> {
  const ctx = await createDoc();
  drawHeader(
    ctx,
    'Технический райдер',
    'Требования по звуку и сцене для проведения живого выступления кавер-группы NAKAMA.'
  );

  drawSectionTitle(ctx, 'Состав на сцене');
  drawBulletList(ctx, [
    '10 артистов: 6 вокалистов (мужской и женский состав) + ритм-секция — барабаны, бас-гитара, электро- и акустическая гитара, клавишные',
    'Штатный звукорежиссёр группы — управляет цифровым пультом на протяжении всего выступления',
  ]);

  drawSectionTitle(ctx, 'Сцена и площадка');
  drawBulletList(ctx, [
    'Минимальный размер сцены — от 5×4 м',
    'Бэклайн — по согласованному списку, адаптируется под возможности площадки',
    'Собственный In-Ear мониторинг — привозим с собой',
  ]);

  drawSectionTitle(ctx, 'Звук');
  drawBulletList(ctx, [
    'Персональная настройка микрофонного парка вокального ансамбля (6 вокалистов)',
    'Цифровой стейджбокс / мультикор для коммутации',
    'Контроль комфортной громкости в зале — драйв на танцполе без перегрузки у столов',
  ]);

  drawSectionTitle(ctx, 'Тайминг');
  drawBulletList(ctx, [
    'Прибытие команды на площадку — за 3–4 часа до начала мероприятия',
    'Полная готовность и тишина в зале — строго за 2 часа до сбора первых гостей',
  ]);

  drawParagraph(ctx, 'Полная версия документа с точным списком оборудования передаётся при согласовании договора.');

  finish(ctx, 'NAKAMA_Technical_Rider.pdf');
}

export async function downloadHospitalityRiderPdf(): Promise<void> {
  const ctx = await createDoc();
  drawHeader(
    ctx,
    'Бытовой райдер',
    'Требования к гримёрной комнате, питанию и логистике для команды NAKAMA на выезде.'
  );

  drawSectionTitle(ctx, 'Гримёрная комната');
  drawBulletList(ctx, [
    'Отдельная тёплая гримёрная комната',
    'Зеркало в полный рост, отпариватель',
    'Питьевая вода, чай/кофе',
  ]);

  drawSectionTitle(ctx, 'Питание');
  drawBulletList(ctx, [
    'Горячее питание на 11 человек в день выступления (10 артистов + звукорежиссёр)',
  ]);

  drawSectionTitle(ctx, 'Логистика');
  drawBulletList(ctx, [
    'Организованный трансфер и, при необходимости, проживание для 11 человек',
    'Маршрут и бытовые расходы фиксируются в смете до подписания договора',
  ]);

  drawParagraph(ctx, 'Полная версия документа передаётся при согласовании договора вместе с техническим райдером.');

  finish(ctx, 'NAKAMA_Hospitality_Rider.pdf');
}

export async function downloadPriceListPdf(): Promise<void> {
  const ctx = await createDoc();
  drawHeader(
    ctx,
    'Прайс-лист',
    'Официальные тарифы на живое выступление кавер-группы NAKAMA. Фиксированная смета, без «цены по запросу».'
  );

  PACKAGES_DATA.forEach((pkg) => {
    drawSectionTitle(ctx, `«${pkg.title}» — ${pkg.price}`);
    ensureSpace(ctx, 6);
    ctx.doc.setFont('Roboto', 'normal');
    ctx.doc.setFontSize(10);
    ctx.doc.setTextColor(90, 90, 95);
    ctx.doc.text(pkg.duration, MARGIN_X, ctx.y);
    ctx.y += 6;
    drawBulletList(ctx, pkg.features);
    drawParagraph(ctx, `Подходит для: ${pkg.suitableFor}`);
  });

  drawSectionTitle(ctx, 'Что входит в оба пакета');
  drawBulletList(ctx, INCLUDED_IN_ALL_PACKAGES.map((item) => `${item.title} — ${item.desc}`));

  drawSectionTitle(ctx, 'Условия оплаты');
  drawBulletList(ctx, [
    '20% предоплата при подписании договора — фиксирует дату',
    '80% остаток — в день мероприятия',
    'Официальный договор, безналичный расчёт для юридических лиц',
  ]);

  finish(ctx, 'NAKAMA_Price_List.pdf');
}

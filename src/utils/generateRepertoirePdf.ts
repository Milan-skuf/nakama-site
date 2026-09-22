import { jsPDF } from 'jspdf';
import { TrackItem } from '../types';
import { CATEGORY_LABELS, CONTACT_INFO } from '../data/content';
import { registerCyrillicFont, stampPageNumbers } from './pdfFonts';

const CATEGORY_ORDER = Object.keys(CATEGORY_LABELS) as TrackItem['category'][];

export async function downloadRepertoirePdf(tracks: TrackItem[]): Promise<void> {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  await registerCyrillicFont(doc);

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 18;
  const contentWidth = pageWidth - marginX * 2;
  let y = 20;

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  // Header
  doc.setFont('Roboto', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(20, 18, 24);
  doc.text('NAKAMA — Репертуар', marginX, y);
  y += 8;

  doc.setFont('Roboto', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(90, 90, 95);
  const introLines = doc.splitTextToSize(
    `10 человек на сцене, 6 вокалистов, 100% живой звук без плейбеков. ${tracks.length} треков в фирменном многоголосом прочтении.`,
    contentWidth
  );
  doc.text(introLines, marginX, y);
  y += introLines.length * 5 + 3;

  doc.setDrawColor(210, 205, 195);
  doc.line(marginX, y, pageWidth - marginX, y);
  y += 8;

  CATEGORY_ORDER.forEach((categoryKey) => {
    const categoryTracks = tracks.filter((t) => t.category === categoryKey);
    if (categoryTracks.length === 0) return;

    ensureSpace(14);
    doc.setFont('Roboto', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(184, 130, 40);
    doc.text(CATEGORY_LABELS[categoryKey], marginX, y);
    y += 7;

    doc.setFont('Roboto', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(30, 28, 32);

    categoryTracks.forEach((track, idx) => {
      ensureSpace(7);
      const line = `${idx + 1}. ${track.title} — ${track.originalArtist}`;
      doc.text(line, marginX, y);

      const meta = [track.tag, track.duration].filter(Boolean).join(' · ');
      if (meta) {
        doc.setTextColor(130, 125, 120);
        doc.setFontSize(9);
        doc.text(meta, pageWidth - marginX, y, { align: 'right' });
        doc.setFontSize(10.5);
        doc.setTextColor(30, 28, 32);
      }
      y += 6;
    });

    y += 4;
  });

  // Contact footer block
  ensureSpace(24);
  doc.setDrawColor(210, 205, 195);
  doc.line(marginX, y, pageWidth - marginX, y);
  y += 8;

  doc.setFont('Roboto', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(20, 18, 24);
  doc.text('Контакты для бронирования', marginX, y);
  y += 6;

  doc.setFont('Roboto', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(70, 68, 72);
  doc.text(`Менеджер ${CONTACT_INFO.managerName}: ${CONTACT_INFO.phone}`, marginX, y);
  y += 5;
  doc.text(`Telegram: ${CONTACT_INFO.telegram}`, marginX, y);
  y += 5;
  doc.text(CONTACT_INFO.geography, marginX, y);

  stampPageNumbers(doc, marginX);

  doc.save('NAKAMA_Repertoire.pdf');
}

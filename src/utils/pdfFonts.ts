import { jsPDF } from 'jspdf';

const FONT_REGULAR_URL = '/fonts/Roboto-Regular.ttf';
const FONT_BOLD_URL = '/fonts/Roboto-Bold.ttf';

async function fetchFontAsBase64(url: string): Promise<string> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

/**
 * Roboto (Apache License 2.0) поддерживает кириллицу — стандартные шрифты jsPDF её не содержат.
 */
export async function registerCyrillicFont(doc: jsPDF): Promise<void> {
  const [regularBase64, boldBase64] = await Promise.all([
    fetchFontAsBase64(FONT_REGULAR_URL),
    fetchFontAsBase64(FONT_BOLD_URL),
  ]);

  doc.addFileToVFS('Roboto-Regular.ttf', regularBase64);
  doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');

  doc.addFileToVFS('Roboto-Bold.ttf', boldBase64);
  doc.addFont('Roboto-Bold.ttf', 'Roboto', 'bold');

  doc.setFont('Roboto', 'normal');
}

export function stampPageNumbers(doc: jsPDF, marginX: number): void {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i += 1) {
    doc.setPage(i);
    doc.setFont('Roboto', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(150, 145, 140);
    doc.text(`${i} / ${pageCount}`, pageWidth - marginX, pageHeight - 10, { align: 'right' });
  }
}

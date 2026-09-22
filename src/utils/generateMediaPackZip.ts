import JSZip from 'jszip';
import { CONTENT_IMAGES } from '../content';
import { CONTACT_INFO } from '../data/content';

const PHOTOS: { file: string; src: string }[] = [
  { file: 'photo-01-glavnyi-sostav.jpg', src: CONTENT_IMAGES.dsc00649 },
  { file: 'photo-02-vokalnyi-ansambl.jpg', src: CONTENT_IMAGES.dsc09924 },
  { file: 'photo-03-scenicheskii-obraz.jpg', src: CONTENT_IMAGES.dsc00684 },
  { file: 'photo-04-zhivye-instrumenty.jpg', src: CONTENT_IMAGES.dsc00852 },
  { file: 'photo-05-koncertnyi-draiv.jpg', src: CONTENT_IMAGES.dsc09942 },
  { file: 'photo-06-vokalnoe-trio-live.jpg', src: CONTENT_IMAGES.vocalTrioLive },
  { file: 'photo-07-syomochnaya-gruppa.jpg', src: CONTENT_IMAGES.dsc09927 },
  { file: 'photo-08-komanda.jpg', src: CONTENT_IMAGES.dsc00204 },
];

function buildReadme(siteOrigin: string): string {
  return (
    `МЕДИАПАКЕТ КАВЕР-ГРУППЫ NAKAMA\n\n` +
    `В архиве: ${PHOTOS.length} фото в высоком разрешении для афиш, КП и публикаций.\n\n` +
    `Видеозаписи выступлений (промо, backstage, живые записи) — не входят в архив из-за размера,\n` +
    `смотрите и скачивайте напрямую здесь: ${siteOrigin}/video\n\n` +
    `Контакты для организаторов:\n` +
    `Менеджер ${CONTACT_INFO.managerName}: ${CONTACT_INFO.phone}\n` +
    `Telegram: ${CONTACT_INFO.telegram}\n` +
    `География: ${CONTACT_INFO.geography}\n`
  );
}

export async function downloadMediaPackZip(): Promise<void> {
  const zip = new JSZip();
  const photosFolder = zip.folder('photos');

  const blobs = await Promise.all(
    PHOTOS.map(async (photo) => {
      const response = await fetch(photo.src);
      return { file: photo.file, blob: await response.blob() };
    })
  );

  blobs.forEach(({ file, blob }) => {
    photosFolder?.file(file, blob);
  });

  const siteOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://nakama-band.ru';
  zip.file('README.txt', buildReadme(siteOrigin));

  const archiveBlob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(archiveBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'NAKAMA_Media_Pack.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Папка для медиа-контента и оригинальных фотографий группы NAKAMA (src/content/)
 * Автоматически подгружает и подключает оригинальные файлы (DSC00649.jpg, DSC09924.jpg, DSC00684.jpg, DSC00852.jpg, DSC09942.jpg)
 */
import heroDefault from './DSC00649.jpg';

// Динамический импорт всех изображений из папки content
const imagesMap = import.meta.glob<{ default: string }>('./*.{jpg,jpeg,png,webp,svg,JPG,JPEG,PNG,WEBP}', {
  eager: true,
});

export const getImage = (filename: string): string => {
  const targetLower = filename.toLowerCase();
  
  // Прямой поиск по точному совпадению или регистронезависимому имени
  for (const [path, module] of Object.entries(imagesMap)) {
    const baseName = path.replace(/^\.\//, '').toLowerCase();
    if (baseName === targetLower) {
      if (module && typeof module === 'object' && 'default' in module) {
        return module.default;
      }
      return module as unknown as string;
    }
  }

  // Если файл ещё не добавлен, используем дефолтное оригинальное фото
  return heroDefault;
};

export const CONTENT_IMAGES = {
  heroHeader: getImage('DSC00649.jpg'),
  dsc00649: getImage('DSC00649.jpg'),
  dsc09924: getImage('DSC09924.jpg'),
  dsc00684: getImage('DSC00684.jpg'),
  dsc00852: getImage('DSC00852.jpg'),
  dsc09942: getImage('DSC09942.jpg'),
  dsc00204: getImage('DSC00204.jpg'),
  dsc09927: getImage('DSC09927.jpg'),
  vocalTrioLive: getImage('photo_5307674830570196549_y.jpg'),
  dsc00994: getImage('DSC00994.jpg'),
  dsc01000: getImage('DSC01000.jpg'),
  dsc00756: getImage('DSC00756.jpg'),
  dsc00772: getImage('DSC00772.jpg'),
  dsc01041: getImage('DSC01041.jpg'),
  dsc00733: getImage('DSC00733.jpg'),
  editorialGroup1: getImage('nakama-editorial-group-1.jpg'),
  soloPortraitDress: getImage('nakama-solo-portrait-dress.jpg'),
  vocalistsPlayful: getImage('nakama-vocalists-playful.jpg'),
  editorialGroup2: getImage('nakama-editorial-group-2.jpg'),
  liveVenue1: getImage('nakama-live-venue-1.jpg'),
  liveVenue2: getImage('nakama-live-venue-2.jpg'),
  guysPlayful: getImage('nakama-guys-playful.jpg'),
  groupSunglasses: getImage('nakama-group-sunglasses.jpg'),
  bassistVenue: getImage('nakama-bassist-venue.jpg'),
  groupShadows: getImage('nakama-group-shadows.jpg'),
  trioDresses: getImage('nakama-trio-dresses.jpg'),
  groupCouch: getImage('nakama-group-couch.jpg'),
  soloCouch: getImage('nakama-solo-couch.jpg'),
  newyearGroup: getImage('nakama-newyear-group.jpg'),
};

export default CONTENT_IMAGES;



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
};

export default CONTENT_IMAGES;



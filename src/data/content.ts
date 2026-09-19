import { PackageItem, ReviewItem, TrackItem, ConditionItem, PhotoSlotInfo, SongRemakeItem } from '../types';
import { CONTENT_IMAGES } from '../content';

export const MEDIA_LINKS = {
  heroMain: CONTENT_IMAGES.dsc00649,
  dsc00649: CONTENT_IMAGES.dsc00649,
  dsc09924: CONTENT_IMAGES.dsc09924,
  dsc00684: CONTENT_IMAGES.dsc00684,
  dsc00852: CONTENT_IMAGES.dsc00852,
  dsc09942: CONTENT_IMAGES.dsc09942,
  lookbook1HeroAbout: CONTENT_IMAGES.dsc09924,
  lookbook2WhyNeeded: CONTENT_IMAGES.dsc00684,
  lookbook3: CONTENT_IMAGES.dsc00852,
  betweenReviewsMain: CONTENT_IMAGES.dsc09942,
  ourIdeaAbout: 'https://zxcvbnmkjhg.wfolio.pro/disk/share/mrXrRVUV3GElP',
  finalBlockAbout: 'https://zxcvbnmkjhg.wfolio.pro/disk/share/rk0k45F9qGdK3',
};

/**
 * ПОЛНЫЙ АНАЛИЗ И КАРТА ВСЕХ ФОТО-СЛОТОВ И ПУСТЫХ ПРОСТРАНСТВ ИЗ ФАЙЛА NAKAMA
 */
export const PHOTO_SLOTS_MAP: Record<string, PhotoSlotInfo> = {
  // 1. Главный экран (Hero)
  heroMain: {
    id: 'slot-hero-main',
    blockName: 'БЛОК 01 • ГЛАВНЫЙ ЭКРАН',
    title: 'Панорама концертного состава на сцене',
    description: 'Широкоформатный горизонтальный кадр в концертном свете. Задаёт кинематографичный масштаб шоу.',
    recommendedFileName: 'DSC00649.jpg',
    currentImage: CONTENT_IMAGES.dsc00649,
    aspectRatio: 'wide',
  },

  // 2. О группе: Hero экран
  heroAbout: {
    id: 'slot-hero-about',
    blockName: 'БЛОК 02 • О ГРУППЕ (ШАПКА)',
    title: 'Вокальный ансамбль 6 человек',
    description: 'Портретный и поясной кадр всех 6 вокалистов крупным планом. Показывает открытость и живой контакт.',
    recommendedFileName: 'DSC09924.jpg',
    currentImage: CONTENT_IMAGES.dsc09924,
    aspectRatio: 'portrait',
  },

  // 3. О группе: Наша идея / Смысл NAKAMA (Из файла: ссылка mrXrRVUV3GElP)
  ourIdeaAbout: {
    id: 'slot-our-idea',
    blockName: 'БЛОК 02.1 • НАША ИДЕЯ (СМЫСЛ NAKAMA)',
    title: 'Единение и атмосфера «Свои люди»',
    description: 'Кадр, иллюстрирующий смысл слова «NAKAMA» — доверие, общая волна и искренний контакт с залом.',
    recommendedFileName: 'our_idea_nakama.jpg',
    wfolioUrl: 'https://zxcvbnmkjhg.wfolio.pro/disk/share/mrXrRVUV3GElP',
    currentImage: CONTENT_IMAGES.dsc09924,
    aspectRatio: 'landscape',
  },

  // 4. О группе / Лид-форма: «Зачем мы нужны» (Lookbook 2)
  whyNeeded: {
    id: 'slot-why-needed',
    blockName: 'БЛОК 02.2 • СЦЕНИЧЕСКИЙ ОБРАЗ',
    title: 'Кинематографичный кино-образ NAKAMA',
    description: 'Стильный сценический дресс-код, фокус на эмоции солистов. Образ из лукбука группы.',
    recommendedFileName: 'DSC00684.jpg',
    currentImage: CONTENT_IMAGES.dsc00684,
    aspectRatio: 'portrait',
  },

  // 5. Миссия и живые инструменты (Lookbook 3)
  liveInstruments: {
    id: 'slot-live-instruments',
    blockName: 'БЛОК 03 • 100% ЖИВОЙ ЗВУК',
    title: 'Ритм-секция и сцена в тёплом свете',
    description: 'Живые барабаны, бас, гитары и клавиши. Иллюстрирует отказ от плейбеков в пользу настоящего звука.',
    recommendedFileName: 'DSC00852.jpg',
    currentImage: CONTENT_IMAGES.dsc00852,
    aspectRatio: 'landscape',
  },

  // 6. Формат: Базовый минимум (60 минут)
  packageBasic: {
    id: 'slot-package-basic',
    blockName: 'БЛОК 04 • ТАРИФ: БАЗОВЫЙ МИНИМУМ',
    title: 'Драйв корпоративного вечера',
    description: 'Кадр живого танцевального сета с интерактивом и вокальным соло. Музыка держит ритм вечера.',
    recommendedFileName: 'package_basic_live.jpg',
    wfolioUrl: 'https://zxcvbnmkjhg.wfolio.pro/',
    currentImage: CONTENT_IMAGES.dsc00852,
    aspectRatio: 'landscape',
  },

  // 7. Формат: Роскошный максимум (90 минут)
  packageMaximum: {
    id: 'slot-package-maximum',
    blockName: 'БЛОК 04 • ТАРИФ: РОСКОШНЫЙ МАКСИМУМ',
    title: 'Кульминация свадебного или гала-вечера',
    description: 'Эмоциональный апогей, первый танец молодожёнов или световой финал с бенгальскими огнями.',
    recommendedFileName: 'package_maximum_wedding.jpg',
    wfolioUrl: 'https://zxcvbnmkjhg.wfolio.pro/',
    currentImage: CONTENT_IMAGES.dsc00649,
    aspectRatio: 'landscape',
  },

  // 8. Ваши условия: Стандарты и звук
  conditionsStandards: {
    id: 'slot-conditions-standards',
    blockName: 'БЛОК 04.1 • ВАШИ УСЛОВИЯ И РАЙДЕР',
    title: 'Штатный звукорежиссёр за пультом',
    description: 'Бэкстейдж с саундчека: контроль частот, персональный in-ear мониторинг и цифровой тракт.',
    recommendedFileName: 'sound_engineer_backstage.jpg',
    wfolioUrl: 'https://zxcvbnmkjhg.wfolio.pro/',
    currentImage: CONTENT_IMAGES.dsc09942,
    aspectRatio: 'landscape',
  },

  // 9. Для event-агентств (Райдер и координация)
  agenciesRider: {
    id: 'slot-agencies-rider',
    blockName: 'БЛОК 05 • EVENT-ОРГАНИЗАТОРАМ',
    title: 'Подготовка к выходу и чёткий тайминг',
    description: 'Гримёрная комната, проверка райдера и координация с ведущим за 2 часа до гостей.',
    recommendedFileName: 'agencies_backstage.jpg',
    wfolioUrl: 'https://zxcvbnmkjhg.wfolio.pro/',
    currentImage: CONTENT_IMAGES.dsc00684,
    aspectRatio: 'landscape',
  },

  // 10. Финальный блок: О группе (Из файла: ссылка rk0k45F9qGdK3)
  finalBlockAbout: {
    id: 'slot-final-block-about',
    blockName: 'БЛОК 06 • ФИНАЛЬНЫЙ БЛОК О ГРУППЕ',
    title: 'Общий поклон и овации зала',
    description: 'Кадр закрытия вечера, когда зал поёт хором вместе с группой. Призыв забронировать дату.',
    recommendedFileName: 'nakama_final_applause.jpg',
    wfolioUrl: 'https://zxcvbnmkjhg.wfolio.pro/disk/share/rk0k45F9qGdK3',
    currentImage: CONTENT_IMAGES.dsc09942,
    aspectRatio: 'landscape',
  },
};

export const CONTACT_INFO = {
  managerName: 'Анна',
  phone: '8-906-980-65-25',
  phoneClean: '+79069806525',
  telegram: 'https://t.me/nakama_band',
  whatsapp: 'https://wa.me/79069806525',
  vk: 'https://vk.com',
  instagram: 'https://instagram.com',
  geography: 'Новосибирск, Сибирь, выезд по всей России',
};

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'basic',
    title: 'Базовый минимум',
    price: '92 000 ₽',
    priceNum: 92000,
    duration: '60 минут живого выступления',
    features: [
      'Полный состав — 10 человек (4 музыканта, солист, рэп-исполнитель, 4 вокалистки)',
      '60 минут живого выступления (1 сет или разбивка на блоки)',
      'Выбор треков из готового репертуара (100+ мировых и российских хитов)',
      'Свой звукорежиссёр — качество звука под нашей ответственностью',
      'Согласование тайминга и логики вечера — музыка не будет случайной',
      'Сценические костюмы под цветовую концепцию мероприятия',
    ],
    description:
      'Подойдёт для корпоративов, дней рождения и других мероприятий, где главное — драйв и живой звук. Формат, в котором музыка работает на атмосферу, не перетягивая на себя сценарий.',
    suitableFor: 'Корпоративы, дни рождения и частные праздники',
    photoSlot: PHOTO_SLOTS_MAP.packageBasic,
  },
  {
    id: 'maximum',
    title: 'Роскошный максимум',
    price: '109 000 ₽',
    priceNum: 109000,
    duration: '90 минут живого выступления',
    features: [
      'Полный состав — 10 человек (4 музыканта, солист, рэп-исполнитель, 4 вокалистки)',
      '90 минут живого выступления (2 или 3 отделения по таймингу вечера)',
      'Созвон с заказчиком и ведущим, детальный разбор сценария вечера',
      'Встраивание музыкальной программы в общую логику вечера',
      'Свой звукорежиссёр — персональный баланс каждого из 6 вокалистов',
      'До 5 каверов специально под мероприятие (первый танец, танец с папой, гимн компании...)',
      'Продумывание переходов, интерактивы с гостями и эмоциональные пики программы',
    ],
    description:
      'Подойдёт для свадеб и статусных мероприятий, где важна каждая часть вечера. Когда музыка должна не просто звучать, а попадать точно в нужную секунду.',
    suitableFor: 'Свадьбы, масштабные корпоративы, статусные гала-вечера',
    isPopular: true,
    photoSlot: PHOTO_SLOTS_MAP.packageMaximum,
  },
];

/**
  * ЧТО ВХОДИТ В ОБА ПАКЕТА (ВЫДЕЛЕННЫЙ БЛОК ИЗ ТЗ)
  */
export const INCLUDED_IN_ALL_PACKAGES = [
  {
    title: 'Полный состав — 10 человек',
    desc: '4 музыканта, солист, рэп-исполнитель, 4 вокалистки. Никаких «урезанных» версий.',
  },
  {
    title: 'Свой звукорежиссёр',
    desc: 'Штатный специалист за пультом, знающий каждый микрофон и акустику ансамбля.',
  },
  {
    title: 'Выезд по всей России',
    desc: 'Базируемся в Новокузнецке, выступаем в Новосибирске, Кемерово, Москве и любых городах РФ.',
  },
];

/**
  * ДОПОЛНИТЕЛЬНАЯ УСЛУГА «ПЕСНЯ-ПЕРЕДЕЛКА» (ИЗ ТЗ)
  */
export const SONG_REMAKE_DATA: SongRemakeItem[] = [
  {
    id: 'remake-text',
    title: 'Текст на заказ',
    price: '5 000 ₽',
    priceNum: 5000,
    badge: 'Слова под ключ',
    description: 'Переписываем текст известной песни под ваш повод: свадьба, юбилей компании, личная история.',
    features: ['Сохранение оригинальной ритмики и рифм', 'Включение ваших имён, фактов и шуток', '2 раунда правок'],
  },
  {
    id: 'remake-live',
    title: 'Текст + живое исполнение',
    price: '8 000 ₽',
    priceNum: 8000,
    badge: 'Спецномер вечера',
    description: 'NAKAMA разучивает кавер с новым текстом и исполняет его живым составом прямо на вашем мероприятии.',
    features: ['Индивидуальный текст под ключ', 'Аранжировка под 6 вокалов', 'Премьера трека на сцене в кульминационный момент'],
  },
  {
    id: 'remake-studio',
    title: 'Текст + запись голоса',
    price: '9 000 ₽',
    priceNum: 9000,
    badge: 'Студийный трек',
    description: 'Переписываем текст и записываем ваш голос в студии Sound Lab с профессиональным педагогом по вокалу.',
    features: ['Написание эксклюзивного текста', 'Занятие с вокальным педагогом перед микрофоном', 'Сведение и тюнинг готового трека на память'],
  },
  {
    id: 'remake-solo',
    title: 'Соло с NAKAMA',
    price: '15 000 ₽',
    priceNum: 15000,
    badge: 'Звезда сцены',
    description: 'Заказчик сам выходит на сцену и поёт песню вместе с группой перед восторженными гостями.',
    features: [
      'Написание текста и адаптация тональности',
      '4 репетиции: 2 с преподавателем по вокалу, 2 с группой',
      'Живой совместный номер на сцене с полифонией 6 бэк-вокалов',
    ],
  },
];

/**
 * ПОЛНЫЕ УСЛОВИЯ И СТАНДАРТЫ NAKAMA ИЗ ОФИЦИАЛЬНОГО ФАЙЛА
 */
export const CONDITIONS_DATA: ConditionItem[] = [
  {
    id: 'lineup',
    number: '01',
    title: 'Принципиально полный концертный состав',
    shortTitle: 'Полный состав',
    badge: '100% ЖИВОЙ ЗВУК',
    description: 'Мы принципиально не выступаем урезанными составами под минус. На сцене всегда полный ансамбль.',
    features: [
      '6 профессиональных вокалистов (полифония, мужской и женский вокал)',
      'Полная ритм-секция: барабанная установка, бас-гитара, электро- и акустическая гитара, клавишные',
      'Никаких плейбеков, автотюна или фанерных подложек — 100% аутентичный концертный звук',
    ],
    photoSlot: PHOTO_SLOTS_MAP.heroAbout,
  },
  {
    id: 'sound-engineer',
    number: '02',
    title: 'Штатный звукорежиссёр включён в каждый тариф',
    shortTitle: 'Свой звукорежиссёр',
    badge: 'КОНТРОЛЬ ЗВУКА',
    description: 'Вам не нужно искать стороннего специалиста или переживать за разборчивость слов и баланс.',
    features: [
      'Наш звукорежиссёр знает особенности каждого из 6 вокальных микрофонов и инструментов',
      'Персональная настройка цифрового пульта и In-Ear мониторинга музыкантов',
      'Контроль комфортной громкости для гостей: драйв на танцполе без звона в ушах за столами',
    ],
    photoSlot: PHOTO_SLOTS_MAP.conditionsStandards,
  },
  {
    id: 'timing',
    number: '03',
    title: 'Саундчек за 2 часа до гостей и железный тайминг',
    shortTitle: 'Тайминг и саундчек',
    badge: 'ПУНКТУАЛЬНОСТЬ',
    description: 'Гости никогда не увидят монтаж оборудования или техническую распевку.',
    features: [
      'Прибытие команды на площадку за 3–4 часа до начала мероприятия',
      'Полная готовность и тишина в зале строго за 2 часа до сбора первых гостей',
      'Точная синхронизация с ведущим и координатором события: выход минута в минуту',
    ],
    photoSlot: PHOTO_SLOTS_MAP.agenciesRider,
  },
  {
    id: 'logistics',
    number: '04',
    title: 'Выезд по всей Сибири и территории России',
    shortTitle: 'География и выезд',
    badge: 'МОБИЛЬНОСТЬ',
    description: 'Базируемся в Новосибирске, регулярно гастролируем по городам России.',
    features: [
      'Сибирь: Новосибирск, Томск, Кемерово, Барнаул, Новокузнецк, Красноярск, Алтай',
      'Россия: Москва, Санкт-Петербург, Сочи, Урал, Дальний Восток',
      'Организованная логистика для 11 человек (10 артистов + звукорежиссёр)',
    ],
    photoSlot: PHOTO_SLOTS_MAP.heroMain,
  },
  {
    id: 'rider',
    number: '05',
    title: 'Понятные технический и бытовой райдеры',
    shortTitle: 'Райдер без сюрпризов',
    badge: 'ПРОЗРАЧНОСТЬ',
    description: 'Разумные требования без завышенных позиций, легко выполнимые на любой банкетной площадке.',
    features: [
      'Технический: сцена от 5×4 м, бэклайн по списку, In-Ear мониторы привозим с собой',
      'Бытовой: тёплая гримёрная комната с зеркалом в полный рост, отпаривателем, водой и чаем/кофе',
      'Питание: горячее питание на 11 человек в день выступления',
    ],
    photoSlot: PHOTO_SLOTS_MAP.whyNeeded,
  },
  {
    id: 'contract',
    number: '06',
    title: 'Официальный договор и прозрачная оплата 20/80',
    shortTitle: 'Договор и бронь',
    badge: 'ЮРИДИЧЕСКАЯ ГАРАНТИЯ',
    description: 'Работаем официально с физическими лицами, компаниями и event-агентствами.',
    features: [
      '20% предоплата при подписании договора для гарантированной фиксации даты за вами',
      '80% остаток в день мероприятия',
      'Все закрывающие документы, безналичный расчёт для юридических лиц',
    ],
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Юлия',
    role: 'мама выпускника',
    text: 'Замечательные ребята. Реально Свои) Выступали у нас на выпускном вечере, очень понравилось их выступление — оценили и выпускники и родители!',
    eventType: 'Выпускной вечер',
  },
  {
    id: 'review-2',
    author: 'Виктория',
    role: 'невеста',
    text: 'Самый точный комплимент нашей свадьбе сказала подруга: «Ощущение, что мы были на концерте, только концерт был про вас». Когда они запели «Крошка моя», затанцевал даже мой папа, который «никогда не танцует». Отдельное спасибо за то, что выучили нашу с мужем песню — её не было в репертуаре, но ребята сделали кавер специально для первого танца.',
    isPlaceholder: false,
    eventType: 'Свадьба',
  },
];

export const TRACKS_DATA: TrackItem[] = [
  // Атмосфера (atmosphere)
  {
    id: 't-atm-1',
    title: 'Sunny',
    originalArtist: 'Boney M. / Bobby Hebb',
    category: 'atmosphere',
    tag: 'Welcome & сбор гостей',
    duration: '0:50',
  },
  {
    id: 't-atm-2',
    title: 'Skyfall',
    originalArtist: 'Adele',
    category: 'atmosphere',
    tag: 'Кинематографичный звук',
    duration: '0:52',
  },
  {
    id: 't-atm-3',
    title: 'Englishman in New York',
    originalArtist: 'Sting',
    category: 'atmosphere',
    tag: 'Стильный лаунж-грув',
    duration: '0:48',
  },
  {
    id: 't-atm-4',
    title: 'Get Lucky (Neo-Soul Live)',
    originalArtist: 'Daft Punk & Pharrell',
    category: 'atmosphere',
    tag: 'Тёплый фанковый грув',
    duration: '0:54',
  },

  // Русские хиты (ru_hits)
  {
    id: 't-ru-1',
    title: 'Седая ночь',
    originalArtist: 'Юрий Шатунов',
    category: 'ru_hits',
    tag: 'Все на танцполе',
    duration: '0:50',
  },
  {
    id: 't-ru-2',
    title: 'Батарейка',
    originalArtist: 'Жуки',
    category: 'ru_hits',
    tag: 'Хором весь зал',
    duration: '0:45',
  },
  {
    id: 't-ru-3',
    title: 'Моё сердце',
    originalArtist: 'Сплин',
    category: 'ru_hits',
    tag: 'Все поколения',
    duration: '0:48',
  },
  {
    id: 't-ru-4',
    title: 'Районы-кварталы',
    originalArtist: 'Звери',
    category: 'ru_hits',
    tag: 'Драйв и танцы',
    duration: '0:52',
  },
  {
    id: 't-ru-5',
    title: 'Хали-Гали, Паратрупер',
    originalArtist: 'Леприконсы',
    category: 'ru_hits',
    tag: 'Максимальный танцпол',
    duration: '0:46',
  },

  // Зарубежные хиты (world_hits)
  {
    id: 't-wh-1',
    title: 'Simply the Best',
    originalArtist: 'Tina Turner',
    category: 'world_hits',
    tag: 'Золотой мировой хит',
    duration: '0:55',
  },
  {
    id: 't-wh-2',
    title: 'Uptown Funk',
    originalArtist: 'Mark Ronson & Bruno Mars',
    category: 'world_hits',
    tag: 'Фанк и танцы',
    duration: '0:50',
  },
  {
    id: 't-wh-3',
    title: 'Blinding Lights',
    originalArtist: 'The Weeknd',
    category: 'world_hits',
    tag: 'Синтвейв & вокал',
    duration: '0:47',
  },
  {
    id: 't-wh-4',
    title: 'Can\'t Stop the Feeling',
    originalArtist: 'Justin Timberlake',
    category: 'world_hits',
    tag: 'Лёгкий позитив',
    duration: '0:52',
  },

  // Раскачать зал (party)
  {
    id: 't-pty-1',
    title: 'Моя бабушка курит трубку',
    originalArtist: 'Гарик Сукачёв',
    category: 'party',
    tag: 'Зал поёт вместе',
    duration: '0:45',
  },
  {
    id: 't-pty-2',
    title: 'It\'s My Life',
    originalArtist: 'Bon Jovi',
    category: 'party',
    tag: 'Рок-энергия',
    duration: '0:53',
  },
  {
    id: 't-pty-3',
    title: 'Лететь',
    originalArtist: 'Амега / Антон Беляев',
    category: 'party',
    tag: 'Взлёт вечера',
    duration: '0:56',
  },
  {
    id: 't-pty-4',
    title: 'Poker Face (Rock Live)',
    originalArtist: 'Lady Gaga',
    category: 'party',
    tag: 'Танцевальный взрыв',
    duration: '0:49',
  },

  // На разрыв (rock)
  {
    id: 't-rck-1',
    title: 'Beggin',
    originalArtist: 'Måneskin',
    category: 'rock',
    tag: 'На разрыв',
    duration: '0:48',
  },
  {
    id: 't-rck-2',
    title: 'Believer',
    originalArtist: 'Imagine Dragons',
    category: 'rock',
    tag: 'Мощный бит',
    duration: '0:50',
  },
  {
    id: 't-rck-3',
    title: 'Seven Nation Army',
    originalArtist: 'The White Stripes',
    category: 'rock',
    tag: 'Стадионный гимн',
    duration: '0:44',
  },
  {
    id: 't-rck-4',
    title: 'Smells Like Teen Spirit',
    originalArtist: 'Nirvana',
    category: 'rock',
    tag: 'Драйв без тормозов',
    duration: '0:52',
  },

  // Медляки (slow)
  {
    id: 't-slw-1',
    title: 'Can\'t Help Falling in Love',
    originalArtist: 'Elvis Presley',
    category: 'slow',
    tag: 'Для первого танца',
    duration: '1:00',
  },
  {
    id: 't-slw-2',
    title: 'Perfect',
    originalArtist: 'Ed Sheeran',
    category: 'slow',
    tag: 'Романтический момент',
    duration: '0:58',
  },
  {
    id: 't-slw-3',
    title: 'Shallow',
    originalArtist: 'Lady Gaga & Bradley Cooper',
    category: 'slow',
    tag: 'Дуэтный апогей',
    duration: '1:02',
  },
  {
    id: 't-slw-4',
    title: 'Дельтаплан (Лирический кавер)',
    originalArtist: 'Валерий Леонтьев',
    category: 'slow',
    tag: 'Тёплая ностальгия',
    duration: '0:55',
  },

  // Финал (final)
  {
    id: 't-fnl-1',
    title: 'Don\'t Stop Believin\'',
    originalArtist: 'Journey',
    category: 'final',
    tag: 'Грандиозный финал',
    duration: '1:05',
  },
  {
    id: 't-fnl-2',
    title: 'Сансара',
    originalArtist: 'Баста',
    category: 'final',
    tag: 'Общий хор зала',
    duration: '1:10',
  },
  {
    id: 't-fnl-3',
    title: 'The Show Must Go On',
    originalArtist: 'Queen',
    category: 'final',
    tag: 'Кульминация шоу',
    duration: '1:08',
  },
  {
    id: 't-fnl-4',
    title: 'We Are the Champions',
    originalArtist: 'Queen',
    category: 'final',
    tag: 'Овации и поклон',
    duration: '1:00',
  },

  // Новый год (ny)
  {
    id: 't-ny-1',
    title: 'Last Christmas / Новогодний сет',
    originalArtist: 'Wham! / Попурри',
    category: 'ny',
    tag: 'Новогодний хит',
    duration: '0:58',
  },
  {
    id: 't-ny-2',
    title: 'Звенит январская вьюга (Live Rock)',
    originalArtist: 'Нина Бродская',
    category: 'ny',
    tag: 'Зимний танцевальный гимн',
    duration: '0:51',
  },
  {
    id: 't-ny-3',
    title: 'Три белых коня (Modern Drive)',
    originalArtist: 'Лариса Долина',
    category: 'ny',
    tag: 'Праздничный взрыв',
    duration: '0:49',
  },
  {
    id: 't-ny-4',
    title: 'Happy New Year (Live Vocal)',
    originalArtist: 'ABBA',
    category: 'ny',
    tag: 'Бокалы и конфетти',
    duration: '1:05',
  },
];

export const FAQ_DATA = [
  {
    q: 'Можно ли заказать сокращённый состав, чтобы было дешевле?',
    a: 'Нет. Мы принципиально не делим NAKAMA на «полную» и «урезанную» версию. На сцене всегда 10 артистов (4 музыканта, солист, рэп-исполнитель, 4 вокалистки). Именно этот состав создаёт фирменное многоголосие и концертный драйв, за которым к нам обращаются.',
  },
  {
    q: 'Что такое ансамбль и чем это отличается от обычной кавер-группы?',
    a: 'Большинство кавер-групп — это 1–2 вокалиста на инструментальной базе. NAKAMA — это вокальный ансамбль: 6 разноплановых голосов поют одновременно в полифонии и гармониях. Это даёт колоссальный объём, чистоту и плотность звучания, которые физически невозможно воспроизвести дуэтом.',
  },
  {
    q: 'У нас небольшая площадка — вы точно поместитесь?',
    a: 'Да! Мы мобильны и не привязаны жёстко к подиуму сцены: вокалисты активно двигаются по залу, общаются с гостями и танцуют вместе с ними. Минимально комфортное пространство для инструментов — от 4×3 м. Пришлите нам название или фото площадки — мы честно подскажем расстановку.',
  },
  {
    q: 'Есть ли у вас своё звуковое оборудование?',
    a: 'Да, мы приезжаем со своими инструментами, персональным In-Ear мониторингом, беспроводными микрофонами и цифровым микшерным пультом. Портальную акустику обычно предоставляет площадка или прокатная компания. Мы передаём чёткий техрайдер и помогаем с подбором подрядчика.',
  },
  {
    q: 'В какие города вы приезжаете?',
    a: 'Группа NAKAMA базируется в Новокузнецке, но мы регулярно выступаем по всей России — в Новосибирске, Кемерово, Томске, Барнауле, Красноярске, а также летаем в Москву, Санкт-Петербург, Сочи и другие регионы страны.',
  },
  {
    q: 'Входит ли в стоимость дорога, трансфер и проживание?',
    a: 'Нет, логистические и бытовые расходы рассчитываются отдельно по прозрачному бытовому райдеру (отправляем вместе с договором). Мы помогаем оптимизировать маршрут и фиксируем все затраты заранее.',
  },
  {
    q: 'Как происходит оплата и бронирование даты?',
    a: 'Работаем официально по договору (с физлицами, юрлицами, агентствами). Предоплата составляет 20% от суммы для гарантированной фиксации даты за вами в календаре, остаток оплачивается накануне или в день мероприятия.',
  },
];

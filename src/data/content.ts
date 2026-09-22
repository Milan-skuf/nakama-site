import { PackageItem, ReviewItem, TrackItem, ConditionItem, PhotoSlotInfo, SongRemakeItem, CaseStudyItem } from '../types';
import { CONTENT_IMAGES } from '../content';

export const MEDIA_LINKS = {
  heroMain: CONTENT_IMAGES.dsc00649,
  dsc00649: CONTENT_IMAGES.dsc00649,
  dsc09924: CONTENT_IMAGES.dsc09924,
  dsc00684: CONTENT_IMAGES.dsc00684,
  dsc00852: CONTENT_IMAGES.dsc00852,
  dsc09942: CONTENT_IMAGES.dsc09942,
  lookbook1HeroAbout: CONTENT_IMAGES.dsc09942,
  lookbook2WhyNeeded: CONTENT_IMAGES.dsc00994,
  lookbook3: CONTENT_IMAGES.dsc00852,
  betweenReviewsMain: CONTENT_IMAGES.dsc09942,
  whyNeededSecond: CONTENT_IMAGES.dsc01000,
  finalCtaGroupPhoto: CONTENT_IMAGES.dsc00756,
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

  // 11. Контакты: живое фото менеджера Анны
  managerAnnaPhoto: {
    id: 'slot-manager-anna',
    blockName: 'КОНТАКТЫ • ФОТО МЕНЕДЖЕРА',
    title: 'Анна — концертный менеджер',
    description: 'Живое портретное фото менеджера для блока прямых контактов — не иконка.',
    recommendedFileName: 'anna_manager_portrait.jpg',
    aspectRatio: 'square',
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
  geography: 'База — Новокузнецк, работаем в Новосибирске и по всей России',
};

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'basic',
    title: 'Базовый минимум',
    price: '92 000 ₽',
    priceNum: 92000,
    duration: '60 минут живого выступления',
    features: [
      'Полный состав — 10 человек: 4 музыканта, солист, рэп-исполнитель, 4 вокалистки',
      '60 минут живого выступления',
      'Выбираете треки из готового репертуара — никаких сюрпризов, только то, что вы хотите услышать',
      'Свой звукорежиссёр — качество звука под нашей ответственностью',
      'Согласовываем тайминг и логику вечера — сет строится по нарастающей, а не играет вразнобой',
      'Костюмы под цветовую концепцию вашего вечера — выбираете из наших готовых образов',
    ],
    description:
      'Подойдёт для корпоративов, дней рождения и любых других событий, где главное — драйв и живой звук. Формат, в котором музыка работает на атмосферу, не перетягивая на себя сценарий.',
    suitableFor: 'Корпоративы, дни рождения и любые другие события',
    photoSlot: PHOTO_SLOTS_MAP.packageBasic,
  },
  {
    id: 'maximum',
    title: 'Роскошный максимум',
    price: '109 000 ₽',
    priceNum: 109000,
    duration: '90 минут живого выступления',
    features: [
      'Полный состав — 10 человек: 4 музыканта, солист, рэп-исполнитель, 4 вокалистки',
      '90 минут живого выступления',
      'Созвон с вами и вашим ведущим до мероприятия — разбираем сценарий и встраиваем программу в логику вечера',
      'Свой звукорежиссёр — качество звука под нашей ответственностью',
      'До 5 каверов, созданных специально под ваш вечер: первый танец, танец с папой, корпоративный гимн, песня для выпускников — на ваш выбор',
      'Детально разбираем структуру вечера, продумываем переходы, интерактивы с гостями и эмоциональные пики — каждый момент получает своё звучание',
    ],
    description:
      'Подойдёт для свадеб и статусных мероприятий, где каждый момент вечера важен. Когда музыка должна не просто звучать, а попадать точно в нужную секунду.',
    suitableFor: 'Свадьбы и статусные мероприятия',
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
    description: 'Переписываем текст песни под ваш повод — для поздравления или подарка.',
    features: ['Сохранение оригинальной ритмики и рифм', 'Включение ваших имён, фактов и шуток', '2 раунда правок'],
  },
  {
    id: 'remake-live',
    title: 'Текст + живое исполнение',
    price: '8 000 ₽',
    priceNum: 8000,
    badge: 'Спецномер вечера',
    description: 'Мы сами исполним переделанную песню на вашем мероприятии — вживую, полным составом. Момент, который запомнят все гости.',
    features: ['Индивидуальный текст под ключ', 'Аранжировка под 6 вокалов', 'Премьера трека на сцене в кульминационный момент'],
  },
  {
    id: 'remake-studio',
    title: 'Текст + запись голоса',
    price: '9 000 ₽',
    priceNum: 9000,
    badge: 'Студийный трек',
    description: 'Переписываем текст и едем с вами в студию Sound Lab. Рядом на записи будет наш вокальный педагог, чтобы результат звучал так, как вы хотите.',
    features: ['Написание эксклюзивного текста', 'Занятие с вокальным педагогом перед микрофоном', 'Сведение и тюнинг готового трека на память'],
  },
  {
    id: 'remake-solo',
    title: 'Текст + ваше выступление',
    price: '15 000 ₽',
    priceNum: 15000,
    badge: 'Соло с NAKAMA',
    description: 'Вы выходите на сцену и поёте сами — с живой группой за спиной. В стоимость входят текст, аранжировка и 4 репетиции: 2 с педагогом по вокалу, 2 с группой.',
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
    description: 'Базируемся в Новокузнецке, регулярно гастролируем по Сибири и России, в том числе в Новосибирске.',
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
    category: 'private',
    badge: 'Выпускной',
  },
  {
    id: 'review-2',
    author: 'Виктория',
    role: 'невеста',
    text: 'Самый точный комплимент нашей свадьбе сказала подруга: «Ощущение, что мы были на концерте, только концерт был про вас». Когда они запели «Крошка моя», затанцевал даже мой папа, который «никогда не танцует». Отдельное спасибо за то, что выучили нашу с мужем песню — её не было в репертуаре, но ребята сделали кавер специально для первого танца.',
    isPlaceholder: false,
    eventType: 'Свадьба',
    category: 'wedding',
    badge: 'Свадьба',
  },
];

/**
 * СТРУКТУРИРОВАННЫЕ КЕЙСЫ (ФОРМАТ ИЗ ТЗ: ТИП СОБЫТИЯ → ЗАДАЧА → ЧТО СДЕЛАЛИ → РЕЗУЛЬТАТ)
 */
export const CASES_DATA: CaseStudyItem[] = [
  {
    id: 'case-corporate-it',
    category: 'corporate',
    title: 'Корпоратив IT-компании',
    meta: '200 гостей • Новосибирск',
    task: 'Переключить команду после напряжённого рабочего года, создать клубную атмосферу и объединить разные отделы на танцполе.',
    action: 'Выстроили музыкальную программу от мягкого лаунж-старта во время сбора гостей к мощному финальному взрыву с хоровым пением.',
    result: '«Гости не хотели отпускать группу со сцены, финальный трек пели все 200 человек хором. Работа звукорежиссёра и тайминг — на высшем уровне.»',
    photo: PHOTO_SLOTS_MAP.liveInstruments.currentImage as string,
  },
  {
    id: 'case-wedding',
    category: 'wedding',
    title: 'Свадебное торжество',
    meta: '80 гостей • Сибирь',
    task: 'Подготовить эксклюзивную авторскую аранжировку для первого танца молодожёнов и зажечь гостей трёх разных поколений.',
    action: 'Разучили любимую песню пары в 6 голосов, разделили программу на 2 эмоциональных блока с интерактивами и кульминационным рок-попурри.',
    result: '«Энергия живого звука просто взорвала зал! Все гости пели хором каждую песню. Ребята приехали со своим звуком и настроили потрясающий баланс.»',
    photo: PHOTO_SLOTS_MAP.finalBlockAbout.currentImage as string,
  },
];

export const CATEGORY_DESCRIPTIONS: Record<TrackItem['category'], string> = {
  atmosphere: 'Спокойные, ненавязчивые треки. Подходят для любого момента, когда нужно создать настроение без давления на зал.',
  ru_hits: 'Узнаваемые треки, которые знает каждый гость. Работают для любой аудитории.',
  world_hits: 'Проверенная зарубежная классика от попа до рока — для тех, кто хочет разнообразить программу.',
  party: 'Треки для момента, когда энергия нарастает и нужно поднять людей с мест.',
  rock: 'Треки, которые бьют в грудь. Энергичные, но берущие за душу. Гости не просто слушают — они поют вместе, даже если не планировали.',
  slow: 'Для медленных танцев, романтических моментов и смены темпа вечера.',
  final: 'Треки, которые закрывают вечер на максимуме. Последнее, что гости унесут с собой.',
  ny: 'Отдельная подборка для корпоративов и праздников в декабре.',
};

export const TRACKS_DATA: TrackItem[] = [
  // Атмосфера (atmosphere)
  { id: 't-atm-1', title: 'Юность', originalArtist: 'Dabro', category: 'atmosphere' },
  { id: 't-atm-2', title: 'Чёрно-белый цвет', originalArtist: 'Chris Yank', category: 'atmosphere' },
  { id: 't-atm-3', title: 'До скорой встречи!', originalArtist: 'Звери', category: 'atmosphere' },

  // Русские хиты (ru_hits)
  { id: 't-ru-1', title: 'Крошка моя', originalArtist: 'Руки Вверх', category: 'ru_hits' },
  { id: 't-ru-2', title: 'Песенка друзей', originalArtist: 'Бременские музыканты', category: 'ru_hits' },
  { id: 't-ru-3', title: 'Зачем', originalArtist: '5sta Family', category: 'ru_hits' },
  { id: 't-ru-4', title: 'Ту-лу-ла', originalArtist: 'Чичерина', category: 'ru_hits' },
  { id: 't-ru-5', title: 'Мага', originalArtist: 'Тимати', category: 'ru_hits' },
  { id: 't-ru-6', title: 'Люби меня, люби', originalArtist: 'Отпетые мошенники', category: 'ru_hits' },
  { id: 't-ru-7', title: 'Бьёт бит', originalArtist: 'IOWA', category: 'ru_hits' },
  { id: 't-ru-8', title: 'Районы-кварталы', originalArtist: 'Звери', category: 'ru_hits' },
  { id: 't-ru-9', title: 'Халигали', originalArtist: 'Леприконсы', category: 'ru_hits' },

  // Зарубежные хиты (world_hits)
  { id: 't-wh-1', title: 'Seven Nation Army', originalArtist: 'The White Stripes', category: 'world_hits' },
  { id: 't-wh-2', title: 'No Good', originalArtist: 'Kaleo', category: 'world_hits' },
  { id: 't-wh-3', title: 'Beggin\'', originalArtist: 'Måneskin', category: 'world_hits' },
  { id: 't-wh-4', title: 'I Was Made For Lovin\' You', originalArtist: 'Kiss', category: 'world_hits' },
  { id: 't-wh-5', title: 'Money, Money, Money', originalArtist: 'ABBA', category: 'world_hits' },
  { id: 't-wh-6', title: 'Feel Good Inc.', originalArtist: 'Gorillaz, De La Soul', category: 'world_hits' },
  { id: 't-wh-7', title: 'Rock This Party', originalArtist: 'Bob Sinclar', category: 'world_hits' },
  { id: 't-wh-8', title: 'Training Season', originalArtist: 'Dua Lipa', category: 'world_hits' },

  // Раскачать зал (party)
  { id: 't-pty-1', title: 'Non Stop', originalArtist: 'Reflex', category: 'party' },
  { id: 't-pty-2', title: 'По барам', originalArtist: 'Анна Асти', category: 'party' },
  { id: 't-pty-3', title: 'Шёлк', originalArtist: 'Ваня Дмитриенко', category: 'party' },
  { id: 't-pty-4', title: 'Мама Люба', originalArtist: 'SEREBRO', category: 'party' },
  { id: 't-pty-5', title: 'Ты меня не ищи', originalArtist: 'ViRUS!', category: 'party' },
  { id: 't-pty-6', title: 'Контракт', originalArtist: 'Пошлая Молли', category: 'party' },

  // На разрыв (rock)
  { id: 't-rck-1', title: 'Вечно молодой', originalArtist: 'Смысловые Галлюцинации', category: 'rock' },
  { id: 't-rck-2', title: '31-я весна', originalArtist: 'Ночные Снайперы', category: 'rock' },
  { id: 't-rck-3', title: 'Лондон', originalArtist: 'Тимати, Григорий Лепс', category: 'rock' },
  { id: 't-rck-4', title: 'Рюмка водки на столе', originalArtist: 'Григорий Лепс', category: 'rock' },
  { id: 't-rck-5', title: 'Выхода нет', originalArtist: 'Сплин', category: 'rock' },
  { id: 't-rck-6', title: 'Стань', originalArtist: 'Макс Корж', category: 'rock' },
  { id: 't-rck-7', title: 'Аэропорты', originalArtist: 'Леонид Агутин', category: 'rock' },
  { id: 't-rck-8', title: 'Я так соскучился', originalArtist: 'Порнофильмы', category: 'rock' },

  // Медляки (slow)
  { id: 't-slw-1', title: 'Зеленоглазое такси', originalArtist: 'Михаил Боярский', category: 'slow' },
  { id: 't-slw-2', title: 'Романс', originalArtist: 'Pizza', category: 'slow' },
  { id: 't-slw-3', title: 'Медлячок', originalArtist: 'Баста', category: 'slow' },

  // Финал (final)
  { id: 't-fnl-1', title: 'Кухни', originalArtist: 'Бонд с кнопкой', category: 'final' },
  { id: 't-fnl-2', title: 'The Lost Song', originalArtist: 'The Cat Empire', category: 'final' },

  // Новый год (ny)
  { id: 't-ny-1', title: 'Новогодняя', originalArtist: 'Дискотека Авария', category: 'ny' },
  { id: 't-ny-2', title: 'Зима-холода', originalArtist: 'Андрей Губин', category: 'ny' },
  { id: 't-ny-3', title: 'Last Christmas', originalArtist: 'Wham!', category: 'ny' },
  { id: 't-ny-4', title: 'All I Want For Christmas Is You', originalArtist: 'Mariah Carey', category: 'ny' },
  { id: 't-ny-5', title: 'Синий иней', originalArtist: 'ВИА «Лейся, песня!»', category: 'ny' },
];

export const CATEGORY_LABELS: Record<TrackItem['category'], string> = {
  atmosphere: 'Атмосфера',
  ru_hits: 'Русские хиты',
  world_hits: 'Зарубежные хиты',
  party: 'Раскачать зал',
  rock: 'На разрыв',
  slow: 'Медляки',
  final: 'Финал',
  ny: 'Новый год',
};

export const FAQ_DATA = [
  {
    q: 'Можно ли заказать сокращённый состав, чтобы было дешевле?',
    a: 'Нет. Мы принципиально не делим NAKAMA на «полную» и «урезанную» версию — именно полный состав создаёт то многоголосое звучание, за которым к нам обращаются.',
  },
  {
    q: 'Что такое «ансамбль» и чем это отличается от дуэта или соло?',
    a: 'Большинство кавер-групп — это один-два вокалиста на инструментальной базе. Звучит хорошо, но когда на сцене шесть голосов поют вместе — это принципиально другое звучание: не просто «больше людей», а объём и глубина, которые не воспроизведёт ни один дуэт, насколько бы хорошо он ни пел. Услышать это можно уже сейчас — в разделе «Репертуар» к каждому треку есть аудиофрагмент.',
  },
  {
    q: 'У нас небольшая площадка — вы точно поместитесь?',
    a: 'Мы не привязаны к сцене — ходим по залу, взаимодействуем с гостями. Если сомневаетесь, оставьте заявку: уточним размеры площадки и количество гостей и честно скажем, подходит ли группа, или лучше рассмотреть другие форматы.',
  },
  {
    q: 'Вы исполняете только рок?',
    a: 'Нет — в репертуаре разные жанры. К каждому треку подходим творчески. Рок для нас это не жанр для ценителей, а драйв и эмоции, которые поднимут любой зал.',
  },
  {
    q: 'Есть ли у вас своё оборудование?',
    a: 'Да, мы приезжаем со своими инструментами, мониторами (по запросу), микрофонами и микшерным пультом. Остальным оборудованием занимается организатор, но при необходимости можем помочь и с этим. Подробности — в техническом райдере.',
  },
  {
    q: 'В какие города вы приезжаете?',
    a: 'Мы живём в Новокузнецке, но приехать можем куда угодно :)',
  },
  {
    q: 'Входит ли в стоимость дорога, бензин, проживание?',
    a: 'Нет, это оплачивается отдельно. Все условия в бытовом райдере, отправим вместе с договором.',
  },
  {
    q: 'Как происходит оплата?',
    a: 'Работаем по договору с предоплатой 20% от суммы.',
  },
];

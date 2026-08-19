import { BandMember, CaseStudy, CostumeLook, PackagePlan, Review, Track } from '../types';

export const BAND_MEMBERS: BandMember[] = [
  {
    id: '1',
    name: 'Анна Морозова',
    role: 'Ведущий вокал & Худрук',
    instrument: 'Lead Vocal, Аранжировки',
    category: 'vocal',
    bio: 'Харизматичный лидер и голос группы. Создаёт многоголосные партитуры и режиссуру каждого трека.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Илья Соколов',
    role: 'Вокал & Фронтмен',
    instrument: 'Vocal, Акустическая гитара',
    category: 'vocal',
    bio: 'Драйв и харизма на сцене. Управляет энергией танцпола и держит зал с первых секунд.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Дарья Романова',
    role: 'Вокал (Сопрано)',
    instrument: 'Vocal, Перкуссия',
    category: 'vocal',
    bio: 'Хрустальные верхние гармонии и мощный соул-вокал в зарубежных и отечественных хитах.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Максим Лебедев',
    role: 'Вокал (Баритон)',
    instrument: 'Vocal, Сэмплер',
    category: 'vocal',
    bio: 'Бархатный тембр и глубокие низкие гармонии, создающие плотный фундамент ансамбля.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Полина Васильева',
    role: 'Вокал (Альт)',
    instrument: 'Vocal, Клавишные подголоски',
    category: 'vocal',
    bio: 'Связующий голос в многоголосии, отвечающий за теплоту и винтажное звучание.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Артём Волков',
    role: 'Вокал & Рэп/Фанк',
    instrument: 'Vocal, Битбокс',
    category: 'vocal',
    bio: 'Ритмическая основа вокального блока, фанковый грув и современные танцевальные партии.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Кирилл Новиков',
    role: 'Соло & Ритм-гитара',
    instrument: 'Electric & Acoustic Guitars',
    category: 'rhythm',
    bio: 'Виртуозные гитарные риффы, фанковый чёс и мощные рок-соло в кульминациях.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'Сергей Белов',
    role: 'Бас-гитара',
    instrument: '5-String Bass & Synth Bass',
    category: 'rhythm',
    bio: 'Качественный низкий фундамент. Тот самый грув, от которого ноги сами идут в пляс.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '9',
    name: 'Денис Кузнецов',
    role: 'Ударные & Перкуссия',
    instrument: 'Drum Kit & Hybrid Triggers',
    category: 'rhythm',
    bio: 'Метрономическая точность и взрывная энергетика живых барабанов.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '10',
    name: 'Михаил Тарасов',
    role: 'Концертный звукорежиссёр',
    instrument: 'Digital Console, Live Audio Engine',
    category: 'sound',
    bio: 'Свой звукорежиссёр на каждом выезде. Гарантия идеального баланса 10 каналов в любом зале.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    colorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
  },
];

export const REPERTOIRE_TRACKS: Track[] = [
  // Атмосфера / Welcome
  {
    id: 't1',
    title: 'Can’t Take My Eyes Off You (Cinematic Funk Version)',
    originalArtist: 'Frankie Valli / Muse',
    category: 'atmosphere',
    tag: 'Открывает вечер',
    tagColor: 'terracotta',
    duration: '03:45',
    audioStyle: 'funk',
    bpm: 124,
    description: 'Идеальный трек для погружения гостей в атмосферу кинематографичного праздника.'
  },
  {
    id: 't2',
    title: 'Feeling Good (Soul Ensemble)',
    originalArtist: 'Nina Simone / Michael Bublé',
    category: 'atmosphere',
    tag: 'Инструментал & Welcome',
    tagColor: 'olive',
    duration: '03:20',
    audioStyle: 'ballad',
    bpm: 96,
    description: 'Богатая духовая и вокальная полифония для встречи гостей.'
  },
  {
    id: 't3',
    title: 'Get Lucky (Acoustic Funk Multi-vocal)',
    originalArtist: 'Daft Punk & Pharrell Williams',
    category: 'atmosphere',
    tag: 'Зал улыбается и качает',
    tagColor: 'yellow',
    duration: '04:10',
    audioStyle: 'funk',
    bpm: 116,
  },

  // Русские хиты
  {
    id: 't4',
    title: 'Седая ночь (Disco-Rock Symphony)',
    originalArtist: 'Юрий Шатунов',
    category: 'russian',
    tag: 'Зал поёт хором',
    tagColor: 'terracotta',
    duration: '03:50',
    audioStyle: 'rock',
    bpm: 130,
    description: 'Авторская аранжировка главного хита поколений: мощный рок-бит и 6 голосов.'
  },
  {
    id: 't5',
    title: 'Лететь (Cinematic Polyphony)',
    originalArtist: 'А-Мега / Антон Беляев',
    category: 'russian',
    tag: 'Мурашки по коже',
    tagColor: 'purple',
    duration: '04:15',
    audioStyle: 'ballad',
    bpm: 88,
  },
  {
    id: 't6',
    title: 'Хали-Гали, Паратрупер',
    originalArtist: 'Леприконсы',
    category: 'russian',
    tag: 'Взрыв танцпола',
    tagColor: 'yellow',
    duration: '03:30',
    audioStyle: 'rock',
    bpm: 140,
  },
  {
    id: 't7',
    title: 'Медлячок (Выпускной)',
    originalArtist: 'Баста',
    category: 'russian',
    tag: 'Фонарики в зале',
    tagColor: 'olive',
    duration: '04:05',
    audioStyle: 'ballad',
    bpm: 90,
  },
  {
    id: 't8',
    title: 'Группа крови',
    originalArtist: 'Кино',
    category: 'russian',
    tag: 'Мужской вокал & Рок-соло',
    tagColor: 'brown',
    duration: '03:55',
    audioStyle: 'rock',
    bpm: 125,
  },

  // Зарубежные хиты
  {
    id: 't9',
    title: 'Beggin’ (Maneskin Groove)',
    originalArtist: 'Madcon / Måneskin',
    category: 'foreign',
    tag: 'Драйв и бешеная энергия',
    tagColor: 'terracotta',
    duration: '03:35',
    audioStyle: 'rock',
    bpm: 134,
  },
  {
    id: 't10',
    title: 'Uptown Funk',
    originalArtist: 'Bruno Mars & Mark Ronson',
    category: 'foreign',
    tag: 'Все на танцполе',
    tagColor: 'yellow',
    duration: '04:20',
    audioStyle: 'funk',
    bpm: 115,
  },
  {
    id: 't11',
    title: 'Believer (Heavy Ensemble)',
    originalArtist: 'Imagine Dragons',
    category: 'foreign',
    tag: 'Кульминация вечера',
    tagColor: 'purple',
    duration: '03:40',
    audioStyle: 'rock',
    bpm: 125,
  },
  {
    id: 't12',
    title: 'Blinding Lights',
    originalArtist: 'The Weeknd',
    category: 'foreign',
    tag: 'Синти-поп & 6 голосов',
    tagColor: 'terracotta',
    duration: '03:25',
    audioStyle: 'disco',
    bpm: 171,
  },

  // Раскачать зал (Dance)
  {
    id: 't13',
    title: 'Малиновая лада & Федерико Феллини (Mashup)',
    originalArtist: 'GAYAZOV$ BROTHER$ / Galibri & Mavik',
    category: 'dance',
    tag: 'Безудержные танцы',
    tagColor: 'yellow',
    duration: '04:00',
    audioStyle: 'pop',
    bpm: 128,
  },
  {
    id: 't14',
    title: 'Sex Bomb & It’s Raining Men',
    originalArtist: 'Tom Jones / The Weather Girls',
    category: 'dance',
    tag: 'Шоу-номер вокалисток',
    tagColor: 'terracotta',
    duration: '03:50',
    audioStyle: 'disco',
    bpm: 126,
  },
  {
    id: 't15',
    title: 'Юра Шатунов vs Avicii (Special Mashup)',
    originalArtist: 'NAKAMA Exclusive',
    category: 'dance',
    tag: 'Эксклюзив NAKAMA',
    tagColor: 'purple',
    duration: '04:30',
    audioStyle: 'disco',
    bpm: 128,
  },

  // На разрыв (Rock & Energy)
  {
    id: 't16',
    title: 'Лесник & Кукла колдуна',
    originalArtist: 'Король и Шут',
    category: 'rock',
    tag: 'Скандируют хором',
    tagColor: 'terracotta',
    duration: '04:10',
    audioStyle: 'rock',
    bpm: 145,
  },
  {
    id: 't17',
    title: 'Smells Like Teen Spirit / Sweet Dreams',
    originalArtist: 'Nirvana / Eurythmics',
    category: 'rock',
    tag: 'На разрыв',
    tagColor: 'brown',
    duration: '04:00',
    audioStyle: 'rock',
    bpm: 120,
  },

  // Медляки & Романтика
  {
    id: 't18',
    title: 'Perfect (Duet Symphony)',
    originalArtist: 'Ed Sheeran & Beyoncé',
    category: 'slow',
    tag: 'Для первого танца',
    tagColor: 'olive',
    duration: '04:20',
    audioStyle: 'ballad',
    bpm: 95,
  },
  {
    id: 't19',
    title: 'Shallow',
    originalArtist: 'Lady Gaga & Bradley Cooper',
    category: 'slow',
    tag: 'Эмоциональный пик',
    tagColor: 'purple',
    duration: '03:35',
    audioStyle: 'ballad',
    bpm: 96,
  },
  {
    id: 't20',
    title: 'Сансара',
    originalArtist: 'Баста',
    category: 'slow',
    tag: 'Объединяет всех гостей',
    tagColor: 'terracotta',
    duration: '04:40',
    audioStyle: 'ballad',
    bpm: 82,
  },

  // Финал программы
  {
    id: 't21',
    title: 'The Show Must Go On (Cinema Finale)',
    originalArtist: 'Queen',
    category: 'final',
    tag: 'Грандиозный финал',
    tagColor: 'yellow',
    duration: '04:45',
    audioStyle: 'rock',
    bpm: 84,
  },
  {
    id: 't22',
    title: 'Небо славян / Конь (A Cappella + Rock)',
    originalArtist: 'Любэ / Алиса',
    category: 'final',
    tag: 'Финальный аккорд',
    tagColor: 'brown',
    duration: '03:55',
    audioStyle: 'rock',
    bpm: 110,
  },

  // Новогодняя программа
  {
    id: 't23',
    title: 'Last Christmas & Happy New Year (Funk Edition)',
    originalArtist: 'Wham! / ABBA',
    category: 'newyear',
    tag: 'Новогодний корпоратив',
    tagColor: 'olive',
    duration: '04:15',
    audioStyle: 'pop',
    bpm: 118,
  },
  {
    id: 't24',
    title: 'Звенит январская вьюга',
    originalArtist: 'Нина Бродская (к/ф Иван Васильевич)',
    category: 'newyear',
    tag: 'Новогодний хит',
    tagColor: 'terracotta',
    duration: '03:10',
    audioStyle: 'disco',
    bpm: 135,
  }
];

export const PACKAGES: PackagePlan[] = [
  {
    id: 'basic',
    name: 'Базовый минимум',
    subtitle: 'Драйв и качественный живой звук для яркого события',
    price: '83 000 ₽',
    priceNum: 83000,
    duration: '60 минут живого выступления',
    badge: 'Популярно для ДР и корпоративов',
    badgeColor: 'bg-[#72734D]',
    recommendedFor: 'Корпоративы, дни рождения и юбилеи, где главная задача — зажечь танцпол и подарить живой звук без лишних пауз.',
    features: [
      'Полный состав группы: 10 человек на сцене (6 вокалистов + ритм-секция)',
      '60 минут мощного непрерывного живого выступления (или 2 блока по 30 мин)',
      'Выбор треков из нашего фирменного репертуара (100+ композиций)',
      'Свой штатный звукорежиссёр — гарантированный баланс и объём в зале',
      'Согласование стилистики костюмов из нашего Lookbook под ваш дресс-код',
      'Согласование тайминга и ключевых моментов с ведущим вечера'
    ],
    exclusiveFeatures: [
      'Живой звук 100% без плейбеков',
      'Штатный звукорежиссер включен'
    ],
    isPopular: false
  },
  {
    id: 'luxury',
    name: 'Роскошный максимум',
    subtitle: 'Кинематографичный саундтрек вечера с режиссурой и спецномерами',
    price: '98 000 ₽',
    priceNum: 98000,
    duration: '90 минут + 30 минут Welcome',
    badge: 'Выбор №1 для свадеб и премиум-событий',
    badgeColor: 'bg-[#9B2F19]',
    recommendedFor: 'Свадьбы, масштабные корпоративные премии, юбилеи компаний и статусные события, где важна каждая секунда сценария.',
    features: [
      'Полный состав группы: 10 человек на сцене (6 вокалистов)',
      '90 минут живой концертной программы (3 блока по 30 мин или 2 по 45 мин)',
      '30 минут инструментальной лаунж-музыки во время встречи гостей (Welcome-зона)',
      'До 5 персональных каверов, разученных эксклюзивно под ваше событие',
      'Детальный созвон с организатором и ведущим: проработка драматургии и эмоциональных пиков',
      'Смена сценических образов между отделениями (2 комплекта костюмов)',
      'Музыкальные отбивки и интерактивы с залом в связке с ведущим',
      'Собственный звукорежиссер и райдер-контроль площадки'
    ],
    exclusiveFeatures: [
      '30 минут Welcome в подарок',
      'До 5 эксклюзивных каверов',
      'Смена костюмов (2 образа)',
      'Полная интеграция в сценарий'
    ],
    isPopular: true
  }
];

export const COSTUME_LOOKS: CostumeLook[] = [
  {
    id: 'look1',
    title: 'Black Tie Cinema',
    subtitle: 'Кинематографичная классика',
    description: 'Элегантные смокинги, вечерние терракотово-черные платья в пол и шелковые акценты. Идеально для статусных свадеб, гала-ужинов и премий.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    palette: ['#1A1009', '#9B2F19', '#F1D8C1', '#000000'],
    suitableFor: 'Black Tie свадьбы, гала-ужины, церемонии награждения'
  },
  {
    id: 'look2',
    title: 'Smart Stage & Monochrome',
    subtitle: 'Стильный монохром с акцентами',
    description: 'Лаконичные брючные костюмы, оливковые и бежевые текстуры, расслабленный шик. Для динамичных корпоративов и стильных закрытых вечеринок.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
    palette: ['#3A2312', '#72734D', '#F1D8C1', '#2A2A2A'],
    suitableFor: 'IT-корпоративы, частные дни рождения, лофты'
  },
  {
    id: 'look3',
    title: 'Retro Glitz & Disco Rock',
    subtitle: 'Блеск софитов и драйв',
    description: 'Винтажный блеск, бархатные жакеты, акценты в цветах винила и теплого золота. Создано для безудержного танцевального отрыва.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    palette: ['#F3A300', '#61406F', '#9B2F19', '#1C1008'],
    suitableFor: 'Новогодние ночи, тематические фестивали, диско-пати'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case1',
    title: 'Годовой корпоратив IT-холдинга «Контур Сибирь»',
    client: 'IT-холдинг «Контур»',
    eventType: 'corporate',
    eventTypeName: 'Корпоратив',
    city: 'Новосибирск',
    guestsCount: 280,
    year: '2025',
    task: 'Переключить команду разработчиков и топ-менеджеров после тяжелого релизного года, объединить 280 человек разного возраста без ощущения навязчивого тимбилдинга.',
    solution: 'Вместе с ведущим выстроили программу в 3 акта: соул-welcome, блок легендарного рока в авторском многоголосии и танцевальный мэшап-блок с хоровым пением.',
    result: '100% гостей на танцполе уже к 20-й минуте программы. Бис продолжался 45 минут сверх тайминга.',
    quote: 'NAKAMA — это совсем другой уровень. Когда на сцене 6 вокалистов, звук буквально окутывает зал. Никакой фальши, мощнейший контакт с людьми.',
    organizer: 'Екатерина Власова',
    organizerRole: 'Руководитель HR & Event-отдела',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'case2',
    title: 'Кинематографичная свадьба в шатре на берегу Оби',
    client: 'Александр & Мария',
    eventType: 'wedding',
    eventTypeName: 'Свадьба',
    city: 'Новосибирск / Бердск',
    guestsCount: 120,
    year: '2025',
    task: 'Создать саундтрек для романтической церемонии, провести первый танец под живой ансамбль и взорвать вечер рок-сетом.',
    solution: 'Разучили любимую песню пары для первого танца в симфо-рок версии. Оформили костюмы в тон оформления свадьбы (терракота + беж).',
    result: 'Слёзы счастья на первом танце и видео в соцсетях гостей с миллионными охватами.',
    quote: 'Мы хотели, чтобы свадьба ощущалась как дорогое романтическое кино. Ребята создали именно это. Гости до сих пор спрашивают контакты!',
    organizer: 'Алина Добролюбова',
    organizerRole: 'Свадебный продюсер WED_STORY',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'case3',
    title: 'Юбилей промышленной компании «СибМаш»',
    client: 'ГК «СибМаш»',
    eventType: 'corporate',
    eventTypeName: 'Юбилей компании',
    city: 'Кемерово',
    guestsCount: 450,
    year: '2025',
    task: 'Выступление на большой концертной площадке для аудитории 40+ с высокими требованиями к качеству звука и репертуару.',
    solution: 'Приехали с полным комплектом радиосистем и своим звукорежиссёром. Составили сет-лист из золотых хитов рока и советской классики в свежем прочтении.',
    result: 'Безупречный звук на сложной площадке, стоячая овация руководства и контракт на следующее мероприятие.',
    quote: 'У группы свой звукорежиссер — это сняло с нас 90% головной боли по райдеру. Отработали на 200%.',
    organizer: 'Михаил Чернов',
    organizerRole: 'Генеральный директор «Event Pro»',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Дмитрий Мельников',
    role: 'Ведущий крупных мероприятий, резидент Top15',
    companyOrEvent: 'Top15 Siberia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Работать с NAKAMA — это профессиональный кайф для ведущего. Они слушают сценарий, не лезут вперед программы, дают точные музыкальные подложки и взрывают зал ровно тогда, когда это нужно по драматургии.',
    eventDate: 'Декабрь 2025',
    city: 'Новосибирск'
  },
  {
    id: 'r2',
    author: 'Ольга Смирнова',
    role: 'Event-директор агентства «Событие Года»',
    companyOrEvent: 'Event Agency «Событие Года»',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Когда у тебя заказчик уровня федерального банка, права на ошибку нет. NAKAMA приехали за 3 часа до начала, провели идеальный саундчек со своим звукорежиссером и выглядели на сцене как кинозвезды. Рекомендую всем коллегам по цеху.',
    eventDate: 'Январь 2026',
    city: 'Томск'
  },
  {
    id: 'r3',
    author: 'Артем и Кристина',
    role: 'Молодожены',
    companyOrEvent: 'Свадьба в загородном клубе',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Это было лучшее решение для нашей свадьбы! 10 человек на сцене создают невероятный масштаб. Когда 6 человек запели акапелла, у всех гостей побежали мурашки. Спасибо за наш лучший день!',
    eventDate: 'Август 2025',
    city: 'Новосибирск'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Можно ли скорректировать репертуар или добавить наши любимые песни?',
    answer: 'Да! Вы можете составить свой стоп-лист и виш-лист из нашего репертуара (более 100 треков). В пакете «Роскошный максимум» мы также разучиваем до 5 эксклюзивных песен специально под ваше событие.'
  },
  {
    question: 'Что нужно от площадки по техническому райдеру?',
    answer: 'Мы берем на себя заботу о звуке: всегда приезжаем со своим штатным звукорежиссером, персональными радиосистемами и ушным мониторингом. От площадки требуется только портальный звук и сцена. Для агентств мы предоставляем готовый PDF технического райдера.'
  },
  {
    question: 'Выезжаете ли вы в другие города России?',
    answer: 'Да, мы базируемся в Сибири (Новосибирск), но регулярно выступаем по всей стране: Москва, Санкт-Петербург, Красноярск, Кемерово, Томск, Барнаул, Екатеринбург, Сочи и др. Бытовой райдер оптимизирован для комфортных переездов.'
  },
  {
    question: 'Может ли группа выступить меньшим составом (например, вчетвером)?',
    answer: 'Принципиальная позиция NAKAMA — мы не предлагаем «урезанную» версию. На сцене всегда полный состав из 10 человек (6 вокалистов и ритм-секция). Именно в этом составе рождается фирменное многоголосое объемное звучание, ради которого нас выбирают.'
  },
  {
    question: 'Как происходит бронирование даты и оплата?',
    answer: 'После уточнения деталей сценария и тайминга мы фиксируем дату договором с предоплатой 30%. Оставшаяся часть оплачивается в день мероприятия после саундчека. Работаем как с физлицами, так и по безналичному расчету с юрлицами (ИП/ООО) со всеми закрывающими документами.'
  }
];

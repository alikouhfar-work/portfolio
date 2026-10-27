import type { Locale } from '@/config/site'
import type { Project, ProjectCopy, ProjectMeta } from '@/types/project'

type ProjectEntry = ProjectMeta & {
  copy: Record<Locale, ProjectCopy>
}

export const PROJECT_ENTRIES: Array<ProjectEntry> = [
  {
    id: 'b4d8e1a7-2c55-4f9a-8d11-6a3f7c2b9e11',
    link: 'https://shiraliniabooks.com',
    cover: 'books',
    scope: 'client',
    visibility: 'public',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Prisma', 'PostgreSQL'],
    copy: {
      en: {
        year: '2026',
        title: 'Shiralinia Books — The Author’s Bookstore',
        category: 'Frontend / E-commerce & Publishing',
        challenge:
          'A Persian-first bookstore for historian Jafar Shirali-Nia needed direct sales without a marketplace: a complete RTL catalogue, guest checkout, and order operations a small team could run from a phone.',
        approach:
          'Built a modular App Router codebase around catalogue, cart, checkout, orders and payments. Server components query Prisma/Postgres, a localStorage-hydrated cart survives reloads, and immutable order snapshots keep history intact.',
        outcome:
          'Readers move from catalogue to paid order in one RTL flow, with ZarinPal or SnapPay instalments, a trackable receipt, and free digital downloads. A Telegram mini-app admin handles orders and new titles.',
      },
      de: {
        year: '2026',
        title: 'Shiralinia Books — Der Buchladen des Autors',
        category: 'Frontend / E-Commerce & Verlagswesen',
        challenge:
          'Eine persischsprachige Buchhandlung für den Historiker Jafar Shirali-Nia brauchte Direktverkauf ohne Marktplatz: vollständiger RTL-Katalog, Gast-Checkout und Bestellabwicklung, die ein kleines Team vom Telefon aus steuern kann.',
        approach:
          'Modulare App-Router-Codebasis für Katalog, Warenkorb, Checkout, Bestellungen und Zahlungen. Server Components lesen Prisma/Postgres, ein per localStorage hydratisierter Warenkorb überlebt Reloads, unveränderliche Bestell-Snapshots halten die Historie intakt.',
        outcome:
          'Leserinnen und Leser gelangen in einem RTL-Fluss vom Katalog zur bezahlten Bestellung — mit ZarinPal- oder SnapPay-Ratenzahlung, nachverfolgbarem Beleg und kostenlosen digitalen Downloads. Ein Telegram-Mini-App-Admin verwaltet Bestellungen und neue Titel.',
      },
      fa: {
        year: '۲۰۲۶',
        title: 'کتاب‌فروشی شیرعلی‌نیا — فروشگاه اختصاصی نویسنده',
        category: 'فرانت‌اند / تجارت الکترونیک و نشر',
        challenge:
          'کتاب‌فروشی فارسی‌زبان برای جعفر شیرعلی‌نیا به فروش مستقیم بدون مارکت‌پلیس نیاز داشت: کاتالوگ کامل راست‌به‌چپ، تسویه مهمان و مدیریت سفارش‌هایی که تیم کوچک بتواند از گوشی اداره کند.',
        approach:
          'کدبیس ماژولار App Router پیرامون کاتالوگ، سبد، تسویه، سفارش و پرداخت. سرور کامپوننت‌ها از Prisma/Postgres می‌خوانند، سبد با hydration از localStorage دوام دارد و اسنپ‌شات تغییرناپذیر اقلام، تاریخچه سفارش را حفظ می‌کند.',
        outcome:
          'خواننده در یک جریان راست‌به‌چپ از کاتالوگ به سفارش پرداخت‌شده می‌رسد — با درگاه زرین‌پال یا اقساط اسنپ‌پی، رسید قابل پیگیری و دانلود رایگان نسخه دیجیتال. مینی‌اپ تلگرام سفارش‌ها و کتاب‌های تازه را مدیریت می‌کند.',
      },
    },
  },
  {
    id: 'e7a2c9f1-4b88-4d6e-9c33-5f1a8d2b7c22',
    link: 'https://martexart.com',
    cover: 'art',
    scope: 'client',
    visibility: 'public',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'TanStack Query', 'AWS S3'],
    copy: {
      en: {
        year: '2026',
        title: 'MARTEX — Iranian Women Painters',
        category: 'Frontend / Arts & Culture',
        challenge:
          'Introduce 209 Iranian women painters to an international audience without flattening them into one grid; the archive had to carry a book, biographies, artworks, tours and editorial writing.',
        approach:
          'A feature-sliced App Router architecture: 224 statically generated artist routes, an infinite-scroll API for the index, S3-backed portraits and artworks, and a shared editorial shell for books, articles and events.',
        outcome:
          'A gallery-like rhythm of large serif headlines, bird motifs and fine rules; artist timelines and artwork modals open in place, so browsing never loses the index.',
      },
      de: {
        year: '2026',
        title: 'MARTEX — Iranische Malerinnen',
        category: 'Frontend / Kunst & Kultur',
        challenge:
          '209 iranische Malerinnen einem internationalen Publikum vorstellen, ohne sie in einem einzigen Raster zu vereinheitlichen; das Archiv musste ein Buch, Biografien, Werke, Touren und redaktionelle Texte tragen.',
        approach:
          'Feature-sliced App-Router-Architektur: 224 statisch generierte Künstlerrouten, eine Infinite-Scroll-API für den Index, S3-gestützte Porträts und Werke sowie eine gemeinsame redaktionelle Hülle für Bücher, Artikel und Events.',
        outcome:
          'Ein galerieartiger Leserhythmus aus großen Serif-Überschriften, Vogel-Motiven und feinen Linien; Künstler-Timelines und Werk-Modals öffnen sich an Ort und Stelle, ohne den Index zu verlassen.',
      },
      fa: {
        year: '۲۰۲۶',
        title: 'مارتکس — نقاشان زن ایرانی',
        category: 'فرانت‌اند / هنر و فرهنگ',
        challenge:
          'معرفی ۲۰۹ نقاش زن ایرانی به مخاطب جهانی، بدون یکسان‌سازی آن‌ها در یک شبکه تکراری؛ آرشیو باید کتاب، زندگی‌نامه‌ها، آثار، تورها و نوشتار تحریریه را کنار هم نگه می‌داشت.',
        approach:
          'معماری App Router با تفکیک فیچر: ۲۲۴ مسیر ایستای هنرمند، API اسکرول بی‌نهایت برای ایندکس، پرتره و آثار روی S3، و پوسته تحریریه مشترک برای کتاب‌ها، مقالات و رویدادها.',
        outcome:
          'ریتم گالری‌وار در مرور: تیترهای بزرگ سریف، نقش پرنده و خطوط نازک؛ تایم‌لاین هنرمند و مودال آثار در همان صفحه باز می‌شوند و ایندکس را از دست نمی‌دهند.',
      },
    },
  },
  {
    id: 'c1f3a9b2-7d11-4e8c-9a22-5f6b1d8e3c44',
    cover: 'fleet',
    scope: 'client',
    visibility: 'nda',
    stack: ['React', 'TypeScript', 'MapLibre', 'TanStack Query', 'SignalR'],
    copy: {
      en: {
        year: '2024–26',
        title: 'Sepahtan — Live Fleet Operations',
        category: 'Frontend / Logistics SaaS',
        challenge:
          'Continuous vehicle telemetry, map rendering under load, and dispatchers who cannot afford to lose context mid-shift.',
        approach:
          'Isolated map layers from the data layer, normalised live streams into a query cache, and kept table and map state synchronised through a single owner.',
        outcome:
          'Dispatchers follow live fleets without the interface stalling: calm map layers, persistent table state, and status changes that never reset the working context.',
      },
      de: {
        year: '2024–26',
        title: 'Sepahtan — Live-Flottenbetrieb',
        category: 'Frontend / Logistik-SaaS',
        challenge:
          'Kontinuierliche Fahrzeug-Telemetrie, Kartenrendering unter Last und Disponenten, die mitten in der Schicht keinen Kontext verlieren dürfen.',
        approach:
          'Kartenebenen von der Datenschicht getrennt, Live-Streams in einem Query-Cache normalisiert und Tabellen- sowie Kartenzustand über einen einzigen Eigentümer synchron gehalten.',
        outcome:
          'Disponenten verfolgen Live-Flotten, ohne dass die Oberfläche stockt: ruhige Kartenebenen, beständige Tabellenzustände und Statuswechsel, die den Arbeitskontext nie zurücksetzen.',
      },
      fa: {
        year: '۲۰۲۴–۲۶',
        title: 'سپاهتان — مدیریت زنده ناوگان',
        category: 'فرانت‌اند / SaaS لجستیک',
        challenge:
          'تلهمتری پیوسته ناوگان، رندر نقشه زیر بار و دیسپچرهایی که در میانه شیفت نمی‌توانند زمینه کار را از دست بدهند.',
        approach:
          'لایه نقشه از لایه داده جدا شد، جریان‌های زنده در کش کوئری نرمال‌سازی شدند و وضعیت جدول و نقشه از طریق یک مالک واحد همگام ماند.',
        outcome:
          'دیسپچرها ناوگان زنده را دنبال می‌کنند بدون آنکه رابط متوقف شود: لایه‌های آرام نقشه، وضعیت پایدار جدول و تغییر وضعیتی که زمینه کار را بازنشانی نمی‌کند.',
      },
    },
  },
  {
    id: 'a7d2f8c1-3b44-4e9a-8c11-6f2d9b7e1a55',
    link: 'https://isilearning.ir',
    cover: 'learning',
    scope: 'client',
    visibility: 'public',
    stack: ['Angular', 'RxJS', 'TypeScript', 'SCSS'],
    copy: {
      en: {
        year: '2023–24',
        title: 'ISILEARNING — Online Learning Platform',
        category: 'Frontend / EdTech Platform',
        challenge: 'A large course catalogue, mixed devices, and learners on constrained connections.',
        approach:
          'Split the Angular surface into lazy route groups, moved repeated UI into primitives, and kept asynchronous course data in predictable RxJS streams.',
        outcome:
          'Learners reach course content faster, and a single navigation model keeps catalogue, lessons and progress coherent across devices.',
      },
      de: {
        year: '2023–24',
        title: 'ISILEARNING — Online-Lernplattform',
        category: 'Frontend / EdTech-Plattform',
        challenge: 'Ein großer Kurskatalog, gemischte Geräte und Lernende mit eingeschränkter Verbindung.',
        approach:
          'Die Angular-Oberfläche in lazy geladene Routengruppen aufgeteilt, wiederkehrende UI in Primitiven überführt und asynchrone Kursdaten in vorhersehbaren RxJS-Strömen gehalten.',
        outcome:
          'Lernende erreichen Kursinhalte schneller; ein einziges Navigationsmodell hält Katalog, Lektionen und Fortschritt über alle Geräte hinweg zusammen.',
      },
      fa: {
        year: '۲۰۲۳–۲۴',
        title: 'ISILEARNING — پلتفرم آموزش آنلاین',
        category: 'فرانت‌اند / پلتفرم آموزشی',
        challenge: 'کاتالوگ بزرگ دوره‌ها، دستگاه‌های متنوع و یادگیرندگانی با اتصال محدود.',
        approach:
          'سطح Angular به گروه‌های مسیر با بارگذاری تنبل تقسیم شد، رابط‌های تکراری به پریمیتیوها منتقل شدند و داده‌های ناهمگام دوره در جریان‌های قابل‌پیش‌بینی RxJS باقی ماندند.',
        outcome:
          'یادگیرندگان سریع‌تر به محتوای دوره می‌رسند و یک مدل ناوبری یکدست، کاتالوگ، درس‌ها و پیشرفت را در همه دستگاه‌ها کنار هم نگه می‌دارد.',
      },
    },
  },
  {
    id: 'f2b8c1d7-6e33-4a9b-9c11-8d2f7a5e1b66',
    link: 'https://tbao.ir',
    cover: 'commerce',
    scope: 'client',
    visibility: 'public',
    stack: ['JavaScript', 'Webpack', 'Bootstrap'],
    copy: {
      en: {
        year: '2023',
        title: 'TBAO — Online Store',
        category: 'Frontend / E-commerce',
        challenge:
          'A media-heavy storefront where catalogue browsing and checkout had to stay fast on mid-range devices.',
        approach:
          'Code-split the bundle by route, extracted reusable storefront components, and removed render-blocking dependencies from the purchase path.',
        outcome:
          'A purchase path that loads with the catalogue instead of after it — product lists, cart and checkout stay responsive on modest hardware.',
      },
      de: {
        year: '2023',
        title: 'TBAO — Online-Shop',
        category: 'Frontend / E-Commerce',
        challenge:
          'Ein medienlastiger Storefront, bei dem Katalog und Checkout auf Mittelklasse-Geräten schnell bleiben mussten.',
        approach:
          'Das Bundle pro Route aufgeteilt, wiederverwendbare Storefront-Komponenten extrahiert und render-blockierende Abhängigkeiten aus dem Kaufpfad entfernt.',
        outcome:
          'Ein Kaufpfad, der mit dem Katalog lädt statt danach — Produktlisten, Warenkorb und Checkout bleiben auf bescheidener Hardware reaktionsfähig.',
      },
      fa: {
        year: '۲۰۲۳',
        title: 'TBAO — فروشگاه آنلاین',
        category: 'فرانت‌اند / تجارت الکترونیک',
        challenge:
          'فروشگاهی پرمحتوا و تصویرمحور که مرور کاتالوگ و تسویه باید روی دستگاه‌های میان‌رده سریع می‌ماند.',
        approach:
          'باندل بر اساس مسیر تقسیم شد، کامپوننت‌های قابل‌استفاده دوباره فروشگاه استخراج شدند و وابستگی‌های مسدودکننده رندر از مسیر خرید حذف شدند.',
        outcome:
          'مسیر خریدی که همراه با کاتالوگ بارگذاری می‌شود، نه پس از آن — فهرست محصولات، سبد و تسویه روی سخت‌افزار معمولی پاسخ‌گو می‌مانند.',
      },
    },
  },
  {
    id: 'e9c1a7f2-5b44-4d8c-9a11-3f7d2c8b6e77',
    cover: 'portfolio',
    scope: 'personal',
    visibility: 'public',
    stack: ['Next.js', 'TypeScript', 'Motion', 'Tailwind CSS'],
    copy: {
      en: {
        year: '2026',
        title: 'Portfolio — Studio Gallery',
        category: 'Frontend / Personal site',
        challenge:
          'A portfolio that had to prove systems thinking without borrowing the visual language of template sites.',
        approach:
          'Composed the page as a studio gallery: a disciplined grid, restrained typography, custom-drawn project covers, and a single compact portrait instead of a hero image.',
        outcome:
          'A portfolio read as quiet surfaces and precise typography first, and a résumé second — personality without the template.',
      },
      de: {
        year: '2026',
        title: 'Portfolio — Studio-Galerie',
        category: 'Frontend / Persönliche Website',
        challenge:
          'Ein Portfolio, das Systemdenken beweisen musste, ohne die Bildsprache von Template-Seiten zu übernehmen.',
        approach:
          'Die Seite als Studio-Galerie komponiert: disziplinierte Raster, zurückhaltende Typografie, eigens gezeichnete Projekt-Cover und ein einzelnes kompaktes Porträt statt eines Hero-Bildes.',
        outcome:
          'Ein Portfolio, das zuerst als ruhige Flächen und präzise Typografie gelesen wird und erst dann als Lebenslauf — Persönlichkeit ohne Template.',
      },
      fa: {
        year: '۲۰۲۶',
        title: 'پورتفولیو — گالری استودیویی',
        category: 'فرانت‌اند / وب‌سایت شخصی',
        challenge:
          'پورتفولیویی که باید تفکر سیستمی را ثابت می‌کرد، بی‌آنکه زبان بصری قالب‌های آماده را قرض بگیرد.',
        approach:
          'صفحه به‌مثابه یک گالری استودیویی چیده شد: شبکه منضبط، تایپوگرافی آرام، کاورهای پروژه که با کد کشیده شده‌اند و یک پرتره فشرده به‌جای تصویر هیروی بزرگ.',
        outcome:
          'پورتفولیویی که نخست به‌عنوان سطوح آرام و تایپوگرافی دقیق خوانده می‌شود و سپس رزومه — شخصیت، بدون قالب.',
      },
    },
  },
  {
    id: 'd4e8b2a1-9c33-4f7d-8a22-1b6e5c9d7f88',
    cover: 'watchLog',
    scope: 'personal',
    visibility: 'public',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS 4',
      'NextAuth',
      'TMDB API',
    ],
    copy: {
      en: {
        year: '2026',
        title: 'Chronicle — Film & TV Journal',
        category: 'Frontend / Personal product',
        challenge:
          'A personal watch log needed to track movies, seasons and individual episodes without losing the thread across discovery, library and progress views.',
        approach:
          'Built a module-first App Router architecture: Prisma models for shows, movies, seasons, episodes and tracking; server actions for writes; TMDB-backed discovery; and one library surface with filters, status and per-episode progress.',
        outcome:
          'One searchable archive for everything watched or planned — dashboard stats, up-next episodes, episode ratings and notes, and a PWA shell that behaves like an app.',
      },
      de: {
        year: '2026',
        title: 'Chronicle — Film- & Serien-Tagebuch',
        category: 'Frontend / Persönliches Produkt',
        challenge:
          'Ein persönliches Seh-Tagebuch musste Filme, Staffeln und einzelne Episoden verfolgen, ohne den Faden zwischen Entdeckung, Bibliothek und Fortschritt zu verlieren.',
        approach:
          'Modulare App-Router-Architektur: Prisma-Modelle für Serien, Filme, Staffeln, Episoden und Tracking; Server Actions für Schreibzugriffe; TMDB-gestützte Entdeckung; eine Bibliotheksfläche mit Filtern, Status und Episodenfortschritt.',
        outcome:
          'Ein durchsuchbares Archiv für alles Gesehene und Geplante — Dashboard-Statistiken, nächste Episoden, Episodenbewertungen und Notizen sowie eine PWA-Hülle, die sich wie eine App anfühlt.',
      },
      fa: {
        year: '۲۰۲۶',
        title: 'کرونیکل — دفتر فیلم و سریال',
        category: 'فرانت‌اند / محصول شخصی',
        challenge:
          'یک دفتر تماشای شخصی باید فیلم‌ها، فصل‌ها و تک‌تک قسمت‌ها را دنبال می‌کرد، بدون از دست دادن رشته میان کشف، کتابخانه و پیشرفت.',
        approach:
          'معماری ماژول‌محور App Router: مدل‌های Prisma برای سریال، فیلم، فصل، قسمت و پیگیری؛ اکشن‌های سرور برای نوشتن؛ کشف مبتنی بر TMDB؛ و یک سطح کتابخانه با فیلترها، وضعیت و پیشرفت هر قسمت.',
        outcome:
          'یک آرشیو جست‌وجوپذیر برای همه چیزهای دیده‌شده و برنامه‌ریزی‌شده — آمار داشبورد، قسمت‌های بعدی، امتیاز و یادداشت قسمت‌ها و پوسته PWA که مانند یک اپ کار می‌کند.',
      },
    },
  },
]

const localizedProjects = (locale: Locale): Array<Project> =>
  PROJECT_ENTRIES.map(({ copy, ...meta }) => ({ ...meta, ...copy[locale] }))

export const PROJECTS: Record<Locale, Array<Project>> = {
  en: localizedProjects('en'),
  de: localizedProjects('de'),
  fa: localizedProjects('fa'),
}

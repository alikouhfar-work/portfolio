import { Locale } from '@/app/[lang]/dictionaries'
import { Project } from '@/types/project'

export const PROJECTS: Record<Locale, Project[]> = {
  en: [
    {
      id: 'b4d8e1a7-2c55-4f9a-8d11-6a3f7c2b9e11',
      title: 'Shiralinia Books — Author Bookstore',
      category: 'E-commerce / Publishing',
      year: '2026',
      cover: 'books',
      scope: 'client',
      status: 'live',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Prisma', 'PostgreSQL'],
      link: 'https://shiraliniabooks.com',
      constraints:
        'A Persian-first bookstore for historian Jafar Shirali-Nia needed direct sales without a marketplace: a complete RTL catalogue, guest checkout, and order operations a small team could run from a phone.',
      approach:
        'Built a modular App Router codebase around catalogue, cart, checkout, orders and payments. Server components query Prisma/Postgres, a localStorage-hydrated cart survives reloads, and immutable order snapshots keep history intact.',
      impact:
        'Readers move from catalogue to paid order in one RTL flow, with ZarinPal or SnapPay instalments, a trackable receipt, and free digital downloads. A Telegram mini-app admin handles orders and new titles.',
    },
    {
      id: 'e7a2c9f1-4b88-4d6e-9c33-5f1a8d2b7c22',
      title: 'MARTEX — Iranian Women Painters',
      category: 'Arts & Culture / Editorial',
      year: '2026',
      cover: 'art',
      scope: 'client',
      status: 'live',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'TanStack Query', 'AWS S3'],
      link: 'https://martexart.com',
      constraints:
        'Introduce 209 Iranian women painters to an international audience without flattening them into one grid; the archive had to carry a book, biographies, artworks, tours and editorial writing.',
      approach:
        'A feature-sliced App Router architecture: 224 statically generated artist routes, an infinite-scroll API for the index, S3-backed portraits and artworks, and a shared editorial shell for books, articles and events.',
      impact:
        'A gallery-like rhythm of large serif headlines, bird motifs and fine rules; artist timelines and artwork modals open in place, so browsing never loses the index.',
    },
    {
      id: 'c1f3a9b2-7d11-4e8c-9a22-5f6b1d8e3c44',
      title: 'Sepahtan — Real-Time Fleet Operations',
      category: 'Client / Logistics SaaS',
      year: '2024–26',
      cover: 'fleet',
      scope: 'client',
      status: 'nda',
      tech: ['React', 'TypeScript', 'MapLibre', 'TanStack Query', 'SignalR'],
      link: '#',
      constraints:
        'Continuous vehicle telemetry, map rendering under load, and dispatchers who cannot afford to lose context mid-shift.',
      approach:
        'Isolated map layers from the data layer, normalised live streams into a query cache, and kept table and map state synchronised through a single owner.',
      impact:
        'Dispatchers follow live fleets without the interface stalling: calm map layers, persistent table state, and status changes that never reset the working context.',
    },
    {
      id: 'a7d2f8c1-3b44-4e9a-8c11-6f2d9b7e1a55',
      title: 'ISILEARNING — Online Learning Platform',
      category: 'EdTech Platform',
      year: '2023–24',
      cover: 'learning',
      scope: 'client',
      status: 'live',
      tech: ['Angular', 'RxJS', 'TypeScript', 'SCSS'],
      link: 'https://isilearning.ir',
      constraints:
        'A large course catalogue, mixed devices, and learners on constrained connections.',
      approach:
        'Split the Angular surface into lazy route groups, moved repeated UI into primitives, and kept asynchronous course data in predictable RxJS streams.',
      impact:
        'Learners reach course content faster, and a single navigation model keeps catalogue, lessons and progress coherent across devices.',
    },
    {
      id: 'f2b8c1d7-6e33-4a9b-9c11-8d2f7a5e1b66',
      title: 'TBAO — E-commerce Storefront',
      category: 'E-commerce Platform',
      year: '2023',
      cover: 'commerce',
      scope: 'client',
      status: 'live',
      tech: ['JavaScript', 'Webpack', 'Bootstrap'],
      link: 'https://tbao.ir',
      constraints:
        'A media-heavy storefront where catalogue browsing and checkout had to stay fast on mid-range devices.',
      approach:
        'Code-split the bundle by route, extracted reusable storefront components, and removed render-blocking dependencies from the purchase path.',
      impact:
        'A purchase path that loads with the catalogue instead of after it — product lists, cart and checkout stay responsive on modest hardware.',
    },
    {
      id: 'e9c1a7f2-5b44-4d8c-9a11-3f7d2c8b6e77',
      title: 'Interactive Developer Portfolio',
      category: 'Personal Brand / Portfolio',
      year: '2026',
      cover: 'portfolio',
      scope: 'personal',
      status: 'live',
      tech: ['Next.js', 'TypeScript', 'Motion', 'Tailwind CSS'],
      link: '#',
      constraints:
        'A portfolio that had to prove systems thinking without borrowing the visual language of template sites.',
      approach:
        'Composed the page as a studio gallery: a disciplined grid, restrained typography, custom-drawn project covers, and a single compact portrait instead of a hero image.',
      impact:
        'A portfolio read as quiet surfaces and precise typography first, and a résumé second — personality without the template.',
    },
  ],

  de: [
    {
      id: 'b4d8e1a7-2c55-4f9a-8d11-6a3f7c2b9e11',
      title: 'Shiralinia Books — Autoren-Buchhandlung',
      category: 'E-Commerce / Verlagswesen',
      year: '2026',
      cover: 'books',
      scope: 'client',
      status: 'live',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Prisma', 'PostgreSQL'],
      link: 'https://shiraliniabooks.com',
      constraints:
        'Eine persischsprachige Buchhandlung für den Historiker Jafar Shirali-Nia brauchte Direktverkauf ohne Marktplatz: vollständiger RTL-Katalog, Gast-Checkout und Bestellabwicklung, die ein kleines Team vom Telefon aus steuern kann.',
      approach:
        'Modulare App-Router-Codebasis für Katalog, Warenkorb, Checkout, Bestellungen und Zahlungen. Server Components lesen Prisma/Postgres, ein per localStorage hydratisierter Warenkorb überlebt Reloads, unveränderliche Bestell-Snapshots halten die Historie intakt.',
      impact:
        'Leser gelangen in einem RTL-Fluss vom Katalog zur bezahlten Bestellung — mit ZarinPal- oder SnapPay-Ratenzahlung, nachverfolgbarem Beleg und kostenlosen digitalen Downloads. Ein Telegram-Mini-App-Admin verwaltet Bestellungen und neue Titel.',
    },
    {
      id: 'e7a2c9f1-4b88-4d6e-9c33-5f1a8d2b7c22',
      title: 'MARTEX — Iranische Malerinnen',
      category: 'Kunst & Kultur / Editorial',
      year: '2026',
      cover: 'art',
      scope: 'client',
      status: 'live',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'TanStack Query', 'AWS S3'],
      link: 'https://martexart.com',
      constraints:
        '209 iranische Malerinnen einem internationalen Publikum vorstellen, ohne sie in einem einzigen Raster zu vereinheitlichen; das Archiv musste ein Buch, Biografien, Werke, Touren und redaktionelle Texte tragen.',
      approach:
        'Feature-sliced App-Router-Architektur: 224 statisch generierte Künstlerrouten, eine Infinite-Scroll-API für den Index, S3-gestützte Porträts und Werke sowie eine gemeinsame redaktionelle Hülle für Bücher, Artikel und Events.',
      impact:
        'Ein galerieartiger Leserhythmus aus großen Serif-Überschriften, Vogel-Motiven und feinen Linien; Künstler-Timelines und Werk-Modals öffnen sich an Ort und Stelle, ohne den Index zu verlassen.',
    },
    {
      id: 'c1f3a9b2-7d11-4e8c-9a22-5f6b1d8e3c44',
      title: 'Sepahtan — Echtzeit-Flottenbetrieb',
      category: 'Kunde / Logistik-SaaS',
      year: '2024–26',
      cover: 'fleet',
      scope: 'client',
      status: 'nda',
      tech: ['React', 'TypeScript', 'MapLibre', 'TanStack Query', 'SignalR'],
      link: '#',
      constraints:
        'Kontinuierliche Fahrzeug-Telemetrie, Kartenrendering unter Last und Disponenten, die mitten in der Schicht keinen Kontext verlieren dürfen.',
      approach:
        'Kartenebenen von der Datenschicht getrennt, Live-Streams in einem Query-Cache normalisiert und Tabellen- sowie Kartenzustand über einen einzigen Eigentümer synchron gehalten.',
      impact:
        'Disponenten verfolgen Live-Flotten, ohne dass die Oberfläche stockt: ruhige Kartenebenen, beständige Tabellenzustände und Statuswechsel, die den Arbeitskontext nie zurücksetzen.',
    },
    {
      id: 'a7d2f8c1-3b44-4e9a-8c11-6f2d9b7e1a55',
      title: 'ISILEARNING — Online-Lernplattform',
      category: 'EdTech-Plattform',
      year: '2023–24',
      cover: 'learning',
      scope: 'client',
      status: 'live',
      tech: ['Angular', 'RxJS', 'TypeScript', 'SCSS'],
      link: 'https://isilearning.ir',
      constraints:
        'Ein großer Kurskatalog, gemischte Geräte und Lernende mit eingeschränkter Verbindung.',
      approach:
        'Die Angular-Oberfläche in lazy geladene Routengruppen aufgeteilt, wiederkehrende UI in Primitiven überführt und asynchrone Kursdaten in vorhersehbaren RxJS-Strömen gehalten.',
      impact:
        'Lernende erreichen Kursinhalte schneller; ein einziges Navigationsmodell hält Katalog, Lektionen und Fortschritt über alle Geräte hinweg zusammen.',
    },
    {
      id: 'f2b8c1d7-6e33-4a9b-9c11-8d2f7a5e1b66',
      title: 'TBAO — E-Commerce-Storefront',
      category: 'E-Commerce-Plattform',
      year: '2023',
      cover: 'commerce',
      scope: 'client',
      status: 'live',
      tech: ['JavaScript', 'Webpack', 'Bootstrap'],
      link: 'https://tbao.ir',
      constraints:
        'Ein medienlastiger Storefront, bei dem Katalog und Checkout auf Mittelklasse-Geräten schnell bleiben mussten.',
      approach:
        'Das Bundle pro Route aufgeteilt, wiederverwendbare Storefront-Komponenten extrahiert und render-blockierende Abhängigkeiten aus dem Kaufpfad entfernt.',
      impact:
        'Ein Kaufpfad, der mit dem Katalog lädt statt danach — Produktlisten, Warenkorb und Checkout bleiben auf bescheidener Hardware reaktionsfähig.',
    },
    {
      id: 'e9c1a7f2-5b44-4d8c-9a11-3f7d2c8b6e77',
      title: 'Interaktives Entwickler-Portfolio',
      category: 'Persönliche Marke / Portfolio',
      year: '2026',
      cover: 'portfolio',
      scope: 'personal',
      status: 'live',
      tech: ['Next.js', 'TypeScript', 'Motion', 'Tailwind CSS'],
      link: '#',
      constraints:
        'Ein Portfolio, das Systemdenken beweisen musste, ohne die Bildsprache von Template-Seiten zu übernehmen.',
      approach:
        'Die Seite als Studio-Galerie komponiert: disziplinierte Raster, zurückhaltende Typografie, eigens gezeichnete Projekt-Cover und ein einzelnes kompaktes Porträt statt eines Hero-Bildes.',
      impact:
        'Ein Portfolio, das zuerst als ruhige Flächen und präzise Typografie gelesen wird und erst dann als Lebenslauf — Persönlichkeit ohne Template.',
    },
  ],

  fa: [
    {
      id: 'b4d8e1a7-2c55-4f9a-8d11-6a3f7c2b9e11',
      title: 'کتابفروشی شیرعلی‌نیا — فروشگاه نویسنده',
      category: 'تجارت الکترونیک / نشر',
      year: '۲۰۲۶',
      cover: 'books',
      scope: 'client',
      status: 'live',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Prisma', 'PostgreSQL'],
      link: 'https://shiraliniabooks.com',
      constraints:
        'کتابفروشی فارسی‌زبان برای جعفر شیرعلی‌نیا به فروش مستقیم بدون مارکت‌پلیس نیاز داشت: کاتالوگ کامل راست‌به‌چپ، تسویه مهمان و مدیریت سفارش‌هایی که تیم کوچک بتواند از گوشی اداره کند.',
      approach:
        'کدبیس ماژولار App Router پیرامون کاتالوگ، سبد، تسویه، سفارش و پرداخت. سرور کامپوننت‌ها از Prisma/Postgres می‌خوانند، سبد با hydration از localStorage دوام دارد و اسنپ‌شات تغییرناپذیر اقلام، تاریخچه سفارش را حفظ می‌کند.',
      impact:
        'خواننده در یک جریان راست‌به‌چپ از کاتالوگ به سفارش پرداخت‌شده می‌رسد — با درگاه زرین‌پال یا اقساط اسنپ‌پی، رسید قابل پیگیری و دانلود رایگان نسخه دیجیتال. مینی‌اپ تلگرام سفارش‌ها و کتاب‌های تازه را مدیریت می‌کند.',
    },
    {
      id: 'e7a2c9f1-4b88-4d6e-9c33-5f1a8d2b7c22',
      title: 'مارتکس — نقاشان زن ایرانی',
      category: 'هنر و فرهنگ / نشر',
      year: '۲۰۲۶',
      cover: 'art',
      scope: 'client',
      status: 'live',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'TanStack Query', 'AWS S3'],
      link: 'https://martexart.com',
      constraints:
        'معرفی ۲۰۹ نقاش زن ایرانی به مخاطب جهانی، بدون یکسان‌سازی آن‌ها در یک شبکه تکراری؛ آرشیو باید کتاب، زندگی‌نامه‌ها، آثار، تورها و نوشتار تحریریه را کنار هم نگه می‌داشت.',
      approach:
        'معماری App Router با تفکیک فیچر: ۲۲۴ مسیر ایستای هنرمند، API اسکرول بی‌نهایت برای ایندکس، پرتره و آثار روی S3، و پوسته تحریریه مشترک برای کتاب‌ها، مقالات و رویدادها.',
      impact:
        'ریتم گالری‌وار در مرور: تیترهای بزرگ سریف، نقش پرنده و خطوط نازک؛ تایم‌لاین هنرمند و مودال آثار در همان صفحه باز می‌شوند و ایندکس را از دست نمی‌دهند.',
    },
    {
      id: 'c1f3a9b2-7d11-4e8c-9a22-5f6b1d8e3c44',
      title: 'سپاهتان — عملیات بلادرنگ ناوگان',
      category: 'پروژه مشتری / SaaS لجستیک',
      year: '۲۰۲۴–۲۶',
      cover: 'fleet',
      scope: 'client',
      status: 'nda',
      tech: ['React', 'TypeScript', 'MapLibre', 'TanStack Query', 'SignalR'],
      link: '#',
      constraints:
        'تلهمتری پیوسته ناوگان، رندر نقشه زیر بار و دیسپچرهایی که در میانه شیفت نمی‌توانند زمینه کار را از دست بدهند.',
      approach:
        'لایه نقشه از لایه داده جدا شد، جریان‌های زنده در کش کوئری نرمال‌سازی شدند و وضعیت جدول و نقشه از طریق یک مالک واحد همگام ماند.',
      impact:
        'دیسپچرها ناوگان زنده را دنبال می‌کنند بدون آنکه رابط متوقف شود: لایه‌های آرام نقشه، وضعیت پایدار جدول و تغییر وضعیتی که زمینه کار را بازنشانی نمی‌کند.',
    },
    {
      id: 'a7d2f8c1-3b44-4e9a-8c11-6f2d9b7e1a55',
      title: 'ISILEARNING — پلتفرم آموزش آنلاین',
      category: 'پلتفرم آموزشی (EdTech)',
      year: '۲۰۲۳–۲۴',
      cover: 'learning',
      scope: 'client',
      status: 'live',
      tech: ['Angular', 'RxJS', 'TypeScript', 'SCSS'],
      link: 'https://isilearning.ir',
      constraints: 'کاتالوگ بزرگ دوره‌ها، دستگاه‌های متنوع و یادگیرندگانی با اتصال محدود.',
      approach:
        'سطح Angular به گروه‌های مسیر با بارگذاری تنبل تقسیم شد، رابط‌های تکراری به پریمیتیوها منتقل شدند و داده‌های ناهمگام دوره در جریان‌های قابل‌پیش‌بینی RxJS باقی ماندند.',
      impact:
        'یادگیرندگان سریع‌تر به محتوای دوره می‌رسند و یک مدل ناوبری یکدست، کاتالوگ، درس‌ها و پیشرفت را در همه دستگاه‌ها کنار هم نگه می‌دارد.',
    },
    {
      id: 'f2b8c1d7-6e33-4a9b-9c11-8d2f7a5e1b66',
      title: 'TBAO — فروشگاه اینترنتی',
      category: 'پلتفرم تجارت الکترونیک',
      year: '۲۰۲۳',
      cover: 'commerce',
      scope: 'client',
      status: 'live',
      tech: ['JavaScript', 'Webpack', 'Bootstrap'],
      link: 'https://tbao.ir',
      constraints:
        'فروشگاهی پرمحتوا و تصویرمحور که مرور کاتالوگ و تسویه باید روی دستگاه‌های میان‌رده سریع می‌ماند.',
      approach:
        'باندل بر اساس مسیر تقسیم شد، کامپوننت‌های قابل‌استفاده دوباره فروشگاه استخراج شدند و وابستگی‌های مسدودکننده رندر از مسیر خرید حذف شدند.',
      impact:
        'مسیر خریدی که همراه با کاتالوگ بارگذاری می‌شود، نه پس از آن — فهرست محصولات، سبد و تسویه روی سخت‌افزار معمولی پاسخ‌گو می‌مانند.',
    },
    {
      id: 'e9c1a7f2-5b44-4d8c-9a11-3f7d2c8b6e77',
      title: 'پورتفولیو تعاملی توسعه‌دهنده',
      category: 'برند شخصی / پورتفولیو',
      year: '۲۰۲۶',
      cover: 'portfolio',
      scope: 'personal',
      status: 'live',
      tech: ['Next.js', 'TypeScript', 'Motion', 'Tailwind CSS'],
      link: '#',
      constraints:
        'پورتفولیویی که باید تفکر سیستمی را ثابت می‌کرد، بی‌آنکه زبان بصری قالب‌های آماده را قرض بگیرد.',
      approach:
        'صفحه به‌مثابه یک گالری استودیویی چیده شد: شبکه منضبط، تایپوگرافی آرام، کاورهای پروژه که با کد کشیده شده‌اند و یک پرتره فشرده به‌جای تصویر هیروی بزرگ.',
      impact:
        'پورتفولیویی که نخست به‌عنوان سطوح آرام و تایپوگرافی دقیق خوانده می‌شود و سپس رزومه — شخصیت، بدون قالب.',
    },
  ],
}

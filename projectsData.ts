/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                    PROJECT DATA FILE                            ║
 * ║                                                                 ║
 * ║  This is your "database". Edit project details here only.       ║
 * ║  You do NOT need to touch any other code file.                  ║
 * ║                                                                 ║
 * ║  To add details to a project:                                   ║
 * ║    1. Find the project by its title below                       ║
 * ║    2. Add any of these optional fields:                         ║
 * ║       - role: "Your Role"                                       ║
 * ║       - platform: "Web / Mobile / Desktop"                      ║
 * ║       - overview: "Longer description paragraph..."             ║
 * ║       - features: [{ title: "...", description: "..." }]        ║
 * ║       - techStack: [{ category: "...", technologies: [...] }]   ║
 * ║       - technicalAchievements: "..."                            ║
 * ║       - galleryImages: ["https://url1", "https://url2"]         ║
 * ║                                                                 ║
 * ║  For gallery images, upload to GitHub and use raw links:        ║
 * ║  https://raw.githubusercontent.com/USER/REPO/main/image.png    ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import { Project } from './types';

export const projectsData: Project[] = [

  // ═══════════════════════════════════════
  // PROJECT 0 — Eris Travel Tech Platform
  // ═══════════════════════════════════════
  {
    id: 0,
    title: "Eris Travel Platform",
    category: "Web Application",
    description: "Premium, multi-lingual web platform designed to redefine the digital travel experience with AI and eSIM integration.",
    tags: ["React", "Laravel", "AI"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",

    role: "Full-Stack Developer / UI/UX Engineer",
    platform: "Web Application",
    overview: "Eris Travel is a premium, multi-lingual web platform designed to redefine the digital travel experience. Serving as a gateway to global connectivity and curated travel services, the platform seamlessly integrates eSIM purchasing, intelligent visa requirement guides, and flight/hotel bookings. The design language focuses on a luxurious, cinematic user experience\u2014characterized by 'Eris Planet' branding (Midnight Blue and Gold), glassmorphism, fluid micro-animations, and 3D interactive elements.",
    features: [
      { title: "Cinematic 'Departure Gate' Booking Interface", description: "Replaced standard search forms with a highly interactive, 3D 'Tear-off Boarding Pass' component. It features a custom CSS particle system, shimmering barcode effects, and a complex takeoff animation." },
      { title: "AI-Powered Visa Intelligence (System Vega)", description: "An integrated visa guide that utilizes advanced AI to process complex global visa requirements dynamically, delivering real-time, accurate travel advisories to users." },
      { title: "Seamless Multi-Lingual Architecture", description: "Fully localized interface supporting English, Arabic, and Kurdish. Engineered with dynamic RTL layout switching and localized typography to ensure perfect visual hierarchy." },
      { title: "Secure Command Center", description: "A protected admin dashboard built for managing news, exclusive offers, and platform analytics, guarded by robust backend authentication." },
      { title: "Dynamic Coverage Map", description: "An interactive, responsive map visualizing the global reach of Eris eSIMs across 190+ countries." }
    ],
    techStack: [
      { category: "Frontend (Client-Side)", technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Custom CSS3 Animations", "Lucide React"] },
      { category: "Backend (Server-Side) & API", technologies: ["Laravel (PHP)", "MariaDB", "Laravel Sanctum", "Google Gemini 2.5 Flash"] }
    ],
    technicalAchievements: "High-Performance Animations: Engineered complex 3D transformations and canvas-based particle engines directly in React/CSS without relying on heavy external WebGL libraries.\n\nStateful Security: Successfully resolved complex cross-domain authentication challenges by implementing rigorous Sanctum session management and CSRF token handling.\n\nAI Resilience: Built a robust failover architecture for the AI Visa Guide, ensuring consistent API responses even during upstream service instability.",
    galleryImages: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
    ],
    i18n: {
      title: { en: "Eris Travel Platform", ar: "منصة إيريس للسفر", ku: "پلاتفورما ئیرس یا گەشتیاری" },
      category: { en: "Web Application", ar: "تطبيق ويب", ku: "ئەپلیکەیشنا وێبی" },
      role: { en: "Full-Stack Developer / UI/UX Engineer", ar: "مطور شامل / مهندس واجهة وتجربة المستخدم", ku: "گەشەپێدەرێ فول ستاک / ئەندازیارێ رووکار و ئەزموونا بکارئینەری" },
      platform: { en: "Web Application", ar: "تطبيق ويب", ku: "ئەپلیکەیشنا وێبی" },
      overview: { en: "Eris Travel is a premium, multi-lingual web platform designed to redefine the digital travel experience. Serving as a gateway to global connectivity and curated travel services, the platform seamlessly integrates eSIM purchasing, intelligent visa requirement guides, and flight/hotel bookings. The design language focuses on a luxurious, cinematic user experience\u2014characterized by 'Eris Planet' branding (Midnight Blue and Gold), glassmorphism, fluid micro-animations, and 3D interactive elements.", ar: "إيريس للسفر هي منصة ويب متعددة اللغات وعالية الجودة مصممة لإعادة صياغة تجربة السفر الرقمية. تعمل كبوابة للاتصال العالمي وخدمات السفر المتكاملة، حيث تدمج بسلاسة شراء شرائح eSIM الإلكترونية، وأدلة ذكية لمتطلبات التأشيرة، وحجوزات الطيران والفنادق. يركز التصميم على تجربة مستخدم سينمائية وفاخرة—تتميز بهوية 'كوكب إيريس' (أزرق ليلي وذهبي)، وتأثيرات زجاجية، وحركات دقيقة سلسة، وعناصر تفاعلية ثلاثية الأبعاد.", ku: "ئیرس یا گەشتیاری پلاتفورمەکا وێب یا پێشکەفتی و فرەزمانە کو هاتیە دیزاینکرن بۆ نویترکرنا ئەزموونا گەشتیاریا دیجیتاڵی. وەک دەرگەهەکێ پەیوەندیێن جیهانی و خزمەتگوزاریێن گەشتیاری کار دکەت، پلاتفورم ب شێوەیەکێ بێ کێماسی کڕینا هەژمارێن eSIM، رێبەرێن زیرەک یێن داخازیێن ڤیزەیێ، و ڤەقەتاندنا فڕۆکە و هۆتێلان ب هەڤڤە گرێ ددەت. دیزاین سەرنجێ ددەتە سەر ئەزموونەکا سینەمایی و شاهانە—ب ناسنامەیا 'هەسارەیا ئیرس' (شینێ تاری و زێڕی)، بکارئینانا شووشەیی، لڤینێن هویر یێن نەرم، و هێما و پێکهاتێن کارلێکەری یێن سێ دووری (3D)." },
      features: [
        { title: { en: "Cinematic 'Departure Gate' Booking Interface", ar: "واجهة حجز سينمائية 'بوابة المغادرة'", ku: "رووکارێ ڤەقەتاندنێ یێ سینەمایی 'دەرگەهێ چوونێ'" }, description: { en: "Replaced standard search forms with a highly interactive, 3D 'Tear-off Boarding Pass' component. It features a custom CSS particle system, shimmering barcode effects, and a complex takeoff animation.", ar: "تم استبدال نماذج البحث التقليدية بعنصر تفاعلي ثلاثي الأبعاد 'بطاقة صعود قابلة للتمزيق'. يتميز بنظام جزيئات CSS مخصص، وتأثيرات باركود لامعة، وحركة إقلاع معقدة.", ku: "فۆرمێن لێگەڕیانێ یێن ئاسایی هاتنە گۆهڕین ب پێکهاتەیەکێ سێ دووری یێ کارلێکەری یێ 'بلیتا لێسواربوونێ یا قەتیای'. سیستەمەکێ تایبەت یێ تەنۆلکەیا CSS، کاریگەریا بارکۆدێ بریسکەدار، و ئەنیمەیشنەکا ئالۆز یا فڕینێ بخۆڤە دگریت." } },
        { title: { en: "AI-Powered Visa Intelligence (System Vega)", ar: "دليل تأشيرات ذكي مدعوم بالذكاء الاصطناعي (نظام فيجا)", ku: "زیرەکیا ڤیزەیێ ب هێزا ژیرییا دەستکرد (سیستەمێ ڤێگا)" }, description: { en: "An integrated visa guide that utilizes advanced AI to process complex global visa requirements dynamically, delivering real-time, accurate travel advisories to users.", ar: "دليل تأشيرات متكامل يستخدم ذكاءً اصطناعياً متقدماً لمعالجة متطلبات التأشيرات العالمية المعقدة ديناميكياً، مما يوفر إرشادات سفر دقيقة ولحظية للمستخدمين.", ku: "رێبەرەکێ ڤیزەیێ یێ ئێکگرتی یە کو ژیرییا دەستکرد یا پێشکەفتی بکار دئینیت بۆ شلوڤەکرنا داخازیێن ڤیزەیێن جیهانی ب شێوەیەکێ دینامیکی، و رێنمایێن گەشتیاری یێن دروست و د دەمێ خۆ دا پێشکێشی بکارئینەران دکەت." } },
        { title: { en: "Seamless Multi-Lingual Architecture", ar: "بنية متعددة اللغات سلسة", ku: "پێکهاتەیێ فرەزمانێ بێ کێماسی" }, description: { en: "Fully localized interface supporting English, Arabic, and Kurdish. Engineered with dynamic RTL layout switching and localized typography to ensure perfect visual hierarchy.", ar: "واجهة معربة ومترجمة بالكامل تدعم اللغات الإنجليزية والعربية والكردية. مصممة هندسياً للتبديل الديناميكي لتخطيطات RTL مع طباعة محلية لضمان تسلسل هرمي بصري مثالي.", ku: "رووکارەکێ ب تەمامی خۆجیهی کو پشتەڤانیا زمانێن ئینگلیزی، عەرەبی و کوردی دکەت. هاتیە دروستکرن ب گۆهڕینا دینامیکی یا شێوازێ RTL (ژ راست بۆ چەپ) و فۆنتێن خۆجیهی بۆ مسۆگەرکرنا رێکخستنەکا بینراو یا نموونەیی." } },
        { title: { en: "Secure Command Center", ar: "مركز قيادة آمن", ku: "سەنتەرێ کۆنترۆلکرنێ یێ پاراستی" }, description: { en: "A protected admin dashboard built for managing news, exclusive offers, and platform analytics, guarded by robust backend authentication.", ar: "لوحة تحكم إدارة محمية مصممة لإدارة الأخبار، العروض الحصرية، وتحليلات المنصة، ومؤمنة بواسطة مصادقة خلفية قوية.", ku: "داشبۆردەکێ ئەدمینی یێ پاراستی کو بۆ بڕێڤەبرنا نویچەیان، ئۆفەرێن تایبەت، و شلوڤەکرنا پلاتفورمێ هاتیە دروستکرن، و ب رێکا سیستەمەکێ باوەریپێکرنێ یێ بهێز یێ باکئێند (Backend) هاتیە پاراستن." } },
        { title: { en: "Dynamic Coverage Map", ar: "خريطة تغطية ديناميكية", ku: "نەخشێ روومالکرنا دینامیکی" }, description: { en: "An interactive, responsive map visualizing the global reach of Eris eSIMs across 190+ countries.", ar: "خريطة تفاعلية ومتجاوبة تعرض الانتشار العالمي لشرائح Eris eSIM في أكثر من 190 دولة.", ku: "نەخشەیەکێ کارلێکەری و گونجاو کو بەرفرەهیا جیهانی یا هێلێن Eris eSIM ل پتر ژ 190 وەڵاتان نیشان ددەت." } },
      ],
      techStack: [
        { category: { en: "Frontend (Client-Side)", ar: "واجهة المستخدم (الجانب الأمامي)", ku: "رووکارێ پێشیێ (فرۆنتئێند)" }, technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Custom CSS3 Animations", "Lucide React"] },
        { category: { en: "Backend (Server-Side) & API", ar: "الواجهة الخلفية (الخوادم) وواجهة برمجة التطبيقات API", ku: "رووکارێ پاشیێ (باکئێند) و API" }, technologies: ["Laravel (PHP)", "MariaDB", "Laravel Sanctum", "Google Gemini 2.5 Flash"] },
      ],
      technicalAchievements: { en: "High-Performance Animations: Engineered complex 3D transformations and canvas-based particle engines directly in React/CSS without relying on heavy external WebGL libraries.\n\nStateful Security: Successfully resolved complex cross-domain authentication challenges by implementing rigorous Sanctum session management and CSRF token handling.\n\nAI Resilience: Built a robust failover architecture for the AI Visa Guide, ensuring consistent API responses even during upstream service instability.", ar: "رسومات متحركة عالية الأداء: هندسة تحويلات ثلاثية الأبعاد معقدة ومحركات جزيئية مبنية على لوحات الرسم (canvas) مباشرة باستخدام React/CSS دون الاعتماد على مكتبات WebGL خارجية ثقيلة.\n\nأمان قائم على الحالة: حل التحديات المعقدة للمصادقة عبر النطاقات بنجاح من خلال تنفيذ إدارة جلسات Sanctum صارمة والتعامل مع رموز CSRF.\n\nمرونة الذكاء الاصطناعي: بناء بنية قوية لتجاوز الفشل في دليل تأشيرات الذكاء الاصطناعي، مما يضمن استجابات ثابتة لواجهة برمجة التطبيقات حتى أثناء عدم استقرار الخدمات الأساسية.", ku: "ئەنیماسیۆنێن ب کوالێتییا بەرز: ئەندازیاریا وەرگێڕانێن سێ دووری یێن ئالۆز و بزوێنەرێن تەنۆلکەیان بکارئینانا canvas راستەوخۆ ب React/CSS بێی پشتگرێدان ب پەرتووکخانەیێن دەرەکی یێن گران یێن WebGL.\n\nپاراستنا باوەریپێکراو: چارەسەرکرنا سەرکەفتیانە بۆ ئالۆزیێن باوەریپێکرنێ ل سەر دۆمەینێن جودا ب رێکا جێبەجێکرنا بڕێڤەبرنا دانیشتنێ یا توند یا Sanctum و مامەڵەکرن ب کۆدێن CSRF.\n\nخۆڕاگریا ژیرییا دەستکرد: ئاڤاکرنا پێکهاتەیەکێ بهێز بۆ دەربازبوون ژ شکەستنێ د رێبەرێ ڤیزە یێ ژیرییا دەستکرد دا، بۆ مسۆگەرکرنا بەرسڤێن بەردەوام یێن API تەنانەت د دەمێ نەجێگیربوونا خزمەتگوزاریێن سەرەکی ژی دا." },
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 1 — Kurdish-Letters App
  // ═══════════════════════════════════════
  {
    id: 1,
    title: "Kurdish-Letters App",
    category: "Mobile / Education",
    description: "Award-winning educational tool for children with learning disabilities. Developer of Rwanga Awards 2024 Winner Software.",
    tags: ["Mobile", "Award Winner"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1596464716127-f9a829be9efc?q=80&w=2000&auto=format&fit=crop",

    role: "Lead Developer",
    platform: "Desktop Application",
    overview: "An award-winning, nationally recognized interactive application centered on early language development.",
    features: [
      { title: "Interactive Learning", description: "Engaging tools designed specifically for early language development." },
      { title: "National Recognition", description: "Achieved award-winning status for its educational impact." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["WinForms", "Bunifu Framework", "Guna Framework"] },
      { category: "Backend", technologies: ["C#", "Entity Framework", "XML"] }
    ],
    technicalAchievements: "Achieved Rwanga Award for best software over IRAQ.\n\nOptimized database queries with Entity Framework to reduce load times by 40%.",
    i18n: {
      title: { en: "Kurdish-Letters App", ar: "تطبيق الحروف الكردية", ku: "ئەپلیکەیشنا پیتێن کوردی" },
      category: { en: "Mobile / Education", ar: "تطبيق هاتف / تعليمي", ku: "مۆبایل / پەروەردەیی" },
      role: { en: "Lead Developer", ar: "المطور الرئيسي", ku: "گەشەپێدەرێ سەرەکی" },
      platform: { en: "Desktop Application", ar: "تطبيق سطح المكتب", ku: "ئەپلیکەیشنا دیسکتۆپێ" },
      overview: { en: "An award-winning, nationally recognized interactive application centered on early language development.", ar: "تطبيق تفاعلي حائز على جوائز ومعترف به وطنياً، يركز على تطوير اللغة في مراحل الطفولة المبكرة.", ku: "ئەپلیکەیشنەکا کارلێکەری یا خەڵاتکری و ناسکری ل سەر ئاستێ نیشتیمانی، کو سەرنجێ ددەتە سەر پێشڤەبرنا زمانێ زارۆکان د قۆناغێن دەستپێکی دا." },
      features: [
        { title: { en: "Interactive Learning", ar: "تعلم تفاعلي", ku: "فێربوونا کارلێکەری" }, description: { en: "Engaging tools designed specifically for early language development.", ar: "أدوات تفاعلية مصممة خصيصاً لتطوير اللغة في المراحل المبكرة.", ku: "ئامرازێن سەرنجڕاکێش کو ب تایبەتی بۆ پێشڤەبرنا زمانێ دەستپێکی هاتینە دروستکرن." } },
        { title: { en: "National Recognition", ar: "اعتراف وطني", ku: "ناساندنا نیشتیمانی" }, description: { en: "Achieved award-winning status for its educational impact.", ar: "حصل على جوائز تقديرية لتأثيره التعليمي المتميز.", ku: "خەڵاتێ باشترین بەرنامە ب دەستڤە ئینایە ژبەر کاریگەریا وێ یا پەروەردەیی." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم (الجانب الأمامي)", ku: "رووکارێ پێشیێ (فرۆنتئێند)" }, technologies: ["WinForms", "Bunifu Framework", "Guna Framework"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية (الخوادم)", ku: "رووکارێ پاشیێ (باکئێند)" }, technologies: ["C#", "Entity Framework", "XML"] },
      ],
      technicalAchievements: { en: "Achieved Rwanga Award for best software over IRAQ.\n\nOptimized database queries with Entity Framework to reduce load times by 40%.", ar: "حاز على جائزة روانجا كأفضل برنامج على مستوى العراق.\n\nتم تحسين استعلامات قاعدة البيانات باستخدام Entity Framework لتقليل أوقات التحميل بنسبة 40%.", ku: "خەڵاتێ روانگە وەرگرتیە وەک باشترین سۆفتوێر ل سەر ئاستێ عیراقێ.\n\nباشترکرنا لێگەڕیانێن داتابەیسێ ب بکارئینانا Entity Framework بۆ کێمکرنا دەمێ لۆدکرنێ ب رێژەیا 40%." },
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 2 — Patient Flow System
  // ═══════════════════════════════════════
  {
    id: 2,
    title: "Patient Flow System",
    category: "Healthcare / DB",
    description: "Hospital management system designed to optimize patient intake and discharge.",
    tags: ["Database", "Optimization"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",

    role: "Full-Stack Developer",
    platform: "Enterprise Application",
    overview: "An enterprise management system designed to optimize clinic operations and streamline patient flow.",
    features: [
      { title: "Enterprise Management", description: "Comprehensive tools for managing patient lifecycles." },
      { title: "Flow Optimization", description: "Streamlines daily clinic operations and reduces bottlenecks." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["WinForms", "Bunifu Framework", "Guna Framework", "DevExpress"] },
      { category: "Backend", technologies: ["C#", "Entity Framework", "SQL Server"] }
    ],
    technicalAchievements: "Successfully deployed the system to handle 1,000,000+ data records without experiencing performance degradation.",
    i18n: {
      title: { en: "Patient Flow System", ar: "نظام تدفق المرضى", ku: "سیستەمێ رێڤەچوونا نەخۆشان" },
      category: { en: "Healthcare / DB", ar: "رعاية صحية / قواعد بيانات", ku: "چاڤدێریا تەندروستی / داتابەیس" },
      role: { en: "Full-Stack Developer", ar: "مطور شامل", ku: "گەشەپێدەرێ فول ستاک" },
      platform: { en: "Enterprise Application", ar: "تطبيق مؤسسي", ku: "ئەپلیکەیشنا کۆمپانیان (ئێنتەرپرایز)" },
      overview: { en: "An enterprise management system designed to optimize clinic operations and streamline patient flow.", ar: "نظام إدارة مؤسسي مصمم لتحسين عمليات العيادات وتسهيل حركة وتدفق المرضى.", ku: "سیستەمەکێ بڕێڤەبرنا دەزگەهانە کو هاتیە دروستکرن بۆ باشترکرنا کارێن کلینیکان و رێکخستنا هاتنوچوونا نەخۆشان." },
      features: [
        { title: { en: "Enterprise Management", ar: "إدارة المؤسسات", ku: "بڕێڤەبرنا دەزگەهان" }, description: { en: "Comprehensive tools for managing patient lifecycles.", ar: "أدوات شاملة لإدارة دورة حياة المريض داخل المؤسسة.", ku: "ئامرازێن گشتگیر بۆ بڕێڤەبرنا قۆناغێن چارەسەریا نەخۆشی." } },
        { title: { en: "Flow Optimization", ar: "تحسين سير العمل", ku: "باشترکرنا رێڤەچوونێ" }, description: { en: "Streamlines daily clinic operations and reduces bottlenecks.", ar: "ينظم العمليات اليومية للعيادات ويقلل من الاختناقات والانتظار.", ku: "کارێن رۆژانە یێن کلینیکێ ب ساناهی دکەت و قەرەبالغیێ و گیرۆبوونێ کێم دکەت." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["WinForms", "Bunifu Framework", "Guna Framework", "DevExpress"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية", ku: "رووکارێ پاشیێ" }, technologies: ["C#", "Entity Framework", "SQL Server"] },
      ],
      technicalAchievements: { en: "Successfully deployed the system to handle 1,000,000+ data records without experiencing performance degradation.", ar: "تم نشر النظام بنجاح للتعامل مع أكثر من 1,000,000 سجل بيانات دون مواجهة أي تدهور في الأداء.", ku: "سیستەم ب سەرکەفتیانە هاتیە بکارخستن بۆ مامەڵەکرن ب پتر ژ 1,000,000 رێکۆردێن داتایان بێی چ کێشە و خاڤبوون د کارکرنێ دا." },
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 3 — Fast-Rest POS
  // ═══════════════════════════════════════
  {
    id: 3,
    title: "Fast-Rest POS",
    category: "Hospitality",
    description: "High-speed point of sale system for fast-food environments.",
    tags: ["POS", "Retail"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop",

    role: "Full-Stack Developer",
    platform: "Windows POS & Tablet Application",
    overview: "A cutting-edge, custom-designed restaurant management system built with modern UI/UX standards. It synchronizes end-user table tablets with a centralized administrative terminal to eliminate manual order-taking and optimize kitchen workflows.",
    features: [
      { title: "Smart Digital Menu", description: "Interactive table-side ordering with intuitive category filtering, 'Best Seller' highlights, and real-time cart summaries." },
      { title: "Analytical Dashboard", description: "Delivers actionable, data-driven insights including dish popularity trends, traffic analytics, and weekly visitor metrics." },
      { title: "Integrated Messaging & Feedback", description: "Facilitates direct, text-based communication between guests and staff to instantly address specific requests or concerns." },
      { title: "Comprehensive Access Control", description: "Implements strict user roles separating full-access administrative backends from secure, restricted guest interfaces." },
      { title: "Digital Billing Archive", description: "Maintains a secure digital history of all receipts and table orders to streamline daily financial audits and verify accuracy." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["WinForms", "Bunifu Framework", "Guna Framework", "Custom-Designed Components"] },
      { category: "Backend", technologies: ["C#", "Entity Framework", "SQL Server"] }
    ],
    technicalAchievements: "Engineered a synchronized local network workflow that instantly transmits guest orders from distributed table tablets to a centralized staff terminal, significantly reducing wait times.",
    i18n: {
      title: { en: "Fast-Rest POS", ar: "نظام نقاط البيع فاست ريست", ku: "سیستەمێ فرۆشتنێ یێ Fast-Rest" },
      category: { en: "Hospitality", ar: "ضيافة ومطاعم", ku: "مێڤانداری و خارنگەهـ" },
      role: { en: "Full-Stack Developer", ar: "مطور شامل", ku: "گەشەپێدەرێ فول ستاک" },
      platform: { en: "Windows POS & Tablet Application", ar: "نظام نقاط بيع لنظام ويندوز وتطبيق أجهزة لوحية", ku: "سیستەمێ فرۆشتنێ یێ ویندۆز و ئەپلیکەیشنا تابلێتان" },
      overview: { en: "A cutting-edge, custom-designed restaurant management system built with modern UI/UX standards. It synchronizes end-user table tablets with a centralized administrative terminal to eliminate manual order-taking and optimize kitchen workflows.", ar: "نظام متطور ومصمم خصيصاً لإدارة المطاعم مبني بأحدث معايير واجهة وتجربة المستخدم. يقوم بمزامنة الأجهزة اللوحية للعملاء مع المحطة الإدارية المركزية لإلغاء تلقي الطلبات يدوياً وتحسين سير العمل في المطبخ.", ku: "سیستەمەکێ پێشکەفتی یێ بڕێڤەبرنا خارنگەهان کو ب دیزاینەکا تایبەت و ب نویترین ستانداردێن UI/UX هاتیە دروستکرن. تابلێتێن بکارئینەران ل سەر مێزان ب شێوەیەکێ راستەوخۆ ب تێرمینالا سەرەکی یا کارگێڕیێ ڤە گرێ ددەت بۆ نەهێلانا وەرگرتنا داخازیان ب دەستی و باشترکرنا کارێ چێشتخانێ." },
      features: [
        { title: { en: "Smart Digital Menu", ar: "قائمة طعام رقمية ذكية", ku: "مێنویێ دیجیتاڵی یێ زیرەک" }, description: { en: "Interactive table-side ordering with intuitive category filtering, 'Best Seller' highlights, and real-time cart summaries.", ar: "طلب تفاعلي من الطاولة مع تصفية بديهية للفئات، إبراز 'الأكثر مبيعاً'، وملخصات الطلبات في الوقت الفعلي.", ku: "داخازیکرنا کارلێکەری ژ مێزێ ب فلتەرکرنا ب ساناهی یا جۆران، دیارکرنا 'پڕفرۆشترین'، و کورتیا سەبەتێ د دەمێ خۆ دا." } },
        { title: { en: "Analytical Dashboard", ar: "لوحة تحكم تحليلية", ku: "داشبۆردێ شلوڤەکاری" }, description: { en: "Delivers actionable, data-driven insights including dish popularity trends, traffic analytics, and weekly visitor metrics.", ar: "يقدم رؤى قابلة للتنفيذ مبنية على البيانات بما في ذلك اتجاهات شعبية الأطباق، تحليلات حركة الزوار، ومقاييس الزوار الأسبوعية.", ku: "پێزانینێن گرنگ ل سەر بنەمایێ داتایان پێشکێش دکەت وەک ترێندێن خارنێن پڕداخازی، شلوڤەکرنا ترافیکێ، و ئامارێن حەفتیانە یێن سەرەدانکەران." } },
        { title: { en: "Integrated Messaging & Feedback", ar: "نظام مراسلة وتقييم متكامل", ku: "نامەکرن و فیدباک یا ئێکگرتی" }, description: { en: "Facilitates direct, text-based communication between guests and staff to instantly address specific requests or concerns.", ar: "يسهل التواصل النصي المباشر بين الضيوف والموظفين لمعالجة الطلبات الخاصة أو الاستفسارات فوراً.", ku: "پەیوەندیا نڤیسکی یا راستەوخۆ دناڤبەرا مێڤانان و کارمەندان دا ب ساناهی دکەت بۆ بەرسڤدانا دەستبەجێ یا داخازیێن تایبەت یان پرسیاران." } },
        { title: { en: "Comprehensive Access Control", ar: "تحكم شامل في الوصول", ku: "کۆنترۆلا گشتگیر یا چوونەژوورێ" }, description: { en: "Implements strict user roles separating full-access administrative backends from secure, restricted guest interfaces.", ar: "يطبق أدواراً صارمة للمستخدمين تفصل بين الواجهات الخلفية الإدارية ذات الوصول الكامل وواجهات الضيوف الآمنة والمقيدة.", ku: "رۆلێن توند یێن بکارئینەران بجهـ دئینیت کو باکئێندێ کارگێڕی یێ تەمام جودا دکەت ژ رووکارێن پاراستی و سنووردار یێن مێڤانان." } },
        { title: { en: "Digital Billing Archive", ar: "أرشيف فواتير رقمي", ku: "ئەرشیفێ پسولەیێن دیجیتاڵی" }, description: { en: "Maintains a secure digital history of all receipts and table orders to streamline daily financial audits and verify accuracy.", ar: "يحتفظ بسجل رقمي آمن لجميع الإيصالات وطلبات الطاولات لتبسيط عمليات التدقيق المالي اليومية والتحقق من الدقة.", ku: "مێژوویەکا دیجیتاڵی یا پاراستی بۆ هەمی پسولە و داخازیێن مێزان دپارێزیت بۆ هاسانکرنا هویربینییا دارایی یا رۆژانە و پشتڕاستکرن ژ دروستیێ." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["WinForms", "Bunifu Framework", "Guna Framework", "Custom-Designed Components"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية", ku: "رووکارێ پاشیێ" }, technologies: ["C#", "Entity Framework", "SQL Server"] },
      ],
      technicalAchievements: { en: "Engineered a synchronized local network workflow that instantly transmits guest orders from distributed table tablets to a centralized staff terminal, significantly reducing wait times.", ar: "هندسة سير عمل متزامن عبر شبكة محلية ينقل طلبات الضيوف فوراً من الأجهزة اللوحية الموزعة على الطاولات إلى محطة الموظفين المركزية، مما يقلل أوقات الانتظار بشكل كبير.", ku: "ئەندازیاریا رێڤەچوونا کارێ تۆڕا لۆکاڵی یا هەڤدەم کو دەستبەجێ داخازیێن مێڤانان ژ تابلێتێن بەلاڤکری ل سەر مێزان بۆ تێرمینالا سەرەکی یا کارمەندان ڤەدگۆهێزیت، کو ب رێژەیەکا بەرچاڤ دەمێ چاڤەڕێکرنێ کێم دکەت." },
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 4 — School Absence
  // ═══════════════════════════════════════
  {
    id: 4,
    title: "School Absence",
    category: "Admin Tool",
    description: "Automated tracking system for student attendance and reports.",
    tags: ["Admin", "Automation"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop",

    role: "Systems Developer",
    platform: "Web Application",
    overview: "A digital management system built to automate manual processes, specifically enhancing attendance tracking and reporting accuracy for educational institutions.",
    features: [
      { title: "Automated Tracking", description: "Replaces manual attendance processes with digital workflows." },
      { title: "Reporting Accuracy", description: "Generates precise and reliable attendance reports." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["HTML", "CSS", "JS"] },
      { category: "Backend", technologies: ["PHP", "MySQL"] }
    ],
    i18n: {
      title: { en: "School Absence", ar: "غيابات المدرسة", ku: "ئامادەنەبوونا قوتابیان" },
      category: { en: "Admin Tool", ar: "أداة إدارية", ku: "ئامرازێ کارگێڕی" },
      role: { en: "Systems Developer", ar: "مطور أنظمة", ku: "گەشەپێدەرێ سیستەمان" },
      platform: { en: "Web Application", ar: "تطبيق ويب", ku: "ئەپلیکەیشنا وێبی" },
      overview: { en: "A digital management system built to automate manual processes, specifically enhancing attendance tracking and reporting accuracy for educational institutions.", ar: "نظام إدارة رقمي تم بناؤه لأتمتة العمليات اليدوية، وتحديداً تحسين تتبع الحضور ودقة التقارير للمؤسسات التعليمية.", ku: "سیستەمەکێ بڕێڤەبرنا دیجیتاڵیە کو هاتیە ئاڤاکرن بۆ ئۆتۆماتیکیکرنا کارێن دەستی، ب تایبەتی باشترکرنا دیڤچوونا ئامادەبوونێ و دروستیا راپۆرتان بۆ دەزگەهێن پەروەردەیی." },
      features: [
        { title: { en: "Automated Tracking", ar: "تتبع آلي", ku: "دیڤچوونا ئۆتۆماتیکی" }, description: { en: "Replaces manual attendance processes with digital workflows.", ar: "يستبدل عمليات الحضور اليدوية بسير عمل رقمي.", ku: "پرۆسەیێن دەستی یێن ئامادەبوونێ ب کارێن دیجیتاڵی دگۆهڕیت." } },
        { title: { en: "Reporting Accuracy", ar: "دقة التقارير", ku: "دروستیا راپۆرتان" }, description: { en: "Generates precise and reliable attendance reports.", ar: "ينشئ تقارير حضور دقيقة وموثوقة.", ku: "راپۆرتێن ئامادەبوونێ یێن دروست و باوەریپێکری دروست دکەت." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["HTML", "CSS", "JS"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية", ku: "رووکارێ پاشیێ" }, technologies: ["PHP", "MySQL"] },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 5 — Solar Manager
  // ═══════════════════════════════════════
  {
    id: 5,
    title: "Solar Manager",
    category: "IoT / Green Tech",
    description: "System for monitoring solar energy output and consumption.",
    tags: ["IoT", "Green Tech"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop",

    role: "Full-Stack Developer",
    platform: "Desktop Application",
    overview: "A specialized management and point-of-sale system built specifically for retail businesses that import and sell solar energy products.",
    features: [
      { title: "Inventory & Import Management", description: "Tracks incoming shipments and manages stock levels for diverse solar products." },
      { title: "Automated Financial Analysis", description: "Calculates and generates comprehensive financial reports with a single click." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["WinForms", "Bunifu Framework", "Guna Framework", "DevExpress"] },
      { category: "Backend", technologies: ["C#", "Entity Framework", "SQL Server"] }
    ],
    technicalAchievements: "Developed a highly praised automated financial analysis module capable of generating comprehensive yearly, monthly, and weekly reports in just a few clicks, resulting in exceptional client satisfaction.",
    i18n: {
      title: { en: "Solar Manager", ar: "مدير الطاقة الشمسية", ku: "بڕێڤەبەرێ سیستەمێن رۆژێ" },
      category: { en: "IoT / Green Tech", ar: "إنترنت الأشياء / تكنولوجيا خضراء", ku: "ئینتەرنێتا تشتان / تەکنەلۆژیایێن کەسک" },
      role: { en: "Full-Stack Developer", ar: "مطور شامل", ku: "گەشەپێدەرێ فول ستاک" },
      platform: { en: "Desktop Application", ar: "تطبيق سطح المكتب", ku: "ئەپلیکەیشنا دیسکتۆپێ" },
      overview: { en: "A specialized management and point-of-sale system built specifically for retail businesses that import and sell solar energy products.", ar: "نظام إدارة ونقاط بيع متخصص صُمم خصيصاً لشركات البيع بالتجزئة التي تستورد وتبيع منتجات الطاقة الشمسية.", ku: "سیستەمەکێ تایبەت یێ بڕێڤەبرنێ و خالێن فرۆشتنێ یە کو ب تایبەتی بۆ وان کۆمپانیایێن بازرگانی هاتیە دروستکرن یێن کو بەرهەمێن وزەیا رۆژێ دئینن و دفرۆشن." },
      features: [
        { title: { en: "Inventory & Import Management", ar: "إدارة المخزون والواردات", ku: "بڕێڤەبرنا کۆگەهـ و هاوردەکرنێ" }, description: { en: "Tracks incoming shipments and manages stock levels for diverse solar products.", ar: "يتتبع الشحنات الواردة ويدير مستويات المخزون لمنتجات الطاقة الشمسية المتنوعة.", ku: "دیڤچوونا کەلوپەلێن هاتین دکەت و ئاستێ کۆگەهێ بۆ بەرهەمێن جودا یێن وزەیا رۆژێ بڕێڤە دۆت." } },
        { title: { en: "Automated Financial Analysis", ar: "تحليل مالي آلي", ku: "شلوڤەکرنا دارایی یا ئۆتۆماتیکی" }, description: { en: "Calculates and generates comprehensive financial reports with a single click.", ar: "يحسب وينشئ تقارير مالية شاملة بنقرة واحدة.", ku: "راپۆرتێن دارایی یێن گشتگیر بتنێ ب ئێک کلیک هژمار دکەت و دروست دکەت." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["WinForms", "Bunifu Framework", "Guna Framework", "DevExpress"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية", ku: "رووکارێ پاشیێ" }, technologies: ["C#", "Entity Framework", "SQL Server"] },
      ],
      technicalAchievements: { en: "Developed a highly praised automated financial analysis module capable of generating comprehensive yearly, monthly, and weekly reports in just a few clicks, resulting in exceptional client satisfaction.", ar: "تم تطوير وحدة تحليل مالي آلي نالت استحساناً كبيراً، قادرة على إنشاء تقارير سنوية، شهرية، وأسبوعية شاملة بنقرات قليلة، مما أدى إلى رضا استثنائي للعملاء.", ku: "مۆدیولەکێ شلوڤەکرنا دارایی یا ئۆتۆماتیکی یا پڕ پەسندکری دروستکریە کو دشێت راپۆرتێن گشتگیر یێن ساڵانە، هەیڤانە و حەفتیانە بتنێ ب چەند کلیکەکان دروست بکەت، کو بوویە ئەگەرێ رازیبوونا بێوێنە یا کڕیاران." },
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 6 — MedNexus
  // ═══════════════════════════════════════
  {
    id: 6,
    title: "MedNexus",
    category: "Healthcare SaaS",
    description: "Lead Full-Stack Architect. Global dashboard for real-time biological supply chain visualization. Features zero-latency state sync, live hospital tracking, and enterprise-grade security.",
    tags: ["React 19", "TypeScript", "Laravel"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",

    role: "Full-Stack Developer",
    platform: "SaaS Platform",
    overview: "A secure healthcare SaaS platform featuring real-time analytics and global dashboards to manage medical data efficiently.",
    features: [
      { title: "Real-Time Analytics", description: "Delivers immediate insights into healthcare metrics." },
      { title: "Global Dashboards", description: "Provides a centralized, secure view of critical data." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "Laravel Echo", "Typescript"] },
      { category: "Backend", technologies: ["Laravel", "Laravel Reverb", "SQLite"] }
    ],
    i18n: {
      title: { en: "MedNexus", ar: "ميد نيكسوس", ku: "مێد نێکسس" },
      category: { en: "Healthcare SaaS", ar: "برمجيات طبية كخدمة (SaaS)", ku: "نەرمامێرێن ساخلەمیێ وەک خزمەتگوزاری (SaaS)" },
      role: { en: "Full-Stack Developer", ar: "مطور شامل", ku: "گەشەپێدەرێ فول ستاک" },
      platform: { en: "SaaS Platform", ar: "منصة برمجيات كخدمة (SaaS)", ku: "پلاتفورما SaaS" },
      overview: { en: "A secure healthcare SaaS platform featuring real-time analytics and global dashboards to manage medical data efficiently.", ar: "منصة سحابية طبية آمنة (SaaS) تتميز بتحليلات لحظية ولوحات تحكم عالمية لإدارة البيانات الطبية بكفاءة.", ku: "پلاتفورمەکا سحابیا تەندروستی یا پاراستی یە کو تایبەتمەندە ب شلوڤەکرنا د دەمێ خۆ دا و داشبۆردێن جیهانی بۆ بڕێڤەبرنا داتایێن پزیشکی ب کارامەیی." },
      features: [
        { title: { en: "Real-Time Analytics", ar: "تحليلات لحظية", ku: "شلوڤەکرنا د دەمێ خۆ دا" }, description: { en: "Delivers immediate insights into healthcare metrics.", ar: "توفر رؤى فورية لمقاييس الرعاية الصحية.", ku: "پێزانینێن دەستبەجێ ل سەر ئامارێن چاڤدێریا تەندروستی پێشکێش دکەت." } },
        { title: { en: "Global Dashboards", ar: "لوحات تحكم عالمية", ku: "داشبۆردێن جیهانی" }, description: { en: "Provides a centralized, secure view of critical data.", ar: "توفر عرضاً مركزياً وآمناً للبيانات الحرجة.", ku: "دیمەنەکێ ناڤەندی و پاراستی بۆ داتایێن هەستیار دابین دکەت." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["React", "Laravel Echo", "Typescript"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية", ku: "رووکارێ پاشیێ" }, technologies: ["Laravel", "Laravel Reverb", "SQLite"] },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 7 — KurdîClass
  // ═══════════════════════════════════════
  {
    id: 7,
    title: "KurdîClass",
    category: "EdTech Platform",
    description: "Full-Stack Developer & UI/UX Designer. Comprehensive educational portal for the Kurdistan Region. Features flawless RTL architecture, seamless multi-language toggling, and premium dark-mode UI.",
    tags: ["Full-Stack", "UI/UX", "RTL"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop",

    role: "Full-Stack Developer",
    platform: "Educational Platform",
    overview: "A comprehensive platform for managing academic curriculum and resources, featuring institutional management tools and support for trilingual RTL layouts.",
    features: [
      { title: "Curriculum Management", description: "Organizes and manages academic resources effectively." },
      { title: "Trilingual RTL Support", description: "Fully localized interface supporting multiple languages including right-to-left formatting." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "Typescript", "HTML", "CSS"] },
      { category: "Backend", technologies: ["Laravel", "MySQL"] }
    ],
    i18n: {
      title: { en: "KurdîClass", ar: "كوردي كلاس", ku: "کوردیکلاس" },
      category: { en: "EdTech Platform", ar: "منصة تقنيات التعليم", ku: "پلاتفورما تەکنەلۆژیایا پەروەردەیی" },
      role: { en: "Full-Stack Developer", ar: "مطور شامل", ku: "گەشەپێدەرێ فول ستاک" },
      platform: { en: "Educational Platform", ar: "منصة تعليمية", ku: "پلاتفورما پەروەردەیی" },
      overview: { en: "A comprehensive platform for managing academic curriculum and resources, featuring institutional management tools and support for trilingual RTL layouts.", ar: "منصة شاملة لإدارة المناهج والموارد الأكاديمية، تتميز بأدوات الإدارة المؤسسية ودعم لتخطيطات RTL بثلاث لغات.", ku: "پلاتفورمەکا گشتگیرە بۆ بڕێڤەبرنا پرۆگرامێ خاندنێ و سەرچاڤەیێن ئەکادیمی، کو تایبەتمەندە ب ئامرازێن کارگێڕیا دەزگەهی و پشتەڤانیا شێوازێ RTL ب سێ زمانان." },
      features: [
        { title: { en: "Curriculum Management", ar: "إدارة المناهج", ku: "بڕێڤەبرنا پرۆگرامێ خاندنێ" }, description: { en: "Organizes and manages academic resources effectively.", ar: "تنظم وتدير الموارد الأكاديمية بفعالية.", ku: "سەرچاڤەیێن ئەکادیمی ب شێوەیەکێ کاریگەر رێکدێخیت و بڕێڤە دۆت." } },
        { title: { en: "Trilingual RTL Support", ar: "دعم ثلاثي اللغات لاتجاه النص (RTL)", ku: "پشتەڤانیا سێ زمانی بۆ شێوازێ RTL" }, description: { en: "Fully localized interface supporting multiple languages including right-to-left formatting.", ar: "واجهة معربة بالكامل تدعم لغات متعددة بما في ذلك التنسيق من اليمين إلى اليسار.", ku: "رووکارەکێ ب تەمامی خۆجیهی کو پشتەڤانیا چەندین زمانان دکەت بگەل رێکخستنا ژ راست بۆ چەپ." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["React", "Typescript", "HTML", "CSS"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية", ku: "رووکارێ پاشیێ" }, technologies: ["Laravel", "MySQL"] },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 8 — Starfish Co.
  // ═══════════════════════════════════════
  {
    id: 8,
    title: "Starfish Co.",
    category: "Commercial E-Commerce",
    description: "WordPress Architect & UI/UX Designer. High-performance corporate platform managing multiple sub-brands. Features complex nested navigation, high-conversion UI, and optimized media integration.",
    tags: ["WordPress", "UI/UX", "E-Commerce"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",

    role: "Web Developer / Designer",
    platform: "Corporate Website",
    overview: "A fully custom-designed corporate website built to effectively showcase the company's diverse product catalog, mission, and vision.",
    features: [
      { title: "Custom Theme Design", description: "A tailored, from-scratch visual identity built to match corporate branding." },
      { title: "Content Management", description: "Streamlined administrative dashboard for easy updates to products and company information." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["HTML", "CSS", "JavaScript"] },
      { category: "Backend / CMS", technologies: ["WordPress", "PHP"] }
    ],
    i18n: {
      title: { en: "Starfish Co.", ar: "شركة ستارفيس", ku: "کۆمپانیا ستارفیش" },
      category: { en: "Commercial E-Commerce", ar: "تجارة إلكترونية", ku: "بازرگانیا ئەلکترۆنی" },
      role: { en: "Web Developer / Designer", ar: "مطور / مصمم ويب", ku: "گەشەپێدەر / دیزاینەرێ وێبی" },
      platform: { en: "Corporate Website", ar: "موقع إلكتروني للشركة", ku: "ماڵپەڕێ کۆمپانیایێ" },
      overview: { en: "A fully custom-designed corporate website built to effectively showcase the company's diverse product catalog, mission, and vision.", ar: "موقع إلكتروني للشركة مصمم بالكامل خصيصاً لعرض كتالوج المنتجات المتنوعة للشركة، ورسالتها، ورؤيتها بفعالية.", ku: "ماڵپەڕەکێ کۆمپانیایێ یە کو ب تەمامی ب دیزاینەکا تایبەت هاتیە دروستکرن بۆ نیشاندانا کەتەلۆگێ بەرهەمێن جودایێن کۆمپانیایێ، پەیام و دیتنا وێ ب شێوەیەکێ کاریگەر." },
      features: [
        { title: { en: "Custom Theme Design", ar: "تصميم قالب مخصص", ku: "دیزاینا رووکارێ تایبەت" }, description: { en: "A tailored, from-scratch visual identity built to match corporate branding.", ar: "هوية بصرية مخصصة ومبنية من الصفر لتتطابق مع العلامة التجارية للشركة.", ku: "ناسنامەیەکا بینراو یا تایبەت کو ژ سفرێ هاتیە دروستکرن بۆ گونجان دگەل براندێ کۆمپانیایێ." } },
        { title: { en: "Content Management", ar: "إدارة المحتوى", ku: "بڕێڤەبرنا ناڤەڕۆکێ" }, description: { en: "Streamlined administrative dashboard for easy updates to products and company information.", ar: "لوحة تحكم إدارية مبسطة لتحديث المنتجات ومعلومات الشركة بسهولة.", ku: "داشبۆردەکێ کارگێڕی یێ سادە بۆ نویکرنا بەرهەم و پێزانینێن کۆمپانیایێ ب ساناهی." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["HTML", "CSS", "JavaScript"] },
        { category: { en: "Backend / CMS", ar: "الواجهة الخلفية / نظام إدارة المحتوى", ku: "رووکارێ پاشیێ / سیستەمێ بڕێڤەبرنا ناڤەڕۆکێ" }, technologies: ["WordPress", "PHP"] },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 9 — Hospital DB System
  // ═══════════════════════════════════════
  {
    id: 9,
    title: "Hospital DB System",
    category: "Healthcare Infrastructure",
    description: "Secure, centralized database architecture for patient registries and medical inventories. Engineered for strict data integrity, complex relational mapping, and enterprise-grade role-based access control.",
    tags: ["SQL", "Relational DB", "Backend"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1551076805-e18690c5e45e?q=80&w=2000&auto=format&fit=crop",

    role: "Database Architect",
    platform: "Database Architecture",
    overview: "A comprehensive relational database architecture designed from the ground up to securely handle hospital administration, patient records, and operational data flow.",
    features: [
      { title: "Advanced Schema Design", description: "Engineered utilizing detailed Entity-Relationship (ER) and Enhanced Entity-Relationship (EER) diagrams." },
      { title: "Data Integrity & Security", description: "Structured to ensure the reliable, safe storage and retrieval of sensitive medical records." }
    ],
    techStack: [
      { category: "Database Design", technologies: ["ER Diagrams", "EER Diagrams"] },
      { category: "Database Management", technologies: ["Microsoft SQL Server"] }
    ],
    i18n: {
      title: { en: "Hospital DB System", ar: "نظام قواعد بيانات المستشفى", ku: "سیستەمێ داتابەیسا نەخۆشخانەیێ" },
      category: { en: "Healthcare Infrastructure", ar: "البنية التحتية للرعاية الصحية", ku: "ژێرخانا چاڤدێریا تەندروستی" },
      role: { en: "Database Architect", ar: "مهندس قواعد بيانات", ku: "ئەندازیارێ داتابەیسێ" },
      platform: { en: "Database Architecture", ar: "هندسة قواعد البيانات", ku: "ئەندازیاریا داتابەیسێ" },
      overview: { en: "A comprehensive relational database architecture designed from the ground up to securely handle hospital administration, patient records, and operational data flow.", ar: "بنية قاعدة بيانات علائقية شاملة مصممة من الصفر للتعامل الآمن مع إدارة المستشفيات، وسجلات المرضى، وتدفق البيانات التشغيلية.", ku: "پێکهاتەیەکێ گشتگیر یێ داتابەیسا پەیوەندیدار کو ژ سفرێ هاتیە دیزاینکرن بۆ مامەڵەکرنا پاراستی دگەل کارگێڕیا نەخۆشخانەیێ، رێکۆردێن نەخۆشان، و رێڤەچوونا داتایێن کارپێکرنێ." },
      features: [
        { title: { en: "Advanced Schema Design", ar: "تصميم مخطط متقدم", ku: "دیزاینکرنا نەخشێ پێشکەفتی" }, description: { en: "Engineered utilizing detailed Entity-Relationship (ER) and Enhanced Entity-Relationship (EER) diagrams.", ar: "مُهندسة باستخدام مخططات علاقات الكيانات (ER) ومخططات علاقات الكيانات المحسنة (EER) التفصيلية.", ku: "هاتیە ئەندازیاریکرن ب بکارئینانا هێلکاریێن پەیوەندیا ئینتیتی (ER) و هێلکاریێن پەیوەندیا ئینتیتی یێن پێشکەفتی (EER)." } },
        { title: { en: "Data Integrity & Security", ar: "سلامة وأمن البيانات", ku: "دروستی و ئاسایشا داتایان" }, description: { en: "Structured to ensure the reliable, safe storage and retrieval of sensitive medical records.", ar: "مهيكلة لضمان التخزين والاسترجاع الموثوق والآمن للسجلات الطبية الحساسة.", ku: "هاتیە رێکخستن بۆ مسۆگەرکرنا هەلگرتن و ڤەگەڕاندنا باوەریپێکری و پاراستی یا رێکۆردێن پزیشکی یێن هەستیار." } },
      ],
      techStack: [
        { category: { en: "Database Design", ar: "تصميم قاعدة البيانات", ku: "دیزاینا داتابەیسێ" }, technologies: ["ER Diagrams", "EER Diagrams"] },
        { category: { en: "Database Management", ar: "إدارة قواعد البيانات", ku: "بڕێڤەبرنا داتابەیسێ" }, technologies: ["Microsoft SQL Server"] },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 10 — Election DB System
  // ═══════════════════════════════════════
  {
    id: 10,
    title: "Election DB System",
    category: "Civic & Security Systems",
    description: "High-security relational database handling voter registration and real-time tabulation. Focuses on absolute data immutability, cryptographic audit trails, and high-concurrency transaction management.",
    tags: ["Secure SQL", "Cryptography", "Backend"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop",

    role: "Database Architect",
    platform: "Database Architecture",
    overview: "A highly secure and robust relational database schema designed specifically for managing election records, voter registration data, and complex voting statistics.",
    features: [
      { title: "Complex Entity Mapping", description: "Structured relationships utilizing ER and EER diagrams to ensure accurate voter data mapping." },
      { title: "Statistical Optimization", description: "Backend architecture designed to support rapid querying for real-time election analytics." }
    ],
    techStack: [
      { category: "Database Design", technologies: ["ER Diagrams", "EER Diagrams"] },
      { category: "Database Management", technologies: ["Microsoft SQL Server"] }
    ],
    i18n: {
      title: { en: "Election DB System", ar: "نظام قواعد بيانات الانتخابات", ku: "سیستەمێ داتابەیسا هەلبژارتنان" },
      category: { en: "Civic & Security Systems", ar: "الأنظمة المدنية والأمنية", ku: "سیستەمێن مەدەنی و ئەمنی" },
      role: { en: "Database Architect", ar: "مهندس قواعد بيانات", ku: "ئەندازیارێ داتابەیسێ" },
      platform: { en: "Database Architecture", ar: "هندسة قواعد البيانات", ku: "ئەندازیاریا داتابەیسێ" },
      overview: { en: "A highly secure and robust relational database schema designed specifically for managing election records, voter registration data, and complex voting statistics.", ar: "مخطط قاعدة بيانات علائقية قوي وآمن للغاية مصمم خصيصاً لإدارة سجلات الانتخابات، وبيانات تسجيل الناخبين، والإحصاءات الانتخابية المعقدة.", ku: "نەخشەیەکێ داتابەیسا پەیوەندیدار یێ زۆر پاراستی و بهێزە کو ب تایبەتی هاتیە دیزاینکرن بۆ بڕێڤەبرنا رێکۆردێن هەلبژارتنێ، داتایێن تۆمارکرنا دەنگدەران، و ئامارێن ئالۆز یێن دەنگدانێ." },
      features: [
        { title: { en: "Complex Entity Mapping", ar: "تخطيط الكيانات المعقدة", ku: "نەخشەکرنا پێکهاتەیێن ئالۆز" }, description: { en: "Structured relationships utilizing ER and EER diagrams to ensure accurate voter data mapping.", ar: "علاقات مهيكلة باستخدام مخططات ER و EER لضمان التخطيط الدقيق لبيانات الناخبين.", ku: "پەیوەندیێن رێکخستی ب بکارئینانا هێلکاریێن ER و EER بۆ مسۆگەرکرنا نەخشەکرنا دروست یا داتایێن دەنگدەران." } },
        { title: { en: "Statistical Optimization", ar: "تحسين إحصائي", ku: "باشترکرنا ئاماری" }, description: { en: "Backend architecture designed to support rapid querying for real-time election analytics.", ar: "بنية خلفية مصممة لدعم الاستعلام السريع للتحليلات الانتخابية في الوقت الفعلي.", ku: "پێکهاتەیێ باکئێند هاتیە دیزاینکرن بۆ پشتەڤانیکرنا لێگەڕیانا بلەز بۆ شلوڤەکرنێن هەلبژارتنێ د دەمێ خۆ دا." } },
      ],
      techStack: [
        { category: { en: "Database Design", ar: "تصميم قاعدة البيانات", ku: "دیزاینا داتابەیسێ" }, technologies: ["ER Diagrams", "EER Diagrams"] },
        { category: { en: "Database Management", ar: "إدارة قواعد البيانات", ku: "بڕێڤەبرنا داتابەیسێ" }, technologies: ["Microsoft SQL Server"] },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 11 — Dormitory Management
  // ═══════════════════════════════════════
  {
    id: 11,
    title: "Dormitory Management",
    category: "Higher Education Logistics",
    description: "Institutional logistics platform managing student housing and capacity planning. Features automated room assignment logic, occupancy analytics, and highly structured data models for large-scale operations.",
    tags: ["Full-Stack", "SQL", "Logistics"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop",

    role: "Database Architect",
    platform: "Database Architecture",
    overview: "A foundational relational database system engineered to efficiently structure data for dormitory room assignments, student records, and facility operations.",
    features: [
      { title: "Facility Logic Modeling", description: "Detailed mapping of student-to-facility relationships using formal ER/EER methodologies." },
      { title: "Centralized Storage", description: "A secure MS SQL backend optimized for seamless data retrieval and administrative updates." }
    ],
    techStack: [
      { category: "Database Design", technologies: ["ER Diagrams", "EER Diagrams"] },
      { category: "Database Management", technologies: ["Microsoft SQL Server"] }
    ],
    i18n: {
      title: { en: "Dormitory Management", ar: "إدارة السكن الجامعي", ku: "بڕێڤەبرنا بەشێن ناڤخۆیی" },
      category: { en: "Higher Education Logistics", ar: "خدمات التعليم العالي الدعمية", ku: "لۆجستیکیا خاندنا باڵا" },
      role: { en: "Database Architect", ar: "مهندس قواعد بيانات", ku: "ئەندازیارێ داتابەیسێ" },
      platform: { en: "Database Architecture", ar: "هندسة قواعد البيانات", ku: "ئەندازیاریا داتابەیسێ" },
      overview: { en: "A foundational relational database system engineered to efficiently structure data for dormitory room assignments, student records, and facility operations.", ar: "نظام قواعد بيانات علائقية أساسي مُهندس لهيكلة البيانات بكفاءة لتخصيص غرف السكن، وسجلات الطلاب، وعمليات المرافق.", ku: "سیستەمەکێ بنەڕەتی یێ داتابەیسا پەیوەندیدارە کو هاتیە ئەندازیاریکرن بۆ رێکخستنا کارامە یا داتایان بۆ دابەشکرنا ژوورێن بەشێن ناڤخۆیی، رێکۆردێن قوتابیان، و کارێن دەزگەهان." },
      features: [
        { title: { en: "Facility Logic Modeling", ar: "نمذجة منطق المرافق", ku: "مۆدێلکرنا لۆژیکیا دەزگەهی" }, description: { en: "Detailed mapping of student-to-facility relationships using formal ER/EER methodologies.", ar: "تخطيط تفصيلي للعلاقات بين الطالب والمرفق باستخدام منهجيات ER/EER الرسمية.", ku: "نەخشەکرنا هویر یا پەیوەندیێن دناڤبەرا قوتابی و دەزگەهی ب بکارئینانا رێبازێن فەرمی یێن ER/EER." } },
        { title: { en: "Centralized Storage", ar: "تخزين مركزي", ku: "هەلگرتنا ناڤەندی" }, description: { en: "A secure MS SQL backend optimized for seamless data retrieval and administrative updates.", ar: "خلفية MS SQL آمنة ومُحسنة لاسترجاع البيانات والتحديثات الإدارية بسلاسة.", ku: "باکئێندەکێ MS SQL یێ پاراستی و باشترکری بۆ ڤەگەڕاندنا بێ کێماسی یا داتایان و نویكرنەڤەیێن کارگێڕی." } },
      ],
      techStack: [
        { category: { en: "Database Design", ar: "تصميم قاعدة البيانات", ku: "دیزاینا داتابەیسێ" }, technologies: ["ER Diagrams", "EER Diagrams"] },
        { category: { en: "Database Management", ar: "إدارة قواعد البيانات", ku: "بڕێڤەبرنا داتابەیسێ" }, technologies: ["Microsoft SQL Server"] },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 12 — Teacher Records Hub
  // ═══════════════════════════════════════
  {
    id: 12,
    title: "Teacher Records Hub",
    category: "Educational Admin",
    description: "Digital administrative hub securing faculty credentials and performance metrics. Delivers secure document indexing and high-speed search algorithms via a streamlined, optimized UI.",
    tags: ["Web System", "Database", "Frontend"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",

    role: "Full-Stack Web Developer",
    platform: "Web Application",
    overview: "A comprehensive web-based administrative portal designed to streamline the management of educator profiles, academic records, and institutional documentation.",
    features: [
      { title: "Centralized Record Keeping", description: "Provides a secure, easily accessible digital repository for all teaching staff data." },
      { title: "Administrative Automation", description: "Replaces tedious manual paperwork with efficient, automated digital workflows." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
      { category: "Backend", technologies: ["PHP"] }
    ],
    technicalAchievements: "Significantly reduced the daily administrative workload for teaching staff by digitizing and automating previously time-consuming manual record-keeping processes.",
    i18n: {
      title: { en: "Teacher Records Hub", ar: "مركز سجلات المعلمين", ku: "سەنتەرێ رێکۆردێن مامۆستایان" },
      category: { en: "Educational Admin", ar: "إدارة تعليمية", ku: "کارگێڕیا پەروەردەیی" },
      role: { en: "Full-Stack Web Developer", ar: "مطور ويب شامل", ku: "گەشەپێدەرێ وێبی یێ فول ستاک" },
      platform: { en: "Web Application", ar: "تطبيق ويب", ku: "ئەپلیکەیشنا وێبی" },
      overview: { en: "A comprehensive web-based administrative portal designed to streamline the management of educator profiles, academic records, and institutional documentation.", ar: "بوابة إدارية شاملة قائمة على الويب مصممة لتبسيط إدارة ملفات المعلمين الشخصية، والسجلات الأكاديمية، والوثائق المؤسسية.", ku: "پۆرتاڵەکێ کارگێڕی یێ گشتگیر ل سەر بنەمایێ وێب کو هاتیە دیزاینکرن بۆ هاسانکرنا بڕێڤەبرنا پرۆفایلێن مامۆستایان، رێکۆردێن ئەکادیمی، و بەلگەنامەیێن دەزگەهی." },
      features: [
        { title: { en: "Centralized Record Keeping", ar: "حفظ السجلات المركزي", ku: "پاراستنا رێکۆردان یا ناڤەندی" }, description: { en: "Provides a secure, easily accessible digital repository for all teaching staff data.", ar: "يوفر مستودعاً رقمياً آمناً وسهل الوصول إليه لجميع بيانات أعضاء هيئة التدريس.", ku: "کۆگەهەکا دیجیتاڵی یا پاراستی و ب ساناهی بۆ گەیشتنێ بەردەست دکەت بۆ هەمی داتایێن ستافێ مامۆستایان." } },
        { title: { en: "Administrative Automation", ar: "أتمتة إدارية", ku: "ئۆتۆماتیکیکرنا کارگێڕی" }, description: { en: "Replaces tedious manual paperwork with efficient, automated digital workflows.", ar: "يستبدل الأعمال الورقية اليدوية المملة بمسارات عمل رقمية فعالة ومؤتمتة.", ku: "کارێن کاغەزی یێن دەستی یێن بێزارکەر ب کارێن دیجیتاڵی یێن کارامە و ئۆتۆماتیکیکری دگۆهڕیت." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية", ku: "رووکارێ پاشیێ" }, technologies: ["PHP"] },
      ],
      technicalAchievements: { en: "Significantly reduced the daily administrative workload for teaching staff by digitizing and automating previously time-consuming manual record-keeping processes.", ar: "قلل بشكل كبير من عبء العمل الإداري اليومي لأعضاء هيئة التدريس عن طريق رقمنة وأتمتة عمليات حفظ السجلات اليدوية التي كانت تستغرق وقتاً طويلاً سابقاً.", ku: "ب رێژەیەکا بەرچاڤ ئەرکێ کارگێڕی یێ رۆژانە یێ ستافێ مامۆستایان کێم کر ب رێکا دیجیتاڵیکرن و ئۆتۆماتیکیکرنا پرۆسەیێن هەلگرتنا رێکۆردان یێن دەستی کو بەرێ دەمەکێ زۆر دبر." },
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 13 — Shopping Management
  // ═══════════════════════════════════════
  {
    id: 13,
    title: "Shopping Management",
    category: "Commercial E-Commerce",
    description: "Robust commercial backend processing product lifecycles and secure checkouts. Highlights include real-time inventory state synchronization and complex relational mapping for financial data.",
    tags: ["Full-Stack", "Transactional DB", "E-Commerce"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",

    role: "Software Developer",
    platform: "Desktop Application",
    overview: "An intuitive desktop application engineered to oversee retail operations, manage complex inventory lifecycles, and process daily transactions seamlessly.",
    features: [
      { title: "Inventory Tracking", description: "Monitors stock levels, product variations, and resupply needs in real time." },
      { title: "Transaction Processing", description: "Delivers a smooth, reliable checkout experience for daily retail operations." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["WinForms", "Bunifu Framework", "Guna Framework"] },
      { category: "Backend", technologies: ["C#", "Entity Framework", "SQL Server"] }
    ],
    i18n: {
      title: { en: "Shopping Management", ar: "إدارة التسوق", ku: "بڕێڤەبرنا بازاڕکرنێ" },
      category: { en: "Commercial E-Commerce", ar: "تجارة إلكترونية", ku: "بازرگانیا ئەلکترۆنی" },
      role: { en: "Software Developer", ar: "مطور برمجيات", ku: "گەشەپێدەرێ سۆفتوێری" },
      platform: { en: "Desktop Application", ar: "تطبيق سطح المكتب", ku: "ئەپلیکەیشنا دیسکتۆپێ" },
      overview: { en: "An intuitive desktop application engineered to oversee retail operations, manage complex inventory lifecycles, and process daily transactions seamlessly.", ar: "تطبيق سطح مكتب سهل الاستخدام مُصمم للإشراف على عمليات التجزئة، وإدارة دورات حياة المخزون المعقدة، ومعالجة المعاملات اليومية بسلاسة.", ku: "ئەپلیکەیشنەکا دیسکتۆپێ یا بکارئینان-ساناهی یە کو هاتیە ئەندازیاریکرن بۆ سەرپەرشتیکرنا کارێن فرۆشتنێ، بڕێڤەبرنا قۆناغێن ئالۆز یێن کۆگەهێ، و راپەڕاندنا مامەڵەیێن رۆژانە بێ کێماسی." },
      features: [
        { title: { en: "Inventory Tracking", ar: "تتبع المخزون", ku: "دیڤچوونا کۆگەهێ" }, description: { en: "Monitors stock levels, product variations, and resupply needs in real time.", ar: "يراقب مستويات المخزون، وتنوع المنتجات، واحتياجات إعادة التزويد في الوقت الفعلي.", ku: "چاڤدێریا ئاستێ کەلوپەلان، جۆرێن بەرهەمان، و پێدڤیێن دوبارە دابینکرنێ دکەت د دەمێ خۆ دا." } },
        { title: { en: "Transaction Processing", ar: "معالجة المعاملات", ku: "راپەڕاندنا مامەڵەیان" }, description: { en: "Delivers a smooth, reliable checkout experience for daily retail operations.", ar: "يوفر تجربة دفع سلسة وموثوقة لعمليات التجزئة اليومية.", ku: "ئەزموونەکا پارەدانێ یا نەرم و باوەریپێکری بۆ کارێن فرۆشتنێ یێن رۆژانە پێشکێش دکەت." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["WinForms", "Bunifu Framework", "Guna Framework"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية", ku: "رووکارێ پاشیێ" }, technologies: ["C#", "Entity Framework", "SQL Server"] },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 14 — Gym DB System
  // ═══════════════════════════════════════
  {
    id: 14,
    title: "Gym DB System",
    category: "Facility Management",
    description: "Scalable membership lifecycle platform tracking active subscriptions and access control. Built with automated status flagging, renewal logic, and a highly scalable schema design.",
    tags: ["Relational DB", "Web Interface", "Schema Design"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",

    role: "Full-Stack Developer",
    platform: "Desktop Application",
    overview: "A robust desktop management platform engineered specifically for fitness centers to handle client memberships, track billing, and monitor facility usage.",
    features: [
      { title: "Membership Management", description: "Organizes client profiles, tracks attendance, and monitors active subscription statuses." },
      { title: "Financial Tracking", description: "Provides oversight for facility billing, payment histories, and revenue reporting." }
    ],
    techStack: [
      { category: "Frontend", technologies: ["WinForms", "Bunifu Framework", "Guna Framework", "DevExpress"] },
      { category: "Backend", technologies: ["C#", "Entity Framework", "SQL Server"] }
    ],
    i18n: {
      title: { en: "Gym DB System", ar: "نظام قواعد بيانات الصالة الرياضية", ku: "سیستەمێ داتابەیسا هۆلا وەرزشی" },
      category: { en: "Facility Management", ar: "إدارة المرافق", ku: "بڕێڤەبرنا دەزگەهی" },
      role: { en: "Full-Stack Developer", ar: "مطور شامل", ku: "گەشەپێدەرێ فول ستاک" },
      platform: { en: "Desktop Application", ar: "تطبيق سطح المكتب", ku: "ئەپلیکەیشنا دیسکتۆپێ" },
      overview: { en: "A robust desktop management platform engineered specifically for fitness centers to handle client memberships, track billing, and monitor facility usage.", ar: "منصة إدارة قوية لسطح المكتب مُصممة خصيصاً لمراكز اللياقة البدنية للتعامل مع اشتراكات العملاء، وتتبع الفواتير، ومراقبة استخدام المرافق.", ku: "پلاتفورمەکا بڕێڤەبرنا دیسکتۆپێ یا بهێزە کو ب تایبەتی بۆ سەنتەرێن لەشجوانیێ هاتیە ئەندازیاریکرن بۆ مامەڵەکرن دگەل ئابوونەیێن کڕیاران، دیڤچوونا پسولەیان، و چاڤدێریکرنا بکارئینانا دەزگەهی." },
      features: [
        { title: { en: "Membership Management", ar: "إدارة العضويات", ku: "بڕێڤەبرنا ئەندامبوونی" }, description: { en: "Organizes client profiles, tracks attendance, and monitors active subscription statuses.", ar: "ينظم ملفات العملاء، ويتتبع الحضور، ويراقب حالات الاشتراكات النشطة.", ku: "پرۆفایلێن کڕیاران رێکدێخیت، دیڤچوونا ئامادەبوونێ دکەت، و چاڤدێریا رەوشا ئابوونەیێن چالاک دکەت." } },
        { title: { en: "Financial Tracking", ar: "تتبع مالي", ku: "دیڤچوونا دارایی" }, description: { en: "Provides oversight for facility billing, payment histories, and revenue reporting.", ar: "يوفر إشرافاً على فواتير المرافق، وتاريخ المدفوعات، وتقارير الإيرادات.", ku: "سەرپەرشتیا پسولەیێن دەزگەهی، مێژوویا پارەدانێ، و راپۆرتێن داهاتی دکەت." } },
      ],
      techStack: [
        { category: { en: "Frontend", ar: "واجهة المستخدم", ku: "رووکارێ پێشیێ" }, technologies: ["WinForms", "Bunifu Framework", "Guna Framework", "DevExpress"] },
        { category: { en: "Backend", ar: "الواجهة الخلفية", ku: "رووکارێ پاشیێ" }, technologies: ["C#", "Entity Framework", "SQL Server"] },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PROJECT 15 — Tic-Tac-Toe AI
  // ═══════════════════════════════════════
  {
    id: 15,
    title: "Tic-Tac-Toe AI",
    category: "Mobile App (Android)",
    description: "Highly responsive Android application demonstrating fundamental state management. Implements complex min-max algorithms for an unbeatable AI opponent with efficient local state handling.",
    tags: ["Android SDK", "Java/Kotlin", "Mobile UI"],
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop",

    role: "Mobile App Developer",
    platform: "Android Application",
    overview: "An engaging native Android application that brings a classic gaming experience to modern mobile devices with a clean, highly responsive user interface.",
    features: [
      { title: "Native Mobile Performance", description: "Delivers smooth, fast-paced gameplay optimized specifically for the Android ecosystem." },
      { title: "Responsive UI Design", description: "Features a modern layout that adapts flawlessly across various smartphone and tablet screen sizes." }
    ],
    techStack: [
      { category: "UI Layout", technologies: ["XML"] },
      { category: "Application Logic", technologies: ["Kotlin"] }
    ],
    i18n: {
      title: { en: "Tic-Tac-Toe AI", ar: "لعبة إكس أو مع ذكاء اصطناعي", ku: "یاریا Tic-Tac-Toe دگەل ژیرییا دەستکرد" },
      category: { en: "Mobile App (Android)", ar: "تطبيق هاتف (أندرويد)", ku: "ئەپلیکەیشنا مۆبایلێ (ئەندرۆید)" },
      role: { en: "Mobile App Developer", ar: "مطور تطبيقات هواتف", ku: "گەشەپێدەرێ ئەپلیکەیشنا مۆبایلێ" },
      platform: { en: "Android Application", ar: "تطبيق أندرويد", ku: "ئەپلیکەیشنا ئەندرۆید" },
      overview: { en: "An engaging native Android application that brings a classic gaming experience to modern mobile devices with a clean, highly responsive user interface.", ar: "تطبيق أندرويد أصلي وممتع يجلب تجربة الألعاب الكلاسيكية إلى الأجهزة المحمولة الحديثة بواجهة مستخدم نظيفة وسريعة الاستجابة.", ku: "ئەپلیکەیشنەکا رەسەن یا ئەندرۆید یا سەرنجڕاکێش کو ئەزموونا یاریێن کلاسیکی بۆ ئامرازێن مۆبایلێ یێن سەردەم دئینیت ب رووکارەکێ بکارئینەری یێ پاقژ و زۆر گونجاو." },
      features: [
        { title: { en: "Native Mobile Performance", ar: "أداء محمول أصلي", ku: "پەرفۆرمانسا رەسەن یا مۆبایلێ" }, description: { en: "Delivers smooth, fast-paced gameplay optimized specifically for the Android ecosystem.", ar: "يقدم أسلوب لعب سلس وسريع الإيقاع مُحسن خصيصاً لنظام أندرويد البيئي.", ku: "یاریەکا نەرم و بلەز پێشکێش دکەت کو ب تایبەتی بۆ ژینگەها ئەندرۆید هاتیە باشترکرن." } },
        { title: { en: "Responsive UI Design", ar: "تصميم واجهة مستخدم متجاوب", ku: "دیزاینا رووکاری یا گونجاو" }, description: { en: "Features a modern layout that adapts flawlessly across various smartphone and tablet screen sizes.", ar: "يتميز بتخطيط حديث يتكيف بشكل مثالي عبر مختلف أحجام شاشات الهواتف الذكية والأجهزة اللوحية.", ku: "تایبەتمەندە ب رێکخستنەکا سەردەمیانە کو ب شێوەیەکێ بێ کێماسی دگەل قەبارەیێن جودا یێن شاشەیێن سمارتفۆن و تابلێتان دگونجیت." } },
      ],
      techStack: [
        { category: { en: "UI Layout", ar: "تخطيط واجهة المستخدم", ku: "شێوازێ رووکاری" }, technologies: ["XML"] },
        { category: { en: "Application Logic", ar: "منطق التطبيق", ku: "لۆژیکێ ئەپلیکەیشنێ" }, technologies: ["Kotlin"] },
      ],
    },
  },

];

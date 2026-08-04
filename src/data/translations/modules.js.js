import { EXTRA_MODULE_TRANSLATIONS } from './modulesExtra'

// Traductions du CONTENU des modules. Pour l'anglais et l'arabe : titre, description,
// "c'est quoi" et documents. Pour les autres langues (espagnol, portugais, russe,
// ukrainien, turc, dari/persan, albanais, tigrinya, somali, chinois) : titre et
// description pour l'instant, afin de garder un périmètre réaliste à traduire et
// vérifier. Les ÉTAPES détaillées restent en français uniquement partout (l'app
// affiche un sous-titre français à côté du contenu traduit, dans un but pédagogique).
//
// Traduction automatique relue une fois mais PAS validée par des locuteurs natifs.
// Fiabilité : bonne pour en/es/pt/ru/uk/tr. À faire vérifier par un locuteur natif
// avant un usage critique pour fa (dari/persan), sq (albanais), ti (tigrinya),
// so (somali) et zh (chinois).

export const MODULE_TRANSLATIONS = {
  'app-fixe': {
    en: { title: 'Desktop computer', description: 'Discover and set up a desktop computer.' },
    es: { title: 'Ordenador de sobremesa', description: 'Descubrir y configurar un ordenador de sobremesa.' },
    pt: { title: 'Computador de mesa', description: 'Descobrir e configurar um computador de mesa.' },
    ar: { title: 'حاسوب مكتبي', description: 'التعرف على الحاسوب المكتبي وإعداده.' },
    ru: { title: 'Настольный компьютер', description: 'Знакомство с настольным компьютером и его настройка.' },
    uk: { title: 'Настільний комп\u2019ютер', description: 'Знайомство з настільним комп\u2019ютером та його налаштування.' },
    tr: { title: 'Masaüstü bilgisayar', description: 'Masaüstü bilgisayarı tanıma ve ayarlama.' },
    fa: { title: 'رایانه رومیزی', description: 'آشنایی با رایانه رومیزی و تنظیم آن.' },
    sq: { title: 'Kompjuter desktop', description: 'Njihuni dhe konfiguroni një kompjuter desktop.' },
    ti: { title: 'ደስክቶፕ ኮምፒተር', description: 'ደስክቶፕ ኮምፒተር ምፍላጥን ምስራሕን።' },
    so: { title: 'Kombiyuutar miis', description: 'Bar oo habee kombiyuutar miis ah.' },
    zh: { title: '台式电脑', description: '了解并设置台式电脑。' }
  },
  'app-portable': {
    en: { title: 'Laptop computer', description: 'Discover and set up a laptop computer.' },
    es: { title: 'Ordenador portátil', description: 'Descubrir y configurar un ordenador portátil.' },
    pt: { title: 'Computador portátil', description: 'Descobrir e configurar um computador portátil.' },
    ar: { title: 'حاسوب محمول', description: 'التعرف على الحاسوب المحمول وإعداده.' },
    ru: { title: 'Ноутбук', description: 'Знакомство с ноутбуком и его настройка.' },
    uk: { title: 'Ноутбук', description: 'Знайомство з ноутбуком та його налаштування.' },
    tr: { title: 'Dizüstü bilgisayar', description: 'Dizüstü bilgisayarı tanıma ve ayarlama.' },
    fa: { title: 'رایانه لپ‌تاپ', description: 'آشنایی با لپ‌تاپ و تنظیم آن.' },
    sq: { title: 'Kompjuter laptop', description: 'Njihuni dhe konfiguroni një kompjuter laptop.' },
    ti: { title: 'ላፕቶፕ ኮምፒተር', description: 'ላፕቶፕ ኮምፒተር ምፍላጥን ምስራሕን።' },
    so: { title: 'Kombiyuutar laabtop', description: 'Bar oo habee kombiyuutar laabtop ah.' },
    zh: { title: '笔记本电脑', description: '了解并设置笔记本电脑。' }
  },
  'app-chromebook': {
    en: { title: 'Chromebook', description: 'Discover and set up a Chromebook.' },
    es: { title: 'Chromebook', description: 'Descubrir y configurar un Chromebook.' },
    pt: { title: 'Chromebook', description: 'Descobrir e configurar um Chromebook.' },
    ar: { title: 'كروم بوك', description: 'التعرف على جهاز Chromebook وإعداده.' },
    ru: { title: 'Хромбук', description: 'Знакомство с Chromebook и его настройка.' },
    uk: { title: 'Хромбук', description: 'Знайомство з Chromebook та його налаштування.' },
    tr: { title: 'Chromebook', description: 'Chromebook\u2019u tanıma ve ayarlama.' },
    fa: { title: 'کروم‌بوک', description: 'آشنایی با کروم‌بوک و تنظیم آن.' },
    sq: { title: 'Chromebook', description: 'Njihuni dhe konfiguroni një Chromebook.' },
    ti: { title: 'ክሮምቡክ', description: 'ክሮምቡክ ምፍላጥን ምስራሕን።' },
    so: { title: 'Chromebook', description: 'Bar oo habee Chromebook.' },
    zh: { title: 'Chromebook', description: '了解并设置 Chromebook。' }
  },
  'app-windows': {
    en: { title: 'Windows', description: 'Discover and configure Windows settings.' },
    es: { title: 'Windows', description: 'Descubrir y configurar los ajustes de Windows.' },
    pt: { title: 'Windows', description: 'Descobrir e configurar as definições do Windows.' },
    ar: { title: 'ويندوز', description: 'التعرف على إعدادات نظام ويندوز وضبطها.' },
    ru: { title: 'Windows', description: 'Знакомство с настройками Windows.' },
    uk: { title: 'Windows', description: 'Знайомство з налаштуваннями Windows.' },
    tr: { title: 'Windows', description: 'Windows ayarlarını tanıma ve yapılandırma.' },
    fa: { title: 'ویندوز', description: 'آشنایی با تنظیمات ویندوز.' },
    sq: { title: 'Windows', description: 'Njihuni dhe konfiguroni cilësimet e Windows.' },
    ti: { title: 'ዊንዶውስ', description: 'ኣቀማምጣ ዊንዶውስ ምፍላጥን ምስራሕን።' },
    so: { title: 'Windows', description: 'Bar oo habee dejinta Windows.' },
    zh: { title: 'Windows', description: '了解并配置 Windows 设置。' }
  },
  'app-apple': {
    en: { title: 'Apple (macOS)', description: 'Discover and configure the settings of an Apple Mac.' },
    es: { title: 'Apple (macOS)', description: 'Descubrir y configurar los ajustes de un Mac.' },
    pt: { title: 'Apple (macOS)', description: 'Descobrir e configurar as definições de um Mac.' },
    ar: { title: 'أبل (ماك)', description: 'التعرف على إعدادات جهاز ماك من أبل.' },
    ru: { title: 'Apple (macOS)', description: 'Знакомство с настройками Mac.' },
    uk: { title: 'Apple (macOS)', description: 'Знайомство з налаштуваннями Mac.' },
    tr: { title: 'Apple (macOS)', description: 'Bir Mac\u2019in ayarlarını tanıma ve yapılandırma.' },
    fa: { title: 'اپل (مک)', description: 'آشنایی با تنظیمات مک.' },
    sq: { title: 'Apple (macOS)', description: 'Njihuni dhe konfiguroni cilësimet e një Mac.' },
    ti: { title: 'ኣፕል (ማክ)', description: 'ኣቀማምጣ ማክ ምፍላጥን ምስራሕን።' },
    so: { title: 'Apple (macOS)', description: 'Bar oo habee dejinta Mac.' },
    zh: { title: 'Apple (macOS)', description: '了解并配置 Mac 设置。' }
  },
  'app-linux': {
    en: { title: 'Linux', description: 'Discover and configure Linux settings.', whatIsIt: "Linux is an operating system, like Windows or macOS, but it's free and less resource-intensive: it works well even on an older or less powerful computer. There are several versions (Ubuntu, Debian, Linux Mint...), but they all work in a similar way." },
    es: { title: 'Linux', description: 'Descubrir y configurar los ajustes de Linux.', whatIsIt: 'Linux es un sistema operativo, como Windows o macOS, pero es gratuito y consume menos recursos: funciona bien incluso en un ordenador más antiguo o menos potente. Existen varias versiones (Ubuntu, Debian, Linux Mint...), pero todas funcionan de forma parecida.' },
    pt: { title: 'Linux', description: 'Descobrir e configurar as definições do Linux.', whatIsIt: 'O Linux é um sistema operativo, como o Windows ou o macOS, mas é gratuito e consome menos recursos: funciona bem mesmo num computador mais antigo ou menos potente. Existem várias versões (Ubuntu, Debian, Linux Mint...), mas todas funcionam de forma semelhante.' },
    ar: { title: 'لينكس', description: 'التعرف على إعدادات نظام لينكس.', whatIsIt: 'لينكس هو نظام تشغيل، مثل ويندوز أو macOS، لكنه مجاني ويستهلك موارد أقل: يعمل بشكل جيد حتى على حاسوب أقدم أو أقل قوة. توجد عدة إصدارات (Ubuntu، Debian، Linux Mint...)، لكنها جميعاً تعمل بطريقة متشابهة.' },
    ru: { title: 'Linux', description: 'Знакомство с настройками Linux.', whatIsIt: 'Linux — это операционная система, как Windows или macOS, но бесплатная и менее требовательная к ресурсам: она хорошо работает даже на старом или менее мощном компьютере. Существует несколько версий (Ubuntu, Debian, Linux Mint...), но все они работают похожим образом.' },
    uk: { title: 'Linux', description: 'Знайомство з налаштуваннями Linux.', whatIsIt: 'Linux — це операційна система, як Windows або macOS, але безкоштовна і менш вимоглива до ресурсів: вона добре працює навіть на старому або менш потужному комп\u2019ютері. Існує кілька версій (Ubuntu, Debian, Linux Mint...), але всі вони працюють подібним чином.' },
    tr: { title: 'Linux', description: 'Linux ayarlarını tanıma ve yapılandırma.', whatIsIt: "Linux, Windows veya macOS gibi bir işletim sistemidir, ancak ücretsizdir ve daha az kaynak tüketir: daha eski veya daha az güçlü bir bilgisayarda bile iyi çalışır. Birkaç sürümü vardır (Ubuntu, Debian, Linux Mint...), ancak hepsi benzer şekilde çalışır." },
    fa: { title: 'لینوکس', description: 'آشنایی با تنظیمات لینوکس.', whatIsIt: 'لینوکس یک سیستم‌عامل است، مانند ویندوز یا macOS، اما رایگان است و منابع کمتری مصرف می‌کند: حتی روی رایانه قدیمی‌تر یا کم‌قدرت‌تر هم خوب کار می‌کند. نسخه‌های مختلفی وجود دارد (Ubuntu، Debian، Linux Mint...)، اما همه به شکلی مشابه کار می‌کنند.' },
    sq: { title: 'Linux', description: 'Njihuni dhe konfiguroni cilësimet e Linux.', whatIsIt: 'Linux është një sistem operativ, si Windows apo macOS, por është falas dhe përdor më pak burime: funksionon mirë edhe në një kompjuter më të vjetër ose më pak të fuqishëm. Ekzistojnë disa versione (Ubuntu, Debian, Linux Mint...), por të gjitha funksionojnë në mënyrë të ngjashme.' },
    ti: { title: 'ሊኑክስ', description: 'ኣቀማምጣ ሊኑክስ ምፍላጥን ምስራሕን።', whatIsIt: 'ሊኑክስ ልክዕ ከም Windows ወይ macOS ናይ ኦፐረቲንግ ሲስተም እዩ፣ ግን ናጻ እዩ ከምኡውን ውሑድ ጸጋታት ይጥቀም፦ ኣብ ዝሓሸ ወይ ትሑት ሓይሊ ዘለዎ ኮምፒተር እውን ጽቡቕ ይሰርሕ። ብዙሓት ስሪታት ኣለዉ (Ubuntu, Debian, Linux Mint...)፣ ኩሎም ግን ብተመሳሳሊ መንገዲ ይሰርሑ።' },
    so: { title: 'Linux', description: 'Bar oo habee dejinta Linux.', whatIsIt: 'Linux waa nidaam hawlgal, sida Windows ama macOS, laakiin waa bilaash waxaana u baahan kheyraad yar: si fiican ayuu ugu shaqeeyaa xitaa kombiyuutar duq ah ama xoog yar leh. Waxaa jira dhowr nooc (Ubuntu, Debian, Linux Mint...), laakiin dhammaantood si isku mid ah ayay u shaqeeyaan.' },
    zh: { title: 'Linux', description: '了解并配置 Linux 设置。', whatIsIt: 'Linux 是一种操作系统，就像 Windows 或 macOS 一样，但它是免费的，占用资源更少：即使在较旧或性能较弱的电脑上也能良好运行。它有多个版本（Ubuntu、Debian、Linux Mint 等），但它们的基本操作方式都很相似。' }
  },
  'app-tablette-android': {
    en: { title: 'Android tablet', description: 'Discover and configure the settings of an Android tablet.' },
    es: { title: 'Tableta Android', description: 'Descubrir y configurar los ajustes de una tableta Android.' },
    pt: { title: 'Tablet Android', description: 'Descobrir e configurar as definições de um tablet Android.' },
    ar: { title: 'جهاز لوحي أندرويد', description: 'التعرف على إعدادات الجهاز اللوحي بنظام أندرويد.' },
    ru: { title: 'Планшет Android', description: 'Знакомство с настройками планшета Android.' },
    uk: { title: 'Планшет Android', description: 'Знайомство з налаштуваннями планшета Android.' },
    tr: { title: 'Android tablet', description: 'Android tabletin ayarlarını tanıma ve yapılandırma.' },
    fa: { title: 'تبلت اندروید', description: 'آشنایی با تنظیمات تبلت اندروید.' },
    sq: { title: 'Tablet Android', description: 'Njihuni dhe konfiguroni cilësimet e një tableti Android.' },
    ti: { title: 'ታብለት ኣንድሮይድ', description: 'ኣቀማምጣ ታብለት ኣንድሮይድ ምፍላጥን ምስራሕን።' },
    so: { title: 'Tablet Android', description: 'Bar oo habee dejinta tablet Android ah.' },
    zh: { title: 'Android 平板电脑', description: '了解并配置 Android 平板电脑设置。' }
  },
  'app-ipad': {
    en: { title: 'iPad', description: 'Discover and configure the settings of an iPad.' },
    es: { title: 'iPad', description: 'Descubrir y configurar los ajustes de un iPad.' },
    pt: { title: 'iPad', description: 'Descobrir e configurar as definições de um iPad.' },
    ar: { title: 'آيباد', description: 'التعرف على إعدادات جهاز آيباد.' },
    ru: { title: 'iPad', description: 'Знакомство с настройками iPad.' },
    uk: { title: 'iPad', description: 'Знайомство з налаштуваннями iPad.' },
    tr: { title: 'iPad', description: 'iPad\u2019in ayarlarını tanıma ve yapılandırma.' },
    fa: { title: 'آیپد', description: 'آشنایی با تنظیمات آیپد.' },
    sq: { title: 'iPad', description: 'Njihuni dhe konfiguroni cilësimet e një iPad.' },
    ti: { title: 'ኣይፓድ', description: 'ኣቀማምጣ ኣይፓድ ምፍላጥን ምስራሕን።' },
    so: { title: 'iPad', description: 'Bar oo habee dejinta iPad.' },
    zh: { title: 'iPad', description: '了解并配置 iPad 设置。' }
  },
  'app-iphone': {
    en: { title: 'iPhone', description: 'Discover and configure the settings of an iPhone (any version).' },
    es: { title: 'iPhone', description: 'Descubrir y configurar los ajustes de un iPhone (cualquier versión).' },
    pt: { title: 'iPhone', description: 'Descobrir e configurar as definições de um iPhone (qualquer versão).' },
    ar: { title: 'آيفون', description: 'التعرف على إعدادات هاتف آيفون (أي إصدار).' },
    ru: { title: 'iPhone', description: 'Знакомство с настройками iPhone (любая версия).' },
    uk: { title: 'iPhone', description: 'Знайомство з налаштуваннями iPhone (будь-яка версія).' },
    tr: { title: 'iPhone', description: 'iPhone\u2019un (herhangi bir sürüm) ayarlarını tanıma ve yapılandırma.' },
    fa: { title: 'آیفون', description: 'آشنایی با تنظیمات آیفون (هر نسخه).' },
    sq: { title: 'iPhone', description: 'Njihuni dhe konfiguroni cilësimet e një iPhone (çdo version).' },
    ti: { title: 'ኣይፎን', description: 'ኣቀማምጣ ኣይፎን (ዝኾነ ስሪት) ምፍላጥን ምስራሕን።' },
    so: { title: 'iPhone', description: 'Bar oo habee dejinta iPhone (nooc kasta).' },
    zh: { title: 'iPhone', description: '了解并配置 iPhone（任何版本）设置。' }
  },
  'app-android-phone': {
    en: { title: 'Android smartphone', description: 'Discover and configure the settings of an Android smartphone (any version).' },
    es: { title: 'Smartphone Android', description: 'Descubrir y configurar los ajustes de un smartphone Android (cualquier versión).' },
    pt: { title: 'Smartphone Android', description: 'Descobrir e configurar as definições de um smartphone Android (qualquer versão).' },
    ar: { title: 'هاتف أندرويد', description: 'التعرف على إعدادات هاتف أندرويد (أي إصدار).' },
    ru: { title: 'Смартфон Android', description: 'Знакомство с настройками смартфона Android (любая версия).' },
    uk: { title: 'Смартфон Android', description: 'Знайомство з налаштуваннями смартфона Android (будь-яка версія).' },
    tr: { title: 'Android akıllı telefon', description: 'Android telefonun (herhangi bir sürüm) ayarlarını tanıma ve yapılandırma.' },
    fa: { title: 'گوشی اندروید', description: 'آشنایی با تنظیمات گوشی اندروید (هر نسخه).' },
    sq: { title: 'Smartphone Android', description: 'Njihuni dhe konfiguroni cilësimet e një smartphone Android (çdo version).' },
    ti: { title: 'ኣንድሮይድ ስማርትፎን', description: 'ኣቀማምጣ ኣንድሮይድ ስማርትፎን (ዝኾነ ስሪት) ምፍላጥን ምስራሕን።' },
    so: { title: 'Taleefan Android', description: 'Bar oo habee dejinta taleefanka Android (nooc kasta).' },
    zh: { title: 'Android 智能手机', description: '了解并配置 Android 智能手机（任何版本）设置。' }
  },

  'dem-sites-officiels': {
    en: {
      title: 'Official websites', description: 'Learn to recognise official websites and what can be done online.',
      whatIsIt: "In France, many administrative tasks (family, health, work, housing, papers...) are now done online instead of at a counter. Knowing how to recognise an official website saves time and avoids scams.",
      documents: []
    },
    es: { title: 'Sitios web oficiales', description: 'Aprender a reconocer los sitios web oficiales y qué trámites se pueden hacer en línea.' },
    pt: { title: 'Sites oficiais', description: 'Aprender a reconhecer os sites oficiais e quais trâmites podem ser feitos online.' },
    ar: {
      title: 'المواقع الرسمية', description: 'التعرف على المواقع الرسمية ومعرفة الإجراءات التي يمكن إنجازها عبر الإنترنت.',
      whatIsIt: 'في فرنسا، يتم الآن إنجاز الكثير من الإجراءات الإدارية (الأسرة، الصحة، العمل، السكن، الأوراق...) عبر الإنترنت بدلاً من الذهاب إلى المكتب. معرفة كيفية التعرف على موقع رسمي يوفر الوقت ويجنبك الاحتيال.',
      documents: []
    },
    ru: { title: 'Официальные сайты', description: 'Научиться распознавать официальные сайты и узнать, какие процедуры можно выполнить онлайн.' },
    uk: { title: 'Офіційні сайти', description: 'Навчитися розпізнавати офіційні сайти та дізнатися, які процедури можна виконати онлайн.' },
    tr: { title: 'Resmi web siteleri', description: 'Resmi web sitelerini tanımayı ve çevrimiçi neler yapılabileceğini öğrenmek.' },
    fa: { title: 'وب‌سایت‌های رسمی', description: 'یادگیری شناخت وب‌سایت‌های رسمی و اینکه چه کارهایی را می‌توان آنلاین انجام داد.' },
    sq: { title: 'Faqet zyrtare të internetit', description: 'Mësoni të njihni faqet zyrtare të internetit dhe çfarë mund të bëhet online.' },
    ti: { title: 'ወግዓዊ ወብሳይታት', description: 'ወግዓዊ ወብሳይታት ምፍላጥን እንታይ ኣብ ኢንተርነት ክግበር ከምዝከኣል ምፍላጥን።' },
    so: { title: 'Websaydhka rasmiga ah', description: 'Baro sida loo aqoonsado websaydhka rasmiga ah iyo waxa laga sameyn karo internetka.' },
    zh: { title: '官方网站', description: '学习识别官方网站以及可以在线办理的事项。' }
  },
  'dem-caf': {
    en: {
      title: 'CAF (Family Allowance Fund)', description: 'Handle your requests on the CAF website.',
      whatIsIt: "CAF pays money to families and people with low income: housing help, child benefits, activity bonus... If you have children or a modest income, you probably qualify for some help.",
      documents: ['Social Security number', 'Email address', 'Bank details (RIB)', 'Recent proof of address']
    },
    es: { title: 'La CAF (Ayudas familiares)', description: 'Realizar tus trámites en el sitio web de la CAF.' },
    pt: { title: 'A CAF (Auxílios familiares)', description: 'Realizar os seus trâmites no site da CAF.' },
    ar: {
      title: 'صندوق الإعانات العائلية (CAF)', description: 'إنجاز إجراءاتك عبر موقع CAF.',
      whatIsIt: 'يدفع صندوق CAF أموالاً للعائلات والأشخاص ذوي الدخل المحدود: مساعدة السكن، إعانات الأطفال، منحة النشاط... إذا كان لديك أطفال أو دخل محدود، فمن المحتمل أنك تستحق مساعدة.',
      documents: ['رقم الضمان الاجتماعي', 'البريد الإلكتروني', 'كشف الحساب البنكي (RIB)', 'إثبات سكن حديث']
    },
    ru: { title: 'CAF (семейные пособия)', description: 'Оформление документов на сайте CAF.' },
    uk: { title: 'CAF (сімейні допомоги)', description: 'Оформлення документів на сайті CAF.' },
    tr: { title: 'CAF (Aile Yardımları)', description: 'CAF web sitesinde işlemlerinizi yapın.' },
    fa: { title: 'صندوق کمک خانواده (CAF)', description: 'انجام امور اداری در وب‌سایت CAF.' },
    sq: { title: 'CAF (Ndihma familjare)', description: 'Kryeni kërkesat tuaja në faqen e internetit të CAF.' },
    ti: { title: 'CAF (ደገፍ ስድራቤት)', description: 'ጠለባትካ ኣብ ወብሳይት CAF ምፍጻም።' },
    so: { title: 'CAF (Gargaarka qoyska)', description: 'Ka qabo codsiyadaada bogga internetka ee CAF.' },
    zh: { title: '家庭补助金库（CAF）', description: '在 CAF 网站上办理您的申请。' }
  },
  'dem-cpam': {
    en: {
      title: 'CPAM (Health Insurance)', description: 'Handle your requests on ameli.fr (CPAM).',
      whatIsIt: 'CPAM reimburses part of your medical costs (doctor, pharmacy, hospital). It also issues the Carte Vitale, essential to be properly reimbursed. Without it, healthcare costs much more.',
      documents: ['Social Security number', 'ID document', 'Email address']
    },
    es: { title: 'La CPAM (Seguro de salud)', description: 'Realizar tus trámites en ameli.fr (CPAM).' },
    pt: { title: 'A CPAM (Seguro de saúde)', description: 'Realizar os seus trâmites em ameli.fr (CPAM).' },
    ar: {
      title: 'صندوق التأمين الصحي (CPAM)', description: 'إنجاز إجراءاتك عبر موقع ameli.fr.',
      whatIsIt: 'يعيد صندوق CPAM جزءاً من مصاريفك الطبية (الطبيب، الصيدلية، المستشفى). كما يصدر بطاقة Vitale الضرورية للحصول على التعويض. بدونها، ستدفع تكاليف العلاج أعلى بكثير.',
      documents: ['رقم الضمان الاجتماعي', 'وثيقة هوية', 'البريد الإلكتروني']
    },
    ru: { title: 'CPAM (медицинское страхование)', description: 'Оформление документов на сайте ameli.fr (CPAM).' },
    uk: { title: 'CPAM (медичне страхування)', description: 'Оформлення документів на сайті ameli.fr (CPAM).' },
    tr: { title: 'CPAM (Sağlık Sigortası)', description: 'ameli.fr (CPAM) üzerinden işlemlerinizi yapın.' },
    fa: { title: 'صندوق بیمه سلامت (CPAM)', description: 'انجام امور اداری در وب‌سایت ameli.fr.' },
    sq: { title: 'CPAM (Sigurimi Shëndetësor)', description: 'Kryeni kërkesat tuaja në ameli.fr (CPAM).' },
    ti: { title: 'CPAM (ውሕስነት ጥዕና)', description: 'ጠለባትካ ኣብ ameli.fr ምፍጻም።' },
    so: { title: 'CPAM (Caymiska Caafimaadka)', description: 'Ka qabo codsiyadaada ameli.fr (CPAM).' },
    zh: { title: '医疗保险基金（CPAM）', description: '在 ameli.fr（CPAM）网站上办理您的申请。' }
  },
  'dem-carsat': {
    en: {
      title: 'CARSAT (retirement)', description: "Handle your requests on the CARSAT website.",
      whatIsIt: 'CARSAT manages your future retirement: it counts the years and quarters you work. Even if retirement feels far away, every period of declared work counts for later.',
      documents: ['Social Security number', 'Email address', 'Career statement if you have one']
    },
    es: { title: 'La CARSAT (jubilación)', description: 'Realizar tus trámites en el sitio web de la CARSAT.' },
    pt: { title: 'A CARSAT (aposentadoria)', description: 'Realizar os seus trâmites no site da CARSAT.' },
    ar: {
      title: 'صندوق التقاعد (CARSAT)', description: 'إنجاز إجراءاتك عبر موقع CARSAT.',
      whatIsIt: 'يهتم صندوق CARSAT بتقاعدك المستقبلي: فهو يحسب سنوات وأرباع العمل. حتى لو بدا التقاعد بعيداً، فكل فترة عمل مصرح بها تُحتسب لاحقاً.',
      documents: ['رقم الضمان الاجتماعي', 'البريد الإلكتروني', 'كشف المسار المهني إن وجد']
    },
    ru: { title: 'CARSAT (пенсия)', description: 'Оформление документов на сайте CARSAT.' },
    uk: { title: 'CARSAT (пенсія)', description: 'Оформлення документів на сайті CARSAT.' },
    tr: { title: 'CARSAT (Emeklilik)', description: 'CARSAT web sitesinde işlemlerinizi yapın.' },
    fa: { title: 'صندوق بازنشستگی (CARSAT)', description: 'انجام امور اداری در وب‌سایت CARSAT.' },
    sq: { title: 'CARSAT (Pensioni)', description: 'Kryeni kërkesat tuaja në faqen e internetit të CARSAT.' },
    ti: { title: 'CARSAT (ጡረታ)', description: 'ጠለባትካ ኣብ ወብሳይት CARSAT ምፍጻም።' },
    so: { title: 'CARSAT (Hawlgabka)', description: 'Ka qabo codsiyadaada bogga internetka ee CARSAT.' },
    zh: { title: '养老保险机构（CARSAT）', description: '在 CARSAT 网站上办理您的申请。' }
  },
  'dem-lia': {
    en: {
      title: 'LiA (bus and tramway)', description: 'Use the website of the LiA transport network (bus, tramway, funicular in Le Havre).',
      whatIsIt: 'LiA is the name of the bus and tramway network in Le Havre. To get around the city without a car (go to training, work, shopping), it is the main means of transport.',
      documents: ['ID photo', 'Proof of income (for reduced fare)', 'Proof of address']
    },
    es: { title: 'LiA (autobús y tranvía)', description: 'Usar el sitio web de la red de transporte LiA en El Havre.' },
    pt: { title: 'LiA (ônibus e bonde)', description: 'Usar o site da rede de transporte LiA em Le Havre.' },
    ar: {
      title: 'شبكة LiA (الحافلات والترام)', description: 'استخدام موقع شبكة النقل LiA (حافلات، ترام، فونيكولير في لوهافر).',
      whatIsIt: 'LiA هو اسم شبكة الحافلات والترام في لوهافر. للتنقل في المدينة بدون سيارة (للذهاب إلى التدريب أو العمل أو التسوق)، فهي وسيلة النقل الرئيسية.',
      documents: ['صورة شخصية', 'إثبات الدخل (لتذكرة مخفضة)', 'إثبات سكن']
    },
    ru: { title: 'LiA (автобус и трамвай)', description: 'Использование сайта транспортной сети LiA в Гавре.' },
    uk: { title: 'LiA (автобус і трамвай)', description: 'Використання сайту транспортної мережі LiA в Гаврі.' },
    tr: { title: 'LiA (otobüs ve tramvay)', description: "Le Havre'daki LiA ulaşım ağının web sitesini kullanma." },
    fa: { title: 'LiA (اتوبوس و تراموا)', description: 'استفاده از وب‌سایت شبکه حمل‌ونقل LiA در لوهاور.' },
    sq: { title: 'LiA (autobus dhe tramvaj)', description: 'Përdorni faqen e internetit të rrjetit të transportit LiA në Le Havre.' },
    ti: { title: 'LiA (ኣውቶቡስን ትራምን)', description: 'ወብሳይት ትራንስፖርት LiA ኣብ ለ ሓቭር ምጥቃም።' },
    so: { title: 'LiA (baska iyo tareenka)', description: 'Isticmaal bogga internetka ee shabakadda gaadiidka LiA ee Le Havre.' },
    zh: { title: 'LiA（公交和有轨电车）', description: '使用勒阿弗尔 LiA 交通网络网站。' }
  },
  'dem-impots': {
    en: {
      title: 'Taxes', description: 'File your tax return and handle your requests on impots.gouv.fr.',
      whatIsIt: 'In France, almost everyone must declare their income every year to the tax office, even people with little money. It is mandatory, and many other procedures (benefits, housing...) later require a document called "avis d\u2019imposition" (tax notice).',
      documents: ['Tax number (on a previous tax notice)', 'Email address', 'Proof of income for the year']
    },
    es: { title: 'Los impuestos', description: 'Hacer tu declaración y tus trámites en impots.gouv.fr.' },
    pt: { title: 'Os impostos', description: 'Fazer a sua declaração e os seus trâmites em impots.gouv.fr.' },
    ar: {
      title: 'الضرائب', description: 'تقديم إقرارك الضريبي وإنجاز إجراءاتك عبر موقع impots.gouv.fr.',
      whatIsIt: 'في فرنسا، يجب على الجميع تقريباً التصريح بدخلهم كل عام لمصلحة الضرائب، حتى الأشخاص ذوي الدخل المحدود. الأمر إلزامي، وتتطلب إجراءات أخرى كثيرة (الإعانات، السكن...) لاحقاً وثيقة تسمى "الإشعار الضريبي".',
      documents: ['الرقم الضريبي (على إشعار ضريبي سابق)', 'البريد الإلكتروني', 'إثباتات الدخل للسنة']
    },
    ru: { title: 'Налоги', description: 'Подача налоговой декларации на сайте impots.gouv.fr.' },
    uk: { title: 'Податки', description: 'Подання податкової декларації на сайті impots.gouv.fr.' },
    tr: { title: 'Vergiler', description: 'impots.gouv.fr üzerinden vergi beyannamenizi ve işlemlerinizi yapın.' },
    fa: { title: 'مالیات', description: 'تسلیم اظهارنامه مالیاتی در وب‌سایت impots.gouv.fr.' },
    sq: { title: 'Taksat', description: 'Bëni deklaratën tuaj tatimore dhe kërkesat tuaja në impots.gouv.fr.' },
    ti: { title: 'ግብሪ', description: 'ግብሪ ምእታውን ጠለባትካ ኣብ impots.gouv.fr ምፍጻምን።' },
    so: { title: 'Canshuuraha', description: 'Samee sharraxaadda canshuurta iyo codsiyadaada impots.gouv.fr.' },
    zh: { title: '税务', description: '在 impots.gouv.fr 上申报纳税并办理相关事项。' }
  },
  'dem-france-travail': {
    en: {
      title: 'France Travail (employment)', description: 'Register and handle your requests on francetravail.fr.',
      whatIsIt: 'France Travail (formerly Pôle Emploi) helps you find a job and can pay you an allowance if you lose your job. To be supported and access job offers, you need to register.',
      documents: ['ID document', 'Social Security number', 'CV if you have one', 'Email address']
    },
    es: { title: 'France Travail (empleo)', description: 'Inscribirte y realizar tus trámites en francetravail.fr.' },
    pt: { title: 'France Travail (emprego)', description: 'Inscrever-se e realizar os seus trâmites em francetravail.fr.' },
    ar: {
      title: 'فرانس ترافاي (التوظيف)', description: 'التسجيل وإنجاز إجراءاتك عبر موقع francetravail.fr.',
      whatIsIt: 'تساعدك France Travail (المعروفة سابقاً باسم Pôle Emploi) على البحث عن عمل، ويمكنها دفع إعانة إذا فقدت وظيفتك. للحصول على المتابعة والوصول إلى عروض العمل، يجب التسجيل.',
      documents: ['وثيقة هوية', 'رقم الضمان الاجتماعي', 'سيرة ذاتية إن وجدت', 'البريد الإلكتروني']
    },
    ru: { title: 'France Travail (трудоустройство)', description: 'Регистрация и оформление документов на francetravail.fr.' },
    uk: { title: 'France Travail (працевлаштування)', description: 'Реєстрація та оформлення документів на francetravail.fr.' },
    tr: { title: 'France Travail (istihdam)', description: 'francetravail.fr üzerinden kaydolun ve işlemlerinizi yapın.' },
    fa: { title: 'فرانس تراوای (اشتغال)', description: 'ثبت‌نام و انجام امور اداری در وب‌سایت francetravail.fr.' },
    sq: { title: 'France Travail (punësimi)', description: 'Regjistrohuni dhe kryeni kërkesat tuaja në francetravail.fr.' },
    ti: { title: 'France Travail (ስራሕ)', description: 'ምዝገባን ጠለባትካ ኣብ francetravail.fr ምፍጻምን።' },
    so: { title: 'France Travail (shaqada)', description: 'Isdiiwaangeli oo ka qabo codsiyadaada francetravail.fr.' },
    zh: { title: 'France Travail（就业）', description: '在 francetravail.fr 上注册并办理相关事项。' }
  },
  'dem-mdph': {
    en: {
      title: 'MDPH (disability support)', description: 'Submit a request on the MDPH website.',
      whatIsIt: 'MDPH helps people with disabilities: official recognition of disability, financial help, a special card, support. If you or someone close to you has a disability or illness that affects daily life, it can help.',
      documents: ['ID document', 'Medical certificate less than 12 months old', 'Proof of address']
    },
    es: { title: 'La MDPH (discapacidad)', description: 'Presentar una solicitud en el sitio web de la MDPH.' },
    pt: { title: 'A MDPH (deficiência)', description: 'Apresentar um pedido no site da MDPH.' },
    ar: {
      title: 'مكتب دعم ذوي الإعاقة (MDPH)', description: 'تقديم طلب عبر موقع MDPH.',
      whatIsIt: 'يساعد مكتب MDPH الأشخاص ذوي الإعاقة: الاعتراف الرسمي بالإعاقة، مساعدات مالية، بطاقة خاصة، ومرافقة. إذا كنت أنت أو أحد أفراد أسرتك يعاني من إعاقة أو مرض يؤثر على الحياة اليومية، يمكن أن يساعدك هذا المكتب.',
      documents: ['وثيقة هوية', 'شهادة طبية أقل من 12 شهراً', 'إثبات سكن']
    },
    ru: { title: 'MDPH (поддержка инвалидов)', description: 'Подача заявки на сайте MDPH.' },
    uk: { title: 'MDPH (підтримка інвалідів)', description: 'Подання заявки на сайті MDPH.' },
    tr: { title: 'MDPH (engelli desteği)', description: 'MDPH web sitesinde başvuru yapın.' },
    fa: { title: 'MDPH (حمایت از معلولان)', description: 'ارسال درخواست در وب‌سایت MDPH.' },
    sq: { title: 'MDPH (mbështetje për personat me aftësi të kufizuara)', description: 'Paraqisni një kërkesë në faqen e internetit të MDPH.' },
    ti: { title: 'MDPH (ደገፍ ስንኩላት)', description: 'ጠለብ ኣብ ወብሳይት MDPH ምፍጻም።' },
    so: { title: 'MDPH (taageerada naafada)', description: 'Ka qabo codsi bogga internetka ee MDPH.' },
    zh: { title: '残障人士支持机构（MDPH）', description: '在 MDPH 网站上提交申请。' }
  },
  'dem-mee': {
    en: {
      title: 'Job events (Mes Événements Emploi)', description: 'Use the "Mes Événements Emploi" website.',
      whatIsIt: 'This website lists days when companies come to recruit directly, near you. It is a good opportunity to meet employers without a written application.',
      documents: ['Up-to-date CV (paper or digital)', 'Your France Travail ID if you have one']
    },
    es: { title: 'Eventos de empleo', description: 'Usar el sitio web "Mes Événements Emploi".' },
    pt: { title: 'Eventos de emprego', description: 'Usar o site "Mes Événements Emploi".' },
    ar: {
      title: 'فعاليات التوظيف (Mes Événements Emploi)', description: 'استخدام موقع "Mes Événements Emploi".',
      whatIsIt: 'يعرض هذا الموقع الأيام التي تأتي فيها الشركات للتوظيف المباشر بالقرب منك. إنها فرصة جيدة للقاء أصحاب العمل دون تقديم طلب كتابي.',
      documents: ['سيرة ذاتية محدثة (ورقية أو رقمية)', 'رقم التعريف لدى France Travail إن وجد']
    },
    ru: { title: 'Дни трудоустройства', description: 'Использование сайта "Mes Événements Emploi".' },
    uk: { title: 'Дні працевлаштування', description: 'Використання сайту "Mes Événements Emploi".' },
    tr: { title: 'İş etkinlikleri', description: '"Mes Événements Emploi" web sitesini kullanma.' },
    fa: { title: 'رویدادهای شغلی', description: 'استفاده از وب‌سایت "Mes Événements Emploi".' },
    sq: { title: 'Ngjarjet e punësimit', description: 'Përdorni faqen e internetit "Mes Événements Emploi".' },
    ti: { title: 'ናይ ስራሕ ፍጻመታት', description: 'ወብሳይት "Mes Événements Emploi" ምጥቃም።' },
    so: { title: 'Munaasabadaha shaqada', description: 'Isticmaal bogga internetka ee "Mes Événements Emploi".' },
    zh: { title: '招聘活动', description: '使用 "Mes Événements Emploi" 网站。' }
  },
  'dem-logement-social': {
    en: {
      title: 'Social housing', description: 'Apply for social housing online.',
      whatIsIt: 'Social housing (HLM) is housing with lower rent than private housing, reserved for people with modest income. You need to make an official request and often wait, so it is best to apply early.',
      documents: ['ID document', 'Proof of income for the whole household', 'Family record book (livret de famille) if you have one']
    },
    es: { title: 'Vivienda social', description: 'Solicitar una vivienda social en línea.' },
    pt: { title: 'Habitação social', description: 'Solicitar uma habitação social online.' },
    ar: {
      title: 'السكن الاجتماعي', description: 'تقديم طلب سكن اجتماعي عبر الإنترنت.',
      whatIsIt: 'السكن الاجتماعي (HLM) هو سكن بإيجار أقل من السكن الخاص، مخصص للأشخاص ذوي الدخل المحدود. يجب تقديم طلب رسمي وغالباً الانتظار، لذا من الأفضل التقديم مبكراً.',
      documents: ['وثيقة هوية', 'إثباتات دخل جميع أفراد الأسرة', 'دفتر العائلة إن وجد']
    },
    ru: { title: 'Социальное жильё', description: 'Подача заявки на социальное жильё онлайн.' },
    uk: { title: 'Соціальне житло', description: 'Подання заявки на соціальне житло онлайн.' },
    tr: { title: 'Sosyal konut', description: 'Çevrimiçi sosyal konut başvurusu yapın.' },
    fa: { title: 'مسکن اجتماعی', description: 'درخواست مسکن اجتماعی به\u200cصورت آنلاین.' },
    sq: { title: 'Banesa sociale', description: 'Aplikoni për banesë sociale online.' },
    ti: { title: 'ማሕበራዊ መንበሪ', description: 'ማመልከቲ ማሕበራዊ መንበሪ ኣብ ኢንተርነት ምፍጻም።' },
    so: { title: 'Guriyaha bulshada', description: 'Codso guri bulsheed online ah.' },
    zh: { title: '社会住房', description: '在线申请社会住房。' }
  },
  'dem-mobilite': {
    en: {
      title: 'Mobility support', description: 'Discover the Pôle Mobilité and MAD association in Le Havre.',
      whatIsIt: 'Not having transportation is often an obstacle to finding work or training. The Pôle Mobilité in Le Havre helps people in this situation: get a driving licence at reduced cost, repair your car, rent an affordable vehicle.',
      documents: ['Referral letter from an advisor (France Travail, mission locale...)', 'ID document']
    },
    es: { title: 'Ayuda a la movilidad', description: 'Descubrir el Pôle Mobilité y la asociación MAD en El Havre.' },
    pt: { title: 'Ajuda à mobilidade', description: 'Descobrir o Pôle Mobilité e a associação MAD em Le Havre.' },
    ar: {
      title: 'مساعدة التنقل', description: 'التعرف على مركز Pôle Mobilité وجمعية MAD في لوهافر.',
      whatIsIt: 'عدم امتلاك وسيلة نقل غالباً ما يكون عائقاً أمام إيجاد عمل أو تدريب. يساعد مركز Pôle Mobilité في لوهافر الأشخاص في هذا الوضع: الحصول على رخصة قيادة بتكلفة مخفضة، إصلاح سيارتك، استئجار مركبة بسعر معقول.',
      documents: ['رسالة توجيه من مستشار (France Travail، Mission Locale...)', 'وثيقة هوية']
    },
    ru: { title: 'Поддержка мобильности', description: 'Знакомство с Pôle Mobilité и ассоциацией MAD в Гавре.' },
    uk: { title: 'Підтримка мобільності', description: 'Знайомство з Pôle Mobilité та асоціацією MAD у Гаврі.' },
    tr: { title: 'Ulaşım desteği', description: "Le Havre'daki Pôle Mobilité ve MAD derneğini keşfedin." },
    fa: { title: 'حمایت تحرک', description: 'آشنایی با Pôle Mobilité و انجمن MAD در لوهاور.' },
    sq: { title: 'Mbështetje për lëvizshmërinë', description: 'Njihuni me Pôle Mobilité dhe shoqatën MAD në Le Havre.' },
    ti: { title: 'ደገፍ ምንቅስቓስ', description: 'Pôle Mobilité ን ማሕበር MAD ኣብ ለ ሓቭር ምፍላጥ።' },
    so: { title: 'Taageerada dhaqdhaqaaqa', description: 'Bar Pôle Mobilité iyo ururka MAD ee Le Havre.' },
    zh: { title: '出行援助', description: '了解勒阿弗尔的 Pôle Mobilité 和 MAD 协会。' }
  },
  'dem-remuneration-normandie': {
    en: {
      title: 'Normandy Region trainee pay', description: 'Use the payment platform for trainees funded by the Normandy Region.',
      whatIsIt: 'If you are attending training funded by the Normandy Region and are not paid by France Travail, you may be paid during your training. This website lets you track those payments.',
      documents: ['Login details given by your training organisation', 'Bank details (RIB)']
    },
    es: { title: 'Remuneración - Región Normandía', description: 'Usar la plataforma de pago para becarios financiados por la Región Normandía.' },
    pt: { title: 'Remuneração - Região Normandia', description: 'Usar a plataforma de pagamento para estagiários financiados pela Região Normandia.' },
    ar: {
      title: 'أجرة المتدربين - إقليم نورماندي', description: 'استخدام منصة دفع أجور المتدربين الممولة من إقليم نورماندي.',
      whatIsIt: 'إذا كنت تتابع تدريباً ممولاً من إقليم نورماندي ولا تتقاضى إعانة من France Travail، فقد يتم دفع أجر لك خلال التدريب. يتيح لك هذا الموقع متابعة هذه المدفوعات.',
      documents: ['بيانات الدخول المرسلة من جهة التدريب', 'كشف الحساب البنكي (RIB)']
    },
    ru: { title: 'Оплата стажёрам региона Нормандия', description: 'Использование платформы выплат для стажёров, финансируемых регионом Нормандия.' },
    uk: { title: 'Оплата стажерам регіону Нормандія', description: 'Використання платформи виплат для стажерів, які фінансуються регіоном Нормандія.' },
    tr: { title: 'Normandiya Bölgesi kursiyer ücreti', description: 'Normandiya Bölgesi tarafından finanse edilen kursiyerler için ödeme platformunu kullanın.' },
    fa: { title: 'دستمزد کارآموزان منطقه نورماندی', description: 'استفاده از پلتفرم پرداخت برای کارآموزان تحت حمایت مالی منطقه نورماندی.' },
    sq: { title: 'Paga e kursantëve të Rajonit Normandi', description: 'Përdorni platformën e pagesave për kursantët e financuar nga Rajoni Normandi.' },
    ti: { title: 'ክፍሊት ተሳተፍቲ - ዞባ ኖርማንዲ', description: 'መድረኽ ክፍሊት ንተሳተፍቲ ብዞባ ኖርማንዲ ዝድገፉ ምጥቃም።' },
    so: { title: 'Mushaharka tababarayaasha - Gobolka Normandy', description: 'Isticmaal goobta lacag-bixinta ee tababarayaasha uu maalgeliyo Gobolka Normandy.' },
    zh: { title: '诺曼底大区学员薪酬', description: '使用诺曼底大区资助学员的支付平台。' }
  },
  'dem-ecole': {
    en: {
      title: 'School, canteen, after-school care', description: 'Register and renew registration for school canteen, after-school care and holiday clubs (City of Le Havre).',
      whatIsIt: "If you have children at school in Le Havre, the canteen and before/after school care are not automatic: you must register your child every year on the city's website, otherwise they won't be able to eat at the canteen or be looked after.",
      documents: ['CAF quotient certificate less than 2 months old', 'Email address', 'Family record book']
    },
    es: { title: 'Escuela, comedor, actividades extraescolares', description: 'Inscribir y renovar la inscripción de los hijos al comedor, actividades extraescolares y centros de ocio (Ciudad de El Havre).' },
    pt: { title: 'Escola, cantina, atividades extracurriculares', description: 'Inscrever e renovar a inscrição dos filhos na cantina, atividades extracurriculares e centros de lazer (Cidade de Le Havre).' },
    ar: {
      title: 'المدرسة، المطعم المدرسي، الحضانة بعد الدوام', description: 'تسجيل وتجديد تسجيل الأطفال في المطعم المدرسي والحضانة بعد الدوام ومراكز الترفيه (مدينة لوهافر).',
      whatIsIt: 'إذا كان لديك أطفال يدرسون في لوهافر، فإن المطعم المدرسي والحضانة قبل/بعد الدوام ليست تلقائية: يجب عليك تسجيل طفلك كل عام على موقع المدينة، وإلا فلن يتمكن من تناول الطعام في المطعم أو الاستفادة من الحضانة.',
      documents: ['شهادة معامل CAF أقل من شهرين', 'البريد الإلكتروني', 'دفتر العائلة']
    },
    ru: { title: 'Школа, столовая, продлёнка', description: 'Регистрация и продление регистрации в школьной столовой, продлёнке и центрах досуга (город Гавр).' },
    uk: { title: 'Школа, їдальня, продовжений день', description: 'Реєстрація та продовження реєстрації у шкільній їдальні, групі продовженого дня та центрах дозвілля (місто Гавр).' },
    tr: { title: 'Okul, yemekhane, okul sonrası bakım', description: "Okul kantini, okul öncesi/sonrası bakım ve tatil kulüpleri için kayıt yaptırın ve yenileyin (Le Havre Şehri)." },
    fa: { title: 'مدرسه، سلف\u200cسرویس، مراقبت بعد از مدرسه', description: 'ثبت\u200cنام و تمدید ثبت\u200cنام سلف\u200cسرویس مدرسه، مراقبت قبل/بعد از مدرسه (شهرداری لوهاور).' },
    sq: { title: 'Shkolla, mensa, kujdesi pas shkollës', description: 'Regjistroni dhe rinovoni regjistrimin për mensën shkollore, kujdesin pas shkollës dhe klubet e pushimeve (Qyteti i Le Havre).' },
    ti: { title: 'ቤት ትምህርቲ፣ ካንቲነ፣ ድሕሪ ትምህርቲ ክንክን', description: 'ምዝገባን ምሕዳስን ካንቲነ ቤት ትምህርትን ድሕሪ ትምህርቲ ክንክንን (ከተማ ለ ሓቭር)።' },
    so: { title: 'Dugsiga, makhaayadda, daryeelka dugsiga ka dib', description: 'Diiwaangeli oo cusboonaysii diiwaangelinta makhaayadda dugsiga iyo daryeelka dugsiga ka dib (Magaalada Le Havre).' },
    zh: { title: '学校、食堂、课后托管', description: '注册并续订学校食堂、课后托管和假期俱乐部（勒阿弗尔市）。' }
  },
  'dem-titre-sejour': {
    en: {
      title: 'Residence permit', description: 'Apply for or renew a residence permit when arriving in Le Havre.',
      whatIsIt: "The residence permit is the document that allows a foreign person to live legally in France. You need to apply when you arrive and renew it before its end date, otherwise you risk being in an irregular situation — it is often the very first thing to do when arriving.",
      documents: ['Passport', 'Proof of address', 'Recent ID photo', 'Email address']
    },
    es: { title: 'Permiso de residencia', description: 'Solicitar o renovar un permiso de residencia al llegar a El Havre.' },
    pt: { title: 'Autorização de residência', description: 'Solicitar ou renovar uma autorização de residência ao chegar a Le Havre.' },
    ar: {
      title: 'تصريح الإقامة', description: 'إنشاء وتجديد تصريح الإقامة عند الوصول إلى لوهافر.',
      whatIsIt: 'تصريح الإقامة هو الوثيقة التي تسمح لشخص أجنبي بالعيش بشكل قانوني في فرنسا. يجب طلبه عند الوصول وتجديده قبل تاريخ انتهائه، وإلا فقد تجد نفسك في وضع غير قانوني — وغالباً ما يكون هذا أول إجراء يجب القيام به عند الوصول.',
      documents: ['جواز السفر', 'إثبات سكن', 'صورة شخصية حديثة', 'البريد الإلكتروني']
    },
    ru: { title: 'Вид на жительство', description: 'Оформление или продление вида на жительство по прибытии в Гавр.' },
    uk: { title: 'Дозвіл на проживання', description: 'Оформлення або продовження дозволу на проживання після прибуття в Гавр.' },
    tr: { title: 'Oturma izni', description: "Le Havre'a vardığınızda oturma izni başvurusu yapın veya yenileyin." },
    fa: { title: 'اجازه اقامت', description: 'درخواست یا تمدید اجازه اقامت هنگام ورود به لوهاور.' },
    sq: { title: 'Leja e qëndrimit', description: 'Aplikoni ose rinovoni lejen e qëndrimit kur mbërrini në Le Havre.' },
    ti: { title: 'ፍቓድ መንበሪ', description: 'ፍቓድ መንበሪ ኣብ ምብጻሕካ ናብ ለ ሓቭር ምምልካትን ምሕዳስን።' },
    so: { title: 'Ogolaanshaha degenaanshaha', description: 'Codso ama cusboonaysii ogolaanshaha degenaanshaha marka aad timaado Le Havre.' },
    zh: { title: '居留证', description: '抵达勒阿弗尔时申请或续办居留证。' }
  },
  'dem-casier-judiciaire': {
    en: {
      title: 'Criminal record', description: 'Request your criminal record extract online.',
      whatIsIt: 'The criminal record is a document that proves you have no conviction (or lists any convictions). Many employers or administrations ask for it, especially for certain jobs (childcare, security...).',
      documents: ['Exact first name, last name, date and place of birth (as on your ID)']
    },
    es: { title: 'Antecedentes penales', description: 'Solicitar tu extracto de antecedentes penales en línea.' },
    pt: { title: 'Registo criminal', description: 'Solicitar o seu extrato de registo criminal online.' },
    ar: {
      title: 'السجل الجنائي', description: 'طلب مستخرج السجل الجنائي عبر الإنترنت.',
      whatIsIt: 'السجل الجنائي وثيقة تثبت عدم وجود إدانات بحقك (أو تسرد الإدانات إن وجدت). يطلبه العديد من أصحاب العمل أو الإدارات، خاصة لبعض الوظائف (رعاية الأطفال، الأمن...).',
      documents: ['الاسم الأول واسم العائلة وتاريخ ومكان الميلاد بدقة (كما في وثيقة الهوية)']
    },
    ru: { title: 'Справка о судимости', description: 'Запрос выписки из судимости онлайн.' },
    uk: { title: 'Довідка про судимість', description: 'Запит витягу про судимість онлайн.' },
    tr: { title: 'Adli sicil kaydı', description: 'Adli sicil kaydınızı çevrimiçi olarak talep edin.' },
    fa: { title: 'سوءپیشینه', description: 'درخواست گواهی عدم سوءپیشینه به\u200cصورت آنلاین.' },
    sq: { title: 'Dëshmia penale', description: 'Kërkoni ekstraktin tuaj të dëshmisë penale online.' },
    ti: { title: 'ገበናዊ መዝገብ', description: 'መስተንፈሲ ገበናዊ መዝገብካ ኣብ ኢንተርነት ምጥያቕ።' },
    so: { title: 'Diiwaanka dembiyada', description: 'Codso soo saarista diiwaanka dembiyadaada online.' },
    zh: { title: '犯罪记录', description: '在线申请您的犯罪记录摘录。' }
  },
  'dem-carte-identite': {
    en: {
      title: 'ID card', description: 'Book an appointment to create or renew your ID card (City of Le Havre and government website).',
      whatIsIt: 'The ID card proves who you are in France. It is different from the residence permit: it mainly concerns people of French nationality. Many administrative procedures will ask you for a valid ID.',
      documents: ['Recent ID photo meeting standards', 'Proof of address', 'Old ID card if you have one']
    },
    es: { title: 'Documento de identidad', description: 'Reservar una cita para crear o renovar tu documento de identidad (Ciudad de El Havre y sitio del gobierno).' },
    pt: { title: 'Cartão de identidade', description: 'Marcar uma consulta para criar ou renovar o seu cartão de identidade (Cidade de Le Havre e site do governo).' },
    ar: {
      title: 'بطاقة الهوية', description: 'حجز موعد لإنشاء أو تجديد بطاقة الهوية (مدينة لوهافر والموقع الحكومي).',
      whatIsIt: 'بطاقة الهوية تثبت من أنت في فرنسا. وهي مختلفة عن تصريح الإقامة: تخص بشكل أساسي الأشخاص من الجنسية الفرنسية. ستطلب منك العديد من الإجراءات الإدارية وثيقة هوية سارية المفعول.',
      documents: ['صورة شخصية حديثة مطابقة للمعايير', 'إثبات سكن', 'بطاقة الهوية القديمة إن وجدت']
    },
    ru: { title: 'Удостоверение личности', description: 'Запись на приём для оформления или продления удостоверения личности (город Гавр и государственный сайт).' },
    uk: { title: 'Посвідчення особи', description: 'Запис на прийом для оформлення або продовження посвідчення особи (місто Гавр та державний сайт).' },
    tr: { title: 'Kimlik kartı', description: "Kimlik kartınızı oluşturmak veya yenilemek için randevu alın (Le Havre Şehri ve devlet sitesi)." },
    fa: { title: 'کارت شناسایی', description: 'رزرو وقت برای صدور یا تمدید کارت شناسایی (شهرداری لوهاور و وب\u200cسایت دولتی).' },
    sq: { title: 'Karta e identitetit', description: 'Rezervoni një takim për të krijuar ose rinovuar kartën tuaj të identitetit (Qyteti i Le Havre dhe faqja qeveritare).' },
    ti: { title: 'ካርድ መንነት', description: 'ቆጸራ ንምፍጣር ወይ ምሕዳስ ካርድ መንነትካ ምሓዝ (ከተማ ለ ሓቭርን ናይ መንግስቲ ወብሳይትን)።' },
    so: { title: 'Kaadhka aqoonsiga', description: 'Ballan ka qabo si aad u samayso ama cusboonaysiiso kaadhkaaga aqoonsiga (Magaalada Le Havre iyo bogga dawladda).' },
    zh: { title: '身份证', description: '预约办理或续办身份证（勒阿弗尔市和政府网站）。' }
  }
}

export function translateModule(module, lang) {
  if (!module) return module
  if (lang === 'fr') return { ...module, titleFr: null, descriptionFr: null }
  const tr = MODULE_TRANSLATIONS[module.id]?.[lang] || EXTRA_MODULE_TRANSLATIONS[module.id]?.[lang]
  if (!tr) return { ...module, titleFr: null, descriptionFr: null }
  return {
    ...module,
    title: tr.title || module.title,
    description: tr.description || module.description,
    whatIsIt: tr.whatIsIt ?? module.whatIsIt,
    documents: tr.documents ?? module.documents,
    // Texte français original, pour l'affichage bilingue pédagogique (sous-titre).
    titleFr: module.title,
    descriptionFr: module.description,
    whatIsItFr: module.whatIsIt,
    documentsFr: module.documents,
    // Les étapes détaillées restent en français : un indicateur est affiché dans l'UI.
    stepsNotTranslated: true
  }
}

// Fusion des langues ajoutées ultérieurement (voir NEW_LANGUAGES_BATCH ci-dessous),
// sans toucher aux appels m() existants — plus sûr pour 61 modules déjà en place.
const NEW_LANGUAGES_BATCH = {
  'app-fixe': {
    ur: { title: 'ڈیسک ٹاپ کمپیوٹر', description: 'ڈیسک ٹاپ کمپیوٹر کو دریافت اور ترتیب دیں۔' },
    ps: { title: 'ډیسک ټاپ کمپیوټر', description: 'ډیسک ټاپ کمپیوټر کشف او تنظیم کړئ.' },
    bn: { title: 'ডেস্কটপ কম্পিউটার', description: 'ডেস্কটপ কম্পিউটার আবিষ্কার এবং কনফিগার করুন।' },
    hi: { title: 'डेस्कटॉप कंप्यूटर', description: 'डेस्कटॉप कंप्यूटर की खोज करें और उसे कॉन्फ़िगर करें।' },
  },
  'app-portable': {
    ur: { title: 'لیپ ٹاپ کمپیوٹر', description: 'لیپ ٹاپ کمپیوٹر کو دریافت اور ترتیب دیں۔' },
    ps: { title: 'لپ ټاپ کمپیوټر', description: 'لپ ټاپ کمپیوټر کشف او تنظیم کړئ.' },
    bn: { title: 'ল্যাপটপ কম্পিউটার', description: 'ল্যাপটপ কম্পিউটার আবিষ্কার এবং কনফিগার করুন।' },
    hi: { title: 'लैपटॉप कंप्यूटर', description: 'लैपटॉप कंप्यूटर की खोज करें और उसे कॉन्फ़िगर करें।' },
  },
  'app-chromebook': {
    ur: { title: 'کروم بک', description: 'کروم بک کو دریافت اور ترتیب دیں۔' },
    ps: { title: 'کروم بک', description: 'کروم بک کشف او تنظیم کړئ.' },
    bn: { title: 'ক্রোমবুক', description: 'ক্রোমবুক আবিষ্কার এবং কনফিগার করুন।' },
    hi: { title: 'क्रोमबुक', description: 'क्रोमबुक की खोज करें और उसे कॉन्फ़िगर करें।' },
  },
  'app-windows': {
    ur: { title: 'ونڈوز', description: 'ونڈوز کی ترتیبات دریافت اور ترتیب دیں۔' },
    ps: { title: 'ویندوز', description: 'د ویندوز تنظیمات کشف او تنظیم کړئ.' },
    bn: { title: 'উইন্ডোজ', description: 'উইন্ডোজের সেটিংস আবিষ্কার এবং কনফিগার করুন।' },
    hi: { title: 'विंडोज़', description: 'विंडोज़ की सेटिंग्स की खोज करें और उन्हें कॉन्फ़िगर करें।' },
  },
  'app-apple': {
    ur: { title: 'ایپل (macOS)', description: 'ایپل میک کی ترتیبات دریافت اور ترتیب دیں۔' },
    ps: { title: 'ایپل (macOS)', description: 'د ایپل مک تنظیمات کشف او تنظیم کړئ.' },
    bn: { title: 'অ্যাপল (macOS)', description: 'অ্যাপল ম্যাকের সেটিংস আবিষ্কার এবং কনফিগার করুন।' },
    hi: { title: 'एप्पल (macOS)', description: 'एप्पल मैक की सेटिंग्स की खोज करें और उन्हें कॉन्फ़िगर करें।' },
  },
  'app-linux': {
    ur: { title: 'لینکس', description: 'لینکس کی ترتیبات دریافت اور ترتیب دیں۔' },
    ps: { title: 'لینکس', description: 'د لینکس تنظیمات کشف او تنظیم کړئ.' },
    bn: { title: 'লিনাক্স', description: 'লিনাক্সের সেটিংস আবিষ্কার এবং কনফিগার করুন।' },
    hi: { title: 'लिनक्स', description: 'लिनक्स की सेटिंग्स की खोज करें और उन्हें कॉन्फ़िगर करें।' },
  },
  'app-tablette-android': {
    ur: { title: 'اینڈرائیڈ ٹیبلٹ', description: 'اینڈرائیڈ ٹیبلٹ کی ترتیبات دریافت اور ترتیب دیں۔' },
    ps: { title: 'اینډرایډ ټابلیټ', description: 'د اینډرایډ ټابلیټ تنظیمات کشف او تنظیم کړئ.' },
    bn: { title: 'অ্যান্ড্রয়েড ট্যাবলেট', description: 'অ্যান্ড্রয়েড ট্যাবলেটের সেটিংস আবিষ্কার এবং কনফিগার করুন।' },
    hi: { title: 'एंड्रॉइड टैबलेट', description: 'एंड्रॉइड टैबलेट की सेटिंग्स की खोज करें और उन्हें कॉन्फ़िगर करें।' },
  },
  'app-ipad': {
    ur: { title: 'آئی پیڈ', description: 'آئی پیڈ کی ترتیبات دریافت اور ترتیب دیں۔' },
    ps: { title: 'آی پیډ', description: 'د آی پیډ تنظیمات کشف او تنظیم کړئ.' },
    bn: { title: 'আইপ্যাড', description: 'আইপ্যাডের সেটিংস আবিষ্কার এবং কনফিগার করুন।' },
    hi: { title: 'आईपैड', description: 'आईपैड की सेटिंग्स की खोज करें और उन्हें कॉन्फ़िगर करें।' },
  },
  'app-iphone': {
    ur: { title: 'آئی فون', description: 'آئی فون کی ترتیبات دریافت اور ترتیب دیں (تمام ورژن)۔' },
    ps: { title: 'آی فون', description: 'د آی فون تنظیمات کشف او تنظیم کړئ (ټول نسخې).' },
    bn: { title: 'আইফোন', description: 'আইফোনের সেটিংস আবিষ্কার এবং কনফিগার করুন (সব সংস্করণ)।' },
    hi: { title: 'आईफोन', description: 'आईफोन की सेटिंग्स की खोज करें और उन्हें कॉन्फ़िगर करें (सभी संस्करण)।' },
  },
  'app-android-phone': {
    ur: { title: 'اینڈرائیڈ اسمارٹ فون', description: 'اینڈرائیڈ اسمارٹ فون کی ترتیبات دریافت اور ترتیب دیں (تمام ورژن)۔' },
    ps: { title: 'اینډرایډ سمارټ فون', description: 'د اینډرایډ سمارټ فون تنظیمات کشف او تنظیم کړئ (ټول نسخې).' },
    bn: { title: 'অ্যান্ড্রয়েড স্মার্টফোন', description: 'অ্যান্ড্রয়েড স্মার্টফোনের সেটিংস আবিষ্কার এবং কনফিগার করুন (সব সংস্করণ)।' },
    hi: { title: 'एंड्रॉइड स्मार्टफोन', description: 'एंड्रॉइड स्मार्टफोन की सेटिंग्स की खोज करें और उन्हें कॉन्फ़िगर करें (सभी संस्करण)।' },
  },
  'dem-sites-officiels': {
    ur: { title: 'سرکاری ویب سائٹس', description: 'سرکاری ویب سائٹس دریافت کریں اور جانیں کہ کون سے کام آن لائن کیے جا سکتے ہیں۔' },
    ps: { title: 'رسمي ویب پاڼې', description: 'رسمي ویب پاڼې کشف کړئ او پوه شئ چې کوم کارونه آنلاین کیدی شي.' },
    bn: { title: 'সরকারি ওয়েবসাইট', description: 'সরকারি ওয়েবসাইট আবিষ্কার করুন এবং জানুন কোন কাজগুলি অনলাইনে করা যায়।' },
    hi: { title: 'आधिकारिक वेबसाइटें', description: 'आधिकारिक वेबसाइटों की खोज करें और जानें कि कौन से काम ऑनलाइन किए जा सकते हैं।' },
  },
  'dem-caf': {
    ur: { title: 'CAF (خاندانی الاؤنس)', description: 'CAF کی ویب سائٹ پر اپنے کام کریں۔' },
    ps: { title: 'CAF (کورنۍ لګښتونه)', description: 'د CAF په ویب پاڼه خپل چارې ترسره کړئ.' },
    bn: { title: 'CAF (পারিবারিক ভাতা)', description: 'CAF-এর ওয়েবসাইটে আপনার কাজ করুন।' },
    hi: { title: 'CAF (पारिवारिक भत्ता)', description: 'CAF की वेबसाइट पर अपने काम करें।' },
  },
  'dem-cpam': {
    ur: { title: 'CPAM (صحت بیمہ)', description: 'ameli.fr پر اپنے کام کریں (CPAM)۔' },
    ps: { title: 'CPAM (روغتیايي بیمه)', description: 'په ameli.fr خپل چارې ترسره کړئ (CPAM).' },
    bn: { title: 'CPAM (স্বাস্থ্য বীমা)', description: 'ameli.fr-এ আপনার কাজ করুন (CPAM)।' },
    hi: { title: 'CPAM (स्वास्थ्य बीमा)', description: 'ameli.fr पर अपने काम करें (CPAM)।' },
  },
  'dem-carsat': {
    ur: { title: 'CARSAT (پنشن)', description: 'CARSAT کی ویب سائٹ پر اپنے کام کریں۔' },
    ps: { title: 'CARSAT (تقاعد)', description: 'د CARSAT په ویب پاڼه خپل چارې ترسره کړئ.' },
    bn: { title: 'CARSAT (পেনশন)', description: 'CARSAT-এর ওয়েবসাইটে আপনার কাজ করুন।' },
    hi: { title: 'CARSAT (पेंशन)', description: 'CARSAT की वेबसाइट पर अपने काम करें।' },
  },
  'dem-lia': {
    ur: { title: 'LiA (بس اور ٹرام)', description: 'لی ہاور کے ٹرانسپورٹ نیٹ ورک LiA کی ویب سائٹ استعمال کریں اور یکجہتی نرخوں کے بارے میں جانیں۔' },
    ps: { title: 'LiA (بس او ټرام)', description: 'د لی هاور د ترانسپورت شبکې LiA ویب پاڼه وکاروئ او د ملاتړ نرخونه وپیژنئ.' },
    bn: { title: 'LiA (বাস ও ট্রাম)', description: 'লি হাভরের পরিবহন নেটওয়ার্ক LiA-এর ওয়েবসাইট ব্যবহার করুন এবং সংহতি হারের বিষয়ে জানুন।' },
    hi: { title: 'LiA (बस और ट्राम)', description: 'ले हावर के परिवहन नेटवर्क LiA की वेबसाइट का उपयोग करें और एकजुटता दरों के बारे में जानें।' },
  },
  'dem-impots': {
    ur: { title: 'ٹیکس', description: 'impots.gouv.fr پر اپنا اعلامیہ اور کام کریں۔' },
    ps: { title: 'مالیات', description: 'په impots.gouv.fr خپل اعلامیه او چارې ترسره کړئ.' },
    bn: { title: 'কর', description: 'impots.gouv.fr-এ আপনার ঘোষণা ও কাজ করুন।' },
    hi: { title: 'कर', description: 'impots.gouv.fr पर अपनी घोषणा और काम करें।' },
  },
  'dem-france-travail': {
    ur: { title: 'France Travail', description: 'francetravail.fr پر رجسٹر ہوں اور اپنے کام کریں۔' },
    ps: { title: 'France Travail', description: 'په francetravail.fr راجستر شئ او خپل چارې ترسره کړئ.' },
    bn: { title: 'France Travail', description: 'francetravail.fr-এ নিবন্ধন করুন এবং আপনার কাজ করুন।' },
    hi: { title: 'France Travail', description: 'francetravail.fr पर पंजीकरण करें और अपने काम करें।' },
  },
  'dem-mdph': {
    ur: { title: 'MDPH', description: 'MDPH کی ویب سائٹ پر درخواست دیں۔' },
    ps: { title: 'MDPH', description: 'د MDPH په ویب پاڼه غوښتنه وکړئ.' },
    bn: { title: 'MDPH', description: 'MDPH-এর ওয়েবসাইটে আবেদন করুন।' },
    hi: { title: 'MDPH', description: 'MDPH की वेबसाइट पर आवेदन करें।' },
  },
  'dem-mee': {
    ur: { title: 'میرے روزگار کے واقعات', description: 'Mes Événements Emploi ویب سائٹ استعمال کریں۔' },
    ps: { title: 'زما د دندې پیښې', description: 'Mes Événements Emploi ویب پاڼه وکاروئ.' },
    bn: { title: 'আমার চাকরির ইভেন্টগুলি', description: 'Mes Événements Emploi ওয়েবসাইট ব্যবহার করুন।' },
    hi: { title: 'मेरे रोजगार कार्यक्रम', description: 'Mes Événements Emploi वेबसाइट का उपयोग करें।' },
  },
  'dem-logement-social': {
    ur: { title: 'سماجی رہائش', description: 'آن لائن سماجی رہائش کی درخواست دیں۔' },
    ps: { title: 'ټولنیز کور', description: 'آنلاین د ټولنیز کور غوښتنه وکړئ.' },
    bn: { title: 'সামাজিক আবাসন', description: 'অনলাইনে সামাজিক আবাসনের জন্য আবেদন করুন।' },
    hi: { title: 'सामाजिक आवास', description: 'ऑनलाइन सामाजिक आवास के लिए आवेदन करें।' },
  },
  'dem-mobilite': {
    ur: { title: 'نقل و حرکت میں مدد', description: 'لی ہاور میں Pôle Mobilité اور MAD ایسوسی ایشن دریافت کریں۔' },
    ps: { title: 'د تحرک مرسته', description: 'په لی هاور کې Pôle Mobilité او MAD ټولنه کشف کړئ.' },
    bn: { title: 'গতিশীলতা সহায়তা', description: 'লি হাভরে Pôle Mobilité এবং MAD সংগঠন আবিষ্কার করুন।' },
    hi: { title: 'गतिशीलता सहायता', description: 'ले हावर में Pôle Mobilité और MAD संगठन की खोज करें।' },
  },
  'dem-remuneration-normandie': {
    ur: { title: 'معاوضہ - نارمنڈی خطہ', description: 'نارمنڈی خطے کے تربیت یافتہ افراد کی معاوضے کی ویب سائٹ استعمال کریں۔' },
    ps: { title: 'معاش - نورماندي سیمه', description: 'د نورماندي سیمې د زده کوونکو د معاش ویب پاڼه وکاروئ.' },
    bn: { title: 'পারিশ্রমিক - নরমান্ডি অঞ্চল', description: 'নরমান্ডি অঞ্চলের প্রশিক্ষণার্থীদের পারিশ্রমিক ওয়েবসাইট ব্যবহার করুন।' },
    hi: { title: 'पारिश्रमिक - नॉर्मंडी क्षेत्र', description: 'नॉर्मंडी क्षेत्र के प्रशिक्षुओं की पारिश्रमिक वेबसाइट का उपयोग करें।' },
  },
  'dem-ecole': {
    ur: { title: 'اسکول، کینٹین، بعد از اسکول', description: 'اپنے بچوں کو اسکول، کینٹین، بعد از اسکول اور تفریحی مرکز میں داخل کریں (لی ہاور شہر)۔' },
    ps: { title: 'ښوونځی، کانتین، له ښوونځي وروسته', description: 'خپل ماشومان ښوونځي، کانتین، له ښوونځي وروسته او تفریحي مرکز کې ثبت کړئ (د لی هاور ښار).' },
    bn: { title: 'স্কুল, ক্যান্টিন, স্কুল-পরবর্তী', description: 'আপনার সন্তানদের স্কুল, ক্যান্টিন, স্কুল-পরবর্তী এবং অবসর কেন্দ্রে ভর্তি করুন (লি হাভর শহর)।' },
    hi: { title: 'स्कूल, कैंटीन, स्कूल के बाद', description: 'अपने बच्चों को स्कूल, कैंटीन, स्कूल के बाद और अवकाश केंद्र में दाखिला दें (ले हावर शहर)।' },
  },
  'dem-titre-sejour': {
    ur: { title: 'قیام کا اجازت نامہ', description: 'لی ہاور پہنچنے پر قیام کا اجازت نامہ بنائیں اور تجدید کریں۔' },
    ps: { title: 'د اوسیدو اجازه', description: 'د لی هاور ته د رسیدو پر مهال د اوسیدو اجازه جوړه او تجدید کړئ.' },
    bn: { title: 'বসবাসের অনুমতি', description: 'লি হাভরে পৌঁছানোর পর বসবাসের অনুমতি তৈরি এবং নবায়ন করুন।' },
    hi: { title: 'निवास परमिट', description: 'ले हावर पहुंचने पर निवास परमिट बनाएं और नवीनीकृत करें।' },
  },
  'dem-casier-judiciaire': {
    ur: { title: 'عدالتی ریکارڈ', description: 'اپنا عدالتی ریکارڈ آن لائن درخواست دیں۔' },
    ps: { title: 'عدلي سابقه', description: 'خپله عدلي سابقه آنلاین وغواړئ.' },
    bn: { title: 'অপরাধ রেকর্ড', description: 'অনলাইনে আপনার অপরাধ রেকর্ডের নির্যাস আবেদন করুন।' },
    hi: { title: 'आपराधिक रिकॉर्ड', description: 'ऑनलाइन अपने आपराधिक रिकॉर्ड का उद्धरण मांगें।' },
  },
  'dem-carte-identite': {
    ur: { title: 'شناختی کارڈ', description: 'شناختی کارڈ بنانے یا تجدید کرنے کے لیے اپائنٹمنٹ لیں۔' },
    ps: { title: 'پیژندنیز کارت', description: 'د پیژندنیز کارت جوړولو یا تجدید لپاره ملاقات ونیسئ.' },
    bn: { title: 'পরিচয়পত্র', description: 'পরিচয়পত্র তৈরি বা নবায়নের জন্য অ্যাপয়েন্টমেন্ট নিন।' },
    hi: { title: 'पहचान पत्र', description: 'पहचान पत्र बनाने या नवीनीकृत करने के लिए अपॉइंटमेंट लें।' },
  },
}
for (const id in NEW_LANGUAGES_BATCH) {
  MODULE_TRANSLATIONS[id] = { ...MODULE_TRANSLATIONS[id], ...NEW_LANGUAGES_BATCH[id] }
}


const NEW_LANGUAGES_BATCH2 = {
  'app-fixe': {
    vi: { title: 'Máy tính để bàn', description: 'Khám phá và cấu hình máy tính để bàn.' },
    ro: { title: 'Calculator de birou', description: 'Descoperă și configurează un calculator de birou.' },
    pl: { title: 'Komputer stacjonarny', description: 'Odkryj i skonfiguruj komputer stacjonarny.' },
    ku: { title: 'Komputera sermîzê', description: 'Komputera sermîzê nas bike û saz bike.' },
    sw: { title: 'Kompyuta ya mezani', description: 'Gundua na sanidi kompyuta ya mezani.' },
    wo: { title: 'Ordinatër bu fi taxaw', description: 'Xam ordinatër bu fi taxaw te defar ko.' },
    ka: { title: 'სტაციონარული კომპიუტერი', description: 'გაეცანით და დააკონფიგურირეთ სტაციონარული კომპიუტერი.' },
    hy: { title: 'Դեսկտոպ համակարգիչ', description: 'Բացահայտեք և կարգավորեք դեսկտոպ համակարգիչը:' },
    ta: { title: 'மேசைக் கணினி', description: 'மேசைக் கணினியை கண்டறிந்து கட்டமைக்கவும்.' },
  },
  'app-portable': {
    vi: { title: 'Máy tính xách tay', description: 'Khám phá và cấu hình máy tính xách tay.' },
    ro: { title: 'Laptop', description: 'Descoperă și configurează un laptop.' },
    pl: { title: 'Laptop', description: 'Odkryj i skonfiguruj laptopa.' },
    ku: { title: 'Laptop', description: 'Laptopê nas bike û saz bike.' },
    sw: { title: 'Kompyuta mpakato', description: 'Gundua na sanidi kompyuta mpakato.' },
    wo: { title: 'Ordinatër bu am fa nga jël', description: 'Xam ordinatër bu am fa nga jël te defar ko.' },
    ka: { title: 'ლეპტოპი', description: 'გაეცანით და დააკონფიგურირეთ ლეპტოპი.' },
    hy: { title: 'Նոութբուք', description: 'Բացահայտեք և կարգավորեք նոութբուքը:' },
    ta: { title: 'மடிக்கணினி', description: 'மடிக்கணினியை கண்டறிந்து கட்டமைக்கவும்.' },
  },
  'app-chromebook': {
    vi: { title: 'Chromebook', description: 'Khám phá và cấu hình Chromebook.' },
    ro: { title: 'Chromebook', description: 'Descoperă și configurează un Chromebook.' },
    pl: { title: 'Chromebook', description: 'Odkryj i skonfiguruj Chromebooka.' },
    ku: { title: 'Chromebook', description: 'Chromebookê nas bike û saz bike.' },
    sw: { title: 'Chromebook', description: 'Gundua na sanidi Chromebook.' },
    wo: { title: 'Chromebook', description: 'Xam Chromebook te defar ko.' },
    ka: { title: 'Chromebook', description: 'გაეცანით და დააკონფიგურირეთ Chromebook.' },
    hy: { title: 'Chromebook', description: 'Բացահայտեք և կարգավորեք Chromebook-ը:' },
    ta: { title: 'குரோம்புக்', description: 'குரோம்புக்கை கண்டறிந்து கட்டமைக்கவும்.' },
  },
  'app-windows': {
    vi: { title: 'Windows', description: 'Khám phá và cấu hình cài đặt Windows.' },
    ro: { title: 'Windows', description: 'Descoperă și configurează setările Windows.' },
    pl: { title: 'Windows', description: 'Odkryj i skonfiguruj ustawienia Windows.' },
    ku: { title: 'Windows', description: 'Sazkariyên Windowsê nas bike û saz bike.' },
    sw: { title: 'Windows', description: 'Gundua na sanidi mipangilio ya Windows.' },
    wo: { title: 'Windows', description: 'Xam sos yi Windows te defar leen.' },
    ka: { title: 'Windows', description: 'გაეცანით და დააკონფიგურირეთ Windows-ის პარამეტრები.' },
    hy: { title: 'Windows', description: 'Բացահայտեք և կարգավորեք Windows-ի կարգավորումները:' },
    ta: { title: 'விண்டோஸ்', description: 'விண்டோஸ் அமைப்புகளை கண்டறிந்து கட்டமைக்கவும்.' },
  },
  'app-apple': {
    vi: { title: 'Apple (macOS)', description: 'Khám phá và cấu hình cài đặt máy Mac của Apple.' },
    ro: { title: 'Apple (macOS)', description: 'Descoperă și configurează setările unui Mac Apple.' },
    pl: { title: 'Apple (macOS)', description: 'Odkryj i skonfiguruj ustawienia Maca Apple.' },
    ku: { title: 'Apple (macOS)', description: 'Sazkariyên Mac ya Apple nas bike û saz bike.' },
    sw: { title: 'Apple (macOS)', description: 'Gundua na sanidi mipangilio ya Mac ya Apple.' },
    wo: { title: 'Apple (macOS)', description: 'Xam sos yi Mac Apple te defar leen.' },
    ka: { title: 'Apple (macOS)', description: 'გაეცანით და დააკონფიგურირეთ Apple Mac-ის პარამეტრები.' },
    hy: { title: 'Apple (macOS)', description: 'Բացահայտեք և կարգավորեք Apple Mac-ի կարգավորումները:' },
    ta: { title: 'ஆப்பிள் (macOS)', description: 'ஆப்பிள் மேக் அமைப்புகளை கண்டறிந்து கட்டமைக்கவும்.' },
  },
  'app-linux': {
    vi: { title: 'Linux', description: 'Khám phá và cấu hình cài đặt Linux.' },
    ro: { title: 'Linux', description: 'Descoperă și configurează setările Linux.' },
    pl: { title: 'Linux', description: 'Odkryj i skonfiguruj ustawienia Linuksa.' },
    ku: { title: 'Linux', description: 'Sazkariyên Linuxê nas bike û saz bike.' },
    sw: { title: 'Linux', description: 'Gundua na sanidi mipangilio ya Linux.' },
    wo: { title: 'Linux', description: 'Xam sos yi Linux te defar leen.' },
    ka: { title: 'Linux', description: 'გაეცანით და დააკონფიგურირეთ Linux-ის პარამეტრები.' },
    hy: { title: 'Linux', description: 'Բացահայտեք և կարգավորեք Linux-ի կարգավորումները:' },
    ta: { title: 'லினக்ஸ்', description: 'லினக்ஸ் அமைப்புகளை கண்டறிந்து கட்டமைக்கவும்.' },
  },
  'app-tablette-android': {
    vi: { title: 'Máy tính bảng Android', description: 'Khám phá và cấu hình cài đặt máy tính bảng Android.' },
    ro: { title: 'Tabletă Android', description: 'Descoperă și configurează setările unei tablete Android.' },
    pl: { title: 'Tablet z Androidem', description: 'Odkryj i skonfiguruj ustawienia tabletu z Androidem.' },
    ku: { title: 'Tableta Android', description: 'Sazkariyên tableta Android nas bike û saz bike.' },
    sw: { title: 'Kompyuta kibao ya Android', description: 'Gundua na sanidi mipangilio ya kompyuta kibao ya Android.' },
    wo: { title: 'Tablet Android', description: 'Xam sos yi tablet Android te defar leen.' },
    ka: { title: 'Android ტაბლეტი', description: 'გაეცანით და დააკონფიგურირეთ Android ტაბლეტის პარამეტრები.' },
    hy: { title: 'Android պլանշետ', description: 'Բացահայտեք և կարգավորեք Android պլանշետի կարգավորումները:' },
    ta: { title: 'ஆண்ட்ராய்டு டேப்லெட்', description: 'ஆண்ட்ராய்டு டேப்லெட் அமைப்புகளை கண்டறிந்து கட்டமைக்கவும்.' },
  },
  'app-ipad': {
    vi: { title: 'iPad', description: 'Khám phá và cấu hình cài đặt iPad.' },
    ro: { title: 'iPad', description: 'Descoperă și configurează setările unui iPad.' },
    pl: { title: 'iPad', description: 'Odkryj i skonfiguruj ustawienia iPada.' },
    ku: { title: 'iPad', description: 'Sazkariyên iPad nas bike û saz bike.' },
    sw: { title: 'iPad', description: 'Gundua na sanidi mipangilio ya iPad.' },
    wo: { title: 'iPad', description: 'Xam sos yi iPad te defar leen.' },
    ka: { title: 'iPad', description: 'გაეცანით და დააკონფიგურირეთ iPad-ის პარამეტრები.' },
    hy: { title: 'iPad', description: 'Բացահայտեք և կարգավորեք iPad-ի կարգավորումները:' },
    ta: { title: 'ஐபேட்', description: 'ஐபேட் அமைப்புகளை கண்டறிந்து கட்டமைக்கவும்.' },
  },
  'app-iphone': {
    vi: { title: 'iPhone', description: 'Khám phá và cấu hình cài đặt iPhone (mọi phiên bản).' },
    ro: { title: 'iPhone', description: 'Descoperă și configurează setările unui iPhone (toate versiunile).' },
    pl: { title: 'iPhone', description: 'Odkryj i skonfiguruj ustawienia iPhonea (wszystkie wersje).' },
    ku: { title: 'iPhone', description: 'Sazkariyên iPhone nas bike û saz bike (hemû guhertoyan).' },
    sw: { title: 'iPhone', description: 'Gundua na sanidi mipangilio ya iPhone (matoleo yote).' },
    wo: { title: 'iPhone', description: 'Xam sos yi iPhone te defar leen (versions yépp).' },
    ka: { title: 'iPhone', description: 'გაეცანით და დააკონფიგურირეთ iPhone-ის პარამეტრები (ყველა ვერსია).' },
    hy: { title: 'iPhone', description: 'Բացահայտեք և կարգավորեք iPhone-ի կարգավորումները (բոլոր տարբերակները):' },
    ta: { title: 'ஐபோன்', description: 'ஐபோன் அமைப்புகளை கண்டறிந்து கட்டமைக்கவும் (அனைத்து பதிப்புகள்).' },
  },
  'app-android-phone': {
    vi: { title: 'Điện thoại Android', description: 'Khám phá và cấu hình cài đặt điện thoại thông minh Android (mọi phiên bản).' },
    ro: { title: 'Smartphone Android', description: 'Descoperă și configurează setările unui smartphone Android (toate versiunile).' },
    pl: { title: 'Smartfon z Androidem', description: 'Odkryj i skonfiguruj ustawienia smartfona z Androidem (wszystkie wersje).' },
    ku: { title: 'Têlefona Android', description: 'Sazkariyên têlefona Android nas bike û saz bike (hemû guhertoyan).' },
    sw: { title: 'Simu janja ya Android', description: 'Gundua na sanidi mipangilio ya simu janja ya Android (matoleo yote).' },
    wo: { title: 'Telefon Android', description: 'Xam sos yi telefon Android te defar leen (versions yépp).' },
    ka: { title: 'Android სმარტფონი', description: 'გაეცანით და დააკონფიგურირეთ Android სმარტფონის პარამეტრები (ყველა ვერსია).' },
    hy: { title: 'Android սմարթֆոն', description: 'Բացահայտեք և կարգավորեք Android սմարթֆոնի կարգավորումները (բոլոր տարբերակները):' },
    ta: { title: 'ஆண்ட்ராய்டு ஸ்மார்ட்போன்', description: 'ஆண்ட்ராய்டு ஸ்மார்ட்போன் அமைப்புகளை கண்டறிந்து கட்டமைக்கவும் (அனைத்து பதிப்புகள்).' },
  },
  'dem-sites-officiels': {
    vi: { title: 'Các trang web chính thức', description: 'Khám phá các trang web chính thức và biết những thủ tục nào có thể thực hiện trực tuyến.' },
    ro: { title: 'Site-urile oficiale', description: 'Descoperă site-urile oficiale și află ce demersuri se pot face online.' },
    pl: { title: 'Oficjalne strony internetowe', description: 'Odkryj oficjalne strony internetowe i dowiedz się, jakie formalności można załatwić online.' },
    ku: { title: 'Malperên fermî', description: 'Malperên fermî nas bike û bizane kîjan karên online tên kirin.' },
    sw: { title: 'Tovuti rasmi', description: 'Gundua tovuti rasmi na ujue taratibu zipi zinaweza kufanywa mtandaoni.' },
    wo: { title: 'Site yu ofisel', description: 'Xam site yu ofisel te xam ban jëf ñu mën def ci internet.' },
    ka: { title: 'ოფიციალური საიტები', description: 'გაეცანით ოფიციალურ საიტებს და გაიგეთ რომელი პროცედურების გაკეთება შესაძლებელია ონლაინ.' },
    hy: { title: 'Պաշտոնական կայքեր', description: 'Բացահայտեք պաշտոնական կայքերը և իմացեք, թե որ գործընթացները կարելի է կատարել առցանց:' },
    ta: { title: 'அதிகாரப்பூர்வ இணையதளங்கள்', description: 'அதிகாரப்பூர்வ இணையதளங்களை கண்டறிந்து ஆன்லைனில் என்ன செயல்முறைகளை செய்யலாம் என்பதை அறியவும்.' },
  },
  'dem-caf': {
    vi: { title: 'CAF (Trợ cấp gia đình)', description: 'Thực hiện các thủ tục trên trang web CAF.' },
    ro: { title: 'CAF (Alocații familiale)', description: 'Efectuează-ți demersurile pe site-ul CAF.' },
    pl: { title: 'CAF (zasiłki rodzinne)', description: 'Załatw swoje sprawy na stronie CAF.' },
    ku: { title: 'CAF (Alîkariya malbatê)', description: 'Karên xwe li ser malpera CAF bike.' },
    sw: { title: 'CAF (Posho za familia)', description: 'Fanya taratibu zako kwenye tovuti ya CAF.' },
    wo: { title: 'CAF (wallu njabot)', description: 'Defar say jëf ci site CAF bi.' },
    ka: { title: 'CAF (საოჯახო შემწეობა)', description: 'გააკეთეთ თქვენი პროცედურები CAF-ის საიტზე.' },
    hy: { title: 'CAF (ընտանեկան նպաստներ)', description: 'Կատարեք ձեր գործընթացները CAF կայքում:' },
    ta: { title: 'CAF (குடும்ப உதவித்தொகை)', description: 'CAF இணையதளத்தில் உங்கள் செயல்முறைகளை செய்யவும்.' },
  },
  'dem-cpam': {
    vi: { title: 'CPAM (Bảo hiểm y tế)', description: 'Thực hiện các thủ tục trên ameli.fr (CPAM).' },
    ro: { title: 'CPAM (Asigurări de sănătate)', description: 'Efectuează-ți demersurile pe ameli.fr (CPAM).' },
    pl: { title: 'CPAM (ubezpieczenie zdrowotne)', description: 'Załatw swoje sprawy na ameli.fr (CPAM).' },
    ku: { title: 'CPAM (Sîgorta tenduristiyê)', description: 'Karên xwe li ser ameli.fr bike (CPAM).' },
    sw: { title: 'CPAM (Bima ya afya)', description: 'Fanya taratibu zako kwenye ameli.fr (CPAM).' },
    wo: { title: 'CPAM (asirans wér-gi-yaram)', description: 'Defar say jëf ci ameli.fr (CPAM).' },
    ka: { title: 'CPAM (ჯანმრთელობის დაზღვევა)', description: 'გააკეთეთ თქვენი პროცედურები ameli.fr-ზე (CPAM).' },
    hy: { title: 'CPAM (առողջության ապահովագրություն)', description: 'Կատարեք ձեր գործընթացները ameli.fr-ում (CPAM):' },
    ta: { title: 'CPAM (சுகாதார காப்பீடு)', description: 'ameli.fr இல் உங்கள் செயல்முறைகளை செய்யவும் (CPAM).' },
  },
  'dem-carsat': {
    vi: { title: 'CARSAT (Hưu trí)', description: 'Thực hiện các thủ tục trên trang web CARSAT.' },
    ro: { title: 'CARSAT (Pensie)', description: 'Efectuează-ți demersurile pe site-ul CARSAT.' },
    pl: { title: 'CARSAT (emerytura)', description: 'Załatw swoje sprawy na stronie CARSAT.' },
    ku: { title: 'CARSAT (Teqawid)', description: 'Karên xwe li ser malpera CARSAT bike.' },
    sw: { title: 'CARSAT (Pensheni)', description: 'Fanya taratibu zako kwenye tovuti ya CARSAT.' },
    wo: { title: 'CARSAT (retret)', description: 'Defar say jëf ci site CARSAT bi.' },
    ka: { title: 'CARSAT (პენსია)', description: 'გააკეთეთ თქვენი პროცედურები CARSAT-ის საიტზე.' },
    hy: { title: 'CARSAT (կենսաթոշակ)', description: 'Կատարեք ձեր գործընթացները CARSAT կայքում:' },
    ta: { title: 'CARSAT (ஓய்வூதியம்)', description: 'CARSAT இணையதளத்தில் உங்கள் செயல்முறைகளை செய்யவும்.' },
  },
  'dem-lia': {
    vi: { title: 'LiA (Xe buýt và tàu điện)', description: 'Sử dụng trang web mạng lưới giao thông LiA của Le Havre và tìm hiểu về giá vé ưu đãi.' },
    ro: { title: 'LiA (autobuz și tramvai)', description: 'Folosește site-ul rețelei de transport LiA din Le Havre și află despre tarifele sociale.' },
    pl: { title: 'LiA (autobus i tramwaj)', description: 'Skorzystaj ze strony sieci transportowej LiA w Le Havre i poznaj taryfy solidarnościowe.' },
    ku: { title: 'LiA (Otobês û tramway)', description: 'Malpera tora veguhastinê ya LiA li Le Havre bikar bîne û nirxên piştgiriyê nas bike.' },
    sw: { title: 'LiA (basi na tramu)', description: 'Tumia tovuti ya mtandao wa usafiri wa LiA huko Le Havre na ujue kuhusu bei za mshikamano.' },
    wo: { title: 'LiA (bis ak tram)', description: 'Jëfandikoo site réseau transport LiA bi ci Le Havre te xam njëg yu ndimbal.' },
    ka: { title: 'LiA (ავტობუსი და ტრამვაი)', description: 'გამოიყენეთ Le Havre-ის სატრანსპორტო ქსელის LiA საიტი და გაიგეთ სოლიდარობის ტარიფების შესახებ.' },
    hy: { title: 'LiA (ավտոբուս և տրամվայ)', description: 'Օգտագործեք Le Havre-ի LiA տրանսպորտային ցանցի կայքը և իմացեք համերաշխության սակագների մասին:' },
    ta: { title: 'LiA (பேருந்து மற்றும் ட்ராம்)', description: 'லு ஆவ்ரின் போக்குவரத்து வலையமைப்பான LiA இணையதளத்தைப் பயன்படுத்தி ஒற்றுமை கட்டணங்களை அறியவும்.' },
  },
  'dem-impots': {
    vi: { title: 'Thuế', description: 'Khai báo và thực hiện các thủ tục trên impots.gouv.fr.' },
    ro: { title: 'Impozite', description: 'Fă-ți declarația și demersurile pe impots.gouv.fr.' },
    pl: { title: 'Podatki', description: 'Złóż deklarację i załatw sprawy na impots.gouv.fr.' },
    ku: { title: 'Bac', description: 'Daxuyanî û karên xwe li ser impots.gouv.fr bike.' },
    sw: { title: 'Kodi', description: 'Fanya tamko lako na taratibu kwenye impots.gouv.fr.' },
    wo: { title: 'Impo yi', description: 'Def sa déclaration ak say jëf ci impots.gouv.fr.' },
    ka: { title: 'გადასახადები', description: 'გააკეთეთ დეკლარაცია და პროცედურები impots.gouv.fr-ზე.' },
    hy: { title: 'Հարկեր', description: 'Կատարեք ձեր հայտարարագիրը և գործընթացները impots.gouv.fr-ում:' },
    ta: { title: 'வரிகள்', description: 'impots.gouv.fr இல் உங்கள் பிரகடனம் மற்றும் செயல்முறைகளை செய்யவும்.' },
  },
  'dem-france-travail': {
    vi: { title: 'France Travail', description: 'Đăng ký và thực hiện các thủ tục trên francetravail.fr.' },
    ro: { title: 'France Travail', description: 'Înregistrează-te și efectuează-ți demersurile pe francetravail.fr.' },
    pl: { title: 'France Travail', description: 'Zarejestruj się i załatw swoje sprawy na francetravail.fr.' },
    ku: { title: 'France Travail', description: 'Li ser francetravail.fr tomar bike û karên xwe bike.' },
    sw: { title: 'France Travail', description: 'Jisajili na fanya taratibu zako kwenye francetravail.fr.' },
    wo: { title: 'France Travail', description: 'Bind sa bopp te defar say jëf ci francetravail.fr.' },
    ka: { title: 'France Travail', description: 'დარეგისტრირდით და გააკეთეთ თქვენი პროცედურები francetravail.fr-ზე.' },
    hy: { title: 'France Travail', description: 'Գրանցվեք և կատարեք ձեր գործընթացները francetravail.fr-ում:' },
    ta: { title: 'France Travail', description: 'francetravail.fr இல் பதிவு செய்து உங்கள் செயல்முறைகளை செய்யவும்.' },
  },
  'dem-mdph': {
    vi: { title: 'MDPH', description: 'Nộp đơn trên trang web MDPH.' },
    ro: { title: 'MDPH', description: 'Depune o cerere pe site-ul MDPH.' },
    pl: { title: 'MDPH', description: 'Złóż wniosek na stronie MDPH.' },
    ku: { title: 'MDPH', description: 'Li ser malpera MDPH daxwazê bike.' },
    sw: { title: 'MDPH', description: 'Wasilisha ombi kwenye tovuti ya MDPH.' },
    wo: { title: 'MDPH', description: 'Yónnee ay ñaan ci site MDPH.' },
    ka: { title: 'MDPH', description: 'შეიტანეთ განაცხადი MDPH-ის საიტზე.' },
    hy: { title: 'MDPH', description: 'Ներկայացրեք հայտ MDPH կայքում:' },
    ta: { title: 'MDPH', description: 'MDPH இணையதளத்தில் விண்ணப்பிக்கவும்.' },
  },
  'dem-mee': {
    vi: { title: 'Sự kiện việc làm của tôi', description: 'Sử dụng trang web Mes Événements Emploi.' },
    ro: { title: 'Evenimentele mele de angajare', description: 'Folosește site-ul Mes Événements Emploi.' },
    pl: { title: 'Moje wydarzenia zawodowe', description: 'Skorzystaj ze strony Mes Événements Emploi.' },
    ku: { title: 'Bûyerên kar ên min', description: 'Malpera Mes Événements Emploi bikar bîne.' },
    sw: { title: 'Matukio yangu ya ajira', description: 'Tumia tovuti ya Mes Événements Emploi.' },
    wo: { title: 'Ay jaam sama liggéey', description: 'Jëfandikoo site Mes Événements Emploi bi.' },
    ka: { title: 'ჩემი დასაქმების ღონისძიებები', description: 'გამოიყენეთ Mes Événements Emploi საიტი.' },
    hy: { title: 'Իմ աշխատանքի միջոցառումները', description: 'Օգտագործեք Mes Événements Emploi կայքը:' },
    ta: { title: 'எனது வேலைவாய்ப்பு நிகழ்வுகள்', description: 'Mes Événements Emploi இணையதளத்தைப் பயன்படுத்தவும்.' },
  },
  'dem-logement-social': {
    vi: { title: 'Nhà ở xã hội', description: 'Nộp đơn xin nhà ở xã hội trực tuyến.' },
    ro: { title: 'Locuință socială', description: 'Depune o cerere de locuință socială online.' },
    pl: { title: 'Mieszkanie socjalne', description: 'Złóż wniosek o mieszkanie socjalne online.' },
    ku: { title: 'Xaniyê civakî', description: 'Online daxwaza xaniyê civakî bike.' },
    sw: { title: 'Nyumba za kijamii', description: 'Wasilisha ombi la nyumba ya kijamii mtandaoni.' },
    wo: { title: 'Kër social', description: 'Ñaan kër social ci internet.' },
    ka: { title: 'სოციალური საცხოვრებელი', description: 'შეიტანეთ განაცხადი სოციალურ საცხოვრებელზე ონლაინ.' },
    hy: { title: 'Սոցիալական բնակարան', description: 'Ներկայացրեք սոցիալական բնակարանի հայտ առցանց:' },
    ta: { title: 'சமூக வீட்டுவசதி', description: 'ஆன்லைனில் சமூக வீட்டுவசதிக்கு விண்ணப்பிக்கவும்.' },
  },
  'dem-mobilite': {
    vi: { title: 'Hỗ trợ di chuyển', description: 'Khám phá Pôle Mobilité và hiệp hội MAD tại Le Havre.' },
    ro: { title: 'Ajutor pentru mobilitate', description: 'Descoperă Pôle Mobilité și asociația MAD din Le Havre.' },
    pl: { title: 'Pomoc w mobilności', description: 'Odkryj Pôle Mobilité i stowarzyszenie MAD w Le Havre.' },
    ku: { title: 'Alîkariya tevgerê', description: 'Pôle Mobilité û komeleya MAD li Le Havre nas bike.' },
    sw: { title: 'Msaada wa uhamaji', description: 'Gundua Pôle Mobilité na chama cha MAD huko Le Havre.' },
    wo: { title: 'Ndimbal ci wuute', description: 'Xam Pôle Mobilité ak asosiyasion MAD ci Le Havre.' },
    ka: { title: 'მობილურობის დახმარება', description: 'გაეცანით Pôle Mobilité-ს და MAD ასოციაციას Le Havre-ში.' },
    hy: { title: 'Շարժունակության օգնություն', description: 'Բացահայտեք Pôle Mobilité-ն և MAD ասոցիացիան Le Havre-ում:' },
    ta: { title: 'இயக்க உதவி', description: 'லு ஆவ்ரில் Pôle Mobilité மற்றும் MAD சங்கத்தை கண்டறியவும்.' },
  },
  'dem-remuneration-normandie': {
    vi: { title: 'Trợ cấp - Vùng Normandie', description: 'Sử dụng trang web trợ cấp cho học viên của Vùng Normandie.' },
    ro: { title: 'Remunerație - Regiunea Normandia', description: 'Folosește site-ul de remunerație pentru cursanții din Regiunea Normandia.' },
    pl: { title: 'Wynagrodzenie - Region Normandia', description: 'Skorzystaj ze strony wynagrodzeń dla stażystów Regionu Normandia.' },
    ku: { title: 'Meaş - Herêma Normandiyê', description: 'Malpera meaşê ya perwerdehiyên Herêma Normandiyê bikar bîne.' },
    sw: { title: 'Malipo - Mkoa wa Normandie', description: 'Tumia tovuti ya malipo ya wanafunzi wa Mkoa wa Normandie.' },
    wo: { title: 'Fey - Région Normandie', description: 'Jëfandikoo site fey bu ëllëngkat yi Région Normandie.' },
    ka: { title: 'ანაზღაურება - ნორმანდიის რეგიონი', description: 'გამოიყენეთ ნორმანდიის რეგიონის მსმენელთა ანაზღაურების საიტი.' },
    hy: { title: 'Վարձատրություն - Նորմանդիայի շրջան', description: 'Օգտագործեք Նորմանդիայի շրջանի պրակտիկանտների վարձատրության կայքը:' },
    ta: { title: 'ஊதியம் - நோர்மண்டி பிராந்தியம்', description: 'நோர்மண்டி பிராந்திய பயிற்சியாளர்களின் ஊதிய இணையதளத்தைப் பயன்படுத்தவும்.' },
  },
  'dem-ecole': {
    vi: { title: 'Trường học, căng tin, sau giờ học', description: 'Đăng ký và gia hạn đăng ký cho con bạn vào trường học, căng tin, hoạt động sau giờ học và trung tâm giải trí (Thành phố Le Havre).' },
    ro: { title: 'Școală, cantină, activități extrașcolare', description: 'Înscrie și reînnoiește înscrierea copiilor tăi la școală, cantină, activități extrașcolare și centrul de agrement (Orașul Le Havre).' },
    pl: { title: 'Szkoła, stołówka, zajęcia pozalekcyjne', description: 'Zapisz i odnów zapis swoich dzieci do szkoły, stołówki, zajęć pozalekcyjnych i centrum rekreacji (Miasto Le Havre).' },
    ku: { title: 'Dibistan, kantîn, piştî-dibistanê', description: 'Zarokên xwe li dibistanê, kantînê, piştî-dibistanê û navenda vala-demê tomar bike (Bajarê Le Havre).' },
    sw: { title: 'Shule, kantini, baada ya shule', description: 'Andikisha na fanya upya usajili wa watoto wako shuleni, kantini, baada ya shule na kituo cha burudani (Mji wa Le Havre).' },
    wo: { title: 'Jàng-jàngu, kantin, apre-jàng', description: 'Bind te yeesalaate say doom ci jàng-jàngu, kantin, apre-jàng ak centre de loisirs (Dëkk Le Havre).' },
    ka: { title: 'სკოლა, სასადილო, სკოლისშემდგომი', description: 'ჩაწერეთ და განაახლეთ თქვენი შვილების რეგისტრაცია სკოლაში, სასადილოში, სკოლისშემდგომ საქმიანობასა და დასვენების ცენტრში (ქალაქი Le Havre).' },
    hy: { title: 'Դպրոց, ճաշարան, արտադպրոցական', description: 'Գրանցեք և թարմացրեք ձեր երեխաների գրանցումը դպրոցում, ճաշարանում, արտադպրոցական և հանգստի կենտրոնում (Լը Ավր քաղաք):' },
    ta: { title: 'பள்ளி, உணவகம், பள்ளிக்குப் பிந்தைய', description: 'உங்கள் குழந்தைகளை பள்ளி, உணவகம், பள்ளிக்குப் பிந்தைய மற்றும் ஓய்வு மையத்தில் பதிவு செய்யவும் (லு ஆவ்ர் நகரம்).' },
  },
  'dem-titre-sejour': {
    vi: { title: 'Giấy phép cư trú', description: 'Tạo và gia hạn giấy phép cư trú khi đến Le Havre.' },
    ro: { title: 'Permis de ședere', description: 'Creează și reînnoiește un permis de ședere la sosirea în Le Havre.' },
    pl: { title: 'Zezwolenie na pobyt', description: 'Utwórz i odnów zezwolenie na pobyt po przyjeździe do Le Havre.' },
    ku: { title: 'Destûra rûniştinê', description: 'Dema ku tu digihîjî Le Havre destûra rûniştinê çêbike û nûve bike.' },
    sw: { title: 'Kibali cha ukaazi', description: 'Tengeneza na fanya upya kibali cha ukaazi ukifika Le Havre.' },
    wo: { title: 'Titre de séjour', description: 'Sos te yeesalaate titre de séjour bu nga dikkee Le Havre.' },
    ka: { title: 'ბინადრობის ნებართვა', description: 'შექმენით და განაახლეთ ბინადრობის ნებართვა Le Havre-ში ჩამოსვლისას.' },
    hy: { title: 'Կացության թույլտվություն', description: 'Ստեղծեք և թարմացրեք կացության թույլտվությունը Le Havre ժամանելիս:' },
    ta: { title: 'தங்குமிட அனுமதி', description: 'லு ஆவ்ர் வந்தவுடன் தங்குமிட அனுமதியை உருவாக்கி புதுப்பிக்கவும்.' },
  },
  'dem-casier-judiciaire': {
    vi: { title: 'Lý lịch tư pháp', description: 'Yêu cầu trích lục lý lịch tư pháp trực tuyến.' },
    ro: { title: 'Cazier judiciar', description: 'Solicită extrasul de cazier judiciar online.' },
    pl: { title: 'Rejestr karny', description: 'Poproś o wyciąg z rejestru karnego online.' },
    ku: { title: 'Tomara edlî', description: 'Online extraya tomara xwe ya edlî bixwaze.' },
    sw: { title: 'Rekodi ya jinai', description: 'Omba nakala ya rekodi yako ya jinai mtandaoni.' },
    wo: { title: 'Kasye judisiyer', description: 'Ñaan sa extrait kasye judisiyer ci internet.' },
    ka: { title: 'ნასამართლობის ცნობა', description: 'მოითხოვეთ თქვენი ნასამართლობის ცნობის ამონაწერი ონლაინ.' },
    hy: { title: 'Դատական գործի քաղվածք', description: 'Խնդրեք ձեր դատական գործի քաղվածքն առցանց:' },
    ta: { title: 'குற்றவியல் பதிவு', description: 'ஆன்லைனில் உங்கள் குற்றவியல் பதிவு சாரத்தை கோரவும்.' },
  },
  'dem-carte-identite': {
    vi: { title: 'Thẻ căn cước', description: 'Đặt lịch hẹn để làm hoặc gia hạn thẻ căn cước.' },
    ro: { title: 'Carte de identitate', description: 'Programează-te pentru a crea sau reînnoi cartea de identitate.' },
    pl: { title: 'Dowód osobisty', description: 'Umów się na wyrobienie lub odnowienie dowodu osobistego.' },
    ku: { title: 'Kabra nasnameyê', description: 'Ji bo çêkirin an nûvekirina kabra nasnameyê tayînê bigire.' },
    sw: { title: 'Kitambulisho', description: 'Panga miadi ya kutengeneza au kufanya upya kitambulisho.' },
    wo: { title: 'Kart didantite', description: 'Jël rendez-vous ngir sos walla yeesalaate sa kart didantite.' },
    ka: { title: 'პირადობის მოწმობა', description: 'დანიშნეთ შეხვედრა პირადობის მოწმობის შესაქმნელად ან განსაახლებლად.' },
    hy: { title: 'Անձնագիր', description: 'Ամրագրեք ժամադրություն անձնագիր ստեղծելու կամ թարմացնելու համար:' },
    ta: { title: 'அடையாள அட்டை', description: 'அடையாள அட்டையை உருவாக்க அல்லது புதுப்பிக்க சந்திப்பை பதிவு செய்யவும்.' },
  },
}
for (const id in NEW_LANGUAGES_BATCH2) {
  MODULE_TRANSLATIONS[id] = { ...MODULE_TRANSLATIONS[id], ...NEW_LANGUAGES_BATCH2[id] }
}


const WHATISIT_BATCH1 = {
  'app-linux': {
    ur: { whatIsIt: 'لینکس ایک آپریٹنگ سسٹم ہے، جیسے ونڈوز یا macOS، لیکن یہ مفت ہے اور کم وسائل استعمال کرتا ہے: یہ پرانے یا کم طاقتور کمپیوٹر پر بھی اچھی طرح کام کرتا ہے۔ اس کے کئی ورژن ہیں (Ubuntu, Debian, Linux Mint...)، لیکن وہ سب بنیادی طور پر ایک جیسے کام کرتے ہیں۔', documents: [] },
    ps: { whatIsIt: 'لینکس یو عملیاتي سیسټم دی، لکه ویندوز یا macOS، مګر دا وړیا دی او لږ سرچینې کاروي: دا حتی په زاړه یا لږ پیاوړي کمپیوټر کې هم ښه کار کوي.', documents: [] },
    bn: { whatIsIt: 'লিনাক্স একটি অপারেটিং সিস্টেম, উইন্ডোজ বা macOS-এর মতো, তবে এটি বিনামূল্যে এবং কম সম্পদ ব্যবহার করে: এটি পুরনো বা কম শক্তিশালী কম্পিউটারেও ভালো কাজ করে।', documents: [] },
    hi: { whatIsIt: 'लिनक्स एक ऑपरेटिंग सिस्टम है, विंडोज़ या macOS की तरह, लेकिन यह मुफ्त है और कम संसाधन उपयोग करता है।', documents: [] },
  },
  'dem-sites-officiels': {
    ur: { whatIsIt: 'فرانس میں، بہت سے انتظامی کام (خاندان، صحت، کام، رہائش، دستاویزات...) اب گھر بیٹھے انٹرنیٹ پر کیے جاتے ہیں۔ سرکاری ویب سائٹ کو پہچاننا وقت ضائع ہونے یا دھوکہ دہی سے بچاتا ہے۔', documents: [] },
    ps: { whatIsIt: 'په فرانسه کې، ډیری اداري چارې (کورنۍ، روغتیا، کار، استوګنه، اسناد...) اوس د کارتوس پرځای انټرنیټ باندې ترسره کیږي.', documents: [] },
    bn: { whatIsIt: 'ফ্রান্সে, অনেক প্রশাসনিক কাজ (পরিবার, স্বাস্থ্য, কাজ, আবাসন, নথি...) এখন কাউন্টারের পরিবর্তে ইন্টারনেটে করা হয়।', documents: [] },
    hi: { whatIsIt: 'फ्रांस में, कई प्रशासनिक कार्य अब काउंटर के बजाय इंटरनेट पर किए जाते हैं।', documents: [] },
  },
  'dem-caf': {
    ur: { whatIsIt: 'CAF خاندانوں اور کم آمدنی والے افراد کو رقم دیتا ہے: رہائش کی مدد، بچوں کی مدد، سرگرمی بونس... اگر آپ کے بچے ہیں یا آمدنی کم ہے، تو آپ کو شاید مدد کا حق ہے۔', documents: ['سوشل سیکیورٹی نمبر', 'ای میل ایڈریس', 'RIB (بینک شناختی بیان)', 'حالیہ رہائشی ثبوت'] },
    ps: { whatIsIt: 'CAF کورنیو او کم عاید لرونکو کسانو ته پیسې ورکوي: د استوګنې مرسته، د ماشومانو مرسته، د فعالیت انعام... که تاسو ماشومان لرئ یا ستاسو عاید کم دی، تاسو شاید د مرستې حق لرئ.', documents: ['د ټولنیزې خوندیتوب شمېره', 'بریښنالیک پته', 'RIB (بانکي پیژندنیز بیان)', 'وروستی استوګنې ثبوت'] },
    bn: { whatIsIt: 'CAF পরিবার এবং কম আয়ের ব্যক্তিদের অর্থ প্রদান করে: আবাসন সহায়তা, শিশুদের জন্য সহায়তা, কার্যকলাপ বোনাস...', documents: ['সামাজিক নিরাপত্তা নম্বর', 'ইমেইল ঠিকানা', 'RIB (ব্যাংক পরিচয় বিবরণী)', 'সাম্প্রতিক আবাসিক প্রমাণ'] },
    hi: { whatIsIt: 'CAF परिवारों और कम आय वाले लोगों को पैसा देता है: आवास सहायता, बच्चों के लिए सहायता, गतिविधि बोनस...', documents: ['सामाजिक सुरक्षा संख्या', 'ईमेल पता', 'RIB (बैंक पहचान विवरण)', 'हाल का आवासीय प्रमाण'] },
  },
  'dem-cpam': {
    ur: { whatIsIt: 'CPAM آپ کے کچھ طبی اخراجات (ڈاکٹر، فارمیسی، ہسپتال) کی واپسی کرتا ہے۔ یہ کارٹے ویتال بھی جاری کرتا ہے، جو اچھی طرح رقم واپس لینے کے لیے ضروری ہے۔ اس کے بغیر آپ اپنی دیکھ بھال زیادہ مہنگی ادا کرتے ہیں۔', documents: ['سوشل سیکیورٹی نمبر', 'شناختی دستاویز', 'ای میل ایڈریس'] },
    ps: { whatIsIt: 'CPAM ستاسو د ځینو طبي لګښتونو بیرته راګرځوي (ډاکټر، درملتون، روغتون). دا کارت ویتال هم ورکوي، چې د ښه بیرته راګرځیدو لپاره اړین دی.', documents: ['د ټولنیزې خوندیتوب شمېره', 'پیژندنیز سند', 'بریښنالیک پته'] },
    bn: { whatIsIt: 'CPAM আপনার কিছু চিকিৎসা খরচ (ডাক্তার, ফার্মেসি, হাসপাতাল) ফেরত দেয়। এটি কার্ট ভিটালও প্রদান করে।', documents: ['সামাজিক নিরাপত্তা নম্বর', 'পরিচয়পত্র', 'ইমেইল ঠিকানা'] },
    hi: { whatIsIt: 'CPAM आपके कुछ चिकित्सा खर्चों की प्रतिपूर्ति करता है।', documents: ['सामाजिक सुरक्षा संख्या', 'पहचान पत्र', 'ईमेल पता'] },
  },
  'dem-carsat': {
    ur: { whatIsIt: 'CARSAT آپ کے مستقبل کی پنشن کا خیال رکھتا ہے: یہ آپ کے کام کیے گئے سال اور سہ ماہی گنتا ہے۔ اگرچہ پنشن دور لگتی ہے، ہر اعلان شدہ کام کا عرصہ بعد میں شمار ہوتا ہے۔', documents: ['سوشل سیکیورٹی نمبر', 'ای میل ایڈریس', 'کیریئر کا بیان اگر آپ کے پاس ہے'] },
    ps: { whatIsIt: 'CARSAT ستاسو راتلونکي تقاعد ته پاملرنه کوي: دا هغه کلونه او ربعې شمېري چې تاسو کار کوئ.', documents: ['د ټولنیزې خوندیتوب شمېره', 'بریښنالیک پته', 'د کاري مسیر بیان که لرئ'] },
    bn: { whatIsIt: 'CARSAT আপনার ভবিষ্যত পেনশনের যত্ন নেয়: এটি আপনার কাজ করা বছর ও ত্রৈমাসিক গণনা করে।', documents: ['সামাজিক নিরাপত্তা নম্বর', 'ইমেইল ঠিকানা', 'ক্যারিয়ার বিবৃতি যদি থাকে'] },
    hi: { whatIsIt: 'CARSAT आपकी भविष्य की पेंशन की देखभाल करता है।', documents: ['सामाजिक सुरक्षा संख्या', 'ईमेल पता', 'करियर विवरण यदि है'] },
  },
  'dem-lia': {
    ur: { whatIsIt: 'LiA لی ہاور میں بس اور ٹرام نیٹ ورک کا نام ہے۔ گاڑی کے بغیر شہر میں گھومنے کے لیے (تربیت، کام، خریداری)، یہ اہم ذریعہ ہے۔ عام قیمت آپ کی صورتحال کے مطابق کافی کم ہو سکتی ہے۔', documents: ['شناختی دستاویز', 'رہائشی ثبوت', 'آپ کی صورتحال سے متعلق ثبوت (CAF، CSS، France Travail، ٹیکس نوٹس... آپ کی پروفائل کے مطابق)'] },
    ps: { whatIsIt: 'LiA د لی هاور د بس او ټرام شبکې نوم دی. د موټر پرته په ښار کې د تګ راتګ لپاره، دا اصلي وسیله ده.', documents: ['پیژندنیز سند', 'د استوګنې ثبوت', 'ستاسو د حالت اړوند ثبوتونه'] },
    bn: { whatIsIt: 'LiA হল লে হাভরের বাস ও ট্রাম নেটওয়ার্কের নাম। গাড়ি ছাড়া শহরে চলাচলের জন্য এটি প্রধান উপায়।', documents: ['পরিচয়পত্র', 'আবাসিক প্রমাণ', 'আপনার পরিস্থিতি সম্পর্কিত প্রমাণপত্র'] },
    hi: { whatIsIt: 'LiA ले हावर में बस और ट्राम नेटवर्क का नाम है।', documents: ['पहचान पत्र', 'आवासीय प्रमाण', 'आपकी स्थिति से संबंधित प्रमाण'] },
  },
  'dem-impots': {
    ur: { whatIsIt: 'فرانس میں، تقریباً ہر کسی کو ہر سال اپنی آمدنی کا اعلان کرنا ہوتا ہے، یہاں تک کہ کم پیسے والے افراد کو بھی۔ یہ لازمی ہے، اور بہت سے دوسرے کام (امداد، رہائش...) پھر "ٹیکس نوٹس" نامی دستاویز مانگتے ہیں۔', documents: ['ٹیکس نمبر (پچھلے ٹیکس نوٹس پر)', 'ای میل ایڈریس', 'سال کی آمدنی کے ثبوت'] },
    ps: { whatIsIt: 'په فرانسه کې، تقریباً هرڅوک باید هر کال خپل عاید اعلان کړي، حتی هغه کسان چې لږ پیسې لري. دا لازمي دي.', documents: ['مالیاتي شمېره (په پخوانۍ مالیاتي خبرتیا کې)', 'بریښنالیک پته', 'د کال د عاید ثبوتونه'] },
    bn: { whatIsIt: 'ফ্রান্সে, প্রায় সবাইকে প্রতি বছর তাদের আয় ঘোষণা করতে হয়, এমনকি কম আয়ের ব্যক্তিদেরও।', documents: ['করদাতা নম্বর', 'ইমেইল ঠিকানা', 'বছরের আয়ের প্রমাণপত্র'] },
    hi: { whatIsIt: 'फ्रांस में, लगभग सभी को हर साल अपनी आय घोषित करनी होती है।', documents: ['कर संख्या', 'ईमेल पता', 'वर्ष की आय के प्रमाण'] },
  },
  'dem-france-travail': {
    ur: { whatIsIt: 'France Travail (پہلے Pôle Emploi کہلاتا تھا) کام تلاش کرنے میں مدد کرتا ہے اور اگر آپ اپنی نوکری کھو دیں تو الاؤنس دے سکتا ہے۔ نگرانی اور نوکری کی پیشکشوں تک رسائی کے لیے، رجسٹر ہونا ضروری ہے۔', documents: ['شناختی دستاویز', 'سوشل سیکیورٹی نمبر', 'CV اگر آپ کے پاس ہے', 'ای میل ایڈریس'] },
    ps: { whatIsIt: 'France Travail (چې مخکې یې Pôle Emploi نومیده) د کار لټون کې مرسته کوي او که تاسو خپله دنده له لاسه ورکړئ نو تادیه درکولی شي.', documents: ['پیژندنیز سند', 'د ټولنیزې خوندیتوب شمېره', 'CV که لرئ', 'بریښنالیک پته'] },
    bn: { whatIsIt: 'France Travail (আগে Pôle Emploi নামে পরিচিত) কাজ খুঁজতে সাহায্য করে এবং আপনি চাকরি হারালে ভাতা প্রদান করতে পারে।', documents: ['পরিচয়পত্র', 'সামাজিক নিরাপত্তা নম্বর', 'CV যদি থাকে', 'ইমেইল ঠিকানা'] },
    hi: { whatIsIt: 'France Travail (पहले Pôle Emploi) काम खोजने में मदद करता है।', documents: ['पहचान पत्र', 'सामाजिक सुरक्षा संख्या', 'CV यदि है', 'ईमेल पता'] },
  },
  'dem-mdph': {
    ur: { whatIsIt: 'MDPH معذور افراد کی مدد کرتا ہے: معذوری کی سرکاری پہچان، مالی امداد، خصوصی کارڈ، رہنمائی۔ اگر آپ یا آپ کا کوئی قریبی روزمرہ زندگی میں رکاوٹ ڈالنے والی معذوری یا بیماری رکھتا ہے، تو یہ مدد کر سکتا ہے۔', documents: ['شناختی دستاویز', '12 ماہ سے کم پرانا طبی سرٹیفکیٹ', 'رہائشی ثبوت'] },
    ps: { whatIsIt: 'MDPH د معلولیت لرونکو کسانو سره مرسته کوي: د معلولیت رسمي پیژندنه، مالي مرستې، ځانګړی کارت، لارښوونه.', documents: ['پیژندنیز سند', 'طبي تصدیق چې د 12 میاشتو څخه کم زوړ وي', 'د استوګنې ثبوت'] },
    bn: { whatIsIt: 'MDPH প্রতিবন্ধী ব্যক্তিদের সাহায্য করে: প্রতিবন্ধকতার সরকারি স্বীকৃতি, আর্থিক সহায়তা, বিশেষ কার্ড।', documents: ['পরিচয়পত্র', '১২ মাসের কম পুরনো মেডিকেল সার্টিফিকেট', 'আবাসিক প্রমাণ'] },
    hi: { whatIsIt: 'MDPH विकलांग व्यक्तियों की मदद करता है।', documents: ['पहचान पत्र', '12 महीने से कम पुराना मेडिकल प्रमाणपत्र', 'आवासीय प्रमाण'] },
  },
  'dem-mee': {
    ur: { whatIsIt: 'یہ ویب سائٹ ان دنوں کی فہرست دیتی ہے جب کمپنیاں آپ کے قریب براہ راست بھرتی کرنے آتی ہیں۔ یہ تحریری درخواست کے بغیر آجروں سے ملنے کا اچھا موقع ہے۔', documents: ['موجودہ CV (کاغذی یا ڈیجیٹل)', 'آپ کا France Travail شناختی نمبر اگر آپ کے پاس ہے'] },
    ps: { whatIsIt: 'دا سایټ هغه ورځې لیست کوي کله چې شرکتونه ستاسو نږدې مستقیم استخدام لپاره راځي.', documents: ['اوسنی CV (کاغذي یا ډیجیټل)', 'ستاسو د France Travail پیژندنیز شمېره که لرئ'] },
    bn: { whatIsIt: 'এই সাইটটি এমন দিনগুলির তালিকা দেয় যখন কোম্পানিগুলি সরাসরি আপনার কাছাকাছি নিয়োগ করতে আসে।', documents: ['আপডেট করা CV', 'আপনার France Travail শনাক্তকারী যদি থাকে'] },
    hi: { whatIsIt: 'यह साइट उन दिनों की सूची देती है जब कंपनियां सीधे भर्ती के लिए आती हैं।', documents: ['अद्यतन CV', 'आपका France Travail पहचानकर्ता यदि है'] },
  },
  'dem-logement-social': {
    ur: { whatIsIt: 'سماجی رہائش (HLM) وہ رہائش ہے جس کا کرایہ نجی رہائش سے کم ہوتا ہے، کم آمدنی والے افراد کے لیے مخصوص۔ سرکاری درخواست دینی ہوتی ہے اور اکثر انتظار کرنا پڑتا ہے، اس لیے جلدی شروع کرنا بہتر ہے۔', documents: ['شناختی دستاویز', 'پورے گھر کے وسائل کے ثبوت', 'خاندانی کتابچہ اگر آپ کے پاس ہے'] },
    ps: { whatIsIt: 'ټولنیز کور (HLM) هغه کور دی چې کرایه یې د خصوصي کور په پرتله کمه ده، د کم عاید کسانو لپاره ځانګړی شوی.', documents: ['پیژندنیز سند', 'د ټولې کورنۍ د سرچینو ثبوتونه', 'د کورنۍ کتابچه که لرئ'] },
    bn: { whatIsIt: 'সামাজিক আবাসন (HLM) হল এমন আবাসন যার ভাড়া বেসরকারি আবাসনের চেয়ে কম।', documents: ['পরিচয়পত্র', 'পুরো পরিবারের সম্পদের প্রমাণ', 'পারিবারিক বুকলেট যদি থাকে'] },
    hi: { whatIsIt: 'सामाजिक आवास (HLM) वह आवास है जिसका किराया निजी आवास से कम होता है।', documents: ['पहचान पत्र', 'पूरे परिवार के संसाधनों के प्रमाण', 'पारिवारिक पुस्तिका यदि है'] },
  },
  'dem-mobilite': {
    ur: { whatIsIt: 'نقل و حرکت کا ذریعہ نہ ہونا اکثر کام یا تربیت تلاش کرنے میں رکاوٹ بنتا ہے۔ لی ہاور کا Pôle Mobilité بالکل اسی صورتحال میں لوگوں کی مدد کرتا ہے: کم قیمت پر لائسنس، گاڑی کی مرمت، سستی گاڑی کرائے پر۔', documents: ['ایک مشیر کی سفارشی خط (France Travail، مقامی مشن...)', 'شناختی دستاویز'] },
    ps: { whatIsIt: 'د تګ راتګ وسیلې نه لرل ډیری وختونه د کار یا روزنې موندلو لپاره خنډ دی. د لی هاور Pôle Mobilité د دې حالت لرونکو کسانو سره مرسته کوي.', documents: ['د یو مشاور لارښوونیز لیک', 'پیژندنیز سند'] },
    bn: { whatIsIt: 'পরিবহনের উপায় না থাকা প্রায়ই কাজ বা প্রশিক্ষণ খুঁজে পাওয়ার ক্ষেত্রে বাধা।', documents: ['একজন পরামর্শদাতার নির্দেশনা পত্র', 'পরিচয়পত্র'] },
    hi: { whatIsIt: 'परिवहन का साधन न होना अक्सर काम या प्रशिक्षण खोजने में बाधा है।', documents: ['एक सलाहकार का मार्गदर्शन पत्र', 'पहचान पत्र'] },
  },
  'dem-remuneration-normandie': {
    ur: { whatIsIt: 'اگر آپ نارمنڈی کے علاقے کی مالی اعانت والی تربیت لے رہے ہیں اور France Travail سے معاوضہ نہیں لیتے، تو آپ کو تربیت کے دوران ادائیگی مل سکتی ہے۔ یہ ویب سائٹ ان ادائیگیوں کی پیروی کرنے دیتی ہے۔', documents: ['آپ کے تربیتی ادارے کی طرف سے دیے گئے شناختی معلومات', 'RIB'] },
    ps: { whatIsIt: 'که تاسو د نورماندي سیمې لخوا تمویل شوې روزنه ترسره کوئ او د France Travail لخوا نه یاست تادیه شوي، تاسو کولی شئ د خپلې روزنې پر مهال معاش ترلاسه کړئ.', documents: ['ستاسو د روزنیز ادارې لخوا لیږل شوي پیژندونکي', 'RIB'] },
    bn: { whatIsIt: 'আপনি যদি নরমান্ডি অঞ্চল দ্বারা অর্থায়িত প্রশিক্ষণ নেন এবং France Travail দ্বারা ক্ষতিপূরণ না পান, আপনি প্রশিক্ষণের সময় বেতন পেতে পারেন।', documents: ['আপনার প্রশিক্ষণ প্রতিষ্ঠান দ্বারা প্রদত্ত পরিচয়পত্র', 'RIB'] },
    hi: { whatIsIt: 'यदि आप नॉर्मंडी क्षेत्र द्वारा वित्तपोषित प्रशिक्षण ले रहे हैं, आप प्रशिक्षण के दौरान भुगतान प्राप्त कर सकते हैं।', documents: ['आपके प्रशिक्षण संगठन द्वारा प्रदान किए गए पहचानकर्ता', 'RIB'] },
  },
  'dem-ecole': {
    ur: { whatIsIt: 'اگر آپ کے بچے لی ہاور میں اسکول جاتے ہیں، تو کینٹین اور اسکول سے پہلے/بعد کی دیکھ بھال خودکار نہیں ہوتی: آپ کو ہر سال شہر کی ویب سائٹ پر اپنے بچے کا اندراج کرنا ہوتا ہے، ورنہ وہ کینٹین میں کھانا یا دیکھ بھال حاصل نہیں کر سکے گا۔', documents: ['CAF کا خاندانی حصص کا 2 ماہ سے کم پرانا سرٹیفکیٹ', 'ای میل ایڈریس', 'خاندانی کتابچہ'] },
    ps: { whatIsIt: 'که تاسو په لی هاور کې ښوونځي ته ځي ماشومان لرئ، کانتین او د ښوونځي مخکې/وروسته پاملرنه اتومات نه ده.', documents: ['د CAF کورنۍ برخې تصدیق چې د 2 میاشتو څخه کم زوړ وي', 'بریښنالیک پته', 'د کورنۍ کتابچه'] },
    bn: { whatIsIt: 'আপনার যদি লে হাভরে স্কুলে যাওয়া সন্তান থাকে, ক্যান্টিন এবং স্কুলের আগে/পরে যত্ন স্বয়ংক্রিয় নয়।', documents: ['CAF পারিবারিক ভাগফল সার্টিফিকেট (২ মাসের কম পুরনো)', 'ইমেইল ঠিকানা', 'পারিবারিক বুকলেট'] },
    hi: { whatIsIt: 'यदि आपके बच्चे ले हावर में स्कूल जाते हैं, कैंटीन और स्कूल से पहले/बाद की देखभाल स्वचालित नहीं है।', documents: ['CAF पारिवारिक गुणांक प्रमाणपत्र (2 महीने से कम पुराना)', 'ईमेल पता', 'पारिवारिक पुस्तिका'] },
  },
  'dem-titre-sejour': {
    ur: { whatIsIt: 'قیام کا اجازت نامہ وہ دستاویز ہے جو کسی غیر ملکی شخص کو فرانس میں قانونی طور پر رہنے کی اجازت دیتی ہے۔ اسے پہنچنے پر مانگنا اور ختم ہونے کی تاریخ سے پہلے تجدید کرنا ضروری ہے، ورنہ آپ غیر قانونی صورتحال میں پھنس سکتے ہیں — یہ اکثر پہنچنے پر پہلا کام ہوتا ہے۔', documents: ['پاسپورٹ', 'رہائشی ثبوت', 'حالیہ شناختی تصویر', 'ای میل ایڈریس'] },
    ps: { whatIsIt: 'د اوسیدو اجازه هغه سند دی چې یو بهرني کس ته اجازه ورکوي چې په قانوني ډول په فرانسه کې ژوند وکړي.', documents: ['پاسپورټ', 'د استوګنې ثبوت', 'وروستۍ پیژندنیزه انځور', 'بریښنالیک پته'] },
    bn: { whatIsIt: 'বসবাসের অনুমতি হল সেই নথি যা একজন বিদেশী ব্যক্তিকে ফ্রান্সে আইনত বসবাসের অনুমতি দেয়।', documents: ['পাসপোর্ট', 'আবাসিক প্রমাণ', 'সাম্প্রতিক পরিচয় ছবি', 'ইমেইল ঠিকানা'] },
    hi: { whatIsIt: 'निवास परमिट वह दस्तावेज़ है जो एक विदेशी व्यक्ति को फ्रांस में कानूनी रूप से रहने की अनुमति देता है।', documents: ['पासपोर्ट', 'आवासीय प्रमाण', 'हाल की पहचान तस्वीर', 'ईमेल पता'] },
  },
  'dem-casier-judiciaire': {
    ur: { whatIsIt: 'عدالتی ریکارڈ ایک دستاویز ہے جو ثابت کرتی ہے کہ آپ پر کوئی سزا نہیں ہے (یا ممکنہ سزاؤں کی فہرست دیتی ہے)۔ بہت سے آجر یا انتظامیہ اسے مانگتے ہیں، خاص طور پر کچھ پیشوں کے لیے (بچوں کی دیکھ بھال، سیکیورٹی...)۔', documents: ['بالکل صحیح نام، تاریخ اور جائے پیدائش (جیسے آپ کے شناختی کارڈ پر)'] },
    ps: { whatIsIt: 'عدلي سابقه هغه سند دی چې ثابتوي چې تاسو هیڅ محکومیت نه لرئ.', documents: ['دقیق نوم، نوم د پلار، د زیږون نیټه او ځای'] },
    bn: { whatIsIt: 'অপরাধ রেকর্ড এমন একটি নথি যা প্রমাণ করে যে আপনার কোনো সাজা নেই।', documents: ['সঠিক নাম, জন্ম তারিখ ও স্থান'] },
    hi: { whatIsIt: 'आपराधिक रिकॉर्ड एक दस्तावेज़ है जो साबित करता है कि आपको कोई सजा नहीं है।', documents: ['सटीक नाम, जन्म तिथि और स्थान'] },
  },
  'dem-carte-identite': {
    ur: { whatIsIt: 'شناختی کارڈ ثابت کرتا ہے کہ آپ فرانس میں کون ہیں۔ یہ قیام کے اجازت نامے سے مختلف ہے: یہ خاص طور پر فرانسیسی شہریت والے افراد سے متعلق ہے۔ بہت سے انتظامی کاموں کے لیے آپ کو ایک درست شناختی دستاویز کی ضرورت ہوگی۔', documents: ['حالیہ معیاری شناختی تصویر', 'رہائشی ثبوت', 'پرانا شناختی کارڈ اگر آپ کے پاس ہے'] },
    ps: { whatIsIt: 'پیژندنیز کارت ثابتوي چې تاسو په فرانسه کې څوک یاست.', documents: ['وروستۍ معیاري پیژندنیزه انځور', 'د استوګنې ثبوت', 'زوړ پیژندنیز کارت که لرئ'] },
    bn: { whatIsIt: 'পরিচয়পত্র প্রমাণ করে যে আপনি ফ্রান্সে কে। এটি বসবাসের অনুমতি থেকে আলাদা।', documents: ['সাম্প্রতিক মানসম্মত পরিচয় ছবি', 'আবাসিক প্রমাণ', 'পুরানো পরিচয়পত্র যদি থাকে'] },
    hi: { whatIsIt: 'पहचान पत्र साबित करता है कि आप फ्रांस में कौन हैं।', documents: ['हाल की मानक पहचान तस्वीर', 'आवासीय प्रमाण', 'पुराना पहचान पत्र यदि है'] },
  },
}
for (const id in WHATISIT_BATCH1) {
  for (const lang in WHATISIT_BATCH1[id]) {
    MODULE_TRANSLATIONS[id][lang] = { ...MODULE_TRANSLATIONS[id][lang], ...WHATISIT_BATCH1[id][lang] }
  }
}


const WHATISIT_BATCH2 = {
  'app-linux': {
    vi: { whatIsIt: 'Linux là một hệ điều hành, giống Windows hoặc macOS, nhưng miễn phí và ít tốn tài nguyên hơn: nó hoạt động tốt ngay cả trên máy tính cũ hoặc kém mạnh mẽ hơn.', documents: [] },
    ro: { whatIsIt: 'Linux este un sistem de operare, precum Windows sau macOS, dar este gratuit și consumă mai puține resurse: funcționează bine chiar și pe un calculator mai vechi sau mai puțin puternic.', documents: [] },
    pl: { whatIsIt: 'Linux to system operacyjny, podobny do Windows czy macOS, ale jest darmowy i zużywa mniej zasobów: działa dobrze nawet na starszym lub słabszym komputerze.', documents: [] },
    ku: { whatIsIt: 'Linux sîستemek xebitandinê ye, wek Windows an macOS, lê belaş e û çavkaniyên kêmtir bikar tîne.', documents: [] },
  },
  'dem-sites-officiels': {
    vi: { whatIsIt: 'Tại Pháp, nhiều thủ tục hành chính (gia đình, sức khỏe, việc làm, nhà ở, giấy tờ...) giờ đây được thực hiện trên internet thay vì tại quầy.', documents: [] },
    ro: { whatIsIt: 'În Franța, multe demersuri administrative se fac acum pe internet în loc de la ghișeu.', documents: [] },
    pl: { whatIsIt: 'We Francji wiele formalności administracyjnych odbywa się teraz przez internet zamiast przy okienku.', documents: [] },
    ku: { whatIsIt: 'Li Fransayê, gelek karên îdarî niha li ser înternetê tên kirin.', documents: [] },
  },
  'dem-caf': {
    vi: { whatIsIt: 'CAF trả tiền cho các gia đình và người có thu nhập thấp: trợ cấp nhà ở, trợ cấp trẻ em, trợ cấp hoạt động...', documents: ['Số an sinh xã hội', 'Địa chỉ email', 'RIB (thông tin tài khoản ngân hàng)', 'Giấy chứng nhận nơi cư trú gần đây'] },
    ro: { whatIsIt: 'CAF plătește bani familiilor și persoanelor cu venituri mici: ajutor de locuință, ajutor pentru copii, prima de activitate...', documents: ['Numărul de securitate socială', 'Adresă de email', 'RIB (extras de identitate bancară)', 'Dovadă de domiciliu recentă'] },
    pl: { whatIsIt: 'CAF wypłaca pieniądze rodzinom i osobom o niskich dochodach: pomoc mieszkaniowa, pomoc na dzieci, premia aktywności...', documents: ['Numer ubezpieczenia społecznego', 'Adres e-mail', 'RIB (dane bankowe)', 'Aktualne potwierdzenie zamieszkania'] },
    ku: { whatIsIt: 'CAF ji malbatan û kesên bi dahata kêm re pere dide.', documents: ['Hejmara ewlekariya civakî', 'Navnîşana e-nameyê', 'RIB', 'Belgeya niştecihiyê ya nûjen'] },
  },
  'dem-cpam': {
    vi: { whatIsIt: 'CPAM hoàn trả một phần chi phí y tế của bạn (bác sĩ, hiệu thuốc, bệnh viện). Nó cũng cấp thẻ Vitale.', documents: ['Số an sinh xã hội', 'Giấy tờ tùy thân', 'Địa chỉ email'] },
    ro: { whatIsIt: 'CPAM rambursează o parte din cheltuielile tale medicale. De asemenea, eliberează cardul Vitale.', documents: ['Numărul de securitate socială', 'Act de identitate', 'Adresă de email'] },
    pl: { whatIsIt: 'CPAM zwraca część kosztów medycznych. Wydaje również kartę Vitale.', documents: ['Numer ubezpieczenia społecznego', 'Dokument tożsamości', 'Adres e-mail'] },
    ku: { whatIsIt: 'CPAM beşek ji lêçûnên te yên bijîjkî vedigerîne.', documents: ['Hejmara ewlekariya civakî', 'Belgeya nasnameyê', 'Navnîşana e-nameyê'] },
  },
  'dem-carsat': {
    vi: { whatIsIt: 'CARSAT lo về lương hưu tương lai của bạn: nó tính số năm và quý bạn đã làm việc.', documents: ['Số an sinh xã hội', 'Địa chỉ email', 'Bảng tóm tắt sự nghiệp nếu có'] },
    ro: { whatIsIt: 'CARSAT se ocupă de pensia ta viitoare: numără anii și trimestrele în care lucrezi.', documents: ['Numărul de securitate socială', 'Adresă de email', 'Extras de carieră dacă ai unul'] },
    pl: { whatIsIt: 'CARSAT zajmuje się Twoją przyszłą emeryturą: liczy lata i kwartały pracy.', documents: ['Numer ubezpieczenia społecznego', 'Adres e-mail', 'Wyciąg z kariery zawodowej jeśli posiadasz'] },
    ku: { whatIsIt: 'CARSAT li teqawidiya te ya pêşerojê dinêre.', documents: ['Hejmara ewlekariya civakî', 'Navnîşana e-nameyê', 'Rapora kariyerê heke hebe'] },
  },
  'dem-lia': {
    vi: { whatIsIt: 'LiA là tên mạng lưới xe buýt và tàu điện tại Le Havre. Đây là phương tiện chính để di chuyển trong thành phố mà không cần xe hơi.', documents: ['Giấy tờ tùy thân', 'Chứng minh nơi cư trú', 'Giấy tờ liên quan đến hoàn cảnh của bạn'] },
    ro: { whatIsIt: 'LiA este numele rețelei de autobuze și tramvaie din Le Havre.', documents: ['Act de identitate', 'Dovadă de domiciliu', 'Documente legate de situația ta'] },
    pl: { whatIsIt: 'LiA to nazwa sieci autobusów i tramwajów w Le Havre.', documents: ['Dokument tożsamości', 'Potwierdzenie zamieszkania', 'Dokumenty związane z Twoją sytuacją'] },
    ku: { whatIsIt: 'LiA navê torgilokê otobês û tramwayê li Le Havre ye.', documents: ['Belgeya nasnameyê', 'Belgeya niştecihiyê', 'Belgeyên têkildarî rewşa te'] },
  },
  'dem-impots': {
    vi: { whatIsIt: 'Tại Pháp, hầu như mọi người phải khai báo thu nhập hàng năm, ngay cả những người có ít tiền.', documents: ['Số thuế', 'Địa chỉ email', 'Chứng minh thu nhập trong năm'] },
    ro: { whatIsIt: 'În Franța, aproape toată lumea trebuie să-și declare veniturile în fiecare an, chiar și persoanele cu puțini bani.', documents: ['Numărul fiscal', 'Adresă de email', 'Dovezi de venit pe anul respectiv'] },
    pl: { whatIsIt: 'We Francji prawie każdy musi co roku zadeklarować swoje dochody.', documents: ['Numer podatkowy', 'Adres e-mail', 'Potwierdzenia dochodów za rok'] },
    ku: { whatIsIt: 'Li Fransayê, hema hema hemû kes divê her sal dahata xwe ragihîne.', documents: ['Hejmara bacê', 'Navnîşana e-nameyê', 'Belgeyên dahata salê'] },
  },
  'dem-france-travail': {
    vi: { whatIsIt: 'France Travail (trước đây gọi là Pôle Emploi) giúp tìm việc làm và có thể trả trợ cấp nếu bạn mất việc.', documents: ['Giấy tờ tùy thân', 'Số an sinh xã hội', 'CV nếu có', 'Địa chỉ email'] },
    ro: { whatIsIt: 'France Travail (fostul Pôle Emploi) ajută la căutarea unui loc de muncă.', documents: ['Act de identitate', 'Numărul de securitate socială', 'CV dacă ai unul', 'Adresă de email'] },
    pl: { whatIsIt: 'France Travail (dawniej Pôle Emploi) pomaga w szukaniu pracy.', documents: ['Dokument tożsamości', 'Numer ubezpieczenia społecznego', 'CV jeśli posiadasz', 'Adres e-mail'] },
    ku: { whatIsIt: 'France Travail (berê Pôle Emploi) alîkariya lêgerîna karî dike.', documents: ['Belgeya nasnameyê', 'Hejmara ewlekariya civakî', 'CV heke hebe', 'Navnîşana e-nameyê'] },
  },
  'dem-mdph': {
    vi: { whatIsIt: 'MDPH giúp đỡ người khuyết tật: công nhận chính thức về khuyết tật, hỗ trợ tài chính, thẻ đặc biệt.', documents: ['Giấy tờ tùy thân', 'Giấy chứng nhận y tế dưới 12 tháng', 'Chứng minh nơi cư trú'] },
    ro: { whatIsIt: 'MDPH ajută persoanele cu dizabilități.', documents: ['Act de identitate', 'Certificat medical de mai puțin de 12 luni', 'Dovadă de domiciliu'] },
    pl: { whatIsIt: 'MDPH pomaga osobom niepełnosprawnym.', documents: ['Dokument tożsamości', 'Zaświadczenie lekarskie nie starsze niż 12 miesięcy', 'Potwierdzenie zamieszkania'] },
    ku: { whatIsIt: 'MDPH alîkariya kesên bi seqetî re dike.', documents: ['Belgeya nasnameyê', 'Belgeya bijîjkî ya di bin 12 mehan de', 'Belgeya niştecihiyê'] },
  },
  'dem-mee': {
    vi: { whatIsIt: 'Trang web này liệt kê các ngày mà các công ty đến tuyển dụng trực tiếp gần bạn.', documents: ['CV cập nhật', 'Mã số France Travail của bạn nếu có'] },
    ro: { whatIsIt: 'Acest site listează zilele în care companiile vin să recruteze direct lângă tine.', documents: ['CV actualizat', 'Identificatorul tău France Travail dacă ai unul'] },
    pl: { whatIsIt: 'Ta strona wymienia dni, w których firmy przychodzą rekrutować bezpośrednio w Twojej okolicy.', documents: ['Aktualne CV', 'Twój identyfikator France Travail jeśli posiadasz'] },
    ku: { whatIsIt: 'Ev malper rojên ku pargîdanî tên karkirin li nêzîkî te nîşan dide.', documents: ['CV nûjen', 'Naskera te ya France Travail heke hebe'] },
  },
  'dem-logement-social': {
    vi: { whatIsIt: 'Nhà ở xã hội (HLM) là nhà ở có tiền thuê rẻ hơn nhà ở tư nhân, dành cho người có thu nhập thấp.', documents: ['Giấy tờ tùy thân', 'Chứng minh nguồn lực của cả hộ gia đình', 'Sổ gia đình nếu có'] },
    ro: { whatIsIt: 'Locuința socială (HLM) este o locuință cu chirie mai mică decât locuința privată.', documents: ['Act de identitate', 'Dovezi de resurse ale întregii gospodării', 'Livret de familie dacă ai unul'] },
    pl: { whatIsIt: 'Mieszkanie socjalne (HLM) to mieszkanie z niższym czynszem niż mieszkanie prywatne.', documents: ['Dokument tożsamości', 'Dowody zasobów całego gospodarstwa domowego', 'Książeczka rodzinna jeśli posiadasz'] },
    ku: { whatIsIt: 'Xaniyê civakî (HLM) xaniyekî bi kirêyeke kêmtir e.', documents: ['Belgeya nasnameyê', 'Belgeyên çavkaniyên tevahiya malbatê', 'Pirtûka malbatê heke hebe'] },
  },
  'dem-mobilite': {
    vi: { whatIsIt: 'Không có phương tiện di chuyển thường là trở ngại để tìm việc làm hoặc theo học đào tạo.', documents: ['Thư giới thiệu từ cố vấn', 'Giấy tờ tùy thân'] },
    ro: { whatIsIt: 'Lipsa unui mijloc de transport este adesea un obstacol pentru găsirea unui loc de muncă sau urmarea unei formări.', documents: ['Scrisoare de orientare de la un consilier', 'Act de identitate'] },
    pl: { whatIsIt: 'Brak środka transportu jest często przeszkodą w znalezieniu pracy lub szkolenia.', documents: ['List polecający od doradcy', 'Dokument tożsamości'] },
    ku: { whatIsIt: 'Nebûna amûra tevgerê pir caran asteng e ji bo dîtina kar an perwerdehiyê.', documents: ['Nameyeke rêberiyê ji şêwirmendekî', 'Belgeya nasnameyê'] },
  },
  'dem-remuneration-normandie': {
    vi: { whatIsIt: 'Nếu bạn theo học một khóa đào tạo do Vùng Normandie tài trợ và không được France Travail bồi thường, bạn có thể được trả lương trong quá trình đào tạo.', documents: ['Thông tin đăng nhập do tổ chức đào tạo của bạn cung cấp', 'RIB'] },
    ro: { whatIsIt: 'Dacă urmezi o formare finanțată de Regiunea Normandia și nu ești indemnizat de France Travail, poți fi plătit în timpul formării.', documents: ['Datele de conectare furnizate de organizația ta de formare', 'RIB'] },
    pl: { whatIsIt: 'Jeśli uczestniczysz w szkoleniu finansowanym przez Region Normandia, możesz otrzymywać wynagrodzenie podczas szkolenia.', documents: ['Dane logowania przekazane przez organizację szkoleniową', 'RIB'] },
    ku: { whatIsIt: 'Heke tu perwerdehiyeke ku Herêma Normandiyê fînans dike dişopînî, tu dikarî di dema perwerdehiyê de meaş bistînî.', documents: ['Naskerên ku saziya te ya perwerdehiyê pêşkêş kirine', 'RIB'] },
  },
  'dem-ecole': {
    vi: { whatIsIt: 'Nếu con bạn đi học tại Le Havre, căng tin và việc trông trẻ trước/sau giờ học không tự động.', documents: ['Giấy chứng nhận hệ số gia đình CAF dưới 2 tháng', 'Địa chỉ email', 'Sổ gia đình'] },
    ro: { whatIsIt: 'Dacă ai copii școlarizați în Le Havre, cantina și supravegherea înainte/după școală nu sunt automate.', documents: ['Certificat de coeficient familial CAF de mai puțin de 2 luni', 'Adresă de email', 'Livret de familie'] },
    pl: { whatIsIt: 'Jeśli masz dzieci uczące się w Le Havre, stołówka i opieka przed/po szkole nie są automatyczne.', documents: ['Zaświadczenie o współczynniku rodzinnym CAF nie starsze niż 2 miesiące', 'Adres e-mail', 'Książeczka rodzinna'] },
    ku: { whatIsIt: 'Heke zarokên te li Le Havre dixwînin, kantîn û çavdêrî ne otomatîk in.', documents: ['Belgeya CAF ya kêmtir ji 2 mehan', 'Navnîşana e-nameyê', 'Pirtûka malbatê'] },
  },
  'dem-titre-sejour': {
    vi: { whatIsIt: 'Giấy phép cư trú là tài liệu cho phép một người nước ngoài sống hợp pháp tại Pháp.', documents: ['Hộ chiếu', 'Chứng minh nơi cư trú', 'Ảnh chân dung gần đây', 'Địa chỉ email'] },
    ro: { whatIsIt: 'Permisul de ședere este documentul care autorizează o persoană străină să locuiască legal în Franța.', documents: ['Pașaport', 'Dovadă de domiciliu', 'Fotografie de identitate recentă', 'Adresă de email'] },
    pl: { whatIsIt: 'Zezwolenie na pobyt to dokument uprawniający cudzoziemca do legalnego zamieszkania we Francji.', documents: ['Paszport', 'Potwierdzenie zamieszkania', 'Aktualne zdjęcie', 'Adres e-mail'] },
    ku: { whatIsIt: 'Destûra rûniştinê belgeya ku kesekî biyanî destûr dide ku bi qanûnî li Fransayê bijî.', documents: ['Pasaport', 'Belgeya niştecihiyê', 'Wêneyê nasnameyê yê nûjen', 'Navnîşana e-nameyê'] },
  },
  'dem-casier-judiciaire': {
    vi: { whatIsIt: 'Lý lịch tư pháp là tài liệu chứng minh bạn không có án tích.', documents: ['Họ tên, ngày và nơi sinh chính xác'] },
    ro: { whatIsIt: 'Cazierul judiciar este un document care dovedește că nu ai condamnări.', documents: ['Nume, prenume, data și locul nașterii exacte'] },
    pl: { whatIsIt: 'Rejestr karny to dokument potwierdzający brak skazań.', documents: ['Dokładne imię, nazwisko, data i miejsce urodzenia'] },
    ku: { whatIsIt: 'Tomara edlî belgeyek e ku îspat dike tu tu sûc nînî.', documents: ['Nav, paşnav, roj û cihê jidayikbûnê yê rast'] },
  },
  'dem-carte-identite': {
    vi: { whatIsIt: 'Thẻ căn cước chứng minh bạn là ai tại Pháp.', documents: ['Ảnh chân dung chuẩn gần đây', 'Chứng minh nơi cư trú', 'Thẻ căn cước cũ nếu có'] },
    ro: { whatIsIt: 'Cartea de identitate dovedește cine ești în Franța.', documents: ['Fotografie de identitate recentă standard', 'Dovadă de domiciliu', 'Cartea de identitate veche dacă ai una'] },
    pl: { whatIsIt: 'Dowód osobisty potwierdza, kim jesteś we Francji.', documents: ['Aktualne standardowe zdjęcie', 'Potwierdzenie zamieszkania', 'Stary dowód osobisty jeśli posiadasz'] },
    ku: { whatIsIt: 'Kabra nasnameyê îspat dike ku tu li Fransayê kî yî.', documents: ['Wêneyê nasnameyê yê standard nûjen', 'Belgeya niştecihiyê', 'Kabra kevn heke hebe'] },
  },
}
for (const id in WHATISIT_BATCH2) {
  for (const lang in WHATISIT_BATCH2[id]) {
    MODULE_TRANSLATIONS[id][lang] = { ...MODULE_TRANSLATIONS[id][lang], ...WHATISIT_BATCH2[id][lang] }
  }
}


const WHATISIT_BATCH3 = {
  'app-linux': {
    sw: { whatIsIt: 'Linux ni mfumo wa uendeshaji, kama Windows au macOS, lakini ni bure na hutumia rasilimali chache.', documents: [] },
    wo: { whatIsIt: 'Linux mooy sistem bu operation, ni Windows walla macOS, waaye dafa gratis te dafa jëfandikoo doole yu néew.', documents: [] },
    ka: { whatIsIt: 'Linux არის ოპერაციული სისტემა, Windows-ის ან macOS-ის მსგავსად, მაგრამ უფასოა და ნაკლებ რესურსს მოიხმარს.', documents: [] },
    hy: { whatIsIt: 'Linux-ը գործառնական համակարգ է, ինչպես Windows-ը կամ macOS-ը, բայց այն անվճար է և ավելի քիչ ռեսուրսներ է սպառում։', documents: [] },
    ta: { whatIsIt: 'லினக்ஸ் என்பது விண்டோஸ் அல்லது macOS போன்ற ஒரு இயக்க முறைமை, ஆனால் இது இலவசம் மற்றும் குறைவான வளங்களைப் பயன்படுத்துகிறது.', documents: [] },
  },
  'dem-sites-officiels': {
    sw: { whatIsIt: 'Nchini Ufaransa, taratibu nyingi za kiutawala sasa hufanyika mtandaoni badala ya kwenye kaunta.', documents: [] },
    wo: { whatIsIt: 'Ci France, lu bare ci jëf yu administration ñu koy def ci internet.', documents: [] },
    ka: { whatIsIt: 'საფრანგეთში ბევრი ადმინისტრაციული პროცედურა ახლა ინტერნეტით ხდება.', documents: [] },
    hy: { whatIsIt: 'Ֆրանսիայում շատ վարչական գործընթացներ այժմ կատարվում են ինտերնետով։', documents: [] },
    ta: { whatIsIt: 'பிரான்சில், பல நிர்வாக நடைமுறைகள் இப்போது இணையத்தில் செய்யப்படுகின்றன.', documents: [] },
  },
  'dem-caf': {
    sw: { whatIsIt: 'CAF hulipa pesa kwa familia na watu wenye kipato kidogo.', documents: ['Namba ya usalama wa jamii', 'Anwani ya barua pepe', 'RIB', 'Uthibitisho wa makazi wa hivi karibuni'] },
    wo: { whatIsIt: 'CAF dafay fey xaalis njabot yi ak ñi am xaalis bu néew.', documents: ['Nimero sécurité sociale', 'Adres email', 'RIB', 'Preuve résidence bu bees'] },
    ka: { whatIsIt: 'CAF ფულს უხდის ოჯახებს და დაბალშემოსავლიან პირებს.', documents: ['სოციალური დაზღვევის ნომერი', 'ელფოსტის მისამართი', 'RIB', 'ბინადრობის ბოლოდროინდელი დამადასტურებელი'] },
    hy: { whatIsIt: 'CAF-ը փող է վճարում ընտանիքներին և ցածր եկամուտ ունեցող մարդկանց։', documents: ['Սոցիալական ապահովագրության համարը', 'Էլ. փոստի հասցե', 'RIB', 'Բնակության վերջին ապացույց'] },
    ta: { whatIsIt: 'CAF குடும்பங்களுக்கும் குறைந்த வருமானம் உள்ளவர்களுக்கும் பணம் வழங்குகிறது.', documents: ['சமூக பாதுகாப்பு எண்', 'மின்னஞ்சல் முகவரி', 'RIB', 'சமீபத்திய குடியிருப்பு சான்று'] },
  },
  'dem-cpam': {
    sw: { whatIsIt: 'CPAM hurejesha sehemu ya gharama zako za matibabu.', documents: ['Namba ya usalama wa jamii', 'Kitambulisho', 'Anwani ya barua pepe'] },
    wo: { whatIsIt: 'CPAM dafay delloo benn wàll ci say dépense santé.', documents: ['Nimero sécurité sociale', 'Piece identité', 'Adres email'] },
    ka: { whatIsIt: 'CPAM აანაზღაურებს თქვენი სამედიცინო ხარჯების ნაწილს.', documents: ['სოციალური დაზღვევის ნომერი', 'პირადობის დამადასტურებელი', 'ელფოსტის მისამართი'] },
    hy: { whatIsIt: 'CPAM-ը փոխհատուցում է ձեր բժշկական ծախսերի մի մասը։', documents: ['Սոցիալական ապահովագրության համարը', 'Անձնագիր', 'Էլ. փոստի հասցե'] },
    ta: { whatIsIt: 'CPAM உங்கள் மருத்துவ செலவுகளில் ஒரு பகுதியை திருப்பி செலுத்துகிறது.', documents: ['சமூக பாதுகாப்பு எண்', 'அடையாள ஆவணம்', 'மின்னஞ்சல் முகவரி'] },
  },
  'dem-carsat': {
    sw: { whatIsIt: 'CARSAT inashughulikia pensheni yako ya baadaye.', documents: ['Namba ya usalama wa jamii', 'Anwani ya barua pepe', 'Taarifa ya kazi ikiwa unayo'] },
    wo: { whatIsIt: 'CARSAT dafay wottu sa retret bu ëllëg.', documents: ['Nimero sécurité sociale', 'Adres email', 'Relevé carrière su fekkee am'] },
    ka: { whatIsIt: 'CARSAT ზრუნავს თქვენს მომავალ პენსიაზე.', documents: ['სოციალური დაზღვევის ნომერი', 'ელფოსტის მისამართი', 'კარიერის ამონაწერი თუ გაქვთ'] },
    hy: { whatIsIt: 'CARSAT-ը հոգում է ձեր ապագա կենսաթոշակի մասին։', documents: ['Սոցիալական ապահովագրության համարը', 'Էլ. փոստի հասցե', 'Կարիերայի քաղվածք, եթե ունեք'] },
    ta: { whatIsIt: 'CARSAT உங்கள் எதிர்கால ஓய்வூதியத்தை கவனிக்கிறது.', documents: ['சமூக பாதுகாப்பு எண்', 'மின்னஞ்சல் முகவரி', 'தொழில் அறிக்கை இருந்தால்'] },
  },
  'dem-lia': {
    sw: { whatIsIt: 'LiA ni jina la mtandao wa mabasi na tramu huko Le Havre.', documents: ['Kitambulisho', 'Uthibitisho wa makazi', 'Nyaraka zinazohusiana na hali yako'] },
    wo: { whatIsIt: 'LiA mooy tur réseau bis ak tram ci Le Havre.', documents: ['Piece identité', 'Preuve résidence', 'Piece yu am jëmm ak sa situation'] },
    ka: { whatIsIt: 'LiA არის Le Havre-ის ავტობუსისა და ტრამვაის ქსელის სახელი.', documents: ['პირადობის დამადასტურებელი', 'ბინადრობის დამადასტურებელი', 'თქვენს მდგომარეობასთან დაკავშირებული საბუთები'] },
    hy: { whatIsIt: 'LiA-ն Le Havre-ի ավտոբուսի և տրամվայի ցանցի անվանումն է։', documents: ['Անձնագիր', 'Բնակության ապացույց', 'Ձեր իրավիճակին վերաբերող փաստաթղթեր'] },
    ta: { whatIsIt: 'LiA என்பது லு ஆவ்ரில் பேருந்து மற்றும் ட்ராம் நெட்வொர்க்கின் பெயர்.', documents: ['அடையாள ஆவணம்', 'குடியிருப்பு சான்று', 'உங்கள் நிலைமை தொடர்பான ஆவணங்கள்'] },
  },
  'dem-impots': {
    sw: { whatIsIt: 'Nchini Ufaransa, karibu kila mtu lazima atangaze kipato chake kila mwaka.', documents: ['Namba ya kodi', 'Anwani ya barua pepe', 'Uthibitisho wa kipato cha mwaka'] },
    wo: { whatIsIt: 'Ci France, ku bare war a déclarer sa revenu at mu nekk.', documents: ['Nimero fiscal', 'Adres email', 'Preuve revenu bu at bi'] },
    ka: { whatIsIt: 'საფრანგეთში თითქმის ყველამ უნდა გამოაცხადოს შემოსავალი ყოველწლიურად.', documents: ['საგადასახადო ნომერი', 'ელფოსტის მისამართი', 'წლის შემოსავლის დამადასტურებელი'] },
    hy: { whatIsIt: 'Ֆրանսիայում գրեթե բոլորը պետք է ամեն տարի հայտարարեն իրենց եկամուտները։', documents: ['Հարկային համարը', 'Էլ. փոստի հասցե', 'Տարվա եկամտի ապացույցներ'] },
    ta: { whatIsIt: 'பிரான்சில், கிட்டத்தட்ட அனைவரும் ஒவ்வொரு ஆண்டும் தங்கள் வருமானத்தை அறிவிக்க வேண்டும்.', documents: ['வரி எண்', 'மின்னஞ்சல் முகவரி', 'ஆண்டு வருமான சான்றுகள்'] },
  },
  'dem-france-travail': {
    sw: { whatIsIt: 'France Travail (zamani Pôle Emploi) husaidia kutafuta kazi.', documents: ['Kitambulisho', 'Namba ya usalama wa jamii', 'CV ikiwa unayo', 'Anwani ya barua pepe'] },
    wo: { whatIsIt: 'France Travail (ca njëkk France Pôle Emploi) dafay wallu ci wutli liggéey.', documents: ['Piece identité', 'Nimero sécurité sociale', 'CV su fekkee am', 'Adres email'] },
    ka: { whatIsIt: 'France Travail (ყოფილი Pôle Emploi) ეხმარება სამუშაოს ძებნაში.', documents: ['პირადობის დამადასტურებელი', 'სოციალური დაზღვევის ნომერი', 'CV თუ გაქვთ', 'ელფოსტის მისამართი'] },
    hy: { whatIsIt: 'France Travail-ը (նախկին Pôle Emploi) օգնում է աշխատանք փնտրելիս։', documents: ['Անձնագիր', 'Սոցիալական ապահովագրության համարը', 'CV, եթե ունեք', 'Էլ. փոստի հասցե'] },
    ta: { whatIsIt: 'France Travail (முன்பு Pôle Emploi) வேலை தேடுவதற்கு உதவுகிறது.', documents: ['அடையாள ஆவணம்', 'சமூக பாதுகாப்பு எண்', 'CV இருந்தால்', 'மின்னஞ்சல் முகவரி'] },
  },
  'dem-mdph': {
    sw: { whatIsIt: 'MDPH husaidia watu wenye ulemavu.', documents: ['Kitambulisho', 'Cheti cha matibabu chini ya miezi 12', 'Uthibitisho wa makazi'] },
    wo: { whatIsIt: 'MDPH dafay wallu ñi am handicap.', documents: ['Piece identité', 'Certificat médical bu ndaw 12 weer', 'Preuve résidence'] },
    ka: { whatIsIt: 'MDPH ეხმარება შშმ პირებს.', documents: ['პირადობის დამადასტურებელი', 'სამედიცინო ცნობა 12 თვეზე ნაკლები', 'ბინადრობის დამადასტურებელი'] },
    hy: { whatIsIt: 'MDPH-ը օգնում է հաշմանդամություն ունեցող մարդկանց։', documents: ['Անձնագիր', 'Բժշկական վկայական 12 ամսից պակաս', 'Բնակության ապացույց'] },
    ta: { whatIsIt: 'MDPH மாற்றுத்திறனாளிகளுக்கு உதவுகிறது.', documents: ['அடையாள ஆவணம்', '12 மாதங்களுக்கும் குறைவான மருத்துவ சான்றிதழ்', 'குடியிருப்பு சான்று'] },
  },
  'dem-mee': {
    sw: { whatIsIt: 'Tovuti hii inaorodhesha siku ambazo makampuni huja kuajiri moja kwa moja karibu nawe.', documents: ['CV iliyosasishwa', 'Kitambulisho chako cha France Travail ikiwa unacho'] },
    wo: { whatIsIt: 'Site bii day wone bis yi entreprise yi dañuy dikk ngir recruter ci sa wet.', documents: ['CV bu bees', 'Identifiant France Travail su fekkee am'] },
    ka: { whatIsIt: 'ეს საიტი ჩამოთვლის დღეებს, როცა კომპანიები მოდიან თქვენთან ახლოს პირდაპირი დასაქმებისთვის.', documents: ['განახლებული CV', 'France Travail იდენტიფიკატორი თუ გაქვთ'] },
    hy: { whatIsIt: 'Այս կայքը թվարկում է այն օրերը, երբ ընկերությունները գալիս են ուղղակիորեն ձեզ մոտ աշխատանքի ընդունելու համար։', documents: ['Թարմացված CV', 'Ձեր France Travail նույնացուցիչը, եթե ունեք'] },
    ta: { whatIsIt: 'இந்த தளம் நிறுவனங்கள் உங்களுக்கு அருகில் நேரடியாக ஆட்சேர்ப்பு செய்ய வரும் நாட்களை பட்டியலிடுகிறது.', documents: ['புதுப்பிக்கப்பட்ட CV', 'உங்கள் France Travail அடையாளங்காட்டி இருந்தால்'] },
  },
  'dem-logement-social': {
    sw: { whatIsIt: 'Nyumba za kijamii (HLM) ni nyumba zenye kodi ya chini kuliko nyumba binafsi.', documents: ['Kitambulisho', 'Uthibitisho wa rasilimali za kaya nzima', 'Kitabu cha familia ikiwa unacho'] },
    wo: { whatIsIt: 'Kër social (HLM) mooy kër bu loyer wu ndaw.', documents: ['Piece identité', 'Preuve ressources njabot gi', 'Livret njabot su fekkee am'] },
    ka: { whatIsIt: 'სოციალური საცხოვრებელი (HLM) არის საცხოვრებელი დაბალი ქირით.', documents: ['პირადობის დამადასტურებელი', 'მთელი ოჯახის რესურსების დამადასტურებელი', 'საოჯახო წიგნაკი თუ გაქვთ'] },
    hy: { whatIsIt: 'Սոցիալական բնակարանը (HLM) ավելի ցածր վարձակալությամբ բնակարան է։', documents: ['Անձնագիր', 'Ամբողջ ընտանիքի միջոցների ապացույցներ', 'Ընտանեկան գրքույկ, եթե ունեք'] },
    ta: { whatIsIt: 'சமூக வீட்டுவசதி (HLM) என்பது தனியார் வீட்டுவசதியை விட குறைந்த வாடகை கொண்ட வீடு.', documents: ['அடையாள ஆவணம்', 'முழு குடும்பத்தின் வளங்களின் சான்றுகள்', 'குடும்பப் புத்தகம் இருந்தால்'] },
  },
  'dem-mobilite': {
    sw: { whatIsIt: 'Kutokuwa na njia ya usafiri mara nyingi ni kikwazo cha kupata kazi au mafunzo.', documents: ['Barua ya mwongozo kutoka kwa mshauri', 'Kitambulisho'] },
    wo: { whatIsIt: 'Amul moyen transport dafay jur problème ci wutli liggéey walla formation.', documents: ['Lettre orientation bu conseiller', 'Piece identité'] },
    ka: { whatIsIt: 'ტრანსპორტის საშუალების არქონა ხშირად დაბრკოლებაა სამუშაოს ან სწავლების საპოვნელად.', documents: ['კონსულტანტის სარეკომენდაციო წერილი', 'პირადობის დამადასტურებელი'] },
    hy: { whatIsIt: 'Տրանսպորտային միջոցի բացակայությունը հաճախ խոչընդոտ է աշխատանք կամ վերապատրաստում գտնելու համար։', documents: ['Խորհրդատուի ուղղորդման նամակ', 'Անձնագիր'] },
    ta: { whatIsIt: 'போக்குவரத்து வழி இல்லாதது பெரும்பாலும் வேலை அல்லது பயிற்சி கண்டறிவதற்கு தடையாக இருக்கும்.', documents: ['ஆலோசகரிடமிருந்து வழிகாட்டல் கடிதம்', 'அடையாள ஆவணம்'] },
  },
  'dem-remuneration-normandie': {
    sw: { whatIsIt: 'Ikiwa unafuata mafunzo yanayofadhiliwa na Mkoa wa Normandie, unaweza kulipwa wakati wa mafunzo.', documents: ['Taarifa za kuingia zilizotolewa na shirika lako la mafunzo', 'RIB'] },
    wo: { whatIsIt: 'Su nga topp formation bu Région Normandie fey, mën nga am fey ci diggante formation bi.', documents: ['Identifiants bu ton organisme formation joxe', 'RIB'] },
    ka: { whatIsIt: 'თუ თქვენ გადიხართ ნორმანდიის რეგიონის მიერ დაფინანსებულ მომზადებას, შეგიძლიათ მიიღოთ ხელფასი მომზადების დროს.', documents: ['თქვენი სასწავლო ორგანიზაციის მიერ მოწოდებული მონაცემები', 'RIB'] },
    hy: { whatIsIt: 'Եթե դուք հետևում եք Նորմանդիայի շրջանի կողմից ֆինանսավորվող վերապատրաստմանը, կարող եք վճարվել վերապատրաստման ընթացքում։', documents: ['Ձեր վերապատրաստման կազմակերպության կողմից տրված տվյալներ', 'RIB'] },
    ta: { whatIsIt: 'நீங்கள் நோர்மண்டி பிராந்தியத்தால் நிதியளிக்கப்பட்ட பயிற்சியைப் பின்பற்றினால், பயிற்சியின் போது ஊதியம் பெறலாம்.', documents: ['உங்கள் பயிற்சி அமைப்பால் வழங்கப்பட்ட சான்றுகள்', 'RIB'] },
  },
  'dem-ecole': {
    sw: { whatIsIt: 'Ikiwa una watoto wanaosoma Le Havre, kantini na uangalizi kabla/baada ya shule sio moja kwa moja.', documents: ['Cheti cha mgawo wa familia cha CAF chini ya miezi 2', 'Anwani ya barua pepe', 'Kitabu cha familia'] },
    wo: { whatIsIt: 'Su am doom ci jàng Le Havre, cantine ak garde bunu automatique.', documents: ['Attestation CAF bu ndaw 2 weer', 'Adres email', 'Livret njabot'] },
    ka: { whatIsIt: 'თუ თქვენი შვილები სწავლობენ Le Havre-ში, სასადილო და ზედამხედველობა არ არის ავტომატური.', documents: ['CAF-ის ოჯახური კოეფიციენტის ცნობა 2 თვეზე ნაკლები', 'ელფოსტის მისამართი', 'საოჯახო წიგნაკი'] },
    hy: { whatIsIt: 'Եթե ձեր երեխաները սովորում են Le Havre-ում, ճաշարանը և հսկողությունը դպրոցից առաջ/հետո ավտոմատ չեն։', documents: ['CAF ընտանեկան գործակցի վկայական 2 ամսից պակաս', 'Էլ. փոստի հասցե', 'Ընտանեկան գրքույկ'] },
    ta: { whatIsIt: 'உங்கள் குழந்தைகள் லு ஆவ்ரில் படித்தால், உணவகம் மற்றும் பள்ளிக்கு முன்/பின் கண்காணிப்பு தானாக இல்லை.', documents: ['CAF குடும்ப குணக சான்றிதழ் 2 மாதங்களுக்கும் குறைவானது', 'மின்னஞ்சல் முகவரி', 'குடும்பப் புத்தகம்'] },
  },
  'dem-titre-sejour': {
    sw: { whatIsIt: 'Kibali cha ukaazi ni hati inayomruhusu mtu wa kigeni kuishi kihalali nchini Ufaransa.', documents: ['Pasipoti', 'Uthibitisho wa makazi', 'Picha ya hivi karibuni', 'Anwani ya barua pepe'] },
    wo: { whatIsIt: 'Titre séjour mooy dokiment bi baaxal ku dëkk ci France ci anam légal.', documents: ['Passeport', 'Preuve résidence', 'Photo identité bu bees', 'Adres email'] },
    ka: { whatIsIt: 'ბინადრობის ნებართვა არის დოკუმენტი, რომელიც უცხოელს აძლევს ნებართვას კანონიერად იცხოვროს საფრანგეთში.', documents: ['პასპორტი', 'ბინადრობის დამადასტურებელი', 'ბოლოდროინდელი ფოტოსურათი', 'ელფოსტის მისამართი'] },
    hy: { whatIsIt: 'Կացության թույլտվությունը փաստաթուղթ է, որը թույլ է տալիս օտարերկրացուն օրինականորեն ապրել Ֆրանսիայում։', documents: ['Անձնագիր', 'Բնակության ապացույց', 'Վերջին լուսանկարը', 'Էլ. փոստի հասցե'] },
    ta: { whatIsIt: 'தங்குமிட அனுமதி என்பது ஒரு வெளிநாட்டவரை பிரான்சில் சட்டப்பூர்வமாக வாழ அனுமதிக்கும் ஆவணம்.', documents: ['பாஸ்போர்ட்', 'குடியிருப்பு சான்று', 'சமீபத்திய அடையாள புகைப்படம்', 'மின்னஞ்சல் முகவரி'] },
  },
  'dem-casier-judiciaire': {
    sw: { whatIsIt: 'Rekodi ya jinai ni hati inayothibitisha kuwa huna hukumu.', documents: ['Jina, tarehe na mahali pa kuzaliwa sahihi'] },
    wo: { whatIsIt: 'Kasye judisiyer mooy dokiment bi firndeel danga amul condamnation.', documents: ['Tur, sant, bis ak barab juddu bu wóor'] },
    ka: { whatIsIt: 'ნასამართლობის ცნობა არის დოკუმენტი, რომელიც ადასტურებს, რომ თქვენ არ გყავთ ნასამართლობა.', documents: ['ზუსტი სახელი, გვარი, დაბადების თარიღი და ადგილი'] },
    hy: { whatIsIt: 'Դատական գործի քաղվածքը փաստաթուղթ է, որը ապացուցում է, որ դուք դատվածություն չունեք։', documents: ['Ճշգրիտ անուն, ազգանուն, ծննդյան ամսաթիվ և վայր'] },
    ta: { whatIsIt: 'குற்றவியல் பதிவு என்பது உங்களுக்கு தண்டனை இல்லை என்பதை நிரூபிக்கும் ஆவணம்.', documents: ['சரியான பெயர், பிறந்த தேதி மற்றும் இடம்'] },
  },
  'dem-carte-identite': {
    sw: { whatIsIt: 'Kitambulisho kinathibitisha wewe ni nani nchini Ufaransa.', documents: ['Picha ya kawaida ya hivi karibuni', 'Uthibitisho wa makazi', 'Kitambulisho cha zamani ikiwa unacho'] },
    wo: { whatIsIt: 'Kart didantite dafay firndeel kan nga ci France.', documents: ['Foto identité bu standard bu bees', 'Preuve résidence', 'Kart bu yàgg su fekkee am'] },
    ka: { whatIsIt: 'პირადობის მოწმობა ადასტურებს ვინ ხართ საფრანგეთში.', documents: ['ბოლოდროინდელი სტანდარტული ფოტოსურათი', 'ბინადრობის დამადასტურებელი', 'ძველი პირადობის მოწმობა თუ გაქვთ'] },
    hy: { whatIsIt: 'Անձնագիրը ապացուցում է, թե ով եք դուք Ֆրանսիայում։', documents: ['Վերջին ստանդարտ լուսանկարը', 'Բնակության ապացույց', 'Հին անձնագիր, եթե ունեք'] },
    ta: { whatIsIt: 'அடையாள அட்டை பிரான்சில் நீங்கள் யார் என்பதை நிரூபிக்கிறது.', documents: ['சமீபத்திய தரநிலை அடையாள புகைப்படம்', 'குடியிருப்பு சான்று', 'பழைய அடையாள அட்டை இருந்தால்'] },
  },
}
for (const id in WHATISIT_BATCH3) {
  for (const lang in WHATISIT_BATCH3[id]) {
    MODULE_TRANSLATIONS[id][lang] = { ...MODULE_TRANSLATIONS[id][lang], ...WHATISIT_BATCH3[id][lang] }
  }
}
// ============================================================
// TRADUCTIONS DES 13 NOUVEAUX MODULES — à coller à la toute fin
// de src/data/translations/modules.js (après le dernier bloc
// WHATISIT_BATCH3 existant, avant la fin du fichier).
// Couvre les 12 langues déjà les plus complètes : en, es, pt, ar,
// ru, uk, tr, fa, sq, ti, so, zh. Les 14 langues restantes
// (ur, ps, bn, hi, vi, ro, pl, ku, sw, wo, ka, hy, ta) pourront
// être ajoutées ensuite dans un second lot, comme pour les modules
// existants.
// ============================================================

const NOUVEAUX_MODULES_TRANSLATIONS = {
  'dem-passeport-majeur': {
    en: { title: 'Passport (adult)', description: 'Apply for or renew your French passport, as an adult.' },
    es: { title: 'Pasaporte (adulto)', description: 'Solicitar o renovar tu pasaporte francés, siendo adulto.' },
    pt: { title: 'Passaporte (adulto)', description: 'Solicitar ou renovar o seu passaporte francês, sendo adulto.' },
    ar: { title: 'جواز السفر (بالغ)', description: 'إنشاء أو تجديد جواز سفرك الفرنسي، كشخص بالغ.' },
    ru: { title: 'Паспорт (взрослый)', description: 'Оформление или продление французского паспорта для взрослого.' },
    uk: { title: 'Паспорт (дорослий)', description: 'Оформлення або продовження французького паспорта для дорослого.' },
    tr: { title: 'Pasaport (yetişkin)', description: 'Yetişkin olarak Fransız pasaportunuzu oluşturun veya yenileyin.' },
    fa: { title: 'پاسپورت (بزرگسال)', description: 'صدور یا تمدید پاسپورت فرانسوی خود به\u200cعنوان یک بزرگسال.' },
    sq: { title: 'Pasaporta (i rritur)', description: 'Krijoni ose rinovoni pasaportën tuaj franceze, si i rritur.' },
    ti: { title: 'ፓስፖርት (ዓብይ ሰብ)', description: 'ከም ዓብይ ሰብ፡ ፈረንሳዊ ፓስፖርትካ ምፍጣር ወይ ምሕዳስ።' },
    so: { title: 'Baasaboorka (qof weyn)', description: 'Samee ama cusboonaysii baasaboorkaaga Faransiiska, adigoo qof weyn ah.' },
    zh: { title: '护照（成年人）', description: '作为成年人办理或更新您的法国护照。' }
  },
  'dem-passeport-mineur': {
    en: { title: 'Passport (minor)', description: 'Apply for or renew a passport for a minor child.' },
    es: { title: 'Pasaporte (menor)', description: 'Solicitar o renovar el pasaporte de un hijo menor de edad.' },
    pt: { title: 'Passaporte (menor)', description: 'Solicitar ou renovar o passaporte de um filho menor de idade.' },
    ar: { title: 'جواز السفر (قاصر)', description: 'إنشاء أو تجديد جواز سفر لطفل قاصر.' },
    ru: { title: 'Паспорт (несовершеннолетний)', description: 'Оформление или продление паспорта для несовершеннолетнего ребёнка.' },
    uk: { title: 'Паспорт (неповнолітній)', description: 'Оформлення або продовження паспорта для неповнолітньої дитини.' },
    tr: { title: 'Pasaport (küçük)', description: 'Reşit olmayan bir çocuk için pasaport oluşturun veya yenileyin.' },
    fa: { title: 'پاسپورت (خردسال)', description: 'صدور یا تمدید پاسپورت برای فرزند خردسال.' },
    sq: { title: 'Pasaporta (i mitur)', description: 'Krijoni ose rinovoni pasaportën për një fëmijë të mitur.' },
    ti: { title: 'ፓስፖርት (ትሕቲ ዕድመ)', description: 'ንትሕቲ ዕድመ ውላድ ፓስፖርት ምፍጣር ወይ ምሕዳስ።' },
    so: { title: 'Baasaboorka (qof yar)', description: 'Samee ama cusboonaysii baasaboorka ilmahaaga yar.' },
    zh: { title: '护照（未成年人）', description: '为未成年子女办理或更新护照。' }
  },
  'dem-autorisation-sortie-territoire': {
    en: { title: 'Authorisation to leave the territory (AST)', description: 'Fill in the authorisation allowing a minor to travel abroad without being accompanied by a parent.' },
    es: { title: 'Autorización de salida del territorio (AST)', description: 'Rellenar la autorización que permite a un menor viajar al extranjero sin ir acompañado de un progenitor.' },
    pt: { title: 'Autorização de saída do território (AST)', description: 'Preencher a autorização que permite a um menor viajar ao estrangeiro sem estar acompanhado por um progenitor.' },
    ar: { title: 'تصريح مغادرة الإقليم (AST)', description: 'تعبئة التصريح الذي يسمح لقاصر بالسفر إلى الخارج دون مرافقة أحد الوالدين.' },
    ru: { title: 'Разрешение на выезд из страны (AST)', description: 'Заполнение разрешения, позволяющего несовершеннолетнему выезжать за границу без сопровождения родителя.' },
    uk: { title: 'Дозвіл на виїзд з території (AST)', description: 'Заповнення дозволу, що дозволяє неповнолітньому виїжджати за кордон без супроводу батьків.' },
    tr: { title: 'Ülkeden çıkış izni (AST)', description: 'Bir ebeveyn tarafından refakat edilmeden bir küçüğün yurt dışına seyahat etmesine izin veren belgeyi doldurma.' },
    fa: { title: 'مجوز خروج از کشور (AST)', description: 'تکمیل مجوزی که به خردسال اجازه می\u200cدهد بدون همراهی یکی از والدین به خارج سفر کند.' },
    sq: { title: 'Autorizimi për të dalë nga territori (AST)', description: 'Plotësoni autorizimin që lejon një të mitur të udhëtojë jashtë vendit pa u shoqëruar nga një prind.' },
    ti: { title: 'ፍቓድ ምውጻእ ካብ ግዝኣት (AST)', description: 'ንትሕቲ ዕድመ ብዘይ ወላዲ ናብ ወጻኢ ክገይሽ ዘፍቅድ ፎርም ምምላእ።' },
    so: { title: 'Ogolaanshaha ka bixida dalka (AST)', description: 'Buuxi ogolaanshaha u oggolaanaya ilmo yar inuu safro dibadda isagoo aan la socon waalid.' },
    zh: { title: '离境授权书（AST）', description: '填写授权书，允许未成年人在无父母陪同的情况下出国旅行。' }
  },
  'dem-visa': {
    en: { title: 'Visa', description: 'Understand when a visa is needed and apply on France-Visas.' },
    es: { title: 'Visado', description: 'Comprender cuándo se necesita un visado y solicitarlo en France-Visas.' },
    pt: { title: 'Visto', description: 'Compreender quando é necessário um visto e solicitá-lo em France-Visas.' },
    ar: { title: 'التأشيرة', description: 'فهم متى تحتاج إلى تأشيرة وتقديم طلبك عبر موقع France-Visas.' },
    ru: { title: 'Виза', description: 'Понять, когда нужна виза, и подать заявку на France-Visas.' },
    uk: { title: 'Віза', description: 'Зрозуміти, коли потрібна віза, і подати заявку на France-Visas.' },
    tr: { title: 'Vize', description: 'Ne zaman vizeye ihtiyaç duyulduğunu anlama ve France-Visas üzerinden başvurma.' },
    fa: { title: 'ویزا', description: 'درک اینکه چه زمانی به ویزا نیاز است و درخواست آن در France-Visas.' },
    sq: { title: 'Viza', description: 'Kuptoni kur nevojitet një vizë dhe aplikoni në France-Visas.' },
    ti: { title: 'ቪዛ', description: 'መዓስ ቪዛ ከምዘድሊ ምርዳእን ኣብ France-Visas ምምልካትን።' },
    so: { title: 'Fiisaha', description: 'Fahan goorta fiisaha loo baahan yahay oo ka codso France-Visas.' },
    zh: { title: '签证', description: '了解何时需要签证并在 France-Visas 上申请。' }
  },
  'dem-livret-famille': {
    en: { title: 'Family record book', description: 'Understand what the family record book is for and how to obtain it or request a copy.' },
    es: { title: 'Libro de familia', description: 'Comprender para qué sirve el libro de familia y cómo obtenerlo o pedir una copia.' },
    pt: { title: 'Livro de família', description: 'Compreender para que serve o livro de família e como obtê-lo ou pedir uma cópia.' },
    ar: { title: 'دفتر العائلة', description: 'فهم فائدة دفتر العائلة وكيفية الحصول عليه أو طلب نسخة منه.' },
    ru: { title: 'Семейная книжка', description: 'Понять, для чего нужна семейная книжка, и как её получить или запросить копию.' },
    uk: { title: 'Сімейна книжка', description: 'Зрозуміти, для чого потрібна сімейна книжка, і як її отримати або запросити копію.' },
    tr: { title: 'Aile cüzdanı', description: 'Aile cüzdanının ne işe yaradığını ve nasıl alınacağını veya kopyasının nasıl istenileceğini anlama.' },
    fa: { title: 'دفترچه خانواده', description: 'درک کاربرد دفترچه خانواده و نحوه دریافت یا درخواست کپی آن.' },
    sq: { title: 'Libreza e familjes', description: 'Kuptoni për çfarë shërben libreza e familjes dhe si ta merrni ose të kërkoni një kopje.' },
    ti: { title: 'ደብተር ስድራቤት', description: 'ደብተር ስድራቤት እንታይ ከምዝጠቅምን ብኸመይ ከምዝርከብን ወይ ቅዳሕ ከምዝሕተትን ምርዳእ።' },
    so: { title: 'Buugga qoyska', description: 'Fahan waxa buugga qoyska loo isticmaalo iyo sida loo helo ama loo codsado nuqul.' },
    zh: { title: '家庭手册', description: '了解家庭手册的用途以及如何获取或申请副本。' }
  },
  'dem-reconnaissance-enfant': {
    en: { title: 'Acknowledging a child', description: 'Understand the process for legally acknowledging a child born outside marriage.' },
    es: { title: 'Reconocimiento de un hijo', description: 'Comprender el trámite para reconocer a un hijo nacido fuera del matrimonio.' },
    pt: { title: 'Reconhecimento de um filho', description: 'Compreender o trâmite para reconhecer um filho nascido fora do casamento.' },
    ar: { title: 'الاعتراف بطفل', description: 'فهم الإجراء اللازم للاعتراف بطفل وُلد خارج إطار الزواج.' },
    ru: { title: 'Признание ребёнка', description: 'Понять процедуру признания ребёнка, рождённого вне брака.' },
    uk: { title: 'Визнання дитини', description: 'Зрозуміти процедуру визнання дитини, народженої поза шлюбом.' },
    tr: { title: 'Bir çocuğu tanıma', description: 'Evlilik dışında doğan bir çocuğu resmen tanıma sürecini anlama.' },
    fa: { title: 'شناسایی فرزند', description: 'درک روند شناسایی رسمی فرزندی که خارج از ازدواج به دنیا آمده است.' },
    sq: { title: 'Njohja e një fëmije', description: 'Kuptoni procedurën për të njohur një fëmijë të lindur jashtë martese.' },
    ti: { title: 'ውላድ ምልላይ', description: 'ወጻኢ ሓዳር ንዝተወልደ ውላድ ናይ ምልላይ መስርሕ ምርዳእ።' },
    so: { title: 'Aqoonsiga ilmaha', description: 'Fahan habka lagu aqoonsado ilmo ka dhashay guur ka baxsan.' },
    zh: { title: '认亲（子女认领）', description: '了解婚外出生子女的法律认领程序。' }
  },
  'dem-autorite-parentale': {
    en: { title: 'Parental authority and custody', description: 'Understand the procedures related to parental authority and child custody in case of separation.' },
    es: { title: 'Patria potestad y custodia', description: 'Comprender los trámites relacionados con la patria potestad y la custodia de un hijo en caso de separación.' },
    pt: { title: 'Autoridade parental e custódia', description: 'Compreender os trâmites relacionados com o poder paternal e a custódia de um filho em caso de separação.' },
    ar: { title: 'السلطة الأبوية والحضانة', description: 'فهم الإجراءات المتعلقة بالسلطة الأبوية وحضانة الطفل في حالة الانفصال.' },
    ru: { title: 'Родительские права и опека', description: 'Понять процедуры, связанные с родительскими правами и опекой над ребёнком в случае раздельного проживания.' },
    uk: { title: 'Батьківські права та опіка', description: "Зрозуміти процедури, пов'язані з батьківськими правами та опікою над дитиною у разі розлучення." },
    tr: { title: 'Ebeveyn yetkisi ve velayet', description: 'Ayrılık durumunda ebeveyn yetkisi ve çocuğun velayetiyle ilgili işlemleri anlama.' },
    fa: { title: 'اختیار والدین و حضانت', description: 'درک روندهای مربوط به اختیار والدین و حضانت فرزند در صورت جدایی.' },
    sq: { title: 'Autoriteti prindëror dhe kujdestaria', description: 'Kuptoni procedurat lidhur me autoritetin prindëror dhe kujdestarinë e fëmijës në rast ndarjeje.' },
    ti: { title: 'ስልጣን ወለድን ሓለዋን', description: 'ኣብ እዋን ምፍልላይ ምስ ስልጣን ወለድን ሓለዋ ውላድን ዝተኣሳሰሩ መስርሓት ምርዳእ።' },
    so: { title: 'Awoodda waalidnimada iyo daryeelka', description: 'Fahan hababka la xiriira awoodda waalidnimada iyo daryeelka ilmaha xaaladda kala tagga.' },
    zh: { title: '亲权与监护权', description: '了解分居情况下有关亲权和子女监护权的相关程序。' }
  },
  'dem-mariage-pacs': {
    en: { title: 'Marriage and civil partnership (PACS)', description: 'Understand the procedures to get married or enter a PACS in France.' },
    es: { title: 'Matrimonio y PACS', description: 'Comprender los trámites para casarse o firmar un PACS en Francia.' },
    pt: { title: 'Casamento e PACS', description: 'Compreender os trâmites para casar ou celebrar um PACS em França.' },
    ar: { title: 'الزواج والشراكة المدنية (PACS)', description: 'فهم الإجراءات للزواج أو إبرام شراكة مدنية (PACS) في فرنسا.' },
    ru: { title: 'Брак и гражданское партнёрство (PACS)', description: 'Понять процедуры вступления в брак или заключения PACS во Франции.' },
    uk: { title: 'Шлюб і цивільне партнерство (PACS)', description: 'Зрозуміти процедури укладання шлюбу або PACS у Франції.' },
    tr: { title: 'Evlilik ve Medeni Ortaklık (PACS)', description: "Fransa'da evlenmek veya PACS yapmak için gerekli işlemleri anlama." },
    fa: { title: 'ازدواج و همباشی مدنی (PACS)', description: 'درک روندهای ازدواج یا انعقاد PACS در فرانسه.' },
    sq: { title: 'Martesa dhe PACS', description: "Kuptoni procedurat për t'u martuar ose për të lidhur PACS në Francë." },
    ti: { title: 'ሓዳርን PACSን', description: 'ኣብ ፈረንሳ ንምምርዓው ወይ PACS ንምግባር ዘድልዩ መስርሓት ምርዳእ።' },
    so: { title: 'Guurka iyo PACS', description: 'Fahan hababka loo baahan yahay si loo guursado ama loo sameeyo PACS France.' },
    zh: { title: '结婚与民事互助契约（PACS）', description: '了解在法国结婚或签订民事互助契约（PACS）的相关手续。' }
  },
  'dem-divorce': {
    en: { title: 'Divorce and separation', description: 'Understand the different divorce procedures in France.' },
    es: { title: 'Divorcio y separación', description: 'Comprender los diferentes procedimientos de divorcio en Francia.' },
    pt: { title: 'Divórcio e separação', description: 'Compreender os diferentes procedimentos de divórcio em França.' },
    ar: { title: 'الطلاق والانفصال', description: 'فهم إجراءات الطلاق المختلفة في فرنسا.' },
    ru: { title: 'Развод и раздельное проживание', description: 'Понять различные процедуры развода во Франции.' },
    uk: { title: 'Розлучення та роздільне проживання', description: 'Зрозуміти різні процедури розлучення у Франції.' },
    tr: { title: 'Boşanma ve ayrılık', description: "Fransa'daki farklı boşanma prosedürlerini anlama." },
    fa: { title: 'طلاق و جدایی', description: 'درک روندهای مختلف طلاق در فرانسه.' },
    sq: { title: 'Divorci dhe ndarja', description: 'Kuptoni procedurat e ndryshme të divorcit në Francë.' },
    ti: { title: 'ፍትሕን ምፍልላይን', description: 'ኣብ ፈረንሳ ዝርከቡ ዝተፈላለዩ መስርሓት ፍትሒ ምርዳእ።' },
    so: { title: 'Furiinka iyo kala tagga', description: 'Fahan hababka kala duwan ee furiinka France.' },
    zh: { title: '离婚与分居', description: '了解法国不同的离婚程序。' }
  },
  'dem-changement-adresse': {
    en: { title: 'Change of address', description: 'Report your change of address to several organisations at once.' },
    es: { title: 'Cambio de domicilio', description: 'Notificar tu cambio de domicilio a varios organismos a la vez.' },
    pt: { title: 'Mudança de morada', description: 'Comunicar a sua mudança de morada a vários organismos de uma só vez.' },
    ar: { title: 'تغيير العنوان', description: 'إبلاغ عدة جهات بتغيير عنوانك دفعة واحدة.' },
    ru: { title: 'Смена адреса', description: 'Сообщить о смене адреса сразу нескольким организациям.' },
    uk: { title: 'Зміна адреси', description: 'Повідомити про зміну адреси кільком організаціям одночасно.' },
    tr: { title: 'Adres değişikliği', description: 'Adres değişikliğinizi birkaç kuruma aynı anda bildirme.' },
    fa: { title: 'تغییر آدرس', description: 'اطلاع\u200cرسانی تغییر آدرس خود به چند سازمان به\u200cطور همزمان.' },
    sq: { title: 'Ndryshimi i adresës', description: 'Njoftoni ndryshimin e adresës suaj në disa organizata njëherësh.' },
    ti: { title: 'ለውጢ ኣድራሻ', description: 'ንብዙሓት ትካላት ብሓንሳእ ናይ ኣድራሻ ለውጢ ምሕባር።' },
    so: { title: 'Isbeddelka cinwaanka', description: 'U sheeg isbeddelka cinwaankaaga hay\u2019ado dhowr ah hal mar.' },
    zh: { title: '地址变更', description: '一次性通知多个机构您的地址变更。' }
  },
  'dem-complementaire-sante-solidaire': {
    en: { title: 'Complémentaire santé solidaire (CSS)', description: 'Apply for the Complémentaire santé solidaire on ameli.fr.' },
    es: { title: 'Complémentaire santé solidaire (CSS)', description: 'Solicitar la Complémentaire santé solidaire en ameli.fr.' },
    pt: { title: 'Complémentaire santé solidaire (CSS)', description: 'Solicitar a Complémentaire santé solidaire em ameli.fr.' },
    ar: { title: 'التأمين الصحي التكميلي التضامني (CSS)', description: 'تقديم طلب للحصول على التأمين الصحي التكميلي التضامني عبر موقع ameli.fr.' },
    ru: { title: 'Дополнительная солидарная медстраховка (CSS)', description: 'Подать заявку на CSS на сайте ameli.fr.' },
    uk: { title: 'Додаткова солідарна медстраховка (CSS)', description: 'Подати заявку на CSS на сайті ameli.fr.' },
    tr: { title: 'Dayanışma Sağlık Sigortası (CSS)', description: 'ameli.fr üzerinden Complémentaire santé solidaire başvurusu yapma.' },
    fa: { title: 'بیمه تکمیلی سلامت همبستگی (CSS)', description: 'درخواست بیمه تکمیلی سلامت همبستگی در وب\u200cسایت ameli.fr.' },
    sq: { title: 'Sigurimi shëndetësor plotësues solidar (CSS)', description: 'Aplikoni për Complémentaire santé solidaire në ameli.fr.' },
    ti: { title: 'ተወሳኺ ውሕስነት ጥዕና ምትሕብባር (CSS)', description: 'ኣብ ameli.fr ንCSS ምምልካት።' },
    so: { title: 'Caymiska Caafimaadka Dheeraadka ah ee Iskaashiga (CSS)', description: 'Ka codso CSS bogga ameli.fr.' },
    zh: { title: '团结互助补充医疗保险（CSS）', description: '在 ameli.fr 上申请团结互助补充医疗保险。' }
  },
  'dem-permis-conduire': {
    en: { title: 'Driving licence', description: 'Handle driving licence procedures (duplicate, information record) on the ANTS website.' },
    es: { title: 'Permiso de conducir', description: 'Realizar trámites del permiso de conducir (duplicado, informe) en el sitio de la ANTS.' },
    pt: { title: 'Carta de condução', description: 'Realizar trâmites da carta de condução (duplicado, informação) no site da ANTS.' },
    ar: { title: 'رخصة القيادة', description: 'إنجاز إجراءات رخصة القيادة (نسخة بديلة، كشف معلومات) عبر موقع ANTS.' },
    ru: { title: 'Водительские права', description: 'Оформление процедур, связанных с водительскими правами (дубликат, справка), на сайте ANTS.' },
    uk: { title: 'Водійські права', description: "Оформлення процедур, пов'язаних із водійськими правами (дублікат, довідка), на сайті ANTS." },
    tr: { title: 'Sürücü belgesi', description: 'ANTS web sitesinde ehliyet işlemlerini (nüsha, bilgi belgesi) yapma.' },
    fa: { title: 'گواهینامه رانندگی', description: 'انجام امور گواهینامه رانندگی (المثنی، سابقه) در وب\u200cسایت ANTS.' },
    sq: { title: 'Patenta e makinës', description: 'Kryeni procedurat e patentës (dublikatë, informacion) në faqen e ANTS.' },
    ti: { title: 'ፍቓድ መዘወሪ', description: 'ኣብ ወብሳይት ANTS ንፍቓድ መዘወሪ ዝምልከት መስርሓት ምፍጻም።' },
    so: { title: 'Shatiga darawalnimada', description: 'Ka qabo hawlaha shatiga darawalnimada (nuqul, macluumaad) bogga ANTS.' },
    zh: { title: '驾照', description: '在 ANTS 网站上办理驾照相关事项（补办、信息记录）。' }
  },
  'dem-carte-grise': {
    en: { title: 'Vehicle registration certificate', description: 'Apply for a vehicle registration certificate on the ANTS website.' },
    es: { title: 'Tarjeta gris (matriculación del vehículo)', description: 'Solicitar la matriculación de un vehículo en el sitio de la ANTS.' },
    pt: { title: 'Cartão de circulação (matrícula do veículo)', description: 'Solicitar a matrícula de um veículo no site da ANTS.' },
    ar: { title: 'بطاقة السيارة الرمادية (شهادة التسجيل)', description: 'تقديم طلب لتسجيل مركبة عبر موقع ANTS.' },
    ru: { title: 'Свидетельство о регистрации ТС', description: 'Подать заявку на регистрацию транспортного средства на сайте ANTS.' },
    uk: { title: 'Свідоцтво про реєстрацію ТЗ', description: 'Подати заявку на реєстрацію транспортного засобу на сайті ANTS.' },
    tr: { title: 'Araç ruhsatı', description: 'ANTS web sitesinde araç tescili başvurusu yapma.' },
    fa: { title: 'کارت خاکستری (سند مالکیت خودرو)', description: 'درخواست ثبت خودرو در وب\u200cسایت ANTS.' },
    sq: { title: 'Karta gri (regjistrimi i automjetit)', description: 'Aplikoni për regjistrimin e një automjeti në faqen e ANTS.' },
    ti: { title: 'ካርድ ግራይ (ምዝገባ ተሽከርካሪ)', description: 'ኣብ ወብሳይት ANTS ንምዝገባ ተሽከርካሪ ምምልካት።' },
    so: { title: 'Kaadhka cirridka (diiwaangelinta gaadhiga)', description: 'Ka codso diiwaangelinta gaadhi bogga ANTS.' },
    zh: { title: '车辆登记证（灰卡）', description: '在 ANTS 网站上申请车辆登记。' }
  }
}
for (const id in NOUVEAUX_MODULES_TRANSLATIONS) {
  MODULE_TRANSLATIONS[id] = { ...MODULE_TRANSLATIONS[id], ...NOUVEAUX_MODULES_TRANSLATIONS[id] }
}

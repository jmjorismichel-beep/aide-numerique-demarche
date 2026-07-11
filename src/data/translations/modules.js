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
    en: { title: 'Linux', description: 'Discover and configure Linux settings.' },
    es: { title: 'Linux', description: 'Descubrir y configurar los ajustes de Linux.' },
    pt: { title: 'Linux', description: 'Descobrir e configurar as definições do Linux.' },
    ar: { title: 'لينكس', description: 'التعرف على إعدادات نظام لينكس.' },
    ru: { title: 'Linux', description: 'Знакомство с настройками Linux.' },
    uk: { title: 'Linux', description: 'Знайомство з налаштуваннями Linux.' },
    tr: { title: 'Linux', description: 'Linux ayarlarını tanıma ve yapılandırma.' },
    fa: { title: 'لینوکس', description: 'آشنایی با تنظیمات لینوکس.' },
    sq: { title: 'Linux', description: 'Njihuni dhe konfiguroni cilësimet e Linux.' },
    ti: { title: 'ሊኑክስ', description: 'ኣቀማምጣ ሊኑክስ ምፍላጥን ምስራሕን።' },
    so: { title: 'Linux', description: 'Bar oo habee dejinta Linux.' },
    zh: { title: 'Linux', description: '了解并配置 Linux 设置。' }
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

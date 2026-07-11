// Traductions de l'interface (hors contenu des modules, voir moduleTranslations.js).
// Traduction automatique relue une fois mais PAS validée par des locuteurs natifs :
// à faire vérifier avant un usage à grande échelle si l'exactitude est critique,
// en particulier pour le dari/persan, l'albanais, le tigrinya et le somali.

const KEYS = [
  'myModules', 'messaging', 'activity', 'groups', 'trainees', 'moduleContent', 'statistics',
  'glossary', 'whereToStart', 'logout', 'online', 'offline', 'syncing', 'login', 'signup',
  'email', 'password', 'firstName', 'lastName', 'markAsDone', 'done', 'printPdf', 'listenAll',
  'documentsToPrepare', 'whatIsThis', 'language'
]

export const UI = {
  fr: {
    myModules: 'Mes modules', messaging: 'Messagerie', activity: 'Activité', groups: 'Groupes',
    trainees: 'Stagiaires', moduleContent: 'Contenu des modules', statistics: 'Statistiques',
    glossary: 'Glossaire', whereToStart: 'Par où commencer', logout: 'Déconnexion',
    online: 'En ligne', offline: 'Hors-ligne (sauvegarde locale)', syncing: 'Synchronisation…',
    login: 'Connexion', signup: "S'inscrire", email: 'Adresse mail', password: 'Mot de passe',
    firstName: 'Prénom', lastName: 'Nom', markAsDone: 'Marquer comme terminé', done: 'Terminé',
    printPdf: 'Imprimer en PDF', listenAll: 'Écouter tout', documentsToPrepare: 'Documents à préparer avant de commencer',
    whatIsThis: "C'est quoi, et pourquoi c'est utile ?", language: 'Langue'
  },
  en: {
    myModules: 'My modules', messaging: 'Messages', activity: 'Activity', groups: 'Groups',
    trainees: 'Trainees', moduleContent: 'Module content', statistics: 'Statistics',
    glossary: 'Glossary', whereToStart: 'Where to start', logout: 'Log out',
    online: 'Online', offline: 'Offline (saved locally)', syncing: 'Syncing…',
    login: 'Log in', signup: 'Sign up', email: 'Email address', password: 'Password',
    firstName: 'First name', lastName: 'Last name', markAsDone: 'Mark as done', done: 'Done',
    printPdf: 'Print as PDF', listenAll: 'Listen to all', documentsToPrepare: 'Documents to prepare before starting',
    whatIsThis: 'What is this, and why is it useful?', language: 'Language'
  },
  es: {
    myModules: 'Mis módulos', messaging: 'Mensajes', activity: 'Actividad', groups: 'Grupos',
    trainees: 'Alumnos', moduleContent: 'Contenido de los módulos', statistics: 'Estadísticas',
    glossary: 'Glosario', whereToStart: 'Por dónde empezar', logout: 'Cerrar sesión',
    online: 'En línea', offline: 'Sin conexión (guardado localmente)', syncing: 'Sincronizando…',
    login: 'Iniciar sesión', signup: 'Registrarse', email: 'Correo electrónico', password: 'Contraseña',
    firstName: 'Nombre', lastName: 'Apellido', markAsDone: 'Marcar como terminado', done: 'Terminado',
    printPdf: 'Imprimir en PDF', listenAll: 'Escuchar todo', documentsToPrepare: 'Documentos a preparar antes de empezar',
    whatIsThis: '¿Qué es esto y por qué es útil?', language: 'Idioma'
  },
  pt: {
    myModules: 'Meus módulos', messaging: 'Mensagens', activity: 'Atividade', groups: 'Grupos',
    trainees: 'Formandos', moduleContent: 'Conteúdo dos módulos', statistics: 'Estatísticas',
    glossary: 'Glossário', whereToStart: 'Por onde começar', logout: 'Sair',
    online: 'On-line', offline: 'Offline (salvo localmente)', syncing: 'Sincronizando…',
    login: 'Entrar', signup: 'Cadastrar-se', email: 'E-mail', password: 'Senha',
    firstName: 'Nome', lastName: 'Sobrenome', markAsDone: 'Marcar como concluído', done: 'Concluído',
    printPdf: 'Imprimir em PDF', listenAll: 'Ouvir tudo', documentsToPrepare: 'Documentos a preparar antes de começar',
    whatIsThis: 'O que é isso e por que é útil?', language: 'Idioma'
  },
  ar: {
    myModules: 'وحداتي', messaging: 'الرسائل', activity: 'النشاط', groups: 'المجموعات',
    trainees: 'المتدربون', moduleContent: 'محتوى الوحدات', statistics: 'الإحصائيات',
    glossary: 'قاموس المصطلحات', whereToStart: 'من أين أبدأ', logout: 'تسجيل الخروج',
    online: 'متصل', offline: 'غير متصل (حفظ محلي)', syncing: 'جارٍ المزامنة…',
    login: 'تسجيل الدخول', signup: 'إنشاء حساب', email: 'البريد الإلكتروني', password: 'كلمة المرور',
    firstName: 'الاسم الأول', lastName: 'اسم العائلة', markAsDone: 'تم الانتهاء', done: 'مكتمل',
    printPdf: 'طباعة PDF', listenAll: 'استماع للكل', documentsToPrepare: 'المستندات التي يجب تحضيرها قبل البدء',
    whatIsThis: 'ما هذا؟ ولماذا هو مفيد؟', language: 'اللغة'
  },
  ru: {
    myModules: 'Мои модули', messaging: 'Сообщения', activity: 'Активность', groups: 'Группы',
    trainees: 'Стажёры', moduleContent: 'Содержание модулей', statistics: 'Статистика',
    glossary: 'Глоссарий', whereToStart: 'С чего начать', logout: 'Выйти',
    online: 'В сети', offline: 'Не в сети (сохранено локально)', syncing: 'Синхронизация…',
    login: 'Вход', signup: 'Регистрация', email: 'Электронная почта', password: 'Пароль',
    firstName: 'Имя', lastName: 'Фамилия', markAsDone: 'Отметить как выполнено', done: 'Выполнено',
    printPdf: 'Распечатать PDF', listenAll: 'Прослушать всё', documentsToPrepare: 'Документы для подготовки перед началом',
    whatIsThis: 'Что это и зачем это нужно?', language: 'Язык'
  },
  uk: {
    myModules: 'Мої модулі', messaging: 'Повідомлення', activity: 'Активність', groups: 'Групи',
    trainees: 'Стажисти', moduleContent: 'Вміст модулів', statistics: 'Статистика',
    glossary: 'Глосарій', whereToStart: 'З чого почати', logout: 'Вийти',
    online: 'Онлайн', offline: 'Офлайн (збережено локально)', syncing: 'Синхронізація…',
    login: 'Увійти', signup: 'Реєстрація', email: 'Електронна пошта', password: 'Пароль',
    firstName: "Ім'я", lastName: 'Прізвище', markAsDone: 'Позначити як виконано', done: 'Виконано',
    printPdf: 'Друк PDF', listenAll: 'Прослухати все', documentsToPrepare: 'Документи для підготовки перед початком',
    whatIsThis: 'Що це і навіщо це потрібно?', language: 'Мова'
  },
  tr: {
    myModules: 'Modüllerim', messaging: 'Mesajlar', activity: 'Etkinlik', groups: 'Gruplar',
    trainees: 'Kursiyerler', moduleContent: 'Modül içeriği', statistics: 'İstatistikler',
    glossary: 'Sözlük', whereToStart: 'Nereden başlamalı', logout: 'Çıkış yap',
    online: 'Çevrimiçi', offline: 'Çevrimdışı (yerel olarak kaydedildi)', syncing: 'Senkronize ediliyor…',
    login: 'Giriş yap', signup: 'Kayıt ol', email: 'E-posta adresi', password: 'Şifre',
    firstName: 'Ad', lastName: 'Soyad', markAsDone: 'Tamamlandı olarak işaretle', done: 'Tamamlandı',
    printPdf: "PDF olarak yazdır", listenAll: 'Tümünü dinle', documentsToPrepare: 'Başlamadan önce hazırlanacak belgeler',
    whatIsThis: 'Bu nedir ve neden faydalı?', language: 'Dil'
  },
  fa: {
    myModules: 'ماژول‌های من', messaging: 'پیام‌ها', activity: 'فعالیت', groups: 'گروه‌ها',
    trainees: 'کارآموزان', moduleContent: 'محتوای ماژول‌ها', statistics: 'آمار',
    glossary: 'واژه‌نامه', whereToStart: 'از کجا شروع کنم', logout: 'خروج',
    online: 'آنلاین', offline: 'آفلاین (ذخیره محلی)', syncing: 'در حال همگام‌سازی…',
    login: 'ورود', signup: 'ثبت‌نام', email: 'ایمیل', password: 'رمز عبور',
    firstName: 'نام', lastName: 'نام خانوادگی', markAsDone: 'علامت‌گذاری به‌عنوان انجام‌شده', done: 'انجام‌شده',
    printPdf: 'چاپ PDF', listenAll: 'شنیدن همه', documentsToPrepare: 'مدارک لازم قبل از شروع',
    whatIsThis: 'این چیست و چرا مفید است؟', language: 'زبان'
  },
  sq: {
    myModules: 'Modulet e mia', messaging: 'Mesazhet', activity: 'Aktiviteti', groups: 'Grupet',
    trainees: 'Kursantët', moduleContent: 'Përmbajtja e moduleve', statistics: 'Statistikat',
    glossary: 'Fjalori', whereToStart: 'Nga ku të filloj', logout: 'Dilni',
    online: 'Online', offline: 'Jashtë linje (ruajtur lokalisht)', syncing: 'Duke sinkronizuar…',
    login: 'Hyni', signup: 'Regjistrohuni', email: 'Adresa e email-it', password: 'Fjalëkalimi',
    firstName: 'Emri', lastName: 'Mbiemri', markAsDone: 'Shëno si të përfunduar', done: 'Përfunduar',
    printPdf: 'Printo si PDF', listenAll: 'Dëgjo gjithçka', documentsToPrepare: 'Dokumentet për t\'u përgatitur para se të fillosh',
    whatIsThis: 'Çfarë është kjo, dhe pse është e dobishme?', language: 'Gjuha'
  },
  ti: {
    myModules: 'ናይ ኣነ ሞጁላት', messaging: 'መልእኽትታት', activity: 'ንጥፈት', groups: 'ጉጅለታት',
    trainees: 'ተሳተፍቲ', moduleContent: 'ትሕዝቶ ሞጁላት', statistics: 'ስታቲስቲክስ',
    glossary: 'መዝገበ ቃላት', whereToStart: 'ካበይ ክጅምር', logout: 'ውጻእ',
    online: 'ኦንላይን', offline: 'ኦፍላይን (ኣብ ዲቫይስ ተዓቂቡ)', syncing: 'ይሳነኻ ኣሎ…',
    login: 'እቶ', signup: 'ተመዝገብ', email: 'ኢመይል', password: 'መሕለፊ ቃል',
    firstName: 'ቀዳማይ ስም', lastName: 'ስም ስድራ', markAsDone: 'ከም ዝተወደአ ምልክት ግበር', done: 'ተወዲኡ',
    printPdf: 'ሕተም PDF', listenAll: 'ኩሉ ስማዕ', documentsToPrepare: 'ቅድሚ ምጅማርካ ክትዳሎ ዘለካ ሰነዳት',
    whatIsThis: 'እዚ እንታይ እዩ፣ ስለምንታይከ ጠቓሚ ይኸውን?', language: 'ቋንቋ'
  },
  so: {
    myModules: 'Casharradayda', messaging: 'Fariimaha', activity: 'Howsha', groups: 'Kooxaha',
    trainees: 'Tababarayaasha', moduleContent: 'Nuxurka casharrada', statistics: 'Tirakoobka',
    glossary: 'Qaamuuska', whereToStart: 'Xaggee ka bilaabo', logout: 'Ka bax',
    online: 'Khadka tooska ah', offline: 'Khadka ka baxsan (si gaar ah loo kaydiyay)', syncing: 'Isku-xirid…',
    login: 'Gal', signup: 'Isdiiwaangeli', email: 'Ciwaanka email-ka', password: 'Furaha sirta ah',
    firstName: 'Magaca', lastName: 'Magaca dambe', markAsDone: 'Calaamadee dhammaystiran', done: 'Dhammaystiran',
    printPdf: 'Daabac PDF', listenAll: 'Dhagayso dhammaan', documentsToPrepare: 'Dukumentiga la diyaarin lahaa ka hor bilowga',
    whatIsThis: 'Waa maxay tan, iyo maxay faa\'iido u leedahay?', language: 'Luqadda'
  },
  zh: {
    myModules: '我的课程', messaging: '消息', activity: '活动', groups: '小组',
    trainees: '学员', moduleContent: '课程内容', statistics: '统计',
    glossary: '词汇表', whereToStart: '从哪里开始', logout: '退出登录',
    online: '在线', offline: '离线（本地保存）', syncing: '同步中…',
    login: '登录', signup: '注册', email: '电子邮箱', password: '密码',
    firstName: '名字', lastName: '姓氏', markAsDone: '标记为已完成', done: '已完成',
    printPdf: '打印为PDF', listenAll: '收听全部', documentsToPrepare: '开始前需准备的文件',
    whatIsThis: '这是什么，为什么有用？', language: '语言'
  }
}

export function t(lang, key) {
  return UI[lang]?.[key] ?? UI.fr[key] ?? key
}

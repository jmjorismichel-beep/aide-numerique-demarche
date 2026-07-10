// Traductions de l'interface (hors contenu des modules, voir moduleTranslations.js).
// Traduction automatique relue une fois mais PAS validée par un locuteur natif :
// à faire vérifier avant un usage à grande échelle si l'exactitude est critique.

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
  ar: {
    myModules: 'وحداتي', messaging: 'الرسائل', activity: 'النشاط', groups: 'المجموعات',
    trainees: 'المتدربون', moduleContent: 'محتوى الوحدات', statistics: 'الإحصائيات',
    glossary: 'قاموس المصطلحات', whereToStart: 'من أين أبدأ', logout: 'تسجيل الخروج',
    online: 'متصل', offline: 'غير متصل (حفظ محلي)', syncing: 'جارٍ المزامنة…',
    login: 'تسجيل الدخول', signup: 'إنشاء حساب', email: 'البريد الإلكتروني', password: 'كلمة المرور',
    firstName: 'الاسم الأول', lastName: 'اسم العائلة', markAsDone: 'تم الانتهاء', done: 'مكتمل',
    printPdf: 'طباعة PDF', listenAll: 'استماع للكل', documentsToPrepare: 'المستندات التي يجب تحضيرها قبل البدء',
    whatIsThis: 'ما هذا؟ ولماذا هو مفيد؟', language: 'اللغة'
  }
}

export function t(lang, key) {
  return UI[lang]?.[key] ?? UI.fr[key] ?? key
}

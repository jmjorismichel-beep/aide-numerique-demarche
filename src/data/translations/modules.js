// Traductions du CONTENU des modules (titre / description / "c'est quoi" / documents).
// Les ÉTAPES détaillées restent en français uniquement pour l'instant (voir note
// affichée dans l'app). Traduction automatique relue mais pas validée par un
// locuteur natif : recommandé de faire relire par une personne native avant de
// s'appuyer dessus pour des démarches administratives sensibles.

export const MODULE_TRANSLATIONS = {
  'app-fixe': {
    en: { title: 'Desktop computer', description: 'Discover and set up a desktop computer.' },
    ar: { title: 'حاسوب مكتبي', description: 'التعرف على الحاسوب المكتبي وإعداده.' }
  },
  'app-portable': {
    en: { title: 'Laptop computer', description: 'Discover and set up a laptop computer.' },
    ar: { title: 'حاسوب محمول', description: 'التعرف على الحاسوب المحمول وإعداده.' }
  },
  'app-chromebook': {
    en: { title: 'Chromebook', description: 'Discover and set up a Chromebook.' },
    ar: { title: 'كروم بوك', description: 'التعرف على جهاز Chromebook وإعداده.' }
  },
  'app-windows': {
    en: { title: 'Windows', description: 'Discover and configure Windows settings.' },
    ar: { title: 'ويندوز', description: 'التعرف على إعدادات نظام ويندوز وضبطها.' }
  },
  'app-apple': {
    en: { title: 'Apple (macOS)', description: 'Discover and configure the settings of an Apple Mac.' },
    ar: { title: 'أبل (ماك)', description: 'التعرف على إعدادات جهاز ماك من أبل.' }
  },
  'app-linux': {
    en: { title: 'Linux', description: 'Discover and configure Linux settings.' },
    ar: { title: 'لينكس', description: 'التعرف على إعدادات نظام لينكس.' }
  },
  'app-tablette-android': {
    en: { title: 'Android tablet', description: 'Discover and configure the settings of an Android tablet.' },
    ar: { title: 'جهاز لوحي أندرويد', description: 'التعرف على إعدادات الجهاز اللوحي بنظام أندرويد.' }
  },
  'app-ipad': {
    en: { title: 'iPad', description: 'Discover and configure the settings of an iPad.' },
    ar: { title: 'آيباد', description: 'التعرف على إعدادات جهاز آيباد.' }
  },
  'app-iphone': {
    en: { title: 'iPhone', description: 'Discover and configure the settings of an iPhone (any version).' },
    ar: { title: 'آيفون', description: 'التعرف على إعدادات هاتف آيفون (أي إصدار).' }
  },
  'app-android-phone': {
    en: { title: 'Android smartphone', description: 'Discover and configure the settings of an Android smartphone (any version).' },
    ar: { title: 'هاتف أندرويد', description: 'التعرف على إعدادات هاتف أندرويد (أي إصدار).' }
  },

  'dem-sites-officiels': {
    en: {
      title: 'Official websites', description: 'Learn to recognise official websites and what can be done online.',
      whatIsIt: "In France, many administrative tasks (family, health, work, housing, papers...) are now done online instead of at a counter. Knowing how to recognise an official website saves time and avoids scams.",
      documents: []
    },
    ar: {
      title: 'المواقع الرسمية', description: 'التعرف على المواقع الرسمية ومعرفة الإجراءات التي يمكن إنجازها عبر الإنترنت.',
      whatIsIt: 'في فرنسا، يتم الآن إنجاز الكثير من الإجراءات الإدارية (الأسرة، الصحة، العمل، السكن، الأوراق...) عبر الإنترنت بدلاً من الذهاب إلى المكتب. معرفة كيفية التعرف على موقع رسمي يوفر الوقت ويجنبك الاحتيال.',
      documents: []
    }
  },
  'dem-caf': {
    en: {
      title: 'CAF (Family Allowance Fund)', description: 'Handle your requests on the CAF website.',
      whatIsIt: "CAF pays money to families and people with low income: housing help, child benefits, activity bonus... If you have children or a modest income, you probably qualify for some help.",
      documents: ['Social Security number', 'Email address', 'Bank details (RIB)', 'Recent proof of address']
    },
    ar: {
      title: 'صندوق الإعانات العائلية (CAF)', description: 'إنجاز إجراءاتك عبر موقع CAF.',
      whatIsIt: 'يدفع صندوق CAF أموالاً للعائلات والأشخاص ذوي الدخل المحدود: مساعدة السكن، إعانات الأطفال، منحة النشاط... إذا كان لديك أطفال أو دخل محدود، فمن المحتمل أنك تستحق مساعدة.',
      documents: ['رقم الضمان الاجتماعي', 'البريد الإلكتروني', 'كشف الحساب البنكي (RIB)', 'إثبات سكن حديث']
    }
  },
  'dem-cpam': {
    en: {
      title: 'CPAM (Health Insurance)', description: 'Handle your requests on ameli.fr (CPAM).',
      whatIsIt: 'CPAM reimburses part of your medical costs (doctor, pharmacy, hospital). It also issues the Carte Vitale, essential to be properly reimbursed. Without it, healthcare costs much more.',
      documents: ['Social Security number', 'ID document', 'Email address']
    },
    ar: {
      title: 'صندوق التأمين الصحي (CPAM)', description: 'إنجاز إجراءاتك عبر موقع ameli.fr.',
      whatIsIt: 'يعيد صندوق CPAM جزءاً من مصاريفك الطبية (الطبيب، الصيدلية، المستشفى). كما يصدر بطاقة Vitale الضرورية للحصول على التعويض. بدونها، ستدفع تكاليف العلاج أعلى بكثير.',
      documents: ['رقم الضمان الاجتماعي', 'وثيقة هوية', 'البريد الإلكتروني']
    }
  },
  'dem-carsat': {
    en: {
      title: 'CARSAT (retirement)', description: "Handle your requests on the CARSAT website.",
      whatIsIt: 'CARSAT manages your future retirement: it counts the years and quarters you work. Even if retirement feels far away, every period of declared work counts for later.',
      documents: ['Social Security number', 'Email address', 'Career statement if you have one']
    },
    ar: {
      title: 'صندوق التقاعد (CARSAT)', description: 'إنجاز إجراءاتك عبر موقع CARSAT.',
      whatIsIt: 'يهتم صندوق CARSAT بتقاعدك المستقبلي: فهو يحسب سنوات وأرباع العمل. حتى لو بدا التقاعد بعيداً، فكل فترة عمل مصرح بها تُحتسب لاحقاً.',
      documents: ['رقم الضمان الاجتماعي', 'البريد الإلكتروني', 'كشف المسار المهني إن وجد']
    }
  },
  'dem-lia': {
    en: {
      title: 'LiA (bus and tramway)', description: 'Use the website of the LiA transport network (bus, tramway, funicular in Le Havre).',
      whatIsIt: 'LiA is the name of the bus and tramway network in Le Havre. To get around the city without a car (go to training, work, shopping), it is the main means of transport.',
      documents: ['ID photo', 'Proof of income (for reduced fare)', 'Proof of address']
    },
    ar: {
      title: 'شبكة LiA (الحافلات والترام)', description: 'استخدام موقع شبكة النقل LiA (حافلات، ترام، فونيكولير في لوهافر).',
      whatIsIt: 'LiA هو اسم شبكة الحافلات والترام في لوهافر. للتنقل في المدينة بدون سيارة (للذهاب إلى التدريب أو العمل أو التسوق)، فهي وسيلة النقل الرئيسية.',
      documents: ['صورة شخصية', 'إثبات الدخل (لتذكرة مخفضة)', 'إثبات سكن']
    }
  },
  'dem-impots': {
    en: {
      title: 'Taxes', description: 'File your tax return and handle your requests on impots.gouv.fr.',
      whatIsIt: 'In France, almost everyone must declare their income every year to the tax office, even people with little money. It is mandatory, and many other procedures (benefits, housing...) later require a document called "avis d\'imposition" (tax notice).',
      documents: ['Tax number (on a previous tax notice)', 'Email address', 'Proof of income for the year']
    },
    ar: {
      title: 'الضرائب', description: 'تقديم إقرارك الضريبي وإنجاز إجراءاتك عبر موقع impots.gouv.fr.',
      whatIsIt: 'في فرنسا، يجب على الجميع تقريباً التصريح بدخلهم كل عام لمصلحة الضرائب، حتى الأشخاص ذوي الدخل المحدود. الأمر إلزامي، وتتطلب إجراءات أخرى كثيرة (الإعانات، السكن...) لاحقاً وثيقة تسمى "الإشعار الضريبي".',
      documents: ['الرقم الضريبي (على إشعار ضريبي سابق)', 'البريد الإلكتروني', 'إثباتات الدخل للسنة']
    }
  },
  'dem-france-travail': {
    en: {
      title: 'France Travail (employment)', description: 'Register and handle your requests on francetravail.fr.',
      whatIsIt: 'France Travail (formerly Pôle Emploi) helps you find a job and can pay you an allowance if you lose your job. To be supported and access job offers, you need to register.',
      documents: ['ID document', 'Social Security number', 'CV if you have one', 'Email address']
    },
    ar: {
      title: 'فرانس ترافاي (التوظيف)', description: 'التسجيل وإنجاز إجراءاتك عبر موقع francetravail.fr.',
      whatIsIt: 'تساعدك France Travail (المعروفة سابقاً باسم Pôle Emploi) على البحث عن عمل، ويمكنها دفع إعانة إذا فقدت وظيفتك. للحصول على المتابعة والوصول إلى عروض العمل، يجب التسجيل.',
      documents: ['وثيقة هوية', 'رقم الضمان الاجتماعي', 'سيرة ذاتية إن وجدت', 'البريد الإلكتروني']
    }
  },
  'dem-mdph': {
    en: {
      title: 'MDPH (disability support)', description: 'Submit a request on the MDPH website.',
      whatIsIt: 'MDPH helps people with disabilities: official recognition of disability, financial help, a special card, support. If you or someone close to you has a disability or illness that affects daily life, it can help.',
      documents: ['ID document', 'Medical certificate less than 12 months old', 'Proof of address']
    },
    ar: {
      title: 'مكتب دعم ذوي الإعاقة (MDPH)', description: 'تقديم طلب عبر موقع MDPH.',
      whatIsIt: 'يساعد مكتب MDPH الأشخاص ذوي الإعاقة: الاعتراف الرسمي بالإعاقة، مساعدات مالية، بطاقة خاصة، ومرافقة. إذا كنت أنت أو أحد أفراد أسرتك يعاني من إعاقة أو مرض يؤثر على الحياة اليومية، يمكن أن يساعدك هذا المكتب.',
      documents: ['وثيقة هوية', 'شهادة طبية أقل من 12 شهراً', 'إثبات سكن']
    }
  },
  'dem-mee': {
    en: {
      title: 'Job events (Mes Événements Emploi)', description: 'Use the "Mes Événements Emploi" website.',
      whatIsIt: 'This website lists days when companies come to recruit directly, near you. It is a good opportunity to meet employers without a written application.',
      documents: ['Up-to-date CV (paper or digital)', 'Your France Travail ID if you have one']
    },
    ar: {
      title: 'فعاليات التوظيف (Mes Événements Emploi)', description: 'استخدام موقع "Mes Événements Emploi".',
      whatIsIt: 'يعرض هذا الموقع الأيام التي تأتي فيها الشركات للتوظيف المباشر بالقرب منك. إنها فرصة جيدة للقاء أصحاب العمل دون تقديم طلب كتابي.',
      documents: ['سيرة ذاتية محدثة (ورقية أو رقمية)', 'رقم التعريف لدى France Travail إن وجد']
    }
  },
  'dem-logement-social': {
    en: {
      title: 'Social housing', description: 'Apply for social housing online.',
      whatIsIt: 'Social housing (HLM) is housing with lower rent than private housing, reserved for people with modest income. You need to make an official request and often wait, so it is best to apply early.',
      documents: ['ID document', 'Proof of income for the whole household', 'Family record book (livret de famille) if you have one']
    },
    ar: {
      title: 'السكن الاجتماعي', description: 'تقديم طلب سكن اجتماعي عبر الإنترنت.',
      whatIsIt: 'السكن الاجتماعي (HLM) هو سكن بإيجار أقل من السكن الخاص، مخصص للأشخاص ذوي الدخل المحدود. يجب تقديم طلب رسمي وغالباً الانتظار، لذا من الأفضل التقديم مبكراً.',
      documents: ['وثيقة هوية', 'إثباتات دخل جميع أفراد الأسرة', 'دفتر العائلة إن وجد']
    }
  },
  'dem-mobilite': {
    en: {
      title: 'Mobility support', description: 'Discover the Pôle Mobilité and MAD association in Le Havre.',
      whatIsIt: 'Not having transportation is often an obstacle to finding work or training. The Pôle Mobilité in Le Havre helps people in this situation: get a driving licence at reduced cost, repair your car, rent an affordable vehicle.',
      documents: ['Referral letter from an advisor (France Travail, mission locale...)', 'ID document']
    },
    ar: {
      title: 'مساعدة التنقل', description: 'التعرف على مركز Pôle Mobilité وجمعية MAD في لوهافر.',
      whatIsIt: 'عدم امتلاك وسيلة نقل غالباً ما يكون عائقاً أمام إيجاد عمل أو تدريب. يساعد مركز Pôle Mobilité في لوهافر الأشخاص في هذا الوضع: الحصول على رخصة قيادة بتكلفة مخفضة، إصلاح سيارتك، استئجار مركبة بسعر معقول.',
      documents: ['رسالة توجيه من مستشار (France Travail، Mission Locale...)', 'وثيقة هوية']
    }
  },
  'dem-remuneration-normandie': {
    en: {
      title: 'Normandy Region trainee pay', description: 'Use the payment platform for trainees funded by the Normandy Region.',
      whatIsIt: 'If you are attending training funded by the Normandy Region and are not paid by France Travail, you may be paid during your training. This website lets you track those payments.',
      documents: ['Login details given by your training organisation', 'Bank details (RIB)']
    },
    ar: {
      title: 'أجرة المتدربين - إقليم نورماندي', description: 'استخدام منصة دفع أجور المتدربين الممولة من إقليم نورماندي.',
      whatIsIt: 'إذا كنت تتابع تدريباً ممولاً من إقليم نورماندي ولا تتقاضى إعانة من France Travail، فقد يتم دفع أجر لك خلال التدريب. يتيح لك هذا الموقع متابعة هذه المدفوعات.',
      documents: ['بيانات الدخول المرسلة من جهة التدريب', 'كشف الحساب البنكي (RIB)']
    }
  },
  'dem-ecole': {
    en: {
      title: 'School, canteen, after-school care', description: 'Register and renew registration for school canteen, after-school care and holiday clubs (City of Le Havre).',
      whatIsIt: "If you have children at school in Le Havre, the canteen and before/after school care are not automatic: you must register your child every year on the city's website, otherwise they won't be able to eat at the canteen or be looked after.",
      documents: ['CAF quotient certificate less than 2 months old', 'Email address', 'Family record book']
    },
    ar: {
      title: 'المدرسة، المطعم المدرسي، الحضانة بعد الدوام', description: 'تسجيل وتجديد تسجيل الأطفال في المطعم المدرسي والحضانة بعد الدوام ومراكز الترفيه (مدينة لوهافر).',
      whatIsIt: 'إذا كان لديك أطفال يدرسون في لوهافر، فإن المطعم المدرسي والحضانة قبل/بعد الدوام ليست تلقائية: يجب عليك تسجيل طفلك كل عام على موقع المدينة، وإلا فلن يتمكن من تناول الطعام في المطعم أو الاستفادة من الحضانة.',
      documents: ['شهادة معامل CAF أقل من شهرين', 'البريد الإلكتروني', 'دفتر العائلة']
    }
  },
  'dem-titre-sejour': {
    en: {
      title: 'Residence permit', description: 'Apply for or renew a residence permit when arriving in Le Havre.',
      whatIsIt: "The residence permit is the document that allows a foreign person to live legally in France. You need to apply when you arrive and renew it before its end date, otherwise you risk being in an irregular situation — it is often the very first thing to do when arriving.",
      documents: ['Passport', 'Proof of address', 'Recent ID photo', 'Email address']
    },
    ar: {
      title: 'تصريح الإقامة', description: 'إنشاء وتجديد تصريح الإقامة عند الوصول إلى لوهافر.',
      whatIsIt: 'تصريح الإقامة هو الوثيقة التي تسمح لشخص أجنبي بالعيش بشكل قانوني في فرنسا. يجب طلبه عند الوصول وتجديده قبل تاريخ انتهائه، وإلا فقد تجد نفسك في وضع غير قانوني — وغالباً ما يكون هذا أول إجراء يجب القيام به عند الوصول.',
      documents: ['جواز السفر', 'إثبات سكن', 'صورة شخصية حديثة', 'البريد الإلكتروني']
    }
  },
  'dem-casier-judiciaire': {
    en: {
      title: 'Criminal record', description: 'Request your criminal record extract online.',
      whatIsIt: 'The criminal record is a document that proves you have no conviction (or lists any convictions). Many employers or administrations ask for it, especially for certain jobs (childcare, security...).',
      documents: ['Exact first name, last name, date and place of birth (as on your ID)']
    },
    ar: {
      title: 'السجل الجنائي', description: 'طلب مستخرج السجل الجنائي عبر الإنترنت.',
      whatIsIt: 'السجل الجنائي وثيقة تثبت عدم وجود إدانات بحقك (أو تسرد الإدانات إن وجدت). يطلبه العديد من أصحاب العمل أو الإدارات، خاصة لبعض الوظائف (رعاية الأطفال، الأمن...).',
      documents: ['الاسم الأول واسم العائلة وتاريخ ومكان الميلاد بدقة (كما في وثيقة الهوية)']
    }
  },
  'dem-carte-identite': {
    en: {
      title: 'ID card', description: 'Book an appointment to create or renew your ID card (City of Le Havre and government website).',
      whatIsIt: 'The ID card proves who you are in France. It is different from the residence permit: it mainly concerns people of French nationality. Many administrative procedures will ask you for a valid ID.',
      documents: ['Recent ID photo meeting standards', 'Proof of address', 'Old ID card if you have one']
    },
    ar: {
      title: 'بطاقة الهوية', description: 'حجز موعد لإنشاء أو تجديد بطاقة الهوية (مدينة لوهافر والموقع الحكومي).',
      whatIsIt: 'بطاقة الهوية تثبت من أنت في فرنسا. وهي مختلفة عن تصريح الإقامة: تخص بشكل أساسي الأشخاص من الجنسية الفرنسية. ستطلب منك العديد من الإجراءات الإدارية وثيقة هوية سارية المفعول.',
      documents: ['صورة شخصية حديثة مطابقة للمعايير', 'إثبات سكن', 'بطاقة الهوية القديمة إن وجدت']
    }
  }
}

export function translateModule(module, lang) {
  if (lang === 'fr' || !module) return module
  const tr = MODULE_TRANSLATIONS[module.id]?.[lang]
  if (!tr) return module
  return {
    ...module,
    title: tr.title || module.title,
    description: tr.description || module.description,
    whatIsIt: tr.whatIsIt ?? module.whatIsIt,
    documents: tr.documents ?? module.documents,
    // Les étapes détaillées restent en français : un indicateur est affiché dans l'UI.
    stepsNotTranslated: true
  }
}

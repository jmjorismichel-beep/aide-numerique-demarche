// Modules ajoutés pour couvrir les besoins communs aux nouveaux arrivants ET
// aux personnes déjà installées au Havre / dans l'agglomération havraise.
// Sources vérifiées (juillet 2026) : ameli.fr (CSS, arrêt maladie), doctolib.fr,
// moncompteformation.gouv.fr (connexion via FranceConnect+ depuis 2026),
// chequeenergie.gouv.fr, caf.fr (RSA, prime d'activité, allocation de rentrée),
// service-public.fr (naturalisation, PACS, listes électorales, aide juridictionnelle,
// livret de famille), ants.gouv.fr (carte grise, permis de conduire),
// administration-etrangers-en-france.interieur.gouv.fr (regroupement familial),
// bibliotheques.lehavre.fr (réseau des bibliothèques du Havre).

export const EXTRA_CATEGORIES = {
  'numerique-base': 'Les bases du numérique',
  sante: 'Santé',
  'argent-travail': 'Argent et travail',
  logement: 'Logement',
  famille: 'Famille',
  'papiers-citoyennete': 'Papiers et citoyenneté',
  'securite-pratique': 'Sécurité et vie pratique'
}

export const EXTRA_MODULES = [
  // ============================================================
  // LES BASES DU NUMÉRIQUE
  // ============================================================
  { id: 'num-email', category: 'numerique-base', icon: '📧', title: 'Créer et utiliser une adresse email',
    description: "Créer une boîte email et apprendre à écrire, envoyer et recevoir des messages.",
    whatIsIt: "Une adresse email est indispensable pour presque toutes les démarches en France (CAF, impôts, France Travail...). Sans elle, tu ne peux pas créer de compte sur ces sites.",
    documents: [],
    steps: [
      { title: "Choisir un service gratuit", text: "Les plus utilisés sont Gmail (Google) et Outlook (Microsoft). Les deux sont gratuits et fonctionnent aussi bien.", visual: "mail" },
      { title: "Créer son compte", text: "Va sur gmail.com ou outlook.com, clique sur « Créer un compte », choisis un nom (souvent prénom.nom) et un mot de passe.", visual: "lock", screenshot: "/screenshots/gmail-accueil.jpg", screenshotAlt: "Page de connexion Gmail" },
      { title: "Écrire un message", text: "Clique sur « Nouveau message », écris l'adresse du destinataire, un objet (le sujet), puis ton message. Clique sur « Envoyer ».", visual: "mail" },
      { title: "Joindre un document", text: "Pour envoyer un fichier (photo, PDF), clique sur l'icône trombone 📎 avant d'envoyer, et choisis le fichier sur ton téléphone ou ordinateur.", visual: "document" },
      { title: "Retrouver un message important", text: "Utilise la barre de recherche en haut de ta boîte mail pour retrouver un message par un mot-clé (ex : « CAF », « impôts »)." }
    ] },

  { id: 'num-mot-de-passe', category: 'numerique-base', icon: '🔐', title: 'Créer un mot de passe fort',
    description: "Apprendre à créer et retenir des mots de passe sécurisés.",
    whatIsIt: "Un mot de passe faible (comme « 123456 ») peut être deviné facilement, ce qui met en danger tes comptes (banque, email, CAF...). Un bon mot de passe te protège.",
    documents: [],
    steps: [
      { title: "Les règles d'un mot de passe fort", text: "Au moins 8 caractères, avec des majuscules, des minuscules, des chiffres. Évite ton nom, ta date de naissance, ou « azerty ».", visual: "lock" },
      { title: "Une astuce pour s'en souvenir", text: "Utilise une phrase facile à retenir et transforme-la : par exemple « J'aime le café le matin » devient « J@imeLc@fLm2024! ».", visual: "settings" },
      { title: "Ne jamais réutiliser le même mot de passe", text: "Si un site est piraté, tous tes comptes avec le même mot de passe deviennent vulnérables. Utilise un mot de passe différent pour ta banque, ton email, etc." },
      { title: "Où noter ses mots de passe en sécurité", text: "Un gestionnaire de mots de passe (souvent intégré à ton téléphone ou navigateur) peut les retenir pour toi. Sinon, un carnet papier gardé chez toi est plus sûr qu'un fichier sur l'ordinateur." }
    ] },

  { id: 'num-scanner', category: 'numerique-base', icon: '📱', title: 'Scanner un document avec son téléphone',
    description: "Transformer une photo de document en fichier propre et lisible, prêt à envoyer.",
    whatIsIt: "Presque toutes les démarches en ligne demandent d'envoyer une pièce d'identité, un justificatif de domicile ou une fiche de paie. Savoir « scanner » avec son téléphone évite d'avoir besoin d'un vrai scanner.",
    documents: [],
    steps: [
      { title: "Utiliser l'appareil photo normal", text: "Pose le document bien à plat, dans un endroit bien éclairé, sans ombre dessus. Prends la photo bien droite, sans le couper.", visual: "phone" },
      { title: "Utiliser une application de scan", text: "Des applications gratuites (Adobe Scan, Google Drive, Notes sur iPhone) redressent automatiquement l'image et améliorent la netteté, pour un rendu plus propre qu'une simple photo." },
      { title: "Convertir en PDF", text: "La plupart de ces applications proposent d'enregistrer directement en PDF, le format le plus souvent demandé par les administrations." },
      { title: "Envoyer le fichier", text: "Une fois scanné, le fichier est prêt à être joint par email ou uploadé sur un site (bouton « Choisir un fichier » ou « Parcourir »)." }
    ] },

  { id: 'num-sauvegarde', category: 'numerique-base', icon: '☁️', title: 'Sauvegarder ses photos et documents',
    description: "Garder une copie de sécurité de ses photos et fichiers importants, pour ne jamais les perdre.",
    whatIsIt: "Si ton téléphone est perdu, volé ou cassé, tu perds tout ce qu'il contient sauf si c'est sauvegardé ailleurs. C'est particulièrement important pour les documents administratifs scannés.",
    documents: [],
    steps: [
      { title: "Activer la sauvegarde automatique", text: "Sur Android : Google Photos. Sur iPhone : iCloud. Ces applications sauvegardent automatiquement tes photos sur internet dès que tu es connecté au Wi-Fi." },
      { title: "Créer un dossier « Documents importants »", text: "Range tes documents scannés (titre de séjour, contrats, diplômes) dans un dossier dédié sur Google Drive ou iCloud, pour les retrouver facilement." },
      { title: "Vérifier l'espace disponible", text: "Les services gratuits offrent un espace limité (environ 15 Go pour Google, 5 Go pour iCloud). Si l'espace est plein, il faut soit payer un peu plus, soit faire du tri." }
    ] },

  { id: 'num-visio', category: 'numerique-base', icon: '📹', title: 'Utiliser une visioconférence',
    description: "Participer à un appel vidéo (Zoom, Teams, Google Meet) pour un entretien ou un rendez-vous à distance.",
    whatIsIt: "De plus en plus d'entretiens d'embauche, de rendez-vous avec des administrations ou des cours se font par visioconférence plutôt qu'en personne.",
    documents: [],
    steps: [
      { title: "Cliquer sur le lien de la réunion", text: "Tu reçois souvent un lien par email (ex : « Rejoindre la réunion Zoom »). Clique dessus quelques minutes avant l'heure prévue.", visual: "calendar" },
      { title: "Autoriser la caméra et le micro", text: "Une fenêtre demande d'autoriser l'accès à ta caméra et ton micro : clique sur « Autoriser », sinon les autres ne te verront ni ne t'entendront." },
      { title: "Se mettre en sourdine quand on ne parle pas", text: "Le bouton micro barré permet de couper ton son pour éviter les bruits de fond quand ce n'est pas ton tour de parler." },
      { title: "Bien se préparer avant l'appel", text: "Teste ta connexion internet, installe-toi dans un endroit calme et bien éclairé, et prépare tes documents à l'avance si besoin." }
    ] },

  { id: 'num-signature', category: 'numerique-base', icon: '✍️', title: 'Signer un document électroniquement',
    description: "Apposer sa signature sur un document numérique sans avoir à l'imprimer.",
    whatIsIt: "De plus en plus de contrats (travail, logement, banque) se signent maintenant en ligne plutôt que sur papier, avec des outils comme DocuSign ou YouSign.",
    documents: [],
    steps: [
      { title: "Recevoir le document à signer", text: "Tu reçois généralement un email avec un lien « Signer le document »." },
      { title: "Vérifier le document avant de signer", text: "Lis bien le contenu avant de signer — une signature électronique a la même valeur légale qu'une signature papier." },
      { title: "Signer avec le doigt ou la souris", text: "L'outil te demande de dessiner ta signature avec ton doigt (téléphone/tablette) ou ta souris, ou de taper ton nom qui sera transformé en signature." },
      { title: "Récupérer une copie signée", text: "Une fois signé, un email de confirmation avec le document signé t'est généralement envoyé — garde-le précieusement." }
    ] },

  { id: 'num-identite-numerique', category: 'numerique-base', icon: '🆔', title: 'Mon identité numérique',
    description: "Comprendre à quoi sert une identité numérique et comment en créer une (FranceConnect+, Identité Numérique La Poste).",
    whatIsIt: "De plus en plus de démarches sensibles (Mon Compte Formation, changement de RIB, ouverture de compte bancaire en ligne) demandent une preuve d'identité renforcée sur internet, appelée « identité numérique » — un peu comme montrer sa carte d'identité, mais en ligne. Sans elle, certains sites te bloqueront bientôt l'accès.",
    documents: ["Pièce d'identité en cours de validité (carte d'identité, passeport, ou titre de séjour d'au moins 5 ans de validité)", "Un smartphone"],
    steps: [
      { title: "FranceConnect et FranceConnect+ : la différence", text: "FranceConnect (sans « + ») te permet de te connecter à des sites simples (impots.gouv.fr, ameli.fr) avec un compte existant. FranceConnect+ est une version plus sécurisée, obligatoire pour les démarches sensibles comme Mon Compte Formation.", visual: "lock" },
      { title: "Créer son Identité Numérique La Poste", text: "C'est la solution la plus simple et gratuite. Télécharge l'application « L'Identité Numérique La Poste » sur ton téléphone, ou crée ton compte sur lidentitenumerique.laposte.fr. Il faut avoir 18 ans, une pièce d'identité valide, et un smartphone récent (Android 12+ ou iOS 16+).", visual: "phone", screenshot: "/screenshots/identitenumerique-laposte.jpg", screenshotAlt: "Page d'accueil du site officiel lidentitenumerique.laposte.fr" },
      { title: "Se faire aider en bureau de poste", text: "Si tu n'es pas à l'aise pour le faire seul en ligne, tu peux te rendre directement dans n'importe quel bureau de poste avec ta pièce d'identité : un employé t'aide à créer ton Identité Numérique sur place." },
      { title: "L'application France Identité (alternative)", text: "Il existe une autre solution, France Identité, gérée par l'État plutôt que La Poste. Elle demande une carte d'identité récente (format carte bancaire, depuis 2021) et est obligatoire pour voter par internet." },
      { title: "Utiliser son identité numérique", text: "Sur un site qui le propose, clique sur le bouton « FranceConnect+ », choisis « L'Identité Numérique La Poste », entre tes identifiants, puis confirme la connexion directement depuis l'application sur ton téléphone." }
    ] },

  // ============================================================
  // SANTÉ
  // ============================================================
  { id: 'sante-css', category: 'sante', icon: '🩺', title: 'La Complémentaire Santé Solidaire',
    description: "Vérifier ses droits et faire une demande de mutuelle gratuite ou à petit prix.",
    whatIsIt: "La Complémentaire Santé Solidaire (CSS) complète les remboursements de l'Assurance Maladie : avec elle, tu ne payes plus chez le médecin, le dentiste ou en pharmacie. Selon tes revenus, elle est gratuite ou coûte moins d'1€ par jour. Beaucoup de personnes y ont droit sans le savoir — le module « Vérifier tous mes droits en une fois » peut t'aider à le confirmer rapidement.",
    documents: ["Numéro de Sécurité Sociale", "Avis d'imposition ou de situation déclarative"],
    steps: [
      { title: "Vérifier si tu y as droit", text: "Utilise le simulateur gratuit sur mesdroitssociaux.gouv.fr pour savoir en quelques minutes si tu peux avoir la CSS.", visual: "document", screenshot: "/screenshots/mesdroitssociaux-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel mesdroitssociaux.gouv.fr" },
      { title: "Faire la demande sur ameli.fr", text: "Connecte-toi à ton compte ameli, puis va dans « Mes démarches » > « Demande de Complémentaire santé solidaire ».", visual: "lock" },
      { title: "Choisir un organisme gestionnaire", text: "Au moment de la demande, tu dois choisir l'organisme (mutuelle) qui gérera ta CSS. Si tu ne sais pas, l'Assurance Maladie peut s'en charger directement." },
      { title: "Attendre la réponse", text: "Ta CPAM étudie ta demande sous 2 mois. Ton attestation de droits apparaît ensuite dans ton compte ameli." },
      { title: "Renouveler chaque année", text: "La CSS est accordée pour un an. Pense à refaire une demande de renouvellement avant la fin, sinon tu perds ta couverture." }
    ] },

  { id: 'sante-doctolib', category: 'sante', icon: '📅', title: 'Prendre un rendez-vous médical en ligne',
    description: "Utiliser Doctolib pour trouver et réserver un rendez-vous chez un médecin, dentiste ou spécialiste.",
    whatIsIt: "Doctolib est le site le plus utilisé en France pour prendre rendez-vous médical, souvent plus rapide que d'appeler par téléphone. La plupart des médecins et spécialistes du Havre y sont inscrits.",
    documents: ["Carte Vitale ou numéro de Sécurité Sociale"],
    steps: [
      { title: "Aller sur doctolib.fr", text: "Ouvre le site officiel doctolib.fr ou l'application mobile Doctolib.", visual: "document", screenshot: "/screenshots/doctolib-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel doctolib.fr" },
      { title: "Chercher un professionnel", text: "Indique le type de médecin recherché (généraliste, dentiste...) et ta ville (Le Havre). La liste des créneaux disponibles s'affiche directement." },
      { title: "Choisir un créneau", text: "Clique sur un horaire qui te convient. Si c'est ta première visite, crée un compte avec ton email et tes informations." },
      { title: "Confirmer et gérer son rendez-vous", text: "Tu reçois un email et un SMS de confirmation. Tu peux annuler ou modifier ton rendez-vous directement depuis le site si besoin." }
    ] },

  { id: 'sante-urgences', category: 'sante', icon: '🚨', title: "Les numéros d'urgence",
    description: "Savoir quel numéro appeler en cas d'urgence, et quoi dire.",
    whatIsIt: "En cas d'urgence, appeler le bon numéro rapidement peut sauver une vie. Ces numéros sont gratuits, joignables 24h/24 même sans crédit sur le téléphone.",
    documents: [],
    steps: [
      { title: "112 — numéro d'urgence européen", text: "À utiliser si tu ne sais pas quel numéro appeler, ou en cas de doute. Il fonctionne partout en Europe.", visual: "phone" },
      { title: "15 — SAMU (urgence médicale)", text: "À appeler pour un problème de santé grave (accident, malaise, difficulté à respirer)." },
      { title: "17 — Police / Gendarmerie", text: "À appeler en cas de danger, vol, agression, ou besoin d'intervention des forces de l'ordre." },
      { title: "18 — Pompiers", text: "À appeler en cas d'incendie, d'accident de la route, ou de personne bloquée." },
      { title: "Quoi dire au téléphone", text: "Reste calme, donne ton adresse précise, explique ce qui se passe, et réponds aux questions posées. Ne raccroche pas avant qu'on te le dise." }
    ] },

  // ============================================================
  // ARGENT ET TRAVAIL
  // ============================================================
  { id: 'argent-banque', category: 'argent-travail', icon: '🏦', title: 'Ouvrir un compte bancaire',
    description: "Comprendre les étapes pour ouvrir un compte en banque en France.",
    whatIsIt: "Un compte bancaire est indispensable pour recevoir un salaire, la CAF, ou payer un loyer. En France, toute personne résidant légalement a le droit d'avoir un compte bancaire, même avec peu de revenus.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "Justificatif de revenus ou de situation (contrat de travail, attestation France Travail...)"],
    steps: [
      { title: "Choisir une banque", text: "Il existe des banques classiques (avec agence) et des banques en ligne (Boursorama, N26, Revolut...), souvent gratuites et avec une ouverture de compte plus rapide.", visual: "document" },
      { title: "Prendre rendez-vous ou faire la demande en ligne", text: "Dans une banque classique, prends rendez-vous en agence. Pour une banque en ligne, tout se fait depuis l'application, avec une photo de tes documents." },
      { title: "Le droit au compte", text: "Si une banque refuse de t'ouvrir un compte, tu peux demander à la Banque de France d'en désigner une qui devra accepter : c'est ce qu'on appelle le « droit au compte »." },
      { title: "Recevoir sa carte et son RIB", text: "Une fois le compte ouvert, tu reçois une carte bancaire et un RIB (Relevé d'Identité Bancaire), à donner à ton employeur ou à la CAF pour recevoir tes virements." }
    ] },

  { id: 'argent-cpf', category: 'argent-travail', icon: '🎓', title: 'Mon Compte Formation (CPF)',
    description: "Consulter ses droits à la formation professionnelle et s'inscrire à une formation financée.",
    whatIsIt: "Toute personne qui a travaillé en France cumule chaque année des droits à la formation sur son Compte Personnel de Formation (CPF), utilisables pour financer une formation qui t'intéresse. Beaucoup de gens ne savent pas qu'ils ont ce crédit disponible.",
    documents: ["Numéro de Sécurité Sociale", "Une identité numérique FranceConnect+ (via La Poste par exemple)"],
    steps: [
      { title: "Aller sur moncompteformation.gouv.fr", text: "C'est le seul site officiel. Méfie-toi des organismes qui proposent de « débloquer ton CPF » par téléphone : c'est souvent une arnaque.", visual: "document", screenshot: "/screenshots/moncompteformation-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel moncompteformation.gouv.fr" },
      { title: "Se connecter avec FranceConnect+", text: "Depuis 2026, la connexion nécessite une vérification d'identité renforcée (FranceConnect+), par exemple avec l'identité numérique de La Poste.", visual: "lock" },
      { title: "Consulter ses droits", text: "La rubrique « Mes droits formation » indique le montant disponible (en euros). Il est alimenté chaque année si tu as travaillé." },
      { title: "Chercher et choisir une formation", text: "Le moteur de recherche liste les formations éligibles (langue, informatique, métier...). Vérifie que l'organisme est bien certifié Qualiopi." }
    ] },

  { id: 'argent-fiche-paie', category: 'argent-travail', icon: '💰', title: 'Comprendre sa fiche de paie',
    description: "Savoir lire les informations principales d'un bulletin de salaire.",
    whatIsIt: "Une fiche de paie française contient beaucoup de lignes et peut sembler compliquée. Savoir la lire permet de vérifier que tout est correct et de la présenter comme justificatif pour d'autres démarches.",
    documents: [],
    steps: [
      { title: "Le salaire brut", text: "C'est le montant total avant les cotisations sociales (retraite, santé...). Ce n'est pas ce que tu reçois sur ton compte." },
      { title: "Le salaire net", text: "C'est le montant réellement versé sur ton compte bancaire, après déduction des cotisations." },
      { title: "Les cotisations sociales", text: "Ce sont des sommes prélevées automatiquement pour financer ta protection sociale (retraite, sécurité sociale, chômage)." },
      { title: "Le cumul annuel", text: "En bas de la fiche de paie, un total indique ce que tu as gagné depuis le début de l'année — utile pour ta déclaration d'impôts." }
    ] },

  { id: 'argent-rsa', category: 'argent-travail', icon: '💶', title: 'Le RSA (Revenu de Solidarité Active)',
    description: "Comprendre et demander le RSA si tes ressources sont très faibles.",
    whatIsIt: "Le RSA est une aide financière pour les personnes avec peu ou pas de revenus, versée par la CAF, pour garantir un minimum de ressources. Si tu n'es pas sûr(e) d'y avoir droit, le module « Vérifier tous mes droits en une fois » propose un simulateur qui te le dira en quelques minutes.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "RIB", "Justificatifs de ressources"],
    steps: [
      { title: "Vérifier son éligibilité", text: "Il faut avoir au moins 25 ans (ou être plus jeune avec des enfants), résider en France, et avoir des ressources faibles.", visual: "document", screenshot: "/screenshots/caf-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel caf.fr" },
      { title: "Faire la demande sur caf.fr", text: "Connecte-toi à ton compte CAF, puis va dans « Mes démarches » > « Faire une demande de RSA »." },
      { title: "Actualiser sa situation chaque trimestre", text: "Tu dois déclarer tes ressources tous les 3 mois pour continuer à recevoir le RSA." },
      { title: "L'accompagnement obligatoire", text: "En échange du RSA, tu dois signer un contrat d'engagement avec un accompagnement vers l'emploi ou la formation, souvent via France Travail." }
    ] },

  { id: 'argent-prime-activite', category: 'argent-travail', icon: '💵', title: "La prime d'activité",
    description: "Une aide financière pour les travailleurs aux revenus modestes.",
    whatIsIt: "Contrairement au RSA, la prime d'activité est faite pour les personnes qui travaillent déjà mais avec un salaire modeste. Elle complète les revenus chaque mois. Le module « Vérifier tous mes droits en une fois » permet de vérifier ton éligibilité en même temps que d'autres aides.",
    documents: ["Justificatifs de revenus des 3 derniers mois", "RIB"],
    steps: [
      { title: "Vérifier son éligibilité", text: "Utilise le simulateur sur caf.fr : il suffit d'indiquer tes revenus et ta situation familiale pour voir si tu y as droit.", visual: "document", screenshot: "/screenshots/caf-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel caf.fr" },
      { title: "Faire la demande sur caf.fr", text: "Dans ton compte CAF, va dans « Mes démarches » > « Faire une demande de prime d'activité »." },
      { title: "Déclarer ses revenus chaque trimestre", text: "Comme pour le RSA, une déclaration trimestrielle est nécessaire pour continuer à toucher la prime." }
    ] },

  { id: 'argent-arret-maladie', category: 'argent-travail', icon: '🤒', title: 'Déclarer un arrêt maladie',
    description: "Savoir quoi faire si le médecin te donne un arrêt de travail.",
    whatIsIt: "Si tu es malade et que ton médecin t'arrête, il faut transmettre l'arrêt à ton employeur et à la Sécurité Sociale rapidement pour être indemnisé et éviter des problèmes.",
    documents: ["Volet de l'arrêt de travail donné par le médecin"],
    steps: [
      { title: "Le médecin envoie l'arrêt automatiquement", text: "Aujourd'hui, la plupart des médecins transmettent l'arrêt de travail directement à l'Assurance Maladie en ligne — tu n'as rien à faire de ce côté.", visual: "document", screenshot: "/screenshots/ameli-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel ameli.fr" },
      { title: "Envoyer le volet employeur", text: "Le médecin te donne un « volet 3 » à envoyer ou remettre à ton employeur dans les 48 heures." },
      { title: "Suivre son arrêt sur ameli.fr", text: "Dans ton compte ameli, la rubrique « Mes démarches » permet de voir si ton arrêt a bien été reçu et le calcul de tes indemnités." }
    ] },

  { id: 'argent-cheque-energie', category: 'argent-travail', icon: '🔥', title: 'Le chèque énergie',
    description: "Une aide automatique pour payer ses factures d'électricité, de gaz ou de chauffage.",
    whatIsIt: "Le chèque énergie aide les foyers aux revenus modestes à payer leurs factures d'énergie. Il est en général envoyé automatiquement, mais certaines personnes doivent le demander elles-mêmes.",
    documents: ["Dernière facture d'électricité ou de gaz", "Avis d'imposition"],
    steps: [
      { title: "Vérifier si tu es concerné", text: "Le chèque est envoyé automatiquement aux foyers identifiés selon leurs revenus, entre avril et mai chaque année.", visual: "document" },
      { title: "Faire une demande si tu ne l'as pas reçu", text: "Si tu penses y avoir droit mais que tu n'as rien reçu, fais une demande sur chequeenergie.gouv.fr, jusqu'au 31 décembre.", screenshot: "/screenshots/chequeenergie-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel chequeenergie.gouv.fr" },
      { title: "Utiliser le chèque", text: "Tu peux l'utiliser en ligne (e-Chèque énergie) pour payer directement ton fournisseur, ou l'envoyer par courrier avec une facture." },
      { title: "Attention aux arnaques", text: "Aucune administration ne te demandera jamais tes coordonnées bancaires par téléphone ou SMS pour le chèque énergie." }
    ] },

  { id: 'argent-simulateurs-droits', category: 'argent-travail', icon: '🔎', title: 'Vérifier tous mes droits en une fois',
    description: "Utiliser deux simulateurs officiels et gratuits pour découvrir en quelques minutes toutes les aides auxquelles tu as droit.",
    whatIsIt: "Beaucoup de personnes ont droit à des aides (RSA, prime d'activité, CSS, aides au logement...) sans le savoir, simplement parce qu'elles n'ont jamais vérifié. Deux sites officiels et gratuits permettent de tout vérifier en une seule fois, plutôt que de chercher aide par aide : mesdroitssociaux.gouv.fr (pour tout le monde, plus de 50 aides) et le simulateur 1jeune1solution (spécialement pour les moins de 30 ans, plus de 1000 aides). Attention : ces sites ne remplacent pas les démarches elles-mêmes, ils t'indiquent seulement ce à quoi tu pourrais avoir droit, avec un lien vers chaque démarche à faire ensuite.",
    documents: ["Avis d'imposition ou revenus des 12 derniers mois", "Composition du foyer (nombre de personnes, enfants à charge)", "Situation de logement (locataire, propriétaire...)"],
    steps: [
      { title: "mesdroitssociaux.gouv.fr — pour tout le monde", text: "Ce portail officiel simule plus de 50 aides nationales et locales en une fois (RSA, prime d'activité, aides au logement, CSS, retraite...). Compte 5 à 10 minutes.", visual: "document", screenshot: "/screenshots/mesdroitssociaux-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel mesdroitssociaux.gouv.fr" },
      { title: "Se connecter avec FranceConnect (facultatif mais plus précis)", text: "Tu peux répondre de façon anonyme, ou te connecter avec FranceConnect pour que le site pré-remplisse automatiquement tes informations déjà connues des administrations." },
      { title: "1jeune1solution — spécialement pour les moins de 30 ans", text: "Si tu as moins de 30 ans (étudiant, en recherche d'emploi, en formation...), ce simulateur du ministère du Travail est encore plus complet sur cette tranche d'âge : bourses, logement, permis de conduire, santé, culture. Compte 7 minutes.", visual: "document" },
      { title: "Suivre les liens proposés", text: "À la fin de la simulation, chaque aide identifiée est accompagnée d'un lien direct vers le site officiel pour faire la demande réelle — les modules de cette plateforme peuvent t'aider pour beaucoup d'entre elles." },
      { title: "Refaire la simulation si ta situation change", text: "Un changement de revenus, de logement ou de situation familiale peut ouvrir de nouveaux droits : n'hésite pas à revenir faire la simulation régulièrement." }
    ] },

  { id: 'argent-auto-entrepreneur', category: 'argent-travail', icon: '💼', title: 'Créer son activité (auto-entrepreneur)',
    description: "Les grandes étapes pour déclarer une activité indépendante en ligne.",
    whatIsIt: "Le statut auto-entrepreneur (micro-entreprise) permet de démarrer une petite activité (vente, services, artisanat) avec des démarches simplifiées, sans avoir besoin de créer une vraie société.",
    documents: ["Pièce d'identité", "Justificatif de domicile"],
    steps: [
      { title: "Vérifier que l'activité est possible en micro-entreprise", text: "La plupart des activités de vente et de services sont possibles, sauf certaines professions réglementées." },
      { title: "S'inscrire sur le site officiel", text: "La déclaration se fait sur le Guichet unique des entreprises (formalites.entreprises.gouv.fr).", visual: "document" },
      { title: "Recevoir son numéro SIRET", text: "Après quelques jours, tu reçois un numéro SIRET qui officialise ton activité." },
      { title: "Déclarer son chiffre d'affaires", text: "Chaque mois ou trimestre, tu dois déclarer combien tu as gagné, même si c'est zéro, pour payer les cotisations correspondantes." }
    ] },

  // ============================================================
  // LOGEMENT
  // ============================================================
  { id: 'logement-prive', category: 'logement', icon: '🔑', title: 'Chercher un logement privé',
    description: "Utiliser les sites d'annonces pour trouver un logement à louer.",
    whatIsIt: "En plus du logement social, il est possible de louer directement auprès d'un particulier ou d'une agence via des sites d'annonces.",
    documents: ["Pièce d'identité", "Justificatifs de revenus (3 derniers bulletins de salaire)", "Un garant si demandé"],
    steps: [
      { title: "Utiliser les sites d'annonces", text: "Leboncoin, SeLoger, PAP (particulier à particulier) sont les plus utilisés pour chercher un logement en location.", visual: "document" },
      { title: "Préparer son dossier à l'avance", text: "Prépare une pièce d'identité, tes 3 derniers bulletins de salaire ou justificatifs de ressources, et si besoin un garant — cela accélère beaucoup les visites." },
      { title: "Se méfier des arnaques", text: "Ne jamais envoyer d'argent avant d'avoir visité le logement en personne. Si le prix est anormalement bas ou que le propriétaire refuse toute visite, c'est suspect." },
      { title: "Signer le bail", text: "Le contrat de location (bail) doit être lu attentivement avant signature : montant du loyer, charges, durée, dépôt de garantie." }
    ] },

  { id: 'logement-assurance', category: 'logement', icon: '🛡️', title: "Assurance habitation",
    description: "Comprendre pourquoi et comment souscrire une assurance pour son logement.",
    whatIsIt: "L'assurance habitation est obligatoire pour un locataire en France. Elle protège en cas d'incendie, dégât des eaux, ou pour indemniser un voisin en cas de problème venant de chez toi.",
    documents: ["Adresse du nouveau logement", "Date d'entrée dans les lieux"],
    steps: [
      { title: "Comparer les offres", text: "Les banques, mutuelles et assureurs classiques proposent tous des assurances habitation, à des prix très variables — compare avant de choisir." },
      { title: "Souscrire en ligne", text: "La souscription se fait généralement en quelques minutes sur le site de l'assureur, avec l'adresse du logement et la date d'entrée." },
      { title: "Recevoir son attestation", text: "Une attestation d'assurance est indispensable pour récupérer les clés de ton logement — demande-la dès la souscription." }
    ] },

  { id: 'logement-compteur', category: 'logement', icon: '💡', title: 'Ouvrir un compteur électricité/gaz',
    description: "Mettre en service l'électricité ou le gaz dans un nouveau logement.",
    whatIsIt: "En arrivant dans un nouveau logement, l'électricité (et parfois le gaz) doivent être ouverts à ton nom, sinon tu n'as pas de courant.",
    documents: ["Adresse exacte du logement", "Date d'entrée souhaitée", "RIB pour le prélèvement"],
    steps: [
      { title: "Choisir un fournisseur", text: "EDF est l'ancien fournisseur historique, mais il en existe d'autres (Engie, TotalEnergies...). Tu peux choisir librement.", visual: "document", screenshot: "/screenshots/edf-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel EDF Particulier" },
      { title: "Faire la demande en ligne", text: "Sur le site du fournisseur choisi, indique l'adresse du logement et la date à laquelle tu veux que ça soit ouvert." },
      { title: "Relever le compteur à l'entrée", text: "Note le chiffre affiché sur le compteur le jour de ton entrée dans les lieux, pour éviter de payer la consommation du locataire précédent." }
    ] },

  // ============================================================
  // FAMILLE
  // ============================================================
  { id: 'famille-livret', category: 'famille', icon: '📘', title: 'Livret de famille et actes de naissance',
    description: "Comprendre à quoi servent ces documents et comment les obtenir en ligne.",
    whatIsIt: "Le livret de famille regroupe les informations officielles sur ton mariage et tes enfants. Un acte de naissance est souvent demandé pour de nombreuses démarches (carte d'identité, mariage, retraite...).",
    documents: [],
    steps: [
      { title: "Demander un acte de naissance en ligne", text: "Si tu es né en France, la demande se fait sur service-public.fr, en indiquant la mairie de naissance.", visual: "document", screenshot: "/screenshots/servicepublic-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel service-public.fr" },
      { title: "Pour une naissance à l'étranger", text: "Il faut s'adresser au Service Central d'État Civil de Nantes (pour les Français nés à l'étranger) ou à l'ambassade du pays concerné." },
      { title: "Garder le livret de famille en lieu sûr", text: "C'est un document important à conserver : il sert par exemple pour inscrire un enfant à l'école ou faire une demande de prestations familiales." }
    ] },

  { id: 'famille-rentree', category: 'famille', icon: '🎒', title: 'Allocation de rentrée scolaire',
    description: "Une aide financière versée par la CAF chaque année pour la rentrée des classes.",
    whatIsIt: "Si tu as des enfants scolarisés entre 6 et 18 ans et des revenus modestes, la CAF verse une aide chaque année en août pour aider à payer les fournitures scolaires.",
    documents: [],
    steps: [
      { title: "Vérifier son éligibilité", text: "L'aide dépend de tes revenus et du nombre d'enfants scolarisés. Le montant est plus élevé selon l'âge de l'enfant." },
      { title: "Rien à faire dans la plupart des cas", text: "Si la CAF a déjà tes informations, l'aide est versée automatiquement fin août — vérifie simplement que ton dossier est à jour (adresse, situation)." },
      { title: "Déclarer la scolarisation si besoin", text: "Pour les enfants de 16 à 18 ans, tu dois parfois confirmer qu'ils sont toujours scolarisés depuis ton compte CAF." }
    ] },

  { id: 'famille-regroupement', category: 'famille', icon: '👪', title: 'Regroupement familial',
    description: "Faire venir son conjoint ou ses enfants en France.",
    whatIsIt: "Le regroupement familial permet à une personne étrangère installée régulièrement en France de faire venir son conjoint et ses enfants mineurs pour vivre avec elle.",
    documents: ["Titre de séjour", "Justificatifs de ressources", "Justificatif de logement suffisant", "Actes de naissance et de mariage"],
    steps: [
      { title: "Vérifier les conditions", text: "Il faut résider en France depuis au moins 18 mois, avoir des ressources stables, et un logement suffisamment grand pour la famille.", visual: "document" },
      { title: "Déposer la demande", text: "La demande se fait auprès de l'OFII (Office Français de l'Immigration et de l'Intégration), souvent via un dossier en ligne sur administration-etrangers-en-france.interieur.gouv.fr." },
      { title: "L'enquête logement", text: "Une visite peut être organisée pour vérifier que le logement est adapté à la taille de la famille." },
      { title: "Se faire accompagner", text: "Cette démarche est complexe : n'hésite pas à te faire aider par une association d'aide aux migrants ou ton formateur." }
    ] },

  { id: 'famille-pacs-mariage', category: 'famille', icon: '💍', title: 'PACS, mariage et état civil',
    description: "Comprendre les démarches pour se pacser ou se marier en France.",
    whatIsIt: "Le PACS (Pacte Civil de Solidarité) et le mariage sont deux façons différentes d'officialiser une vie de couple en France, avec des droits différents.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "Acte de naissance de moins de 3 mois"],
    steps: [
      { title: "PACS : où faire la demande", text: "Le PACS se fait à la mairie ou chez un notaire, avec une convention signée par les deux partenaires.", screenshot: "/screenshots/servicepublic-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel service-public.fr" },
      { title: "Mariage : le dossier à la mairie", text: "Il faut déposer un dossier à la mairie du lieu de résidence, avec les pièces d'identité et actes de naissance des deux futurs époux." },
      { title: "La publication des bans", text: "Avant un mariage, la mairie affiche une annonce publique (« bans ») pendant 10 jours minimum." },
      { title: "Mettre à jour ses papiers après", text: "Après un mariage ou un PACS, pense à mettre à jour ta situation auprès de la CAF, des impôts et de ton employeur." }
    ] },

  // ============================================================
  // PAPIERS ET CITOYENNETÉ
  // ============================================================
  { id: 'papiers-naturalisation', category: 'papiers-citoyennete', icon: '🇫🇷', title: 'La naturalisation française',
    description: "Comprendre les conditions et les étapes pour devenir français par naturalisation.",
    whatIsIt: "La naturalisation permet à une personne étrangère de devenir citoyenne française, avec les mêmes droits que les personnes nées françaises (dont le droit de vote).",
    documents: ["Titre de séjour", "Justificatifs de résidence en France", "Justificatifs de ressources et d'intégration"],
    steps: [
      { title: "Vérifier les conditions", text: "Il faut généralement résider en France depuis au moins 5 ans, avoir un niveau de français suffisant, et justifier de son intégration.", visual: "document" },
      { title: "Constituer son dossier", text: "Le dossier se dépose en ligne sur le site de l'Administration Numérique des Étrangers en France (ANEF)." },
      { title: "L'entretien individuel", text: "Un entretien est organisé en préfecture pour vérifier ton intégration et ta connaissance des valeurs de la République." },
      { title: "Le délai de réponse", text: "La procédure peut prendre plusieurs mois, voire plus d'un an. Une réponse négative peut être expliquée et parfois recontestée." }
    ] },

  { id: 'papiers-carte-grise', category: 'papiers-citoyennete', icon: '🚗', title: 'La carte grise en ligne',
    description: "Immatriculer un véhicule ou changer de titulaire après un achat.",
    whatIsIt: "La carte grise (certificat d'immatriculation) prouve que tu es le propriétaire officiel d'un véhicule. Depuis plusieurs années, cette démarche se fait uniquement en ligne, plus au guichet.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "Ancienne carte grise barrée (si achat d'occasion)", "Certificat de cession"],
    steps: [
      { title: "Aller sur le site officiel ANTS", text: "La démarche se fait sur ants.gouv.fr, le seul site officiel — méfie-toi des sites payants qui imitent ce service.", visual: "document", screenshot: "/screenshots/ants-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel ants.gouv.fr" },
      { title: "Créer son compte", text: "Un compte ANTS est nécessaire, avec ton email et tes informations personnelles." },
      { title: "Remplir la demande et payer la taxe", text: "Le prix dépend du véhicule (puissance, âge, région). Le paiement se fait directement en ligne par carte bancaire." },
      { title: "Recevoir sa carte grise", text: "Le document est envoyé par courrier sous quelques jours à ton domicile." }
    ] },

  { id: 'papiers-permis', category: 'papiers-citoyennete', icon: '🚙', title: 'Le permis de conduire',
    description: "Comprendre les étapes pour passer le permis ou faire reconnaître un permis étranger.",
    whatIsIt: "Le permis de conduire est souvent nécessaire pour travailler ou se déplacer, surtout hors du centre-ville. Les démarches varient si tu débutes ou si tu as déjà un permis d'un autre pays.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "Photo d'identité"],
    steps: [
      { title: "S'inscrire au code de la route", text: "Le code peut se préparer en auto-école ou en ligne (applications comme Ornikar, Code de la route ANTS gratuit).", screenshot: "/screenshots/permis-ants.jpg", screenshotAlt: "Page d'accueil du site officiel permisdeconduire.ants.gouv.fr" },
      { title: "Passer l'examen du code", text: "L'examen se passe dans un centre agréé, sur ordinateur, avec 40 questions." },
      { title: "Prendre des leçons de conduite", text: "Une fois le code obtenu, les leçons pratiques se font en auto-école, jusqu'à ce que le moniteur te juge prêt pour l'examen." },
      { title: "Échanger un permis étranger", text: "Si tu as déjà un permis obtenu à l'étranger, une procédure d'échange existe sur permisdeconduire.ants.gouv.fr, sous certaines conditions selon le pays d'origine." }
    ] },

  { id: 'papiers-listes-electorales', category: 'papiers-citoyennete', icon: '🗳️', title: 'Inscription sur les listes électorales',
    description: "S'inscrire pour pouvoir voter aux élections en France.",
    whatIsIt: "Pour voter en France, il faut être inscrit sur les listes électorales de sa commune. Ce droit concerne les citoyens français, et pour certaines élections locales, les citoyens européens.",
    documents: ["Pièce d'identité", "Justificatif de domicile"],
    steps: [
      { title: "Vérifier son inscription", text: "Sur service-public.fr, tu peux vérifier si tu es déjà inscrit sur les listes électorales de ta commune.", visual: "document", screenshot: "/screenshots/servicepublic-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel service-public.fr" },
      { title: "S'inscrire en ligne", text: "Si tu ne l'es pas, l'inscription se fait directement sur service-public.fr, avec une pièce d'identité et un justificatif de domicile." },
      { title: "Respecter les délais", text: "L'inscription doit être faite avant une date limite fixée avant chaque élection, généralement plusieurs semaines avant le scrutin." }
    ] },

  { id: 'papiers-aide-juridictionnelle', category: 'papiers-citoyennete', icon: '⚖️', title: 'Aide juridictionnelle',
    description: "Une aide de l'État pour payer un avocat quand on a peu de revenus.",
    whatIsIt: "Si tu as besoin d'un avocat (litige, divorce, démarche administrative complexe) mais que tu n'as pas les moyens de le payer, l'aide juridictionnelle peut prendre en charge tout ou partie des frais.",
    documents: ["Justificatifs de revenus", "Pièce d'identité", "Documents liés à l'affaire concernée"],
    steps: [
      { title: "Vérifier son éligibilité", text: "L'aide dépend de tes revenus et de ton patrimoine. Un simulateur est disponible sur justice.fr.", visual: "document" },
      { title: "Faire la demande", text: "Le formulaire de demande d'aide juridictionnelle est disponible sur justice.fr, à envoyer au bureau d'aide juridictionnelle du tribunal concerné." },
      { title: "Choisir son avocat", text: "Une fois l'aide accordée, tu peux choisir un avocat qui accepte l'aide juridictionnelle, ou t'en faire désigner un." }
    ] },

  // ============================================================
  // SÉCURITÉ ET VIE PRATIQUE
  // ============================================================
  { id: 'securite-arnaques', category: 'securite-pratique', icon: '⚠️', title: 'Reconnaître les arnaques en ligne',
    description: "Apprendre à repérer les faux messages et à protéger ses informations personnelles.",
    whatIsIt: "Les arnaques par SMS ou email sont très fréquentes et ciblent souvent les personnes peu habituées au numérique. Savoir les reconnaître protège ton argent et tes données.",
    documents: [],
    steps: [
      { title: "Se méfier de l'urgence", text: "Un message qui te met la pression (« Votre compte sera bloqué dans 24h ! ») est presque toujours une arnaque, appelée « phishing »." },
      { title: "Vérifier l'adresse exacte", text: "Regarde bien l'adresse email ou le lien : « ameli-fr.securite.com » n'est pas ameli.fr, même si ça y ressemble." },
      { title: "Ne jamais donner ses codes bancaires", text: "Aucune administration (CAF, impôts, banque...) ne te demandera jamais ton code de carte bancaire par SMS, email ou téléphone." },
      { title: "En cas de doute, ne clique pas", text: "Va directement sur le site officiel en tapant l'adresse toi-même, plutôt que de cliquer sur un lien reçu par message." }
    ] },

  { id: 'securite-appels-etranger', category: 'securite-pratique', icon: '📞', title: 'Appeler sa famille à l\'étranger',
    description: "Utiliser WhatsApp ou une application similaire pour des appels gratuits à l'international.",
    whatIsIt: "Les appels téléphoniques classiques vers l'étranger coûtent souvent cher. Les applications comme WhatsApp permettent d'appeler et de voir sa famille gratuitement via internet.",
    documents: [],
    steps: [
      { title: "Installer WhatsApp", text: "Télécharge l'application gratuite depuis le Play Store (Android) ou l'App Store (iPhone), avec ton numéro de téléphone.", visual: "phone" },
      { title: "Ajouter un contact", text: "La personne doit aussi avoir WhatsApp installé avec son numéro. Elle apparaît automatiquement dans tes contacts si son numéro est enregistré." },
      { title: "Lancer un appel vidéo", text: "Ouvre la conversation, puis appuie sur l'icône caméra 📹 pour un appel vidéo, ou sur le téléphone 📞 pour un appel audio simple." },
      { title: "Avoir du Wi-Fi ou des données", text: "Ces appels utilisent internet, pas ton forfait téléphonique classique — vérifie que tu as du Wi-Fi ou assez de données mobiles." }
    ] },

  { id: 'securite-mediatheque', category: 'securite-pratique', icon: '📚', title: 'La médiathèque du Havre',
    description: "Un lieu gratuit avec accès internet, ordinateurs, et parfois de l'aide numérique.",
    whatIsIt: "Le réseau des bibliothèques du Havre (plusieurs médiathèques dans différents quartiers) propose un accès gratuit à internet, des ordinateurs en libre-service, et des ateliers d'initiation à l'informatique — un bon complément à ta formation.",
    documents: ["Justificatif de domicile pour s'inscrire"],
    steps: [
      { title: "S'inscrire gratuitement", text: "L'inscription au réseau des bibliothèques du Havre (bibliotheques.lehavre.fr) est gratuite et donne accès à toutes les médiathèques de la ville.", visual: "document", screenshot: "/screenshots/bibliotheques-lehavre.jpg", screenshotAlt: "Page d'accueil du site officiel bibliotheques.lehavre.fr" },
      { title: "Utiliser les ordinateurs sur place", text: "Chaque médiathèque (Léopold Sédar Senghor, Martin Luther King, Caucriauville, Oscar Niemeyer...) dispose de postes informatiques avec internet, scanner et imprimante." },
      { title: "Profiter du Wi-Fi gratuit", text: "Toutes les médiathèques proposent un Wi-Fi gratuit, utile si tu n'as pas internet chez toi." },
      { title: "Participer aux ateliers", text: "Des ateliers « Initiation à l'informatique » sont régulièrement organisés — demande le programme sur place ou sur le site." }
    ] }
]

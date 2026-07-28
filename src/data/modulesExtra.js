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
    simple: {
      description: "Créer un email. Écrire, envoyer, recevoir des messages.",
      whatIsIt: "Un email est nécessaire pour presque toutes les démarches en France (CAF, impôts, France Travail...). Sans email, tu ne peux pas créer de compte sur ces sites.",
      steps: [
        { title: "Choisir un service gratuit", text: "Les plus utilisés sont Gmail et Outlook. Les deux sont gratuits." },
        { title: "Créer son compte", text: "Va sur gmail.com ou outlook.com. Clique sur « Créer un compte ». Choisis un nom. Choisis un mot de passe." },
        { title: "Écrire un message", text: "Clique sur « Nouveau message ». Écris l'adresse du destinataire. Écris un objet. Écris ton message. Clique sur « Envoyer »." },
        { title: "Joindre un document", text: "Pour envoyer un fichier, clique sur le trombone 📎. Choisis le fichier sur ton téléphone." },
        { title: "Retrouver un message important", text: "Utilise la barre de recherche en haut. Tape un mot-clé, exemple « CAF »." }
      ]
    },
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
    simple: {
      description: "Créer et retenir un mot de passe sûr.",
      whatIsIt: "Un mot de passe faible (comme « 123456 ») est facile à deviner. Ça met en danger tes comptes (banque, email, CAF...). Un bon mot de passe te protège.",
      steps: [
        { title: "Les règles d'un mot de passe fort", text: "Au moins 8 lettres. Des majuscules. Des minuscules. Des chiffres. Évite ton nom et ta date de naissance." },
        { title: "Une astuce pour s'en souvenir", text: "Prends une phrase facile. Transforme-la. Exemple : « J'aime le café le matin » devient « J@imeLc@fLm2024! »." },
        { title: "Ne jamais réutiliser le même mot de passe", text: "Un site est piraté ? Tous tes comptes avec le même mot de passe sont en danger. Utilise un mot de passe différent pour chaque compte important." },
        { title: "Où noter ses mots de passe en sécurité", text: "Ton téléphone peut les retenir pour toi. Sinon, écris-les sur un carnet papier chez toi. C'est plus sûr qu'un fichier sur l'ordinateur." }
      ]
    },
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
    simple: {
      description: "Transformer une photo de document en fichier propre.",
      whatIsIt: "Beaucoup de démarches en ligne demandent d'envoyer une pièce d'identité ou un document. Savoir « scanner » avec son téléphone évite d'avoir besoin d'un vrai scanner.",
      steps: [
        { title: "Utiliser l'appareil photo normal", text: "Pose le document bien à plat. Choisis un endroit bien éclairé. Prends la photo bien droite." },
        { title: "Utiliser une application de scan", text: "Des applications gratuites (Adobe Scan, Google Drive) redressent l'image. Le résultat est plus propre qu'une simple photo." },
        { title: "Convertir en PDF", text: "Ces applications enregistrent en PDF. C'est le format le plus demandé par les administrations." },
        { title: "Envoyer le fichier", text: "Le fichier est prêt. Joins-le par email. Ou choisis-le sur un site avec le bouton « Choisir un fichier »." }
      ]
    },
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
    simple: {
      description: "Garder une copie de sécurité de ses photos et documents.",
      whatIsIt: "Ton téléphone est perdu, volé ou cassé ? Tu perds tout ce qu'il contient, sauf si c'est sauvegardé ailleurs. C'est important pour tes documents administratifs.",
      steps: [
        { title: "Activer la sauvegarde automatique", text: "Sur Android : Google Photos. Sur iPhone : iCloud. Tes photos se sauvegardent seules sur internet." },
        { title: "Créer un dossier « Documents importants »", text: "Range tes documents scannés dans un dossier. Utilise Google Drive ou iCloud." },
        { title: "Vérifier l'espace disponible", text: "Les services gratuits ont un espace limité. L'espace est plein ? Fais du tri, ou paye un peu plus." }
      ]
    },
    steps: [
      { title: "Activer la sauvegarde automatique", text: "Sur Android : Google Photos. Sur iPhone : iCloud. Ces applications sauvegardent automatiquement tes photos sur internet dès que tu es connecté au Wi-Fi." },
      { title: "Créer un dossier « Documents importants »", text: "Range tes documents scannés (titre de séjour, contrats, diplômes) dans un dossier dédié sur Google Drive ou iCloud, pour les retrouver facilement." },
      { title: "Vérifier l'espace disponible", text: "Les services gratuits offrent un espace limité (environ 15 Go pour Google, 5 Go pour iCloud). Si l'espace est plein, il faut soit payer un peu plus, soit faire du tri." }
    ] },

  { id: 'num-visio', category: 'numerique-base', icon: '📹', title: 'Utiliser une visioconférence',
    description: "Participer à un appel vidéo (Zoom, Teams, Google Meet) pour un entretien ou un rendez-vous à distance.",
    whatIsIt: "De plus en plus d'entretiens d'embauche, de rendez-vous avec des administrations ou des cours se font par visioconférence plutôt qu'en personne.",
    documents: [],
    simple: {
      description: "Participer à un appel vidéo pour un entretien à distance.",
      whatIsIt: "De plus en plus d'entretiens d'embauche se font par vidéo, plutôt qu'en personne.",
      steps: [
        { title: "Cliquer sur le lien de la réunion", text: "Tu reçois un lien par email. Clique dessus quelques minutes avant l'heure." },
        { title: "Autoriser la caméra et le micro", text: "Une fenêtre demande d'autoriser la caméra et le micro. Clique sur « Autoriser »." },
        { title: "Se mettre en sourdine quand on ne parle pas", text: "Le bouton micro barré coupe ton son. Ça évite les bruits de fond." },
        { title: "Bien se préparer avant l'appel", text: "Teste ton internet avant. Installe-toi dans un endroit calme et bien éclairé." }
      ]
    },
    steps: [
      { title: "Cliquer sur le lien de la réunion", text: "Tu reçois souvent un lien par email (ex : « Rejoindre la réunion Zoom »). Clique dessus quelques minutes avant l'heure prévue.", visual: "calendar", screenshot: "/screenshots/zoom-accueil.jpg", screenshotAlt: "Page d'accueil du site zoom.us" },
      { title: "Autoriser la caméra et le micro", text: "Une fenêtre demande d'autoriser l'accès à ta caméra et ton micro : clique sur « Autoriser », sinon les autres ne te verront ni ne t'entendront." },
      { title: "Se mettre en sourdine quand on ne parle pas", text: "Le bouton micro barré permet de couper ton son pour éviter les bruits de fond quand ce n'est pas ton tour de parler." },
      { title: "Bien se préparer avant l'appel", text: "Teste ta connexion internet, installe-toi dans un endroit calme et bien éclairé, et prépare tes documents à l'avance si besoin." }
    ] },

  { id: 'num-signature', category: 'numerique-base', icon: '✍️', title: 'Signer un document électroniquement',
    description: "Apposer sa signature sur un document numérique sans avoir à l'imprimer.",
    whatIsIt: "De plus en plus de contrats (travail, logement, banque) se signent maintenant en ligne plutôt que sur papier, avec des outils comme DocuSign ou YouSign.",
    documents: [],
    simple: {
      description: "Signer un document sur internet, sans l'imprimer.",
      whatIsIt: "De plus en plus de contrats se signent en ligne, avec des outils comme DocuSign ou YouSign.",
      steps: [
        { title: "Recevoir le document à signer", text: "Tu reçois un email avec un lien « Signer le document »." },
        { title: "Vérifier le document avant de signer", text: "Lis bien le document avant de signer. Une signature électronique a la même valeur qu'une signature papier." },
        { title: "Signer avec le doigt ou la souris", text: "Dessine ta signature avec ton doigt ou ta souris. Ou tape ton nom." },
        { title: "Récupérer une copie signée", text: "Un email arrive avec le document signé. Garde-le." }
      ]
    },
    steps: [
      { title: "Recevoir le document à signer", text: "Tu reçois généralement un email avec un lien « Signer le document ».", screenshot: "/screenshots/yousign-accueil.jpg", screenshotAlt: "Page d'accueil du site yousign.com" },
      { title: "Vérifier le document avant de signer", text: "Lis bien le contenu avant de signer — une signature électronique a la même valeur légale qu'une signature papier." },
      { title: "Signer avec le doigt ou la souris", text: "L'outil te demande de dessiner ta signature avec ton doigt (téléphone/tablette) ou ta souris, ou de taper ton nom qui sera transformé en signature." },
      { title: "Récupérer une copie signée", text: "Une fois signé, un email de confirmation avec le document signé t'est généralement envoyé — garde-le précieusement." }
    ] },

  { id: 'num-identite-numerique', category: 'numerique-base', icon: '🆔', title: 'Mon identité numérique',
    description: "Comprendre à quoi sert une identité numérique et comment en créer une (FranceConnect+, Identité Numérique La Poste).",
    whatIsIt: "De plus en plus de démarches sensibles (Mon Compte Formation, changement de RIB, ouverture de compte bancaire en ligne) demandent une preuve d'identité renforcée sur internet, appelée « identité numérique » — un peu comme montrer sa carte d'identité, mais en ligne. Sans elle, certains sites te bloqueront bientôt l'accès.",
    documents: ["Pièce d'identité en cours de validité (carte d'identité, passeport, ou titre de séjour d'au moins 5 ans de validité)", "Un smartphone"],
    simple: {
      description: "Créer une identité numérique (FranceConnect+, La Poste).",
      whatIsIt: "Beaucoup de démarches importantes (Mon Compte Formation, changer de RIB) demandent une preuve d'identité renforcée sur internet. C'est l'« identité numérique ». Sans elle, certains sites te bloqueront bientôt.",
      steps: [
        { title: "FranceConnect et FranceConnect+ : la différence", text: "FranceConnect te connecte à des sites simples avec un compte existant. FranceConnect+ est plus sûr. C'est obligatoire pour Mon Compte Formation." },
        { title: "Créer son Identité Numérique La Poste", text: "C'est la solution la plus simple et gratuite. Télécharge l'application « L'Identité Numérique La Poste ». Ou va sur lidentitenumerique.laposte.fr. Il te faut 18 ans, une pièce d'identité, un smartphone récent." },
        { title: "Se faire aider en bureau de poste", text: "Pas à l'aise seul ? Va dans un bureau de poste avec ta pièce d'identité. Un employé t'aide sur place." },
        { title: "L'application France Identité (alternative)", text: "Il existe une autre solution : France Identité. Elle demande une carte d'identité récente (depuis 2021)." },
        { title: "Utiliser son identité numérique", text: "Sur un site, clique sur « FranceConnect+ ». Choisis « L'Identité Numérique La Poste ». Confirme sur ton téléphone." }
      ]
    },
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
    simple: {
      description: "Vérifier ses droits et demander une mutuelle gratuite.",
      whatIsIt: "La CSS complète ce que rembourse l'Assurance Maladie. Avec elle, tu ne payes plus chez le médecin, le dentiste ou en pharmacie. Selon tes revenus, elle est gratuite ou coûte moins d'1€ par jour.",
      steps: [
        { title: "Vérifier si tu y as droit", text: "Utilise le simulateur gratuit sur mesdroitssociaux.gouv.fr. En quelques minutes, tu sais si tu peux avoir la CSS." },
        { title: "Faire la demande sur ameli.fr", text: "Connecte-toi à ton compte ameli. Va dans « Mes démarches ». Clique sur « Demande de Complémentaire santé solidaire »." },
        { title: "Choisir un organisme gestionnaire", text: "Tu dois choisir une mutuelle pour gérer ta CSS. Tu ne sais pas ? L'Assurance Maladie peut s'en charger." },
        { title: "Attendre la réponse", text: "La CPAM étudie ta demande en 2 mois. Ton attestation apparaît ensuite dans ton compte ameli." },
        { title: "Renouveler chaque année", text: "La CSS dure un an. Refais une demande avant la fin, sinon tu perds ta couverture." }
      ]
    },
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
    simple: {
      description: "Trouver un rendez-vous chez le médecin sur Doctolib.",
      whatIsIt: "Doctolib est un site internet. Beaucoup de gens en France l'utilisent. Il sert à prendre un rendez-vous chez le médecin. C'est souvent plus rapide que téléphoner. Beaucoup de médecins du Havre sont sur Doctolib.",
      steps: [
        { title: "Aller sur doctolib.fr", text: "Ouvre le site doctolib.fr. Ou ouvre l'application Doctolib sur ton téléphone.", visual: "document", screenshot: "/screenshots/doctolib-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel doctolib.fr" },
        { title: "Chercher un professionnel", text: "Écris le type de médecin (généraliste, dentiste...). Écris ta ville : Le Havre. Les rendez-vous libres s'affichent." },
        { title: "Choisir un créneau", text: "Clique sur une heure qui te va. Première fois ? Crée un compte avec ton email." },
        { title: "Confirmer et gérer son rendez-vous", text: "Tu reçois un email et un SMS. C'est la confirmation. Tu peux annuler ton rendez-vous sur le site." },
        { title: "Difficile de trouver un médecin qui accepte de nouveaux patients ?", text: "Utilise le site annuairesante.ameli.fr. Cherche par ville. Cherche par métier (médecin, dentiste...). Coche « accepte de nouveaux patients ». Toujours rien ? Va sur ton compte ameli. Clique sur « Mes démarches »." }
      ]
    },
    steps: [
      { title: "Aller sur doctolib.fr", text: "Ouvre le site officiel doctolib.fr ou l'application mobile Doctolib.", visual: "document", screenshot: "/screenshots/doctolib-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel doctolib.fr" },
      { title: "Chercher un professionnel", text: "Indique le type de médecin recherché (généraliste, dentiste...) et ta ville (Le Havre). La liste des créneaux disponibles s'affiche directement." },
      { title: "Choisir un créneau", text: "Clique sur un horaire qui te convient. Si c'est ta première visite, crée un compte avec ton email et tes informations." },
      { title: "Confirmer et gérer son rendez-vous", text: "Tu reçois un email et un SMS de confirmation. Tu peux annuler ou modifier ton rendez-vous directement depuis le site si besoin." },
      { title: "Difficile de trouver un médecin qui accepte de nouveaux patients ?", text: "Utilise l'Annuaire Santé, le site officiel de l'Assurance Maladie (annuairesante.ameli.fr) : tu peux chercher par ville et par spécialité, avec un filtre « accepte de nouveaux patients ». Si tu n'y arrives toujours pas, tu peux signaler la difficulté depuis ton compte ameli, rubrique « Mes démarches »." }
    ] },

  { id: 'sante-doctoome', category: 'sante', icon: '💊', title: 'Trouver un médicament ou un praticien (Doctoome)',
    description: "Utiliser le site Doctoome pour trouver un professionnel de santé adapté et vérifier la disponibilité d'un médicament en pharmacie.",
    whatIsIt: "Doctoome (doctoome.com) est un site gratuit qui complète Doctolib : en plus de trouver un rendez-vous, il permet de vérifier quelles pharmacies proches ont un médicament en stock (utile si une pharmacie est en rupture), et de créer un profil santé personnel pour recevoir des recommandations adaptées à sa situation.",
    documents: [],
    simple: {
      description: "Trouver un médicament ou un médecin sur Doctoome.",
      whatIsIt: "Doctoome est un site gratuit. Il complète Doctolib. Il permet de vérifier quelle pharmacie a un médicament. Il permet aussi de créer un profil santé.",
      steps: [
        { title: "Aller sur doctoome.com", text: "Ouvre le site doctoome.com sur ton ordinateur ou ton téléphone." },
        { title: "Trouver un praticien adapté", text: "Clique sur « Accès aux soins ». Tape le type de médecin. Tape ta ville. Le site te propose des praticiens." },
        { title: "Vérifier la disponibilité d'un médicament", text: "Clique sur « Trouver mon médicament ». Tape le nom du médicament. Tape ta ville. Le site montre les pharmacies qui l'ont." },
        { title: "Créer un profil santé (facultatif)", text: "Crée un compte gratuit. Note tes médecins. Note tes antécédents. Ce n'est pas obligatoire." }
      ]
    },
    steps: [
      { title: "Aller sur doctoome.com", text: "Ouvre le site officiel doctoome.com sur ton ordinateur ou ton téléphone.", visual: "document" },
      { title: "Trouver un praticien adapté", text: "Clique sur « Accès aux soins » (ou « Trouver mon praticien »). Indique le type de professionnel recherché et ta ville : le site propose des praticiens adaptés, ainsi que des associations de patients utiles selon ta situation." },
      { title: "Vérifier la disponibilité d'un médicament", text: "Clique sur « Trouver mon médicament ». Indique le nom du médicament recherché et ta ville : le site indique quelles pharmacies proches en ont en stock, pratique en cas de rupture chez ton pharmacien habituel." },
      { title: "Créer un profil santé (facultatif)", text: "En créant un compte gratuit, tu peux enregistrer tes médecins et tes antécédents médicaux pour recevoir des recommandations plus précises. Cette étape n'est pas obligatoire pour utiliser les autres fonctions du site." }
    ] },

  { id: 'sante-urgences', category: 'sante', icon: '🚨', title: "Les numéros d'urgence et d'aide",
    description: "Savoir quel numéro appeler en cas d'urgence, en cas de violences, ou pour trouver de l'aide alimentaire.",
    whatIsIt: "En cas d'urgence, appeler le bon numéro rapidement peut sauver une vie. Ces numéros sont gratuits, joignables 24h/24 même sans crédit sur le téléphone. D'autres numéros existent aussi pour les personnes en difficulté (violences, besoin d'un hébergement), et des associations locales aident pour se nourrir quand c'est difficile.",
    documents: [],
    simple: {
      description: "Savoir quel numéro appeler en cas d'urgence, de violence, ou pour trouver de l'aide.",
      whatIsIt: "En cas d'urgence, appeler le bon numéro vite peut sauver une vie. Ces numéros sont gratuits, 24h/24, même sans crédit. D'autres numéros aident aussi les personnes en difficulté.",
      steps: [
        { title: "112 — numéro d'urgence européen", text: "À utiliser si tu ne sais pas quel numéro appeler. Il marche partout en Europe." },
        { title: "15 — SAMU (urgence médicale)", text: "À appeler pour un problème de santé grave." },
        { title: "17 — Police / Gendarmerie", text: "À appeler en cas de danger, vol, agression." },
        { title: "18 — Pompiers", text: "À appeler en cas d'incendie ou d'accident." },
        { title: "Quoi dire au téléphone", text: "Reste calme. Donne ton adresse précise. Explique ce qui se passe. Ne raccroche pas avant qu'on te le dise." },
        { title: "3919 — Violences conjugales et familiales", text: "Numéro gratuit et anonyme, 24h/24, en plus de 200 langues. Ce n'est pas un numéro d'urgence. Danger immédiat ? Appelle le 17." },
        { title: "119 — Enfance en danger", text: "Numéro gratuit, 24h/24. Pour signaler un enfant en danger." },
        { title: "115 — Hébergement d'urgence (SAMU social)", text: "Numéro gratuit. Pas de logement pour la nuit ? Appelle ce numéro. On t'oriente vers une solution." },
        { title: "Trouver de l'aide alimentaire au Havre", text: "Plusieurs associations donnent gratuitement à manger : Banque Alimentaire (170 boulevard Jules Durand), Restos du Cœur (40 rue des Chantiers, ☎ 02 35 24 53 50), Secours Populaire (10 allée Georges Pollitzer, ☎ 02 35 45 73 69)." },
        { title: "Des paniers de légumes pas chers : Graine en Main", text: "Graine en Main vend des paniers de légumes bio chaque semaine. Beaucoup de points de retrait au Havre. Téléphone : 09 62 51 16 15." },
        { title: "Trouver des vêtements à petit prix ou gratuits", text: "L'association Le Grenier (28 rue du Capuchet) vend des vêtements pas chers. Deux boutiques « Frip et Chic ». La carte éthik'do donne un prix réduit." }
      ]
    },
    steps: [
      { title: "112 — numéro d'urgence européen", text: "À utiliser si tu ne sais pas quel numéro appeler, ou en cas de doute. Il fonctionne partout en Europe.", visual: "phone" },
      { title: "15 — SAMU (urgence médicale)", text: "À appeler pour un problème de santé grave (accident, malaise, difficulté à respirer)." },
      { title: "17 — Police / Gendarmerie", text: "À appeler en cas de danger, vol, agression, ou besoin d'intervention des forces de l'ordre." },
      { title: "18 — Pompiers", text: "À appeler en cas d'incendie, d'accident de la route, ou de personne bloquée." },
      { title: "Quoi dire au téléphone", text: "Reste calme, donne ton adresse précise, explique ce qui se passe, et réponds aux questions posées. Ne raccroche pas avant qu'on te le dise." },
      { title: "3919 — Violences conjugales et familiales", text: "Numéro national d'écoute gratuit et anonyme, 24h/24 et 7j/7, disponible en plus de 200 langues. Ce n'est pas un numéro d'urgence : en cas de danger immédiat, appelle le 17. Le 3919 informe, écoute, et oriente vers des associations locales (par exemple le CIDFF au Havre).", visual: "phone" },
      { title: "119 — Enfance en danger", text: "Numéro national gratuit, 24h/24, pour signaler une situation où un enfant est en danger ou risque de l'être." },
      { title: "115 — Hébergement d'urgence (SAMU social)", text: "Numéro gratuit à appeler si tu n'as pas de logement pour la nuit. Une personne évalue ta situation et t'oriente vers une solution d'urgence (hébergement, association, service social)." },
      { title: "Trouver de l'aide alimentaire au Havre", text: "Plusieurs associations distribuent gratuitement des colis alimentaires ou des repas aux personnes qui en ont besoin, sans jugement : Banque Alimentaire du Havre et de la Pointe de Caux (170 boulevard Jules Durand), Restos du Cœur (40 rue des Chantiers, ☎ 02 35 24 53 50), Secours Populaire (10 allée Georges Pollitzer, ☎ 02 35 45 73 69). Le CCAS du Havre peut aussi orienter vers la structure la plus adaptée à ta situation.", visual: "document" },
      { title: "Des paniers de légumes à prix accessible : Graine en Main", text: "Graine en Main est un jardin d'insertion qui propose des paniers de légumes bio par abonnement (Petit Panier 4-5 légumes, ou Grand Panier 7-8 légumes), avec de nombreux points de retrait au Havre et alentours (marchés, quartiers, structures sociales). Renseignements au 09 62 51 16 15 ou sur graineenmain.cocagnebio.fr." },
      { title: "Trouver des vêtements à petit prix ou gratuits", text: "L'association Le Grenier (28 rue du Capuchet) collecte et revend des vêtements, chaussures et objets de seconde main à très petit prix, dans deux boutiques « Frip et Chic » (71 cours de la République, et 241 avenue du 8 mai 1945 à Caucriauville) et une Ressourcerie (31 rue Denis Cordonnier). La carte éthik'do, disponible gratuitement sur place, permet un accès à prix réduit pour les personnes qui en ont besoin.", visual: "document" }
    ] },

  // ============================================================
  // ARGENT ET TRAVAIL
  // ============================================================
  { id: 'argent-banque', category: 'argent-travail', icon: '🏦', title: 'Ouvrir un compte bancaire',
    description: "Comprendre les étapes pour ouvrir un compte en banque en France.",
    whatIsIt: "Un compte bancaire est indispensable pour recevoir un salaire, la CAF, ou payer un loyer. En France, toute personne résidant légalement a le droit d'avoir un compte bancaire, même avec peu de revenus.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "Justificatif de revenus ou de situation (contrat de travail, attestation France Travail...)"],
    simple: {
      description: "Ouvrir un compte en banque en France.",
      whatIsIt: "Un compte bancaire est nécessaire pour recevoir un salaire, la CAF, ou payer un loyer. Toute personne qui vit légalement en France a le droit d'avoir un compte, même avec peu d'argent.",
      steps: [
        { title: "Choisir une banque", text: "Il y a des banques classiques (avec agence). Il y a des banques en ligne (Boursorama, N26...), souvent gratuites." },
        { title: "Prendre rendez-vous ou faire la demande en ligne", text: "Banque classique ? Prends rendez-vous en agence. Banque en ligne ? Tout se fait dans l'application." },
        { title: "Le droit au compte", text: "Une banque refuse ? Demande à la Banque de France d'en choisir une pour toi. C'est le « droit au compte »." },
        { title: "Recevoir sa carte et son RIB", text: "Le compte est ouvert. Tu reçois une carte bancaire et un RIB. Donne le RIB à ton employeur ou à la CAF." }
      ]
    },
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
    simple: {
      description: "Consulter ses droits à la formation (CPF).",
      whatIsIt: "Chaque personne qui a travaillé en France a des droits à la formation chaque année. C'est le Compte Personnel de Formation. Beaucoup de gens ne savent pas qu'ils ont ce crédit.",
      steps: [
        { title: "Aller sur moncompteformation.gouv.fr", text: "C'est le seul site officiel. Méfie-toi de ceux qui proposent de « débloquer ton CPF » par téléphone : c'est souvent une arnaque." },
        { title: "Se connecter avec FranceConnect+", text: "Depuis 2026, il faut une identité vérifiée (FranceConnect+). Exemple : l'identité numérique de La Poste." },
        { title: "Consulter ses droits", text: "Va dans « Mes droits formation ». Tu vois le montant disponible, en euros." },
        { title: "Chercher et choisir une formation", text: "Le moteur de recherche liste les formations possibles. Vérifie que l'organisme est certifié Qualiopi." }
      ]
    },
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
    simple: {
      description: "Comprendre sa fiche de paie.",
      whatIsIt: "Une fiche de paie a beaucoup de lignes. Ça peut sembler compliqué. Savoir la lire aide à vérifier que tout est correct.",
      steps: [
        { title: "Le salaire brut", text: "C'est le montant total, avant les cotisations. Ce n'est pas ce que tu reçois sur ton compte." },
        { title: "Le salaire net", text: "C'est le montant réel versé sur ton compte, après les cotisations." },
        { title: "Les cotisations sociales", text: "Ce sont des sommes prises automatiquement. Elles financent ta retraite, ta santé, le chômage." },
        { title: "Le cumul annuel", text: "En bas de la fiche, un total montre ce que tu as gagné depuis janvier. C'est utile pour tes impôts." }
      ]
    },
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
    simple: {
      description: "Comprendre et demander le RSA.",
      whatIsIt: "Le RSA aide les personnes avec peu ou pas de revenus. La CAF le verse. Ça garantit un minimum d'argent pour vivre.",
      steps: [
        { title: "Vérifier son éligibilité", text: "Il faut avoir au moins 25 ans (ou être plus jeune avec des enfants). Vivre en France. Avoir peu de revenus." },
        { title: "Faire la demande sur caf.fr", text: "Connecte-toi à ton compte CAF. Va dans « Mes démarches ». Clique sur « Faire une demande de RSA »." },
        { title: "Actualiser sa situation chaque trimestre", text: "Déclare tes revenus tous les 3 mois. C'est obligatoire pour continuer à recevoir le RSA." },
        { title: "L'accompagnement obligatoire", text: "En échange du RSA, tu signes un contrat. Un accompagnement vers l'emploi ou la formation t'est proposé." }
      ]
    },
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
    simple: {
      description: "Une aide pour les travailleurs aux revenus modestes.",
      whatIsIt: "La prime d'activité est différente du RSA. Elle est pour les personnes qui travaillent déjà, mais avec un petit salaire. Elle complète les revenus chaque mois.",
      steps: [
        { title: "Vérifier son éligibilité", text: "Utilise le simulateur sur caf.fr. Donne tes revenus et ta situation. Tu sais tout de suite si tu y as droit." },
        { title: "Faire la demande sur caf.fr", text: "Dans ton compte CAF, va dans « Mes démarches ». Clique sur « Faire une demande de prime d'activité »." },
        { title: "Déclarer ses revenus chaque trimestre", text: "Comme pour le RSA, déclare tes revenus tous les 3 mois. C'est nécessaire pour continuer à toucher la prime." }
      ]
    },
    steps: [
      { title: "Vérifier son éligibilité", text: "Utilise le simulateur sur caf.fr : il suffit d'indiquer tes revenus et ta situation familiale pour voir si tu y as droit.", visual: "document", screenshot: "/screenshots/caf-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel caf.fr" },
      { title: "Faire la demande sur caf.fr", text: "Dans ton compte CAF, va dans « Mes démarches » > « Faire une demande de prime d'activité »." },
      { title: "Déclarer ses revenus chaque trimestre", text: "Comme pour le RSA, une déclaration trimestrielle est nécessaire pour continuer à toucher la prime." }
    ] },

  { id: 'argent-arret-maladie', category: 'argent-travail', icon: '🤒', title: 'Déclarer un arrêt maladie',
    description: "Savoir quoi faire si le médecin te donne un arrêt de travail.",
    whatIsIt: "Si tu es malade et que ton médecin t'arrête, il faut transmettre l'arrêt à ton employeur et à la Sécurité Sociale rapidement pour être indemnisé et éviter des problèmes.",
    documents: ["Volet de l'arrêt de travail donné par le médecin"],
    simple: {
      description: "Savoir quoi faire avec un arrêt de travail.",
      whatIsIt: "Tu es malade et le médecin t'arrête ? Il faut envoyer l'arrêt à ton employeur et à la Sécurité Sociale vite. Ça évite des problèmes.",
      steps: [
        { title: "Le médecin envoie l'arrêt automatiquement", text: "Aujourd'hui, la plupart des médecins envoient l'arrêt directement à l'Assurance Maladie. Tu n'as rien à faire pour ça." },
        { title: "Envoyer le volet employeur", text: "Le médecin te donne un « volet 3 ». Envoie-le à ton employeur en 48 heures." },
        { title: "Suivre son arrêt sur ameli.fr", text: "Va dans « Mes démarches » sur ameli. Vérifie que l'arrêt est bien reçu. Vois le calcul de tes indemnités." }
      ]
    },
    steps: [
      { title: "Le médecin envoie l'arrêt automatiquement", text: "Aujourd'hui, la plupart des médecins transmettent l'arrêt de travail directement à l'Assurance Maladie en ligne — tu n'as rien à faire de ce côté.", visual: "document", screenshot: "/screenshots/ameli-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel ameli.fr" },
      { title: "Envoyer le volet employeur", text: "Le médecin te donne un « volet 3 » à envoyer ou remettre à ton employeur dans les 48 heures." },
      { title: "Suivre son arrêt sur ameli.fr", text: "Dans ton compte ameli, la rubrique « Mes démarches » permet de voir si ton arrêt a bien été reçu et le calcul de tes indemnités." }
    ] },

  { id: 'argent-cheque-energie', category: 'argent-travail', icon: '🔥', title: 'Le chèque énergie',
    description: "Une aide automatique pour payer ses factures d'électricité, de gaz ou de chauffage.",
    whatIsIt: "Le chèque énergie aide les foyers aux revenus modestes à payer leurs factures d'énergie. Il est en général envoyé automatiquement, mais certaines personnes doivent le demander elles-mêmes.",
    documents: ["Dernière facture d'électricité ou de gaz", "Avis d'imposition"],
    simple: {
      description: "Une aide pour payer ses factures d'électricité ou de gaz.",
      whatIsIt: "Le chèque énergie aide les foyers avec peu de revenus. Il paye les factures d'énergie. Il arrive souvent automatiquement. Certaines personnes doivent le demander elles-mêmes.",
      steps: [
        { title: "Vérifier si tu es concerné", text: "Le chèque arrive automatiquement entre avril et mai, selon tes revenus." },
        { title: "Faire une demande si tu ne l'as pas reçu", text: "Tu penses y avoir droit ? Rien reçu ? Fais une demande sur chequeenergie.gouv.fr, avant le 31 décembre." },
        { title: "Utiliser le chèque", text: "Utilise-le en ligne pour payer ton fournisseur. Ou envoie-le par courrier avec une facture." },
        { title: "Attention aux arnaques", text: "Aucune administration ne te demande tes coordonnées bancaires par téléphone ou SMS." }
      ]
    },
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
    simple: {
      description: "Deux sites gratuits pour découvrir toutes tes aides.",
      whatIsIt: "Beaucoup de personnes ont droit à des aides sans le savoir. Deux sites gratuits vérifient tout en une fois : mesdroitssociaux.gouv.fr (pour tout le monde) et 1jeune1solution (pour les moins de 30 ans). Attention : ces sites ne remplacent pas les démarches. Ils montrent juste tes droits, avec un lien vers chaque démarche.",
      steps: [
        { title: "mesdroitssociaux.gouv.fr — pour tout le monde", text: "Ce site simule plus de 50 aides en une fois. Compte 5 à 10 minutes." },
        { title: "Se connecter avec FranceConnect (facultatif)", text: "Tu peux répondre sans donner ton nom. Ou te connecter avec FranceConnect pour aller plus vite." },
        { title: "1jeune1solution — spécialement pour les moins de 30 ans", text: "As-tu moins de 30 ans ? Ce site est encore plus complet pour toi. Compte 7 minutes." },
        { title: "Suivre les liens proposés", text: "À la fin, chaque aide a un lien vers le site officiel. Les modules de ce site peuvent t'aider aussi." },
        { title: "Refaire la simulation si ta situation change", text: "Tes revenus changent ? Ton logement change ? Refais la simulation." }
      ]
    },
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
    simple: {
      description: "Créer son activité indépendante en ligne.",
      whatIsIt: "Le statut auto-entrepreneur permet de démarrer une petite activité. Vente, services, artisanat. Les démarches sont simples. Pas besoin de créer une vraie société.",
      steps: [
        { title: "Vérifier que l'activité est possible en micro-entreprise", text: "La plupart des activités de vente et de services sont possibles. Certains métiers ont des règles spéciales." },
        { title: "S'inscrire sur le site officiel", text: "La déclaration se fait sur formalites.entreprises.gouv.fr." },
        { title: "Recevoir son numéro SIRET", text: "Après quelques jours, tu reçois un numéro SIRET. Ton activité est officielle." },
        { title: "Déclarer son chiffre d'affaires", text: "Chaque mois ou trimestre, dis combien tu as gagné. Même si c'est zéro." }
      ]
    },
    steps: [
      { title: "Vérifier que l'activité est possible en micro-entreprise", text: "La plupart des activités de vente et de services sont possibles, sauf certaines professions réglementées." },
      { title: "S'inscrire sur le site officiel", text: "La déclaration se fait sur le Guichet unique des entreprises (formalites.entreprises.gouv.fr).", visual: "document", screenshot: "/screenshots/formalites-entreprises.jpg", screenshotAlt: "Page d'accueil du site officiel formalites.entreprises.gouv.fr" },
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
    simple: {
      description: "Chercher un logement à louer.",
      whatIsIt: "En plus du logement social, tu peux louer directement chez un particulier ou une agence, avec des sites d'annonces.",
      steps: [
        { title: "Utiliser les sites d'annonces", text: "Leboncoin, SeLoger, PAP sont les plus utilisés pour chercher un logement." },
        { title: "Préparer son dossier à l'avance", text: "Prépare ta pièce d'identité. Prépare tes 3 derniers bulletins de salaire. Prépare un garant si besoin." },
        { title: "Se méfier des arnaques", text: "N'envoie jamais d'argent avant de visiter le logement. Prix trop bas ? Propriétaire refuse la visite ? C'est suspect." },
        { title: "Signer le bail", text: "Lis bien le contrat avant de signer : loyer, charges, durée, dépôt de garantie." }
      ]
    },
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
    simple: {
      description: "Souscrire une assurance pour son logement.",
      whatIsIt: "L'assurance habitation est obligatoire pour un locataire en France. Elle protège en cas d'incendie ou de dégât des eaux.",
      steps: [
        { title: "Comparer les offres", text: "Banques, mutuelles, assureurs proposent tous une assurance habitation. Compare les prix." },
        { title: "Souscrire en ligne", text: "Ça prend quelques minutes sur le site de l'assureur. Donne l'adresse et la date d'entrée." },
        { title: "Recevoir son attestation", text: "Une attestation est nécessaire pour avoir les clés. Demande-la tout de suite." }
      ]
    },
    steps: [
      { title: "Comparer les offres", text: "Les banques, mutuelles et assureurs classiques proposent tous des assurances habitation, à des prix très variables — compare avant de choisir." },
      { title: "Souscrire en ligne", text: "La souscription se fait généralement en quelques minutes sur le site de l'assureur, avec l'adresse du logement et la date d'entrée." },
      { title: "Recevoir son attestation", text: "Une attestation d'assurance est indispensable pour récupérer les clés de ton logement — demande-la dès la souscription." }
    ] },

  { id: 'logement-compteur', category: 'logement', icon: '💡', title: 'Ouvrir un compteur électricité/gaz',
    description: "Mettre en service l'électricité ou le gaz dans un nouveau logement.",
    whatIsIt: "En arrivant dans un nouveau logement, l'électricité (et parfois le gaz) doivent être ouverts à ton nom, sinon tu n'as pas de courant.",
    documents: ["Adresse exacte du logement", "Date d'entrée souhaitée", "RIB pour le prélèvement"],
    simple: {
      description: "Ouvrir l'électricité ou le gaz dans un nouveau logement.",
      whatIsIt: "Tu arrives dans un nouveau logement ? L'électricité doit être ouverte à ton nom. Sinon pas de courant.",
      steps: [
        { title: "Choisir un fournisseur", text: "EDF est l'ancien fournisseur. Il y en a d'autres (Engie, TotalEnergies...). Choisis librement." },
        { title: "Faire la demande en ligne", text: "Sur le site du fournisseur, donne l'adresse et la date d'ouverture voulue." },
        { title: "Relever le compteur à l'entrée", text: "Note le chiffre du compteur le jour de ton entrée. Ça évite de payer pour l'ancien locataire." }
      ]
    },
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
    simple: {
      description: "Comprendre le livret de famille et les actes de naissance.",
      whatIsIt: "Le livret de famille regroupe les informations sur ton mariage et tes enfants. Un acte de naissance est souvent demandé pour beaucoup de démarches.",
      steps: [
        { title: "Demander un acte de naissance en ligne", text: "Né en France ? La demande se fait sur service-public.fr. Indique la mairie de naissance." },
        { title: "Pour une naissance à l'étranger", text: "Contacte le Service Central d'État Civil de Nantes. Ou l'ambassade du pays concerné." },
        { title: "Garder le livret de famille en lieu sûr", text: "C'est un document important. Il sert pour inscrire un enfant à l'école." }
      ]
    },
    steps: [
      { title: "Demander un acte de naissance en ligne", text: "Si tu es né en France, la demande se fait sur service-public.fr, en indiquant la mairie de naissance.", visual: "document", screenshot: "/screenshots/servicepublic-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel service-public.fr" },
      { title: "Pour une naissance à l'étranger", text: "Il faut s'adresser au Service Central d'État Civil de Nantes (pour les Français nés à l'étranger) ou à l'ambassade du pays concerné." },
      { title: "Garder le livret de famille en lieu sûr", text: "C'est un document important à conserver : il sert par exemple pour inscrire un enfant à l'école ou faire une demande de prestations familiales." }
    ] },

  { id: 'famille-rentree', category: 'famille', icon: '🎒', title: 'Allocation de rentrée scolaire',
    description: "Une aide financière versée par la CAF chaque année pour la rentrée des classes.",
    whatIsIt: "Si tu as des enfants scolarisés entre 6 et 18 ans et des revenus modestes, la CAF verse une aide chaque année en août pour aider à payer les fournitures scolaires.",
    documents: [],
    simple: {
      description: "Une aide de la CAF pour la rentrée scolaire.",
      whatIsIt: "Tu as des enfants de 6 à 18 ans à l'école ? Peu de revenus ? La CAF verse une aide chaque année en août. Ça aide à payer les fournitures.",
      steps: [
        { title: "Vérifier son éligibilité", text: "L'aide dépend de tes revenus et du nombre d'enfants." },
        { title: "Rien à faire dans la plupart des cas", text: "La CAF a déjà tes informations ? L'aide arrive automatiquement fin août. Vérifie juste ton dossier." },
        { title: "Déclarer la scolarisation si besoin", text: "Enfant de 16 à 18 ans ? Confirme parfois qu'il va encore à l'école, sur ton compte CAF." }
      ]
    },
    steps: [
      { title: "Vérifier son éligibilité", text: "L'aide dépend de tes revenus et du nombre d'enfants scolarisés. Le montant est plus élevé selon l'âge de l'enfant." },
      { title: "Rien à faire dans la plupart des cas", text: "Si la CAF a déjà tes informations, l'aide est versée automatiquement fin août — vérifie simplement que ton dossier est à jour (adresse, situation)." },
      { title: "Déclarer la scolarisation si besoin", text: "Pour les enfants de 16 à 18 ans, tu dois parfois confirmer qu'ils sont toujours scolarisés depuis ton compte CAF." }
    ] },

  { id: 'famille-regroupement', category: 'famille', icon: '👪', title: 'Regroupement familial',
    description: "Faire venir son conjoint ou ses enfants en France.",
    whatIsIt: "Le regroupement familial permet à une personne étrangère installée régulièrement en France de faire venir son conjoint et ses enfants mineurs pour vivre avec elle.",
    documents: ["Titre de séjour", "Justificatifs de ressources", "Justificatif de logement suffisant", "Actes de naissance et de mariage"],
    simple: {
      description: "Faire venir son conjoint ou ses enfants en France.",
      whatIsIt: "Le regroupement familial permet à une personne étrangère installée en France de faire venir son conjoint et ses enfants.",
      steps: [
        { title: "Vérifier les conditions", text: "Il faut vivre en France depuis 18 mois. Avoir des revenus stables. Avoir un logement assez grand." },
        { title: "Déposer la demande", text: "La demande se fait auprès de l'OFII, souvent en ligne sur le site de l'ANEF." },
        { title: "L'enquête logement", text: "Une visite peut vérifier que le logement est assez grand pour la famille." },
        { title: "Se faire accompagner", text: "C'est compliqué. Fais-toi aider par une association ou ton formateur." }
      ]
    },
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
    simple: {
      description: "Se pacser ou se marier en France.",
      whatIsIt: "Le PACS et le mariage sont deux façons différentes d'officialiser une vie de couple, avec des droits différents.",
      steps: [
        { title: "PACS : où faire la demande", text: "Le PACS se fait à la mairie ou chez un notaire, avec une convention signée par les deux." },
        { title: "Mariage : le dossier à la mairie", text: "Dépose un dossier à la mairie de résidence. Il faut les pièces d'identité et actes de naissance des deux." },
        { title: "La publication des bans", text: "Avant un mariage, la mairie affiche une annonce publique pendant 10 jours minimum." },
        { title: "Mettre à jour ses papiers après", text: "Après le mariage ou le PACS, préviens la CAF, les impôts, ton employeur." }
      ]
    },
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
    simple: {
      description: "Devenir français par naturalisation.",
      whatIsIt: "La naturalisation permet à une personne étrangère de devenir citoyenne française. Elle a les mêmes droits que les Français nés en France, dont voter.",
      steps: [
        { title: "Vérifier les conditions", text: "Il faut vivre en France depuis 5 ans en général. Avoir un bon niveau de français. Prouver ton intégration." },
        { title: "Constituer son dossier", text: "Le dossier se dépose en ligne sur le site de l'ANEF." },
        { title: "L'entretien individuel", text: "Un entretien en préfecture vérifie ton intégration et ta connaissance de la France." },
        { title: "Le délai de réponse", text: "La procédure prend plusieurs mois, parfois plus d'un an. Une réponse négative peut être expliquée." }
      ]
    },
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
    simple: {
      description: "Immatriculer un véhicule en ligne.",
      whatIsIt: "La carte grise prouve que tu es le propriétaire d'un véhicule. Cette démarche se fait seulement en ligne, plus au guichet.",
      steps: [
        { title: "Aller sur le site officiel ANTS", text: "La démarche se fait sur ants.gouv.fr. C'est le seul site officiel. Méfie-toi des sites payants qui l'imitent." },
        { title: "Créer son compte", text: "Un compte ANTS est nécessaire. Donne ton email et tes informations." },
        { title: "Remplir la demande et payer la taxe", text: "Le prix dépend du véhicule. Paye en ligne par carte bancaire." },
        { title: "Recevoir sa carte grise", text: "Le document arrive par la poste en quelques jours." }
      ]
    },
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
    simple: {
      description: "Passer le permis ou reconnaître un permis étranger.",
      whatIsIt: "Le permis de conduire est souvent nécessaire pour travailler. Les démarches changent si tu débutes ou si tu as déjà un permis d'un autre pays.",
      steps: [
        { title: "S'inscrire au code de la route", text: "Le code se prépare en auto-école ou en ligne (Ornikar, ou le Code de la route ANTS gratuit)." },
        { title: "Passer l'examen du code", text: "L'examen se passe dans un centre agréé, sur ordinateur. Il y a 40 questions." },
        { title: "Prendre des leçons de conduite", text: "Après le code, les leçons pratiques se font en auto-école." },
        { title: "Échanger un permis étranger", text: "Un permis d'un autre pays ? Une procédure d'échange existe sur permisdeconduire.ants.gouv.fr." }
      ]
    },
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
    simple: {
      description: "S'inscrire pour voter en France.",
      whatIsIt: "Pour voter en France, il faut être inscrit sur les listes électorales de sa commune. Ce droit est pour les citoyens français, et pour certaines élections, les citoyens européens.",
      steps: [
        { title: "Vérifier son inscription", text: "Sur service-public.fr, vérifie si tu es déjà inscrit." },
        { title: "S'inscrire en ligne", text: "Pas encore inscrit ? Inscris-toi sur service-public.fr. Il te faut une pièce d'identité et un justificatif de domicile." },
        { title: "Respecter les délais", text: "Il y a une date limite avant chaque élection, souvent plusieurs semaines avant." }
      ]
    },
    steps: [
      { title: "Vérifier son inscription", text: "Sur service-public.fr, tu peux vérifier si tu es déjà inscrit sur les listes électorales de ta commune.", visual: "document", screenshot: "/screenshots/servicepublic-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel service-public.fr" },
      { title: "S'inscrire en ligne", text: "Si tu ne l'es pas, l'inscription se fait directement sur service-public.fr, avec une pièce d'identité et un justificatif de domicile." },
      { title: "Respecter les délais", text: "L'inscription doit être faite avant une date limite fixée avant chaque élection, généralement plusieurs semaines avant le scrutin." }
    ] },

  { id: 'papiers-aide-juridictionnelle', category: 'papiers-citoyennete', icon: '⚖️', title: 'Aide juridictionnelle',
    description: "Une aide de l'État pour payer un avocat quand on a peu de revenus.",
    whatIsIt: "Si tu as besoin d'un avocat (litige, divorce, démarche administrative complexe) mais que tu n'as pas les moyens de le payer, l'aide juridictionnelle peut prendre en charge tout ou partie des frais.",
    documents: ["Justificatifs de revenus", "Pièce d'identité", "Documents liés à l'affaire concernée"],
    simple: {
      description: "Une aide de l'État pour payer un avocat.",
      whatIsIt: "Peu de revenus ? Besoin d'un avocat ? L'aide juridictionnelle peut payer tout ou une partie des frais.",
      steps: [
        { title: "Vérifier son éligibilité", text: "L'aide dépend de tes revenus. Un simulateur existe sur justice.fr." },
        { title: "Faire la demande", text: "Le formulaire est sur justice.fr. Envoie-le au bureau d'aide juridictionnelle du tribunal." },
        { title: "Choisir son avocat", text: "L'aide est accordée ? Choisis un avocat qui l'accepte. Ou demande qu'on t'en désigne un." }
      ]
    },
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
    simple: {
      description: "Reconnaître les faux messages et protéger ses informations.",
      whatIsIt: "Les arnaques par SMS ou email sont fréquentes. Elles visent souvent les personnes peu habituées au numérique. Savoir les reconnaître protège ton argent.",
      steps: [
        { title: "Se méfier de l'urgence", text: "Un message qui fait peur (« Votre compte sera bloqué ! ») est presque toujours une arnaque." },
        { title: "Vérifier l'adresse exacte", text: "Regarde bien l'adresse email ou le lien. « ameli-fr.securite.com » n'est PAS ameli.fr." },
        { title: "Ne jamais donner ses codes bancaires", text: "Aucune administration ne demande ton code de carte bancaire par SMS ou téléphone." },
        { title: "En cas de doute, ne clique pas", text: "Tape toi-même l'adresse du site officiel. Ne clique pas sur un lien reçu par message." }
      ]
    },
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
    simple: {
      description: "Appeler sa famille à l'étranger gratuitement.",
      whatIsIt: "Les appels classiques à l'étranger coûtent souvent cher. Des applications comme WhatsApp permettent d'appeler gratuitement, avec internet.",
      steps: [
        { title: "Installer WhatsApp", text: "Télécharge l'application gratuite. Play Store sur Android. App Store sur iPhone. Utilise ton numéro." },
        { title: "Ajouter un contact", text: "La personne doit aussi avoir WhatsApp. Elle apparaît si son numéro est dans tes contacts." },
        { title: "Lancer un appel vidéo", text: "Ouvre la conversation. Appuie sur la caméra 📹 pour la vidéo. Ou le téléphone 📞 pour l'audio." },
        { title: "Avoir du Wi-Fi ou des données", text: "Ces appels utilisent internet. Vérifie que tu as du Wi-Fi ou assez de données." }
      ]
    },
    steps: [
      { title: "Installer WhatsApp", text: "Télécharge l'application gratuite depuis le Play Store (Android) ou l'App Store (iPhone), avec ton numéro de téléphone.", visual: "phone", screenshot: "/screenshots/whatsapp-accueil.jpg", screenshotAlt: "Page d'accueil du site whatsapp.com" },
      { title: "Ajouter un contact", text: "La personne doit aussi avoir WhatsApp installé avec son numéro. Elle apparaît automatiquement dans tes contacts si son numéro est enregistré." },
      { title: "Lancer un appel vidéo", text: "Ouvre la conversation, puis appuie sur l'icône caméra 📹 pour un appel vidéo, ou sur le téléphone 📞 pour un appel audio simple." },
      { title: "Avoir du Wi-Fi ou des données", text: "Ces appels utilisent internet, pas ton forfait téléphonique classique — vérifie que tu as du Wi-Fi ou assez de données mobiles." }
    ] },

  { id: 'securite-mediatheque', category: 'securite-pratique', icon: '📚', title: 'La médiathèque du Havre',
    description: "Un lieu gratuit avec accès internet, ordinateurs, et parfois de l'aide numérique.",
    whatIsIt: "Le réseau des bibliothèques du Havre (plusieurs médiathèques dans différents quartiers) propose un accès gratuit à internet, des ordinateurs en libre-service, et des ateliers d'initiation à l'informatique — un bon complément à ta formation.",
    documents: ["Justificatif de domicile pour s'inscrire"],
    simple: {
      description: "Un lieu gratuit avec internet et ordinateurs au Havre.",
      whatIsIt: "Les bibliothèques du Havre offrent internet gratuit, des ordinateurs, et des ateliers d'informatique. C'est un bon complément à ta formation.",
      steps: [
        { title: "S'inscrire gratuitement", text: "L'inscription sur bibliotheques.lehavre.fr est gratuite. Elle donne accès à toutes les médiathèques." },
        { title: "Utiliser les ordinateurs sur place", text: "Chaque médiathèque a des ordinateurs avec internet, scanner, imprimante." },
        { title: "Profiter du Wi-Fi gratuit", text: "Toutes les médiathèques ont un Wi-Fi gratuit. Utile si tu n'as pas internet chez toi." },
        { title: "Participer aux ateliers", text: "Des ateliers « Initiation à l'informatique » existent. Demande le programme sur place." },
        { title: "Besoin d'un ordinateur pas cher ? Web Solidarité", text: "L'association Web Solidarité au Havre vend des ordinateurs remis en état, à prix réduit. Encore mieux si tu as le RSA. Regarde sur asso-websolidarite.org." },
        { title: "L'annuaire des associations du Havre", text: "C'est un site de la Ville. Il liste toutes les associations du Havre. Aide alimentaire, insertion, loisirs... Va sur mesdemarches.lehavreseinemetropole.fr. Cherche « Annuaire des associations »." },
        { title: "DORA, l'outil de ton formateur", text: "DORA est un site pour les professionnels. Il aide à trouver la bonne aide pour toi (logement, garde d'enfant...). Tu n'as rien à faire. Parle de ton besoin à ton formateur. Il fera la recherche pour toi." }
      ]
    },
    steps: [
      { title: "S'inscrire gratuitement", text: "L'inscription au réseau des bibliothèques du Havre (bibliotheques.lehavre.fr) est gratuite et donne accès à toutes les médiathèques de la ville.", visual: "document", screenshot: "/screenshots/bibliotheques-lehavre.jpg", screenshotAlt: "Page d'accueil du site officiel bibliotheques.lehavre.fr" },
      { title: "Utiliser les ordinateurs sur place", text: "Chaque médiathèque (Léopold Sédar Senghor, Martin Luther King, Caucriauville, Oscar Niemeyer...) dispose de postes informatiques avec internet, scanner et imprimante." },
      { title: "Profiter du Wi-Fi gratuit", text: "Toutes les médiathèques proposent un Wi-Fi gratuit, utile si tu n'as pas internet chez toi." },
      { title: "Participer aux ateliers", text: "Des ateliers « Initiation à l'informatique » sont régulièrement organisés — demande le programme sur place ou sur le site." },
      { title: "Besoin d'un ordinateur pas cher ? Web Solidarité", text: "L'association Web Solidarité (Le Havre) reconditionne des ordinateurs donnés par des entreprises et les revend à prix solidaire aux familles à faibles revenus, avec des offres spéciales pour les bénéficiaires du RSA. Elle organise aussi des ateliers d'initiation. Renseigne-toi sur asso-websolidarite.org." },
      { title: "L'annuaire des associations du Havre", text: "C'est un site officiel de la Ville qui liste toutes les associations locales, classées par thème : aide alimentaire, insertion, accompagnement, loisirs, culture... Utile si tu cherches une aide précise que cette application ne couvre pas. Va sur mesdemarches.lehavreseinemetropole.fr, cherche « Annuaire des associations », puis filtre par thème ou fais une recherche par mot-clé (exemple : « aide aux devoirs », « couture », « insertion »)." },
      { title: "DORA, l'outil utilisé par ton formateur pour t'orienter", text: "DORA (dora.inclusion.gouv.fr) est un site professionnel utilisé par les travailleurs sociaux et les formateurs pour trouver rapidement le bon service selon ta situation (logement, garde d'enfant, mobilité, budget, accès aux droits...). Tu n'as pas besoin de l'utiliser toi-même : explique simplement ton besoin à ton formateur ou à un travailleur social, il pourra faire la recherche pour toi et t'orienter vers la bonne structure." }
    ] }
]

// Catalogue par défaut des modules. Chaque module peut ensuite être
// modifié (titre, description, étapes) par un formateur via l'éditeur ;
// ces modifications sont stockées dans la table `moduleContent` et
// surchargent ce catalogue par défaut (voir data/getModuleContent.js).
//
// Sources vérifiées (juillet 2026) pour les démarches : caf.fr, ameli.fr,
// lassuranceretraite.fr, impots.gouv.fr, francetravail.fr,
// solidarites.seinemaritime.fr (MDPH 76 - non rattachée au portail national
// mdphenligne.cnsa.fr), mesevenementsemploi.pole-emploi.fr,
// demande-logement-social.gouv.fr, pole-mobilite.org, remuneration.normandie.fr,
// kiosquefamille.lehavre.fr, administration-etrangers-en-france.interieur.gouv.fr,
// casier-judiciaire.justice.gouv.fr, lehavre.fr, transports-lia.fr.
// Les organismes mettent régulièrement à jour leurs sites : à vérifier
// périodiquement et à corriger via l'éditeur de contenu si besoin.

import { EXTRA_MODULES, EXTRA_CATEGORIES } from './modulesExtra'

export const CATEGORIES = {
  appareils: 'Découvrir et configurer mon appareil',
  'numerique-base': EXTRA_CATEGORIES['numerique-base'],
  demarches: 'Démarches administratives en ligne',
  sante: EXTRA_CATEGORIES.sante,
  'argent-travail': EXTRA_CATEGORIES['argent-travail'],
  logement: EXTRA_CATEGORIES.logement,
  famille: EXTRA_CATEGORIES.famille,
  'papiers-citoyennete': EXTRA_CATEGORIES['papiers-citoyennete'],
  'securite-pratique': EXTRA_CATEGORIES['securite-pratique']
}

export const DEFAULT_MODULES = [
  // ============================================================
  // APPAREILS
  // ============================================================
  { id: 'app-fixe', category: 'appareils', icon: '🖥️', title: 'Ordinateur fixe',
    description: "Découvrir et configurer un ordinateur fixe.",
    steps: [
      { title: "Repérer les éléments", text: "Un ordinateur fixe a une unité centrale (la grosse boîte), un écran, un clavier et une souris. Vérifie que tous les câbles sont bien branchés avant d'allumer." },
      { title: "Allumer l'ordinateur", text: "Appuie sur le bouton rond avec le symbole ⏻ sur l'unité centrale. Si l'écran reste noir, vérifie qu'il est aussi allumé (bouton en bas ou sur le côté de l'écran)." },
      { title: "Utiliser la souris", text: "Le bouton gauche sert à cliquer et sélectionner. Le bouton droit ouvre un menu avec plus d'options. La molette au milieu permet de faire défiler une page." },
      { title: "Utiliser le clavier", text: "Les lettres sont disposées en AZERTY sur un clavier français. La touche Shift (majuscule) permet d'écrire une lettre en majuscule. La barre d'espace sert à mettre un espace." },
      { title: "Éteindre correctement", text: "Ne débranche jamais directement la prise ! Clique sur le bouton Démarrer (ou le menu Pomme sur Mac), puis choisis « Éteindre ». Attends que l'écran devienne noir avant de partir." }
    ] },

  { id: 'app-portable', category: 'appareils', icon: '💻', title: 'Ordinateur portable',
    description: "Découvrir et configurer un ordinateur portable.",
    steps: [
      { title: "Allumer l'ordinateur portable", text: "Ouvre l'écran (le clapet) et appuie sur le bouton ⏻, souvent situé au-dessus du clavier ou sur le côté." },
      { title: "Utiliser le pavé tactile", text: "Le pavé tactile (touchpad) remplace la souris. Un doigt qui glisse déplace le curseur. Un tapotement clique. Deux doigts qui glissent font défiler la page." },
      { title: "Brancher le chargeur", text: "Branche le chargeur dans la prise de courant, puis l'autre extrémité dans l'ordinateur. Une lumière s'allume en général pour indiquer que ça charge." },
      { title: "Fermer sans éteindre", text: "Fermer l'écran met l'ordinateur en veille : il continue de fonctionner à basse consommation. Pour vraiment l'éteindre, utilise le menu Démarrer (ou Pomme) puis « Éteindre »." },
      { title: "Bien transporter son ordinateur", text: "Ferme toujours l'écran avant de le déplacer, et utilise une housse ou un sac de protection si possible pour éviter les chocs." }
    ] },

  { id: 'app-chromebook', category: 'appareils', icon: '💻', title: 'Chromebook',
    description: "Découvrir et configurer un Chromebook.",
    steps: [
      { title: "Allumer et se connecter", text: "Appuie sur le bouton ⏻. Un Chromebook fonctionne avec un compte Google : connecte-toi avec ton adresse Gmail et ton mot de passe." },
      { title: "Le lanceur d'applications", text: "Le rond en bas à gauche (ou la touche avec une loupe) ouvre le lanceur d'applications, pour retrouver tous tes programmes et faire une recherche." },
      { title: "Utiliser le navigateur Chrome", text: "Sur un Chromebook, presque tout se passe dans le navigateur Chrome. Chaque site s'ouvre dans un nouvel onglet, en haut de la fenêtre." },
      { title: "Les paramètres", text: "Clique sur l'horloge en bas à droite, puis sur la roue crantée ⚙️ pour ouvrir les Paramètres : Wi-Fi, luminosité, son, clavier." },
      { title: "Éteindre le Chromebook", text: "Clique sur l'horloge en bas à droite, puis sur le bouton ⏻ dans le petit menu qui s'ouvre." }
    ] },

  { id: 'app-windows', category: 'appareils', icon: '🪟', title: 'Windows',
    description: "Découvrir et configurer les paramètres de Windows.",
    steps: [
      { title: "Trouver le Menu Démarrer", text: "Clique sur le bouton avec le logo Windows en bas à gauche de l'écran. C'est le Menu Démarrer. Il permet d'ouvrir tous tes programmes.", visual: "mouse" },
      { title: "Ouvrir les Paramètres", text: "Clique sur le Menu Démarrer, puis clique sur la roue crantée ⚙️ « Paramètres ».", visual: "settings" },
      { title: "Régler la langue", text: "Dans Paramètres, va dans « Heure et langue ». Tu peux choisir ou ajouter le français comme langue du clavier.", visual: "keyboard" },
      { title: "Régler le son et l'écran", text: "Dans Paramètres > « Système », tu peux régler le volume du son et la luminosité de l'écran.", visual: "settings" },
      { title: "Connecter le Wi-Fi", text: "Dans Paramètres > « Réseau et Internet », clique sur Wi-Fi, choisis ton réseau et entre le mot de passe.", visual: "wifi" }
    ],
    quiz: [
      { question: "Pour ouvrir les Paramètres de Windows, tu cliques sur :", options: ["Le Menu Démarrer puis la roue crantée ⚙️", "Le bureau", "La molette de la souris"], correctIndex: 0 },
      { question: "Pour connecter le Wi-Fi, tu vas dans :", options: ["Heure et langue", "Réseau et Internet", "Comptes"], correctIndex: 1 }
    ] },

  { id: 'app-apple', category: 'appareils', icon: '🍎', title: 'Apple (macOS)',
    description: "Découvrir et configurer les paramètres d'un Mac Apple.",
    steps: [
      { title: "Le menu Pomme", text: "En haut à gauche de l'écran, la petite pomme  ouvre le menu principal : c'est ici que se trouvent « Réglages Système » et « Éteindre »." },
      { title: "Ouvrir les Réglages Système", text: "Clique sur la pomme  puis sur « Réglages Système ». Tu peux régler le Wi-Fi, le son, la luminosité et la langue." },
      { title: "Le Dock et le Finder", text: "En bas de l'écran, le Dock regroupe tes applications favorites. L'icône bleue et blanche est le Finder : il permet de retrouver tes fichiers et dossiers." },
      { title: "Utiliser le trackpad", text: "Un doigt qui glisse déplace le curseur. Deux doigts qui glissent font défiler la page. Un clic avec deux doigts ouvre le menu (clic droit)." },
      { title: "Éteindre le Mac", text: "Clique sur la pomme  en haut à gauche, puis choisis « Éteindre ». Attends que l'écran devienne noir avant de fermer l'ordinateur." }
    ] },

  { id: 'app-linux', category: 'appareils', icon: '🐧', title: 'Linux',
    description: "Découvrir et configurer les paramètres de Linux.",
    steps: [
      { title: "Le bureau Linux", text: "Selon l'ordinateur, l'apparence peut changer (Ubuntu, Debian...), mais on retrouve toujours un bureau, une barre de tâches et un menu d'applications." },
      { title: "Ouvrir les Paramètres", text: "Cherche une icône représentant une roue crantée ⚙️ dans la barre en haut ou en bas de l'écran pour ouvrir les Paramètres du système." },
      { title: "Le gestionnaire de fichiers", text: "L'icône en forme de dossier ouvre le gestionnaire de fichiers, pour retrouver tes documents, images et téléchargements." },
      { title: "Installer un logiciel", text: "Utilise la « Logithèque » (Software Center) : une icône en forme de sac ou de panier, pour chercher et installer des applications gratuites en toute sécurité." },
      { title: "Éteindre l'ordinateur", text: "Clique sur l'icône d'alimentation ⏻, généralement en haut à droite de l'écran, puis choisis « Éteindre »." }
    ] },

  { id: 'app-tablette-android', category: 'appareils', icon: '📱', title: 'Tablette Android',
    description: "Découvrir et configurer les paramètres d'une tablette Android.",
    steps: [
      { title: "Allumer et déverrouiller", text: "Appuie sur le bouton latéral pour allumer l'écran, puis glisse ton doigt vers le haut (ou entre ton code) pour déverrouiller." },
      { title: "L'écran d'accueil", text: "Les icônes sont les applications. Glisse ton doigt vers le haut depuis le bas de l'écran (ou appuie sur le rond) pour voir toutes tes applications." },
      { title: "Ouvrir les Paramètres", text: "Cherche l'icône grise en forme de roue crantée ⚙️ « Paramètres ». Tu peux y régler le Wi-Fi, le son, la luminosité et la langue." },
      { title: "Le Google Play Store", text: "L'icône colorée en triangle est le Play Store : c'est ici que tu télécharges des applications gratuites ou payantes en toute sécurité." },
      { title: "Éteindre la tablette", text: "Appuie longuement sur le bouton latéral jusqu'à ce qu'un menu apparaisse, puis touche « Éteindre »." }
    ] },

  { id: 'app-ipad', category: 'appareils', icon: '📱', title: 'iPad',
    description: "Découvrir et configurer les paramètres d'un iPad.",
    steps: [
      { title: "Allumer et déverrouiller", text: "Appuie sur le bouton du haut (ou du côté) pour allumer l'écran. Glisse vers le haut ou utilise Face ID / Touch ID pour déverrouiller." },
      { title: "L'écran d'accueil", text: "Chaque icône est une application. Glisse vers la gauche pour voir d'autres pages d'applications." },
      { title: "Ouvrir les Réglages", text: "Touche l'icône grise en forme de roue crantée ⚙️ « Réglages ». Tu peux y régler le Wi-Fi, le son, la luminosité et la langue." },
      { title: "L'App Store", text: "L'icône bleue avec un « A » stylisé est l'App Store, pour télécharger des applications gratuites ou payantes." },
      { title: "Éteindre l'iPad", text: "Dans Réglages > Général, touche « Éteindre », ou appuie longuement sur le bouton du haut et glisse le curseur qui apparaît." }
    ] },

  { id: 'app-iphone', category: 'appareils', icon: '📞', title: 'iPhone',
    description: "Découvrir et configurer les paramètres d'un iPhone (toutes versions).",
    steps: [
      { title: "Allumer et déverrouiller", text: "Appuie sur le bouton latéral pour allumer l'écran. Utilise Face ID (regarder l'écran) ou Touch ID (empreinte digitale) ou ton code pour déverrouiller." },
      { title: "L'écran d'accueil", text: "Chaque icône est une application. En bas, certaines applications restent toujours visibles (téléphone, messages, appareil photo)." },
      { title: "Ouvrir les Réglages", text: "Touche l'icône grise en forme de roue crantée ⚙️ « Réglages ». Tu peux y régler le Wi-Fi, le son, la luminosité et la langue." },
      { title: "Passer un appel et envoyer un message", text: "L'icône verte du téléphone sert à appeler. L'icône verte avec une bulle sert à envoyer des SMS/iMessages." },
      { title: "L'App Store", text: "L'icône bleue avec un « A » stylisé permet de télécharger des applications gratuites ou payantes." }
    ] },

  { id: 'app-android-phone', category: 'appareils', icon: '📞', title: 'Smartphone Android',
    description: "Découvrir et configurer les paramètres d'un smartphone Android (toutes versions).",
    steps: [
      { title: "Allumer et déverrouiller", text: "Appuie sur le bouton latéral pour allumer l'écran, puis glisse vers le haut ou entre ton code / ton empreinte pour déverrouiller." },
      { title: "L'écran d'accueil", text: "Chaque icône est une application. Glisse vers le haut depuis le bas de l'écran pour voir toutes tes applications installées." },
      { title: "Ouvrir les Paramètres", text: "Cherche l'icône grise en forme de roue crantée ⚙️ « Paramètres ». Tu peux y régler le Wi-Fi, le son, la luminosité et la langue." },
      { title: "Passer un appel et envoyer un message", text: "L'icône verte du téléphone sert à appeler. L'icône de messages sert à envoyer des SMS." },
      { title: "Le Google Play Store", text: "L'icône colorée en triangle permet de télécharger des applications gratuites ou payantes en toute sécurité." }
    ] },

  // ============================================================
  // DÉMARCHES
  // ============================================================
  { id: 'dem-sites-officiels', category: 'demarches', icon: '🌐', title: 'Les sites officiels',
    description: "Découvrir les sites officiels et savoir quelles démarches on peut faire en ligne.",
    whatIsIt: "En France, beaucoup de démarches administratives (famille, santé, travail, logement, papiers...) se font maintenant sur internet plutôt qu'au guichet. Savoir reconnaître un site officiel évite de perdre du temps ou de tomber sur une arnaque.",
    steps: [
      { title: "Reconnaître un site officiel", text: "Un site officiel du gouvernement se termine presque toujours par « .gouv.fr ». Exemple : impots.gouv.fr, service-public.fr. Méfie-toi des sites qui ressemblent mais demandent de payer pour un service normalement gratuit." },
      { title: "Le site service-public.fr", text: "C'est le site officiel qui rassemble des informations sur toutes les démarches administratives françaises (identité, famille, travail, logement...). Il explique clairement quoi faire et donne les liens vers les bons sites.", screenshot: "/screenshots/servicepublic-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel service-public.fr" },
      { title: "FranceConnect : un seul mot de passe pour plusieurs sites", text: "FranceConnect permet de se connecter à plusieurs services publics (impots.gouv.fr, ameli.fr, caf.fr...) avec un seul compte, par exemple ton compte des impôts ou ta carte Vitale. Cherche le bouton « FranceConnect » sur la page de connexion." },
      { title: "Vérifier avant de cliquer", text: "Avant d'entrer des informations personnelles, regarde bien l'adresse du site dans la barre du haut. Si tu as un doute, demande à ton formateur avant de continuer." }
    ] },

  { id: 'dem-caf', category: 'demarches', icon: '👨‍👩‍👧', title: 'La CAF',
    description: "Faire ses démarches sur le site de la CAF.",
    whatIsIt: "La CAF (Caisse d'Allocations Familiales) verse de l'argent aux familles et aux personnes à faibles revenus : aide au logement, aide pour les enfants, prime d'activité... Si tu as des enfants ou des revenus modestes, tu as probablement droit à une aide.",
    documents: ["Numéro de Sécurité Sociale", "Adresse email", "RIB (relevé d'identité bancaire)", "Justificatif de domicile récent"],
    steps: [
      { title: "Aller sur le site de la CAF", text: "Ouvre le site officiel : caf.fr. Vérifie bien l'adresse : c-a-f point f-r.", visual: "document", screenshot: "/screenshots/caf-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel caf.fr" },
      { title: "Créer Mon Compte", text: "Clique sur « Mon Compte » puis « Créer mon compte ». Tu as besoin de ton numéro de Sécurité Sociale et d'un email.", visual: "lock" },
      { title: "Se connecter", text: "Clique sur « Mon Compte », entre ton identifiant (email) et ton mot de passe.", visual: "lock" },
      { title: "Faire une demande en ligne", text: "Une fois connecté, va dans « Mes démarches ». Tu peux déclarer ta situation, demander une aide, ou envoyer un document.", visual: "document" },
      { title: "Envoyer un document", text: "Dans « Mes démarches » > « Envoyer un document », tu peux prendre une photo ou choisir un fichier depuis ton téléphone.", visual: "phone" }
    ],
    quiz: [
      { question: "L'adresse officielle du site de la CAF est :", options: ["caf.com", "caf.fr", "caf-officiel.net"], correctIndex: 1 },
      { question: "Pour envoyer un document à la CAF, tu vas dans :", options: ["Mes démarches > Envoyer un document", "Mon profil", "Contact"], correctIndex: 0 }
    ] },

  { id: 'dem-cpam', category: 'demarches', icon: '🏥', title: 'La CPAM (Assurance Maladie)',
    description: "Faire ses démarches sur ameli.fr (CPAM).",
    whatIsIt: "La CPAM (Assurance Maladie) rembourse une partie de tes frais médicaux (médecin, pharmacie, hôpital). Elle délivre aussi la carte Vitale, indispensable pour être bien remboursé. Sans elle, tu payes tes soins beaucoup plus cher.",
    documents: ["Numéro de Sécurité Sociale", "Pièce d'identité", "Adresse email"],
    steps: [
      { title: "Aller sur le site ameli.fr", text: "Ouvre le site officiel de l'Assurance Maladie : ameli.fr. C'est le site de la CPAM (Caisse Primaire d'Assurance Maladie).", screenshot: "/screenshots/ameli-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel ameli.fr" },
      { title: "Créer ou retrouver son compte", text: "Clique sur « Mon compte ». Si c'est ta première visite, clique sur « Créer mon compte » et suis les étapes avec ton numéro de Sécurité Sociale." },
      { title: "Suivre ses remboursements", text: "Une fois connecté, la rubrique « Mes remboursements » montre l'historique de tes soins remboursés (médecin, pharmacie...)." },
      { title: "Commander une carte Vitale", text: "Dans « Mes démarches », tu peux demander une nouvelle carte Vitale (première demande, perte, vol) ou signaler un changement de situation." },
      { title: "Télécharger une attestation", text: "Dans « Mes démarches » > « Mes attestations », tu peux télécharger et imprimer ton attestation de droits, souvent demandée par d'autres administrations." }
    ] },

  { id: 'dem-carsat', category: 'demarches', icon: '👴', title: 'La CARSAT (retraite)',
    description: "Faire ses démarches sur le site de la CARSAT.",
    whatIsIt: "La CARSAT s'occupe de ta future retraite : elle compte les années et trimestres que tu travailles. Même si la retraite semble loin, chaque période de travail déclarée compte pour plus tard.",
    documents: ["Numéro de Sécurité Sociale", "Adresse email", "Relevé de carrière si tu en as un"],
    steps: [
      { title: "Aller sur le site officiel", text: "Ouvre le site lassuranceretraite.fr, le site officiel de l'Assurance Retraite (CARSAT en Normandie).", screenshot: "/screenshots/lassuranceretraite-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel lassuranceretraite.fr" },
      { title: "Créer Mon compte retraite", text: "Clique sur « Mon compte » puis « Créer mon compte », ou connecte-toi directement avec FranceConnect si tu en as déjà un." },
      { title: "Consulter son relevé de carrière", text: "Une fois connecté, tu peux voir toutes les années et tous les trimestres de travail déjà enregistrés pour ta future retraite." },
      { title: "Faire une simulation ou une demande", text: "Le site permet de simuler l'âge de départ à la retraite, et de faire une demande de retraite en ligne le moment venu." },
      { title: "Contacter la CARSAT", text: "En cas de question, un formulaire de contact est disponible dans la rubrique « Nous contacter » du site." }
    ] },

  { id: 'dem-lia', category: 'demarches', icon: '🚋', title: 'LiA (bus et tramway)',
    description: "Utiliser le site du réseau de transport LiA (bus, tramway, funiculaire du Havre) et connaître les tarifs solidaires.",
    whatIsIt: "LiA, c'est le nom du réseau de bus et de tramway au Havre. Pour se déplacer en ville sans voiture (aller en formation, au travail, faire ses courses), c'est le moyen de transport principal. Le prix normal peut être réduit fortement selon ta situation.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "Justificatifs liés à ta situation (attestation CAF, CSS, France Travail, avis d'imposition... selon ton profil)"],
    steps: [
      { title: "Le réseau LiA", text: "LiA est le réseau de transport en commun du Havre : bus, tramway et funiculaire. Le site officiel est transports-lia.fr.", visual: "bus", screenshot: "/screenshots/transportslia-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel transports-lia.fr" },
      { title: "Consulter les horaires et itinéraires", text: "Sur transports-lia.fr, tu peux chercher un trajet en indiquant ton point de départ et ton arrivée pour connaître les horaires et la ligne à prendre." },
      { title: "L'abonnement Solidaire (12,50€/mois)", text: "Ce tarif est accessible si tu bénéficies de la Complémentaire Santé Solidaire (CSS), de l'Aide Médicale d'État, si tu es demandeur d'asile, invalide civil à 80% ou plus, travailleur handicapé en ESAT, ou demandeur d'emploi bénéficiaire de l'AAH.", visual: "document" },
      { title: "Le tarif 1/2 tarif", text: "Ce tarif concerne notamment les étudiants boursiers, les demandeurs d'emploi, les personnes de plus de 65 ans non imposables, les stagiaires de la formation professionnelle et apprentis majeurs, et les personnes en Contrat d'Engagement Jeune." },
      { title: "Faire la demande", text: "Remplis le formulaire « Demande de tarification réduite pour les transports LiA » sur lehavre.fr, ou rends-toi dans une structure municipale. En cas de question : 02 35 22 24 62 ou lia-tarifsreduits@lehavremetro.fr." },
      { title: "Recharger son Pass LiA", text: "Une fois le tarif validé, recharge ta carte de transport (Pass LiA) en agence (La Boutique, avenue René Coty, ou La Station, parvis de la gare) ou en ligne sur transports-lia.fr." }
    ] },


  { id: 'dem-impots', category: 'demarches', icon: '💶', title: 'Les Impôts',
    description: "Faire sa déclaration et ses démarches sur impots.gouv.fr.",
    whatIsIt: "En France, presque tout le monde doit déclarer ses revenus chaque année aux impôts, même les personnes avec peu d'argent. C'est obligatoire, et beaucoup d'autres démarches (aides, logement...) demandent ensuite un document appelé « avis d'imposition ».",
    documents: ["Numéro fiscal (sur un avis d'imposition précédent)", "Adresse email", "Justificatifs de revenus de l'année"],
    steps: [
      { title: "Aller sur le site des impôts", text: "Ouvre le site officiel impots.gouv.fr. Vérifie bien l'adresse avant de continuer.", screenshot: "/screenshots/impots-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel impots.gouv.fr" },
      { title: "Créer son espace particulier", text: "Clique sur « Votre espace particulier » puis « Vous n'avez pas de compte fiscal en ligne ? ». Tu auras besoin de ton numéro fiscal (sur un avis d'imposition) pour t'inscrire." },
      { title: "Se connecter", text: "Clique sur « Votre espace particulier », entre ton numéro fiscal et ton mot de passe pour accéder à ton dossier." },
      { title: "Faire sa déclaration de revenus", text: "Chaque année au printemps, la rubrique « Déclarer » permet de remplir sa déclaration de revenus en ligne, étape par étape." },
      { title: "Télécharger un avis d'imposition", text: "Dans « Documents », tu peux télécharger et imprimer ton avis d'imposition, souvent demandé pour d'autres démarches (logement, aides...)." }
    ] },

  { id: 'dem-france-travail', category: 'demarches', icon: '💼', title: 'France Travail',
    description: "S'inscrire et faire ses démarches sur francetravail.fr.",
    whatIsIt: "France Travail (qui s'appelait avant Pôle Emploi) aide à chercher un travail et peut verser une allocation si tu perds ton emploi. Pour être suivi et avoir accès aux offres d'emploi, il faut s'y inscrire.",
    documents: ["Pièce d'identité", "Numéro de Sécurité Sociale", "CV si tu en as un", "Adresse email"],
    steps: [
      { title: "Aller sur le site France Travail", text: "Ouvre le site officiel francetravail.fr (anciennement Pôle Emploi).", screenshot: "/screenshots/francetravail-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel francetravail.fr" },
      { title: "S'inscrire comme demandeur d'emploi", text: "Clique sur « S'inscrire », puis suis les étapes en indiquant tes informations personnelles et ta situation professionnelle." },
      { title: "Se connecter à Mon Espace", text: "Clique sur « Se connecter », entre ton identifiant (souvent ton email) et ton mot de passe." },
      { title: "Actualiser sa situation chaque mois", text: "Chaque mois, il faut « s'actualiser » : déclarer si tu as travaillé ou non. C'est obligatoire pour continuer à être suivi et, si tu y as droit, indemnisé." },
      { title: "Chercher une offre d'emploi", text: "Dans la rubrique « Offres d'emploi », tu peux chercher un métier près de chez toi et postuler directement en ligne." }
    ] },

  { id: 'dem-mdph', category: 'demarches', icon: '♿', title: 'La MDPH',
    description: "Faire une demande sur le site de la MDPH.",
    whatIsIt: "La MDPH aide les personnes en situation de handicap : reconnaissance officielle du handicap, aides financières, carte spéciale, accompagnement. Si toi ou un proche avez un handicap ou une maladie qui gêne la vie quotidienne, elle peut aider.",
    documents: ["Pièce d'identité", "Certificat médical de moins de 12 mois", "Justificatif de domicile"],
    steps: [
      { title: "La MDPH au Havre (Seine-Maritime)", text: "Pour le département de Seine-Maritime (dont Le Havre), la MDPH n'utilise pas le site national : il faut passer par le portail du Département, à l'adresse solidarites.seinemaritime.fr." },
      { title: "Créer un compte", text: "Sur solidarites.seinemaritime.fr, clique sur « Créer un compte » si c'est ta première demande. Indique tes informations personnelles." },
      { title: "Déposer une demande", text: "Une fois connecté, tu peux remplir et transmettre un dossier de demande (par exemple pour une allocation ou une reconnaissance de handicap)." },
      { title: "Suivre l'avancée de son dossier", text: "L'espace personnel permet de voir où en est ton dossier, et de recevoir les décisions de la commission." },
      { title: "Contacter la MDPH du Havre", text: "En cas de question, la MDPH du Havre se trouve à l'UTAS, 89 boulevard de Strasbourg, 76600 Le Havre. Téléphone : 02 32 18 86 87." }
    ] },

  { id: 'dem-mee', category: 'demarches', icon: '📅', title: 'Mes Événements Emploi',
    description: "Utiliser le site Mes Événements Emploi.",
    whatIsIt: "Ce site liste les journées où des entreprises viennent recruter directement, près de chez toi. C'est une bonne occasion de rencontrer des employeurs sans passer par une candidature écrite.",
    documents: ["CV à jour (papier ou numérique)", "Ton identifiant France Travail si tu en as un"],
    steps: [
      { title: "Qu'est-ce que Mes Événements Emploi ?", text: "C'est un site de France Travail qui liste les forums, salons et journées de recrutement organisés près de chez toi." },
      { title: "Chercher un événement", text: "Sur le site, indique ta ville (Le Havre) pour voir les événements emploi à venir dans ta région." },
      { title: "S'inscrire à un événement", text: "Clique sur un événement qui t'intéresse, puis sur « S'inscrire » pour réserver ta place, si c'est demandé." },
      { title: "Préparer sa visite", text: "Certains événements demandent d'apporter des CV papier ou de préparer une présentation courte de toi (le fameux « pitch »)." }
    ] },

  { id: 'dem-logement-social', category: 'demarches', icon: '🏠', title: 'Logement social',
    description: "Faire une demande de logement social en ligne.",
    whatIsIt: "Un logement social (HLM) est un logement dont le loyer est moins cher qu'un logement privé, réservé aux personnes qui ont des revenus modestes. Il faut faire une demande officielle et souvent attendre, donc mieux vaut s'y prendre tôt.",
    documents: ["Pièce d'identité", "Justificatifs de ressources de tout le foyer", "Livret de famille si tu en as un"],
    steps: [
      { title: "Le site officiel", text: "Ouvre le site demande-logement-social.gouv.fr, le site officiel pour faire une demande de logement social (HLM) en France." },
      { title: "Créer sa demande", text: "Clique sur « Faire une demande de logement social ». Renseigne tes informations : composition familiale, ressources, ville souhaitée." },
      { title: "Le numéro unique", text: "Une fois la demande validée, tu reçois un numéro unique d'enregistrement (à garder précieusement) qui prouve que ta demande est bien active." },
      { title: "Renouveler sa demande", text: "La demande doit être renouvelée chaque année, sinon elle est automatiquement annulée. Le site t'envoie un message avant l'échéance." },
      { title: "Suivre sa demande", text: "Dans ton espace personnel, tu peux modifier tes informations (adresse, revenus...) et voir l'avancée de ta demande." }
    ] },

  { id: 'dem-mobilite', category: 'demarches', icon: '🚌', title: 'Aide à la mobilité',
    description: "Découvrir le Pôle Mobilité et l'association MAD (Mobilité Associative Durable) au Havre.",
    whatIsIt: "Ne pas avoir de moyen de transport est souvent un obstacle pour trouver un travail ou suivre une formation. Le Pôle Mobilité du Havre aide justement les personnes dans cette situation : passer le permis à prix réduit, réparer sa voiture, louer un véhicule pas cher.",
    documents: ["Lettre d'orientation d'un conseiller (France Travail, mission locale...)", "Pièce d'identité"],
    steps: [
      { title: "Le Pôle Mobilité du Havre", text: "Le Pôle Mobilité (site pole-mobilite.org) aide les personnes qui ont du mal à se déplacer pour aller travailler ou se former : auto-école solidaire, garage solidaire, location de voitures et scooters à petit prix." },
      { title: "Comment y accéder", text: "L'accès au Pôle Mobilité se fait généralement sur orientation d'un conseiller (France Travail, mission locale, assistante sociale). Parle-en à ton formateur ou ton conseiller pour savoir si tu peux en bénéficier." },
      { title: "L'adresse à Le Havre", text: "LH Mobilité se trouve au 90 rue Gustave Brindeau, 76600 Le Havre. L'association MAD (Mobilité Associative Durable) y est également présente." },
      { title: "Le garage solidaire", text: "Un garage solidaire permet de faire réparer sa voiture à prix réduit, selon les revenus, ou d'apprendre à faire soi-même l'entretien de base avec de l'aide." }
    ] },

  { id: 'dem-remuneration-normandie', category: 'demarches', icon: '💶', title: 'Rémunération - Région Normandie',
    description: "Utiliser le site de rémunération des stagiaires de la Région Normandie.",
    whatIsIt: "Si tu suis une formation financée par la Région Normandie et que tu n'es pas indemnisé par France Travail, tu peux être payé pendant ta formation. Ce site permet de suivre ces paiements.",
    documents: ["Identifiants transmis par ton organisme de formation", "RIB"],
    steps: [
      { title: "Aller sur la plateforme", text: "Ouvre le site remuneration.normandie.fr, la plateforme officielle de gestion de la rémunération des stagiaires de la formation professionnelle en Normandie.", screenshot: "/screenshots/remuneration-normandie.jpg", screenshotAlt: "Page d'accueil du site officiel remuneration.normandie.fr" },
      { title: "Choisir son portail", text: "Sur la page d'accueil, choisis le portail « Stagiaire » (les autres portails sont réservés aux organismes de formation et aux agents de la Région)." },
      { title: "Se connecter", text: "Utilise les identifiants qui t'ont été communiqués par la Région ou ton organisme de formation pour te connecter à ton espace." },
      { title: "Suivre son dossier", text: "Une fois connecté, tu peux consulter tes paiements, tes feuilles de paie, et l'avancée de ton dossier de rémunération et d'aide à la mobilité." },
      { title: "En cas de question", text: "Pour toute question sur ta rémunération, tu peux appeler le numéro gratuit Parcours-Métier : 0 800 05 00 00." }
    ] },

  { id: 'dem-ecole', category: 'demarches', icon: '🏫', title: 'École, cantine, périscolaire',
    description: "Inscrire et renouveler l'inscription de ses enfants à l'école, la cantine, le périscolaire et le centre de loisirs (Ville du Havre).",
    whatIsIt: "Si tu as des enfants scolarisés au Havre, la cantine et la garde avant/après l'école (périscolaire) ne sont pas automatiques : il faut inscrire ton enfant chaque année sur le site de la ville, sinon il ne pourra pas manger à la cantine ou être gardé.",
    documents: ["Attestation de quotient familial CAF de moins de 2 mois", "Adresse email", "Livret de famille"],
    steps: [
      { title: "Le Kiosque Famille du Havre", text: "La Ville du Havre regroupe toutes les démarches liées aux enfants (cantine, périscolaire, centres de loisirs) sur un seul site : kiosquefamille.lehavre.fr.", screenshot: "/screenshots/lehavre-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel lehavre.fr" },
      { title: "Créer son compte", text: "Si c'est ta première inscription, crée un compte sur le Kiosque famille avec ton email et les informations de ton enfant." },
      { title: "S'inscrire à la cantine et au périscolaire", text: "Une fois connecté, choisis les jours où ton enfant mangera à la cantine ou ira au périscolaire (matin ou soir), selon une semaine type ou au calendrier." },
      { title: "Fournir son quotient familial CAF", text: "Le tarif dépend de ton quotient familial. Dépose ton attestation CAF de moins de 2 mois sur le Kiosque famille chaque année en janvier pour avoir le bon tarif." },
      { title: "Consulter et payer sa facture", text: "Chaque mois, une facture unique (cantine + périscolaire + centre de loisirs) est disponible sur le Kiosque famille. Tu peux la payer directement en ligne par carte bancaire." }
    ] },

  { id: 'dem-titre-sejour', category: 'demarches', icon: '🛂', title: 'Titre de séjour',
    description: "Créer et renouveler un titre de séjour en arrivant au Havre.",
    whatIsIt: "Le titre de séjour est le document qui autorise une personne étrangère à vivre légalement en France. Il faut le demander en arrivant et le renouveler avant sa date de fin, sinon tu risques de te retrouver en situation irrégulière — c'est souvent la toute première démarche à faire en arrivant.",
    documents: ["Passeport", "Justificatif de domicile", "Photo d'identité récente", "Adresse email"],
    steps: [
      { title: "Le site officiel ANEF", text: "Les démarches de titre de séjour se font en ligne sur le site officiel administration-etrangers-en-france.interieur.gouv.fr (site de l'ANEF, Administration Numérique des Étrangers en France).", visual: "document" },
      { title: "Créer son compte", text: "Clique sur « Créer un compte », renseigne ton email et crée un mot de passe. Tu recevras un email de confirmation à valider.", visual: "mail" },
      { title: "Choisir sa démarche", text: "Une fois connecté, choisis le type de démarche : première demande de titre de séjour, renouvellement, ou changement de statut, selon ta situation.", visual: "idcard" },
      { title: "Remplir le formulaire et joindre les documents", text: "Le site te demande de remplir un formulaire puis de scanner ou photographier tes documents (passeport, justificatif de domicile, photo d'identité...).", visual: "phone" },
      { title: "Suivre sa demande", text: "Après l'envoi, tu peux suivre l'état de ta demande dans ton espace personnel. Tu recevras un message quand un rendez-vous en préfecture est nécessaire.", visual: "calendar" },
      { title: "Se faire accompagner", text: "Pour toute question, tu peux te faire aider par une association d'aide aux migrants au Havre ou par ton formateur." }
    ] },

  { id: 'dem-casier-judiciaire', category: 'demarches', icon: '📜', title: 'Casier judiciaire',
    description: "Demander son extrait de casier judiciaire en ligne.",
    whatIsIt: "Le casier judiciaire est un document qui prouve que tu n'as pas de condamnation (ou liste les condamnations éventuelles). Beaucoup d'employeurs ou d'administrations le demandent, notamment pour certains métiers (enfance, sécurité...).",
    documents: ["Nom, prénom, date et lieu de naissance exacts (comme sur ta carte d'identité)"],
    steps: [
      { title: "Le site officiel", text: "Ouvre le site officiel casier-judiciaire.justice.gouv.fr pour demander ton extrait de casier judiciaire (bulletin n°3), souvent demandé pour un emploi.", screenshot: "/screenshots/casier-judiciaire.jpg", screenshotAlt: "Page d'accueil du site officiel casier-judiciaire.justice.gouv.fr" },
      { title: "Remplir le formulaire", text: "Clique sur « Effectuer une demande », puis indique ton nom, prénom, date et lieu de naissance exactement comme sur ta carte d'identité." },
      { title: "Aucun compte nécessaire", text: "Cette démarche est gratuite et ne demande pas de créer de compte : il suffit de remplir le formulaire en ligne à chaque demande." },
      { title: "Recevoir le document", text: "Le bulletin est envoyé par courrier postal à ton domicile sous quelques jours. Il n'est pas envoyé par email pour des raisons de sécurité." }
    ] },

  { id: 'dem-carte-identite', category: 'demarches', icon: '🪪', title: "Carte d'identité",
    description: "Prendre rendez-vous pour créer ou renouveler sa carte d'identité (ville du Havre et site gouvernemental).",
    whatIsIt: "La carte d'identité prouve qui tu es en France. Elle est différente du titre de séjour : elle concerne surtout les personnes de nationalité française. Beaucoup de démarches administratives te demanderont une pièce d'identité valide.",
    documents: ["Photo d'identité récente aux normes", "Justificatif de domicile", "Ancienne carte d'identité si tu en as une"],
    steps: [
      { title: "Faire la pré-demande en ligne", text: "Avant tout rendez-vous, fais ta pré-demande sur le site officiel service-public.fr ou directement sur passeport.ants.gouv.fr (ANTS). Tu obtiens un numéro de dossier à garder.", visual: "document", screenshot: "/screenshots/ants-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel ants.gouv.fr" },
      { title: "Prendre rendez-vous à la mairie du Havre", text: "Va sur le site lehavre.fr, rubrique État civil > Carte nationale d'identité et passeport, pour réserver un créneau à l'Hôtel de Ville ou dans une mairie annexe (Bléville, Graville, Rouelles).", visual: "calendar", screenshot: "/screenshots/lehavre-accueil.jpg", screenshotAlt: "Page d'accueil du site officiel lehavre.fr" },
      { title: "Préparer son dossier", text: "Prépare une photo d'identité récente aux normes, un justificatif de domicile, et ton ancienne carte d'identité si tu en as une. Le dossier incomplet ne sera pas accepté.", visual: "idcard" },
      { title: "Se présenter au rendez-vous", text: "Le jour du rendez-vous, présente-toi avec tous les documents originaux. Tes empreintes seront prises si tu as plus de 12 ans. Le rendez-vous dure entre 10 et 20 minutes.", visual: "house" },
      { title: "Récupérer sa carte", text: "Tu recevras un SMS quand ta carte sera prête (en général 3 à 4 semaines). Va la chercher là où tu as déposé ta demande, avec ton ancienne pièce d'identité.", visual: "phone" }
    ] }
].concat(EXTRA_MODULES)

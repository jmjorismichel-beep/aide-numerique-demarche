// Catalogue par défaut des modules. Chaque module peut ensuite être
// modifié (titre, description, étapes) par un formateur via l'éditeur ;
// ces modifications sont stockées dans la table `moduleContent` et
// surchargent ce catalogue par défaut (voir data/getModuleContent.js).

export const CATEGORIES = {
  appareils: 'Découvrir et configurer mon appareil',
  demarches: 'Démarches administratives en ligne'
}

export const DEFAULT_MODULES = [
  // ---------- APPAREILS ----------
  { id: 'app-fixe', category: 'appareils', icon: '🖥️', title: 'Ordinateur fixe',
    description: "Découvrir et configurer un ordinateur fixe." },
  { id: 'app-portable', category: 'appareils', icon: '💻', title: 'Ordinateur portable',
    description: "Découvrir et configurer un ordinateur portable." },
  { id: 'app-chromebook', category: 'appareils', icon: '💻', title: 'Chromebook',
    description: "Découvrir et configurer un Chromebook." },
  { id: 'app-windows', category: 'appareils', icon: '🪟', title: 'Windows',
    description: "Découvrir et configurer les paramètres de Windows.",
    steps: [
      { title: "Trouver le Menu Démarrer", text: "Clique sur le bouton avec le logo Windows en bas à gauche de l'écran. C'est le Menu Démarrer. Il permet d'ouvrir tous tes programmes." },
      { title: "Ouvrir les Paramètres", text: "Clique sur le Menu Démarrer, puis clique sur la roue crantée ⚙️ « Paramètres »." },
      { title: "Régler la langue", text: "Dans Paramètres, va dans « Heure et langue ». Tu peux choisir ou ajouter le français comme langue du clavier." },
      { title: "Régler le son et l'écran", text: "Dans Paramètres > « Système », tu peux régler le volume du son et la luminosité de l'écran." },
      { title: "Connecter le Wi-Fi", text: "Dans Paramètres > « Réseau et Internet », clique sur Wi-Fi, choisis ton réseau et entre le mot de passe." }
    ] },
  { id: 'app-apple', category: 'appareils', icon: '🍎', title: 'Apple (macOS)',
    description: "Découvrir et configurer les paramètres d'un Mac Apple." },
  { id: 'app-linux', category: 'appareils', icon: '🐧', title: 'Linux',
    description: "Découvrir et configurer les paramètres de Linux." },
  { id: 'app-tablette-android', category: 'appareils', icon: '📱', title: 'Tablette Android',
    description: "Découvrir et configurer les paramètres d'une tablette Android." },
  { id: 'app-ipad', category: 'appareils', icon: '📱', title: 'iPad',
    description: "Découvrir et configurer les paramètres d'un iPad." },
  { id: 'app-iphone', category: 'appareils', icon: '📞', title: 'iPhone',
    description: "Découvrir et configurer les paramètres d'un iPhone (toutes versions)." },
  { id: 'app-android-phone', category: 'appareils', icon: '📞', title: 'Smartphone Android',
    description: "Découvrir et configurer les paramètres d'un smartphone Android (toutes versions)." },

  // ---------- DÉMARCHES ----------
  { id: 'dem-sites-officiels', category: 'demarches', icon: '🌐', title: 'Les sites officiels',
    description: "Découvrir les sites officiels et savoir quelles démarches on peut faire en ligne." },
  { id: 'dem-caf', category: 'demarches', icon: '👨‍👩‍👧', title: 'La CAF',
    description: "Faire ses démarches sur le site de la CAF.",
    steps: [
      { title: "Aller sur le site de la CAF", text: "Ouvre le site officiel : caf.fr. Vérifie bien l'adresse : c-a-f point f-r." },
      { title: "Créer Mon Compte", text: "Clique sur « Mon Compte » puis « Créer mon compte ». Tu as besoin de ton numéro de Sécurité Sociale et d'un email." },
      { title: "Se connecter", text: "Clique sur « Mon Compte », entre ton identifiant (email) et ton mot de passe." },
      { title: "Faire une demande en ligne", text: "Une fois connecté, va dans « Mes démarches ». Tu peux déclarer ta situation, demander une aide, ou envoyer un document." },
      { title: "Envoyer un document", text: "Dans « Mes démarches » > « Envoyer un document », tu peux prendre une photo ou choisir un fichier depuis ton téléphone." }
    ] },
  { id: 'dem-cpam', category: 'demarches', icon: '🏥', title: 'La CPAM (Assurance Maladie)',
    description: "Faire ses démarches sur ameli.fr (CPAM)." },
  { id: 'dem-carsat', category: 'demarches', icon: '👴', title: 'La CARSAT (retraite)',
    description: "Faire ses démarches sur le site de la CARSAT." },
  { id: 'dem-lia', category: 'demarches', icon: '📄', title: 'LIA',
    description: "Découvrir et utiliser le service LIA." },
  { id: 'dem-impots', category: 'demarches', icon: '💶', title: 'Les Impôts',
    description: "Faire sa déclaration et ses démarches sur impots.gouv.fr." },
  { id: 'dem-france-travail', category: 'demarches', icon: '💼', title: 'France Travail',
    description: "S'inscrire et faire ses démarches sur francetravail.fr." },
  { id: 'dem-mdph', category: 'demarches', icon: '♿', title: 'La MDPH',
    description: "Faire une demande sur le site de la MDPH." },
  { id: 'dem-mee', category: 'demarches', icon: '📅', title: 'Mes Événements Emploi',
    description: "Utiliser le site Mes Événements Emploi." },
  { id: 'dem-logement-social', category: 'demarches', icon: '🏠', title: 'Logement social',
    description: "Faire une demande de logement social en ligne." },
  { id: 'dem-mobilite', category: 'demarches', icon: '🚌', title: 'Aide à la mobilité',
    description: "Utiliser les sites du Pôle Mobilité et de la MAD (aide à la mobilité)." },
  { id: 'dem-remuneration-normandie', category: 'demarches', icon: '💶', title: 'Rémunération - Région Normandie',
    description: "Utiliser le site de rémunération des stagiaires de la Région Normandie." },
  { id: 'dem-ecole', category: 'demarches', icon: '🏫', title: 'École, cantine, périscolaire',
    description: "Inscrire et renouveler l'inscription de ses enfants à l'école, la cantine, le périscolaire et le centre de loisirs." },
  { id: 'dem-titre-sejour', category: 'demarches', icon: '🛂', title: 'Titre de séjour',
    description: "Créer et renouveler un titre de séjour en arrivant au Havre." },
  { id: 'dem-casier-judiciaire', category: 'demarches', icon: '📜', title: 'Casier judiciaire',
    description: "Demander son extrait de casier judiciaire en ligne." },
  { id: 'dem-carte-identite', category: 'demarches', icon: '🪪', title: "Carte d'identité",
    description: "Prendre rendez-vous pour créer ou renouveler sa carte d'identité (ville du Havre et site gouvernemental)." }
]

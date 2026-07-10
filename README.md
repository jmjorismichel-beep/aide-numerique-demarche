# Parcours Numérique

Application web **hors-ligne et en ligne** pour la formation numérique de stagiaires : espace stagiaire (modules, test de positionnement, messagerie, export PDF) et espace formateur (suivi d'activité, groupes, gestion des stagiaires, édition du contenu des modules).

## Comment ça marche (hors-ligne / en-ligne)

Toutes les données sont d'abord écrites **en local** dans le navigateur (IndexedDB, via Dexie) : l'app fonctionne donc entièrement hors connexion, y compris pour naviguer dans les modules déjà chargés, écrire des messages, marquer une progression, etc.

Dès qu'une connexion internet est disponible, un moteur de synchronisation (`src/lib/sync.js`) envoie automatiquement les changements en attente vers **Firebase (Firestore)**, et récupère les changements faits par les autres utilisateurs (formateurs, autres stagiaires). Rien n'est perdu si la connexion coupe : les changements restent en file d'attente locale et repartent dès le retour du réseau.

L'app est aussi une PWA (Progressive Web App) : elle peut être installée sur ordinateur, tablette ou smartphone comme une vraie application, et fonctionne même après fermeture du navigateur.

**Limite importante** : la toute première inscription d'un compte nécessite une connexion internet (création sécurisée du compte). Une fois connecté au moins une fois sur un appareil, le stagiaire ou le formateur peut ensuite se reconnecter et travailler hors-ligne sur cet appareil.

## Mise en route

### 1. Créer le projet Firebase (gratuit)
1. Aller sur https://console.firebase.google.com, cliquer sur **Ajouter un projet**, suivre les étapes (le plan gratuit "Spark" suffit largement).
2. Dans le menu de gauche : **Compilation > Authentication > Get started**, puis activer le fournisseur **E-mail/Mot de passe**.
3. Dans le menu de gauche : **Compilation > Firestore Database > Créer une base de données**, choisir une région proche (ex. `eur3 (Europe)`), démarrer en **mode production**.
4. Dans **Firestore Database > Règles**, coller le contenu de `firestore.rules` (fourni dans ce dossier) et cliquer sur **Publier**.
5. Dans **Paramètres du projet** (icône ⚙️ en haut à gauche) **> Vos applications > Ajouter une application Web** (icône `</>`), donner un nom, puis copier les valeurs affichées (`apiKey`, `authDomain`, `projectId`, etc.).

### 2. Configurer les variables d'environnement
Copier `.env.example` en `.env` et renseigner les valeurs récupérées à l'étape précédente :
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FORMATEUR_INVITE_CODE=ChoisissezVotrePropreCode
```
Sur Netlify : **Site settings > Environment variables**, ajouter les mêmes 7 variables.

### 3. Créer un compte formateur
Deux méthodes :
- **Recommandée** : sur le formulaire d'inscription, cochez « Je suis formateur » et entrez le code formateur (voir variable `VITE_FORMATEUR_INVITE_CODE`, étape 2). Le compte est créé directement avec le bon rôle.
- **Manuelle** (dépannage) : inscrivez-vous normalement comme stagiaire, puis dans Firebase Console > **Firestore Database > Données**, ouvrez la collection `users`, trouvez le document et changez le champ `role` de `stagiaire` à `formateur`. Reconnectez-vous ensuite dans l'app.

### 4. Déployer sur Netlify (comme vos autres projets)
1. Pousser ce dossier sur GitHub (interface web GitHub, comme d'habitude).
2. Sur Netlify : **Add new site > Import from GitHub**.
3. Build command : `npm run build` — Publish directory : `dist`.
4. Ajouter les 6 variables d'environnement (étape 2).
5. Déployer.
6. Dans Firebase Console > **Authentication > Settings > Authorized domains**, ajoutez le domaine Netlify de votre site (ex. `votresite.netlify.app`), sinon la connexion sera bloquée depuis le site en ligne.

### Développement local
```
npm install
npm run dev
```

## Contenu des modules

Les **26 modules sont désormais entièrement rédigés** dans `src/data/modules.js` (10 appareils + 16 démarches administratives), avec des étapes vérifiées sur les sites officiels et locaux du Havre (juillet 2026) : caf.fr, ameli.fr, lassuranceretraite.fr, impots.gouv.fr, francetravail.fr, le portail MDPH de Seine-Maritime (solidarites.seinemaritime.fr — attention, ce département n'est pas rattaché au portail national mdphenligne.cnsa.fr), demande-logement-social.gouv.fr, l'ANEF pour les titres de séjour, casier-judiciaire.justice.gouv.fr, le Kiosque famille et le service État civil de la Ville du Havre (lehavre.fr), le réseau LiA (transports-lia.fr), le Pôle Mobilité du Havre (pole-mobilite.org), et la plateforme de rémunération des stagiaires de la Région Normandie (remuneration.normandie.fr).

**Ces sites évoluent régulièrement** — pensez à vérifier périodiquement que les informations (adresses, horaires, procédures) sont toujours exactes, et à corriger directement depuis l'espace formateur si besoin (bouton « Contenu des modules »).

Pour ajuster le contenu, deux méthodes :
- **Depuis l'app** (recommandé pour vous, sans coder) : connectez-vous en formateur, allez dans **Contenu des modules**, sélectionnez un module, modifiez les étapes. Chaque enregistrement garde une version précédente, avec un bouton « Revenir à cette version » en cas d'erreur.
- **Dans le code** : éditez directement `src/data/modules.js` — utile pour des modifications en masse avant de livrer aux stagiaires.

## Nouveautés (deuxième itération)

- **Taille de texte réglable** : bouton en haut de l'écran (🔤), 3 tailles.
- **Lecture audio** : bouton 🔊 sur chaque étape et « Écouter tout » en haut d'un module, via la synthèse vocale du navigateur (gratuite, fonctionne aussi hors-ligne une fois la page chargée).
- **Illustrations d'étapes** : une petite icône schématique (pas une vraie capture d'écran, mais un repère visuel : Wi-Fi, cadenas, souris, calendrier...) peut être associée à chaque étape. Déjà fait sur Windows, CAF, Titre de séjour et Carte d'identité à titre d'exemple ; réglable pour tous les autres modules directement depuis l'éditeur formateur (menu déroulant « Icône d'illustration » sous chaque étape).
- **Progression visible** : barre de progression sur le tableau de bord stagiaire, coche verte sur les modules terminés.
- **Documents à préparer** : encadré bleu en haut des modules de démarches administratives, listant les pièces à avoir sous la main — éditable depuis l'interface formateur.
- **Vérification de compréhension** : quiz à la fin d'un module quand il en a un (Windows et CAF pour l'instant), sinon une auto-évaluation simple (facile / aide / difficile) que le formateur peut consulter. Le quiz est entièrement éditable depuis l'interface formateur (questions, options, bonne réponse). Aucune note, aucun badge, aucune attestation générée.
- **Messagerie avec pièce jointe et compteur non lu** : possibilité d'envoyer une photo (bouton 📷, compressée automatiquement avant l'envoi), pastille rouge dans le menu et sur chaque contact tant qu'un message n'a pas été ouvert.
- **Modules assignés par groupe** : dans Groupes, bouton « Assigner des modules » pour limiter ce qu'un groupe voit sur son tableau de bord (sans rien cocher, tout reste visible par défaut).
- **Statistiques formateur** : nouvel onglet listant le taux de complétion de chaque module par l'ensemble des stagiaires, pour repérer les modules les plus bloquants.

**Non inclus volontairement** (sur votre demande) : pas de badges de réussite, pas d'attestations/certificats générés, pas de mention "RÉCIFE" dans l'application (renommée "Parcours Numérique").

**Limite connue** : les illustrations restent des icônes schématiques, pas de vraies captures d'écran des interfaces réelles (Windows, sites officiels...) — je n'ai pas ces images. Si vous voulez de vraies captures à un moment, il faudra soit les fournir (photos d'écran), soit me les décrire précisément pour que je génère un visuel adapté module par module.

## Nouveautés (troisième itération)

- **Inscription formateur par code** : sur le formulaire d'inscription, une case « Je suis formateur » fait apparaître un champ « Code formateur ». Si le code saisi correspond à `VITE_FORMATEUR_INVITE_CODE` (par défaut `FORMATEUR2026`, à changer avant la mise en production dans `.env` et sur Netlify), le compte est créé directement avec le rôle formateur — plus besoin de modifier Firestore à la main pour chaque nouveau formateur.
- **Mot de passe oublié** : lien sur la page de connexion, envoie un email de réinitialisation via Firebase (fonctionne uniquement en ligne).
- **Confirmation du mot de passe** à l'inscription, avec message clair si les deux ne correspondent pas.
- **Messages d'erreur en français** : les erreurs techniques de Firebase (email déjà utilisé, mot de passe trop court, identifiants invalides...) sont traduites en phrases compréhensibles (`src/lib/authErrors.js`).
- **Validation en direct** sur le formulaire d'inscription : email et mot de passe vérifiés au fur et à mesure, pas seulement après clic sur le bouton.
- **Interface responsive mobile** : menu, grille de modules, messagerie, tableaux formateur et formulaires s'adaptent aux écrans de smartphone (testé jusqu'à 375px de large).

## Structure du projet
```
src/
  lib/db.js          -> base locale (IndexedDB / Dexie)
  lib/sync.js         -> moteur de synchronisation hors-ligne/en-ligne
  lib/firebase.js       -> connexion à Firebase (Auth + Firestore)
  lib/pdf.js               -> export PDF des modules
  data/modules.js            -> catalogue des modules par défaut
  data/testQuestions.js        -> questions du test de positionnement (adapté au niveau A1-C2)
  pages/stagiaire/                -> tableau de bord, page module
  pages/formateur/                  -> activité, groupes, stagiaires, éditeur de contenu
  pages/Messagerie.jsx                -> messagerie stagiaire <-> formateur
firestore.rules                        -> règles de sécurité à publier dans Firebase
```

## Prochaines améliorations possibles
- Renseigner le contenu détaillé des modules restants.
- Ajouter un logo personnalisé dans l'en-tête et sur les PDF (actuellement bandeau bleu simple).
- Ajouter un système de notification (nouveau message reçu) via un badge.
- Découper le fichier JS final en plusieurs morceaux plus légers si le nombre de stagiaires connectés en simultané devient important (avertissement de taille de build, sans impact pour un usage en centre de formation).

# Parcours Numérique RÉCIFE

Application web **hors-ligne et en ligne** pour la formation numérique des stagiaires (RÉCIFE Le Havre) : espace stagiaire (modules, test de positionnement, messagerie, export PDF) et espace formateur (suivi d'activité, groupes, gestion des stagiaires, édition du contenu des modules).

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
```
Sur Netlify : **Site settings > Environment variables**, ajouter les mêmes 6 variables.

### 3. Créer le premier compte formateur
Par défaut, toute nouvelle inscription crée un compte **stagiaire**. Pour créer un compte **formateur** :
1. Inscrivez-vous normalement dans l'app (comme stagiaire).
2. Dans Firebase Console > **Firestore Database > Données**, ouvrez la collection `users`, trouvez votre document et changez le champ `role` de `stagiaire` à `formateur`.
3. Reconnectez-vous dans l'app : vous arrivez sur l'espace formateur.

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

## Compléter le contenu des modules

Deux modules sont fournis entièrement remplis à titre d'exemple (**Windows** et **La CAF**, dans `src/data/modules.js`). Tous les autres modules (Apple, Linux, Chromebook, iPhone, Android, CPAM, CARSAT, Impôts, France Travail, titre de séjour, carte d'identité, etc.) sont créés avec un titre et une description, prêts à être complétés.

Pour ajouter leur contenu, deux méthodes :
- **Depuis l'app** (recommandé pour vous, sans coder) : connectez-vous en formateur, allez dans **Contenu des modules**, sélectionnez un module, ajoutez les étapes. Chaque enregistrement garde une version précédente, avec un bouton « Revenir à cette version » en cas d'erreur.
- **Dans le code** : éditez directement `src/data/modules.js` en ajoutant des `steps` (comme pour Windows ou la CAF) — utile si vous voulez pré-remplir beaucoup de contenu d'un coup avant de livrer aux stagiaires.

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
- Ajouter des logos RÉCIFE dans l'en-tête et sur les PDF (actuellement bandeau bleu simple).
- Ajouter un système de notification (nouveau message reçu) via un badge.
- Découper le fichier JS final en plusieurs morceaux plus légers si le nombre de stagiaires connectés en simultané devient important (avertissement de taille de build, sans impact pour un usage en centre de formation).

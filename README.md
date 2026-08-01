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

## Nouveautés (quatrième itération) — contenu adapté aux nouveaux arrivants

- **"C'est quoi, et pourquoi c'est utile ?"** : chaque module de démarche administrative commence maintenant par une explication simple du "pourquoi", avant le "comment". Utile aussi bien pour un non-francophone que pour un francophone qui découvre le système administratif.
- **Glossaire** (nouvel onglet "Glossaire") : une vingtaine de mots administratifs expliqués simplement (RIB, quotient familial, avis d'imposition, titre de séjour...), avec une recherche.
- **"Par où commencer ?"** (nouvel onglet) : deux parcours conseillés — « Je viens d'arriver au Havre » et « Je vis déjà ici mais je découvre le numérique » — avec un ordre de modules suggéré et une note sur pourquoi chaque étape compte.
- **Rappel de prudence dans la messagerie** : un message rappelle de ne pas envoyer de photo de documents sensibles (passeport, titre de séjour) par message, et de plutôt en parler en personne à son formateur.
- **Traduction dans 13 langues** (sélecteur de langue en haut de l'écran) : français, anglais, espagnol, portugais, arabe, russe, ukrainien, turc, dari/persan, albanais, tigrinya, somali, chinois. Les titres, descriptions et listes de documents des modules sont traduits, ainsi que l'essentiel de l'interface.
  - **Sous-titre français partout** (nouveauté demandée) : dès qu'une langue autre que le français est choisie, chaque titre, description, "C'est quoi" et liste de documents traduits affiche systématiquement le texte français original juste en dessous (précédé de 🇫🇷), dans un but pédagogique — le stagiaire voit sa langue ET apprend le mot français correspondant.
  - **Important** : les étapes détaillées de chaque module restent en français uniquement (un message dans l'app le précise, en profitant de l'occasion pour encourager la pratique du français).
  - **Fiabilité des traductions** : elles ont été relues une fois mais **ne sont pas validées par des locuteurs natifs**. Bonne confiance pour l'anglais, l'espagnol, le portugais, le russe, l'ukrainien et le turc. **À faire vérifier par un locuteur natif avant un usage critique** pour le dari/persan, l'albanais, le tigrinya, le somali et le chinois — le vocabulaire administratif y est plus délicat à traduire correctement sans relecture native. Toutes les traductions sont dans `src/data/translations/`, faciles à corriger.
  - **Affichage RTL** (arabe, dari/persan) : le sens de lecture s'inverse correctement, mais certains alignements n'ont pas été peaufinés spécifiquement — à tester en conditions réelles.
  - Seuls titre/description/documents des modules sont traduits pour l'instant (pas le "C'est quoi" ni les étapes) sauf pour l'anglais et l'arabe qui ont aussi le "C'est quoi" complet — un choix pour garder un périmètre de traduction réaliste à maintenir dans le temps.

**Ce que je n'ai volontairement pas fait : le contenu adapté par niveau linguistique (A1 à C2)**
Réécrire chacun des 26 modules en 3 versions de complexité différente représente un travail de contenu très lourd (environ 78 versions à rédiger et maintenir), avec un risque de devenir vite incohérent si le contenu évolue. J'ai gardé une seule version en français simple pour tous les niveaux, ce qui reste lisible même en A2. Si après un premier usage réel vous sentez que c'est un vrai manque, on peut le faire — mais je recommande d'abord de tester avec de vrais stagiaires pour voir si c'est réellement bloquant avant d'investir ce temps.

## Nouveautés (cinquième itération) — formulaire d'inscription

- **Formulaire en 3 étapes** (Identité → Mot de passe → Niveaux) avec une barre de progression visuelle, plutôt qu'un long formulaire d'un coup — plus facile à suivre pour un public peu à l'aise avec l'informatique.
- **Exemples dans les champs** (ex. « Ex : Fatima » dans le champ Prénom) pour clarifier ce qui est attendu sans dépendre uniquement de la lecture du label.
- **Case « Je suis formateur » séparée visuellement** : ce n'est plus une case à cocher au même niveau que le test de positionnement, mais un lien discret en bas de page (« Vous êtes formateur ? Cliquez ici »), pour éviter toute confusion entre les deux cases.
- **Icône œil 👁️ / 🙈** à la place du texte « Voir » / « Masquer », plus universellement compréhensible.
- **Indice de mot de passe permanent** (« Au moins 6 caractères ») visible dès le départ, pas seulement après une erreur.
- **En-tête du site fixe** (sticky) pendant le défilement, pour garder un repère visuel constant sur les formulaires longs.
- **Aide contextuelle sur le niveau informatique** : une phrase sous le menu déroulant explique concrètement ce que signifie le niveau sélectionné (« Totalement débutant », « Moyen »...), pour aider à mieux se situer.



## Nouveautés (sixième itération) — sécurité et accessibilité

- **🔴 Correctif de sécurité important — action requise de votre part.** Les règles Firestore permettaient auparavant à n'importe quel stagiaire de modifier son propre rôle (`stagiaire` → `formateur`) en manipulant directement sa fiche, en contournant complètement le code formateur. C'est corrigé : un compte stagiaire ne peut plus modifier que ses informations personnelles (prénom, nom, email, niveaux) ; le rôle, le groupe et le statut d'archivage ne sont modifiables que par un formateur.
  **Pour que ce correctif s'applique, republiez les règles** : copiez le nouveau contenu de `firestore.rules` dans Firebase Console > Firestore Database > Règles > Publier (comme vous l'aviez fait la première fois).
  **Limite technique honnête** : sur le plan gratuit (Spark), il n'est pas possible de vérifier le code formateur *pendant* la création du compte de façon totalement infalsifiable sans passer par une fonction serveur (Cloud Functions), qui nécessite un compte payant (Blaze) chez Firebase. Le correctif ferme la faille la plus simple à exploiter (modifier son propre compte après coup) ; un utilisateur très technique pourrait théoriquement encore forger une création de compte falsifiée au moment de l'inscription. Si vous voulez fermer complètement cette dernière possibilité un jour, il faudra envisager de passer sur le plan Blaze (qui reste gratuit jusqu'à un usage assez conséquent) pour ajouter cette vérification côté serveur.
- **Édition du "C'est quoi, et pourquoi c'est utile ?"** désormais possible depuis l'espace formateur (Contenu des modules), alors qu'elle nécessitait auparavant de modifier le code.
- **Accessibilité** : les boutons qui n'affichaient qu'une icône (🔊 écouter, 📷 joindre une photo, ✕ supprimer, sélecteurs de langue et de taille de texte) ont maintenant une description pour les lecteurs d'écran.



## Nouveautés (septième itération) — performance et identité visuelle

**Performance**
- **Découpage du code par page** : l'espace formateur, la messagerie, le glossaire, le test de positionnement, etc. ne sont plus téléchargés que si on visite réellement ces pages. Un stagiaire ne charge jamais le code de l'espace formateur, et inversement.
- **Export PDF différé** : la bibliothèque qui génère les PDF (assez lourde, environ 600 Ko) ne se télécharge plus qu'au moment où quelqu'un clique sur « Imprimer en PDF » — elle ne ralentit plus le premier chargement du site pour tout le monde.
- Résultat concret : le fichier chargé au tout premier affichage passe d'environ 1,45 Mo à 907 Ko.

**Identité visuelle**
- Nouvelle palette inspirée des **cabines de plage colorées du front de mer du Havre** : un bleu-vert profond (teal) en couleur principale évoquant le port, un corail chaud pour les boutons d'action, sur un fond frais couleur brume marine — plus proche de l'esprit joyeux et coloré de lesbonsclics.fr que l'habillage bleu générique précédent.
- Chaque module affiche maintenant une pastille d'icône colorée, tirée d'une rotation de 5 couleurs "cabine de plage" (corail, jaune soleil, bleu mer, prune, vert feuille) — toujours la même couleur pour un module donné, pour aider à les repérer visuellement d'un coup d'œil, comme la rangée de cabines colorées sur la plage.
- Titres en **Baloo 2**, une police à l'allure ronde et amicale, plus adaptée à un public d'apprentissage que la police système par défaut. Le corps de texte reste en police système pour rester rapide et bien s'afficher dans toutes les langues (dont l'arabe et le chinois).
- Boutons arrondis façon "pilule", ombres plus douces, dégradé corail/jaune sur la barre de progression.
- L'en-tête des PDF exportés reprend aussi la nouvelle couleur teal.

**Limite honnête** : je n'ai pas pu prendre de capture d'écran du résultat dans cet environnement (pas de navigateur disponible ici pour générer un aperçu). Le code compile sans erreur, mais un coup d'œil de votre part une fois déployé reste utile pour ajuster si besoin — dites-moi ce qui vous plaît ou pas et j'affine.

## Nouveautés (huitième itération) — 32 nouveaux modules

Le catalogue passe de 26 à **58 modules**, organisés en 9 catégories pour rester lisible : Appareils, Bases du numérique, Démarches administratives, Santé, Argent et travail, Logement, Famille, Papiers et citoyenneté, Sécurité et vie pratique.

Objectif de ce lot : des modules **utiles à la fois aux nouveaux arrivants et aux personnes déjà installées au Havre**, pas seulement aux démarches liées à l'immigration — email, mot de passe, scanner un document, compte bancaire, Complémentaire Santé Solidaire, Doctolib, numéros d'urgence, Mon Compte Formation, RSA, prime d'activité, chèque énergie, logement privé, PACS/mariage, naturalisation, carte grise, permis de conduire, listes électorales, arnaques en ligne, médiathèque du Havre, et plus encore (liste complète dans `src/data/modulesExtra.js`).

Sources vérifiées en juillet 2026 : ameli.fr, doctolib.fr, moncompteformation.gouv.fr (la connexion nécessite désormais FranceConnect+ depuis 2026), chequeenergie.gouv.fr, caf.fr, service-public.fr, ants.gouv.fr, justice.fr, bibliotheques.lehavre.fr.

**Limites à connaître** :
- **Mise à jour** : les 33 nouveaux modules du second lot sont désormais **entièrement** traduits dans les 13 langues (titre, description, « C'est quoi » et documents partout — plus seulement titre/description). Le sous-titre français s'affiche automatiquement dès qu'une traduction existe.
- Comme toujours avec du contenu administratif, certains montants et seuils (RSA, prime d'activité, chèque énergie, CSS) évoluent chaque année — à vérifier périodiquement (voir onglet Maintenance).
- Fiabilité des traductions : bonne pour en/es/pt/ru/uk/tr. À faire vérifier par un locuteur natif avant un usage critique pour fa (dari/persan), sq (albanais), ti (tigrinya), so (somali) et zh (chinois).

## Nouveautés (neuvième itération) — fiabilité et gouvernance dans la durée

**Droits des utilisateurs**
- **Suppression de compte en libre-service** : nouvel onglet « Mon compte » (stagiaires et formateurs), avec un bouton pour supprimer définitivement son compte et ses données, sans dépendre du formateur.

**Gouvernance à plusieurs formateurs**
- **Liste des formateurs** (onglet « Formateurs ») : voir qui a accès à l'espace formateur, et rétrograder un compte en stagiaire si besoin (départ, erreur, code partagé par erreur). On ne peut pas se rétrograder soi-même par erreur.
- **Brouillon avant publication** dans l'éditeur de contenu : « Enregistrer en brouillon » garde la version actuelle visible par les stagiaires pendant qu'on prépare une modification ; « Publier » la met en ligne. Utile pour se relire ou faire relire par un collègue avant de publier une correction en direct.

**Suivi dans le temps**
- **Nouvel onglet « Maintenance »** : rappel visuel (rouge si en retard) de la dernière relecture du contenu administratif, avec un bouton pour marquer « relu aujourd'hui ». Recommandation : relire tous les 6 mois, les montants et démarches officielles changeant régulièrement.
- **Export de sauvegarde manuel** (même onglet) : télécharge un fichier JSON avec toutes les données importantes (comptes, groupes, contenu, progression, activité). Ne remplace pas une vraie sauvegarde automatique côté serveur, mais protège contre une erreur de manipulation.
- **Surveillance de panne** : ce n'est pas quelque chose qu'on peut coder dans le site lui-même — l'onglet Maintenance explique comment configurer gratuitement [UptimeRobot](https://uptimerobot.com) en 5 minutes pour être alerté par email si le site tombe.

**Qualité et remontée de problèmes**
- **« Signaler un problème »** : nouvel onglet accessible à tous, un stagiaire ou un formateur peut décrire un bug rencontré. Visible par les formateurs dans un nouvel onglet « Signalements », avec possibilité de marquer comme résolu.
- **Tests automatisés de base** (`npm test`, sous `tests/basic.test.js`) : vérifient que les traductions fonctionnent, que chaque module a un titre/description, qu'il n'y a pas d'identifiant de module en double, etc. Pas une couverture complète, mais un premier filet de sécurité contre les régressions silencieuses lors de futures modifications.

**Volontairement non traité** (sur votre demande) : mentions légales et politique de confidentialité. À garder en tête néanmoins — c'est une obligation légale dès qu'un site collecte des données personnelles en France, à traiter avant une diffusion large.

## Nouveautés (dixième itération) — test de positionnement réaliste

Le test de positionnement a été entièrement repensé. **Avant** : 5 questions de connaissances abstraites (« quel bouton de la souris... »), avec un bug qui faisait que la première option était toujours comptée comme la bonne réponse, quel que soit son contenu réel — le résultat ne reflétait donc pas fidèlement la personne.

**Maintenant** : le stagiaire s'auto-évalue sur 8 actions numériques concrètes du quotidien (allumer un appareil, envoyer un email avec pièce jointe, remplir un formulaire en ligne, utiliser WhatsApp, scanner un document, faire une démarche administrative seul...), avec une échelle à 4 niveaux pour chacune : « Jamais fait », « Avec de l'aide », « Seul(e) avec difficulté », « Seul(e) facilement ». Le score total (sur 24) détermine le niveau proposé (Totalement débutant / Moyen / À l'aise / Avancé), avec un message rappelant que ce n'est qu'une première estimation que le formateur pourra ajuster.

Cette approche reflète beaucoup mieux la réalité pratique de la personne qu'un test de connaissances théoriques.

## Nouveautés (onzième itération) — module « Vérifier tous mes droits en une fois »

Ajout d'un module dans la catégorie « Argent et travail » présentant deux simulateurs officiels et gratuits qui recoupent plusieurs modules déjà existants :
- **mesdroitssociaux.gouv.fr** : portail officiel de la Sécurité sociale, simule plus de 50 aides nationales et locales en une fois (RSA, prime d'activité, aides au logement, CSS, retraite...).
- **1jeune1solution** (mes-aides.1jeune1solution.beta.gouv.fr) : simulateur du ministère du Travail spécialement pour les moins de 30 ans, plus de 1000 aides (bourses, logement, permis de conduire, santé, culture...).

Ce module a été ajouté par exception à la règle générale de ne plus enrichir le catalogue sans besoin identifié : contrairement à un nouveau sujet de démarche, il s'agit d'un outil de découverte qui adresse directement le non-recours aux aides déjà couvertes par la plateforme (RSA, prime d'activité, CSS, allocation de rentrée...). Des mentions ont aussi été ajoutées dans le « C'est quoi » de ces trois modules pour y renvoyer naturellement.

Contenu traduit dans les 13 langues (titre, description, « C'est quoi » et documents).

## Nouveautés (douzième itération) — fermeture complète de la faille résiduelle

**🔴 Sécurité — la faille résiduelle est maintenant complètement fermée, gratuitement.**

Auparavant, un compte pouvait obtenir le rôle formateur directement à l'inscription en saisissant le bon code. Même après le correctif précédent (empêchant de *modifier* son propre rôle après coup), il restait une faille théorique : quelqu'un de très technique aurait pu forger une création de compte falsifiée avec `role: 'formateur'` en contournant l'interface, ce qui ne pouvait être fermé qu'en passant sur le plan payant Firebase (Blaze) pour ajouter une vérification côté serveur.

**Nouvelle approche, sans coût supplémentaire** : tout compte est désormais **toujours** créé avec le rôle stagiaire, sans aucune exception — les règles Firestore l'imposent strictement, il n'existe plus aucun chemin technique pour créer un compte formateur directement. Si le bon code formateur est saisi à l'inscription, une **demande d'accès formateur** est enregistrée à la place, visible dans l'onglet Formateurs, où un formateur déjà présent doit l'**approuver** (ou la refuser) en un clic.

- **Onglet Formateurs** : nouvelle section "Demandes en attente" en haut, listant les demandes avec nom, email et date, avec les boutons "Approuver" / "Refuser".
- **Pour Joris (premier formateur)** : comme vous êtes déjà formateur sur le compte existant, vous pourrez approuver toutes les nouvelles demandes vous-même dès qu'elles arrivent.
- Cette faille est donc désormais **totalement fermée**, sans devoir passer sur le plan Blaze — la seule contrepartie est qu'un nouveau formateur doit attendre une validation manuelle au lieu d'un accès instantané, ce qui reste rapide en pratique avec un petit nombre de formateurs.

**Relecture des traductions par des locuteurs natifs**

Un fichier Excel (`Relecture_traductions.xlsx`) a été généré pour faciliter la relecture des 5 langues à la fiabilité la plus incertaine (dari/persan, albanais, tigrinya, somali, chinois) : un onglet par langue, avec le français original à côté de la traduction actuelle, et des colonnes vides à remplir par un locuteur natif pour proposer une correction. Une fois complété, les corrections pourront être reportées dans le code.

**Surveillance de panne (UptimeRobot)**

Ce n'est pas quelque chose qui se code dans le site — ça se configure une seule fois, en dehors de l'application, sur un service externe. Étapes (5 minutes) :
1. Aller sur [uptimerobot.com](https://uptimerobot.com) et créer un compte gratuit
2. Cliquer sur "Add New Monitor"
3. Type de moniteur : **HTTP(s)**
4. URL à surveiller : l'adresse de votre site (ex. `https://aide-numerique-demarche.netlify.app`)
5. Intervalle de vérification : 5 minutes (le plan gratuit le permet)
6. Renseigner une adresse email pour les alertes
7. Enregistrer

Dès que le site tombe en panne, un email d'alerte est envoyé automatiquement. Ce rappel figure aussi dans l'onglet Maintenance du site.

## Nouveautés (treizième itération) — messages groupés, notifications, visite guidée, accessibilité

**Messages groupés** : dans l'onglet Messagerie, un formateur peut maintenant écrire à un groupe entier en une fois (en plus d'écrire à une personne). Le message est envoyé individuellement à chaque stagiaire actif du groupe — chacun le retrouve dans sa messagerie habituelle.

**Notifications de nouveau message** : un bandeau propose d'activer les notifications du navigateur. Une fois activées, une notification apparaît quand un nouveau message arrive **tant que le site reste ouvert dans un onglet**, même en arrière-plan.
**Limite honnête** : ça ne fonctionne pas si le navigateur est complètement fermé. Un vrai système de notification "push" qui fonctionnerait même site fermé nécessiterait un serveur d'envoi (Firebase Cloud Messaging + Cloud Functions), qui requiert le plan payant Blaze de Firebase — pas mis en place pour rester gratuit.

**Visite guidée** : les nouveaux stagiaires voient, à leur première connexion, une présentation en 5 étapes des fonctionnalités principales (modules, parcours conseillés, langue, messagerie). Ne s'affiche qu'une seule fois par appareil, avec un bouton "Passer" à tout moment.

**Accessibilité — corrections concrètes après un vrai audit de contraste** :
- La couleur corail des boutons a été assombrie (`#F4693F` → `#D1451C`) : l'ancienne valeur n'atteignait qu'un contraste de 3:1 avec le texte blanc, insuffisant selon les normes WCAG AA (4,5:1 minimum pour du texte de taille normale). La nouvelle valeur atteint 4,6:1.
- Ajout d'un lien d'évitement ("Aller directement au contenu"), invisible sauf au focus clavier, pour permettre de sauter directement au contenu principal sans repasser par toute la navigation à chaque page — utile pour les utilisateurs de clavier ou de lecteur d'écran.
- L'en-tête du site utilise maintenant une balise `<header>` sémantique (les balises `<main>` et `<nav>` étaient déjà correctement utilisées).

**Vraies captures d'écran des interfaces réelles — non traité, honnêteté sur pourquoi** : remplacer les icônes schématiques par de vraies captures des sites officiels (CAF, France Travail...) dans les étapes des modules représenterait un travail considérable à l'échelle de 60 modules (plusieurs centaines de captures), avec un vrai risque d'obsolescence rapide (les interfaces de ces sites changent régulièrement) et nécessiterait une maintenance récurrente. Je préfère vous le dire clairement plutôt que de le faire à moitié. Si c'est une vraie priorité, on peut en discuter comme un chantier à part, potentiellement en commençant par un petit pilote sur 2-3 modules très utilisés (CAF, titre de séjour, France Travail) pour juger de la charge réelle avant de généraliser.

## Nouveautés (quatorzième itération) — pilote captures d'écran réelles

**Pilote réalisé sur 3 modules** : CAF, France Travail, Titre de séjour (ANEF) — chacun a maintenant une vraie capture d'écran de la page d'accueil du site officiel sur sa première étape, en plus de l'icône schématique. Les images sont dans `public/screenshots/`, compressées (14 à 75 Ko chacune), avec légende "Capture d'écran du site officiel, à titre indicatif" pour rester honnête sur le fait que l'interface réelle peut évoluer.

**Bilan honnête après ce pilote** (pour décider si on généralise) :
- **Temps réel constaté** : environ 15-20 minutes pour 3 modules (recherche des bonnes URLs, capture, compression, intégration, vérification). Sur cette base, les 60 modules prendraient plusieurs heures de travail, en une fois.
- **Un vrai souci technique rencontré** : certains sites (caf.fr notamment) mettent du temps à finir de charger toutes leurs requêtes réseau, rendant la capture automatique peu fiable sans réglages spécifiques par site — ce n'est pas un simple copier-coller à l'identique pour chaque module.
- **Le risque d'obsolescence reste réel** : ces captures sont figées à la date d'aujourd'hui (juillet 2026). Si caf.fr ou francetravail.fr changent leur page d'accueil, les captures deviendront visuellement différentes du site réel — sans casser le fonctionnement du module, juste moins fidèles.
- **Recommandation** : plutôt que de généraliser aux 60 modules d'un coup, je suggère de le faire progressivement, en commençant par les modules les plus consultés une fois que l'usage réel sera connu (voir le suivi d'activité côté formateur), et de prévoir une re-capture annuelle des captures existantes plutôt qu'un chantier ponctuel figé.

Pour ajouter une capture à une étape existante, deux nouveaux champs optionnels sur un step : `screenshot` (chemin vers l'image dans `public/screenshots/`) et `screenshotAlt` (texte alternatif descriptif).

## Nouveautés (quinzième itération) — généralisation des captures d'écran (14 modules)

Suite au pilote, généralisation à 11 modules supplémentaires : sites officiels, CPAM (ameli.fr), LiA, impôts, école/cantine, Complémentaire Santé Solidaire, Doctolib, Mon Compte Formation, chèque énergie, simulateurs de droits, carte grise (ANTS). **14 modules ont maintenant une vraie capture d'écran au total.**

Faute de données d'usage réelles (le site n'a pas encore été utilisé par de vrais stagiaires), la priorisation s'est appuyée sur les parcours conseillés déjà en place dans l'app plutôt que sur des statistiques de consultation.

**Une vraie limite technique découverte pendant ce lot** : le domaine de l'ANEF (`administration-etrangers-en-france.interieur.gouv.fr`, pour le titre de séjour) est inaccessible depuis mon environnement de travail — probablement un pare-feu spécifique aux sites sensibles du ministère de l'Intérieur. La première capture obtenue était en réalité une page d'erreur réseau, pas le vrai site ; je l'ai retirée avant qu'elle ne se retrouve en ligne. Le module Titre de séjour garde donc son icône schématique pour cette étape, sans fausse capture.

**Modules restants sans capture (46 sur 60)** : essentiellement les modules "appareils" (Windows, smartphone...) qui nécessiteraient des captures d'interfaces système plutôt que de sites web (approche différente, non traitée ici), et les modules moins prioritaires selon les parcours conseillés. À poursuivre progressivement, idéalement une fois que de vraies données d'usage seront disponibles.

## Nouveautés (seizième itération) — 28 modules avec captures d'écran réelles

Deuxième vague de généralisation : 14 modules supplémentaires (CARSAT, rémunération Normandie, casier judiciaire, carte d'identité, email, identité numérique, RSA, prime d'activité, arrêt maladie, compteur électricité/gaz, livret de famille, PACS/mariage, permis de conduire, listes électorales, médiathèque). **28 modules sur 60 ont désormais une vraie capture d'écran.**

**Deux nouveaux blocages réseau détectés et évités** (même famille de problème que l'ANEF) : `solidarites.seinemaritime.fr` (MDPH 76) et `justice.fr` sont inaccessibles depuis mon environnement de travail. Un troisième site, `leboncoin.fr`, a renvoyé une page vide (probablement une protection anti-robot). Les trois ont été vérifiés avant intégration et écartés plutôt que d'utiliser une capture invalide — ces modules gardent leur icône schématique pour l'instant.

**20 fichiers image au total, 1,3 Mo** — reste très léger. Certaines images sont réutilisées sur plusieurs étapes/modules quand le site officiel est le même (ex. caf.fr pour RSA et prime d'activité, service-public.fr pour plusieurs démarches).

**Modules restants sans capture (32 sur 60)** : les 10 modules "appareils" (nécessiteraient des captures d'interfaces système, pas de sites web), les 3 sites bloqués mentionnés ci-dessus, MDPH, Mes Événements Emploi, mobilité, logement social, logement privé, assurance habitation, auto-entrepreneur, naturalisation, regroupement familial, aide juridictionnelle, arnaques en ligne, appels à l'étranger, numéros d'urgence, mot de passe/scanner/sauvegarde/visioconférence/signature (modules de compétences générales sans site unique associé).

## Nouveautés (dix-septième itération) — 34 modules avec captures d'écran réelles, quasiment tout le capturable est fait

Dernière vague : 6 modules supplémentaires (Mes Événements Emploi, Pôle Mobilité, visioconférence, signature électronique, auto-entrepreneur, appels à l'étranger). **34 modules sur 60 ont désormais une vraie capture d'écran — 25 fichiers image, 1,8 Mo au total.**

**Trois nouveaux sites écartés après vérification** : `demande-logement-social.gouv.fr` (même famille de blocage réseau que l'ANEF), `seloger.com` et `pap.fr` (page de vérification anti-robot Cloudflare, pas le vrai contenu). Le module Logement social et une partie du module Logement privé gardent donc leur icône schématique.

**Ce qui reste sans capture (26 modules) — et pourquoi c'est la fin logique de cet exercice, pas un manque d'effort** :
- **10 modules "appareils"** (Windows, Apple, smartphones...) : nécessiteraient des captures d'interfaces système (réglages Windows, écrans Android...), une méthode différente non traitée ici.
- **5 modules bloqués au niveau réseau** : titre de séjour, naturalisation, regroupement familial (tous trois sur le domaine interior.gouv.fr), MDPH (seinemaritime.fr), aide juridictionnelle (justice.fr).
- **11 modules sans site unique à capturer** : compétences générales (mot de passe, scanner, sauvegarde), sujets sans démarche en ligne dédiée (numéros d'urgence, arnaques en ligne), ou modules où la démarche se fait par plusieurs canaux différents selon la situation plutôt que sur un site unique.

À ce stade, je considère que la couverture par capture d'écran a atteint sa limite raisonnable avec les moyens disponibles dans cet environnement. Pour aller plus loin sur les modules "appareils" ou les sites bloqués, il faudrait soit un accès réseau différent, soit des captures manuelles fournies par vous.

## Nouveautés (dix-huitième itération) — correctif important : boucle de synchronisation sur les pages publiques

**Bug identifié et corrigé** : le mécanisme de synchronisation tentait de lire toutes les collections Firestore (users, groups, messages...) toutes les 30 secondes, **même quand personne n'était connecté** — par exemple sur la page d'inscription. Comme les règles de sécurité exigent d'être authentifié pour lire ces données, chaque tentative échouait avec une erreur "permissions insuffisantes", répétée indéfiniment en boucle. Selon les conditions réseau, cela pouvait ralentir sensiblement le chargement de la page d'inscription ou de connexion, avec parfois un chargement qui semblait ne jamais se terminer.

**Correctif** : la synchronisation ne se déclenche désormais que si un utilisateur est réellement connecté. Sur les pages publiques (inscription, connexion), plus aucune tentative inutile n'est faite.

**Si vous rencontriez un problème de langues manquantes, de chargement bloqué, ou d'affichage partiel sur la page d'inscription, ce correctif devrait le résoudre.** Après avoir redéployé cette version, testez en navigation privée (Ctrl+Shift+N) pour être certain de ne pas voir une ancienne version mise en cache par votre navigateur.

## Nouveautés (dix-neuvième itération) — le vrai bug des langues invisibles, enfin trouvé et corrigé

Après une investigation approfondie (cache navigateur, service worker, cache Netlify, boucle de synchronisation...), la cause réelle du menu de langue qui semblait n'afficher que le français était **un bug CSS**, sans rapport avec le déploiement ou la mise en cache :

Le sélecteur de langue utilise du texte blanc (`color: white`) pour rester lisible sur le bandeau bleu foncé du site. Mais sur certains navigateurs — Chrome sous Windows en particulier — cette couleur de texte "fuit" dans la liste déroulante elle-même une fois ouverte, qui a un fond blanc natif du système d'exploitation. Résultat : le texte des langues non sélectionnées s'affichait en **blanc sur fond blanc, donc invisible** — seul "Français" restait lisible car sélectionné (surligné en bleu). Les 13 langues étaient donc bien présentes et fonctionnelles depuis le début, simplement invisibles à l'œil dans la liste déroulante.

**Correctif** : une couleur de texte est désormais forcée explicitement sur les options de la liste, indépendamment de la couleur du sélecteur lui-même.

Cette investigation a aussi permis de découvrir et corriger un vrai problème de fond (voir itération précédente) : la boucle de synchronisation qui tournait inutilement sur les pages publiques. Les deux correctifs sont indépendants mais ont été trouvés dans la même série d'échanges.

## Nouveautés (vingtième itération) — le formulaire d'inscription et la navigation basculent enfin de langue

**Le vrai manque révélé par votre question** : les modules changeaient bien de langue, mais le formulaire d'inscription et les menus de navigation ("Mes modules", "Glossaire", "Messagerie"...) étaient codés uniquement en français, sans jamais être branchés au système de traduction — un oubli qui n'était pas visible tant qu'on ne changeait pas la langue avant de s'inscrire.

**Corrigé** : le formulaire d'inscription en 3 étapes (titres, champs, boutons, messages d'erreur), la page de connexion, et tous les libellés de navigation (stagiaire et formateur) basculent maintenant correctement dans la langue choisie, avec le même mécanisme que les modules. Ajout d'environ 25 nouvelles clés de traduction dans les 13 langues (`src/data/translations/ui.js`).

**Ce qui reste en français pour l'instant** (périmètre volontairement limité pour cette passe) : les libellés détaillés des 4 niveaux informatiques ("Totalement débutant", "Moyen"...) et leurs textes d'aide, le contenu de la page "Mot de passe oublié", et les pages internes de l'espace formateur (Groupes, Stagiaires, Statistiques...) qui n'étaient de toute façon destinées qu'aux formateurs, présumés plus à l'aise en français dans ce contexte. Le glossaire, la messagerie et les autres pages stagiaire restent aussi en français pour leur propre contenu (au-delà de la navigation) — un chantier à part si souhaité.

## Nouveautés (vingt-et-unième itération) — explication des niveaux A1 à C2

Ajout d'une explication en langage simple sous le menu "Niveau linguistique" du formulaire d'inscription, qui change selon le niveau sélectionné — utile pour les personnes qui ne connaissent pas le Cadre européen commun de référence pour les langues (CECRL). Par exemple, en sélectionnant A1 : *"Découverte : tu comprends et utilises quelques mots et phrases très simples."*

Les 6 niveaux (A1 à C2) restent inchangés dans leur structure ; seule l'explication qui les accompagne est nouvelle. Traduit dans les 13 langues, avec le même mécanisme que le reste du formulaire.

## Nouveautés (vingt-deuxième itération) — crédit discret en pied de page

Ajout d'un pied de page sobre sur toutes les pages : *"Réalisé par Phare Numérique Havre"*, avec un lien vers pharenumeriquehavre.fr. Volontairement discret (petit texte gris clair), pour donner de la visibilité à la micro-entreprise sans nuire à l'image professionnelle de l'outil pédagogique.

**À vérifier de votre côté** : comme ce site sert d'outil de formation à RÉCIFE, ça vaut le coup de confirmer avec eux que cette mention leur convient avant diffusion large — une question de bon relationnel plutôt que d'obligation.

## Nouveautés (vingt-troisième itération) — investigation mobile

**Ce que j'ai vérifié concrètement** (pas juste en relisant le code) : j'ai testé le site avec un vrai navigateur mobile simulé (iPhone, largeurs 320px et 375px, les plus petits écrans courants) sur la page d'inscription. **Aucun débordement horizontal détecté** — le code actuel semble donc correctement adapté aux petits écrans.

**Renforcement préventif** : la zone de mise en page mobile a quand même été étendue pour couvrir des éléments ajoutés récemment et pas encore testés sur petit écran (bandeau de notifications, progression de l'inscription).

**Mon hypothèse principale** : puisque ce site est une PWA avec mise en cache hors-ligne, il est très probable que votre téléphone garde en mémoire une **ancienne version du site**, testée avant les nombreuses évolutions récentes — exactement le même phénomène que celui rencontré (et résolu) sur ordinateur avec le menu des langues. Chaque appareil garde son propre cache indépendamment.

**À essayer sur le téléphone concerné** :
1. Si le site a été "installé" comme application, le désinstaller
2. Dans les réglages du navigateur mobile, vider les données de navigation pour ce site (historique, cookies, données de site)
3. Rouvrir le site dans le navigateur (pas l'app installée) et retester

Si le problème persiste après ça, une capture d'écran du téléphone (comme celles fournies précédemment sur ordinateur) permettrait d'identifier précisément ce qui ne s'affiche pas correctement.

## Nouveautés (vingt-quatrième itération) — retours de vrais utilisateurs

Premiers vrais retours d'usage reçus, traités un par un :

**Module Linux** : ajout de l'explication demandée — "Linux est un système d'exploitation, comme Windows ou macOS, mais il est gratuit et moins gourmand en ressources."

**Module Doctolib** : nouvelle étape pour trouver un médecin qui accepte de nouveaux patients, via le site officiel de l'Assurance Maladie (annuairesante.ameli.fr), avec filtre dédié et recours possible auprès de la CPAM en cas d'échec.

**Module Numéros d'urgence, étendu** : ajout du 3919 (violences conjugales, écoute 24h/24 en 200+ langues), du 119 (enfance en danger), du 115 (hébergement d'urgence), et des coordonnées vérifiées des associations d'aide alimentaire au Havre (Banque Alimentaire, Restos du Cœur, Secours Populaire).

**Le point le plus important : niveau de français A2** — un vrai mécanisme a été mis en place (indépendant du système de traduction en langue étrangère) : un stagiaire dont le niveau linguistique déclaré est A1 ou A2, et qui utilise le site en français, voit désormais une **version simplifiée du texte** (phrases courtes, vocabulaire courant) plutôt que le texte standard. Un badge "Texte simplifié" s'affiche discrètement pour que ce soit transparent.

**Pilote sur 3 modules** (CAF, Doctolib, Linux) pour valider l'approche avant de généraliser — même méthode que pour les captures d'écran. Généraliser aux 60 modules demande un vrai travail de réécriture (proche de la traduction en langue étrangère en termes de charge), donc je recommande d'attendre de voir si l'approche convient sur ces 3 modules avant de poursuivre.

## Nouveautés (vingt-cinquième itération) — Le Grenier, Doctoome, adaptation selon les deux niveaux

**Le Grenier (vêtements)** : coordonnées ajoutées au module Numéros d'urgence, juste après l'aide alimentaire — deux boutiques « Frip et Chic », une Ressourcerie, carte éthik'do pour un accès à prix réduit.

**Nouveau module Doctoome** (61ᵉ module) : présente doctoome.com, qui complète Doctolib avec la recherche de médicament disponible en pharmacie et un profil santé personnalisé.

**Adaptation selon les deux niveaux, pas seulement la langue française** : le mécanisme de simplification (mis en place au tour précédent pour le niveau A1/A2) prend maintenant aussi en compte le **niveau informatique** — un stagiaire "débutant" en informatique voit lui aussi le texte simplifié, même si son français est bon. Les deux critères se déclenchent indépendamment (l'un ou l'autre suffit).

**Nouveau : modification manuelle des niveaux** — jusqu'ici, les niveaux n'étaient fixés qu'à l'inscription (ou via le test de positionnement). Un stagiaire peut désormais les modifier à tout moment depuis l'onglet « Mon compte », avec effet immédiat sur l'affichage des modules.

**Limite à garder en tête** : la simplification ne s'applique que sur les modules qui ont un contenu simplifié rédigé (3 modules pour l'instant : CAF, Doctolib, Linux). Les autres continuent d'afficher le texte standard même pour un profil A1/A2 ou débutant informatique, en attendant que la généralisation soit décidée.

## Nouveautés (vingt-sixième itération) — généralisation complète du texte simplifié à tous les modules

Suite au pilote sur 3 modules puis à l'extension à un second critère (niveau informatique), le contenu simplifié a été généralisé aux **61 modules du catalogue, sans exception**. Un stagiaire dont le niveau linguistique est A1/A2, ou dont le niveau informatique est "débutant", voit désormais un texte en phrases courtes et vocabulaire courant sur absolument tous les modules — plus seulement les 3 modules pilotes.

**Un test automatisé a été ajouté** (`npm test`) qui vérifie que chaque module a bien un contenu simplifié complet — si un futur module est ajouté sans ce champ, le test le signalera avant la mise en ligne.

**Limite à connaître** : cette généralisation a été faite rapidement, pour couvrir l'ensemble du catalogue en une fois plutôt que d'attendre indéfiniment. La qualité du texte simplifié n'a donc pas été relue par un formateur ou un locuteur natif A1/A2 — contrairement aux 3 modules pilotes, plus soignés. Une relecture progressive par un formateur serait utile, en particulier sur les modules les plus consultés, pour ajuster le ton et vérifier que rien d'important n'a été perdu dans la simplification.

## Nouveautés (vingt-septième itération) — Web Solidarité, Graine en Main, et une décision argumentée sur DORA

**Trois sources vérifiées avant tout ajout** :
- **DORA** (dora.inclusion.gouv.fr) : outil professionnel pour travailleurs sociaux, contenu dynamique en JavaScript qui change en continu. Décision : ne pas recopier son contenu (deviendrait vite obsolète), mais le **signaler comme ressource complémentaire** pour les formateurs.
- **Web Solidarité** (asso-websolidarite.org) : association réelle du Havre depuis 2015, vend des ordinateurs reconditionnés à prix solidaire, avec des offres spéciales pour les bénéficiaires du RSA. **Ajouté** au module Médiathèque.
- **Graine en Main** (graineenmain.cocagnebio.fr) : jardin d'insertion avec paniers de légumes bio par abonnement, nombreux points de retrait au Havre. **Ajouté** au module Numéros d'urgence et d'aide, à côté de l'aide alimentaire.
- **Annuaire des associations du Havre** (mesdemarches.lehavreseinemetropole.fr) : même logique que DORA — signalé comme point d'entrée pour trouver d'autres ressources locales, plutôt que recopié.

**Pourquoi cette distinction entre "ajouter" et "juste signaler"** : Web Solidarité et Graine en Main sont des ressources ponctuelles et stables (une association, un service). DORA et l'annuaire associatif sont eux-mêmes des **répertoires** qui listent des dizaines de structures changeantes — les recopier reviendrait à dupliquer un travail déjà fait ailleurs, avec le risque que notre copie devienne fausse avec le temps. Les signaler comme ressources complémentaires évite ce problème tout en aidant les utilisateurs à aller plus loin si besoin.



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

## Nouveautés (vingt-huitième itération) — clarification du mode d'emploi et point sur les traductions

**Explication et mode d'emploi clarifiés** (suite à une remarque justifiée) : les nouvelles étapes n'étaient pas assez claires sur "à quoi ça sert et comment s'en servir concrètement". Corrigé — chaque ressource ajoutée explique maintenant clairement son usage :
- L'annuaire des associations : où aller, quoi chercher, avec un exemple de recherche par mot-clé.
- DORA : clarifié que ce n'est pas un outil pour le stagiaire lui-même, mais pour son formateur — avec l'instruction claire "explique ton besoin à ton formateur, il fera la recherche pour toi".

**Sur la traduction** : comme pour les 61 autres modules, les étapes détaillées restent en français uniquement (seuls le titre, la description et le "C'est quoi" sont traduits dans les 13 langues) — c'est la règle appliquée uniformément depuis le début du projet, donc rien à changer sur ce point pour ces nouvelles étapes.

## Nouveautés (vingt-neuvième itération) — Maison des Femmes du Havre et Maison de Justice et du Droit

Deux structures locales vérifiées et ajoutées au module Numéros d'urgence et d'aide, juste après le 3919 :

**La Maison des Femmes du Havre** : information particulièrement à jour — la structure vient de déménager le 6 juillet 2026 dans de nouveaux locaux au 9 rue Magellan, près de la gare. Elle accueille toute femme victime de violences (conjugales, sexuelles, ou autres), sans condition de ressources, avec un accompagnement médical, psychologique, social **et juridique** en un seul lieu — ce qui répond directement aux deux besoins signalés (violences faites aux femmes, et accompagnement juridique).

**Maison de Justice et du Droit (MJD) du Havre** : permanences gratuites et confidentielles avec avocats, notaires et juristes, sur rendez-vous (10 rue Pierre Morgand, ☎ 02 79 92 76 00) — un complément concret au module existant sur l'aide juridictionnelle.

**Une vigilance particulière a été appliquée à ces deux ajouts**, étant donné la sensibilité du sujet des violences faites aux femmes : les informations ont été vérifiées via plusieurs sources récentes et concordantes (Groupe Hospitalier du Havre, Ville du Havre) avant intégration.

## Nouveautés (trentième itération) — la demande formateur en attente est enfin visible

**Bug réel corrigé** : une personne qui s'inscrivait avec le bon code formateur atterrissait sur l'espace stagiaire sans aucune explication — ce qui ressemblait exactement à un bug, alors que c'était le comportement voulu (l'approbation par un formateur existant, mise en place pour la sécurité). Le signal existait techniquement en mémoire, mais n'était affiché nulle part, et disparaissait en plus à chaque reconnexion.

**Corrigé en trois temps** :
1. Un bandeau clair apparaît désormais sur le tableau de bord : *« ⏳ Ta demande d'accès formateur est en attente »*, expliquant que c'est normal et temporaire.
2. Ce bandeau reste visible à chaque connexion tant que la demande n'est pas traitée — plus seulement juste après l'inscription.
3. **Faille de sécurité mineure corrigée au passage** : les règles Firestore empêchaient même la personne concernée de lire sa propre demande (seuls les formateurs le pouvaient) — corrigé pour autoriser la lecture de sa propre demande, sans toucher au fait que seul un formateur peut l'approuver ou la refuser.

**À savoir** : une fois la demande approuvée par un formateur, la personne doit se reconnecter (ou recharger la page) pour que son nouvel accès formateur soit pris en compte — ce n'est pas instantané entre deux sessions différentes.

## Nouveautés (trente-et-unième itération) — les stagiaires ne restaient pas bloqués sur une ancienne version

**Problème signalé** : des stagiaires déjà inscrits ne voyaient pas les nouveaux modules ajoutés au catalogue, malgré des mises à jour régulières du site.

**Cause** : le site fonctionne comme une PWA avec mise en cache hors-ligne (nécessaire pour l'usage sans connexion). Une fois le site chargé une première fois, rien ne vérifiait ni ne forçait activement la mise à jour de ce cache par la suite — un stagiaire qui gardait le site ouvert, ou qui y revenait souvent sans jamais faire un rechargement complet, pouvait rester bloqué longtemps sur une version ancienne sans le savoir. C'est exactement le même type de problème qu'on a rencontré (et résolu au cas par cas) sur des navigateurs individuels au fil des échanges précédents — sauf que cette fois, ça touchait les appareils des stagiaires, qu'on ne peut évidemment pas aller vider un par un.

**Corrigé à la source** : le site vérifie désormais activement s'il existe une nouvelle version...
- toutes les heures si le site reste ouvert ;
- et à chaque fois que la personne revient sur l'onglet (par exemple après avoir consulté un autre onglet).

Dès qu'une nouvelle version est détectée, elle est appliquée automatiquement (rechargement de la page). Rien n'est perdu dans l'opération : la progression et les messages sont déjà sauvegardés localement et se resynchronisent normalement après le rechargement.

**Conséquence pratique pour vous** : les futures mises à jour du site (nouveaux modules, corrections...) devraient maintenant atteindre les stagiaires déjà inscrits en quelques heures maximum, sans qu'ils aient besoin de vider leur cache ou de réinstaller l'application — ce qui n'était pas garanti auparavant.

## Nouveautés (trente-deuxième itération) — deux problèmes signalés par de vrais stagiaires, corrigés

**1. Un vrai bug de fond sur la sauvegarde de progression, trouvé et corrigé**

Le bouton « Marquer comme terminé » créait **toujours un nouvel enregistrement** en base, au lieu de mettre à jour l'enregistrement existant s'il y en avait déjà un pour ce module. Résultat possible : des doublons, et au rechargement, le mauvais enregistrement (incomplet) pouvait être lu en premier — donnant l'impression que la progression n'avait pas été sauvegardée.

- Corrigé à la source : le bouton met désormais à jour l'enregistrement existant plutôt que d'en créer un nouveau.
- La lecture de la progression a aussi été rendue tolérante aux doublons déjà créés par le bug chez les stagiaires déjà inscrits : elle considère un module comme terminé si **au moins un** enregistrement le confirme, plutôt que de se fier à un seul choisi arbitrairement.
- Les statistiques formateur ont été corrigées pour compter des **stagiaires distincts**, pas des enregistrements bruts — un doublon existant ne gonflera plus artificiellement les chiffres de complétion.

**2. Les retours "Comment ça s'est passé ?" n'étaient jamais visibles côté formateur**

Ce n'était pas un bug technique : la réponse du stagiaire (🙂 facile / 🤔 besoin d'aide / 😕 difficile) à la fin d'un module était bien enregistrée, mais **rien dans l'espace formateur ne permettait de la consulter** — la fonctionnalité était incomplète depuis le début.

Une nouvelle section **« 💬 Retours des stagiaires »** a été ajoutée en bas de l'onglet Statistiques : les 30 retours les plus récents, avec le nom du stagiaire, le module concerné, la réponse (mise en évidence en orange/rouge si "besoin d'aide" ou "difficile"), et la date — pour repérer rapidement qui pourrait avoir besoin d'un coup de main.

## Nouveautés (trente-troisième itération) — des schémas explicatifs, pas seulement des captures d'écran

Suite à un retour d'usage : deux schémas dessinés à la main (pas des photos ou images externes, donc aucun souci de droit d'auteur, et très légers — 4 Ko et 2 Ko) ont été ajoutés :

- **Un clavier AZERTY complet et labellisé**, avec les lettres A, Z, E, R, T, Y bien visibles en haut à gauche — le repère le plus simple pour reconnaître un clavier français.
- **Une souris avec ses trois zones expliquées** : clic gauche (sélectionner, cliquer, valider), clic droit (ouvre un menu), molette (fait défiler la page).

Les deux sont intégrés directement dans le module "Ordinateur fixe", aux étapes qui en parlent déjà ("Utiliser la souris" et "Utiliser le clavier").

**Mécanisme réutilisable** : un nouveau champ `diagram` (distinct du champ `screenshot` déjà existant pour les captures de sites officiels) permet d'ajouter facilement d'autres schémas de ce type à n'importe quelle étape de n'importe quel module — utile si d'autres retours similaires arrivent (par exemple, un schéma expliquant les ports d'un ordinateur, ou les boutons d'un smartphone).

## Nouveautés (trente-quatrième itération) — schémas étendus, avec un choix de périmètre assumé

**Clavier et souris généralisés** partout où ils étaient déjà mentionnés : le clavier AZERTY et la souris couvrent maintenant tous les endroits pertinents.

**Nouveau schéma : le pavé tactile (trackpad)** — 1 doigt déplace le curseur, 2 doigts font défiler, un tapotement clique. Ajouté aux modules Ordinateur portable et Apple/Mac, qui utilisent un trackpad plutôt qu'une souris.

**Trois nouveaux schémas à forte réutilisation, plutôt qu'un schéma par terme technique** :
- **La barre d'adresse du navigateur** : où taper l'adresse d'un site, à quoi sert le cadenas 🔒, comment reconnaître un site officiel. Ajouté au module "Sites officiels", le plus transversal de tous.
- **Le RIB** (Relevé d'Identité Bancaire) : où trouver l'IBAN et le BIC. Ajouté au module Compte bancaire.
- **La carte Vitale** : où trouver son numéro de Sécurité Sociale sur la carte. Ajouté au module CPAM.

**Un choix de périmètre assumé, à vous de me dire si vous voulez aller plus loin** : "tous les termes techniques dans tous les modules" représenterait littéralement des dizaines de schémas différents (port USB, QR code, arobase @, icône de recherche, symboles de batterie/Wi-Fi, etc.) — un travail considérable et sans fin naturelle. J'ai donc privilégié les **schémas à la plus forte réutilisation** (qui servent dans plusieurs modules à la fois) plutôt que d'essayer de tout couvrir d'un coup. Si un terme précis pose particulièrement problème aux stagiaires, dites-le-moi et je peux créer un schéma ciblé pour lui — comme on l'a déjà fait pour le clavier et la souris suite à un vrai retour d'usage.




## Nouveautés (trente-cinquième itération) — bouton d'installation, avec une vraie limite Apple à connaître

Un bandeau propose désormais d'installer le site comme une application, dès l'arrivée sur le site (avant même de se connecter).

**Là où ça fonctionne en un clic** : Windows, macOS et Linux avec Chrome ou Edge, et Android (Chrome, la plupart des navigateurs). Un clic sur "Installer" déclenche directement la fenêtre d'installation du navigateur — aucune manipulation supplémentaire.

**Sur iPhone et iPad — une limite d'Apple, pas de nous** : Safari sur iOS/iPadOS ne permet à **aucun site web au monde** de déclencher une installation automatique — c'est une restriction volontaire d'Apple, pas une limite technique qu'on pourrait contourner. Sur ces appareils, le bouton "Installer" ouvre donc une petite fenêtre d'instructions claires en 3 étapes (bouton Partager → "Sur l'écran d'accueil" → "Ajouter"), plutôt que de proposer un bouton qui ne fonctionnerait pas.

**Sur les autres navigateurs** (Firefox, Safari desktop...) qui ne proposent aucune installation programmable : le bandeau ne s'affiche pas plutôt que de proposer un bouton inopérant.

Le bandeau peut être fermé ("Non merci") et ne réapparaît pas ensuite sur cet appareil. Il disparaît aussi automatiquement une fois le site installé.


## Nouveautés (trente-sixième itération) — un coup de peinture guidé par le thème déjà présent

Suite à un retour d'un stagiaire ("donner envie d'aller sur le site"), j'ai renforcé un concept visuel qui existait déjà dans le code mais était sous-exploité : les **couleurs "cabines de plage du Havre"** (une référence directe et concrète au front de mer, plutôt qu'un choix de couleurs générique).

**1. Les couleurs deviennent un vrai repère, pas juste une décoration.** Avant, chaque module recevait une couleur presque aléatoire (basée sur son identifiant technique). Désormais, chaque catégorie a sa propre couleur de cabine, fixe et cohérente — reconnaître "Argent et travail" en violet ou "Santé" en vert devient un repère de navigation, comme une vraie rangée de cabines colorées où chaque teinte a son identité. 4 nouvelles couleurs ont été ajoutées à la famille existante pour couvrir les 9 catégories (sable, ciel, terracotta, lilas).

**2. Un moment "signature" à l'arrivée.** Une bannière illustrée en haut du tableau de bord — une rangée de cabines de plage, une par catégorie, avec la mer et le sable — accueille visuellement chaque stagiaire dès sa connexion. C'est un dessin fait main (SVG, aucune image téléchargée), très léger.

**3. Une touche discrète de front de mer.** Une fine bande ondulée, sous le bandeau du haut, rappelle la mer sans surcharger l'interface.

**Ce qui n'a volontairement pas changé** : la police (Baloo 2, déjà chaleureuse et bien choisie), la structure générale des pages, les couleurs de fond. Le principe suivi : pousser plus loin une idée déjà juste plutôt que de tout réinventer — et garder un seul geste visuel fort (la bannière) plutôt que d'accumuler les effets.

**Un choix technique évité, par prudence** : une première tentative de vague en découpe (`clip-path`) directement sur le bandeau de navigation collant (sticky) a été écartée en cours de route, après avoir identifié un risque réel de mal couper les boutons de navigation. Remplacée par une bande décorative séparée, sans ce risque.


## Nouveautés (trente-septième itération) — 13 nouvelles langues (25 au total)

Suite à la demande d'élargir la liste des langues, 13 langues supplémentaires ont été ajoutées : ourdou, pachto, bengali, hindi, vietnamien, roumain, polonais, kurde (kurmandji), swahili, wolof, géorgien, arménien, tamoul.

**Le sous-titre français fonctionne exactement comme pour les 12 langues précédentes** : dès qu'une de ces nouvelles langues est choisie, le texte français reste affiché en dessous, avec le drapeau 🇫🇷 — même mécanisme, sans aucune différence de traitement.

**Ce qui est traduit pour ces 13 langues** :
- L'intégralité de l'interface (navigation, formulaire d'inscription en 3 étapes, niveaux CECRL A1-C2, messages d'erreur) — comme pour les 12 langues précédentes.
- Le titre et la description des 61 modules.

**Ce qui reste en français pour ces 13 nouvelles langues (différence assumée avec les 12 premières)** : le "C'est quoi, et pourquoi c'est utile ?" et la liste des documents à préparer ne sont pas encore traduits pour ce nouveau lot de langues — seulement le titre et la description. Contrairement aux 12 langues précédentes qui ont ces champs traduits, ici le mécanisme de repli automatique s'applique : le texte français s'affiche à la place, sans rien casser, mais sans traduction non plus à cet endroit précis. Les étapes détaillées de chaque module restent en français uniquement, comme pour toutes les langues du site.

**Fiabilité des traductions** : comme précédemment, ces traductions ont été produites automatiquement, avec une fiabilité qui varie selon la langue. Le roumain et le polonais (langues européennes bien dotées en outils de traduction) sont probablement les plus fiables de ce lot. Le wolof et le kurde kurmandji, langues moins présentes dans les outils de traduction automatique, mériteraient une relecture par un locuteur natif avant un usage critique — même remarque que pour le tigrinya, le somali ou l'albanais du premier lot.

**Sur "toutes les langues du monde"** : comme expliqué avant de commencer, ce n'était pas réaliste (environ 7000 langues vivantes, beaucoup sans écriture standardisée ou sans données de traduction fiables). Ce paquet de 13 langues cible les publics les plus probables. Si des besoins précis se font sentir chez d'autres stagiaires, on peut ajouter une langue ciblée plutôt que d'essayer une couverture universelle.


## Nouveautés (trente-huitième itération) — "C'est quoi" et documents complétés pour 4 langues sur 13

Suite à la demande de compléter le "C'est quoi" et les documents à préparer pour les 13 nouvelles langues, **4 langues sont maintenant traduites à 100%** sur les 4 champs (titre, description, C'est quoi, documents), comme les 12 langues du premier lot : **ourdou, pachto, bengali, hindi**.

**Reste à faire** : vietnamien, roumain, polonais, kurde, swahili, wolof, géorgien, arménien, tamoul (9 langues) — pour l'instant, ces 9 langues ont titre + description + interface complète, mais le "C'est quoi" et les documents y affichent encore le français par défaut (repli automatique, rien de cassé, juste pas encore traduit à cet endroit précis).

Je continue avec les 9 langues restantes dans la foulée.


## Nouveautés (trente-neuvième itération) — les 13 nouvelles langues sont maintenant complètes à 100%

Suite de l'itération précédente : les 9 langues restantes (vietnamien, roumain, polonais, kurde, swahili, wolof, géorgien, arménien, tamoul) ont maintenant elles aussi le "C'est quoi" et les documents à préparer traduits, sur les 52 modules qui ont ce contenu.

**Bilan final : les 25 langues du site sont toutes traduites sur les 4 mêmes champs** (titre, description, C'est quoi, documents), sans différence de traitement entre "l'ancien" et le "nouveau" lot de langues. Le sous-titre français continue de s'afficher de la même façon pour toutes.

**Fiabilité, comme toujours** : ces traductions ont été produites automatiquement. Le roumain et le polonais sont probablement les plus fiables de ce lot (langues européennes bien dotées). Le wolof, le kurde kurmandji, le géorgien, l'arménien et le tamoul mériteraient une relecture par un locuteur natif avant un usage critique, comme c'est déjà noté pour le tigrinya, le somali et l'albanais du tout premier lot. Le fichier de relecture Excel préparé précédemment peut être étendu pour couvrir ces langues si des locuteurs natifs sont disponibles.


## Prochaines améliorations possibles
- Renseigner le contenu détaillé des modules restants.
- Ajouter un logo personnalisé dans l'en-tête et sur les PDF (actuellement bandeau bleu simple).
- Ajouter un système de notification (nouveau message reçu) via un badge.
- Découper le fichier JS final en plusieurs morceaux plus légers si le nombre de stagiaires connectés en simultané devient important (avertissement de taille de build, sans impact pour un usage en centre de formation).

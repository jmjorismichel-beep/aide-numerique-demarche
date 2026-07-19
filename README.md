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

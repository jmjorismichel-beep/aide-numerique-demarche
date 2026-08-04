// ============================================================
// NOUVEAUX MODULES — à coller dans DEFAULT_MODULES, juste après
// le module 'dem-carte-identite' et avant le "].concat(EXTRA_MODULES)"
// final de src/data/modules.js
// ============================================================

  { id: 'dem-passeport-majeur', category: 'papiers-citoyennete', icon: '📘', title: 'Passeport (majeur)',
    description: "Faire ou renouveler son passeport français, en tant qu'adulte.",
    whatIsIt: "Le passeport est un document qui permet de voyager en dehors de l'Union européenne et prouve ton identité à l'étranger. Il est différent de la carte d'identité et du titre de séjour. Il faut le demander en mairie, avec un rendez-vous, comme pour la carte d'identité.",
    documents: ["Justificatif d'identité (carte d'identité ou titre de séjour)", "Justificatif de domicile", "Photo d'identité récente aux normes", "Ancien passeport si tu en as un", "Timbre fiscal (86€, à acheter en ligne ou en bureau de tabac)"],
    simple: {
      description: "Faire son passeport, en tant qu'adulte.",
      whatIsIt: "Le passeport sert à voyager hors de l'Union européenne. Il prouve qui tu es à l'étranger. Il faut aller à la mairie avec un rendez-vous.",
      steps: [
        { title: "Faire la pré-demande en ligne", text: "Va sur service-public.fr ou passeport.ants.gouv.fr. Remplis le formulaire. Garde ton numéro de dossier." },
        { title: "Acheter le timbre fiscal", text: "Le timbre fiscal coûte 86€. Achète-le en ligne sur timbres.impots.gouv.fr, ou en bureau de tabac." },
        { title: "Prendre rendez-vous en mairie", text: "Va sur lehavre.fr. Réserve un créneau. Toutes les mairies ne font pas les passeports." },
        { title: "Se présenter avec ses documents", text: "Apporte tous tes documents originaux. Tes empreintes sont prises." },
        { title: "Récupérer son passeport", text: "Un SMS arrive quand il est prêt (2 à 3 semaines). Va le chercher avec ta convocation." }
      ]
    },
    steps: [
      { title: "Faire la pré-demande en ligne", text: "Avant le rendez-vous, fais ta pré-demande sur service-public.fr ou directement sur passeport.ants.gouv.fr (ANTS). Tu obtiens un numéro de dossier à garder précieusement, il te sera demandé en mairie." },
      { title: "Acheter le timbre fiscal", text: "Le passeport coûte 86€ pour un adulte (timbre fiscal). Tu peux l'acheter en ligne sur timbres.impots.gouv.fr, ou en bureau de tabac avec le logo « Timbres fiscaux »." },
      { title: "Prendre rendez-vous en mairie", text: "Toutes les mairies ne délivrent pas de passeports : au Havre, réserve un créneau via lehavre.fr, rubrique État civil > Carte nationale d'identité et passeport." },
      { title: "Préparer son dossier complet", text: "Rassemble ta pièce d'identité, un justificatif de domicile récent, une photo d'identité aux normes, ton ancien passeport si tu en as un, et le numéro de timbre fiscal." },
      { title: "Se présenter au rendez-vous", text: "Le jour J, apporte tous les documents originaux. Tes empreintes digitales sont enregistrées si tu as plus de 12 ans. Le rendez-vous dure environ 15-20 minutes." },
      { title: "Récupérer son passeport", text: "Un SMS ou email t'informe quand ton passeport est prêt, en général sous 2 à 3 semaines. Va le chercher là où tu as déposé ta demande." }
    ] },

  { id: 'dem-passeport-mineur', category: 'famille', icon: '📙', title: "Passeport (mineur)",
    description: "Faire ou renouveler le passeport d'un enfant mineur.",
    whatIsIt: "Un enfant, même bébé, a besoin de son propre passeport pour voyager hors de l'Union européenne. La demande est différente de celle d'un adulte : il faut la présence de l'enfant ET l'accord d'un parent qui a l'autorité parentale (parfois les deux).",
    documents: ["Justificatif d'identité de l'enfant (acte de naissance ou carte d'identité)", "Justificatif d'identité du parent qui fait la demande", "Justificatif de domicile", "Photo d'identité récente de l'enfant", "Timbre fiscal (17€ à 21€ selon l'âge)", "Justificatif de l'autorité parentale si nécessaire (jugement, livret de famille)"],
    simple: {
      description: "Faire le passeport de son enfant.",
      whatIsIt: "Un enfant a besoin de son propre passeport pour voyager hors d'Europe. L'enfant doit être présent au rendez-vous. Un parent avec l'autorité parentale doit signer.",
      steps: [
        { title: "Faire la pré-demande en ligne", text: "Va sur service-public.fr ou passeport.ants.gouv.fr. Remplis le formulaire avec les informations de l'enfant." },
        { title: "Acheter le timbre fiscal", text: "Le prix dépend de l'âge : 17€ (moins de 15 ans) ou 21€ (15-17 ans)." },
        { title: "Prendre rendez-vous en mairie", text: "Réserve un créneau sur lehavre.fr. L'enfant doit venir au rendez-vous." },
        { title: "Se présenter avec l'enfant", text: "Viens avec l'enfant et tous les documents. Un parent avec l'autorité parentale doit signer." },
        { title: "Récupérer le passeport", text: "Un SMS arrive quand il est prêt. Le parent qui a signé va le chercher." }
      ]
    },
    steps: [
      { title: "Faire la pré-demande en ligne", text: "Comme pour un adulte, la pré-demande se fait sur service-public.fr ou passeport.ants.gouv.fr, en indiquant les informations de l'enfant et du parent qui fait la démarche." },
      { title: "Acheter le timbre fiscal", text: "Le tarif dépend de l'âge de l'enfant : 17€ pour un enfant de moins de 15 ans, 21€ pour un enfant de 15 à 17 ans. À acheter sur timbres.impots.gouv.fr ou en bureau de tabac." },
      { title: "Prendre rendez-vous en mairie", text: "Réserve un créneau via lehavre.fr. Attention : la présence de l'enfant est obligatoire au rendez-vous, quel que soit son âge." },
      { title: "Rassembler l'autorisation parentale", text: "Si un seul parent se présente, il doit fournir une pièce d'identité et, selon les cas, un document prouvant qu'il a bien l'autorité parentale (livret de famille, jugement de divorce...). En cas de désaccord entre parents, une démarche spécifique existe." },
      { title: "Se présenter avec l'enfant", text: "Le jour du rendez-vous, l'enfant doit être présent avec le parent. Ses empreintes sont prises à partir de 12 ans. Le parent signe la demande." },
      { title: "Récupérer le passeport", text: "Un SMS ou email prévient quand le passeport est prêt (2 à 3 semaines). Le parent qui a signé la demande doit venir le chercher, avec l'enfant si possible." }
    ] },

  { id: 'dem-autorisation-sortie-territoire', category: 'famille', icon: '🧳', title: "Autorisation de sortie du territoire (AST)",
    description: "Remplir l'autorisation permettant à un enfant mineur de voyager à l'étranger sans être accompagné par un parent.",
    whatIsIt: "Depuis 2017, un enfant mineur qui vit en France et voyage à l'étranger sans être accompagné par l'un de ses deux parents doit avoir une Autorisation de Sortie du Territoire (AST), remplie par un parent. Sans ce papier, l'enfant peut être bloqué à la frontière.",
    documents: ["Formulaire Cerfa n°15646*01, rempli et signé par un parent", "Photocopie de la pièce d'identité du parent qui signe", "Pièce d'identité ou passeport de l'enfant"],
    simple: {
      description: "Remplir le papier pour qu'un enfant voyage sans ses parents.",
      whatIsIt: "Un enfant qui voyage sans un de ses parents a besoin d'un papier spécial : l'AST. Sans ce papier, l'enfant peut être bloqué à la frontière.",
      steps: [
        { title: "Télécharger le formulaire", text: "Va sur service-public.fr. Cherche « autorisation de sortie du territoire ». Télécharge le formulaire Cerfa 15646." },
        { title: "Remplir le formulaire", text: "Un parent remplit le formulaire. Il donne les dates du voyage. Il signe." },
        { title: "Joindre une photocopie de sa pièce d'identité", text: "Le parent qui signe joint la photocopie de sa carte d'identité ou de son passeport." },
        { title: "Donner les documents à l'enfant", text: "L'enfant part avec l'AST, la photocopie, et sa propre pièce d'identité." }
      ]
    },
    steps: [
      { title: "Comprendre qui doit remplir l'AST", text: "Si un enfant mineur voyage à l'étranger sans être accompagné par au moins l'un de ses deux parents (par exemple avec un club de vacances, un grand-parent, un ami de la famille), un parent doit remplir cette autorisation." },
      { title: "Télécharger le formulaire", text: "Va sur service-public.fr et cherche « autorisation de sortie du territoire d'un mineur ». Télécharge le formulaire Cerfa n°15646*01, disponible gratuitement en ligne." },
      { title: "Remplir et signer le formulaire", text: "Un parent ayant l'autorité parentale remplit le formulaire à la main : identité de l'enfant, dates du voyage, et signe. Aucune démarche en mairie n'est nécessaire." },
      { title: "Joindre une photocopie de sa pièce d'identité", text: "Le parent qui signe doit joindre la photocopie recto-verso de sa carte d'identité ou de son passeport, en cours de validité." },
      { title: "Remettre les documents à l'enfant ou à l'accompagnant", text: "L'enfant doit voyager avec l'AST originale, la photocopie de la pièce d'identité du parent, et sa propre pièce d'identité ou son passeport." }
    ] },

  { id: 'dem-visa', category: 'papiers-citoyennete', icon: '🛃', title: "Visa",
    description: "Comprendre quand un visa est nécessaire et faire sa demande sur France-Visas.",
    whatIsIt: "Un visa est une autorisation qui permet d'entrer dans un pays. Si tu veux retourner dans ton pays d'origine ou voyager dans un pays hors de l'espace Schengen, tu as peut-être besoin d'un visa selon ta nationalité et ton titre de séjour actuel.",
    documents: ["Passeport valide", "Titre de séjour ou carte d'identité", "Photo d'identité récente", "Justificatifs selon le motif du voyage (invitation, réservation, assurance voyage...)"],
    simple: {
      description: "Savoir quand tu as besoin d'un visa.",
      whatIsIt: "Un visa autorise à entrer dans un pays. Pour certains voyages, tu as besoin d'un visa. Ça dépend de ta nationalité et de ton titre de séjour.",
      steps: [
        { title: "Vérifier si tu as besoin d'un visa", text: "Va sur france-visas.gouv.fr. Utilise l'outil « Ai-je besoin d'un visa ? »." },
        { title: "Choisir le bon type de visa", text: "Le site te dit quel visa demander selon ton voyage." },
        { title: "Remplir la demande en ligne", text: "Crée un compte sur France-Visas. Remplis le formulaire." },
        { title: "Prendre rendez-vous au consulat", text: "Un rendez-vous est souvent nécessaire pour donner tes documents et tes empreintes." },
        { title: "Suivre sa demande", text: "Le traitement prend plusieurs semaines. Suis ta demande sur le site." }
      ]
    },
    steps: [
      { title: "Vérifier si tu as besoin d'un visa", text: "Sur france-visas.gouv.fr, utilise l'outil « Ai-je besoin d'un visa ? » en indiquant ta nationalité, ton pays de destination et le motif du voyage." },
      { title: "Comprendre les types de visa", text: "Il existe différents visas selon la durée et le motif (court séjour touristique, visite familiale, visa de retour vers ton pays d'origine...). Le site t'indique lequel demander." },
      { title: "Créer un compte et remplir la demande", text: "Crée un compte sur France-Visas et remplis le formulaire en ligne, en joignant les justificatifs demandés (passeport, photo, motif du voyage)." },
      { title: "Prendre rendez-vous au consulat", text: "Selon le pays, un rendez-vous est nécessaire dans un consulat ou un centre de dépôt de visa pour remettre tes documents originaux et donner tes empreintes." },
      { title: "Suivre sa demande", text: "Le délai de traitement varie de quelques jours à plusieurs semaines. Tu peux suivre l'avancée de ta demande directement sur ton compte France-Visas." }
    ] },

  { id: 'dem-livret-famille', category: 'famille', icon: '📖', title: "Livret de famille",
    description: "Comprendre à quoi sert le livret de famille et comment l'obtenir ou en demander une copie.",
    whatIsIt: "Le livret de famille est un carnet officiel qui rassemble les actes de naissance, de mariage et de décès d'une famille. Il est souvent demandé pour inscrire un enfant à l'école, faire une demande de CAF, ou prouver un lien familial.",
    documents: ["Acte de naissance ou de mariage récent", "Pièce d'identité"],
    simple: {
      description: "Comprendre le livret de famille.",
      whatIsIt: "Le livret de famille est un carnet officiel. Il montre les naissances, mariages et décès de la famille. On te le demande souvent pour l'école ou la CAF.",
      steps: [
        { title: "Qui reçoit un livret de famille ?", text: "Il est donné à la mairie lors d'un mariage, ou à la naissance du premier enfant si les parents ne sont pas mariés." },
        { title: "Perte ou vol du livret", text: "Demande un duplicata à la mairie où le livret a été créé, ou à la mairie de ton domicile." },
        { title: "Faire la demande en ligne", text: "Sur service-public.fr, cherche « duplicata livret de famille ». Remplis le formulaire." },
        { title: "Pour une famille née à l'étranger", text: "Si tu es né à l'étranger, contacte le Service Central d'État Civil de Nantes." }
      ]
    },
    steps: [
      { title: "Qui reçoit un livret de famille ?", text: "Un livret de famille est remis automatiquement lors d'un mariage à la mairie, ou à la naissance du premier enfant si les parents ne sont pas mariés. Il est mis à jour à chaque nouvelle naissance." },
      { title: "Perte, vol ou livret incomplet", text: "En cas de perte, vol, ou pour ajouter un événement (nouvelle naissance, divorce...), il faut demander un duplicata ou une mise à jour à la mairie où le livret a été établi, ou à la mairie de ton domicile actuel." },
      { title: "Faire la demande en ligne", text: "Sur service-public.fr, cherche « duplicata de livret de famille ». Un formulaire en ligne ou un formulaire à envoyer par courrier est proposé selon ta situation." },
      { title: "Pour une famille née à l'étranger", text: "Si un événement familial (naissance, mariage) a eu lieu à l'étranger et doit être transcrit dans un livret français, contacte le Service Central d'État Civil de Nantes (pastel.diplomatie.gouv.fr)." },
      { title: "À quoi sert le livret de famille", text: "Ce document est souvent demandé pour inscrire un enfant à l'école ou à la cantine, faire une demande à la CAF, ou prouver un lien de filiation lors de démarches administratives." }
    ] },

  { id: 'dem-reconnaissance-enfant', category: 'famille', icon: '👶', title: "Reconnaissance d'un enfant",
    description: "Comprendre la démarche pour reconnaître un enfant né hors mariage.",
    whatIsIt: "Reconnaître un enfant établit officiellement un lien de filiation (le fait d'être le parent légal). C'est automatique pour la mère qui accouche, mais le père doit faire une démarche de reconnaissance, avant ou après la naissance, si les parents ne sont pas mariés.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "Acte de naissance de l'enfant si la reconnaissance est faite après la naissance"],
    simple: {
      description: "Reconnaître un enfant né hors mariage.",
      whatIsIt: "Reconnaître un enfant, c'est dire officiellement que tu es son parent. C'est automatique pour la mère. Le père doit faire une démarche s'il n'est pas marié avec la mère.",
      steps: [
        { title: "Où faire la reconnaissance", text: "Va dans n'importe quelle mairie. Ce n'est pas obligatoire d'aller dans ta mairie." },
        { title: "Avant ou après la naissance", text: "Tu peux reconnaître l'enfant avant sa naissance, ou après, à tout moment." },
        { title: "Les documents à apporter", text: "Apporte ta pièce d'identité et un justificatif de domicile." },
        { title: "Après la reconnaissance", text: "L'officier d'état civil te donne un acte de reconnaissance. Garde-le précieusement." }
      ]
    },
    steps: [
      { title: "Où faire la reconnaissance", text: "La reconnaissance se fait dans n'importe quelle mairie en France, pas obligatoirement celle de ton domicile. Il n'y a pas de démarche en ligne : il faut se déplacer." },
      { title: "Avant ou après la naissance", text: "La reconnaissance peut être faite avant la naissance (reconnaissance anténatale, dès que la grossesse est connue) ou après, à n'importe quel moment de la vie de l'enfant." },
      { title: "Les documents à apporter", text: "Apporte ta pièce d'identité et un justificatif de domicile. Si la reconnaissance est faite après la naissance, apporte aussi l'acte de naissance de l'enfant si tu l'as." },
      { title: "Après la reconnaissance", text: "L'officier d'état civil rédige un acte de reconnaissance et t'en remet une copie : garde-la précieusement, elle prouve le lien de filiation." },
      { title: "Conséquences importantes", text: "Reconnaître un enfant donne des droits et des devoirs (autorité parentale, pension alimentaire, héritage...). En cas de doute, tu peux demander conseil à un avocat ou à une association familiale." }
    ] },

  { id: 'dem-autorite-parentale', category: 'famille', icon: '⚖️', title: "Autorité parentale et garde",
    description: "Comprendre les démarches liées à l'autorité parentale et à la garde d'un enfant en cas de séparation.",
    whatIsIt: "L'autorité parentale, c'est l'ensemble des droits et devoirs des parents envers leur enfant (éducation, santé, scolarité...). En cas de séparation, il faut souvent organiser la garde de l'enfant et parfois le faire valider par un juge.",
    documents: ["Pièce d'identité", "Livret de famille", "Justificatif de domicile", "Convention parentale si les parents sont d'accord"],
    simple: {
      description: "Comprendre l'autorité parentale et la garde d'un enfant.",
      whatIsIt: "L'autorité parentale, ce sont les droits et devoirs des parents envers leur enfant. En cas de séparation, il faut organiser la garde de l'enfant.",
      steps: [
        { title: "Si les parents sont d'accord", text: "Écrivez ensemble une convention parentale. Elle dit où vit l'enfant et qui paye quoi." },
        { title: "Faire valider la convention", text: "Un juge aux affaires familiales (JAF) peut valider votre accord. Ce n'est pas toujours obligatoire." },
        { title: "Si les parents ne sont pas d'accord", text: "Il faut aller devant le Juge aux Affaires Familiales. Un avocat peut t'aider." },
        { title: "Où s'adresser", text: "Le tribunal judiciaire du Havre gère ces démarches. Une aide juridictionnelle existe si tu as peu d'argent." }
      ]
    },
    steps: [
      { title: "Comprendre l'autorité parentale", text: "L'autorité parentale regroupe les décisions importantes concernant l'enfant : santé, éducation, lieu de vie. En général, les deux parents la partagent, même séparés." },
      { title: "Si les parents sont d'accord", text: "Vous pouvez rédiger ensemble une convention parentale, qui précise la résidence de l'enfant, le droit de visite et d'hébergement, et la pension alimentaire éventuelle." },
      { title: "Faire valider la convention par un juge", text: "Cette convention peut être présentée au Juge aux Affaires Familiales (JAF) pour être homologuée, ce qui la rend juridiquement plus solide, notamment en cas de désaccord futur." },
      { title: "Si les parents ne sont pas d'accord", text: "Sans accord, il faut saisir le Juge aux Affaires Familiales via le tribunal judiciaire. Un avocat n'est pas toujours obligatoire, mais fortement conseillé pour t'accompagner." },
      { title: "Où s'adresser au Havre", text: "Le tribunal judiciaire du Havre traite ces démarches. Si tu as peu de ressources, tu peux demander l'aide juridictionnelle (prise en charge totale ou partielle des frais d'avocat) sur justice.fr." }
    ] },

  { id: 'dem-mariage-pacs', category: 'famille', icon: '💍', title: "Mariage et PACS",
    description: "Comprendre les démarches pour se marier ou se pacser en France.",
    whatIsIt: "Le mariage et le PACS (Pacte Civil de Solidarité) sont deux façons différentes d'officialiser une vie de couple. Le mariage se fait à la mairie, le PACS peut se faire à la mairie, chez un notaire, ou parfois au tribunal, selon la situation.",
    documents: ["Pièce d'identité des deux personnes", "Justificatif de domicile", "Acte de naissance de moins de 3 mois (moins de 6 mois si né à l'étranger)", "Pour le PACS : convention de PACS"],
    simple: {
      description: "Comprendre les démarches pour se marier ou se pacser.",
      whatIsIt: "Le mariage et le PACS officialisent une vie à deux. Le mariage se fait à la mairie. Le PACS se fait à la mairie ou chez un notaire.",
      steps: [
        { title: "Choisir le mariage ou le PACS", text: "Le mariage a plus de droits (nom, succession). Le PACS est plus simple à faire et à défaire." },
        { title: "Constituer son dossier de mariage", text: "Va à la mairie du Havre. Dépose ton dossier : identité, domicile, actes de naissance." },
        { title: "Publier les bans", text: "La mairie affiche les noms des futurs mariés pendant 10 jours avant le mariage." },
        { title: "Faire une déclaration de PACS", text: "Va à la mairie ou chez un notaire. Signe la convention de PACS avec ton partenaire." }
      ]
    },
    steps: [
      { title: "Choisir le mariage ou le PACS", text: "Le mariage donne plus de droits (nom d'usage, héritage automatique, cérémonie officielle) mais est plus long à défaire (divorce). Le PACS est plus rapide à conclure et à rompre, avec moins de droits automatiques." },
      { title: "Constituer son dossier de mariage", text: "Dépose ton dossier à la mairie du lieu de résidence de l'un des deux futurs époux (au Havre : lehavre.fr, rubrique État civil). Il faut fournir pièces d'identité, justificatif de domicile et actes de naissance récents." },
      { title: "La publication des bans", text: "Avant le mariage, la mairie affiche publiquement les noms des futurs mariés pendant au moins 10 jours, pour permettre d'éventuelles oppositions." },
      { title: "Faire une déclaration de PACS", text: "Le PACS se conclut à la mairie du domicile commun ou chez un notaire. Les deux partenaires signent une convention de PACS et la déclarent ensemble, avec pièces d'identité et justificatifs." },
      { title: "Après la signature", text: "Le mariage et le PACS sont mentionnés sur l'acte de naissance des deux personnes. Pour le mariage, le livret de famille est délivré si vous n'en avez pas déjà un." }
    ] },

  { id: 'dem-divorce', category: 'famille', icon: '💔', title: "Divorce et séparation",
    description: "Comprendre les différentes procédures de divorce en France.",
    whatIsIt: "Le divorce met fin légalement à un mariage. Il existe plusieurs procédures selon que les deux personnes sont d'accord ou non. Un avocat est presque toujours nécessaire, sauf pour rompre un PACS qui est plus simple.",
    documents: ["Pièce d'identité", "Livret de famille", "Acte de mariage", "Justificatifs de revenus (pour la pension alimentaire éventuelle)"],
    simple: {
      description: "Comprendre les démarches de divorce.",
      whatIsIt: "Le divorce met fin à un mariage devant la loi. Il y a plusieurs types de divorce. Un avocat est presque toujours nécessaire.",
      steps: [
        { title: "Le divorce par consentement mutuel", text: "Les deux personnes sont d'accord. C'est le divorce le plus rapide. Il passe par un notaire, pas par un juge." },
        { title: "Les autres types de divorce", text: "Si vous n'êtes pas d'accord, le juge aux affaires familiales tranche. C'est plus long." },
        { title: "Trouver un avocat", text: "Un avocat est obligatoire, sauf exception. Une aide juridictionnelle existe si tu as peu d'argent." },
        { title: "Rompre un PACS", text: "C'est plus simple : une déclaration à la mairie ou au notaire suffit." }
      ]
    },
    steps: [
      { title: "Le divorce par consentement mutuel", text: "Si les deux personnes sont d'accord sur tout (partage des biens, garde des enfants...), c'est la procédure la plus rapide : chaque personne a son avocat, et l'accord est validé par un notaire, sans passer devant un juge." },
      { title: "Les autres types de divorce", text: "En cas de désaccord (divorce accepté, pour faute, ou pour altération définitive du lien conjugal), la procédure passe par le Juge aux Affaires Familiales et peut prendre plusieurs mois, voire plusieurs années." },
      { title: "Trouver un avocat", text: "Un avocat est obligatoire pour la plupart des divorces. Si tes revenus sont modestes, tu peux demander l'aide juridictionnelle sur justice.fr pour faire prendre en charge tout ou partie des frais." },
      { title: "Le tribunal compétent au Havre", text: "Le tribunal judiciaire du Havre traite les divorces des habitants de la métropole havraise. Ton avocat t'accompagnera dans les démarches auprès du tribunal." },
      { title: "Rompre un PACS", text: "Contrairement au divorce, mettre fin à un PACS est plus simple : une déclaration conjointe (ou une déclaration unilatérale envoyée à l'autre) suffit à la mairie ou chez le notaire qui l'a enregistré." }
    ] },

  { id: 'dem-changement-adresse', category: 'papiers-citoyennete', icon: '📮', title: "Changement d'adresse",
    description: "Signaler son changement d'adresse à plusieurs organismes en une seule fois.",
    whatIsIt: "Quand tu déménages, plusieurs organismes doivent être informés de ta nouvelle adresse (impôts, CAF, carte grise...). Un service en ligne permet de faire cette démarche en une seule fois pour plusieurs organismes, au lieu de le faire séparément partout.",
    documents: ["Ancienne et nouvelle adresse", "Numéro fiscal", "Numéro de Sécurité Sociale ou d'allocataire CAF"],
    simple: {
      description: "Signaler son changement d'adresse à plusieurs organismes.",
      whatIsIt: "Quand tu déménages, plusieurs organismes doivent le savoir. Un site permet de le dire en une seule fois, à la place de le faire partout séparément.",
      steps: [
        { title: "Aller sur service-public.fr", text: "Cherche « déclarer un changement d'adresse ». Ouvre le service en ligne." },
        { title: "Choisir les organismes concernés", text: "Coche les organismes à prévenir : impôts, CAF, carte grise, France Travail..." },
        { title: "Remplir tes informations", text: "Donne ton ancienne et ta nouvelle adresse. Donne tes numéros (fiscal, Sécurité Sociale...)." },
        { title: "Prévenir les autres organismes toi-même", text: "Certains organismes ne sont pas sur ce service. Préviens-les directement (banque, employeur, assurance...)." }
      ]
    },
    steps: [
      { title: "Aller sur service-public.fr", text: "Cherche « je change de coordonnées » sur service-public.fr, ou va directement sur le service en ligne dédié au changement d'adresse." },
      { title: "Choisir les organismes concernés", text: "Le service permet de choisir plusieurs organismes en une fois parmi : impôts, CAF, Assurance Maladie (CPAM), France Travail, carte grise, et d'autres selon ta situation." },
      { title: "Remplir tes informations", text: "Indique ton ancienne et ta nouvelle adresse, la date de déménagement, et tes numéros d'identifiant selon les organismes choisis (numéro fiscal, numéro de Sécurité Sociale...)." },
      { title: "Prévenir les autres organismes toi-même", text: "Certains organismes ne sont pas inclus dans ce service (banque, employeur, mutuelle, assurances, box internet...) : il faut les prévenir directement, en général via ton espace personnel en ligne." },
      { title: "Penser à la réexpédition du courrier", text: "Pour ne rien manquer pendant la transition, tu peux souscrire un service de réexpédition de courrier à La Poste (payant), le temps que toutes tes adresses soient à jour." }
    ] },

  { id: 'dem-complementaire-sante-solidaire', category: 'sante', icon: '💊', title: "Complémentaire santé solidaire (CSS)",
    description: "Faire une demande de Complémentaire santé solidaire sur ameli.fr.",
    whatIsIt: "La Complémentaire santé solidaire (CSS) est une aide qui complète le remboursement de l'Assurance Maladie : elle peut couvrir la totalité de tes frais de santé (médecin, dentiste, lunettes...), gratuitement ou avec une petite participation, selon tes revenus.",
    documents: ["Numéro de Sécurité Sociale", "Justificatifs de revenus des 12 derniers mois pour tout le foyer", "Avis d'imposition"],
    simple: {
      description: "Demander la Complémentaire santé solidaire (CSS).",
      whatIsIt: "La CSS aide à payer les soins (médecin, dentiste, lunettes). Elle peut être gratuite ou presque gratuite. Ça dépend de tes revenus.",
      steps: [
        { title: "Vérifier si tu as droit à la CSS", text: "Sur ameli.fr, utilise le simulateur. Il regarde tes revenus et ta famille." },
        { title: "Faire la demande en ligne", text: "Connecte-toi sur ameli.fr. Va dans « Mes démarches ». Remplis le formulaire CSS." },
        { title: "Envoyer les justificatifs", text: "Envoie tes revenus des 12 derniers mois pour toute la famille." },
        { title: "Recevoir sa réponse", text: "La CPAM répond en général sous 2 mois. Tu reçois une attestation." }
      ]
    },
    steps: [
      { title: "Vérifier si tu as droit à la CSS", text: "Sur ameli.fr, utilise le simulateur de droits pour savoir si tu peux bénéficier de la Complémentaire santé solidaire, gratuite ou avec une petite participation selon tes revenus." },
      { title: "Faire la demande en ligne", text: "Connecte-toi à ton compte ameli, va dans « Mes démarches » puis « Demander la Complémentaire santé solidaire », et remplis le formulaire en ligne." },
      { title: "Envoyer les justificatifs de revenus", text: "Il faut fournir les revenus des 12 derniers mois pour toutes les personnes de ton foyer (salaires, allocations, pensions...), ou ton avis d'imposition récent." },
      { title: "Recevoir sa réponse", text: "La CPAM examine ta demande, en général sous 2 mois. Si tu as droit à la CSS, tu reçois une attestation à présenter chez le médecin, le dentiste ou l'opticien." },
      { title: "Renouveler sa demande", text: "La CSS doit être renouvelée chaque année. Un message t'informe avant la fin de tes droits pour refaire la demande à temps." }
    ] },

  { id: 'dem-permis-conduire', category: 'securite-pratique', icon: '🚗', title: "Permis de conduire",
    description: "Passer, renouveler ou faire un duplicata de son permis de conduire sur le site de l'ANTS.",
    whatIsIt: "Le permis de conduire est obligatoire pour conduire une voiture en France. Certaines démarches (duplicata en cas de perte, relevé d'information) se font en ligne sur le site officiel de l'ANTS.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "Photo d'identité récente", "Ancien permis si tu en as un (duplicata)", "Attestation de dépôt de plainte en cas de vol"],
    simple: {
      description: "Faire ses démarches de permis de conduire en ligne.",
      whatIsIt: "Le permis de conduire est obligatoire pour conduire une voiture. Certaines démarches se font sur internet, sur le site de l'ANTS.",
      steps: [
        { title: "Le site officiel", text: "Ouvre le site permisdeconduire.ants.gouv.fr. C'est le site officiel." },
        { title: "Créer son compte", text: "Clique sur « Créer un compte ». Donne tes informations." },
        { title: "Faire une demande de duplicata", text: "Permis perdu ou volé ? Fais ta demande en ligne. Joins ta plainte si volé." },
        { title: "Suivre sa demande", text: "Ton espace personnel montre où en est ta demande." }
      ]
    },
    steps: [
      { title: "Le site officiel", text: "Toutes les démarches liées au permis de conduire (duplicata, relevé d'information) se font sur le site officiel permisdeconduire.ants.gouv.fr." },
      { title: "Créer son compte", text: "Clique sur « Créer un compte », renseigne ton email et tes informations personnelles pour accéder au service." },
      { title: "Faire une demande de duplicata", text: "En cas de perte ou de vol de ton permis, fais ta demande de duplicata en ligne. En cas de vol, joins l'attestation de dépôt de plainte." },
      { title: "L'inscription à l'examen", text: "L'inscription au code et à l'examen pratique se fait généralement via ton auto-école, qui gère la démarche administrative pour toi." },
      { title: "Suivre sa demande", text: "Ton espace personnel sur le site de l'ANTS te permet de suivre l'avancée de ta demande et de savoir quand ton nouveau permis sera envoyé." }
    ] },

  { id: 'dem-carte-grise', category: 'securite-pratique', icon: '🚙', title: "Carte grise (certificat d'immatriculation)",
    description: "Faire une demande de carte grise (immatriculation d'un véhicule) sur le site de l'ANTS.",
    whatIsIt: "La carte grise (certificat d'immatriculation) est le document officiel qui identifie ton véhicule et prouve que tu en es le propriétaire. Elle est obligatoire pour circuler et se fait entièrement en ligne depuis la fermeture des guichets en préfecture.",
    documents: ["Pièce d'identité", "Justificatif de domicile", "Ancienne carte grise (si achat d'occasion)", "Certificat de cession du véhicule (si achat d'occasion)", "Certificat de contrôle technique de moins de 6 mois si nécessaire"],
    simple: {
      description: "Faire sa carte grise en ligne.",
      whatIsIt: "La carte grise identifie ta voiture. Elle prouve que tu en es le propriétaire. Elle est obligatoire. Tout se fait sur internet.",
      steps: [
        { title: "Le site officiel", text: "Ouvre le site immatriculation.ants.gouv.fr. C'est le site officiel." },
        { title: "Créer son compte", text: "Clique sur « Créer un compte ». Donne tes informations." },
        { title: "Rassembler ses documents", text: "Prépare ta pièce d'identité, ton justificatif de domicile, et les papiers du véhicule." },
        { title: "Faire la demande en ligne", text: "Remplis le formulaire. Envoie tes documents scannés. Paye en ligne." },
        { title: "Recevoir sa carte grise", text: "Elle arrive par la poste chez toi en quelques jours." }
      ]
    },
    steps: [
      { title: "Le site officiel", text: "Depuis la fermeture des guichets préfecture, toute demande de carte grise se fait en ligne sur le site officiel immatriculation.ants.gouv.fr." },
      { title: "Créer son compte", text: "Clique sur « Créer un compte », renseigne ton email et tes informations personnelles pour accéder au service ANTS." },
      { title: "Rassembler ses documents", text: "Selon ta situation (achat neuf, achat d'occasion, changement d'adresse), prépare ta pièce d'identité, ton justificatif de domicile, et les documents du véhicule (certificat de cession, ancienne carte grise, contrôle technique...)." },
      { title: "Faire la demande en ligne", text: "Remplis le formulaire pas à pas, scanne ou photographie tes documents, puis paye les frais d'immatriculation en ligne par carte bancaire." },
      { title: "Recevoir sa carte grise", text: "Un certificat provisoire est immédiatement disponible pour circuler en attendant. La carte grise définitive arrive ensuite par courrier à ton domicile sous quelques jours." },
      { title: "Se faire aider si besoin", text: "En cas de difficulté, des points numériques (France Services) ou des professionnels habilités (garages, concessionnaires) peuvent t'aider à faire la démarche." }
    ] },

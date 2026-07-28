// Simplifie automatiquement le texte français d'un module pour les
// stagiaires qui en ont besoin — indépendant du choix de langue de
// l'interface (lang). Deux critères déclenchent la version simplifiée :
//   - le niveau linguistique déclaré est A1 ou A2 (français encore limité)
//   - OU le niveau informatique déclaré est "débutant" (une personne très
//     débutante en informatique profite aussi d'un texte plus direct, avec
//     des phrases courtes, même si son français est bon par ailleurs)
// Ces deux niveaux peuvent venir soit du test de positionnement (automatique
// à l'inscription), soit d'un choix manuel modifié ensuite dans "Mon compte".
//
// Ne s'applique que si le module a un champ `simple` rempli (voir modules.js) ;
// sinon le contenu standard reste affiché tel quel.

const NIVEAUX_LINGUISTIQUES_SIMPLIFIES = ['A1', 'A2']
const NIVEAUX_INFO_SIMPLIFIES = ['debutant']

export function applySimplification(module, lang, niveauLinguistique, niveauInformatique) {
  const doitSimplifier =
    NIVEAUX_LINGUISTIQUES_SIMPLIFIES.includes(niveauLinguistique) ||
    NIVEAUX_INFO_SIMPLIFIES.includes(niveauInformatique)

  if (!module || lang !== 'fr' || !doitSimplifier || !module.simple) {
    return module
  }
  const s = module.simple
  return {
    ...module,
    description: s.description ?? module.description,
    whatIsIt: s.whatIsIt ?? module.whatIsIt,
    steps: s.steps ?? module.steps,
    simplified: true
  }
}

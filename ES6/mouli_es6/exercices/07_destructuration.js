/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 *
 * exemple: [1, 2, 3] => [1, 2]
 *
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 *
 * contrainte:
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

<<<<<<< HEAD
const extractFirstTwo = (arr) => {
  const [first, second] = arr;
  return [first, second];
};
=======
const extractFirstTwo = ([a, b]) => [ a, b ]
>>>>>>> upstream/main
/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 *
 * exemple: [1, 2, 3] => [2, 3]
 */

<<<<<<< HEAD
const extractRest = (arr) => {
  const [first, ...rest] = arr;
  return rest;
};
=======
const extractRest = ([, ...rest]) => rest
>>>>>>> upstream/main
/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 *
 * exemple: {name: "toto", age: 42} => "toto"
 *
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 *
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

<<<<<<< HEAD
const extractName = (obj) => {
  const { name } = obj;
  return name;
};
=======
const extractName = ({name}) => name
>>>>>>> upstream/main
/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 *
 * exemple: {name: "toto", password: "1234"} => {name: "toto"}
 *
 * contrainte:
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 *
 */

<<<<<<< HEAD
const removePassword = (arr) => {
  const { password, ...rest } = arr;
  return rest;
};
=======
const removePassword = ({ password, ...rest }) => rest
>>>>>>> upstream/main

module.exports = { extractFirstTwo, extractRest, extractName, removePassword };

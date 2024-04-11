/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 *
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 *
 * contrainte:
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */

<<<<<<< HEAD
const concat = (arr1, arr2) => [...arr1, ...arr2];
=======
const concat = (arr1, arr2 ) => [...arr1, ... arr2  ]
>>>>>>> upstream/main

/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 *
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 *
 * contrainte:
 * - ne pas utiliser la méthode push
 */

<<<<<<< HEAD
const push = (arr, el) => [...arr, el];
=======
const push = (arr, item) => [...arr, item ]
>>>>>>> upstream/main
/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 *
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */

<<<<<<< HEAD
const merge = (obj1, obj2) => ({ ...obj1, ...obj2 });
=======
const merge = (obj1, obj2) => ( { ...obj1, ...obj2 } )

>>>>>>> upstream/main
/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 *
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 *
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

<<<<<<< HEAD
const setName = (obj, name) => ({ ...obj, name });
=======
const setName = (obj, name) => (  {...obj, name} )

// console.log( setName( {name: 'toto'}, 'titi'  ) ) // {name : 'titi'}
>>>>>>> upstream/main

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = { concat, push, merge, setName };

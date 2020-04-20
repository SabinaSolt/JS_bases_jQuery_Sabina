console.log('----------');
console.log('Exercice 1');
console.log('----------');


console.log('exercice 1');
//jQuery est une librairie qui permet d'écrire le code plus concis comparé au JavaScript.
// La différence consiste aussi dans le fait que JavaScript manipule les noeuds du DOM,
// alors que jQuery manipule les collections d'objets construites autour de ces noeuds.

//pour utiliser jQuery on mettre la balise pour l'inclure au-dessus de la balise <script src="script.js"></script>
//Comme le navigateur lit la page de haut en bas, si on mets la balise jQuery après la balise qui refere notre code,
//qui à son tour utilise jQuery, le navigateur ne saura tout simplement pas comment interpreter notre code.

//ces lignes permettent de lancer le script jQuery une fois que la page est chargée.
//Du coup, l'emplacement de la balise <script> à l'intérieur du document HTML n'a plus d'incidence
// sur l'éxecution du script

//$ est le symbole qui permet de repérer l'utilisation de jQuery
$(document).ready(function(){
    console.log('Je peux maintenant écrire du code jQuery');
});
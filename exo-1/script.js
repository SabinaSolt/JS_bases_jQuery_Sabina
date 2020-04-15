console.log('exercice 1');
//jQuery est un framework qui permet d'écrire le code plus concis comparé au JavaScript.
// La différence consiste aussi dans le fait que JavaScript manipule les noeuds du DOM,
// alors que jQuery manipule les collections d'objets construites autour de ces noeuds.

//ces lignes permettent de lancer le script jQuery une fois que la page est chargée.
//Du coup, l'emplacement de la balise <script> à l'intérieur du document HTML n'a plus d'incidence
// sur l'éxecution du script

//$ est le symbole qui permet de repérer l'utilisation de jQuery
$(document).ready(function(){
    console.log('Je peux maintenant écrire du code jQuery');
});
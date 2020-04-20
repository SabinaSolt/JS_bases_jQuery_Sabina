console.log("exercice 7");
$(document).ready(function () {
    // function getData() {
    //     return data; // data is defined in DATA.js file
    // }

    data.forEach(addLineToTable);

    function addLineToTable(userObj) {
          //ajoute le row dans le tableau
          let $row = $("<tr>")
              .addClass("row")
              .appendTo("#bodyTableau1");

          //ajoute les cellules
          let $cellule1 = $("<td>")
              .addClass("col-lg-4 ")
              .text(userObj["email"])
              .appendTo($row);

          let $cellule2 = $("<td>")
              .addClass("col-lg-4 ")
              .text(userObj["name"]["last"])
              .appendTo($row);
          let $cellule3 = $("<td>")
              .addClass("col-lg-4 ")
              .text(userObj["name"]["first"])
              .appendTo($row);

          let $cellule4 = $("<td>")
              .addClass("col-lg-4 ")
              .text(userObj["phone"])
              .appendTo($row);
    };

    //bonus 3

    // affiche le tableau trié
    function addSortedLine(index,pRow) {
        //ajoute le row dans le tableau
        let $row = $("<tr>")
            .addClass("row")
            .appendTo("#bodyTableau1");
        //ajoute les cellules
        for (let i=0;i<4;i++){
            let cell=   $("<td>")
                .addClass("col-lg-4 ")
                .text($(pRow).children().eq(i).text())
                .appendTo($row);
        }
    }

//Ajoute le trie au clique sur l'entete
    var asc=true;
    $('th')
        .wrapInner('<span title="sort this column"/>')
        .click(function(){
            columnIndex=$(this).index();
            let rowArray=$('#tableau1').find('tr:gt(0)')
                .sort(compareElements(columnIndex));

            asc=!asc;

            $('#tableau1').find('tr:gt(0)').remove();
            rowArray.each(addSortedLine);
        });

    // fonction pour comparer les éléments
    function compareElements(index) {
        return function (a,b) {
            let aVal=$(a).children('td').eq(index).text();
            let bVal=$(b).children('td').eq(index).text();
            if(asc)
            {
                if(aVal>bVal) return 1;
                if(aVal<bVal) return -1;
            }
            else
            {
                if(aVal>bVal) return -1;
                if(aVal<bVal) return 1;
            }
            return 0;
        }
    }

    //Bonus 4

    $(":button").click(function() {

        //ajoute le row dans le tableau
        let $row = $("<tr>")
            .addClass("row")
            .prependTo("#bodyTableau1");

        //ajoute les cellules
        let $cellule1 = $("<td>")
            .addClass("col-lg-4 ")
            .text($('#email').val())
            .appendTo($row);

        let $cellule2 = $("<td>")
            .addClass("col-lg-4 ")
            .text($('#nom').val())
            .appendTo($row);

        let $cellule3 = $("<td>")
            .addClass("col-lg-4 ")
            .text($('#prenom').val())
            .appendTo($row);

        let $cellule4 = $("<td>")
            .addClass("col-lg-4 ")
            .text($('#tel').val())
            .appendTo($row);
    });

});



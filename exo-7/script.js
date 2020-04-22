console.log("exercice 7");
$(document).ready(function () {

    data.forEach(addLineToTable);

    // $("#tableau1").pagination({
    //     items:1000,
    //     itemsOnPage:50,
    //
    // });

    var item_per_page=50;
    var $block=jQuery('.row');
    var block_count=$block.length;
    var number_of_pages=Math.ceil(block_count/item_per_page);

    //append pagination in body
    jQuery('body').append("<div class='pagination'></div>");
    for(var i=1; i<=number_of_pages; i++){
        jQuery('.pagination').append("<div class='page'>"+i+"</div>");
    }

    //activate first page
    jQuery(".page:first-child").addClass('active');
    jQuery('.row').filter(function( index ) { return index < item_per_page;}).addClass('active');

    //activate pagination on click
    jQuery('body').delegate('.page','click',function(){
        var page_index=jQuery(this).index();
        var start=page_index*item_per_page;
        $block.removeClass('active');
        jQuery(".page").removeClass('active');
        jQuery(".page").eq(page_index).addClass('active');
        for(var j=0;j<item_per_page;j++){
            $block.eq(start+j).addClass('active');
        }

    });

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
            .text($('#emailform').val())
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



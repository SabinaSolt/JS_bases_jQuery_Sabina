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
});

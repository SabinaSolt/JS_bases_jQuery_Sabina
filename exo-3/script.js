console.log("exercice 3");
$(document).ready(function(){

    $(".jumbotron h1").text("Sabina");
    $("#tagline").html("Une perle rare, j'aime rester dans ma coquille...<br>#ResterChezVous");
    $("ul:first-child").remove();
    $(".navbar-right span").removeClass("glyphicon-log-in");
    $(".navbar-right span").addClass("glyphicon-user");
    $("footer p").text("Copyright 2017");
    $("footer p").css("font-weight","bold");
    //etape 6
    let $paragraphs=$("#work1 p");
    $paragraphs.each(function(index, element) {
        let $paragraph=$(element);
        let numProjet=index+1;
        $paragraph.text("Mon projet "+numProjet);
    });
    //etape 7

    $("img").attr("src","https://cuttingsjewellers.co.uk/files/cache/a4d9c40583c50b9a5d3616be2efc5164_f1097.jpg");

    //etape 8

    let newDiv=$("<div>");
    newDiv.addClass("col-sm-12");
    $("#work1").prepend(newDiv);

    let newP=$("<p>");
    $(newP).text("Mon nouveau projet");
    $(newDiv).append(newP);

    let newImg=$("<img>");
    $(newImg).attr("src","https://img.etimg.com/thumb/msid-71705293,width-643,imgsize-408826,resizemode-4/basra-pearls.jpg");
    $(newImg).height(250);
    $(newDiv).append(newImg);

    //etape 9
    $("footer").addClass("intro");
});

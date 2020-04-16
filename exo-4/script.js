console.log("exercice 4");
 $(document).ready(function(){
    $(':button[type="button"]').on("click", function(){
        alert("Merci "+$(':input[type="email"]').val()
            +" nous vous tiendrons informé des différentes offres");
    });

    $("#myNavbar ul").first().children("li").eq(1).dblclick(function(){
        $("#myNavbar ul").first().children("li").eq(1).hide();
    });

     // $("#myNavbar ul:first li:eq(1)").click(function(){
     //     $("#myNavbar ul:first li:eq(1) a").hide();
     // });

     // $("a:contains('Products')").on("dblclick", function() {
     //     $("a:contains('Products')").hide();
     // });


     $("img").click(function(){
         $('#myNavbar ul:eq(1) li:eq(1)').css("background-color","#245E89");
     });
     $("img").dblclick(function(){
         $('#myNavbar ul:eq(1) li:eq(1) a').html(" <span class=\"glyphicon glyphicon-shopping-cart\"></span>Cart(2)");
     });

    // etape 5

     $("img").each(function(index, element) {
            $(this).mousemove(function(event) {
            //console.log("L'utilisateur regarde " +$(this).attr('src'));
            });
     });

    //etape 6

     $(':input[type="email"]').click(function(event){
         console.log("L'utilisateur a cliqué dans le champ de l'adresse mail ");
     });

     $(':input[type="email"]').keypress(function(event){
         console.log("L'utilisateur tapote sur le clavier dans le champ de l'adresse mail ");
     });


 });
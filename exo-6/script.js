console.log("exercice 6");
$(document).ready(function(){
    $(":button").click(function() {
        //alert("vous avez cliqué sur le bouton");
        let mail=$(':input[type="email"]').val();
        let pwd=$(":password").val();
        //console.log(mail, pwd);
        if(!mail) {
            let $alert=$("<div>")
                .text("email field is required")
                .addClass("alert alert-warning")
                .appendTo("form");
        }
        else
        {
            let at=/@/;
            let testMail=at.test(mail);
            if(!testMail) {
                let $alert=$("<div>")
                    .text("email must contain @ character")
                    .addClass("alert alert-warning col-sm-12")
                    .appendTo("form");
            }
        }
        if(!pwd) {
            let $alert=$("<div>")
                .text("password field is required")
                .addClass("alert alert-warning col-sm-12")
                .appendTo("form");
        }
        else {
            if(pwd.length<6) {
                $("<div>")
                    .text("Password must contain at least 6 characters")
                    .addClass("alert alert-warning col-sm-12")
                    .appendTo("form");
            }
        }
        if(mail=="hello@me.com" && pwd=="secret8") {
            alert ("Vous etes connecté")
        }
    });

});
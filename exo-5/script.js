console.log("exercice 5");
$(document).ready(function(){

    $("img").each(function(index, element) {
        $(this).click(function(event) {
            console.log("L'utilisateur a cliqué sur " +$(this).attr('src'));

            var $newUserChoice=$("<p>")
                .text($(this).attr('alt'))
                .appendTo("#userChoice");

            var $newComputerChoice=$("<p>")
                .text(getComputerChoice())
                .appendTo("#computerChoice");

            var result=playGame($newUserChoice.text(),$newComputerChoice.text());
            var $newGameResult=$("<p>")
                .text(result)
                    .css("color", function(){
                        if(result=="Won") { return "green"};
                        if(result=="Lost") {return "red"};
                        if(result=="Tied") {return "grey"};
                    })
                .appendTo("#gameResult");
        });
    });


// logique du jeu

    function playGame(uChoice, computerChoice) {
        var uChoice=getPlayerChoice(uChoice);
        return findWinner(uChoice,computerChoice);
    }


function getPlayerChoice(playerInput) {
    lowInput= playerInput.toLowerCase();
    if(lowInput == 'rock' ||lowInput =='paper'||
        lowInput =='scissors'|| lowInput=='bomb')
    {

        return lowInput;
    }
    else {
        alert("message d\'erreur");
    }
}

function getComputerChoice() {
    var compInput=Math.floor(Math.random()*3);

    switch (compInput) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function findWinner(playerChoice, computerChoice) {
    if(playerChoice=='bomb') {
        return 'Won';
    }
    else if(playerChoice==computerChoice) {
        return 'Tied';
    }
    else if (playerChoice=='rock'){
        if(computerChoice=='scissors'){
            return 'Won';
        } else {
            return 'Lost';
        }
    }
    else if (playerChoice=='paper'){
        if(computerChoice=='rock'){
            return 'Won';
        } else {
            return 'Lost';
        }
    }
    else if (playerChoice=='scissors') {
        if(computerChoice=='paper') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }
}



});
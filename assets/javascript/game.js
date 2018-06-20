
$(document).ready(function(){
    // A random # will generate at the game start (range 19-120)
    var randomValue = Math.floor(Math.random()*101+19)

    // Random # to update on HTML index
    $("#randomNumber").text(randomValue);

    // Random #'s will be generated for each of the four variables (range 1-12)
    var num1PGem = Math.floor(Math.random()*11+1)
    var num2BGem = Math.floor(Math.random()*11+1)
    var num3RGem = Math.floor(Math.random()*11+1)
    var num4GGem = Math.floor(Math.random()*11+1)

    // Variables for Player Score, Wins & Losses
    var playerScore = 0;
    var wins = 0;
    var losses = 0;

    // Wins & losses to update on HTML index
    $("#winCount").text(wins);
    $("#lossCount").text(losses);

    // Requires a function to reset the main variables of the game
    function gameReset (){
        randomValue = Math.floor(Math.random()*101+19);
        console.log(randomValue)
        $("#randomNumber").text(randomValue);
        num1PGem = Math.floor(Math.random()*11+1)
        num2BGem = Math.floor(Math.random()*11+1)
        num3RGem = Math.floor(Math.random()*11+1)
        num4GGem = Math.floor(Math.random()*11+1)
        playerScore = 0;
        $("#userScore").text(playerScore);
    }

    // Keeping track of wins (adding to wins)
    function winRound () {
        //window.setTimeout(alert,1)
        alert("You have won this game round!");
        wins++;
        $("#winCount").text(wins);
        gameReset();
    }

    // Keeping track of losses (adding to losses)
    function loseRound () {
        alert ("You have lost this game round!");
        losses++;
        $("#lossCount").text(losses);
        gameReset();
    }
    
    // on click function for num1PGem Button
        $("#purpleButton").on("click", function(){
            playerScore = playerScore + num1PGem;
            console.log("Update playerScore=" + playerScore);
            $("#userScore").text(playerScore);
                if (playerScore == randomValue){
                    winRound();
                }
                else if (playerScore > randomValue){
                    loseRound();
                }
        })

    // on click function for num2BGem Button    
        $("#blueButton").on("click", function(){
            playerScore = playerScore + num2BGem;
            console.log("Update playerScore=" + playerScore);
            $("#userScore").text(playerScore);
                if (playerScore == randomValue){
                    winRound();
                }
                else if (playerScore > randomValue){
                    loseRound();
                }     
        })

    // on click function for num3RGem Button    
        $("#redButton").on("click", function(){
            playerScore = playerScore + num3RGem;
            console.log("Update playerScore=" + playerScore);
            $("#userScore").text(playerScore);
                if (playerScore == randomValue){
                    winRound();
                }
                else if (playerScore > randomValue){
                    loseRound();
                }
        })

   // on click function for the num4GGem Button
        $("#greenButton").on("click", function(){
            playerScore = playerScore + num4GGem;
            console.log("Update playerScore=" + playerScore);
            $("#userScore").text(playerScore);
                if (playerScore == randomValue){
                    winRound();
                }
                else if (playerScore == randomValue){
                    loseRound();
                } 
        });
    });




     


    

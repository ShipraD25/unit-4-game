$(document).ready(function() {

    // global variables.
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var targetScore = 0;
    var crystals = [];


    // declaring a function that will restart the game everytime it's called.
    function play() {
        userScore = 0;
        //creating random target number.
        $("#user-score").text(userScore);
        targetScore = Math.floor(Math.random() * 120) + 19;
        $("#target-num").text(targetScore);

        // calculate 4 randon values for the crystals.


        for (var i = 0; i < 4; i++) {
            crystals[i] = Math.floor(Math.random() * 12) + 1;
        }


    }


    // adding event listenser and also the steps to take after the click event.
    $(".crystal-button").on("click", function() {

        var index = $(this).attr("crystalnumber")

        userScore = userScore + crystals[index]

        $("#user-score").text(userScore);

        // verify
        if (userScore === targetScore) {
            wins++;
            $("#wintext").text(wins);
            play()
        } else if (userScore > targetScore) {
            losses++;
            $("#lossestext").text(losses);
            play()
        }

    })

    play()




})
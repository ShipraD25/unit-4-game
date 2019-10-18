$(document).ready(function() {

        // global variables
        var wins = 0;
        var losses = 0;
        var userScore = 0;
        var targetScore = 0
        var crystals = []

        // var num1 = 0;
        // var num2 = 0;
        // var num3 = 0;
        //var num4 = 0;

        function play() {
            userScore = 0
            $("#user-score").text(userScore);
            targetScore = Math.floor(Math.random() * 120) + 19;
            console.log(targetScore);
            $(".target-num").text(targetScore);
            //show in the browser the number
            // calculate 4 randon for the crystals
            crystals = []

            // while  ///  until the lenght is = 4
            // indexof  using to look for a value inside of an array if value is inside give you the postion if not return -1

            for (var i = 0; i < 4; i++) {
                crystals[i] = Math.floor(Math.random() * 12) + 1;
            }
            console.log(crystals);

            //while (crystals.length < 4){
            //   var random = 
            // verify with indexof if the value is existing 
            // if not push the value to the array
            // if yes keep going 
        }



        $(".crystal-button").on("click", function() {
            console.log(this)
            var index = $(this).attr("crystalnumber")
            console.log(index, crystals[index])
            userScore = userScore + crystals[index]
            $("#user-score").text(userScore);
            console.log("userscore: ", userScore)
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



        //display random number on screen 
        // on the right wins =0 losses = 0
        //four crystsl image button below the number
        //as the user presses any crystal button generate a random number and add it to the players score
        //as the user presses next crystal another no. is generated and added to the players score
        // if players score is === to the random no. user wins and another random no. is generated and displayed on the screen
        //wins = 1
    }) // if the players score is greater than random no. user losses and losses go up and new no. is generated and displayed.
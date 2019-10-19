# unit-4-game

## Summary
This is a simple game in which the user has to match his score with the random number presented on the screen.
User will be able to achieve this by clicking the available four crystals. These crystals have values that are hidden from user until he/she clicks it. 
For each round the user will receive a new random target score as well as crystal will be assigned a new value.
The user will win if his total score matches with the random target score or the user can loose his total score is greater than the target score.
Wins and losses will go up accordingly.

Pseudocode has been put to understand the functionality of code.

## Tech Used
* Html
* css
* javascript
* jquery

## javascript code snippet
```javascript
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
```
       
       
       ## Game Preview

        ![image](https://user-images.githubusercontent.com/54960706/67140050-77347780-f20b-11e9-8fb6-86566e4a13b8.png)



# Crystal Collector!

### Game link https://shiprad25.github.io/unit-4-game/
## Summary
This is a simple game in which the user has to match his score points with the random number presented on the screen.
User will be able to achieve this by clicking the available four crystals. These crystals have values that are hidden from user until he/she clicks it. 
For each round the user will receive a new random target score as well as crystal will be assigned a new value.
The user will win if his total score matches with the random target score or the user can lose if his total score is greater than the target score.
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

![image](https://user-images.githubusercontent.com/54960706/67140175-b1524900-f20c-11e9-88bb-ed6c04e6ee78.png)




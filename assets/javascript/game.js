// variables for all scores and genValue, console log to test logic
var wins = 0;
var losses = 0;
var inputValue = 0;
var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log("Target Score: " + targetScore);

//  pushing the values to html for user
$("#genValue").html("Target Score: " + targetScore);
$("#inputValue").html("User Score: " + inputValue);

// give crystals a value 
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

// crystal click functions
$("#crystal1").click(function(){
    inputValue = inputValue + crystal1;
    $("#inputValue").html("User Score: " + inputValue);
    scoreCheck();
});
$("#crystal2").click(function(){
    inputValue = inputValue + crystal2;
    $("#inputValue").html("User Score: " + inputValue);
    scoreCheck();
});
$("#crystal3").click(function(){
    inputValue = inputValue + crystal3;
    $("#inputValue").html("User Score: " + inputValue);
    scoreCheck();
});
$("#crystal4").click(function(){
    inputValue = inputValue + crystal4;
    $("#inputValue").html("User Score: " + inputValue);
    scoreCheck();
});

// scoreCheck conditionals 
function scoreCheck() {
    if (inputValue == targetScore){
        wins++;
        $("winsBoard").html("Wins: " + wins);
        console.log("Good job! Wins: " + wins);
        gameReset();
    }
    else if (inputValue > targetScore){
        losses++;
        $("lossesBoard").html("Losses: " + losses);
        console.log("Please try again! Losses: " + losses)
        gameReset();
    }
};

// creating the reset
function gameReset() {
    inputValue = 0;
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#inputValue").html("User Score: " + inputValue);
    $("#genValue").html("Target Score: " + targetScore);
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
};
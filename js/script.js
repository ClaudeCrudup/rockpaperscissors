// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/*global $*/ 
var user;

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    var cpuChoice=Math.random();
    var user= $("#input").val();
   $("#userChoice").html(user);
   if(cpuChoice > .66 && user === "rock")
   {
        $("#result").text("Play Again!");
        $("#computerChoice").text("ROCK");
    }
    else if (cpuChoice < .66 && cpuChoice> .33 && user === "paper")
    {
        $("#result").text("Play Again!");
        $("#computerChoice").text("PAPER");
    }
   else if (cpuChoice < .33 && cpuChoice> .00 && user === "scissors")
    {
        $("#result").text("Play Again!");
        $("#computerChoice").text("SCISSORS");
    }
    else if(cpuChoice > .66 && user === "scissors")
   {
        $("#result").text("CPU WINS!!!");
        $("#computerChoice").text("ROCK");
    }
    else if(cpuChoice > .66 && user === "paper")
   {
        $("#result").text("YOU WIN!!!");
        $("#computerChoice").text("ROCK");
    }
    else if (cpuChoice < .66 && cpuChoice> .33 && user === "rock")
    {
        $("#result").text("CPU WINS!!!");
        $("#computerChoice").text("PAPER");
    }
    else if (cpuChoice < .66 && cpuChoice> .33 && user === "scissors")
    {
        $("#result").text("YOU WIN!!!");
        $("#computerChoice").text("PAPER");
    }
    else if (cpuChoice < .33 && cpuChoice> .00 && user === "paper")
    {
        $("#result").text("CPU WINS!!!");
        $("#computerChoice").text("SCISSORS");
    }
    else if (cpuChoice < .33 && cpuChoice> .00 && user === "rock")
    {
        $("#result").text("YOU WIN!!!");
        $("#computerChoice").text("SCISSORS");
    }
});
$("#reset").click(function(){
    $("#input").val("");
    $("#result").html("");
    $("#userChoice").html("");
     $("#computerChoice").html("");
      
});
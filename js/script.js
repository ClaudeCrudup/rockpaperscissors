// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/*global $*/ 
var user;

// DOCUMENT READY FUNCTION BELOW
$("#reset").click(function(){
    $("#input").val("");
    $("#resultPic").html("");
    $("#result").html("");
    $("#userChoice").html("");
     $("#computerChoice").html("");
     $("#userPic").attr("src","");
     $("#cpuPic").attr("src","");
     
      
});
$("#shoot").click(function(){
    var cpuChoice=Math.random();
    var user= $("#input").val().toLowerCase();
   $("#userChoice").html(user);
   if(cpuChoice > .66 && user === "rock")
   {
        $("#result").text("Play Again!");
        $("#computerChoice").text("ROCK");
         $("#resultPic").html("<img src=//30.media.tumblr.com/tumblr_llksp6JsYP1qejlczo1_500.gif>");
         $("#userPic").attr("src", "https://cdn.forums.klei.com/monthly_2017_02/cavein_fall.gif.cd264d70f2bf74cce1037040dd5f5e9a.gif");
         $("#cpuPic").attr("src","https://cdn.forums.klei.com/monthly_2017_02/cavein_fall.gif.cd264d70f2bf74cce1037040dd5f5e9a.gif");
         
    }
    else if (cpuChoice < .66 && cpuChoice> .33 && user === "paper")
    {
        $("#result").text("Play Again!");
        $("#computerChoice").text("PAPER");
        $("#resultPic").html("<img src=//30.media.tumblr.com/tumblr_llksp6JsYP1qejlczo1_500.gif>");
        $("#userPic").attr("src", "https://i.pinimg.com/originals/1a/54/e5/1a54e518e8c89a0ef3b4e47f6070ec71.gif");
         $("#cpuPic").attr("src","https://i.pinimg.com/originals/1a/54/e5/1a54e518e8c89a0ef3b4e47f6070ec71.gif");
    }
   else if (cpuChoice < .33 && cpuChoice> .00 && user === "scissors")
    {
        $("#result").text("Play Again!");
        $("#computerChoice").text("SCISSORS");
        $("#resultPic").html("<img src=//30.media.tumblr.com/tumblr_llksp6JsYP1qejlczo1_500.gif>");
        $("#userPic").attr("src", "http://www.icone-gif.com/gif/outils/ciseaux/ciseaux010.gif");
         $("#cpuPic").attr("src","http://www.icone-gif.com/gif/outils/ciseaux/ciseaux010.gif");
    }
    else if(cpuChoice > .66 && user === "scissors")
   {
        $("#result").text("CPU WINS!!!");
        $("#computerChoice").text("ROCK");
        $("#resultPic").html("<img src=//media.giphy.com/media/TET1sDGAyBUI0/giphy.gif>");
        $("#cpuPic").attr("src","https://cdn.forums.klei.com/monthly_2017_02/cavein_fall.gif.cd264d70f2bf74cce1037040dd5f5e9a.gif");
         $("#userPic").attr("src", "http://www.icone-gif.com/gif/outils/ciseaux/ciseaux010.gif");
    }
    else if(cpuChoice > .66 && user === "paper")
   {
        $("#result").text("YOU WIN!!!");
        $("#computerChoice").text("ROCK");
        $("#resultPic").html("<img src=//i.kym-cdn.com/photos/images/original/000/551/601/dc2.gif>");
        $("#userPic").attr("src", "https://i.pinimg.com/originals/1a/54/e5/1a54e518e8c89a0ef3b4e47f6070ec71.gif");
        $("#cpuPic").attr("src","https://cdn.forums.klei.com/monthly_2017_02/cavein_fall.gif.cd264d70f2bf74cce1037040dd5f5e9a.gif");
    }
    else if (cpuChoice < .66 && cpuChoice> .33 && user === "rock")
    {
        $("#result").text("CPU WINS!!!");
        $("#computerChoice").text("PAPER");
        $("#resultPic").html("<img src=//media.giphy.com/media/TET1sDGAyBUI0/giphy.gif>");
        $("#userPic").attr("src", "https://cdn.forums.klei.com/monthly_2017_02/cavein_fall.gif.cd264d70f2bf74cce1037040dd5f5e9a.gif");
        $("#cpuPic").attr("src","https://i.pinimg.com/originals/1a/54/e5/1a54e518e8c89a0ef3b4e47f6070ec71.gif");
    }
    else if (cpuChoice < .66 && cpuChoice> .33 && user === "scissors")
    {
        $("#result").text("YOU WIN!!!");
        $("#computerChoice").text("PAPER");
        $("#resultPic").html("<img src=//i.kym-cdn.com/photos/images/original/000/551/601/dc2.gif>");
         $("#userPic").attr("src", "http://www.icone-gif.com/gif/outils/ciseaux/ciseaux010.gif");
         $("#cpuPic").attr("src","https://i.pinimg.com/originals/1a/54/e5/1a54e518e8c89a0ef3b4e47f6070ec71.gif");
    }
    else if (cpuChoice < .33 && cpuChoice> .00 && user === "paper")
    {
        $("#result").text("CPU WINS!!!");
        $("#computerChoice").text("SCISSORS");
        $("#resultPic").html("<img src=//media.giphy.com/media/TET1sDGAyBUI0/giphy.gif>");
        $("#userPic").attr("src", "https://i.pinimg.com/originals/1a/54/e5/1a54e518e8c89a0ef3b4e47f6070ec71.gif");
        $("#cpuPic").attr("src","http://www.icone-gif.com/gif/outils/ciseaux/ciseaux010.gif");
    }
    else if (cpuChoice < .33 && cpuChoice> .00 && user === "rock")
    {
        $("#result").text("YOU WIN!!!");
        $("#computerChoice").text("SCISSORS");
        $("#resultPic").html("<img src=//i.kym-cdn.com/photos/images/original/000/551/601/dc2.gif>");
        $("#userPic").attr("src", "https://cdn.forums.klei.com/monthly_2017_02/cavein_fall.gif.cd264d70f2bf74cce1037040dd5f5e9a.gif");
        $("#cpuPic").attr("src","http://www.icone-gif.com/gif/outils/ciseaux/ciseaux010.gif");
    }
});

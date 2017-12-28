// variables
var player;
var sideSlected = false;
var movesMade = 0;
var gameOver = false;
$(".side").click(function(e){
  sideSlected = true;
  $("#invalidClick").text("");
  $("#pickX, #pickO, #notice").hide();
  if (e.target.id == "pickX") {
    $("#pickSideText").html("You Picked X");
    player = "user";
    newGame();
  }
  else {
    $("#pickSideText").html("You Picked O");
    player = "computer";
    newGame();
    aiMove();
  }
})

$(".cell").click(function(e) {
  var Id = e.target.id;
  if ( sideSlected == false) {
    $("#invalidClick").text("Please select your side before playing!");
  }
  else{
    if (player == "user") {
      $("#"+Id+"").text("X");
    }
    else if (player == "computer"){
      $("#"+Id+"").text("O");
    }
    $("#"+Id+"").css("color", "white");
    movesMade++;
    gameOverTest1();
    if (gameOver == false) {
      aiMove();
      gameOverTest1();
    }
  }
});

function newGame() {
  movesMade = 0;
  $(".cell").css("color", "#333333");
  
  $(".cell").html("p");
  
  $(".cell").css("background-color", "#333333");
}

function gameOverTest1() {
  var g1 = document.getElementById("1").innerHTML;
  var g2 = document.getElementById("2").innerHTML;
  var g3 = document.getElementById("3").innerHTML;
  var g4 = document.getElementById("4").innerHTML;
  var g5 = document.getElementById("5").innerHTML;
  var g6 = document.getElementById("6").innerHTML;
  var g7 = document.getElementById("7").innerHTML;
  var g8 = document.getElementById("8").innerHTML;
  var g9 = document.getElementById("9").innerHTML;
  if (g1 == "X" && g2 == "X" && g3 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#1, #2, #3").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g4 == "X" && g5 == "X" && g6 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#4, #5, #6").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g7 == "X" && g8 == "X" && g9 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win!  </p> <p>Pick a side to start a new game!</p>");
    $("#7, #8, #9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g1 == "X" && g4 == "X" && g7 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win!  </p> <p>Pick a side to start a new game!</p>");
    $("#1, #4, #7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g2 == "X" && g5 == "X" && g8 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win!  </p> <p>Pick a side to start a new game!</p>");
    $("#2, #5, #8").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g3 == "X" && g6 == "X" && g9 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#3, #6, #9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g1 == "X" && g5 == "X" && g9 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#1, #5, #9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
  }
  
  else if (g3 == "X" && g5 == "X" && g7 == "X") {
    $("#pickSideText").append("<p>Game Over. X's win! </p> <p> Pick a side to start a new game!</p>");
    $("#3, #5, #7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  
  
  else if (g1 == "O" && g2 == "O" && g3 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#1, #2, #3").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g4 == "O" && g5 == "O" && g6 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#4, #5, #6").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g7 == "O" && g8 == "O" && g9 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#7, #8, #9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g1 == "O" && g4 == "O" && g7 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#1, #4, #7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g2 == "O" && g5 == "O" && g8 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#2, #5, #8").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g3 == "O" && g6 == "O" && g9 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#3, #6, #9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g1 == "O" && g5 == "O" && g9 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#1, #5, #9").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  else if (g3 == "O" && g5 == "O" && g7 == "O") {
    $("#pickSideText").append("<p>Game Over. O's win! </p> <p> Pick a side to start a new game!</p>");
    $("#3, #5, #7").css("background-color", "yellow");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  }
  
  
  else if (movesMade === 9) {
    $("#pickSideText").append("<p>Game Over. It's a draw! </p> <p> Pick a side to start a new game!</p>");
    $("#pickX, #pickO, #notice").show();
    gameOver = true;
  } 
}

function aiMove() { 
  var x1 = document.getElementById("1").innerHTML;
  var x2 = document.getElementById("2").innerHTML;
  var x3 = document.getElementById("3").innerHTML;
  var x4 = document.getElementById("4").innerHTML;
  var x5 = document.getElementById("5").innerHTML;
  var x6 = document.getElementById("6").innerHTML;
  var x7 = document.getElementById("7").innerHTML;
  var x8 = document.getElementById("8").innerHTML;
  var x9 = document.getElementById("9").innerHTML;
  movesMade++;
  if (player == "user") {
    if ( x5 === "p" ) {
      $("#5").html("O");
      $("#5").css("color", "white");
    }

    //offensive moves shall go below here and above the next note
    else if ( x1 === "O" && x5 === "O" && x9 === "p" ) {
      $("#9").html("O");
      $("#9").css("color", "white");
    }

    else if ( x3 === "O" && x5 === "O" && x7 === "p" ) {
      $("#7").html("O");
      $("#7").css("color", "white");
    }

    else if ( x5 === "O" && x7 === "O" && x3 === "p" ) {
      $("#3").html("O");
      $("#3").css("color", "white");
    }
    
    else if ( x5 === "O" && x9 === "O" && x1 === "p" ) {
      $("#1").html("O");
      $("#1").css("color", "white");
    }
    
    else if ( x5 === "O" && x2 === "O" && x8 === "p" ) {
      $("#8").html("O");
      $("#8").css("color", "white");
    }
    
    else if ( x5 === "O" && x4 === "O" && x6 === "p" ) {
      $("#6").html("O");
      $("#6").css("color", "white");
    }
    
    else if ( x5 === "O" && x6 === "O" && x4 === "p" ) {
      $("#4").html("O");
      $("#4").css("color", "white");
    }
    
    else if ( x5 === "O" && x8 === "O" && x2 === "p" ) {
      $("#2").html("O");
      $("#2").css("color", "white");
    }
    
    // horizontal
    else if ( x2 === "O" && x3 === "O" && x1 === "p" ) {
      $("#1").html("O");
      $("#1").css("color", "white");
    }

    else if ( x1 === "O" && x3 === "O" && x2 === "p" ) {
      $("#2").html("O");
      $("#2").css("color", "white");
    }
    
    else if ( x1 === "O" && x2 === "O" && x3 === "p" ) {
      $("#3").html("O");
      $("#3").css("color", "white");
    }
    //vertical
    else if ( x1 === "O" && x4 === "O" && x7 === "p" ) {
      $("#7").html("O");
      $("#7").css("color", "white");
    }
    
    else if ( x1 === "O" && x7 === "O" && x4 === "p" ) {
      $("#4").html("O");
      $("#4").css("color", "white");
    }
    
    else if ( x4 === "O" && x7 === "O" && x1 === "p" ) {
      $("#1").html("O");
      $("#1").css("color", "white");
    }
    
    else if ( x3 === "O" && x6 === "O" && x9 === "p" ) {
      $("#9").html("O");
      $("#9").css("color", "white");
    }
    
    else if ( x3 === "O" && x9 === "O" && x6 === "p" ) {
      $("#6").html("O");
      $("#6").css("color", "white");
    }
    
    else if ( x6 === "O" && x9 === "O" && x3 === "p" ) {
      $("#3").html("O");
      $("#3").css("color", "white");
    }
    
    else if ( x7 === "O" && x8 === "O" && x9 === "p" ) {
      $("#9").html("O");
      $("#9").css("color", "white");
    }
    
    else if ( x7 === "O" && x9 === "O" && x8 === "p" ) {
      $("#8").html("O");
      $("#8").css("color", "white");
    }
    
    else if ( x8 === "O" && x9 === "O" && x7 === "p" ) {
      $("#7").html("O");
      $("#7").css("color", "white");
    }
    
    
    
    
    else if ( x5 === "X" && x1 === "X" && x9 === "p" ) {
      $("#9").html("O");
      $("#9").css("color", "white");
    }
    
    else if ( x5 === "X" && x3 === "X" && x7 === "p" ) {
      $("#7").html("O");
      $("#7").css("color", "white");
    }
    
    else if ( x5 === "X" && x7 === "X" && x3 === "p" ) {
      $("#3").html("O");
      $("#3").css("color", "white");
    }
    
    else if ( x5 === "X" && x9 === "X" && x1 === "p" ) {
      $("#1").html("O");
      $("#1").css("color", "white");
    }
    
    else if ( x5 === "X" && x2 === "X" && x8 === "p" ) {
      $("#8").html("O");
      $("#8").css("color", "white");
    }
    
    else if ( x5 === "X" && x4 === "X" && x6 === "p" ) {
      $("#6").html("O");
      $("#6").css("color", "white");
    }
    
    else if ( x5 === "X" && x6 === "X" && x4 === "p" ) {
      $("#4").html("O");
      $("#4").css("color", "white");
    }
    
    else if ( x5 === "X" && x8 === "X" && x2 === "p" ) {
      $("#2").html("O");
      $("#2").css("color", "white");
    }
    
    // below are defensive moves NOT involving x5 
    
    else if ( x1 === "X" && x2 === "X" && x3 === "p" ) {
      $("#3").html("O");
      $("#3").css("color", "white");
    }
    
    else if ( x1 === "X" && x3 === "X" && x2 === "p" ) {
      $("#2").html("O");
      $("#2").css("color", "white");
    }
    
    else if ( x2 === "X" && x3 === "X" && x1 === "p" ) {
      $("#1").html("O");
      $("#1").css("color", "white");
    }
    
    else if ( x1 === "X" && x4 === "X" && x7 === "p" ) {
      $("#7").html("O");
      $("#7").css("color", "white");
    }
    
    else if ( x1 === "X" && x7 === "X" && x4 === "p" ) {
      $("#4").html("O");
      $("#4").css("color", "white");
    }
    
    else if ( x4 === "X" && x7 === "X" && x1 === "p" ) {
      $("#1").html("O");
      $("#1").css("color", "white");
    }
    
    else if ( x3 === "X" && x6 === "X" && x9 === "p" ) {
      $("#9").html("O");
      $("#9").css("color", "white");
    }
    
    else if ( x3 === "X" && x9 === "X" && x6 === "p" ) {
      $("#6").html("O");
      $("#6").css("color", "white");
    }
    
    else if ( x6 === "X" && x9 === "X" && x3 === "p" ) {
      $("#3").html("O");
      $("#3").css("color", "white");
    }
    
    else if ( x7 === "X" && x8 === "X" && x9 === "p" ) {
      $("#9").html("O");
      $("#9").css("color", "white");
    }
    
    else if ( x7 === "X" && x9 === "X" && x8 === "p" ) {
      $("#8").html("O");
      $("#8").css("color", "white");
    }
    
    else if ( x8 === "X" && x9 === "X" && x7 === "p" ) {
      $("#7").html("O");
      $("#7").css("color", "white");
    }
    
     // below are defenses to fancy moves
     
     else if ( x1 === "X" && x8 === "X" && x5 === "O" && x7 === "p" ) {
      $("#7").html("O");
      $("#7").css("color", "white");
    }

    else if ( x3 === "X" && x8 === "X" && x5 === "O" && x9 === "p" ) {
      $("#9").html("O");
      $("#9").css("color", "white");
    }
    
    else if ( x7 === "X" && x6 === "X" && x5 === "O" && x9 === "p" ) {
      $("#9").html("O");
      $("#9").css("color", "white");
    }

    else if ( x4 === "X" && x9 === "X" && x5 === "O" && x7 === "p" ) {
      $("#7").html("O");
      $("#7").css("color", "white");
    }
    
    else if ( x1 === "X" && x9 === "X" && x5 === "O" && x2 === "p" ) {
      $("#2").html("O");
      $("#2").css("color", "white");
    }

    else if ( x3 === "X" && x7 === "X" && x5 === "O" && x2 === "p" ) {
      $("#2").html("O");
      $("#2").css("color", "white");
    }
    
    else if ( x1 == "p" ) {
      $("#1").html("O");
      $("#1").css("color", "white");
    }

    else if ( x2 == "p" ) {
      $("#2").html("O");
      $("#2").css("color", "white");
    }
    
    else if ( x3 == "p" ) {
      $("#3").html("O");
      $("#3").css("color", "white");
    }

    else if ( x4 == "p" ) {
      $("#4").html("O");
      $("#4").css("color", "white");
    }
    
    else if ( x6 == "p" ) {
      $("#6").html("O");
      $("#6").css("color", "white");
    }
    
    else if ( x7 == "p" ) {
      $("#7").html("O");
      $("#7").css("color", "white");
    }
    
    else if ( x8 == "p" ) {
      $("#8").html("O");
      $("#8").css("color", "white");
    }

    else if ( x9 == "p" ) {
      $("#9").html("O");
      $("#9").css("color", "white");
    }


  } //end of if player == "user"


  if (player == "computer") {

   if ( x5 === "p" ) {
    $("#5").html("X");
    $("#5").css("color", "white");
  }     

  // below are the player computer offensive moves
  else if ( x5 === "X" && x1 === "X" && x9 === "p" ) {
    $("#9").html("X");
    $("#9").css("color", "white");
  }

  else if ( x5 === "X" && x3 === "X" && x7 === "p" ) {
    $("#7").html("X");
    $("#7").css("color", "white");
  }

  else if ( x5 === "X" && x7 === "X" && x3 === "p" ) {
    $("#3").html("X");
    $("#3").css("color", "white");
  }

  else if ( x5 === "X" && x9 === "X" && x1 === "p" ) {
    $("#1").html("X");
    $("#1").css("color", "white");
  }

  else if ( x5 === "X" && x2 === "X" && x8 === "p" ) {
    $("#8").html("X");
    $("#8").css("color", "white");
  }

  else if ( x5 === "X" && x4 === "X" && x6 === "p" ) {
    $("#6").html("X");
    $("#6").css("color", "white");
  }

  else if ( x5 === "X" && x6 === "X" && x4 === "p" ) {
    $("#4").html("X");
    $("#4").css("color", "white");
  }

  else if ( x5 === "X" && x8 === "X" && x2 === "p" ) {
    $("#2").html("X");
    $("#2").css("color", "white");
  }

    // below are offensive moves NOT involving x5 
    
    else if ( x1 === "X" && x2 === "X" && x3 === "p" ) {
      $("#3").html("X");
      $("#3").css("color", "white");
    }
    
    else if ( x1 === "X" && x3 === "X" && x2 === "p" ) {
      $("#2").html("X");
      $("#2").css("color", "white");
    }
    
    else if ( x2 === "X" && x3 === "X" && x1 === "p" ) {
      $("#1").html("X");
      $("#1").css("color", "white");
    }
    
    else if ( x1 === "X" && x4 === "X" && x7 === "p" ) {
      $("#7").html("X");
      $("#7").css("color", "white");
    }
    
    else if ( x1 === "X" && x7 === "X" && x4 === "p" ) {
      $("#4").html("X");
      $("#4").css("color", "white");
    }
    
    else if ( x4 === "X" && x7 === "X" && x1 === "p" ) {
      $("#1").html("X");
      $("#1").css("color", "white");
    }
    
    else if ( x3 === "X" && x6 === "X" && x9 === "p" ) {
      $("#9").html("X");
      $("#9").css("color", "white");
    }
    
    else if ( x3 === "X" && x9 === "X" && x6 === "p" ) {
      $("#6").html("X");
      $("#6").css("color", "white");
    }
    
    else if ( x6 === "X" && x9 === "X" && x3 === "p" ) {
      $("#3").html("X");
      $("#3").css("color", "white");
    }
    
    else if ( x7 === "X" && x8 === "X" && x9 === "p" ) {
      $("#9").html("X");
      $("#9").css("color", "white");
    }
    
    else if ( x7 === "X" && x9 === "X" && x8 === "p" ) {
      $("#8").html("X");
      $("#8").css("color", "white");
    }
    
    else if ( x8 === "X" && x9 === "X" && x7 === "p" ) {
      $("#7").html("X");
      $("#7").css("color", "white");
    }

     //below are the player computer defensive moves
     
     else if ( x5 === "O" && x1 === "O" && x9 === "p" ) {
      $("#9").html("X");
      $("#9").css("color", "white");
    }
    
    else if ( x5 === "O" && x3 === "O" && x7 === "p" ) {
      $("#7").html("X");
      $("#7").css("color", "white");
    }
    
    else if ( x5 === "O" && x7 === "O" && x3 === "p" ) {
      $("#3").html("X");
      $("#3").css("color", "white");
    }
    
    else if ( x5 === "O" && x9 === "O" && x1 === "p" ) {
      $("#1").html("X");
      $("#1").css("color", "white");
    }
    
    else if ( x5 === "O" && x2 === "O" && x8 === "p" ) {
      $("#8").html("X");
      $("#8").css("color", "white");
    }
    
    else if ( x5 === "O" && x4 === "O" && x6 === "p" ) {
      $("#6").html("X");
      $("#6").css("color", "white");
    }
    
    else if ( x5 === "O" && x6 === "O" && x4 === "p" ) {
      $("#4").html("X");
      $("#4").css("color", "white");
    }
    
    else if ( x5 === "O" && x8 === "O" && x2 === "p" ) {
      $("#2").html("X");
      $("#2").css("color", "white");
    }
    
    // below are offensive moves NOT involving x5 
    
    else if ( x1 === "O" && x2 === "O" && x3 === "p" ) {
      $("#3").html("X");
      $("#3").css("color", "white");
    }
    
    else if ( x1 === "O" && x3 === "O" && x2 === "p" ) {
      $("#2").html("X");
      $("#2").css("color", "white");
    }
    
    else if ( x2 === "O" && x3 === "O" && x1 === "p" ) {
      $("#1").html("X");
      $("#1").css("color", "white");
    }
    
    else if ( x1 === "O" && x4 === "O" && x7 === "p" ) {
      $("#7").html("X");
      $("#7").css("color", "white");
    }
    
    else if ( x1 === "O" && x7 === "O" && x4 === "p" ) {
      $("#4").html("X");
      $("#4").css("color", "white");
    }
    
    else if ( x4 === "O" && x7 === "O" && x1 === "p" ) {
      $("#1").html("X");
      $("#1").css("color", "white");
    }
    
    else if ( x3 === "O" && x6 === "O" && x9 === "p" ) {
      $("#9").html("X");
      $("#9").css("color", "white");
    }
    
    else if ( x3 === "O" && x9 === "O" && x6 === "p" ) {
      $("#6").html("X");
      $("#6").css("color", "white");
    }
    
    else if ( x6 === "O" && x9 === "O" && x3 === "p" ) {
      $("#3").html("X");
      $("#3").css("color", "white");
    }
    
    else if ( x7 === "O" && x8 === "O" && x9 === "p" ) {
      $("#9").html("X");
      $("#9").css("color", "white");
    }
    
    else if ( x7 === "O" && x9 === "O" && x8 === "p" ) {
      $("#8").html("X");
      $("#8").css("color", "white");
    }
    
    else if ( x8 === "O" && x9 === "O" && x7 === "p" ) {
      $("#7").html("X");
      $("#7").css("color", "white");
    }

     // below are defenses to fancy starting moves
     
     else if ( x1 === "O" && x8 === "O" && x5 === "X" && x7 === "p" ) {
      $("#7").html("X");
      $("#7").css("color", "white");
    }

    else if ( x3 === "O" && x8 === "O" && x5 === "X" && x9 === "p" ) {
      $("#9").html("X");
      $("#9").css("color", "white");
    }

    else if ( x7 === "O" && x6 === "O" && x5 === "X" && x9 === "p" ) {
      $("#9").html("X");
      $("#9").css("color", "white");
    }

    else if ( x4 === "O" && x9 === "O" && x5 === "X" && x7 === "p" ) {
      $("#7").html("X");
      $("#7").css("color", "white");
    }

    else if ( x1 === "O" && x9 === "O" && x5 === "X" && x2 === "p" ) {
      $("#2").html("X");
      $("#2").css("color", "white");
    }

    else if ( x3 === "O" && x7 === "O" && x5 === "X" && x2 === "p" ) {
      $("#2").html("X");
      $("#2").css("color", "white");
    }

    else if ( x1 == "p" ) {
      $("#1").html("X");
      $("#1").css("color", "white");
    }

    else if ( x3 == "p" ) {
      $("#3").html("X");
      $("#3").css("color", "white");
    }

    else if ( x7 == "p" ) {
      $("#7").html("X");
      $("#7").css("color", "white");
    }

    else if ( x9 == "p" ) {
      $("#9").html("X");
      $("#9").css("color", "white");
    }

    else if ( x2 == "p" ) {
      $("#2").html("X");
      $("#2").css("color", "white");
    }

    else if ( x4 == "p" ) {
      $("#4").html("X");
      $("#4").css("color", "white");
    }

    else if ( x6 == "p" ) {
      $("#6").html("X");
      $("#6").css("color", "white");
    }

    else if ( x8 == "p" ) {
      $("#8").html("X");
      $("#8").css("color", "white");
    }

   } // end of if player == computer
} //end of AI move 

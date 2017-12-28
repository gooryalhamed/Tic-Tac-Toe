// variables
var playerMove;
var compMove;
var sideSlected = false;
var gameOver = false;
var board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
// all winning combinations
var win = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
var firstArr = [0,2,4,6,8]; //where computer makes its first move
var firstCompMove = true;
var i, j;
// select a turn
$(".side").click(function(e){
  sideSlected = true;
  gameOver = false;
  board.fill(" ");
  $("#invalidClick").text("");
  $("#pickX, #pickO, #notice").hide();
  if (e.target.id == "pickX") {
    $("#pickSideText").html("You Picked X");
    playerMove = "X";
    compMove = "O";
    newGame();
  }
  else {
    $("#pickSideText").html("You Picked O");
    playerMove = "O";
    compMove = "X";
    newGame();
    compsTurn();
  }
})
// click on a cell button
$(".cell").click(function(e) {
  var Id = e.target.id;
  // do only if the game is not over
  if (gameOver == false) {
    // check if the user has selected their side
    if (sideSlected == false) {
      $("#invalidClick").text("Please select your side before playing!");
    }
    else{
      if (board[Id] == " ") {
       move(Id, playerMove);
     }
     else{
      $("#invalidClick").text("Invalid Move! Please select an empty cell.");
    }
  }
}
});

function newGame() {
  $(".cell").text(" ");
  $(".cell").css("background-color", "#b3cce6");
}

function move(id, player){
  board[id] = player;
  $("#"+id).text(player);
  compsTurn();
  checkWin();
  checkTie();
}

function compsTurn(){
  if(gameOver == false) { 
    //check if it's the first computer move and put O (compMove) in the center
    if(firstCompMove) {
      if (board[4] == " "){
        board[4] = compMove;
        $("#4").text(compMove);
        firstCompMove = false;
        return;
      } else {  //if center is occupied, put O (compMove) in a random corner
        do {
          var a = firstArr[Math.floor((Math.random() * 4) + 1)];
        }  
        while (board[a] == playerMove);
        board[a] = compMove;
        $("#" + a).addClass(compMove);
        $("#" + a).text(compMove);
        firstCompMove = false;
        return;
      }            
    }   
    
    //looking for string with two Os (compMove's) – trying to win
    for(i=0; i<8; i++){
      var winstr = board[win[i][0]] + board[win[i][1]] + board[win[i][2]];
      if(winstr == " " + compMove + compMove) {
        board[win[i][0]] = compMove;
        $("#" + win[i][0]).addClass(compMove);
        $("#" + win[i][0]).text(compMove);
        checkWin();
        return;
      } else if(winstr == compMove + " " + compMove) {
        board[win[i][1]] = compMove;
        $("#" + win[i][1]).addClass(compMove);
        $("#" + win[i][1]).text(compMove);
        checkWin();
        return;      
      } else if(winstr == compMove + compMove + " ") {
        board[win[i][2]] = compMove;
        $("#" + win[i][2]).addClass(compMove);
        $("#" + win[i][2]).text(compMove);
        checkWin();
        return;
      }
    }
    
    //looking for string with two Xs (playerMove's) - prevent player from winning
    for(i=0; i<8; i++){
      var winstr = board[win[i][0]] + board[win[i][1]] + board[win[i][2]];
      if(winstr == " " + playerMove + playerMove) {
        board[win[i][0]] = compMove;
        $("#" + win[i][0]).text(compMove);
        checkWin();
        checkTie();
        return;
      } else if(winstr == playerMove + " " + playerMove) {
        board[win[i][1]] = compMove;
        $("#" + win[i][1]).text(compMove);
        checkWin();
        checkTie();
        return;      
      } else if(winstr == playerMove + playerMove + " ") {
        board[win[i][2]] = compMove;
        $("#" + win[i][2]).text(compMove);
        checkWin();
        checkTie();
        return;
      }
    }
    
    //check if there is row where there is O compMove but no X playerMove
    for(i=0; i<8; i++) {
      var winstr = board[win[i][0]] + board[win[i][1]] + board[win[i][2]];
      if(winstr.indexOf(playerMove) == -1 && winstr.indexOf(compMove) != -1) {
        for(j=0; j<3; j++){
          if(board[win[i][j]] == " "){
            board[win[i][j]] = compMove;
            $("#" + win[i][j]).text(compMove);
            checkWin();
            checkTie();
            return;
          }
        }
      }
    }
    
    //check if empty row or column and put O (comp Move) there
    for(i=0; i<8; i++) {
      var winstr = board[win[i][0]] + board[win[i][1]] + board[win[i][2]];
      if(winstr == "   "){
        board[win[i][0]] = compMove;
        $("#" + win[i][0]).text(compMove);
        checkWin();
        checkTie();
        return;
      }
    }
    
    // put O (compMove) in a first available empty box
    for(i=0; i<8; i++){
      if(board[i] == " "){
        board[i] = compMove;
        $("#" + i).text(compMove);
        checkWin();
        checkTie();
        return;
      }
    }    
  }
} 


  //check if win
  function checkWin(){
    for(i=0; i<8; i++){
      var winstr = board[win[i][0]] + board[win[i][1]] + board[win[i][2]];
      if(winstr == playerMove + playerMove + playerMove) {  //if player won
        $("#pickSideText").append("<p>Congrats! You won.</p><p>select your side</p>");       
        $("#pickX, #pickO, #notice").show();
        $("#"+win[i][0]).css("background-color", "green");
        $("#"+win[i][1]).css("background-color", "green");
        $("#"+win[i][2]).css("background-color", "green");
        gameOver = true;
        firstCompMove = true;
      } else if(winstr == compMove + compMove + compMove) {   //if computer won
        $("#pickSideText").append("<p>Oh! Computer won.</p><p>select your side</p>");       
        $("#pickX, #pickO, #notice").show();
        $("#"+win[i][0]).css("background-color", "yellow");
        $("#"+win[i][1]).css("background-color", "yellow");
        $("#"+win[i][2]).css("background-color", "yellow");
        gameOver = true;
        firstCompMove = true;
      }
    }
  }
  
  //check if tie
  function checkTie(){
    var tieflag = true;
    for(i=0; i<8; i++){      
      var winstr = board[win[i][0]] + board[win[i][1]] + board[win[i][2]];
      if(winstr.indexOf("X") == -1 || winstr.indexOf("O") == -1) {
        tieflag = false;
      } 
    }
    if(tieflag){
      Materialize.toast("It's a tie!", 4000, 'teal');
      gameOver = true;
      firstCompMove = true;
    }
    
  }
var generatedArr = [];
var playerArr = [];
var counter = 1;
var gameboard = $(".grid_container").children();

var clickNumber = 0;

gameboard.click(function() {
  playerArr.push($(this));
  clickNumber++;
  checkIfRight();
});

$("button").click(play);

function play() {
  //playerArr = [];
  $("button").hide();
  var random = Math.floor(Math.random() * 4);
  var randDiv = gameboard.eq(random)[0];
  var randDiv = $(randDiv);
  generatedArr.push(randDiv);
  console.log(generatedArr);
  for (var i = 0; i < generatedArr.length; i++) {
    generatedArr[i]
      .delay(400)
      .fadeOut(600)
      .fadeIn(500);
  }
  $("h1").text(`Level ${counter}! Click the flashed colors!`);
}

function checkIfRight() {
  if (playerArr.length === generatedArr.length) {
    for (var i = 0; i < playerArr.length; i++) {
      for (var j = 0; j < generatedArr.length; j++) {
        console.log("this is genarr j", generatedArr[j]);
        console.log("this is playerarr j", playerArr[i]);
        if (playerArr[i][i] === generatedArr[j][j]) {
          win();
        } else {
          alert("You have lost!");
          location.reload();
        }
      }
    }
  }
}

function win() {
  counter++;
  alert(`Success! Move on to level ${counter}!`);
  playerArr = [];
  play();
}


var generatedArr = [];
var playerArr = [];
var counter = 1;
var gameboard = $(".grid_container").children();

var clickNumber = 0;

gameboard.click(function(){
	playerArr.push($(this));
	clickNumber++;
	checkIfRight();
});

$("button").click(play);

function play(){
	//playerArr = [];
	$("button").hide();
	var random = Math.floor(Math.random()*4);
	var randDiv = gameboard.eq(random)[0];
	var randDiv = $(randDiv);
	generatedArr.push(randDiv);
	for(var i = 0; i < generatedArr.length; i++){
		generatedArr[i].delay(400).fadeOut(600).fadeIn(500).delay(400);
	}
	$("h1").text(`Level ${counter}! Click the flashed colors!`);
}

function checkIfRight(color){
	if (playerArr.length === generatedArr.length){
			// console.log('this is playerarr length:', playerArr.length);
			// console.log('this is generatedArr length:', generatedArr.length);
		for (var i=0; i < playerArr.length; i++){
			for (var j=0; j < generatedArr.length; j++){
			//if (playerArr[i] === color) {
				console.log("this is genarr j", generatedArr[j])
				console.log("this is playerarr j", playerArr[i])
				if (playerArr[i][i] ===  generatedArr[j][j]) {
					win();
				}
				else {
						alert('You have lost!');
						// location.reload();
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

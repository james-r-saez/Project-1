
var generatedArr = [];
var playerArr = [];
var counter = 1;
var gameboard = $(".grid_container").children();

function play(){
	//playerArr = [];
	var random = Math.floor(Math.random()*4);
	var randDiv = gameboard.eq(random)[0];
	randDiv = $(randDiv);
	generatedArr.push(randDiv);
	for(var i = 0; i < generatedArr.length; i++){
		generatedArr[i].delay(500).fadeOut(600).fadeIn(500).delay(500);
		generatedArr[i].click(function(){
			playerArr.push($(this));
			console.log("The gen length is " + generatedArr.length);
			console.log("The player length is " + playerArr.length);
			if (playerArr.length === generatedArr.length){
				console.log('this is playerarr length:', playerArr.length);
				console.log('this is generatedArr length:', generatedArr.length);
				checkIfRight();
			}
		})
	}
	$("button").hide();
	$("h1").text(`Level ${counter}! Click the flashed colors!`);
}

$("button").click(play);

function checkIfRight(){
	for (var i=0; i < playerArr.length; i++){
	// console.log(generatedArr[0][0].className);
	 console.log(playerArr[0]);
		if(generatedArr[i][0] === playerArr[i][0]){
			 counter++;
			 alert(`Success! Move on to level ${counter}!`);
			 playerArr = [];
			 console.log('this is playerArr:', playerArr);
			 play();
		}
		else {
			alert('You have lost!');
			location.reload();
		}
	}
}

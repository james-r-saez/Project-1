
var generatedArr = [];
var playerArr = [];
var counter = 1;
var gameboard = $(".grid_container").children();

$("button").click(play);

// function play() {
// 	for (var i = 0; i < counter; i++){
// 		var randDiv = gameboard.eq(Math.floor(Math.random()*4));
// 		//console.log({generatedArr})
// 		generatedArr.push(randDiv.attr("class"));
// 		.fadeOut(500).fadeIn(400).delay(1900);
// 	}
// 	$("button").hide();
// 	$("h1").text(`Round ${counter}! Click the flashed colors!`);
// 	counter++;
// 	playerArr = [];
// 	$(".grid_container").children().click(function() {
// 		playerArr.push(this.className);
// 		if (playerArr.length === (counter - 1)){
// 			checkIfRight();
// 		}
// 	});
// }

function play(){
	var random = Math.floor(Math.random()*4);
	var randDiv = gameboard.eq(random)[0];
	randDiv = $(randDiv);
	// previous colors
	generatedArr.push(randDiv);
	// players choices
	// console.log(this);
	// playerArr.push(this);
	for(var i = 0; i < generatedArr.length; i++){
		generatedArr[i].fadeOut(500).fadeIn(400);
		generatedArr[i].click(function(){
			playerArr.push($(this));
			if(playerArr.length === generatedArr.length){
				checkIfRight();
			}
		})
	}

	$("button").hide();
	$("h1").text(`Round ${counter}! Click the flashed colors!`);

}

// function checkIfRight(){
// 	if (generatedArr.toString() === playerArr.toString() ) {
// 		alert(`Success! Move on to level ${counter}!`);
// 		play();
// 	}
// 	else {
// 		alert('You have lost!');
// 	}
// }

function checkIfRight(){
	console.log(generatedArr[0][0].className);
	console.log(playerArr[0]);
	if(generatedArr[0][0].className === playerArr[0][0].className){
			alert(`Success! Move on to level ${counter}!`);
			play();
		} else {
			alert('You have lost!');
		}
}


// function repeatPlay(){
// 	play();
// }

// document.querySelector("button").addEventListener("click", function(){
// 	var randInt = Math.floor(Math.random()*4);
// 	var allDivs = document.querySelectorAll(".grid_container.children");
// 	var randDiv = allDivs[randInt];
// 	$(randDiv).fadeOut(500).fadeIn(400);
// 	generatedArr.push(this.className);
// 	document.querySelector("button").style.display = "none";
// 	counter++;
// 	document.querySelector("h1").textContent = `Round ${counter}! Click the flashed colors!`;
// 	document.querySelectorAll(".grid_container.children").addEventListener("click",function (){
// 		playerArr.push(this.className);
// 	})
// });


var generatedArr = [];
var playerArr = [];
var counter = 0;

$("button").click(play);

function play() {
	var randInt = Math.floor(Math.random()*4);
	var randDiv = $(".grid_container").children().eq(randInt);
	var updatedClass = randDiv.attr("class");
	generatedArr.push(updatedClass);
	randDiv.fadeOut(500).fadeIn(400);
	$("button").hide();
	counter++;
	$("h1").text(`Round ${counter}! Click the flashed colors!`);
	playerArr = [];
	$(".grid_container").children().click(function() {
		playerArr.push(this.className);
		if (generatedArr.toString() === playerArr.toString() ) {
			alert(`Success! Move on to level ${counter+1}!`);
			play();
		}
		else {
			alert('You have lost!');
		}
	});
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

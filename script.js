
var generatedArr = [];
var playerArr = [];
var counter = 0;

$("button").click(function() {
	var randInt = Math.floor(Math.random()*4);
	var randColor = $(".board").eq(randInt);
	randColor.fadeOut(500).fadeIn(400); //from all the matched elements, pick a random one
	generatedArr.push(randColor.css("backgroundColor"));
	$("button").hide();
	counter++;
	$("h1").text(`Round ${counter}! Click the flashed colors!`);
	$(".board").click(function() {
		playerArr.push($(this).css("backgroundColor"))});
});
// while (counter < 15){ 				//fixing this still
// 	if (playerArr == generatedArr){
// 		counter++;
// 		$("h1").text(`Round ${counter}!`);
// 	}
// 	else {
// 		break;
// 	}
// }
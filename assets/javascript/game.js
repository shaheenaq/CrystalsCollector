var wincount = 0;
var losses = 0;
var gameOver = false;



//random number generator(number between 19-120), place number in randomNumberBox
var maximum = 120;
var minimum = 19;
var randomNumber = Math.floor(Math.random()*(maximum - minimum + 1)) + minimum;

//Initializing each variable to zero
var gemOne = 0;
var gemTwo = 0;
var gemThree = 0;
var gemFour = 0;
var totalScore = 0;

//Assigning a random number between 1 -12 for each crystal
gemOne = Math.floor(Math.random() * 12) + 1;
gemTwo = Math.floor(Math.random() * 12) + 1;
gemThree = Math.floor(Math.random() * 12) + 1;
gemFour = Math.floor(Math.random() * 12) + 1;	

function nextGame(){
	//reset for next round of game
randomNumber = Math.floor(Math.random()*(maximum - minimum + 1)) + minimum;
$("#randomNumber").html(randomNumber);
totalScore = 0;
$("#score").html(totalScore);

gemOne = Math.floor(Math.random() * 12) + 1;
gemTwo = Math.floor(Math.random() * 12) + 1;
gemThree = Math.floor(Math.random() * 12) + 1;
gemFour = Math.floor(Math.random() * 12) + 1;

}

function checkForWin(){
	if(totalScore === randomNumber){
		wincount++;
		$("#wins").html(wincount);
		alert("You WON!! " + totalScore + " = " + randomNumber);
		gameOver = true;
		nextGame();
		}
	
}

function checkForLoss(){
	if(totalScore > randomNumber){
		losses++;
	$("#lose").html(losses);
	alert("You went OVER! " + totalScore + " > " + randomNumber);
	nextGame();
	}
	//location.reload();
	
}

$(function(){
	
//Display the random number to the randomNumber box
$("#randomNumber").append(randomNumber);


//When each gem is clicked, the number assigned to it will be added to totalscore.
$("#gem1").on("click", function(){
	totalScore += gemOne;
	$("#score").html(totalScore);
	checkForWin();
	checkForLoss();
	
});

$("#gem2").on("click", function(){
	totalScore += gemTwo;
	$("#score").html(totalScore);
	checkForWin();
	checkForLoss();
});

$("#gem3").on("click", function(){
	totalScore += gemThree;
	$("#score").html(totalScore);
	checkForWin();
	checkForLoss();
});

$("#gem4").on("click", function(){
	totalScore += gemFour;
	$("#score").html(totalScore);
	checkForWin();
	checkForLoss();
});


});


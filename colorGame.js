	/*var colors=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
];*/
var numSquares=6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
/*var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");*/
startGame();
var modeButton= document.querySelectorAll(".mode");
for (var i=0;i<modeButton.length;i++){
	//toggle selected class between easy and hard
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
	//how many squares to show?
	if(this.textContent=="Easy"){
		numSquares=3;
		hideBox();
	}
	else{
		numSquares=6;
		showBox();
	}
	reset();
	});

}

/* a shorter and better version of switching between hard and easy mode.


*/
// easy.addEventListener("click",function() {
// 	numSquares=3;
// 	messageDisplay.textContent="";
// 	messageDisplay.style.color="red";
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	colors=generateColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	h1.style.background = "steelblue";
// 	startGame();
// 	hideBox();	
// 	resetButton.textContent="New Colors";
	

// })
// hard.addEventListener("click",function(){
// 	messageDisplay.textContent="";
// 	messageDisplay.style.color="red";
// 	numSquares=6;
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	colors=generateColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	h1.style.background = "steelblue";
// 	startGame();
// 	showBox();
// })
resetButton.addEventListener("click", function(){
 	reset();

});

colorDisplay.textContent=pickedColor;
function startGame(){
	for (i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.background;
			if(clickedColor===pickedColor){
				changeColor(squares);
				h1.style.background = pickedColor;
				messageDisplay.textContent="correct!";
				messageDisplay.style.color="#1eff00";
				resetButton.textContent="Play Again?";
			}
			else{
				messageDisplay.textContent="Try again";
				this.style.background = "#232323";
			}
		});
	}
}

function changeColor(color){
	//loop through squares
	// change the color of all with given color
	for (i=0;i<color.length;i++){
		color[i].style.background = pickedColor;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateColors(val){
	//make an array
	var arr=[];
	//add random colors 
	//given below is a spagetti code for generating a string in the form of rgb(r, g, b)
	/*for(i=0;i<val;i++){
		arr[i]= "rgb(" + Math.floor(Math.random()*255+1) + ", " + Math.floor(Math.random()*255+1) + ", " + Math.floor(Math.random()*255+1)+ ")";
	}*/
	//more organised way of doing this is
	for (i=0;i<val;i++){
		arr[i] = randomColor();
	}
	//return the array
	return arr;

}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b + ")"; // spaced after commas are very important. 

}

function hideBox()
{
	for (i=3; i<6; i++){
		squares[i].style.display = "none";
	}
}
function showBox()
{
	for (i=3; i<6; i++){
		squares[i].style.display = "block";
	}
}

function reset(){
	colors = generateColors(numSquares);
	pickedColor=pickColor();
	h1.style.background = "steelblue";
	startGame();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	messageDisplay.style.color="red";
	resetButton.textContent="New Colors";
} 



/*better code
var numSquares=6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
startGame();
var modeButton= document.querySelectorAll(".mode");
for (var i=0;i<modeButton.length;i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
	if(this.textContent=="Easy"){
		numSquares=3;
		hideBox();
	}
	else{
		numSquares=6;
		showBox();
	}
	reset();
	});
}
resetButton.addEventListener("click", function(){
 	reset();

});

colorDisplay.textContent=pickedColor;
function startGame(){
	for (i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.background;
			if(clickedColor===pickedColor){
				changeColor(squares);
				h1.style.background = pickedColor;
				messageDisplay.textContent="correct!";
				messageDisplay.style.color="#1eff00";
				resetButton.textContent="Play Again?";
			}
			else{
				messageDisplay.textContent="Try again";
				this.style.background = "#232323";
			}
		});
	}
}
function changeColor(color){
	for (i=0;i<color.length;i++){
		color[i].style.background = pickedColor;
	}
}
function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateColors(val){
	var arr=[];
	for (i=0;i<val;i++){
		arr[i] = randomColor();
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}
function hideBox()
{
	for (i=3; i<6; i++){
		squares[i].style.display = "none";
	}+
}
function showBox()
{
	for (i=3; i<6; i++){
		squares[i].style.display = "block";
	}
}
function reset(){
	colors = generateColors(numSquares);
	pickedColor=pickColor();
	h1.style.background = "steelblue";
	startGame();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	messageDisplay.style.color="red";
	resetButton.textContent="New Colors";
} 
*/
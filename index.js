console.log("Hello why are you here");
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//set vars
let colorchanged = false;
let count = 0;
//create function (will be called by butten see in html)
function colorchange() {
	//set counter +1
	count = count + 1;
	//log for testing
	// console.log(count);
	// console.log("clicked");

	//check if color changed
	if (!colorchanged) {
		//get element - sub style - sub color = red
		document.getElementById("changecolor").style.color = "red";
		//set color changed to true
		colorchanged = true;
	} else {
		//get element - sub style - sub color = white
		document.getElementById("changecolor").style.color = "white";
		//set color changed to false
		colorchanged = false;
	}
	//set the counter to count var
	document.getElementById("counter").innerText = count;
}
//create function (will be called by butten see in html)
function reasetcount() {
	//reasets count var
	count = 0;
	//updates count var
	document.getElementById("counter").innerText = count;
	//sets color to white
	document.getElementById("changecolor").style.color = "white";
	//sets colorchanged to false
	colorchanged = false;
}

function testRtimeClick() {
	document.getElementById("theButtonRtest").style.borderColor = "rgb(255, 0, 242)";
	document.getElementById("theButtonRtest").style.color = "rgb(255, 0, 242)";
	document.getElementById("theButtonRtest").innerText = "The Button";
	document.getElementById("startReactionTest").innerText = "Start";
	if (Started && !used) {
		alapsedTimeMS = Date.now() - startTime;
		console.log(alapsedTimeMS);
		document.getElementById("score").innerText = alapsedTimeMS;
		if (alapsedTimeMS < CbestScore) {
			CbestScore = alapsedTimeMS;
			document.getElementById("bestScore").innerText = "Best Score: " + CbestScore;
		}
	} else {
		document.getElementById("score").innerText = "Failed";
	}
	used = true;
	disabled = false;
	Started = true;
}
let CbestScore = Number.POSITIVE_INFINITY;
let used;
let Started;
let startTime;
let intervelId;
let alapsedTimeMS;
let a;
let disabled = false;
function reactionTest() {
	if (!disabled) {
		disabled = true;
		Started = false;
		alapsedTimeMS = 0;
		a = randInt(3000, 5000);
		console.log(a);
		document.getElementById("startReactionTest").innerText = "Started";
		//time out
		setTimeout(function () {
			if (!Started) {
				startTime = Date.now();
				Started = true;
				used = false;
				document.getElementById("theButtonRtest").style.borderColor = "red";
				document.getElementById("theButtonRtest").style.color = "red";
				document.getElementById("theButtonRtest").innerText = "CLICK ME";
			}
		}, a);
	} //time out
} //main func

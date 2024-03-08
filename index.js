//make vars
let avg;
let triesSum = 0;
let tries = [];
let bestScore = Number.POSITIVE_INFINITY;
let used;
let Started;
let startTime;
let intervelId;
let alapsedTimeMS;
let a;
let disabled = false;

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
function resetcount() {
	//resets count var
	count = 0;
	//updates count var
	document.getElementById("counter").innerText = count;
	//sets color to white
	document.getElementById("changecolor").style.color = "white";
	//sets colorchanged to false
	colorchanged = false;
}

function resetAVG() {
	avg = 0;
	triesSum = 0;
	tries = [];
	document.getElementById("avgScore").innerText = "average : ";
}

function testRtimeClick() {
	//changed text and style back
	document.getElementById("theButtonRtest").style.borderColor = "rgb(255, 0, 242)";
	document.getElementById("theButtonRtest").style.color = "rgb(255, 0, 242)";
	document.getElementById("theButtonRtest").innerText = "The Button";
	document.getElementById("startReactionTest").innerText = "Start";
	//check if score valid
	if (Started && !used) {
		alapsedTimeMS = Date.now() - startTime;
		//console.log(alapsedTimeMS);
		tries.push(alapsedTimeMS);
		if (tries.length >= 3) {
			triesSum = 0;
			for (let i = 0; i < tries.length; i++) {
				triesSum += tries[i];
				//console.log("ti " + tries[i]);
				//console.log("i = " + i);
				//console.log("t sum = " + triesSum);
			}
			//console.log(triesSum);
			avg = triesSum / tries.length;
			//console.log(avg);
			document.getElementById("avgScore").innerText = "average : " + avg;
		}
		//set score to score element
		document.getElementById("score").innerText = "score in ms: " + alapsedTimeMS;
		//set bestscore
		if (alapsedTimeMS < bestScore) {
			bestScore = alapsedTimeMS;
			document.getElementById("bestScore").innerText = "Best Score: " + bestScore;
		}
	} else {
		//set to failed
		document.getElementById("score").innerText = "Failed";
	}
	//reset vars
	used = true;
	disabled = false;
	Started = true;
}

function reactionTest() {
	if (!disabled) {
		disabled = true;
		Started = false;
		alapsedTimeMS = 0;
		a = randInt(5000, 10000);
		//console.log(a);
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

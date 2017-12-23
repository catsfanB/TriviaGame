

// Data objects for the trivia game go here
var rounds = [
		{
			name					: "round1", 
			movie					: "Cars 3",
			imageSrc				: "assets/images/cars3.jpg",
			numQuestions			: 5,
			correctAnswers			: 0,
			questions 				: [
				{
					questionNum			: 1,
					questionText		: "What type of vehicle is Miss Fritter?",
					answers 			: [
						{
							answerText 			: "Fire Truck",
							isCorrect 			: false
						},
						{
							answerText 			: "Taxi",
							isCorrect 			: false
						},
						{
							answerText 			: "School Bus",
							isCorrect 			: true
						},
						{
							answerText 			: "Ambulance",
							isCorrect 			: false
						}
					]	
				},
				{
					questionNum			: 2,
					questionText		: "Who does Rusty and Dusty sell Rust-Eze to?",
					answers 			: [
						{
							answerText 			: "Luigi",
							isCorrect 			: false
						},
						{
							answerText 			: "Max Schnell",
							isCorrect 			: false
						},
						{
							answerText 			: "Mater",
							isCorrect 			: false
						},
						{
							answerText 			: "Sterling",
							isCorrect 			: true
						}
					]	
				},
				{
					questionNum			: 3,
					questionText		: "Who is McQueen's main rival in Cars 3?",
					answers 			: [
						{
							answerText 			: "Jackson Storm",
							isCorrect 			: true
						},
						{
							answerText 			: "Jack Raisin",
							isCorrect 			: false
						},
						{
							answerText 			: "Michael Fasty",
							isCorrect 			: false
						},
						{
							answerText 			: "Martin Prettyhubcap",
							isCorrect 			: false	
						}
					]	
				},
				{
					questionNum			: 4,
					questionText		: "What beach do McQueen and Cruz train on?",
					answers 			: [
						{
							answerText 			: "Fiery Beach",
							isCorrect 			: false
						},
						{
							answerText 			: "Fireball Beach",
							isCorrect 			: true
						},
						{
							answerText 			: "Bubble Rain Beach",
							isCorrect 			: false
						},
						{
							answerText 			: "Beach of Speed",
							isCorrect 			: false
						}
					]	
				},
				{
					questionNum			: 5,
					questionText		: "What name does Miss Fritter call Cruz in the demolition derby?",
					answers 			: [
						{
							answerText 			: "Yellow Gal",
							isCorrect 			: false
						},
						{
							answerText 			: "Yellowie",
							isCorrect 			: false
						},
						{
							answerText 			: "Lemonade",
							isCorrect 			: true
						},
						{
							answerText 			: "Dr. Pineapple Juice",
							isCorrect 			: false
						}
					]	
				}			
			] 
		},
		{
			name					: "round2", 
			movie					: "Wall-E",
			imageSrc				: "assets/images/wall-e.jpg",
			numQuestions			: 5,
			correctAnswers			: 0,
			questions 				: [
				{
					questionNum			: 1,
					questionText		: "What type of creature did WALL-E have as a friend before meeting EVE?",
					answers 			: [
						{
							answerText 			: "A Rabbit",
							isCorrect 			: false
						},
						{
							answerText 			: "A Dog",
							isCorrect 			: false
						},
						{
							answerText 			: "A Spider",
							isCorrect 			: false
						},
						{
							answerText 			: "A Cockroach",
							isCorrect 			: true
						}
					]	
				},
				{
					questionNum			: 2,
					questionText		: "What was the colorful toy that WALL-E showed to EVE during the sandstorm?",
					answers 			: [
						{
							answerText 			: "A Tricycle",
							isCorrect 			: false
						},
						{
							answerText 			: "A Football",
							isCorrect 			: false
						},
						{
							answerText 			: "A Rubik's Cube",
							isCorrect 			: true
						},
						{
							answerText 			: "A Frisbee",
							isCorrect 			: false
						}
					]	
				},
				{
					questionNum			: 3,
					questionText		: "Which tool does WALL-E use to help him move through space?",
					answers 			: [
						{
							answerText 			: "A Hairdryer",
							isCorrect 			: false
						},
						{
							answerText 			: "A Fan",
							isCorrect 			: false
						},
						{
							answerText 			: "A Fire Extinguisher",
							isCorrect 			: true
						},
						{
							answerText 			: "A Fire Hose",
							isCorrect 			: false
						}
					]	
				},
				{
					questionNum			: 4,
					questionText		: "When WALL-E gave EVE the plant, what did she give him in return?",
					answers 			: [
						{
							answerText 			: "A Kiss",
							isCorrect 			: true
						},
						{
							answerText 			: "A Kick",
							isCorrect 			: false
						},
						{
							answerText 			: "A Gut Punch",
							isCorrect 			: false
						},
						{
							answerText 			: "A High Five",
							isCorrect 			: false
						}
					]	
				},
				{
					questionNum			: 5,
					questionText		: "What is the captain doing at the end of the movie?",
					answers 			: [
						{
							answerText 			: "Fixing a Car",
							isCorrect 			: false
						},
						{
							answerText 			: "Cleaning the Ship",
							isCorrect 			: false
						},
						{
							answerText 			: "Sleeping",
							isCorrect 			: false
						},
						{
							answerText 			: "Planting Seeds",
							isCorrect 			: true
						}
					]	
				}
			] 
		},
		{
			name					: "round3", 
			movie					: "Toy Story",
			imageSrc				: "assets/images/toyStory.jpg",
			numQuestions			: 5,
			correctAnswers			: 0,
			questions 				: [
				{
					questionNum			: 1,
					questionText		: "What style of vest does Woody wear in the movie?",
					answers 			: [
						{
							answerText 			: "Leopard Print",
							isCorrect 			: false
						},
						{
							answerText 			: "Cow Print",
							isCorrect 			: true
						},
						{
							answerText 			: "Bear Skin",
							isCorrect 			: false
						},
						{
							answerText 			: "Striped",
							isCorrect 			: false
						}
					]	
				},
				{
					questionNum			: 2,
					questionText		: "What is Buzz Lightyear?",
					answers 			: [
						{
							answerText 			: "A Space Explorer",
							isCorrect 			: false
						},
						{
							answerText 			: "A Space Commander",
							isCorrect 			: false
						},
						{
							answerText 			: "A Space Alien",
							isCorrect 			: false
						},
						{
							answerText 			: "A Space Ranger",
							isCorrect 			: true
						}
					]	
				},
				{
					questionNum			: 3,
					questionText		: "What is the name of Sid's dog?",
					answers 			: [
						{
							answerText 			: "Scooby",
							isCorrect 			: false
						},
						{
							answerText 			: "Scud",
							isCorrect 			: true
						},
						{
							answerText 			: "Scrappy",
							isCorrect 			: false
						},
						{
							answerText 			: "Skeeter",
							isCorrect 			: false
						}
					]	
				},
				{
					questionNum			: 4,
					questionText		: "For Andy's birthday, his parents take him to which restaurant?",
					answers 			: [
						{
							answerText 			: "Pizza Planet",
							isCorrect 			: true
						},
						{
							answerText 			: "Pizza Hut",
							isCorrect 			: false
						},
						{
							answerText 			: "Chuck-E-Cheese",
							isCorrect 			: false
						},
						{
							answerText 			: "Showbiz Pizza",
							isCorrect 			: false
						}
					]	
				},
				{
					questionNum			: 5,
					questionText		: "What does Woody use to knock Buzz out of the window?",
					answers 			: [
						{
							answerText 			: "A Board",
							isCorrect 			: false
						},
						{
							answerText 			: "A Globe",
							isCorrect 			: false
						},
						{
							answerText 			: "A Lamp",
							isCorrect 			: true
						},
						{
							answerText 			: "A Truck",
							isCorrect 			: false
						}
					]	
				}
			] 
		}
];


// GLOBAL VARIABLES GO HERE

var time = 30;
var timeUp = false;
var i = 0;
var j = 0;
var correctAnswer;
var runningTimer;
var tryNum = 0;


// PAGE ELEMENT REFERENCES GO HERE
var roundNum = $(".roundNum");
var roundImage = $(".roundImage");
var questionNumber = $(".questionNumber");
var question = $(".question");
var answer1 = $(".answer1");
var answer2 = $(".answer2");
var answer3 = $(".answer3");
var answer4 = $(".answer4");
var check1 = $(".check1");
var check2 = $(".check2");
var check3 = $(".check3");
var check4 = $(".check4");

var checks = [check1, check2, check3, check4];

// MAIN GAME PATH GOES HERE

showOverlay();
hideGame();
hideGameOver();

$(".playBtn").on("click", function() {
	setGame();
});

$(".answers").on("click", function() {
	var clicked = this;
	checkAnswer(clicked);
});


// FUNCTIONS GO HERE

function hideOverlay () {
	$(".overlay").hide();
}

function showOverlay () {
	$(".overlay").show();
}

function hideGame() {
	$(".summaryArea").hide();
	$(".gameArea").hide();
}

function showGame() {
	$(".summaryArea").show();
	$(".gameArea").show();
}

function hideGameOver() {
	$(".gameOver").hide();
}

function showGameOver() {
	$(".gameOver").show();
}

function startTimer() {

	time = 30;

	runningTimer = setInterval(function() {

		 var timer = $(".timer").html("Time Remaining: " + time + " Seconds");
		 time--;

		if (time === 0) {
			clearInterval(runningTimer);
			timeIsUp();
		}

	}, 1000);
}

function setGame() {

	showGame();
	hideOverlay();
	setSummaryArea();
	setQandAs();
	startTimer();
	setHover();
}


function checkAnswer(clicked) {

	var answerId = $(clicked).attr("answerId");

	if (rounds[i].questions[j].answers[answerId].isCorrect) {
		clearInterval(runningTimer);
		$(clicked).off("mouseenter");
		$(clicked).off("mouseleave");
		var selectRow = $(clicked).css("background", "green");
		checks[answerId].text("CORRECT!");
		checks[answerId].css("background", "green");

		if (tryNum === 0) {
			rounds[i].correctAnswers++;
		}

		setTimeout(function() {
			nextQuestion();
		}, 1500);
	}
	else {
		tryNum++;
		$(clicked).off("mouseenter");
		$(clicked).off("mouseleave");
		var selectRow = $(clicked).css("background", "red");
		checks[answerId].text("Try Again");
		checks[answerId].css("background", "red");
	}
}

function nextQuestion() {
		console.log("I = ", i, "| J = ",j);
		tryNum = 0;

		$(".check").empty();
		$(".check").css("background", "white");	
		$(".answers").css("background", "white");	

		j++;
		console.log("J = ",j);

		if (j > rounds[i].questions.length-1) {
			j = 0;
			i++;
			console.log("I = ",i);

			if (i === rounds.length) {
				gameOver();
				return;
			}
			else {
				alert("Get Ready for Next Round!");
			}
		}

		alert("Ready for Next Question?");
		setGame();
}

function gameOver() {
	hideGame();
	hideOverlay();
	showGameOver();

	for (var n = 0; n < rounds.length; n++) {

		var imageGO = rounds[n].imageSrc;
		var tag = $(".gameOver");
		tag.append("<img class='imagesGO' src='"+imageGO+"'>");
		tag.append("<span class='scores'>You got "+rounds[n].correctAnswers+" out of "+rounds[n].questions.length+" correct.</span>");
		tag.append("<br><br>")
	}

}

function timeIsUp() {

	for (var k=0; k < rounds[i].questions[j].answers.length; k++) {
		if (rounds[i].questions[j].answers[k].isCorrect) {
			correctAnswer = rounds[i].questions[j].answers[k].answerText;
			break;
		}
	}

	alert("Time is up. The correct answer was " + correctAnswer);
	nextQuestion();
}

function setSummaryArea() {
	roundNum.text("Round " + (i+1) + " of " + (rounds.length))
	roundImage.attr("src", rounds[i].imageSrc);
	questionNumber.text("Question " + (j+1) + " of " + (rounds[i].questions.length));
}

function setQandAs() {
	question.text(rounds[i].questions[j].questionText);
	answer1.text(rounds[i].questions[j].answers[0].answerText);
	answer2.text(rounds[i].questions[j].answers[1].answerText);
	answer3.text(rounds[i].questions[j].answers[2].answerText);
	answer4.text(rounds[i].questions[j].answers[3].answerText);
}

function setHover() {
	$(".answers").on("mouseenter", function() {
		$(this).css("background", "yellow");
	});

	$(".answers").on("mouseleave", function() {
		$(this).css("background", "white");
	});
}





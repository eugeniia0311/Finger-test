
let resultCount = 0;
let currentQuestion = 0;

initTest();


function initTest() {
	document.getElementById('js-totalQuestionCount').innerText = questions.length;
	document.getElementById('js-questionNumber').innerText = currentQuestion + 1;
	setQuestionData();
}

function setQuestionData() {
	document.getElementById('js-questionText').innerText = questions[currentQuestion].questionText;
	document.getElementById('js-questionNumber').innerText = currentQuestion + 1;
	document.getElementById('js-answers').innerHTML = getAnswersMarkdown(questions[currentQuestion].answers);			
}


function getAnswersMarkdown(answers) {
	let result = '';

	answers.forEach(answer => {
		result += '<li><button class="button" onclick="onAnswerClick(' + answer.value + ')">' + answer.answerText + '</button></li>';	
	})

	return result;
}


function onAnswerClick(answerValue) {
	resultCount += answerValue;
	currentQuestion++;

	if (currentQuestion < questions.length) {
		setQuestionData();		
	} else {
		showResult();
	}
}

function showResult() {
	document.getElementById('js-question').classList.add('-hidden');
	document.getElementById('js-result').classList.remove('-hidden');

	let result;

	if 	(resultCount < 4) {
		result = resultData.thumb;
	} else if (resultCount < 8) {
		result = resultData.pointer;
	} else if (resultCount < 12) {
		result = resultData.middle;
	} else if (resultCount < 16) {
		result = resultData.noname;
	} else {
		result = resultData.littleQutie;
	}

	document.getElementById('js-resultTitle').innerText = result.title;
	document.getElementById('js-resultDescription').innerText = result.desc;	
	document.getElementById('js-resultImage').src = result.image;	

	document.getElementById('js-resultShare').innerHTML = VK.Share.button(
		{
			url: 'путь до страницы gitHub pages',
			title: result.title,
			image: result.image,
			noprase: true
		},
		{
			text: 'balalalala....... PARDON '
		}
	);	
}	

function restartTest() {
	document.getElementById('js-question').classList.remove('-hidden');
	resultCount = 0;
	currentQuestion = 0;
	initTest();
	document.getElementById('js-result').classList.add('-hidden');
	document.getElementById('js-info').classList.remove('-hidden');	
	document.getElementById('js-info').classList.remove('-hidden');
	document.getElementById('js-question').classList.add('-hidden');

}


function hideDesc() {
	document.getElementById('js-info').classList.add('-hidden');
	document.getElementById('js-question').classList.remove('-hidden');

}
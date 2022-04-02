const 
num1El = document.querySelector(".num1"),
num2El = document.querySelector(".num2"),
answerEl = document.querySelector(".answer"),
gameOverEl = document.querySelector(".correct-answers"),
accoladesEl = document.querySelector(".accolation");

// input buttons
const 
button0 = document.querySelector("#button0"),
button1 = document.querySelector("#button1"),
button2 = document.querySelector("#button2"),
button3 = document.querySelector("#button3"),
button4 = document.querySelector("#button4"),
button5 = document.querySelector("#button5"),
button6 = document.querySelector("#button6"),
button7 = document.querySelector("#button7"),
button8 = document.querySelector("#button8"),
button9 = document.querySelector("#button9"),
enterEl = document.querySelector("#button-enter"),
deleteEl = document.querySelector("#button-delete");

// listen for clicks on each button
button0.addEventListener("click", function() { answerEl.value += 0; });
button1.addEventListener("click", function() { answerEl.value += 1; });
button2.addEventListener("click", function() { answerEl.value += 2; });
button3.addEventListener("click", function() { answerEl.value += 3; });
button4.addEventListener("click", function() { answerEl.value += 4; });
button5.addEventListener("click", function() { answerEl.value += 5; });
button6.addEventListener("click", function() { answerEl.value += 6; });
button7.addEventListener("click", function() { answerEl.value += 7; });
button8.addEventListener("click", function() { answerEl.value += 8; });
button9.addEventListener("click", function() { answerEl.value += 9; });

// get a random numbers from 0-9 for both parts of the equation
function setNumbers() {
  if (gameOver === true) {
    modalGameOver.classList.add("modal-visible");
    gameOverEl.textContent = scoreCorrectNum;
    if (scoreCorrectNum === 10) {
      accoladesEl.textContent = "PERFECT";
    } else if (scoreCorrectNum >= 8) {
      accoladesEl.textContent = "AWESOME";
    } else if (scoreCorrectNum >= 6) {
      accoladesEl.textContent = "GOOD JOB";
    } else if (scoreCorrectNum >= 4) {
      accoladesEl.textContent = "KEEP AT IT";
    } else {
      accoladesEl.textContent = "TRY AGAIN";
    }
  } else {
    num1El.value = Math.floor(Math.random() * 13);
    num2El.value = Math.floor(Math.random() * 13);
    answerEl.value = null;
  }
}

// set the guess limit
let guesses = 2;

// input answer and see if its correct
enterEl.addEventListener("click", function() {
  if (answerEl.value === "") {
    modalNoAnswer.classList.add("modal-visible");
  } else {
    if (Number(answerEl.value) === Number(num1El.value) * Number(num2El.value) && gameOver === false) {
      modalCorrect.classList.add("modal-visible");
    } else if (guesses > 0) {
      modalIncorrect.classList.add("modal-visible");
        if (guesses > 1) {
          guessesLeft.textContent = guesses + " guesses left.";
        } else {
          guessesLeft.textContent = guesses + " guess left.";        
        }
      answerEl.value = null;
    } else {
      modalAnswerGiven.classList.add("modal-visible");
      answerGiven.textContent = "The answer was " + (Number(num1El.value) + Number(num2El.value));
      guesses = 2;
  }
  }
}
);

// initialize the footer stats
let 
scoreCorrectNum = 0,
scoreIncorrectNum = 0,
scoreRemainingNum = 1,
gameOver = false;

const 
scoreCorrectEl = document.querySelector("#score-correct"),
scoreIncorrectEl = document.querySelector("#score-incorrect"),
scoreRemainingEl = document.querySelector("#score-remaining");

scoreCorrectEl.textContent = scoreCorrectNum;
scoreIncorrectEl.textContent = scoreIncorrectNum;
scoreRemainingEl.textContent = scoreRemainingNum;


// updates the question counter
function updateStats() {
    if (scoreRemainingNum < 2) {
      scoreRemainingNum++;
      scoreCorrectEl.textContent = scoreCorrectNum;
      scoreIncorrectEl.textContent = scoreIncorrectNum;
      scoreRemainingEl.textContent = scoreRemainingNum;
  } else {
    scoreCorrectEl.textContent = scoreCorrectNum;
    scoreIncorrectEl.textContent = scoreIncorrectNum;
    scoreRemainingEl.textContent = scoreRemainingNum;
    gameOver = true;
  }
}

// delete mistakes (there must be a better way to do this)
deleteEl.addEventListener("click", function() {
  let deleteNum = answerEl.value;
      deleteNum = deleteNum.split("");
      deleteNum.pop();
      deleteNum = deleteNum.join("");
      answerEl.value = deleteNum;
  }
);

// MODALS

const 
modalCorrect = document.querySelector("#modal-correct"),
modalIncorrect = document.querySelector("#modal-incorrect"),
modalAnswerGiven = document.querySelector("#modal-answer-given"),
modalGameOver = document.querySelector("#modal-game-over"),
nextBtn = document.querySelector("#correct-next-btn"),
tryAgainBtn = document.querySelector("#try-again"),
answerBtn = document.querySelector("#answer-next-btn"),
guessesLeft = document.querySelector("#guesses-left"),
answerGiven = document.querySelector("#answer-given"),
newGameBtn = document.querySelector("#play-again-btn");

// NO ANSWER
const 
modalNoAnswer = document.querySelector("#modal-no-answer"),
noAnswerBtn = document.querySelector("#no-answer-btn");


nextBtn.addEventListener("click", function() {
  modalCorrect.classList.remove("modal-visible");
  scoreCorrectNum++;
  updateStats();
  setNumbers();
});

tryAgainBtn.addEventListener("click", function() {
  modalIncorrect.classList.remove("modal-visible");
  guesses--;
});

answerBtn.addEventListener("click", function() {
  modalAnswerGiven.classList.remove("modal-visible");
  scoreIncorrectNum++;
  updateStats();
  setNumbers();
});

noAnswerBtn.addEventListener("click", function() {
  modalNoAnswer.classList.remove("modal-visible");
});

newGameBtn.addEventListener("click", function() {
  location.reload();
});

// initialize the game
setNumbers();

// THIS IS HOW YOU ADD AND REMOVE A CLASS FROM AN HTML ELEMENT (modal is the ID)
// modal.classList.add("modal-visible");
// modal.classList.remove("modal-visible");
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length - 1);
}

const wordContainer = document.getElementById("word");
const overlay = document.getElementById("gameover-overlay");
const gameoverMessage = document.getElementById("gameover-message");
const playingArea = document.getElementById("playing-area");
const startOverlay = document.getElementById("start-overlay");

class Game {
  constructor() {
    this.currentWord = this.getWord();
    this.displayHiddenWord();
    this.wrongGuessesCounter = 0;
    this.displayGameElements();
  }

  displayGameElements() {
    playingArea.style.display = "flex";
    startOverlay.style.display = "none";
  }

  displayHiddenWord() {
    for (let i = 0; i < this.currentWord?.length; i++) {
      const hiddenChar = document.createElement("p");
      //   const char = document.createElement("p");
      hiddenChar.innerText = "_";

      hiddenChar.classList.add("character");
      wordContainer.appendChild(hiddenChar);
    }
    console.log(this.currentWord);
  }

  getWord() {
    return difficultWords[getRandomIndex(difficultWords)];
  }

  isWordCompleted() {
    const charElements = document.getElementsByClassName("character");
    const charsArr = [...charElements];

    return charsArr.every((item) => item.innerText !== "_");
  }

  restartGame() {
    this.currentWord = this.getWord();

    letterButtons.forEach((button) => {
      button.disabled = false;
    });

    this.wrongGuessesCounter = 0;

    overlay.style.display = "none";

    wordContainer.innerHTML = "";

    this.displayHiddenWord();

    const hangmanParts = document.querySelectorAll(".hangman-part");
    const array = [...hangmanParts];
    array.forEach((part) => part.remove());
  }

  displayIncludedCharacter(selectedLetter) {
    const currentWord = game1.currentWord;

    if (!currentWord.toUpperCase().includes(selectedLetter.toUpperCase())) {
      game1.increaseGuessesCounter();
      game1.handleWrongGuesses();
    }
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i].toUpperCase() === selectedLetter.toUpperCase()) {
        const charElements = document.getElementsByClassName("character");
        charElements[i].innerHTML = currentWord[i];
      }
    }
  }
  increaseGuessesCounter() {
    this.wrongGuessesCounter++;
  }
  showGameOver(message) {
    overlay.style.display = "flex";
    gameoverMessage.innerText = message;
    if (message === "Failed!") {
      const correctWord = document.getElementById("correct-answer");
      correctWord.innerText = "The correct answer was " + this.currentWord;
    }
  }

  handleWrongGuesses() {
    const counter = game1.wrongGuessesCounter;

    switch (counter) {
      case 1:
        const verticalLine = document.getElementById("vertical-line");
        verticalLine.style.display = "block";
        break;
      case 2:
        const horizontalLine = document.getElementById("horizontal-line");
        horizontalLine.style.display = "block";
        break;
      case 3:
        const shortVerticalLine = document.getElementById(
          "short-vertical-line"
        );
        shortVerticalLine.style.display = "block";

        break;
      case 4:
        const circle = document.getElementById("circle");
        circle.style.display = "block";

        break;
      case 5:
        const body = document.getElementById("body");
        body.style.display = "block";

        break;
      case 6:
        const rightArm = document.getElementById("right-arm");
        rightArm.style.display = "block";

        break;
      case 7:
        const leftArm = document.getElementById("left-arm");
        leftArm.style.display = "block";

        break;
      case 8:
        const rightLeg = document.getElementById("right-leg");
        rightLeg.style.display = "block";

        break;
      case 9:
        const leftLeg = document.getElementById("left-leg");
        leftLeg.style.display = "block";

        break;
      case 10:
        this.showGameOver("Failed!");
        break;
      default:
    }
  }
}

let game1;

const letterButtons = document.querySelectorAll("#letter-button");
letterButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const selectedLetter = e.target.textContent;

    game1.displayIncludedCharacter(selectedLetter);
    button.setAttribute("disabled", "true");
    if (game1.isWordCompleted() === true) {
      game1.showGameOver("You did it!");
      gameoverMessage.style.color = "green";
    }
  })
);

document.addEventListener("keydown", (e) => {
  const selectedLetter = e.code.slice(3);

  game1.displayIncludedCharacter(selectedLetter);
  letterButtons.forEach((button) => {
    if (button.innerHTML === selectedLetter) {
      button.setAttribute("disabled", "true");
    }
  });

  if (game1.isWordCompleted() === true) {
    game1.showGameOver("You did it!");

    gameoverMessage.style.color = "green";
  }
});

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
  game1.restartGame();
});

const playButton = document.getElementById("start");
playButton.addEventListener("click", () => {
  game1 = new Game();
});

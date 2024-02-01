function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length - 1);
}

class Game {
  constructor() {
    this.currentWord = this.getWord();
    this.displayHiddenWord();
    this.wrongGuessesCounter = 0;
  }

  displayHiddenWord() {
    for (let i = 0; i < this.currentWord?.length; i++) {
      const hiddenChar = document.createElement("p");
      //   const char = document.createElement("p");
      const wordContainer = document.getElementById("word");
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

    this.wrongGuessesCounter = 0;
    const overlay = document.getElementById("gameover-overlay");

    overlay.style.display = "none";

    const wordContainer = document.getElementById("word");
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
    const overlay = document.getElementById("gameover-overlay");
    const overlayMessage = document.getElementById("gameover-message");
    overlay.style.display = "flex";
    overlayMessage.innerText = message;
    if (message === "Failed!") {
      const correctWord = document.getElementById("correct-answer");
      correctWord.innerText = "The correct answer was " + this.currentWord;
    }
  }

  handleWrongGuesses() {
    const hangmanContainer = document.getElementById("hangman");
    const counter = game1.wrongGuessesCounter;

    switch (counter) {
      case 1:
        const verticalLine = document.createElement("div");
        verticalLine.style.height = "100%";
        verticalLine.style.width = "3px";
        verticalLine.style.backgroundColor = "black";
        verticalLine.classList.add("hangman-part");

        hangmanContainer.appendChild(verticalLine);

        break;
      case 2:
        const horizontalLine = document.createElement("div");
        horizontalLine.style.height = "3px";
        horizontalLine.style.width = "80%";
        horizontalLine.style.backgroundColor = "black";
        horizontalLine.style.position = "absolute";
        horizontalLine.style.top = "0";
        horizontalLine.classList.add("hangman-part");

        hangmanContainer.appendChild(horizontalLine);
        break;
      case 3:
        const shortVerticalLine = document.createElement("div");
        shortVerticalLine.style.height = "25%";
        shortVerticalLine.style.width = "3px";
        shortVerticalLine.style.backgroundColor = "black";
        shortVerticalLine.style.position = "absolute";
        shortVerticalLine.style.right = "20%";
        shortVerticalLine.style.top = "0";
        shortVerticalLine.classList.add("hangman-part");

        hangmanContainer.appendChild(shortVerticalLine);
        break;
      case 4:
        const head = document.createElement("div");
        head.style.height = "20%";
        head.style.width = "20%";
        head.style.aspectRatio = "1/1";
        head.style.border = "1px solid black";
        head.style.borderRadius = "100%";
        head.style.position = "absolute";
        head.style.right = "12%";
        head.style.top = "25%";
        head.classList.add("hangman-part");

        hangmanContainer.appendChild(head);
        break;
      case 5:
        const body = document.createElement("div");
        body.style.height = "30%";
        body.style.width = "3px";
        body.style.backgroundColor = "black";
        body.style.position = "absolute";
        body.style.right = "20%";
        body.style.top = "45%";
        body.classList.add("hangman-part");

        hangmanContainer.appendChild(body);
        break;
      case 6:
        const rightArm = document.createElement("div");
        rightArm.style.height = "3px";
        rightArm.style.width = "15%";
        rightArm.style.backgroundColor = "black";
        rightArm.style.position = "absolute";
        rightArm.style.right = "18%";
        rightArm.style.top = "55%";
        rightArm.style.transform = "rotate(-45deg)";
        rightArm.style.transformOrigin = "top left";
        rightArm.classList.add("hangman-part");

        hangmanContainer.appendChild(rightArm);
        break;
      case 7:
        const leftArm = document.createElement("div");
        leftArm.style.height = "3px";
        leftArm.style.width = "15%";
        leftArm.style.backgroundColor = "black";
        leftArm.style.position = "absolute";
        leftArm.style.right = "5%";
        leftArm.style.top = "45%";
        leftArm.style.transform = "rotate(45deg)";
        leftArm.style.transformOrigin = "top left";
        leftArm.classList.add("hangman-part");

        hangmanContainer.appendChild(leftArm);
        break;
      case 8:
        const rightLeg = document.createElement("div");
        rightLeg.style.height = "3px";
        rightLeg.style.width = "15%";
        rightLeg.style.backgroundColor = "black";
        rightLeg.style.position = "absolute";
        rightLeg.style.right = "17%";
        rightLeg.style.top = "83%";
        rightLeg.style.transform = "rotate(-45deg)";
        rightLeg.style.transformOrigin = "top left";
        rightLeg.classList.add("hangman-part");

        hangmanContainer.appendChild(rightLeg);
        break;
      case 9:
        const leftLeg = document.createElement("div");
        leftLeg.style.height = "3px";
        leftLeg.style.width = "15%";
        leftLeg.style.backgroundColor = "black";
        leftLeg.style.position = "absolute";
        leftLeg.style.right = "5%";
        leftLeg.style.top = "73%";
        leftLeg.style.transform = "rotate(45deg)";
        leftLeg.style.transformOrigin = "top left";
        leftLeg.classList.add("hangman-part");

        hangmanContainer.appendChild(leftLeg);
        break;
      case 10:
        this.showGameOver("Failed!");
        break;
      default:
    }
  }
}

const game1 = new Game();

const letterButtons = document.querySelectorAll("#letter-button");
letterButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const selectedLetter = e.target.textContent;

    game1.displayIncludedCharacter(selectedLetter);
    // button.setAttribute("disabled", "true");
    if (game1.isWordCompleted() === true) {
      game1.showGameOver("You did it!");
      const gameoverMessage = document.getElementById("gameover-message");
      gameoverMessage.style.color = "green";
    }
  })
);

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
  game1.restartGame();
});

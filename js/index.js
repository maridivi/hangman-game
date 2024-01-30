function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length - 1);
}

class Game {
  constructor() {
    this.currentWord = difficultWords[getRandomIndex(difficultWords)];
    this.displayHiddenWord();
    this.wrongGuessesCounter = 0;
  }
  displayHiddenWord() {
    for (let i = 0; i < this.currentWord.length; i++) {
      const hiddenChar = document.createElement("p");
      //   const char = document.createElement("p");
      const wordContainer = document.getElementById("word");
      hiddenChar.innerText = "_";

      hiddenChar.classList.add("character");
      wordContainer.appendChild(hiddenChar);
    }
  }

  displayIncludedCharacter(selectedLetter) {
    const currentWord = game1.currentWord;

    if (!currentWord.toUpperCase().includes(selectedLetter.toUpperCase())) {
      game1.increaseGuessesCounter();
      game1.displayHangmanParts();
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
    console.log(this.wrongGuessesCounter);
  }
  displayHangmanParts() {
    const hangmanContainer = document.getElementById("hangman");
    const counter = game1.wrongGuessesCounter;

    switch (counter) {
      case 1:
        const verticalLine = document.createElement("div");
        verticalLine.style.height = "100%";
        verticalLine.style.width = "3px";
        verticalLine.style.backgroundColor = "black";

        hangmanContainer.appendChild(verticalLine);
        console.log(verticalLine);

        break;
      case 2:
        const horizontalLine = document.createElement("div");
        horizontalLine.style.height = "3px";
        horizontalLine.style.width = "80%";
        horizontalLine.style.backgroundColor = "black";
        horizontalLine.style.position = "absolute";
        horizontalLine.style.top = "0";

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

        hangmanContainer.appendChild(shortVerticalLine);
        break;
      case 4:
        const head = document.createElement("div");
        head.style.height = "30px";
        head.style.width = "30px";
        head.style.border = "1px solid black";
        head.style.borderRadius = "100%";
        head.style.position = "absolute";
        head.style.right = "13%";
        head.style.top = "25%";

        hangmanContainer.appendChild(head);
        break;
      default:
      // code block
    }
  }
}

const game1 = new Game();
console.log(game1.currentWord);

const letterButtons = document.querySelectorAll("#letter-button");
letterButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const selectedLetter = e.target.textContent;

    game1.displayIncludedCharacter(selectedLetter);
  })
);

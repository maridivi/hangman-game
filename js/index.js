function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length - 1);
}

class Game {
  constructor() {
    this.currentWord = difficultWords[getRandomIndex(difficultWords)];
    this.displayHiddenWord();
  }
  displayHiddenWord() {
    for (let i = 0; i < this.currentWord.length; i++) {
      const hiddenChar = document.createElement("p");
      const wordContainer = document.getElementById("word");
      hiddenChar.innerText = "_";
      wordContainer.appendChild(hiddenChar);
    }
  }
}

const game1 = new Game();

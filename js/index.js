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
      //   const char = document.createElement("p");
      const wordContainer = document.getElementById("word");
      hiddenChar.innerText = "_";
      //   char.innerText = this.currentWord[i];
      //   char.style.display = "none";
      hiddenChar.classList.add("character");
      wordContainer.appendChild(hiddenChar);
      //   wordContainer.appendChild(char);
    }
  }

  displayIncludedCharacter(selectedLetter) {
    if (
      game1.currentWord.toUpperCase().includes(selectedLetter.toUpperCase())
    ) {
      const charElements = document.getElementsByClassName("character");
      console.log(charElements);
    }
  }
}

const game1 = new Game();
console.log(game1.currentWord);

const letterButtons = document.querySelectorAll("#letter-button");
letterButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const selectedLetter = e.target.textContent;
    // if (game1.currentWord.includes(selectedLetter)) {
    //   console.log(selectedLetter);
    //   console.log(game1.currentWord);
    // }
    game1.displayIncludedCharacter(selectedLetter);
  })
);

const ai = () => {
  switch (Math.floor(Math.random() * 10 % 3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
};

let scores = {
  you: {
    el: document.querySelector("#your-score"),
    score: 0
  },
  computer: {
    el: document.querySelector("#computer-score"),
    score: 0
  }
}

let result = {
  el: document.createElement("p"),
  youWin() {
    this.el.innerHTML = "You Won!";
    scores.you.el.innerHTML = ++scores.you.score;
  },
  computerWin() {
    this.el.innerHTML = "Computer Won!";
    scores.computer.el.innerHTML = ++scores.computer.score;
  },
  draw() {
    this.el.innerHTML = "It's a Draw.";
  },
};

const submitButton = document.querySelector("#submit");
const display = document.querySelector("#display");

const playRockPaperScissors = (you, computer) => {
  if (you == computer) {
    result.draw();
  } else {
    switch (you) {
      case "rock":
        computer == "scissor" ? result.youWin() : result.computerWin();
        break;
      case "paper":
        computer == "rock" ? result.youWin() : result.computerWin();
        break;
      case "scissor":
        computer == "paper" ? result.youWin() : result.computerWin();
        break;
    }
  }
}

submitButton.onclick = function () {
  let aiAnswer = ai();
  let inputs = document.querySelectorAll('input[name="choice"]');
  for (const input of inputs) {
    if (input.checked) {
      let yourAnswer = input.value;
      playRockPaperScissors(yourAnswer, aiAnswer);
      display.appendChild(result.el);
      break;
    }
  }
}
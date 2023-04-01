
const cells = document.querySelectorAll("td");
let player = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (this.textContent === "") {
      this.textContent = player;
      checkWinner();
      player = player === "X" ? "O" : "X";
    }
  });
}

function checkWinner() {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (
      cells[a].textContent === player &&
      cells[b].textContent === player &&
      cells[c].textContent === player
    ) {
      alert(player + " wins!");
      resetGame();
    }
  }
}

function resetGame()
{
  addEventListener("reset") = resetGame();
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}





const squares = document.querySelectorAll(".square");
const restartButton = document.querySelector("#restart");
const scoreX = document.querySelector("#scoreX");
const scoreO = document.querySelector("#scoreO");
let currentPlayer = "X";

for (const square of squares) {
  square.addEventListener("click", function(event) {
    if (!event.target.textContent) {
      event.target.textContent = currentPlayer;

      if (checkForWin(currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        incrementScore(currentPlayer);
        return;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
}

restartButton.addEventListener("click", function() {
  for (const square of squares) {
    square.textContent = "";
  }
  currentPlayer = "X";
});

function incrementScore(player) {
  if (player === "X") {
    scoreX.textContent = parseInt(scoreX.textContent) + 1;
  } else {
    scoreO.textContent = parseInt(scoreO.textContent) + 1;
  }
}

function checkForWin(player) {
  // Check rows
  for (let i = 0; i < 9; i += 3)
  {
    if (squares[i].textContent === player &&
        squares[i+1].textContent === player &&
        squares [i + 2].textContent === player)
        {
            return true;
        }

  }
  //Check columns
  for (let i = 0; i < 3; i ++)
  {
    if (squares[i].textContent === player &&
        squares[i+3].textContent === player &&
        squares [i + 6].textContent === player)
        {
            return true;
        }

  }
  //Check diagonals
  if (squares[0].textContent === player &&
        squares[4].textContent === player &&
        squares [8].textContent === player)
        {
            return true;
        }
  if (squares[2].textContent === player &&
        squares[4].textContent === player &&
        squares [6].textContent === player)
        {
            return true;
        }

  }




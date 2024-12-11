const intro = new Audio("sounds/start.ogg"); //../myassets/
const settinx = new Audio("sounds/add.ogg"); //../myassets/
const settino = new Audio("sounds/remove.ogg"); //../myassets/
const wins = new Audio("sounds/popup.ogg"); //../myassets/
const drawsound = new Audio("sounds/wrong.ogg"); //../myassets/
/******************************************************/
const spots = document.querySelectorAll(".spot");
const box = document.querySelectorAll(".box")[0];
const alert = document.querySelector("#alert");
const restart = document.querySelector("#restart");
const messageElement = document.querySelector("#message");
const TURN = document.querySelector("#turn");
const player_1 = document.querySelector("#firstplayer > span");
const player_2 = document.querySelector("#secondplayer > span");
var CurrentClass;
var OnePlayer = true;
var FirstPlayer, SecondPlayer;
var clickallow = true;

const WIN_COMPATATION = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
var CircleTurn;

function startgame() {
  CircleTurn = selectRandomValue([true, false]);
  FirstPlayer = CircleTurn ? "O" : "X";
  SecondPlayer = CircleTurn ? "X" : "O";
  player_1.textContent = FirstPlayer;
  player_2.textContent = SecondPlayer;
  if (OnePlayer) {
    ComputerTurn = SecondPlayer;
  }
  TURN.textContent = CircleTurn ? "O's Turn" : "X's Turn";
  intro.play();
  alert.classList.remove("show");
  spots.forEach((el) => {
    el.classList.remove("xsign");
    el.classList.remove("circle");
    el.removeEventListener("click", handleSpot);
    el.addEventListener("click", handleSpot);
  });
  setboxHover();
}

function handleSpot(e) {
  if (
    e.target.classList.contains("xsign") ||
    e.target.classList.contains("circle")
  ) {
    return;
  }
  if (clickallow) {
    //set mark
    CurrentClass = CircleTurn ? "circle" : "xsign";

    setMark(e.target, CurrentClass);

    //check winner
    if (CheckWinner(CurrentClass)) {
      endGame(false);
    } else if (isDraw()) {
      endGame(true);
    } else {
      changeTurn();
      setboxHover();

      var emptyspost = document.querySelectorAll(".spot:not(.circle , .xsign)");

      if (OnePlayer && player_2.parentElement.classList.contains("active")) {
        clickallow = false;
        setTimeout(() => {
          clickallow = true;
          selectRandomValue(emptyspost).click();
        }, 2000);
      }
    }
  } else {
    console.log("not allow");
  }
}
function setMark(spot, CurrentClass) {
  if (CircleTurn) {
    spot.classList.add(CurrentClass);
    settino.play();
  } else {
    spot.classList.add(CurrentClass);
    settinx.play();
  }
}
function CheckWinner(CurrentClass) {
  return WIN_COMPATATION.some((compatation) => {
    return compatation.every((index) => {
      return spots[index - 1].classList.contains(CurrentClass);
    });
  });
}
function isDraw() {
  return [...spots].every((spot) => {
    return (
      spot.classList.contains("xsign") || spot.classList.contains("circle")
    );
  });
}
function endGame(draw) {
  if (draw) {
    messageElement.innerText = "Draw !";
    drawsound.play();
  } else {
    messageElement.innerText = CircleTurn ? `O's Wins` : `X's Wins`;
    wins.play();
  }

  alert.classList.add("show");
}
function changeTurn() {
  CircleTurn = !CircleTurn;
  player_1.parentElement.classList.remove("active");
  player_2.parentElement.classList.remove("active");

  if (CircleTurn) {
    TURN.textContent = "O's Turn";
    if (FirstPlayer == "O") {
      player_1.parentElement.classList.add("active");
    } else {
      player_2.parentElement.classList.add("active");
    }
  } else {
    TURN.textContent = "X's Turn";
    if (FirstPlayer == "X") {
      player_1.parentElement.classList.add("active");
    } else {
      player_2.parentElement.classList.add("active");
    }
  }
}

function setboxHover() {
  box.classList.remove("circleturn");
  box.classList.remove("xturn");
  if (CircleTurn) {
    box.classList.add("circleturn");
  } else {
    box.classList.add("xturn");
  }
}

restart.addEventListener("click", () => {
  startgame();
});

function selectRandomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function hidehome() {
  document.querySelectorAll(".homepage")[0].classList.remove("show");
}
function showhome() {
  document.querySelectorAll(".homepage")[0].classList.add("show");
}

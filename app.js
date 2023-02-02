// Create a var for the content
// Creating a grid 16x16
// Firstly make a small div
// Create a loop that puts the divs into the container

// Main Variables
const content = document.querySelector(".content");
const board = document.querySelector(".board");
let rainbowActive = false;
let color = "black";

// Color Picker Variables
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const black = document.querySelector(".black");
const rainbow = document.querySelector(".rainbow");

// Color Picker Clicked
red.addEventListener("click", function () {
  color = "red";
  rainbowActive = false;
});

green.addEventListener("click", function () {
  color = "green";
  rainbowActive = false;
});

yellow.addEventListener("click", function () {
  color = "yellow";
  rainbowActive = false;
});

black.addEventListener("click", function () {
  color = "black";
  rainbowActive = false;
});

rainbow.addEventListener("click", function () {
  rainbowActive = true;
  console.log(rainbowActive);
});

// Others Button + Functionality
const erase = document.querySelector(".eraser-button");
const clear = document.querySelector(".clear-button");

// Erase Function
function eraseFunction() {
  color = "white";
  rainbowActive = false;
}

erase.addEventListener("click", function () {
  eraseFunction();
});

// Clear All Function
function clearAllFunction() {
  let allDivs = document.querySelectorAll(".board-item");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].style.background = "white";
  }
}

clear.addEventListener("click", function () {
  clearAllFunction();
});

// Grid System
board.style.gridTemplateColumns = "repeat(16 , 1fr)";
board.style.gridTemplateRows = "repeat(16 , 1fr)";

// Function to change when hover
function changeWhenHover(item) {
  if (rainbowActive == true) {
    item.style.background =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else {
    item.style.background = color;
  }
}

// Adding The Divs
for (let i = 0; i < 256; i++) {
  // Div System
  const div = document.createElement("div");
  div.style.background = "white";
  div.classList.add("board-item");
  div.addEventListener("mouseenter", function () {
    changeWhenHover(div);
  });

  // Adding The Div To The Board
  board.insertAdjacentElement("beforeend", div);
}

// Grid Size
const small = document.querySelector("#small");
const medium = document.querySelector("#medium");
const large = document.querySelector("#large");

// Small button function
function changeToSmallGrid() {
  // Declaring Variables
  let board = document.querySelector(".board");
  let allItems = document.querySelectorAll(".board-item");

  // Changing the board grid
  board.style.gridTemplateColumns = "repeat(8 , 1fr)";
  board.style.gridTemplateRows = "repeat(8 , 1fr)";

  // Removing the items
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].remove();
  }

  for (let i = 0; i < 64; i++) {
    // Div System
    const div = document.createElement("div");
    div.style.background = "white";
    div.classList.add("board-item");
    div.addEventListener("mouseenter", function () {
      changeWhenHover(div);
    });

    // Adding The Div To The Board
    board.insertAdjacentElement("beforeend", div);
  }
}

// Medium button function
function changeToMediumGrid() {
  // Declaring Variables
  let board = document.querySelector(".board");
  let allItems = document.querySelectorAll(".board-item");

  // Changing the board grid
  board.style.gridTemplateColumns = "repeat(16 , 1fr)";
  board.style.gridTemplateRows = "repeat(16 , 1fr)";

  // Removing the items
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].remove();
  }

  for (let i = 0; i < 256; i++) {
    // Div System
    const div = document.createElement("div");
    div.style.background = "white";
    div.classList.add("board-item");
    div.addEventListener("mouseenter", function () {
      changeWhenHover(div);
    });

    // Adding The Div To The Board
    board.insertAdjacentElement("beforeend", div);
  }
}

// Large button function
function changeToLargeGrid() {
  // Declaring Variables
  let board = document.querySelector(".board");
  let allItems = document.querySelectorAll(".board-item");

  // Changing the board grid
  board.style.gridTemplateColumns = "repeat(32 , 1fr)";
  board.style.gridTemplateRows = "repeat(32 , 1fr)";

  // Removing the items
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].remove();
  }

  for (let i = 0; i < 1024; i++) {
    // Div System
    const div = document.createElement("div");
    div.style.background = "white";
    div.classList.add("board-item");
    div.addEventListener("mouseenter", function () {
      changeWhenHover(div);
    });

    // Adding The Div To The Board
    board.insertAdjacentElement("beforeend", div);
  }
}

// Button event listener
small.addEventListener("click", changeToSmallGrid);
medium.addEventListener("click", changeToMediumGrid);
large.addEventListener("click", changeToLargeGrid);

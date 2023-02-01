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
const clear = document.querySelector(".clear");

// Erase Function
function eraseFunction() {
  color = "white";
  rainbowActive = false;
}

erase.addEventListener("click", function () {
  eraseFunction();
});

// Clear All Function

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
  div.addEventListener("mouseenter", function () {
    changeWhenHover(div);
  });

  // Adding The Div To The Board
  board.insertAdjacentElement("beforeend", div);
}

// Create a var for the content
// Creating a grid 16x16
// Firstly make a small div
// Create a loop that puts the divs into the container

// Main Variables
const content = document.querySelector(".content");
const board = document.querySelector(".board");
let color = "black";

// Color Picker Variables
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const black = document.querySelector(".black");

// Color Picker Clicked
red.addEventListener("click", function () {
  color = "red";
});

green.addEventListener("click", function () {
  color = "green";
});

yellow.addEventListener("click", function () {
  color = "yellow";
});

black.addEventListener("click", function () {
  color = "black";
});

// Grid System
board.style.gridTemplateColumns = "repeat(16 , 1fr)";
board.style.gridTemplateRows = "repeat(16 , 1fr)";

// Function to change when hover
function changeWhenHover(item) {
  item.style.background = color;
  console.log("hi");
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

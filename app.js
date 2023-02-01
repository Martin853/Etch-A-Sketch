// Create a var for the content
// Creating a grid 16x16
// Firstly make a small div
// Create a loop that puts the divs into the container

// Main Variables
const content = document.querySelector(".content");
const board = document.querySelector(".board");

// Grid System
board.style.gridTemplateColumns = "repeat(16 , 1fr)";
board.style.gridTemplateRows = "repeat(16 , 1fr)";

// Adding The Divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.style.background = "green";
  board.insertAdjacentElement("beforeend", div);
}

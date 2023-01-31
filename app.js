// Create a var for the content
// Creating a grid 16x16
// Firstly make a small div
// Create a loop that puts the divs into the container

// Main Variables
const content = document.querySelector(".content");
const smallDiv = document.createElement("div");

//Small Div Styling
smallDiv.style.width = "24px";
smallDiv.style.height = "24px";
smallDiv.style.border = "red 5px solid";

//Creating the grid
for (let i = 0; i < 16; i++) {
  for (let i = 0; i < 16; i++) {
    content.appendChild(smallDiv.cloneNode(true));
  }
}

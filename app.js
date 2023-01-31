// Create a var for the content
// Creating a grid 16x16
// Firstly make a small div
// Create a loop that puts the divs into the container

const content = document.querySelector(".content");
const smallDiv = document.createElement("div");

smallDiv.style.width = "24px";
smallDiv.style.height = "24px";
smallDiv.style.border = "red 5px solid";

content.appendChild(smallDiv);

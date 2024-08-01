//container for 16x16 grid of square divs
//use js and flexbox to create the grid
let gridContainer = document.querySelector(".grid-container"); 

for (let index = 0; index < 16; index++) {

    let column = document.createElement("div");

    for (let index = 0; index < 16; index++) {
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute("style", "height: 10px; width: 10px;");
        column.appendChild(squareDiv);
     }
     
     gridContainer.appendChild(column);
}


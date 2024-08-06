let gridContainer = document.querySelector(".grid-container"); 
createGrid(16);

//create drawing grid 
function createGrid(resolution) {

    let drawingArea = gridContainer.clientWidth; //width of drawing area

    for (let index = 0; index < resolution; index++) {
    
        let column = document.createElement("div");
    
        for (let index = 0; index < resolution; index++) {
            let squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "child-div");
            squareDiv.style.width = `${drawingArea/resolution}px`;
            squareDiv.style.height = `${drawingArea/resolution}px`;
            
            column.appendChild(squareDiv);
         }
         
         gridContainer.appendChild(column);
    }
    
}


//fills cells of grid on hover
gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.getAttribute("class") == "child-div") {
        e.target.style.backgroundColor = "black";
    }
});


//prompt user to select drawing grid resolution
let promptButton =  document.querySelector("button");
promptButton.addEventListener("click", () => {

    //validate user input
    let userInput;
    do {
        userInput = prompt("Please enter a number between 16 and 100 for the grid resolution: ");
    } while (userInput < 16 || userInput > 100 || isNaN(userInput));
    
    gridContainer.replaceChildren(); //remove old grid

    createGrid(userInput); //create new grid with user specified resolution
})
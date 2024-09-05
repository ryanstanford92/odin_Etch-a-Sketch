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

//Use range slider to set resolution
let resolutionSlider = document.querySelector("input.slider");
let sliderValue = document.querySelector("span.slider-value");
resolutionSlider.value = 16;

resolutionSlider.addEventListener("input", (e) => {
    sliderValue.textContent = e.target.value;

    gridContainer.replaceChildren(); //remove old grid

    createGrid(e.target.value); //create new grid with user specified resolution
});



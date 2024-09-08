let gridContainer = document.querySelector(".grid-container"); 
createGrid(16); //set initial grid resolution

let isFillRainbow = false;

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

//colors the the area in the grid that the mouse is over with random colors
function fillRainbow(event) {

    let red = (Math.floor(Math.random() * 255) +  1);
    let blue = (Math.floor(Math.random() * 255) +  1);
    let green = (Math.floor(Math.random() * 255) +  1);

    if (event.target.getAttribute("class") == "child-div") {
        event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

function updateRainbowStatus() {
    if (isFillRainbow == false) {
        isFillRainbow = true;
    }
    else {
        isFillRainbow = false;
    }
}

let rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => {
    updateRainbowStatus();
})

//fills cells of grid on hover
gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.getAttribute("class") == "child-div") {
        if (isFillRainbow) {
            fillRainbow(e);
        }
        else {
            e.target.style.backgroundColor = selectedColor;
        }
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

//color selection
let colorPicker = document.querySelector("input#color");
let selectedColor = "black";
colorPicker.value = selectedColor;
colorPicker.addEventListener("input", (e) => {
    selectedColor = e.target.value;
    updateRainbowStatus();
});

//clear drawing area
let clearButton = document.querySelector("button#clear");
clearButton.addEventListener("click", () => {
    gridContainer.replaceChildren();
    createGrid(resolutionSlider.value);
});




let gridContainer = document.querySelector(".grid-container"); 

//create 16x16 grid 
for (let index = 0; index < 16; index++) {

    let column = document.createElement("div");

    for (let index = 0; index < 16; index++) {
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute("class", "child-div");
        squareDiv.style.width = "30px";
        squareDiv.style.height = "30px";
        
        column.appendChild(squareDiv);
     }
     
     gridContainer.appendChild(column);
}

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.getAttribute("class") == "child-div") {
        e.target.style.backgroundColor = "black";
    }
});
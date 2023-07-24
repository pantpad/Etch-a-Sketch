console.log('jsload');

const GRID_SIZE = 16;
const gridContainer = document.querySelector('.container');

//help me count the squares
let squareCount = 0;

/*
*   createDiv
    returns a newly created div with all the styles needed
    to look like a square based on the grid size
    -> not implemented the color change
    -> not implemented the hover property
*/
function createDiv(){
    const newDiv = document.createElement('div');
    squareCount++; //testing purposes
    //css properties to apply and make it a square
    newDiv.style.display = "flex";
    newDiv.style.flex = `1 1 calc(${(100/GRID_SIZE)}% - 1px`;
    newDiv.style.aspectRatio = 1/1;
    newDiv.style.backgroundColor = "black";
    newDiv.style.color = "white";
    newDiv.textContent = squareCount; //testing purposes
    
    return newDiv;
}

//create grid using two for cycles
for(let i = 0; i < GRID_SIZE;i++){
    for(let y = 0; y < GRID_SIZE;y++){
        gridContainer.appendChild(createDiv());
    }
}
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
    squareCount++;                      //testing purposes
    
    applySquareCssProperties(newDiv);
    newDiv.addEventListener('mouseover', backgroundColorChange);
    newDiv.addEventListener('mouseleave', (e) => e.target.style.backgroundColor = "black" );
    newDiv.style.color = "white";       //testing purposes
    //newDiv.textContent = squareCount;   //testing purposes
    
    return newDiv;
}

//create grid using two for cycles
for(let i = 0; i < GRID_SIZE;i++){
    for(let y = 0; y < GRID_SIZE;y++){
        gridContainer.appendChild(createDiv());
    }
}
//css properties to apply and make it a square
function applySquareCssProperties(div){
    div.style.display = "flex";
    div.style.flex = `1 1 calc(${(100/GRID_SIZE)}% - 1px`;
    div.style.aspectRatio = 1/1;
    div.style.backgroundColor = "black";    
}

function backgroundColorChange(e){
    e.target.style.backgroundColor = "green";
}
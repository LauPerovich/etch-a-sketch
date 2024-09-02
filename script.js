const createGrid = function(size) {
    
    for (let i = 0; i < (size * size); i++) {
        const screen = document.querySelector("#screen");
        const square = document.createElement("div");
        square.classList.add("square");
        //setGridSize(size);
        square.style.flexBasis = 'calc(500px / '+ size +')';
        screen.appendChild(square);
    }
    hover();
}

const hover = function() {
    const hover = document.querySelectorAll(".square");
    hover.forEach((square => {
        square.addEventListener("mouseenter", (event) => {
        square.style.backgroundColor = randomizeColor();
        });
        false;
    }));
}
/* check how to solve grid size with a function
const setGridSize = function(size) {
    const squareSize = document.querySelectorAll(".square");

    for (let i = 0; i < squareSize.length; i++) {
        squareSize[i].style.flexBasis = "calc(500px / "+ size +")";
    }
}
*/

const randomizeColor = function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

const createSketchPad = function(userSize) {
    if (userSize > 100 || userSize <= 0 || userSize === '' || userSize === null) {
        alert("That's not valid. Enter a valid number");
    } else {
        createGrid(userSize);
    }
}

const resetSketchPad = function() {
    const squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++){
        squares[i].remove();
    }
}

const start = function () {
    const $btnStart = document.querySelector('#btn-start');
    $btnStart.addEventListener("click", () => {
        resetSketchPad();
        let userSize = +prompt(`Enter number of squares per side you want? (Less than 100)`);
        createSketchPad(userSize);
    })

    $btnStart.addEventListener("mouseenter", (event) => {
        $btnStart.style.color = "red";
    })

    $btnStart.addEventListener("mouseleave", (event) => {
        $btnStart.style.color = "black";
    })
}

start();




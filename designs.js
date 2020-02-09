const colorPicker = document.querySelector('#colorPicker');
let color = document.querySelector('#colorPicker').value;
colorPicker.addEventListener('input', function() {
    color = document.querySelector('#colorPicker').value;
});

const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = sizePicker.height.value;
    const width = sizePicker.width.value;
    eraseGrid();
    makeGrid(height, width);
});

/**
 * @description Erases any elements from an existing grid
 */
function eraseGrid() {
    const allRows = document.querySelectorAll('tr');
    for (let i = 0; i < allRows.length; i++) {
        allRows[i].remove();
    }
}

/**
 * @description Creates a grid a squares that change color on click
 * @param {number} height - number of rows in the grid
 * @param {number} width - number of columns in the grid
 */
function makeGrid(height, width) {

    const pixelCanvas = document.querySelector('#pixelCanvas');
    pixelCanvas.addEventListener('click', function(event){
        if (event.target.nodeName === 'TD') {
            event.target.style.background = color;
        }
    });

    for (let i = 0; i < height; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            const data = document.createElement('td');
            row.appendChild(data);
        }
        pixelCanvas.appendChild(row);
    }

}

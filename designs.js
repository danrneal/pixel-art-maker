/**
 * @description Erases any elements from an existing grid
 */
function eraseGrid() {
  const pixelCanvas = document.querySelector('#pixelCanvas');
  const allRows = pixelCanvas.querySelectorAll('tr');
  allRows.forEach((row) => {
    row.remove();
  });
}

/**
 * @description Creates a grid a squares that change color on click
 * @param {number} height - number of rows in the grid
 * @param {number} width - number of columns in the grid
 * @param {string} color - color to turn the grid square on click
 */
function makeGrid(height, width, color) {
  const pixelCanvas = document.querySelector('#pixelCanvas');
  pixelCanvas.addEventListener('click', (event) => {
    if (event.target.nodeName === 'TD') {
      const td = event.target;
      td.style.background = color;
    }
  });

  [...Array(parseInt(height, 10))].forEach(() => {
    const row = document.createElement('tr');
    [...Array(parseInt(width, 10))].forEach(() => {
      const data = document.createElement('td');
      row.appendChild(data);
    });
    pixelCanvas.appendChild(row);
  });
}

const colorPicker = document.querySelector('#colorPicker');
let color = document.querySelector('#colorPicker').value;
colorPicker.addEventListener('input', () => {
  color = document.querySelector('#colorPicker').value;
});

const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', (event) => {
  event.preventDefault();
  const height = sizePicker.height.value;
  const width = sizePicker.width.value;
  eraseGrid();
  makeGrid(height, width, color);
});

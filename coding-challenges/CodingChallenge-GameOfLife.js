
// transform the cell to its new state.
const transformCell = (cell, cellIndex, currentRow, currentRowIndex, upperRow, lowerRow) => {
  const leftColumnIndex = cellIndex === 0 ? 9 : cellIndex - 1;
  const rightColumnIndex = cellIndex === 9 ? 0 : cellIndex + 1;
  const neighbors = [currentRow[leftColumnIndex], currentRow[rightColumnIndex], upperRow[leftColumnIndex], upperRow[cellIndex], upperRow[rightColumnIndex], lowerRow[leftColumnIndex], lowerRow[cellIndex], lowerRow[rightColumnIndex]];
  let newState = ' - ';
  if (cell === ' o ') {
    if ([2, 3].includes(neighbors.filter((n) => n === ' o ').length)) {
      newState = ' o ';
    }
    return newState;
  }
  if (neighbors.filter((n) => n === ' o ').length === 3) {
    newState = ' o ';
  }
  return newState;
}

// transform the grid to its new state.
const transformGrid = (grid) => {
  const transformedGrid = [];

  grid.forEach((row, rowIndex) => {
    const upperRow = rowIndex - 1 >= 0 ? grid[rowIndex - 1] : grid[grid.length -1];
    const lowerRow = rowIndex + 1 < grid.length ? grid[rowIndex + 1] : grid[0];
    const newRow = [];
    row.forEach((cell, cellIndex) => {
       newRow.push(transformCell(cell, cellIndex, row, rowIndex, upperRow, lowerRow))
    })
    transformedGrid.push(newRow);
  })

  return transformedGrid;
}

// print the grid
const printGrid = (grid) => {
  grid.forEach((row) => console.log(row.join('')));
}

// build the initial grid.
let grid = [];
let startingLiveCells = [[1, 0], [2, 1], [0, 2], [1, 2], [2, 2]];

for (let i = 0; i < 10; i += 1) {
  const row = [];
  for (let iCell = 0; iCell < 10; iCell += 1) {
    if (startingLiveCells.find((liveCell) => liveCell[0] === i && liveCell[1] === iCell)) {
      row.push(' o ')
    } else {
      row.push(' - ');
    }
  }
  grid.push(row);
}

// transform and display the grid 20 times.
printGrid(grid);
for (let i = 1; i < 21; i += 1) {
  console.log(`Time = ${i}`);
  const newGrid = transformGrid(grid);
  grid = newGrid;
  printGrid(newGrid);
  console.log('\n');
}
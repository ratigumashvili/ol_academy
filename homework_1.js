let rows = 4;
let cols = 5;
let initialValue = 1;
let arr = [];

const getTable = (rows, cols) => {
  for (let i = 0; i < rows; i++) {
    arr.push([]);
  }

  let col = 0;
  while (col < cols) {
    col++;

    if (col % 2) {
      for (let row = 0; row < rows; row++) arr[row].push(initialValue++);
    } else {
      for (let row = rows - 1; row > -1; row--) arr[row].push(initialValue++);
    }
  }

  return arr;
};

console.log(getTable(rows, cols));

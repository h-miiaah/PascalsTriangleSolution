/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    var i = 0;
    var j = 0;
    var result = [];

    for (i = 0; i < numRows; i++) {
        result.push(Array(i + 1));

        for (j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1;
              } else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
              }
          }
      }
      return result;
  };


  /*

  - We first initialize the result array with the correct number of rows.
  - Then we loop through the number of rows.
  - For each row, we create an array with the correct number of columns.
  - Then we loop through the number of columns.
  - For each column, we check if it’s the first or last column.
  - If it’s the first or last column, we set the value to 1.
  - Otherwise, we set the value to the sum of the two numbers above it.

  */
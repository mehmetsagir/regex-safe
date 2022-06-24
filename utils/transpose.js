const transpose = (matrix) =>
  matrix[0].map((col, i) => matrix.map((row) => row[i]));

module.exports = transpose;

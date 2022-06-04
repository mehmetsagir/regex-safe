const indexOfMin = (arr) =>
  arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);

module.exports = { indexOfMin };

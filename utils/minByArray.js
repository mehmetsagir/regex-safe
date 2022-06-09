const minByArray = (arr, key) =>
  arr.reduce((a, b) => (a[key] < b[key] ? a : b), {});

module.exports = { minByArray };

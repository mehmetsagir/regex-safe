const maxByArray = (arr, fn) => {
  return arr.reduce((a, b) => (a[fn] >= b[fn] ? a : b), {});
};

module.exports = { maxByArray };

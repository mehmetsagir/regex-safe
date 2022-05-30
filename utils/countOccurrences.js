const countOccurrences = (arr, val) => {
  return arr.reduce(
    (a, v) =>
      String(v).toLowerCase() === String(val).toLowerCase() ? a + 1 : a,
    0
  );
};

module.exports = { countOccurrences };

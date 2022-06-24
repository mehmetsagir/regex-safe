const getConsecutiveArrays = (arr, size) =>
  size > arr.length
    ? []
    : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i));

module.exports = getConsecutiveArrays;

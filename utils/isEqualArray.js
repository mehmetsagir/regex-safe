const isEqualArray = (a, b, typeSensivity = false) => {
  return a.length === b.length && typeSensivity
    ? a.every((v, i) => v === b[i])
    : a.every((v, i) => v == b[i]);
};

module.exports = isEqualArray;

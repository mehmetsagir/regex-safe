const swapItems = (a, i, j) =>
  (a[i] &&
    a[j] && [
      ...a.slice(0, i),
      a[j],
      ...a.slice(i + 1, j),
      a[i],
      ...a.slice(j + 1),
    ]) ||
  a;

module.exports = swapItems;

const getIntersection = (a, ...arr) =>
  [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));

module.exports = { getIntersection };

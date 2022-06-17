const union = (...arr) => [...new Set(arr.flat())];

module.exports = { union };

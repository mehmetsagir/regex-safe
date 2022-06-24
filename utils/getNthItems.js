const getNthItems = (arr, nth) => arr.filter((_, i) => i % nth === nth - 1);

module.exports = getNthItems;

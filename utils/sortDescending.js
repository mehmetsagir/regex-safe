const sortDescending = (arr) => arr.sort((a, b) => a.getTime() > b.getTime());

module.exports = sortDescending;

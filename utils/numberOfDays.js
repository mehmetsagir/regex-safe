const numberOfDays = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 366 : 365;

module.exports = numberOfDays;

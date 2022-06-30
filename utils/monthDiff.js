const monthDiff = (startDate, endDate) =>
  Math.max(
    0,
    (endDate.getFullYear() - startDate.getFullYear()) * 12 -
      startDate.getMonth() +
      endDate.getMonth()
  );

module.exports = monthDiff;

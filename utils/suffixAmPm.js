const suffixAmPm = (h) => {
  const value = Number(h);
  if (value) {
    return `${value % 12 === 0 ? 12 : value % 12}${value < 12 ? "am" : "pm"}`;
  }

  return "Invalid hour";
};

module.exports = suffixAmPm;

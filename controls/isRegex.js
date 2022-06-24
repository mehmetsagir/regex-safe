const isRegex = (value, regex) => {
  if (typeof regex !== "object") return false;
  return regex.test(value) ? true : false;
};

module.exports = isRegex;

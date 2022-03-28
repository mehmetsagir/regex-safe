const isRegex = (value, regex) => {
  if (!regex) return false;
  return regex.test(value) ? true : false;
};

module.exports = { isRegex };

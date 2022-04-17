const isInteger = (value) => {
  const regex = /^-?\d+$/gim;
  return regex.test(value) ? true : false;
};

module.exports = { isInteger };

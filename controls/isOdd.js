const isOdd = (num) => {
  regex = /^-?\d*[13579]$/g;
  return regex.test(num) ? true : false;
};

module.exports = { isOdd };

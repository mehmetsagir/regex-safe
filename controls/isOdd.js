const isOdd = (num) => {
  const regex = /^-?\d*[13579]$/g;
  return regex.test(num) ? true : false;
};

module.exports = isOdd;

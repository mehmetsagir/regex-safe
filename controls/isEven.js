const isEven = (num) => {
  const regex = /^-?\d*[02468]$/g;
  return regex.test(num) ? true : false;
};

module.exports = isEven;

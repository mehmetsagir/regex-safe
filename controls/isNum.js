const isNum = (num) => {
  const regex = /^[1-9]\d*$/g;
  return regex.test(num) ? true : false;
};

module.exports = isNum;

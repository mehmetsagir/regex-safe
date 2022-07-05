const getFirstDate = (d = new Date()) =>
  new Date(d.getFullYear(), d.getMonth(), 1);

module.exports = getFirstDate;

const getLastDate = (d = new Date()) =>
  new Date(d.getFullYear(), d.getMonth() + 1, 0);

module.exports = getLastDate;

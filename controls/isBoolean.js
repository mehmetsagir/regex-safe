const isBoolean = (value) => {
  const regex = /^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/;
  return regex.test(value) ? true : false;
};

module.exports = isBoolean;

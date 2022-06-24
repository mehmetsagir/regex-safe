const isHexColor = (color) => {
  const regex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return regex.test(color) ? true : false;
};

module.exports = isHexColor;

const castArray = (value) => {
  return Array.isArray(value) ? value : [value];
};

module.exports = castArray;

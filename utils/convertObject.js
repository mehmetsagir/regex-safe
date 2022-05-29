const convertObject = (arr, key) => {
  return Object.fromEntries(
    arr.map((item, index) => [item[key] || index, item])
  );
};

module.exports = { convertObject };

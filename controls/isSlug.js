const isSlug = (value) => {
  const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/gim;

  return regex.test(value) ? true : false;
};

module.exports = { isSlug };

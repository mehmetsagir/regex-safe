const removeHTMLTags = (str) => {
  const regex = /<[^>]*>/g;
  return str.replaceAll(regex, "");
};

module.exports = { removeHTMLTags };

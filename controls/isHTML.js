const isHTMLTags = (html) => {
  const regex = /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)$/;
  return regex.test(html) ? true : false;
};

module.exports = { isHTMLTags };

const isImageURL = (fileURL) => {
  const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
  return regex.test(fileURL) ? true : false;
};

module.exports = { isImageURL };

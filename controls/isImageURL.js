const isImageURL = (fileURL) => {
  const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpe?g|gif|png|webp)$/;
  return regex.test(fileURL) ? true : false;
};

module.exports = isImageURL;

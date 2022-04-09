const { isEmail } = require("./controls/isEmail");
const { isNum } = require("./controls/isNum");
const { isName } = require("./controls/isName");
const { isImageURL } = require("./controls/isImageURL");
const { isRegex } = require("./controls/isRegex");
const { isBoolean } = require("./controls/isBoolean");
const { isURL } = require("./controls/isURL");
const { isPassword } = require("./controls/isPassword");
const { isEven } = require("./controls/isEven");
const { isOdd } = require("./controls/isOdd");
const { isSlug } = require("./controls/isSlug");
const { isHexColor } = require("./controls/isHexColor");
const { isInteger } = require("./controls/isInteger");

const { removeHTMLTags } = require("./utils/removeHTMLTags");

module.exports = {
  isEmail,
  isNum,
  isName,
  isImageURL,
  isRegex,
  isBoolean,
  isURL,
  isPassword,
  isEven,
  isOdd,
  removeHTMLTags,
  isSlug,
  isHexColor,
  isInteger,
};

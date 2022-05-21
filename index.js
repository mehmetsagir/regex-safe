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
const { isIPv4 } = require("./controls/isIPv4");
const { isIPv6 } = require("./controls/isIPv6");
const { isHTMLTags } = require("./controls/isHTMLTags");

const { removeHTMLTags } = require("./utils/removeHTMLTags");
const { boldText } = require("./utils/boldText");

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
  isIPv4,
  isIPv6,
  isHTMLTags,
  boldText,
};

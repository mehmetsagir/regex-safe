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
const { isEqualArray } = require("./utils/isEqualArray");
const { castArray } = require("./utils/castArray");
const { convertObject } = require("./utils/convertObject");
const { countOccurrences } = require("./utils/countOccurrences");
const { range } = require("./utils/range");
const { maxByArray } = require("./utils/maxByArray");
const { minByArray } = require("./utils/minByArray");
const { indexOfMin } = require("./utils/indexOfMin");
const { indexOfMax } = require("./utils/indexOfMax");
const { flat } = require("./utils/flat");
const { getConsecutiveArrays } = require("./utils/getConsecutiveArrays");

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
  isEqualArray,
  castArray,
  convertObject,
  countOccurrences,
  range,
  maxByArray,
  minByArray,
  indexOfMin,
  indexOfMax,
  flat,
  getConsecutiveArrays,
};

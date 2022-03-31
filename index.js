const { isEmail } = require("./controls/isEmail");
const { isNum } = require("./controls/isNum");
const { isName } = require("./controls/isName");
const { isImageURL } = require("./controls/isImageURL");
const { isRegex } = require("./controls/isRegex");
const { isBoolean } = require("./controls/isBoolean");
const { isURL } = require("./controls/isURL");
const { isPassword } = require("./controls/isPassword");

module.exports = {
  isEmail,
  isNum,
  isName,
  isImageURL,
  isRegex,
  isBoolean,
  isURL,
  isPassword,
};

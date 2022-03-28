const { isEmail } = require("./controls/isEmail");
const { isNum } = require("./controls/isNum");
const { isName } = require("./controls/isName");
const { isImageURL } = require("./controls/isImageURL");
const { isRegex } = require("./controls/isRegex");

module.exports = { isEmail, isNum, isName, isImageURL, isRegex };

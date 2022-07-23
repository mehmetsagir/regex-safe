const isEmail = require("./controls/isEmail");
const isNum = require("./controls/isNum");
const isName = require("./controls/isName");
const isImageURL = require("./controls/isImageURL");
const isRegex = require("./controls/isRegex");
const isBoolean = require("./controls/isBoolean");
const isURL = require("./controls/isURL");
const isPassword = require("./controls/isPassword");
const isEven = require("./controls/isEven");
const isOdd = require("./controls/isOdd");
const isSlug = require("./controls/isSlug");
const isHexColor = require("./controls/isHexColor");
const isInteger = require("./controls/isInteger");
const isIPv4 = require("./controls/isIPv4");
const isIPv6 = require("./controls/isIPv6");
const isHTMLTags = require("./controls/isHTMLTags");

const removeHTMLTags = require("./utils/removeHTMLTags");
const boldText = require("./utils/boldText");
const isEqualArray = require("./utils/isEqualArray");
const castArray = require("./utils/castArray");
const convertObject = require("./utils/convertObject");
const countOccurrences = require("./utils/countOccurrences");
const range = require("./utils/range");
const maxByArray = require("./utils/maxByArray");
const minByArray = require("./utils/minByArray");
const indexOfMin = require("./utils/indexOfMin");
const indexOfMax = require("./utils/indexOfMax");
const flat = require("./utils/flat");
const getConsecutiveArrays = require("./utils/getConsecutiveArrays");
const getNthItems = require("./utils/getNthItems");
const getIntersection = require("./utils/getIntersection");
const sum = require("./utils/sum");
const unique = require("./utils/unique");
const union = require("./utils/union");
const groupBy = require("./utils/groupBy");
const merge = require("./utils/merge");
const removeFalsy = require("./utils/removeFalsy");
const repeat = require("./utils/repeat");
const shuffle = require("./utils/shuffle");
const sort = require("./utils/sort");
const chunk = require("./utils/chunk");
const transpose = require("./utils/transpose");
const swapItems = require("./utils/swapItems");
const suffixAmPm = require("./utils/suffixAmPm");
const diffDays = require("./utils/diffDays");
const monthDiff = require("./utils/monthDiff");
const formatSeconds = require("./utils/formatSeconds");
const formatLocaleDate = require("./utils/formatLocaleDate");
const dayOfYear = require("./utils/dayOfYear");
const getFirstDate = require("./utils/getFirstDate");
const getLastDate = require("./utils/getLastDate");
const getMonthName = require("./utils/getMonthName");
const daysInMonth = require("./utils/daysInMonth");
const getTimezone = require("./utils/getTimezone");
const tomorrow = require("./utils/tomorrow");
const numberOfDays = require("./utils/numberOfDays");
const getWeekday = require("./utils/getWeekday");
const yesterday = require("./utils/yesterday");
const sortDescending = require("./utils/sortDescending");
const isDescendant = require("./utils/isDescendant");
const hasFocus = require("./utils/hasFocus");
const touchSupported = require("./utils/touchSupported");
const isAtBottom = require("./utils/isAtBottom");
const siblings = require("./utils/siblings");
const getSelectedText = require("./utils/getSelectedText");
const getPosition = require("./utils/getPosition");
const insertAfter = require("./utils/insertAfter");
const insertBefore = require("./utils/insertBefore");
const insertHtmlAfter = require("./utils/insertHtmlAfter");
const insertHtmlBefore = require("./utils/insertHtmlBefore");

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
  getNthItems,
  getIntersection,
  sum,
  unique,
  union,
  groupBy,
  merge,
  removeFalsy,
  repeat,
  shuffle,
  sort,
  chunk,
  transpose,
  swapItems,
  suffixAmPm,
  diffDays,
  monthDiff,
  formatSeconds,
  formatLocaleDate,
  dayOfYear,
  getFirstDate,
  getLastDate,
  getMonthName,
  daysInMonth,
  getTimezone,
  tomorrow,
  numberOfDays,
  getWeekday,
  yesterday,
  sortDescending,
  isDescendant,
  hasFocus,
  touchSupported,
  isAtBottom,
  siblings,
  getSelectedText,
  getPosition,
  insertAfter,
  insertBefore,
  insertHtmlAfter,
  insertHtmlBefore,
};

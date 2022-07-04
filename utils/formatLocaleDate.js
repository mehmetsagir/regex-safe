const formatLocaleDate = (date, locale) =>
  new Intl.DateTimeFormat(locale).format(date);

module.exports = formatLocaleDate;

const format = (date, locale) => new Intl.DateTimeFormat(locale).format(date);

module.exports = format;

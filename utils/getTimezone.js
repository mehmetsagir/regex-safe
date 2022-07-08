const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

module.exports = getTimezone;

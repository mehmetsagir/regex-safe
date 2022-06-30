const formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);

module.exports = formatSeconds;

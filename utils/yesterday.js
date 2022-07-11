const yesterday = () => new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);

module.exports = yesterday;

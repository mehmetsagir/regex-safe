const isAtBottom = () =>
  document.documentElement.clientHeight + window.scrollY >=
  document.documentElement.scrollHeight;

module.exports = isAtBottom;

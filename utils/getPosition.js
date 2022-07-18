const getPosition = (ele) => (
  (r = ele.getBoundingClientRect()),
  { left: r.left + window.scrollX, top: r.top + window.scrollY }
);

module.exports = getPosition;

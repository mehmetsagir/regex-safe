const insertAfter = (ele, anotherEle) =>
  anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);

module.exports = insertAfter;

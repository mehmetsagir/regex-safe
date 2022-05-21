const boldText = (str, boldText, caseSensitivity) => {
  const regex = new RegExp(
    "(\\b" + boldText + "\\w*)",
    caseSensitivity ? "g" : "gi"
  );
  const replacement = "<b>$1</b>";

  return str.replace(regex, replacement);
};

module.exports = { boldText };

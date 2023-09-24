function extract(id) {
  let text = document.getElementById(id).textContent;
  const pattern = /\(([^)]+)\)/g;
  let result = [];

  let matchedWords = pattern.exec(text);
  while (matchedWords) {
    result.push(matchedWords[1]);
    matchedWords = pattern.exec(text);
  }
  return result.join("; ");
}

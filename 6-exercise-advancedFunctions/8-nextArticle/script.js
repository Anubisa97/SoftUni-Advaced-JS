function getArticleGenerator(articles) {
  const output = document.querySelector("#content");
  const articleCopy = articles.slice();

  return function showArticle() {
    if (articleCopy.length > 0) {
      //crete element
      const article = document.createElement("article");
      article.innerHTML = articleCopy.shift();

      // insert element and print article
      output.appendChild(article);
    }
    return showArticle;
  };
}

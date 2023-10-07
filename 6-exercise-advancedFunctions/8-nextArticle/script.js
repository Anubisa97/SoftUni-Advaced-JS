function getArticleGenerator(articles) {
  const bodyRef = document.querySelector("body");
  //const article = document.createElement("article");
  //let printAreaRef = document.getElementById("content");
  // article.appendChild(printAreaRef);
  //   const div = document.querySelector("body div");
  //   bodyRef.insertBefore(article, div);
  let articlesPrintedCount = 0;
  return function () {
    if (articles.length > articlesPrintedCount) {
      //crete element
      const article = document.createElement("article");
      article.innerHTML = `<div id="content"></div>`;

      // insert element
      let firstEl = document.querySelector("#content"); //.children[0];
      bodyRef.insertAdjacentElement("afterbegin", article);

      // print article
      let printAreaRef = document.getElementById("content");
      printAreaRef.textContent = articles[articlesPrintedCount];
      articlesPrintedCount++;
    }
  };
}

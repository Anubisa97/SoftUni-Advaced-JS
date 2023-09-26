function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let searchField = document.getElementById("searchField");
  let table = Array.from(document.querySelectorAll("tbody tr"));

  function onClick() {
    for (const line of table) {
      let searchText = searchField.value;
      let tableData = line.querySelectorAll("td");
      for (const col of tableData) {
        if (col.textContent.includes(searchText)) {
          line.classList.add("select");
          break;
        } else {
          line.classList.remove("select");
        }
      }
    }
    searchField.value = "";
  }
}

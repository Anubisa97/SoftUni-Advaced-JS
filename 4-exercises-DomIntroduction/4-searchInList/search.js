function search() {
  let list = Array.from(document.querySelectorAll("ul li"));
  let input = document.getElementById("searchText").value;
  let matches = document.getElementById("result");
  let counter = 0;

  list.forEach((town) => {
    if (town.textContent.includes(input)) {
      counter++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches.textContent = `${counter} matches found`;
      return;
    }
    town.style.fontWeight = "";
    town.style.textDecoration = "";
  });

  //input = "";
}

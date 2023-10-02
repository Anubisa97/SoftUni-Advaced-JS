function solve() {
  const textarea = Array.from(document.querySelectorAll("textarea"));
  const buttons = Array.from(document.querySelectorAll("button"));
  const tableBody = document.querySelectorAll("tbody")[0];
  const inputArea = textarea[0];
  const output = textarea[1];
  const generateButton = buttons[0];
  const buyButton = buttons[1];

  generateButton.addEventListener("click", generateHandler);
  buyButton.addEventListener("click", buyHandler);

  function generateHandler(e) {
    let input = Array.from(JSON.parse(inputArea.value));
    for (const obj of input) {
      let row = document.createElement("tr");
      row.innerHTML = `<tr>
  <td><img src="${obj.img}"></td>
  <td><p>${obj.name}</p></td>
  <td><p>${obj.price}</p></td>
  <td><p>${obj.decFactor}</p></td>
  <td><input type="checkbox"></td>
  </tr>`;
      tableBody.appendChild(row);
    }
  }

  function buyHandler(e) {
    
  }



}

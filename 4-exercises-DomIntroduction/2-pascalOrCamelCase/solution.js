function solve() {
  
  function toCamelCase(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  function toPascalCase(str) {
    return (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase();
    });
  }

  const text = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  let result = "";

  switch (convention) {
    case "Camel Case":
      result = toCamelCase(text);
      break;
    case "Pascal Case":
      result = toPascalCase(text);
      break;
    default:
      result = "Error!";
      break;
  }

  document.getElementById("result").textContent = result;
}
solve();

function create(words) {
  const input = document.getElementById("content");

  for (const word of words) {
    let div = document.createElement("div");
    let p = document.createElement("p");

    p.style.display = "none";
    p.textContent = `${word}`;

    div.addEventListener("click", eventHandler);
    div.appendChild(p);

    input.appendChild(div);
  }

  function eventHandler(e) {
    const target = e.currentTarget;
    const targetDisplay = target.childNodes[0];
    targetDisplay.style.display = "block";
  }
}

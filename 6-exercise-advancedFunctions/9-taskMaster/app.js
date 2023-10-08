function solve() {
  const taskFieldRef = document.getElementById("task");
  const descriptionFieldRef = document.getElementById("description");
  const dateFieldRef = document.getElementById("date");
  const addButtonRef = document.getElementById("add");

  //sections reference
  const sectionsRef = Array.from(document.querySelectorAll("section"));

  addButtonRef.addEventListener("click", addButton);
  function addButton(el) {
    el.preventDefault();
    const taskFieldValue = taskFieldRef.value;
    const descriptionFieldValue = descriptionFieldRef.value;
    const dateFieldValue = dateFieldRef.value;

    if (!taskFieldValue || !descriptionFieldValue || !dateFieldValue) {
      return;
    }

    createArticle(taskFieldValue, descriptionFieldValue, dateFieldValue);
    taskFieldRef.value = "";
    descriptionFieldRef.value = "";
    dateFieldRef.value = "";
  }
  function createArticle(task, desc, date) {
    const article = document.createElement("article");
    sectionsRef[1].children[1].appendChild(article);
    article.innerHTML = `
        <h3>${task}</h3>
        <p>Description: ${desc}</p>
        <p>Due Date: ${date}</p>
        <div class="flex">
            <button class="green">Start</button>
            <button class="red">Delete</button>
        </div>`;
    const buttons = Array.from(article.querySelectorAll("button"));
    buttons[0].addEventListener("click", moveArticle);
    buttons[1].addEventListener("click", deleteArticle);
  }
  function moveArticle(e) {
    const thisArticle = e.target.parentElement.parentElement;
    sectionsRef[2].children[1].appendChild(thisArticle);
    const buttons = Array.from(thisArticle.querySelectorAll("button"));

    //change events
    buttons[0].removeEventListener("click", moveArticle);
    buttons[0].addEventListener("click", deleteArticle);
    buttons[1].removeEventListener("click", deleteArticle);
    buttons[1].addEventListener("click", finishArticle);

    //change buttons
    buttons[0].className = "red";
    buttons[0].textContent = "Delete";
    buttons[1].className = "orange";
    buttons[1].textContent = "Finish";
  }
  function deleteArticle(e) {
    const thisArticle = e.target.parentElement.parentElement;
    const thisSection = thisArticle.parentElement;
    thisSection.removeChild(thisArticle);
  }

  function finishArticle(e) {
    const thisArticle = e.target.parentElement.parentElement;
    sectionsRef[3].children[1].appendChild(thisArticle);
    const buttonsDiv = thisArticle.querySelector("button").parentElement;
    thisArticle.removeChild(buttonsDiv);
  }
}

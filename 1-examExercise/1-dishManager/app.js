window.addEventListener("load", solve);
function solve() {
  const firstNameInputEl = document.getElementById("first-name");
  const lastNameInputEl = document.getElementById("last-name");
  const ageInputEl = document.getElementById("age");
  const genderSelectEl = document.getElementById("genderSelect");
  const dishDescriptionAreaEl = document.getElementById("task");
  const submitButtonEl = document.getElementById("form-btn");

  const inProgressField = document.getElementById("in-progress");
  const finishedField = document.getElementById("finished");
  const counterEl = document.getElementById("progress-count");
  const clearButton = document.getElementById("clear-btn");

  submitButtonEl.addEventListener("click", clickSubmit);
  clearButton.addEventListener("click", clearFinishedDished);

  function clickSubmit(e) {
    const firstName = firstNameInputEl.value;
    const lastName = lastNameInputEl.value;
    const age = ageInputEl.value;
    const gender = genderSelectEl.value;
    const dishDescription = dishDescriptionAreaEl.value;

    if (!firstName && !lastName && !age && !gender && !dishDescription) {
      return;
    }
    const itemInProgress = document.createElement("li");
    itemInProgress.className = "each-line";

    const articleEl = document.createElement("article");
    itemInProgress.appendChild(articleEl);
    articleEl.innerHTML = `<h4>${firstName} ${lastName}</h4>
      <p>${gender}, ${age}</p>
      <p>Dish description: ${dishDescription}</p>`;

    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editItem);
    articleEl.appendChild(editButton);

    const completeButton = document.createElement("button");
    completeButton.className = "complete-btn";
    completeButton.textContent = "Mark as complete";
    completeButton.addEventListener("click", completeItem);
    articleEl.appendChild(completeButton);

    inProgressField.appendChild(itemInProgress);

    counterEl.textContent++;

    firstNameInputEl.value = "";
    lastNameInputEl.value = "";
    ageInputEl.value = "";
    dishDescriptionAreaEl.value = "";
  }

  function editItem(e) {
    const currentItem = e.target.parentElement.parentElement;

    let [itemFirstName, itemLastName] = currentItem
      .querySelector("h4")
      .textContent.split(" ");
    let [itemGender, itemAge] = currentItem
      .querySelector("p")
      .textContent.split(", ");
    let itemDishDescription = currentItem.querySelectorAll("p")[1].textContent;

    firstNameInputEl.value = itemFirstName;
    lastNameInputEl.value = itemLastName;
    ageInputEl.value = itemAge;
    genderSelectEl.value = itemGender;
    dishDescriptionAreaEl.value = itemDishDescription;

    counterEl.textContent--;
    inProgressField.removeChild(currentItem);
  }

  function completeItem(e) {
    const currentItem = e.target.parentElement.parentElement;
    const currentArticle = e.target.parentElement;
    const buttons = currentItem.querySelectorAll("button");
    const editButton = buttons[0];
    const completeButton = buttons[1];

    currentArticle.removeChild(editButton);
    currentArticle.removeChild(completeButton);

    finishedField.appendChild(currentItem);
    counterEl.textContent--;
  }

  function clearFinishedDished(e) {
    finishedField.innerHTML = "";
  }
}

function validate() {
  const usernameRef = document.getElementById("username");
  const emailRef = document.getElementById("email");
  const passwordRef = document.getElementById("password");
  const confirmPasswordRef = document.getElementById("confirm-password");
  const isCompanyRef = document.getElementById("company");
  const submitButton = document.getElementById("submit");
  const validDivRef = document.getElementById("valid");
  const companyInfoField = document.getElementById("companyInfo");
  const companyNumRef = document.getElementById("companyNumber");

  submitButton.addEventListener("click", submitHandler);
  isCompanyRef.addEventListener("change", isCompanyCheck);

  function submitHandler(ev) {
    ev.preventDefault();

    checkUsername(usernameRef);
    checkPasswords(passwordRef);
    checkPasswords(confirmPasswordRef);
    checkIfPasswordsMatch(passwordRef, confirmPasswordRef);
    checkEmail(emailRef);

    checkValidity(
      checkUsername(usernameRef),
      checkPasswords(passwordRef),
      checkPasswords(confirmPasswordRef),
      checkIfPasswordsMatch(passwordRef, confirmPasswordRef),
      checkEmail(emailRef)
    );

    if (isCompanyRef.checked === true) {
      if (!checkNumber(companyNumRef)) {
        validDivRef.style.display = "none";
      }
    }
  }

  function isCompanyCheck(ev) {
    ev.preventDefault();
    if (ev.target.checked === true) {
      companyInfoField.style.display = "block";
      return true;
    } else {
      companyInfoField.style.display = "none";
      return false;
    }
  }

  function checkUsername(input) {
    if (
      onlyLettersAndNumbers(input.value) &&
      input.value.length >= 3 &&
      input.value.length <= 20
    ) {
      input.style.border = "none";
      return true;
    } else {
      input.style.borderColor = "red";
      return false;
    }

    function onlyLettersAndNumbers(input) {
      return /^[A-Za-z0-9]*$/.test(input.value);
    }
  }

  function checkPasswords(input) {
    if (
      onlyWordNumAndUnderscore(input.value) &&
      input.value.length >= 5 &&
      input.value.length <= 15
    ) {
      //input.style.border = "none";
      return true;
    } else {
      input.style.borderColor = "red";
      return false;
    }
    function onlyWordNumAndUnderscore(input) {
      return /\w+/.test(input.value);
    }
  }

  function checkIfPasswordsMatch(fist, second) {
    if (
      fist.value === second.value &&
      fist.style.borderColor != "red" &&
      second.style.borderColor != "red"
    ) {
      (fist.style.border = "none"), (second.style.border = "none");
      return true;
    } else {
      (fist.style.borderColor = "red"), (second.style.borderColor = "red");

      return false;
    }
  }
  function checkEmail(input) {
    if (checkIfEmailContainsNeededSymbols(input)) {
      input.style.border = "none";
      return true;
    } else {
      input.style.borderColor = "red";
      return false;
    }
    function checkIfEmailContainsNeededSymbols(input) {
      return /.*@.*\..*/.test(input.value);
    }
  }

  function checkNumber(input) {
    let number = Number(input.value);
    if (number >= 1000 && number <= 9999) {
      input.style.border = "none";
      return true;
    } else {
      input.style.borderColor = "red";
      return false;
    }
  }

  function checkValidity(
    username,
    password,
    confirmPassword,
    checkMatch,
    email
  ) {
    if (username && password && confirmPassword && checkMatch && email) {
      validDivRef.style.display = "block";
    } else {
      validDivRef.style.display = "none";
    }
  }
}

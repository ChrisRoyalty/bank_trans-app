function setFormElement(formElement, type, message) {
  let messageElement =formElement.querySelector(".form__message");
  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add('form__message--${type}');
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message".textContent = message);
}
document.addEventListener("DOMContentLoaded", ()=>{
    let logInForm = document.querySelector("#login");
    let createAccountForm = document.querySelector("#createAccount");
    
    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        logInForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document
      .querySelector("#linkLogin")
      .addEventListener("click", e => {
        e.preventDefault();
        logInForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
      });

      logInForm.addEventListener("submit", e => {
          e.preventDefault();

          // Perform your AJAX/Fetch login

          setFormElement(logInForm, "error", "Invalid username/password combination");
      });

      document.querySelectorAll(".form__input").forEach(inputElement => {
          inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
              setInputError(inputElement, "Username must be at least 10 characters in length");
            }
          });
      });
      });

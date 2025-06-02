const form = document.querySelector(".form");
const lname = document.querySelector("#lname");
const fname = document.querySelector("#fname");
const age = document.querySelector("#age");
const formValueContainer = document.querySelector(".form-value-container");
const displayLName = document.querySelector(".display-lname");
const displayFName = document.querySelector(".display-fname");
const displayAge = document.querySelector(".display-age");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayFormValue();
  lname.value = "";
  fname.value = "";
  age.value = "";
});

function displayFormValue() {
  formValueContainer.classList.remove("hide");
  displayLName.innerHTML = lname.value;
  displayFName.innerHTML = fname.value;
  displayAge.innerHTML = age.value;
}

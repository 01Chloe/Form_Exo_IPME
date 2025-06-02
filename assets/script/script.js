const form = document.querySelector(".form");
const lname = document.querySelector("#lname");
const fname = document.querySelector("#fname");
const formValueContainer = document.querySelector(".form-value-container");
const lastName = document.querySelector(".lname");
const firstName = document.querySelector(".fname");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayFormValue();
  lname.value = "";
  fname.value = "";
});

function displayFormValue() {
  lastName.innerHTML = lname.value;
  firstName.innerHTML = fname.value;
}

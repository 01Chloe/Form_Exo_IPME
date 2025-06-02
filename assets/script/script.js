const form = document.querySelector(".form");
const lname = document.querySelector("#lname");
const fname = document.querySelector("#fname");
const age = document.querySelector("#age");
const gender = document.getElementsByName("gender");
const job = document.querySelector("#job");
const region = document.querySelector("#region");
const formValueContainer = document.querySelector(".form-value-container");
const displayLName = document.querySelector(".display-lname");
const displayFName = document.querySelector(".display-fname");
const displayAge = document.querySelector(".display-age");
const displayGender = document.querySelector(".display-gender");
const displayJob = document.querySelector(".display-job");
const displayRegion = document.querySelector(".display-region");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayFormValue();
  lname.value = "";
  fname.value = "";
  age.value = "";
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) gender[i].checked = false;
  }
  job.value = "";
  region.value = "";
});

function displayFormValue() {
  formValueContainer.classList.remove("hide");
  displayLName.innerHTML = lname.value;
  displayFName.innerHTML = fname.value;
  displayAge.innerHTML = age.value;
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) displayGender.innerHTML = gender[i].value;
  }
  displayJob.innerHTML = job.value;
  displayRegion.innerHTML = region.value;
}

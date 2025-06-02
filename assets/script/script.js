const form = document.querySelector(".form");
const lname = document.querySelector("#lname");
const fname = document.querySelector("#fname");
const age = document.querySelector("#age");
const gender = document.querySelectorAll(".gender");
const job = document.querySelector("#job");
const region = document.querySelector("#region");
const hobbies = document.querySelectorAll(".hobbies");
const socialLink = document.querySelector("#social");
const formValueContainer = document.querySelector(".form-value-container");
const displayLName = document.querySelector(".display-lname");
const displayFName = document.querySelector(".display-fname");
const displayAge = document.querySelector(".display-age");
const displayGender = document.querySelector(".display-gender");
const displayJob = document.querySelector(".display-job");
const displayRegion = document.querySelector(".display-region");
const displayHobbies = document.querySelector(".display-hobbies");
let userHobbies = [];
const displayLink = document.querySelector(".display-social-link");

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
  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) hobbies[i].checked = false;
  }
  socialLink.value = "";
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
  for (i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      userHobbies.push(hobbies[i].value);
    }
  }
  for (let i = 0; i < userHobbies.length; i++) {
    if (i === 0) {
      displayHobbies.innerHTML = userHobbies[i];
    } else {
      displayHobbies.innerHTML += ", " + userHobbies[i];
    }
  }
  displayLink.innerHTML = socialLink.value;
  displayLink.href = socialLink.value;
}

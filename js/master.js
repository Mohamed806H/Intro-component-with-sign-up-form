//selectores
const form = document.getElementsByClassName('form')
const firname = document.querySelector('#frname')
const lname = document.querySelector('#lname')
const email = document.querySelector('#Email')
const password = document.querySelector('#Password')
//event lesitner
document.forms[0].onsubmit = 
//functions
function validateForm(e) {
  if (firname.value.trim() === "") {
    document.querySelector(".firstname-error").style.display = "block";
    document.querySelector(".error-icon.first").style.display = "block";
    e.preventDefault();
  } else {
    document.querySelector(".firstname-error").style.display = "none";
    document.querySelector(".error-icon.first").style.display = "none";
  };
  if (lname.value.trim() === "") {
    document.querySelector(".lastname-error").style.display = "block";
    document.querySelector(".error-icon.last").style.display = "block";
    e.preventDefault();
  } else {
    document.querySelector(".lastname-error").style.display = "none";
    document.querySelector(".error-icon.last").style.display = "none";
  };
  if (email.value.trim() === "") {
    document.querySelector(".email-error").style.display = "block";
    document.querySelector(".error-icon.email").style.display = "block";
    e.preventDefault();
  } else {
    document.querySelector(".email-error").style.display = "none";
    document.querySelector(".error-icon.email").style.display = "none";
  }
  if (password.value.trim() === "") {
    document.querySelector(".password-error").style.display = "block";
    document.querySelector(".error-icon.password").style.display = "block";
    e.preventDefault();
  } else {
    document.querySelector(".password-error").style.display = "none";
    document.querySelector(".error-icon.password").style.display = "none";
  }
}
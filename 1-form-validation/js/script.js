"use strict";

const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const submit = document.querySelector(".submit");

// MESSAGES
const usernameMessage = document.querySelector(".user-msg");
const emailMessage = document.querySelector(".email-msg");
const password1Message = document.querySelector(".password1-msg");
const password2Message = document.querySelector(".password2-msg");

// selecting my submit button and preventing default loading on the event
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // check conditions to see if all the values are empty
  if (
    username.value === "" &&
    email.value === "" &&
    password1.value === "" &&
    password2.value === ""
  ) {
    alert("Please fill all input fields");
  }

  if (username.value === "") {
    showMessage(usernameMessage, "Please provide your name", "red");
  } else {
    showMessage(usernameMessage, "Name saved", "green");
  }

  if (email.value === "") {
    showMessage(emailMessage, "Please provide your email", "red");
  } else {
    showMessage(emailMessage, "Got your email", "green");
  }

  if (password1.value === "") {
    showMessage(password1Message, "Please provide your password", "red");
  } else {
    showMessage(password1Message, "Valid password", "green");
  }

  if (password2.value === "") {
    showMessage(password2Message, "Confirm your password", "red");
  } else if (password1.value !== password2.value) {
    showMessage(password2Message, "Password do not match", "yellow");
  } else {
    showMessage(password2Message, "Valid password!", "green");
  }
});

const showMessage = function (element, msg, color) {
  element.style.visibility = "visible";
  element.textContent = msg;
  element.style.color = color;
  element.previousElementSibling.style.border = `2px solid ${color}`;
};

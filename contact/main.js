// sign up
var signupButton = document.querySelector(".signup");
var signupForm = document.querySelector(".sign-up-wrapper .modal");
var loginButton = document.querySelector(".login");
var loginForm = document.querySelector(".sign-in-wrapper .modal");
var outButton = document.querySelectorAll(".out");
var switchButton = document.querySelectorAll(".auth-form__switch-btn");

signupButton.onclick = function (e) {
  signupForm.style.display = "block";
};

loginButton.onclick = function (e) {
  loginForm.style.display = "block";
};

for (value of outButton) {
  value.onclick = function (e) {
    signupForm.style.display = "none";
    loginForm.style.display = "none";
  };
}

for (value of switchButton) {
  value.onclick = function (e) {
    signupForm.style.display = "block";
    loginForm.style.display = "block";
  };
}

// contact
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var commentInput = document.querySelector("#comment");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const commentError = document.querySelector("#comment-error");

var sendContactButton = document.querySelector(".comment-form-controls .btn");

const errorMessage = {
  name: "Vui lòng nhập tên!",
  email: "Vui lòng nhập email!",
  comment: "Vui lòng viết bình luận!",
};

sendContactButton.onclick = function (e) {
  const formData = getResult();
  const validateResult = validateInput(formData);
  if (validateResult.length > 0) {
    const errors = validateResult.reduce((obj, { key, value }) => {
      obj[key] = value;
      return obj;
    }, {});
    bindingErrorToUI(errors);
    return;
  }
  bindingErrorToUI({});
  let timeout = null;
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    window.alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ trả lời ngay khi có thể");
  }, 100);
  clearInput();
  console.log(formData);
};

function getResult() {
  return {
    name: nameInput.value,
    email: emailInput.value,
    comment: commentInput.value,
  };
}

function validateInput(input) {
  const errors = [];
  Object.entries(input).forEach(([key, value]) => {
    if (!value && key !== "requirements") {
      errors.push({ key, value: errorMessage[key] });
    }
  });
  return errors;
}

function bindingErrorToUI(errorObj) {
  nameError.innerHTML = errorObj["name"] || "";
  emailError.innerHTML = errorObj["email"] || "";
  commentError.innerHTML = errorObj["comment"] || "";
}

function clearInput() {
  nameInput.value = "";
  emailInput.value = "";
  commentInput.value = "";
}
clearInput();

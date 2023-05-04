// sign up
const formWrapper = document.querySelector(".form-wrapper");
const signupButton = document.querySelector(".signup");
const loginButton = document.querySelector(".login");
const outButton = document.querySelector(".out");
const switchButton = document.querySelectorAll(".auth-form__switch-btn");
let nextForm = "";

const toggleShow = (el, status) => {
  el.style.display = status;
};

const openForm = (type) => {
  formWrapper.classList.remove("hide");
  const remainingKey = type === "sign-up" ? "sign-in" : "sign-up";
  const authForm = document.querySelector(`.auth-form__container .${type}`);
  const remainingForm = document.querySelector(`.auth-form__container .${remainingKey}`);
  toggleShow(authForm, "block");
  toggleShow(remainingForm, "none");
}

signupButton.onclick = function (e) {
  openForm("sign-up");
  nextForm = "sign-in";
};

loginButton.onclick = function (e) {
  openForm("sign-in");
  nextForm = "sign-up";
};

outButton.onclick = function (e) {
  formWrapper.classList.add("hide");
};

for (const button of switchButton) {
  button.onclick = () => {
    openForm(nextForm);
    nextForm = nextForm === "sign-up" ? "sign-in" : "sign-up";
  }
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

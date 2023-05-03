// sign up
var signupButton = document.querySelector(".signup");
var signupForm = document.querySelector(".sign-up-wrapper .modal");
var loginButton = document.querySelector(".login");
var loginForm = document.querySelector(".sign-in-wrapper .modal");
var outButton = document.querySelectorAll(".out");
var switchButton = document.querySelectorAll(".auth-form__switch-btn");

console.log(signupButton)
console.log(signupForm)
console.log(loginButton)




signupButton.onclick = function (e) {
  signupForm.style.display = "block";
  console.log("aaaaaa")
};

loginButton.onclick = function (e) {
  loginForm.style.display = "block";
};

for (value of outButton) {
  value.onclick = function (e) {
    signupForm.style.display = "none";
    loginForm.style.display = "none";
  };
};

for (value of switchButton) {
  value.onclick = function (e) {
    signupForm.style.display = "block";
    loginForm.style.display = "block";
  };
};

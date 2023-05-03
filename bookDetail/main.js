//sign up 
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
};

for (value of switchButton) {
  value.onclick = function (e) {
    signupForm.style.display = "block";
    loginForm.style.display = "block";
  };
};


// select
minusButton = document.querySelector(".qtyminus");
plusButton = document.querySelector(".qtyplus");
output = document.querySelector(".selector");


  minusButton.addEventListener("click", () => {
    if (output.value < 1) {
      return 0;
    }
    output.value--;
  });
  
plusButton.addEventListener("click", () => output.value++);


// add to cart
addToCart = document.querySelector(".add-to-cart");
if (output.value > 0) {
  addToCart.addEventListener("click", () => output.value = 1);
  addToCart.addEventListener("click", () => {
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  });
}

// output.onchange = (e) => {console.log(e.target.value)}
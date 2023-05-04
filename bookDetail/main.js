//sign up 
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



// select
minusButton = document.querySelector(".qtyminus");
plusButton = document.querySelector(".qtyplus");
output = document.querySelector(".selector");


  minusButton.addEventListener("click", () => {
    if (output.value < 2) {
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
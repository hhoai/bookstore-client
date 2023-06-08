const informationElement = document.querySelector(".account-container");
const adminElement = document.querySelector(".infor-admin");
const sidebarElement = document.querySelectorAll(".sidebar-items");
const subNav = document.querySelectorAll(".sub-nav");
const subNavList = document.querySelector(".list");
const category = document.querySelector(".category");

toggleShow = function (ele, className) {
  ele.classList.toggle(className);
};

informationElement.onclick = function (e) {
  toggleShow(adminElement, "hide");
  console.log("show/hide admin");
};

sidebarElement[0].onclick = function (e) {
  toggleShow(subNav[0], "hide");
  toggleShow(sidebarElement[0], "color");
  console.log("shop");
};

sidebarElement[1].onclick = function (e) {
  toggleShow(sidebarElement[1], "color");
  toggleShow(subNav[1], "hide");
  console.log("admin");
};

subNavList.onclick = function (e) {
  toggleShow(category, "hide");
  toggleShow(subNavList, "color");
};

// book
const form = document.querySelector(".form-wrapper");

const img = document.querySelector("input[name='imageUrl']");
const name = document.querySelector("input[name='name']");
const categoryBook = document.querySelector("input[name='category']");
const description = document.querySelector("input[name='description']");
const price = document.querySelector("input[name='price']");
const sale = document.querySelector("input[name='sale']");
const quantity = document.querySelector("input[name='quantity']");

const imgError = document.querySelector(".img-error");
const nameError = document.querySelector(".name-error");
const categoryBookError = document.querySelector(".category-error");
const descriptionError = document.querySelector(".description-error");
const priceError = document.querySelector(".price-error");
const saleError = document.querySelector(".sale-error");
const quantityError = document.querySelector(".quantity-error");

const openForm = () => {
  toggleShow(form, "hide");

};

const exit = () => {
  toggleShow(form, "hide");
};

const errorMessage = {
  imgUrl: "Vui lòng nhập link ảnh!",
  name: "Vui lòng nhập tên sách!",
  categoryBook: "Vui lòng nhập thể loại!",
  description: "Vui lòng nhập mô tả!",
  price: "Vui lòng nhập giá tiền!",
  sale: "Vui lòng nhập khuyến mại!",
  quantity: "Vui lòng nhập số lượng!",
};

const getResult = () => {
  return {
    imgUrl: img.value,
    name: name.value,
    categoryBook: categoryBook.value,
    description: description.value,
    price: price.value,
    sale: sale.value,
    quantity: quantity.value,
  };
};

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
  imgError.innerHTML = errorObj["imgUrl"] || "";
  nameError.innerHTML = errorObj["name"] || "";
  categoryBookError.innerHTML = errorObj["categoryBook"] || "";
  descriptionError.innerHTML = errorObj["description"] || "";
  priceError.innerHTML = errorObj["price"] || "";
  saleError.innerHTML = errorObj["sale"] || "";
  quantityError.innerHTML = errorObj["quantity"] || "";
}

const clearInput = () => {
  img.value = "";
  name.value = "";
  categoryBook.value = "";
  description.value = "";
  price.value = "";
  sale.value = "";
  quantity.value = "";
};

const addBook = () => {
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
  alert("Thêm sản phẩm thành công!");
  clearInput();
  console.log(formData);
};

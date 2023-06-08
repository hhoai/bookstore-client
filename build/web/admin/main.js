const informationElement = document.querySelector(".account-container");
const adminElement = document.querySelector(".infor-admin");
const sidebarElement = document.querySelectorAll(".sidebar-items");
const subNav = document.querySelectorAll(".sub-nav");
const subNavList = document.querySelector(".list");
const category = document.querySelector(".category");
const navInvoices = document.querySelector(".fa-ellipsis-h");
const navInvoicesList = document.querySelector(".invoices-nav-container");


toggleShow = function (ele,className) {
  ele.classList.toggle(className);
}

informationElement.onclick = function (e) {
  toggleShow(adminElement,"hide");
  console.log("show/hide admin");
}

sidebarElement[0].onclick = function (e) {
  toggleShow(subNav[0],"hide");
  toggleShow(sidebarElement[0], "color");
  console.log("shop");
}

sidebarElement[1].onclick = function (e) {
  toggleShow(sidebarElement[1], "color");
  toggleShow(subNav[1],"hide");
  console.log("admin");
}

subNavList.onclick = function (e) {
  toggleShow(category, "hide");
  toggleShow(subNavList,"color");
}

navInvoices.onclick = function (e) {
  toggleShow(navInvoices, "color");
  toggleShow(navInvoicesList, "hide");
  console.log("nav invoices clicked");
}
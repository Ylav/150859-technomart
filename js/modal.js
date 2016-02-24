var addItem = document.querySelector(".item-buttons .buy");
var buyPopup = document.querySelector(".modal-cart-added");
var buyClose = document.querySelector(".message-close");

addItem.addEventListener("click", function (event) {
  event.preventDefault();
  buyPopup.classList.add("active");
});

buyClose.addEventListener("click", function (event) {
  event.preventDefault();
  buyPopup.classList.remove("active");
});

var modalForm = document.querySelector(".btn-modal");
var popup = document.querySelector(".modal-right-us");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]")
var section = document.querySelector(".contacts");
var form = section.querySelector("form");
var email = section.querySelector("[name=email]");
var storage = localStorage.getItem("login")

modalForm.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("active");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

buyClose.addEventListener("click", function (event) {
  event.preventDefault();
  buyPopup.classList.remove("active");
});

form.addEventListener("submit", function (event) {
  if (!login.value || !email.value) {
    event.preventDefault();
    console.log("Введите, пожалуйста, логин и пароль");
  } else {
    localStorage.setItem("logindata", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("active")) {
      popup.classList.remove("active");
    }
  }
});

var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".big-map");
var mapClose = document.querySelector(".close-map");

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("active");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("active");
});

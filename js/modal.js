var addItem = document.querySelector(".item-buttons .buy");
var buyPopap = document.querySelector(".modal-cart-added");
var buyClose = document.querySelector(".message-close");

addItem.addEventListener("click", function (event) {
  event.preventDefault();
  buyPopap.classList.add("active");
})

buyClose.addEventListener("click", function (event) {
  event.preventDefault();
  buyPopap.classList.remove("active");
})

var modalForm = document.querySelector(".btn-modal");
var popap = document.querySelector(".modal-right-us");
var close = document.querySelector(".modal-close");

modalForm.addEventListener("click", function (event) {
  event.preventDefault();
  popap.classList.add("active");
})

close.addEventListener("click", function (event) {
  event.preventDefault();
  popap.classList.remove("active");
})

var mapOpen = document.querySelector(".open-map");
var mapPopap = document.querySelector(".big-map");
var mapClose = document.querySelector(".close-map");

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopap.classList.add("active");
})

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopap.classList.remove("active");
})

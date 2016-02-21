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

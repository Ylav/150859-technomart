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

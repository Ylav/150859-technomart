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

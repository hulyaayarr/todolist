let listDom = document.querySelector("#list");

const newElement = () => {
  let inputDom = document.getElementById("task").value;
  if (inputDom && inputDom.trim() !== "") {
    const liDom = document.createElement("li");
    liDom.innerHTML =
      inputDom +
      `<button
    type="button"
    class="btn-close float-right"
    aria-label="Close"
    onclick="closeLi(event)"
  ></button>`;

    listDom.append(liDom);
    document.getElementById("task").value = "";
    toast("liveToast_success");
  } else {
    toast("liveToast_error");
  }
};

const toast = (elId) => {
  toastEl = document.getElementById(`${elId}`);
  if (toastEl.classList.contains("hide")) {
    toastEl.classList.remove("hide");
    toastEl.classList.add("show");
    setTimeout(function () {
      toastEl.classList.remove("show");
      toastEl.classList.add("hide");
    }, 3000);
  } else {
    toastEl.classList.remove("show");
    toastEl.classList.add("hide");
    setTimeout(function () {
      toastEl.classList.remove("hide");
      toastEl.classList.add("show");
    }, 3000);
  }
};

const closeLi = (event) => {
  let listItem = event.target.closest("li");
  listItem.parentNode.removeChild(listItem);
};

const checkLi = (event) => {
  let checkedItem = event.target.closest("li");
  if (checkedItem.classList.contains("checked")) {
    checkedItem.classList.remove("checked");
  } else {
    checkedItem.classList.add("checked");
  }
};

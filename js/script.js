let listDom = document.querySelector("#list");

const newElement = () => {
  let inputDom = document.getElementById("task").value;
  if (inputDom && inputDom.trim() !== "") {
    const liDom = document.createElement("li");
    liDom.innerHTML = inputDom;
    listDom.append(liDom);
    document.getElementById("task").value = "";
  } else {
    console.log("hata");
  }
};

import { saveLocalStorage } from "./helper.js";
const userPoint = JSON.parse(localStorage.getItem("user-point"));
const highScores = JSON.parse(localStorage.getItem("high-scores")) || [];

const buttonSave = document.getElementById("save-button");
const showUserPoint = document.getElementById("user-score");
const inputText = document.querySelector("input");

window.addEventListener("load", () => {
  showUserPoint.innerText = userPoint;
});

buttonSave.addEventListener("click", (e) => {
  const userdata = { name: inputText.value, score: userPoint };
  if (inputText.value !== "" && e.target.disabled === false) {
    highScores.push(userdata);
    console.log(highScores);
    saveLocalStorage("high-scores", JSON.stringify(highScores));
    saveLocalStorage("user-point", JSON.stringify(0));
    inputText.value = "";
    e.target.disabled = true;
    Toastify({
      text: "saved",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
});

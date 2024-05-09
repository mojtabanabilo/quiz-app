const userPoint = JSON.parse(localStorage.getItem("user-point"));

console.log(userPoint);

const buttonSave = document.getElementById("save-button");
const showUserPoint = document.querySelector("p");
const inputText = document.querySelector("input");

window.addEventListener("load", () => showUserPoint.innerText = userPoint)
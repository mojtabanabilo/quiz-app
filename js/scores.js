const userPoints = localStorage.getItem("high-scores") || [];
const ol = document.querySelector("ol");

if (!JSON.parse(userPoints)) {
    console.log("null");
} else {
    console.log("array");
}
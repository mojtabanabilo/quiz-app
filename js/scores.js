const userPoints = JSON.parse(localStorage.getItem("high-scores"));
userPoints.sort((a, b) => b.score - a.score);

const ol = document.querySelector("ol");
const noScoreAlert = document.querySelector("h4");

const content = (ol.innerHTML = userPoints.map((item, index) => {
  return `
            <li>
              <span>${index + 1}</span>
              <p>${item.name}</p>
              <span>${item.score}</span>
            </li>
          `;
}));

if (userPoints) {
    ol.innerHTML = content.join("")
} else {
  noScoreAlert.style.display = "block";
}

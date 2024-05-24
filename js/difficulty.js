const levelsButtons = document.querySelectorAll("button");
levelsButtons.forEach((level) => {
  level.addEventListener("click", (e) => {
    localStorage.setItem("level", e.target.innerText.toLowerCase());
    window.location.assign("../html/index.html")
  });
});

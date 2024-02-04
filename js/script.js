let nav = document.querySelectorAll(".nav-link");

for (let a of nav) {
  a.addEventListener("click", activeNav);
}

function activeNav() {
  nav.forEach((e) => e.classList.remove("active"));

  this.classList.add("active");
}

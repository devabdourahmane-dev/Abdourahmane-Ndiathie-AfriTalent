
//  COMMIT 6 : DARK MODE + NAVBAR SCROLL + BACK TO TOP 

// Dark mode
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}


// Navbar au scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar && window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else if (navbar) {
    navbar.classList.remove("scrolled");
  }
});


// Bouton retour en haut
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (backToTop && window.scrollY > 300) {
    backToTop.classList.add("show");
  } else if (backToTop) {
    backToTop.classList.remove("show");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

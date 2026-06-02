
//  COMMIT 6 : DARK MODE + NAVBAR SCROLL + BACK TO TOP 

// Dark mode
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle?.querySelector("i");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");

  if (themeIcon) {
    themeIcon.classList.remove("bi-moon-fill");
    themeIcon.classList.add("bi-sun-fill");
    themeIcon.style.transform = "rotate(180deg)";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

   if (document.body.classList.contains("dark-mode")) {
  localStorage.setItem("theme", "dark");


  if (themeIcon) {
  themeIcon.style.transform = "rotate(180deg)";

  themeIcon.classList.remove("bi-moon-fill");
  themeIcon.classList.add("bi-sun-fill");
}

} else {
  localStorage.setItem("theme", "light");

if (themeIcon) {
  themeIcon.style.transform = "rotate(0deg)";

  themeIcon.classList.remove("bi-sun-fill");
  themeIcon.classList.add("bi-moon-fill");
}
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
// COMPTEURS ANIMÉS
// COMPTEURS ANIMÉS
const counters = document.querySelectorAll(".counter");

const startCounters = () => {
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    let count = 0;

    const updateCounter = () => {
      const increment = Math.ceil(target / 100);

      if (count < target) {
        count += increment;

        if (count > target) count = target;

        counter.innerText = count;

        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

const statsSection = document.querySelector(".counter")?.closest("section");

if (statsSection) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounters();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(statsSection);
}
// ANIMATION FADE-IN AU SCROLL
const fadeSections = document.querySelectorAll(".fade-section");

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

fadeSections.forEach(section => {
  fadeObserver.observe(section);
});
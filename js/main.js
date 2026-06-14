
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
// Toggle dark mode on click

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
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
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
// Démarrer les compteurs lorsque la section devient visible

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


// COMMIT 8 : FILTRES FREELANCES
// Filtrer les freelances par catégorie
const filterButtons = document.querySelectorAll(".filtre");
const freelancerCards = document.querySelectorAll(".freelance-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    const category = button.dataset.categorie;

    freelancerCards.forEach(card => {

      if (
        category === "all" ||
        card.dataset.categorie === category
      ) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }

    });

  });
});
// VALIDATION FORMULAIRE DE CONTACT
const contactForm = document.getElementById("contactform");

if (contactForm) {

  contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("prenomError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("sujetError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    if (name === "") {
      document.getElementById("nameError").textContent =
        "Veuillez entrer votre nom";
      isValid = false;
    }

    if (prenom === "") {
      document.getElementById("prenomError").textContent =
        "Veuillez entrer votre prénom";
      isValid = false;
    }

    if (email === "") {

      document.getElementById("emailError").textContent =
        "Veuillez entrer votre email";

      isValid = false;

    } else {

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {

        document.getElementById("emailError").textContent =
          "Veuillez entrer un email valide";

        isValid = false;
      }

    }

    if (sujet === "") {
      document.getElementById("sujetError").textContent =
        "Veuillez choisir un sujet";
      isValid = false;
    }

    if (message === "") {

      document.getElementById("messageError").textContent =
        "Veuillez écrire un message";

      isValid = false;

    } else if (message.length < 20) {

      document.getElementById("messageError").textContent =
        "Le message doit contenir au moins 20 caractères";

      isValid = false;

    }
    if (isValid) {

      contactForm.reset();

      document
        .getElementById("successMessage")
        .classList.remove("d-none");
        setTimeout(() => {
  document
    .getElementById("successMessage")
    .classList.add("d-none");
}, 5000);

    }

  });

}
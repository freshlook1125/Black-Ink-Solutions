const yearElements = document.querySelectorAll("#year");
const signupForms = document.querySelectorAll("[data-signup-form], #signup-form");
const menuToggle = document.querySelector(".mobile-menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const dropdowns = document.querySelectorAll(".nav-dropdown");

for (const yearElement of yearElements) {
  yearElement.textContent = new Date().getFullYear();
}

for (const signupForm of signupForms) {
  const formNote = signupForm.querySelector("[data-form-note], #form-note");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const email = String(formData.get("email") || "").trim();

    if (!email && formNote) {
      formNote.textContent = "Enter an email to receive the first signal.";
      return;
    }

    if (formNote) {
      formNote.textContent = "You are on the list. The first signal will find you.";
    }

    signupForm.reset();
  });
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

for (const dropdown of dropdowns) {
  const toggle = dropdown.querySelector(".dropdown-toggle");

  if (toggle) {
    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      const isOpen = dropdown.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
}

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  if (!target.closest(".nav-dropdown")) {
    for (const dropdown of dropdowns) {
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
    }
  }
});

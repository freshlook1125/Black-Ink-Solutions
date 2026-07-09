const yearElements = document.querySelectorAll("#year");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const signupForms = document.querySelectorAll(".signup-form");

yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const dropdown = toggle.closest(".nav-dropdown");
    if (!dropdown) return;

    const isOpen = dropdown.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".nav-dropdown.is-open").forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
    }
  });
});

signupForms.forEach((form) => {
  const note = form.querySelector(".form-note");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      if (note) note.textContent = "Please enter an email address.";
      return;
    }

    if (note) note.textContent = form.dataset.formMessage || "Thank you. You are on the list.";
    form.reset();
  });
});

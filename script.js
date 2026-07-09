const yearElement = document.querySelector("#year");
const signupForm = document.querySelector("#signup-form");
const formNote = document.querySelector("#form-note");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (signupForm && formNote) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      formNote.textContent = "Enter an email to receive the first signal.";
      return;
    }

    formNote.textContent = "You are on the list. The first signal will find you.";
    signupForm.reset();
  });
}

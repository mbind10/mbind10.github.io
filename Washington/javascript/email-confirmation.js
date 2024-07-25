window.addEventListener("load", (event) => {
  const emailConfirmation = function(event) {
    const form_email = document.getElementById("form-email").value;
    const form_email_confirmation = document.getElementById("form-email-confirmation").value;
    if (form_email === form_email_confirmation) {
      document.getElementById("newsletter-form").submit();
    } else {
      event.preventDefault();
      alert("Email Addresses Do Not Match");
    }
  }

  document.getElementById("form-submit").addEventListener("click", emailConfirmation)
});
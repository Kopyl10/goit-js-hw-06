const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in!");
  }
  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(formData);
  form.reset();
});

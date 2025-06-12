const input = document.getElementById("validation-input");
input.addEventListener("blur", () => {
  const requiredLength = Number(input.dataset.length);
  const currentLength = input.value.trim().length;
  input.classList.remove("valid", "invalid");
  if (currentLength === requiredLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});

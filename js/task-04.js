let counterValue = 0;
const valueEl = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
function updateValue() {
  valueEl.textContent = counterValue;
}

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});

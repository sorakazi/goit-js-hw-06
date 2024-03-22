const counter = document.getElementById('counter');
const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
const valueSpan = counter.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

const inputEl = document.getElementById('validation-input');

const handleLength = function (e) {
  const inputValue = this.value.trim().length;

  const requiredLength = e.target.dataset.length;

  if (inputValue === parseInt(requiredLength)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', handleLength);

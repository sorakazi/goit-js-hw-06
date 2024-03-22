const loginForm = document.querySelector('.login-form');

const handleFormSubmit = function (e) {
  event.preventDefault(); // Prevent page reload on form submission

  const emailInput = loginForm.elements['email'];
  const passwordInput = loginForm.elements['password'];

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All fields must be filled in.');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData); // Display form data object in console
  loginForm.reset(); // Clear form fields
};

loginForm.addEventListener('submit', handleFormSubmit);

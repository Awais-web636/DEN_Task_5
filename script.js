document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('reservationForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const dateInput = document.getElementById('date');
  const guestsInput = document.getElementById('guests');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const dateError = document.getElementById('dateError');
  const guestsError = document.getElementById('guestsError');

  function validateInput(input, errorElement) {
      if (input.validity.valid) {
          errorElement.style.visibility = 'hidden';
          input.style.borderColor = 'green';
      } else {
          errorElement.style.visibility = 'visible';
          input.style.borderColor = 'red';
      }
  }

  // Real-time validation for each input field
  nameInput.addEventListener('input', function () {
      validateInput(nameInput, nameError);
  });

  emailInput.addEventListener('input', function () {
      validateInput(emailInput, emailError);
  });

  dateInput.addEventListener('input', function () {
      validateInput(dateInput, dateError);
  });

  guestsInput.addEventListener('input', function () {
      validateInput(guestsInput, guestsError);
  });

  // Submit form validation
  form.addEventListener('submit', function (e) {
      e.preventDefault();

      validateInput(nameInput, nameError);
      validateInput(emailInput, emailError);
      validateInput(dateInput, dateError);
      validateInput(guestsInput, guestsError);

      // If all inputs are valid, submit form
      if (form.checkValidity()) {
          alert('Reservation Submitted Successfully!');
          form.reset();
          document.querySelectorAll('input').forEach(input => input.style.borderColor = '#ccc');
      } else {
          alert('Please correct the errors before submitting.');
      }
  });
});

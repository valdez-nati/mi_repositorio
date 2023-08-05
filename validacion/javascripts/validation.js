function emailValidation() {
  const form = document.getElementById('form');
  const emailInput = form.querySelector('input[name="email"]');
  const emailConfirmInput = form.querySelector('input[name="email_confirm"]');
  
  emailInput.addEventListener('input', checkEmailMatch);
  emailConfirmInput.addEventListener('input', checkEmailMatch);
  
  function checkEmailMatch() {
    const errorMessage = "El correo electrónico no coincide";
    const alertElement = form.querySelector('.alert');
    const confirmField = form.querySelector('.contact_line.confirm');

    if (emailInput.value !== emailConfirmInput.value) {
      if (!alertElement) {
        const element = document.createElement('p');
        const message = document.createTextNode(errorMessage);
        element.appendChild(message);
        element.classList.add('alert');
        form.appendChild(element);
        
        emailConfirmInput.style.backgroundColor = 'rgba(230,169,171,.5)';
        emailConfirmInput.style.color = '#d14539';
      }
    } else {
      if (alertElement) {
        form.removeChild(alertElement);
      }
      emailConfirmInput.style.backgroundColor = '';
      emailConfirmInput.style.color = '';
    }
  }
}

window.onload = emailValidation;

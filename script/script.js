const sform = document.querySelector('#form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const originalEmailPlaceholder = emailInput.placeholder;

emailInput.addEventListener('focus', () => {
    emailInput.placeholder = originalEmailPlaceholder;
    emailInput.classList.remove('input-error');
    document.getElementById('email-error').textContent = '';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Limpar mensagens de erro 
    document.querySelectorAll('.error').forEach(span => span.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('input-error'));

    let isValid = true;

    // Validar First Name
    if (firstNameInput.value.trim() === '') {
        document.getElementById('first-name-error').textContent = 'First Name cannot be empty';
        firstNameInput.classList.add('input-error');
        isValid = false;
    }

    // Validar Last Name
    if (lastNameInput.value.trim() === '') {
        document.getElementById('last-name-error').textContent = 'Last Name cannot be empty';
        lastNameInput.classList.add('input-error');
        isValid = false;
    }

    // Validar Email
    if (emailInput.value.trim() === '') {
        document.getElementById('email-error').textContent = 'Email cannot be empty';
        emailInput.classList.add('input-error');
        emailInput.placeholder = 'email@example.com';
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Looks like this is not an email';
        emailInput.classList.add('input-error');
        emailInput.value = '';
        emailInput.placeholder = 'email@example.com';
        isValid = false;
    }

    // Validar Password
    if (passwordInput.value.trim() === '') {
        document.getElementById('password-error').textContent = 'Password cannot be empty';
        passwordInput.classList.add('input-error');
        isValid = false;
    }

    // Se tudo estiver válido, enviar o formulário
    if (isValid) {
        form.submit();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
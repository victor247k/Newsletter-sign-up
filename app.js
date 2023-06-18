const span = document.getElementById('emailText');
new URLSearchParams(window.location.search).forEach((value, name) => {
    span.textContent = `${value}`
})

const input = document.getElementById('email');

const btn = document.getElementById('submit');

const errorMessage = document.querySelector('.errorMessage')
btn.addEventListener('click', () => {
    if (!isEmailValid(input.value) || input.value.length === 0) {
        input.style.outline = '2px solid var(--clr-primary-tomato)';
        input.style.backgroundColor = 'lightpink';
        errorMessage.style.display = 'block'
        return;
    }
    input.style.border = '1px solid var(--clr-gray)';
    input.style.backgroundColor = 'transparent';
    errorMessage.style.display = 'none'
});

function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
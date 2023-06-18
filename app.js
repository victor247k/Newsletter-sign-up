const span = document.getElementById('emailText');
new URLSearchParams(window.location.search).forEach((value, name) => {
    span.textContent = `${value}`
})
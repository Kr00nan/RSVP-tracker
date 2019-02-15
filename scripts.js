const form = document.getElementById('registrar');
const input = form.querySelector('input');

form.addEventListener('submit', (event) => {
    document.preventDefault();
    console.log(input.value);
});
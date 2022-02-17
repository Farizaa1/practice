document.getElementById('username')
.insertAdjacentHTML('beforeBegin', '<label for="username">Username: </label>'); 
document.getElementById('password')
.insertAdjacentHTML('beforeBegin', '<label for="password">Password: </label>');
document.getElementById('confirmPassword')
.insertAdjacentHTML('beforeBegin', '<label for="confirmPassword">Confirm Password: </label>');

const check = (event) => {
    const error = Array.from(event.target.parentNode.querySelectorAll('span'));
    if(event.target.value === '' && !error.length) {
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Error</span>')
    }

    if(error && event.target.value !== ''){
        error.forEach(elem => elem.remove());
    }
};

document.getElementById('username')
.addEventListener('blur', check);
document.getElementById('password')
.addEventListener('blur', check);
document.getElementById('confirmPassword')
.addEventListener('blur', check);

document.getElementById('confirmPassword')
.addEventListener('blur', (event) => {
    if (event.target.value !== document.getElementById('password').value){
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Not matching</span>');
    }
});

const btn = document.querySelector('button');
btn.setAttribute('disabled', 'disabled');
document.getElementById('form')
.addEventListener('change', (event) => {
    const formIsFilled = Array.from(document.querySelectorAll('input'))
    .every(input => input.value);
    if(formIsFilled) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
});

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success');
    alert.innerHTML = 'Success';
    form.prepend(alert);
});
const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const button = document.getElementById('button');

let firstNameText = document.getElementById('firstNameText');
let emailText = document.getElementById('emailText');
let phoneText = document.getElementById('phoneText');
let usernameText = document.getElementById('usernameText');
let passwordText = document.getElementById('passwordText');
let confirmPasswordText = document.getElementById('confirmPasswordText');

button.disabled = true;

function validateName() {
    const regex = /[A-z]{2,}/g;
    const negativeRegex = /[^A-z]/g;

    if (regex.test(firstName.value) && !negativeRegex.test(firstName.value)) {
        firstNameText.innerHTML = 'Correct!';
        firstName.classList.remove('invalid');
        firstName.classList.add('valid');
        theButton();
    } else {
        firstNameText.innerHTML = '* Please, only letters and minimum 2 characters!!!';
        firstName.classList.remove('valid');
        firstName.classList.add('invalid');
        firstName.value = '';
    }
}

function validateEmail() {
    const regex = /@gmail.com/;

    if (regex.test(email.value)) {
        emailText.innerHTML = 'Correct!';
        email.classList.remove('invalid');
        email.classList.add('valid');
        theButton();
    } else {
        emailText.innerHTML = '* Sorry, we only accept Gmail accounts...it\'s not you, it\'s us!';
        email.classList.remove('valid');
        email.classList.add('invalid');
        email.value = '';
    }
}

function validatePhone() {
    const regex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

    if (regex.test(phone.value) && phone.value.length === 12) {
        phoneText.innerHTML = 'Correct!';
        phone.classList.remove('invalid');
        phone.classList.add('valid');
        theButton();
    } else {
        phoneText.innerHTML = '* Maybe you don\'t read well. Please write a phone number in this format: 000-000-0000';
        phone.classList.remove('valid');
        phone.classList.add('invalid');
        phone.value = '';
    }
}

function validateUsername() {
    const regex = /[A-z]{1,6}[0-9]{1,6}/g;
    const negativeRegex = /[\+|\*|\!|\?|\.|\_|\:|\%!\&|\$|\(|\)|\=|\{|\}|\[|\]|\´|\`|\'|\"|\@|\^|\#|\||\ç|\Ç|\;|\<|\>]/g;

    if (regex.test(username.value) && !negativeRegex.test(username.value)  && username.value.length > 2 && username.value.length < 8) {
        usernameText.innerHTML = 'Correct!';
        username.classList.remove('invalid');
        username.classList.add('valid');
        theButton();
    } else {
        usernameText.innerHTML = '* Mmm... Only letters AND numbers. Min 3 characters, max 7 characters. A letter is always followed by a number at least once.';
        username.classList.remove('valid');
        username.classList.add('invalid');
        username.value = '';
    }
}

function checkBothPasswords() {
    if (password.value === confirmPassword.value) {
        confirmPasswordText.innerHTML = 'Great, both passwords are the same!';
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
        theButton();
    } else {
        confirmPasswordText.innerHTML = '* You typed a valid format, however your passwords didn\'t match';
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        password.value = '';
        confirmPassword.value = '';
        passwordText.innerHTML = '* Minimum 7 characters ... again!';
        password.classList.remove('valid');
        password.classList.add('invalid');
    }
}

function validatePassword() {
    if (password.value.length > 6) {
        passwordText.innerHTML = 'You typed a valid format!';
        password.classList.remove('invalid');
        password.classList.add('valid');
    } else {
        passwordText.innerHTML = '* This is the easiest input. Please type minimum 7 characters!';
        password.classList.remove('valid');
        password.classList.add('invalid');
        password.value = '';
    }
}

function validateConfirmationPassword() {
    if (confirmPassword.value.length > 6) {
        checkBothPasswords();
    } else {
        confirmPasswordText.innerHTML = '* You already passed through this... please type minimum 7 characters!'
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        confirmPassword.value = '';
    }
}

function theButton() {
    if (firstName.value.length > 0 &&
        email.value.length > 0 &&
        phone.value.length > 0 &&
        username.value.length > 0 &&
        password.value.length > 0 &&
        confirmPassword.value.length > 0) {
            button.disabled = false;
        }
}
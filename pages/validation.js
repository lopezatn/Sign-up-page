const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const button = document.getElementById('button');

let firstNameHint = document.getElementById('firstNameHint'); 
let emailHint = document.getElementById('emailHint'); 
let phoneHint = document.getElementById('phoneHint'); 
let usernameHint = document.getElementById('usernameHint'); 
let passwordHint = document.getElementById('passwordHint'); 
let confirmPasswordHint = document.getElementById('confirmPasswordHint'); 

button.disabled = true;

function validateName() {
    const regex = /[A-z]{2,}/g;
    const negativeRegex = /[^A-z]/g;

    if (regex.test(firstName.value) && !negativeRegex.test(firstName.value)) {
        firstNameHint.innerHTML = 'Correct!'; 
        firstName.classList.remove('invalid');
        firstName.classList.add('valid');
        theButton();
    } else {
        firstNameHint.innerHTML = '* Please, only letters and minimum 2 characters!!!'; 
        firstName.classList.remove('valid');
        firstName.classList.add('invalid');
        firstName.value = '';
    }
}

function validateEmail() {
    const regexOne = /@/;
    const regexTwo = /\./;

    if (regexOne.test(email.value) && regexTwo.test(email.value)) {
        emailHint.innerHTML = 'Correct!'; 
        email.classList.remove('invalid');
        email.classList.add('valid');
        theButton();
    } else {
        emailHint.innerHTML = '* Please provide a valid email!'; 
        email.classList.remove('valid');
        email.classList.add('invalid');
        email.value = '';
    }
}

function validatePhone() {
    const regex = /^\+?[0-9]{9,14}$/;

    if (regex.test(phone.value)) {
        phoneHint.innerHTML = 'Correct!'; 
        phone.classList.remove('invalid');
        phone.classList.add('valid');
        theButton();
    } else {
        phoneHint.innerHTML = '* Please provide a valid phone number, without spaces or slashes.'; 
        phone.classList.remove('valid');
        phone.classList.add('invalid');
        phone.value = '';
    }
}

function validateUsername() {
    if (username.value.length > 2) {
        usernameHint.innerHTML = 'Correct!'; 
        username.classList.remove('invalid');
        username.classList.add('valid');
        theButton();
    } else {
        usernameHint.innerHTML = `* Please type minimum 3 characters.`; 
        username.classList.remove('valid');
        username.classList.add('invalid');
        username.value = '';
    }
}

function checkBothPasswords() {
    if (password.value === confirmPassword.value) {
        confirmPasswordHint.innerHTML = 'Great, both passwords are the same!'; 
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
        theButton();
    } else {
        passwordHint.innerHTML = `* Minimum 7 characters. 
            <br>Use at least one upper case letter, a lower case letter,
            <br>a number and a special character.`; 
        confirmPasswordHint.innerHTML = '* You typed a valid format, however your passwords didn\'t match'; 
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        password.value = '';
        confirmPassword.value = '';
        password.classList.remove('valid');
        password.classList.add('invalid');
    }
}

function validatePassword() {
    const capitalRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    const numRegex = /[0-9]/;
    const characterRegex = /[\+|\*|\!|\?|\.|\_|\:|\%!\&|\$|\(|\)|\=|\{|\}|\[|\]|\´|\`|\'|\"|\@|\^|\#|\||\ç|\Ç|\;|\<|\>]/g;

    if ((password.value.length > 6) && 
        capitalRegex.test(password.value) && 
        lowerRegex.test(password.value) && 
        numRegex.test(password.value) && 
        characterRegex.test(password.value)) {
        passwordHint.innerHTML = 'You typed a valid format!'; 
        password.classList.remove('invalid');
        password.classList.add('valid');
    } else {
        passwordHint.innerHTML = `* Minimum 7 characters. 
                                    <br>Use at least one upper case letter, a lower case letter,
                                    <br>a number and a special character.`; 
        password.classList.remove('valid');
        password.classList.add('invalid');
        password.value = '';
    }
}

function validateConfirmationPassword() {
    const capitalRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    const numRegex = /[0-9]/;
    const characterRegex = /[\+|\*|\!|\?|\.|\_|\:|\%!\&|\$|\(|\)|\=|\{|\}|\[|\]|\´|\`|\'|\"|\@|\^|\#|\||\ç|\Ç|\;|\<|\>]/g;

    if (confirmPassword.value.length > 6 && 
        capitalRegex.test(confirmPassword.value) && 
        lowerRegex.test(confirmPassword.value) && 
        numRegex.test(confirmPassword.value) && 
        characterRegex.test(confirmPassword.value)) {
        checkBothPasswords();
    } else {
        confirmPasswordHint.innerHTML = `* Minimum 7 characters. 
                                            <br>Use at least one upper case letter, a lower case letter,
                                            <br>a number and a special character.`; 
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
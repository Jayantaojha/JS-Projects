// accessing elements from index.html
const body = document.querySelector('body');
const passwordDiv = document.querySelector('#password-div');
const copyDiv = document.querySelector('#copy-div');
const range = document.querySelector('#range');
let passwordLengthDiv = document.querySelector('#password-length-div');
const numberSelect = document.querySelector('#number-select');
const characterSelect = document.querySelector('#character-select');


// password length
let passwordLength = 8;

// password generator
function passwordGenerator(selectNumber, selectCharacter) {
    const chString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const noString = '0123456789';
    const specialString = '!@#$%^&*()-_+=[]{}|;:,.<>?/~';
    let mainString = chString;

    if (selectNumber) {
        mainString += noString;
    }
    if (selectCharacter) {
        mainString += specialString;
    }

    let finalPassword = "";
    
    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * mainString.length);
        finalPassword += mainString[index];
    }

    passwordDiv.innerText = finalPassword;
}


// on page refresh, passwordGenerator will be called to get a new password
document.addEventListener('DOMContentLoaded', passwordGenerator(false, false));


// when the user clicked on the copy section 
copyDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordDiv.innerText)
    .then(() => {
        copyDiv.innerText = 'Copied!';
        setTimeout(() => {
            copyDiv.innerHTML = `<i class="fa-regular fa-copy"></i>`;
        }, 1500);
    })
    .catch(err => {
        console.error('Unable to copy text: ', err);
    });
})


// working on the password length part and input:range
range.addEventListener('change', (e) => {
    passwordLength = range.value;
    passwordLengthDiv.innerText = `Length (${range.value})`;
    passwordGenerator(numberSelect.checked, characterSelect.checked);
})


// If number select is checked
numberSelect.addEventListener('change', function (event) {
    if (event.target.checked) {
        passwordGenerator(true, characterSelect.checked);
    } else {
        passwordGenerator(false, characterSelect.checked);
    }
});


// If character select is checked
characterSelect.addEventListener('change', function (event) {
    if (event.target.checked) {
        passwordGenerator(numberSelect.checked, true);
    } else {
        passwordGenerator(numberSelect.checked, false);
    }
});

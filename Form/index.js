const form = document.querySelector('form')
const display = document.querySelector('#display')
const body = document.querySelector('body')
const name = document.getElementById('name').innerText
const phNO = document.getElementById('phNO').innerText
const email = document.getElementById('email').innerText


function checkForm(){
    if(name == " " || email == null || phNO == null){
        alert("Please enter correct credentials !!!")        
    }
    else{
        runSuccessMessage()
    }
}

function runSuccessMessage(){
    const successMessage = document.createElement('h2')
    successMessage.innerHTML = "<h2>Form submitted successfully!</h2>"
    successMessage.style.color = "green"
    display.appendChild(successMessage)
    body.style.backgroundColor = "Yellow"
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkForm()
}, false)
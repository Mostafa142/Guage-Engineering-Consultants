//Get Data
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');
const success = document.querySelector('.success');
const errorNodes = document.querySelectorAll('.error');

//Validate data
function validateForm() {


    clearMessages();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Please enter your name.";
        nameInput.classList.add("error-background");
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Please enter your valid E-mail ID.";
        email.classList.add("error-background");
        errorFlag = true;
    }

    if (phone.value.length < 1) {
        errorNodes[2].innerText = "Please enter your phone number.";
        phone.classList.add("error-background");
        errorFlag = true;
    }

    if (message.value.length < 1) {
        errorNodes[3].innerText = "Please enter your message.";
        message.classList.add("error-background");
        errorFlag = true;
    }
    if (!errorFlag) {
        success_message.innerText = "Your message has been sent successfully! \n Refresh this page if you want to send more messages."
    } else {
        error_message.innerText = "Sorry Your message has not been sent successfully!"

    }
}
//Clear error / success messages
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success_message.innerText = ""
    nameInput.classList.remove("error-background");
    email.classList.remove("error-background");
    phone.classList.remove("error-background");
    message.classList.remove("error-background");
}
//Check if email is valid 
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
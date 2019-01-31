'use strict';

var submitBtn1;
var submitBtn2;
var formMsg1, formMsg2;

document.addEventListener('DOMContentLoaded', function(){
    submitBtn1 = document.querySelector('#submit-btn-1');
    submitBtn2 = document.querySelector('#submit-btn-2');
    formMsg1 = document.querySelector('#form-msg-1');
    formMsg2 = document.querySelector('#form-msg-2');
    submitBtn1.addEventListener("click", handleFirstForm);
    submitBtn2.addEventListener("click", handleSecondForm);
});

function handleFirstForm() {
    var name, contact;
    var nameInput, contactInput;
    nameInput = document.querySelector('#name-input-1');
    contactInput = document.querySelector('#email-input-1');
    name = nameInput.value;
    contact = contactInput.value;

    if (validateForm(name, contact)) {
        nameInput.value = '';
        contactInput.value = '';
        return;
    }

    let dataString =
        'name=' + name +
        '&contact=' + contact;

    sendMail(dataString);
}

function handleSecondForm() {
    var name, contact;
    var nameInput, contactInput;
    nameInput = document.querySelector('#name-input-2');
    contactInput = document.querySelector('#email-input-2');
    name = nameInput.value;
    contact = contactInput.value;

    if (validateForm(name, contact)) {
        nameInput.value = '';
        contactInput.value = '';
        return;
    }
    
    let dataString =
        'name=' + name +
        '&contact=' + contact;

    nameInput.value = '';
    contactInput.value = '';
    sendMail(dataString);
}

function sendMail(dataString) {
    var name, contact;
    var nameInput, contactInput;
    nameInput = document.querySelector('#name-input-1');
    contactInput = document.querySelector('#email-input-1');
    let xhr = new XMLHttpRequest();

    xhr.open('POST', `php/sendEmail.php`, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = () => {
        nameInput.value = '';
        contactInput.value = '';
        formMsg1.classList.add('load');
        formMsg2.classList.add('load');
        setTimeout(function () {
            formMsg1.classList.remove('load');
            formMsg2.classList.remove('load');
        }, 3000)
    };
    xhr.send(dataString);
}

function validateForm(name, contact){
    if(name.length == 0 || contact.length == 0) {
        return true;
    }
    return false;
}
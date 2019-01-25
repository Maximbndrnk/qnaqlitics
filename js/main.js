'use strict';

var submitBtn1;
var submitBtn2;

document.addEventListener('DOMContentLoaded', function(){
    submitBtn1 = document.querySelector('#submit-btn-1');
    submitBtn2 = document.querySelector('#submit-btn-2');
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

    let xhr = new XMLHttpRequest();

    xhr.open('POST', `php/saveContact.php`, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = () => {
        nameInput.value = '';
        contactInput.value = '';
    };
    sendMail(dataString);
    xhr.send(dataString);
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

    let xhr = new XMLHttpRequest();

    xhr.open('POST', `php/saveContact.php`, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = () => {
        nameInput.value = '';
        contactInput.value = '';
    };
    sendMail(dataString);
    xhr.send(dataString);
}

function sendMail(dataString) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', `php/sendEmail.php`, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = () => {
        console.log('Mailsend2');
    };
    xhr.send(dataString);
    console.log('Mailsend1');
}

function validateForm(name, contact){
    if(name.length == 0 || contact.length == 0) {
        return true;
    }
    return false;
}
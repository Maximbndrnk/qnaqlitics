'use strict';

var submitBtn1;
var submitBtn2;

document.addEventListener('DOMContentLoaded', function(){
    console.log('hi');
    submitBtn1 = document.querySelector('#submit-btn-1');
    submitBtn2 = document.querySelector('#submit-btn-2');
    submitBtn1.addEventListener("click", handleFirstForm);
    submitBtn2.addEventListener("click", handleSecondForm);
});

function handleFirstForm() {
    var name, contact;
    var nameInput, contactInput;
    nameInput = document.querySelector('##name-input-1');
    contactInput = document.querySelector('#email-input-2');
    name = nameInput.value;
    contact = contactInput.value;
    console.log('handleFirstForm', name, contact);
}

function handleSecondForm() {
    var name, contact;
    var nameInput, contactInput;
    nameInput = document.querySelector('#name-input-2');
    contactInput = document.querySelector('#email-input-2');
    name = nameInput.value;
    contact = contactInput.value;
    console.log('handleSecondForm', name, contact);
}
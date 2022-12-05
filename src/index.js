import validator from './validator.js';
// como es una clase se debe poner . 
//let nameCard=document.querySelector('.card_details-name');
// si es un ID se pone #
let inputName=document.querySelector('#cardholder');
let inpuNumber=document.querySelector('#cardNumber');
let nameErrorDiv=document.querySelector('.form__cardnumber--error');

    inputNumber.addEventListener('input', ()=>{
        console.log();
        let regExp=/[a-z]/g ;
        console.log(regExp.test(12342))
    nameCard.inner =inputName.value;
    });

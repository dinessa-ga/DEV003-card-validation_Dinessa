import validator from './validator.js';
// para el uso de querySelector como es una clase se debe poner . 
//let nameCard=document.querySelector('.card_details-name');
// si es un ID se pone #
//const inputName=document.querySelector('#cardholder')
const inputName=document.querySelector('#cardholder');
const inputNumber=document.querySelector('#cardNumber');
const inputMonth=document.querySelector('#cardMonth');
const inputYear=document.querySelector('#cardYear');
const nameErrorDiv=document.querySelector('.form__cardnumber--error');
const buttonCheck=document.querySelector('.form__submit');

inputNumber.addEventListener('input', ()=> {
  const regExp=/[a-z]/g;
  if(regExp.test(inputNumber.value)){
    nameErrorDiv.textContent="Solo ingresa números";
  }else{
    nameErrorDiv.textContent="";
  }
}); 

buttonCheck.addEventListener('click', ()=>{
  if(inputName.value==='' || inputNumber.value==='' || inputMonth.value==='' || inputYear.value===''){
    alert ('Completa todos los campos');
    return false
  }
});
console.log(validator);
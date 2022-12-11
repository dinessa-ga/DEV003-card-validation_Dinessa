/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import validator from './validator.js';
// para el uso de querySelector como es una clase se debe poner . 
//let nameCard=document.querySelector('.card_details-name');
// si es un ID se pone #
//const inputName=document.querySelector('#cardholder')
// eslint-disable-next-line no-unused-vars
const inputName=document.querySelector('#cardholder');
const inputNumber=document.querySelector('#cardNumber');
const inputMonth=document.querySelector('#cardMonth');
const inputYear=document.querySelector('#cardYear');
const numberErrorDiv=document.querySelector('.form__cardnumber--error');
const buttonCheck=document.querySelector('.form__submit');
const concatenar="";

inputNumber.addEventListener('input', ()=> {
  const regExp=/[a-z]/g;
  const result=validator.isValid(inputNumber);
  const maskifyNumber=validator.maskify(inputNumber);

  if(regExp.test(inputNumber.value)){
    numberErrorDiv.textContent="Solo ingresa números";
  }else{
    numberErrorDiv.textContent="";
    
  }
}); 


inputNumber.addEventListener('keydown', function(event){
  if(validator.isValid(concatenar)===true){ numberErrorDiv.textContent="Tu tarjeta es válida"}
  else{numberErrorDiv.textContent="Tu tarjeta no es válida"}
});
buttonCheck.addEventListener('click', ()=>{

});
console.log(validator);



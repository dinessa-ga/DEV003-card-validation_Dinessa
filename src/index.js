/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import validator from './validator.js';
// para el uso de querySelector como es una clase se debe poner . 
// si es un ID se pone #
//const inputName=document.querySelector('#cardholder')
const inputName=document.querySelector('#cardholder');
const inputNumber=document.querySelector('#cardNumber');
const inputMonth=document.querySelector('#cardMonth');
const inputYear=document.querySelector('#cardYear');
const numberErrorDiv=document.querySelector('.form__cardnumber--error');
const buttonCheck=document.querySelector('.form__submit');


inputNumber.addEventListener('input', ()=> {
  const regExp=/[a-z]/g;
  if(regExp.test(inputNumber.value)){
    numberErrorDiv.textContent="Solo ingresa números";
  }else{ numberErrorDiv.textContent=""}

}); 

inputNumber.addEventListener('click', validarNumber);
function validarNumber(){
  const cardNumber = inputNumber.value;
  const lastfourdigits=validator.maskify(cardNumber);
  inputNumber.value=lastfourdigits;
  const validation=validator.isValid(cardNumber);
  if(validation===true){
    numberErrorDiv.textContent="Tu tarjeta es válida";
  }
  else{
    numberErrorDiv.textContent='Tu tarjeta no es válida';
  }

}
  
buttonCheck.addEventListener('click', ()=>{
  alert("Tu transacción ha terminado, te esperamos en una próxima compra.")
});





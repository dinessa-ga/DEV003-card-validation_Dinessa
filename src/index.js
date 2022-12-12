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
  

  if(regExp.test(inputNumber.value)){
    numberErrorDiv.textContent="Solo ingresa números";
  }else{
    numberErrorDiv.textContent="";
    
  }
}); 




function evaluarTarjeta (){
  const creditCardNumber = document.getElementById ("inputNumero1").value;
  if (validator.isValid(creditCardNumber) ===true) {
    //alert ("tarjeta válida");
    confirm('su tarjeta '+ validator.maskify(creditCardNumber) + ' es válida.'  +  " Desea continuar con su compra");
  }else {
    //alert ("tarjeta no valida");
    confirm('su tarjeta '+ validator.maskify(creditCardNumber) + ' No es válida.'  +  " Desea continuar con su compra");
  
  }
}
buttonCheck.addEventListener('click', ()=>{

});
console.log(validator);



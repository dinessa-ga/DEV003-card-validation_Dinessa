import validator from './validator.js';

const formulario=document.querySelector("formulario-tarjeta")

/*/Crear evento /*/
formulario.addEventListener("submit", ingresarD)

function ingresarD(){
    
    const ntarjeta=document.querySelector("inputNumero")
    const nombre=document.querySelector("inputNombre")

    const resultado=document.getElementById("resultado")
    alert("Ingresa un número de tarjeta correcto")


}
/* eslint-disable no-unused-vars */
const validator = {
  
  isValid:function (cardNumber){
    let oddSum = 0;
    let sum = 0;
    // convertirlo en un array y en número por que arroje un string
    const numToString = cardNumber.toString().split("").map(Number).reverse();
    for (let i = 0; i < numToString.length; i++) {
    //la posición del index es inpar
      if (i % 2 === 0) {                        
        //Cuando el resultado es mayor a 9    
        oddSum += numToString[i];
      } else {  
        //cuando la posicion  del index es par
        if (numToString[i] * 2 > 9) {
          sum += ((numToString[i] * 2) - 9);  
        } else {
          //Caundo el resultado da 9 o menos
          sum += (numToString[i]*2);   
        }
      }
    }
    return(oddSum+sum)%10===0;
  },

  maskify:function(cardNumber){

    if (cardNumber.length > 4) {
      const hideNumbers = "#".repeat(cardNumber.length -4);
      //devuelve un subconjunto de un objeto String 
      const showLastFour = cardNumber.substring(cardNumber.length - 4);
      const mask = hideNumbers + showLastFour;
      return mask;
    }
    else {
      return cardNumber;
    } 
  }
};

export default validator;

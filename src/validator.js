/* eslint-disable no-unused-vars */
const validator = {
  
  isValid:function (creditCardNumber){

    let oddSum = 0;
    let evenSum = 0;
 
    // convertirlo en un array y en numero por que arroja un string
    const numToString = creditCardNumber.toString().split("").map(Number).reverse();
    for (let i = 0; i < numToString.length; i++) {
    //la posicion del index es inpar
      if (i % 2 === 0) {                        
        //Cuando el resulta da mas de 9    
        oddSum += numToString[i];
         
      } else {  
        //cuando la posicion  del index es par
        if (numToString[i] * 2 > 9) {
          evenSum += ((numToString[i] * 2) - 9);  
        } else {
          //Caundo el resultado da 9 o menos
          evenSum += (numToString[i]*2);   
        }
      }

    }

  },
  maskify:function(creditCardNumber){

    if (creditCardNumber.length > 4) {
      const hideNumbers = "*".repeat(creditCardNumber.length - 4);
      const showLastFour = creditCardNumber.substring(creditCardNumber.length - 4);
      const mask = hideNumbers + showLastFour;
      return mask;
    }
    else {
      return creditCardNumber;
    } 
  }
};

export default validator;

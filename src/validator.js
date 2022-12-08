const validator = {
  
  // ...
  isValid: function validateCard(cardNumber) {
    // index par e impar
    // index par e impar
    let oddSum = 0;
    let evenSum = 0;
 
    // convertirlo en un array y en numero por que arroja un string
    const numToString = cardNumber.toString().split("").map(Number).reverse();
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
  }



}


export default validator;

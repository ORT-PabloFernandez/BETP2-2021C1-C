/**
 * Dada un conjunto de medias debe encontrar la cantidad de pares por color. 
 * Se proporciona un array el cual contiene el codigo de color de las medias
 * Determinar el numero maximo de pares del mismo color que se puede formar
 *
 */

/**
 * 
 * @param {Array} colorSocks 
 * @return {Number} 
 */
const sockMerchant = function(colorSocks){
 colorSocks.sort();
 let color = null;
 let totalPares = 0;
 let totalColorMedias=0;
 for (var i = 0; i < colorSocks.length; i++){
     if (colorSocks[i] != color){
        totalPares = totalPares + Math.floor(totalColorMedias/2);
        totalColorMedias = 1;
        color = colorSocks[i];
     }
     else{
         totalColorMedias = totalColorMedias + 1;
     };
 };
 return totalPares;   
};

// TESTS TDD
console.log(sockMerchant([1,2,1,2,1,3,2]) === 2);
console.log(sockMerchant([10,20,20,10,10,30,50,10,20]) === 3);

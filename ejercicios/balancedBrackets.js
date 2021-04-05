/**
 * Dado un string s que contiene solo los caracteres 
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 * 
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * 
 */

/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
const isValid = function(s){
    let resultado = true;
    let array = s.split("");
    let index = 0;
    while (index < array.length && resultado != false){
        let caracter = array[index];
        switch (caracter){
            case '(':
                if (!checkOpen(index, array, ')')){
                    resultado = false;
                }
                else{
                    index = index+2;
                };
                break;

            case ')':
                if (!checkClose(index,array, '(')){
                    resultado = false;
                }
                else{
                    index = index+1;
                };
                break;
                
            case '[':
                if (!checkOpen(index,array, '(', ']')){
                    resultado = false;
                }
                else{
                    index = index+2;
                };
                break;

            case ']':
                if (!checkClose(index,array, ')', '[')){
                    resultado = false;
                }
                else{
                    index = index+1;                
                };
                break;

            case '{':
                if (!checkOpen(index,array, '(', '[', '}')){
                    resultado = false;
                }
                else{
                    index = index+2;
                };
                break;

            case '}':
                if (!checkClose(index,array, ')', ']', '{')){
                    resultado = false;
                }
                else{
                    index = index+1;
                };
                break;
        };
    };
    return resultado;
};

const checkOpen = function(index, array, char, char2, char3){
    let resultado;
    let c = array[index+1];
    if (c != char && c != char2 && c != char3 ){
        resultado = false;
    }
    else {
        resultado = true;
    };
    return resultado;
}

const checkClose = function(index, array, char, char2, char3){
    let resultado;
    let c = array[index-1];
    if (c != char && c != char2 && c != char3 ){
        resultado = false;
    }
    else {
        resultado = true;
    };
    return resultado;
}




// TESTS
console.log(isValid('()') === true);
console.log(isValid('()[]{}')=== true);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{}{}(){[()]}') === true);





// reverse a string
let newStr = '';

function reverseAString(str){
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
        console.log(newStr);
    }
}

let resulado = reverseAString("Olá Nathan");

let userInput = prompt("lets check its palindrome or not");
let sepraInput = userInput.split("");
let  araryResv = sepraInput.slice().reverse();
let flage = true;
for(let i=0 ; i<sepraInput.length; i++){
    if(sepraInput[i] !== araryResv[i]){
        flage = false;
        break;
    }
}
if (flage) {
        alert("It's a palindrome!");
    } else {
         alert("It's not a palindrome.");
    }
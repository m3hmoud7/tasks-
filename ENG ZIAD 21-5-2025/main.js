//  1- function add 3 numbers



function adding(num1 , num2 , num3){
    return num1 + num2 + num3 
}

console.log(adding(5 , 3 , 6))



//  2- Multiply With Arrow function 




const multiply =  (num1 , num2 )=>{
    return num1 / num2
}

console.log(multiply(10,2))



//  3- Calculator With Evil 




function calculate(){
    let sum = document.querySelector(".input").value; 
    let result = document.querySelector(".result"); 
    
    return result.innerHTML = `${eval(sum)} : النتيجة `;
}
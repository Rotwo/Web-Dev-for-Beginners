/*

///////////////////////////
///////////////////////////
///////////////////////////
//      CHAPTER 1
///////////////////////////
///////////////////////////
///////////////////////////


let myVar = 123;

myVar = 321;

const MY_VAR_CONST = 123;

let string = 'This is my string!'

var allVars = nameOfFunction(myVar, MY_VAR_CONST, string);
console.log(allVars)

/**
 * This function logs the value of the variables myVar, MY_VAR_CONST, and string to the console

function nameOfFunction(_myVar, _MY_VAR_CONST,  _string){ 
    console.log("myVar: " + _myVar)
    console.log("MY_VAR_CONST " + _MY_VAR_CONST)
    console.log("string: " + _string)

    let allVariables = {_myVar, _MY_VAR_CONST, _string}

    return allVariables
}

setTimeout(nameOfFunction, 5000);

setTimeout(() => {
    console.log('3 seconds elapsed!');
}, 3000)

*/


/*
///////////////////////////
///////////////////////////
///////////////////////////
//      CHAPTER 2
///////////////////////////
///////////////////////////
///////////////////////////

let logAge = true
let age = 60;

CheckAge(age)

function CheckAge(age){
    if(age <= 13){
        LogResult('You are too young! 🐨')
    }   

    if(age > 13 && age < 60){
        LogResult('WoW! You are wise 📖')
    }

    if(age >= 60){
        LogResult('You are very wise 📚')
    }
}

function LogResult(message){
    if(logAge){
        console.log(message)
    }
}
*/

///////////////////////////
///////////////////////////
///////////////////////////
//      CHAPTER 3
///////////////////////////
///////////////////////////
///////////////////////////

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', '...']

let alphabetIndex = 8;

if(alphabetIndex >= alphabet.length){
    console.log('That letter can be founded!')
}
else{
    console.log(alphabet[alphabetIndex])
}

console.log('Letters in alphabet!')
for(let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i])
}

console.log('Numbers from 1 to 10!')
let num = 0;
while(num <= 10){
    console.log(num)
    num++;
}

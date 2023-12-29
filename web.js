//this is my first js code
//console.log('hello world');

// let name = "partha";
// console.log(name);

// let firstName = "partha";
// let secondName = "kapri";

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// const newInterestRate = 0.2
// console.log(newInterestRate);

// let name = 'partha'; //string literal
// let age = 25; //number leiteral
// let isApproved = false; //boolean literal
// let firstName = undefined;
// let selectedColor = null;

// let person = {
//     name: 'partha',
//     age: 25
// };

// //dot notation
// person.name = 'mintu';

// //bracket notation
// person['name'] = 'new';

// // console.log(person)
// // console.log(person.name);

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors);
// console.log(selectedColors.length);

// //performing a task
// function greet(firstName, lastName) {
//     console.log('hello ' + firstName + ' ' + lastName);
// }
// greet('partha', 'kapri');
// greet('mintu', 'kapri');

// //calculate a value
// function square(number) {
//     return number * number;
// }
// console.log(square(3))

let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let input = document.getElementById('input')
let scoreoutput = document.getElementById('score')
let score = 0
let answer

function renderRandomNumber () {
  input.value = null
  let rand1 = Math.floor(Math.random() * 100)
  let rand2 = Math.floor(Math.random() * 100)
  answer = rand1 + rand2
  number1.textContent = rand1
  number2.textContent = rand2
}

function checkAnswer() {
  if(answer == input.value) {
    score++
    showScore(score)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    renderRandomNumber()
  }else{
    score--
    if(score<0){
      score = 0
    }
    showScore(score)
  }
}

function showScore(score){
  scoreoutput.textContent = score
}

renderRandomNumber()

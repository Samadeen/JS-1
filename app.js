// 1. Converting human age to rabbit age
const convertToRabbitAge = (humanAge) => {
  const rabbitAge = +humanAge * 5;
  return rabbitAge;
};

const humanAge = prompt('How old are you?');
const rabbitAge = convertToRabbitAge(humanAge);
alert(
  `A ${humanAge}- year-old is roughly equivalent to a ${rabbitAge}-year-old in rabbit age`
);

// 2.Function to calculate BMI (Body Mass Index)
// Weight / Height * Height (BMI)
// height = height * 100 centimeters

function calculateBMI(weight, height) {
  height = height / 100;
  const rhema = 'Uzo';
  let bmi = weight / (height * height);
  return bmi;
}

let weight = prompt(`What's your weight? :`);
let height = prompt(`What's your height? :`);

// let bmi = ;
console.log(calculateBMI(weight, height));

if (bmi < 18.5) {
  alert('You are underweight');
} else if (bmi >= 18.5 && bmi < 25) {
  alert('You are normal weighted');
} else if (bmi >= 25 && bmi < 30) {
  alert('You are overweight');
} else {
  alert(' You are Obese');
}

// 3.Create a function that checks if the user guessed a number correctly

//Generate a random number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(Math.random());
// function that checks if the user guessed a number correctly
function guessNumber() {
  const minNum = 1;
  const maxNum = 50;
  const secretNum = getRandomNumber(minNum, maxNum); // Random number
  let guess;
  let attempts = 0;

  while (true) {
    guess = prompt(`Guess a number between ${minNum} and ${maxNum}:`);
    attempts++;

    // function that checks if the user entered a number
    if (guess === null || isNaN(guess)) {
      alert('Please enter a valid number');
      continue;
    }
    guess = parseInt(guess);
    // guess = +guess;

    if (guess === secretNum) {
      alert(
        `Congrats! You guessed the number ${secretNum} in ${attempts} attempts`
      );
      break;
    } else if (guess < secretNum) {
      alert('Too Lol, Try again');
    } else {
      alert('Too High! Try again');
    }
  }
}
guessNumber();

'use strict';

console.log("var = games asks the user if I play video games");
console.log("var = juice asks the user if I like grapejuice");
console.log("var = travel asks the user if I have ever lived abroad");
console.log("var = animals asks the user if I like animals");
console.log("var = people asks the user if I like people");

function askQuestion(question, yesAnswer, noAnswer) {
  var response = prompt(question);

  if (response == null) {
    alert('Canceled');
  }else if (response.trim().toLowerCase() == 'yes' || response.trim().toLowerCase() == 'y' ){
    alert(yesAnswer);
  }else if (response.trim().toLowerCase() == 'no' || response.trim().toLowerCase() == 'n' ){
    alert(noAnswer);
  }else{
    alert("Your response wasn't yes or no!");
  }
  console.log(question, response);
  return response;
}
var games = askQuestion('Do I love to play video games? (answer yes or no)', 'You are correct!', 'I play video games just about everyday!');
var juice = askQuestion('Do I like grapejuice? (answer yes or no)', 'Bleh, I hate it!', 'You are correct!');
var travel = askQuestion("Do you think that I've ever lived abroad? (answer yes or no)", 'You are correct!', 'I lived in Italy and Afghanistan!');
var animals = askQuestion("Am I an animal lover? (answer yes or no)", 'You are correct!', 'But I LOVE animals!');
var people = askQuestion('Do I like people? (answer yes or no)', 'You are correct!', 'What kind of person do you think I am!?');


function numberQuestion() {
  var number = 7;
  var notDone = true;
  var guessNum;
  for (var i = 4; i > 0 && notDone; i--){
    guessNum = prompt('What is my favorite number?');
    guessNum = parseInt(guessNum);

    if(guessNum === number){
      alert('Wow! You guessed the correct number!!');
      notDone = false;
      console.log('number answered correctly');

    }else if(i === 1){
      alert('You ran out of guesses!');

    }else if(guessNum > number){
      alert('You\'re too high!');

    }else{
      alert('You\'re too low!');
    }
  }
  return guessNum;
}
var numGuess = numberQuestion();

function countriesQuestion() {
  var countries = ['afghanistan', 'italy', 'germany']
  var guessCountry;
  var notDone = true;
  for (var i = 0; i < 6 && notDone; i++){
    guessCountry = prompt('Can you name a country that I lived in?');

    if (guessCountry == null) {
      alert('Canceled');
    }else if (guessCountry.toLowerCase() === countries[0] || guessCountry.toLowerCase() === countries[1] || guessCountry.toLowerCase() === countries[2]){
      alert('Wow! ' + guessCountry + ' is correct!');
      notDone = false;
      console.log('country answered correctly');

    }else if(i === 5){
      alert('You ran out of guesses!!');

    }else{
      alert('I never lived there!');
    }

  }
  return guessCountry;
}
var countryGuess = countriesQuestion();


function printTally() {
  var tally = 0;

  if(countryGuess === 'afghanistan' || countryGuess === 'germany' || countryGuess === 'italy'){
    tally++;
  }if (numGuess === 7){
    tally++;
  }if(games === null){
    tally = tally;
  }else if(games.trim().toLowerCase() == 'yes' || games.trim().toLowerCase() == 'y'){
    tally++;

  }if(animals === null){
    tally = tally;
  }else if(animals.trim().toLowerCase() == 'yes' || animals.trim().toLowerCase() == 'y'){
    tally++;

  }if(travel === null){
    tally = tally;
  }else if(travel.trim().toLowerCase() == 'yes' || travel.trim().toLowerCase() == 'y'){
    tally++;

  }if(juice === null){
    tally = tally;
  }else if(juice.trim().toLowerCase() == 'no' || juice.trim().toLowerCase() == 'n'){
    tally++;

  }if(people === null){
    tally = tally;
  }else if(people.trim().toLowerCase() == 'yes' || people.trim().toLowerCase() == 'y'){
    tally++;
  }
  alert('You answered ' + tally + ' out of 7 correct, what ever your name is!');
  if(tally > 5){
    alert('Wow! You know me very well!')
  }else if(tally > 3 && tally < 6 ){
    alert('Great job!');
  }else{
    alert('You don\'t know me very much!');
  }
}
printTally();

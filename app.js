'use strict';

console.log("var = games asks the user if I play video games");
console.log("var = juice asks the user if I like grapejuice");
console.log("var = travel asks the user if I have ever lived abroad");
console.log("var = animals asks the user if I like animals");
console.log("var = people asks the user if I like people");

var games = prompt('Do I love to play video games? (answer yes or no)');

  if (games == null) {
    alert('Canceled');
  }else if (games.trim().toLowerCase() == 'yes' || games.trim().toLowerCase() == 'y' ){
    alert('You are correct!');
  }else if (games.trim().toLowerCase() == 'no' || games.trim().toLowerCase() == 'n' ){
    alert('I play video games just about everyday!');
  }else{
    alert("Your response wasn't yes or no!");
  }

var juice = prompt('Do I like grapejuice? (answer yes or no)');

  if (juice == null) {
    alert('Canceled');
  }else if (juice.trim().toLowerCase() == 'yes' || juice.trim().toLowerCase() == 'y' ){
    alert('Bleh, I hate it!');
  }else if (juice.trim().toLowerCase() == 'no' || juice.trim().toLowerCase() == 'n' ){
    alert('You are correct!')
  }else{
    alert("Your resonse wasn't yes or no!");
  }

var travel = prompt("Do you think that I've ever lived abroad? (answer yes or no)");

  if (travel == null) {
    alert('Canceled');
  }else if (travel.trim().toLowerCase() == 'yes' || travel.trim().toLowerCase() == 'y' ){
    alert('You are correct!');
  }else if (travel.trim().toLowerCase() == 'no' || travel.trim().toLowerCase() == 'n' ){
    alert('I lived in Italy and Afghanistan!');
  }else{
    alert("Your response wasn't yes or no!");
  }

var animals = prompt("Am I an animal lover? (answer yes or no)");

if (animals == null) {
  alert('Canceled');
}else if (animals.trim().toLowerCase() == 'yes' || animals.trim().toLowerCase() == 'y' ){
  alert('You are correct!');
}else if (animals.trim().toLowerCase() == 'no' || animals.trim().toLowerCase() == 'n' ){
  alert('But I LOVE animals!');
}else{
  alert("Your response wasn't yes or no!");
}

var people = prompt('Do I like people? (answer yes or no)');

if (people == null) {
  alert('Canceled');
}else if (people.trim().toLowerCase() == 'yes' || people.trim().toLowerCase() == 'y' ){
  alert('You are correct!');
}else if (people.trim().toLowerCase() == 'no' || people.trim().toLowerCase() == 'n' ){
  alert('What kind of person do you think I am!?');
}else{
  alert("Your response wasn't yes or no!");
}

var number = 7;
var notDone = true;
var rightNum;
for (var num = 4; num > 0 && notDone; num--){
  var rightNum = prompt('What is my favorite number?');
  rightNum = parseInt(rightNum);

  if(rightNum === number){
    alert('Wow! You guessed the correct number!!');
    notDone = false;

  }else if(num === 1){
      alert('You ran out of guesses!');

  }else if(rightNum > number){
    alert('You\'re too high!');

  }else{
    alert('You\'re too low!');
  }
}

var countries = ['afghanistan', 'italy', 'germany']
var guessCountry;
notDone = true;
for (var place = 0; place < 6 && notDone; place++){
  guessCountry = prompt('Can you name a country that I lived in?');

  if (guessCountry.toLowerCase() === countries[0] || guessCountry.toLowerCase() === countries[1] || guessCountry.toLowerCase() === countries[2]){
    alert('Wow! You guessed a country I lived in!');
    notDone = false;

  }else if(place === 5){
    alert('You ran out of guesses!!');

  }else{
    alert('I never lived there!');
  }

}

var tally = 0;
// if(rightCountry === 'italy'){
//      tally++;
// }
// if(rightCountry === 'germany'){
//   tally++;
//}

if(rightCountry === 'afghanistan' || rightCountry === 'germany' || rightCountry === 'italy'){
  tally++;
}if (rightNum === 7){
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

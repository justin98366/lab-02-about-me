'use strict';

console.log('lulwhat this rocks!');

var games = prompt('Do I love to play video games? (answer yes or no)');
if (games.trim().toLowerCase() == 'yes' || games.trim().toLowerCase() == 'y' ){
  alert('You are correct!');
}
else if (games.trim().toLowerCase() == 'no' || games.trim().toLowerCase() == 'n' ){
  alert('I play video games just about everyday!');
}
else{
  alert("Your response wasn't yes or no!");
}

var juice = prompt('Do I like grapejuice? (answer yes or no)');
if (juice.trim().toLowerCase() == 'yes' || juice.trim().toLowerCase() == 'y' ){
  alert('Bleh, I hate it!');
}
else if (juice.trim().toLowerCase() == 'no' || juice.trim().toLowerCase() == 'n' ){
  alert('You are correct!')
}
else{
  alert("Your resonse wasn't yes or no!");
}

var travel = prompt("Do you think that I've ever lived abroad? (answer yes or no)");
if (travel.trim().toLowerCase() == 'yes' || travel.trim().toLowerCase() == 'y' ){
  alert('You are correct!');
}
else if (juice.trim().toLowerCase() == 'no' || juice.trim().toLowerCase() == 'n' ){
  alert('I lived in Italy and Afghanistan!');
}
else{
  alert("Your response wasn't yes or no!");
}

var animals = prompt("Am I an animal lover? (answer yes or no)");
if (animals.trim().toLowerCase() == 'yes' || animals.trim().toLowerCase() == 'y' ){
  alert('You are correct!');
}
else if (animals.trim().toLowerCase() == 'no' || animals.trim().toLowerCase() == 'n' ){
  alert('But I LOVE animals!');
}
else{
  alert("Your response wasn't yes or no!");
}

var people = prompt('Do I like people? (answer yes or no)');
if (people.trim().toLowerCase() == 'yes' || people.trim().toLowerCase() == 'y' ){
  alert('You are correct!');
}
else if (people.trim().toLowerCase() == 'no' || people.trim().toLowerCase() == 'n' ){
  alert('What kind of person do you think I am!?');
}
else{
  alert("Your response wasn't yes or no!");
}

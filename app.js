'use strict';
var country = confirm('Have i visited more than 10 country?');
if(country === true) {
  alert('guess again');
  console.log('I have visited only 7 country');
} else {
  alert('You Got it.');
}
var lived = prompt('Have I lived in US more than 20 yrs?');
if(lived === 'yes') {
  console.log(lived + ' is Correct');
} else {
  console.log('I lived here 27 yrs');
  alert('Boo Boo!!!');
  console.log('alphabet'.toUpperCase());
  console.log('alphabet'.toLowerCase());
}
var kids = confirm('Do I have kids in High School?');
if(kids === false) {
  alert('still in middle School');
} else {
  alert('NOO NOO...');
  console.log('One more year to go!!!');
}
var food = prompt('Have I eat frog legs before?');
if(food === 'yes') {
  console.log(food + ' ,taste like chicken');
} else {
  alert('You missing a good stuff..');
  console.log('alphabet'.toUpperCase());
  console.log('alphabet'.toLowerCase());
}
var music = confirm('Do I like to listen to Heavy Metal Music?');
if(music === false) {
  alert('Couldn\'t handle it');
} else {
  alert('Never, Never, Never');
  console.log(music + ' ,I don\'t like to listen to Heavy Metal Music');
}
  var time = 0;
while(true) {
  var number = prompt('Guess a number between 1 and 10?');
  if(number === '7') {
    alert(number + ' is the right number');
    break;
  } else if(time > 3) {
    alert('You didn\'t guess it');
    console.log('You didn\'t guess it');
    break;
  }
   time++;
   console.log('you guess ' + time);
}

   var water = 0;
   while(true) {
   var cup = prompt('How many cup of water should you drink in 1 day');
   if(cup === '8') {
     alert(cup + ' is correct');
     break;
   } else if(water > 3) {
     alert('The correct anser is 8');
     console.log('The correct anser is 8');
     break;
   }
    water++;
    console.log(water);
   }

    while(true) {
    var musicString = prompt('How many hours I listen to Music?');
    var music = parseInt(musicString);
    if(music === 5) {
      alert(music + ' hours is correct');
      break;
    } else if(music < 10 && music > 5 ) {
      alert('Too high');
    } else if(music > 0) {
      alert('Too low');
      break;
    }
    console.log('Better luck next time');
}

  var characters = 0;
  while(true) {
  var game = prompt('How many pokemon in US?');
  if(game === '142') {
    alert('Wow you\'re good!');
    break;
  } else if(characters > 3) {
    alert('Better luck next time');
    break;
  }
    characters++;
    console.log('The answer is 142');
}

  var height = 0;
  while(true) {
  var spaceNeedle = prompt('How tall is Space Needle?');
   if(spaceNeedle === '605') {
     alert('Congratulation!!!');
     break;
   } else if(height > 3) {
     alert('Is 605 Feet tall');
     break;
   }
   height++;
  }

  while(true) {
    var duiString = prompt('What is the alcohol level to be consider as DUI?');
    var number = parseInt(duiString);
    if(number === 0.08) {
    alert('How do you know!!!');
    break;
  } else if(number < 0.1 && number > 0.08) {
    alert('Too high');
    break;
  } else if(number > 0.07) {
    alert('Too low');
    break;
  }
   console.log('is 0.08');
}

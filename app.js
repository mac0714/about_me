'use strict';

function question1() {
  var country = confirm('Have i visited more than 10 country?');
  if(country === true) {
    alert('guess again');
    console.log('I have visited only 7 country');
  } else {
    alert('You Got it.');
  }
}

function question2() {
  var lived = prompt('Have I lived in US more than 20 yrs?');
  if(lived.toLowerCase() === 'yes' || lived.toLowerCase() === 'y') {
    alert('That is Correct');
    console.log('That is is Correct');
  } else {
    console.log('I lived here 27 yrs');
    alert('I\'ve lived here 27 years');
  }
}

function question3() {
  var kids = confirm('Do I have kids in High School?');
  if(kids === false) {
    alert('still in middle School');
  } else {
    alert('NOO NOO...');
    console.log('One more year to go!!!');
  }
}

function question4() {
  var food = prompt('Have I eat frog legs before?');
  if(food.toLowerCase() === 'yes' || food.toLowerCase() === 'y') {
    alert('Tastes like chicken');
    console.log(food + ' ,taste like chicken');
  } else {
    alert('You missing a good stuff..');
    console.log('You\'re missing good stuff.');
  }
}

function question5() {
  var music = confirm('Do I like to listen to Heavy Metal Music?');
  if(music === false) {
    alert('Couldn\'t handle it');
    console.log('Couldn\'t handle it.');
  } else {
    alert('Never, Never, Never');
    console.log('I don\'t like to listen to Heavy Metal Music');
  }
}

// function question6() {
//   var time = 0;
//   while(true) {
//     var number = prompt('Guess a number between 1 and 10?');
//     if(number === '7') {
//       alert('7 is the right number');
//       break;
//     } else if(time > 3) {
//       alert('You didn\'t guess it');
//       console.log('You didn\'t guess it');
//       break;
//     }
//     time++;
//     console.log('you guess ' + time);
//   }
//  var water = 0;
// while(true) {
//   var cup = prompt('How many cup of water should you drink in 1 day');
//   if(cup === '8') {
//     alert(cup + ' is correct');
//     break;
//   } else if(water > 3) {
//     alert('The correct anser is 8');
//     console.log('The correct anser is 8');
//     break;
//   }
//   water++;
//   console.log(water);
// }

function question6() {
  var tries = 1;
  while(true) {
    var musicString = prompt('How many hours I listen to Music?');
    var music = parseInt(musicString);
    if(music === 5) {
      alert('5 hours is correct');
      console.log('5 hours is corret');
      break;
    } else if (music > 5 && tries < 4) {
      alert('Too high');
      console.log('Too high');
    } else if (music < 5 && tries < 4) {
      alert('Too low');
      console.log('Too low');
    } else {
      alert('Better luck next time');
      console.log('Better luck next time');
      break;
    }
    tries += 1;
  }
}

// var characters = 0;
// while(true) {
//   var game = prompt('How many pokemon in US?');
//   if(game === '142') {
//     alert('Wow you\'re good!');
//     break;
//   } else if(characters > 3) {
//     alert('Better luck next time');
//     break;
//   }
//   characters++;
//   console.log('The answer is 142');
// }
//
// var height = 0;
// while(true) {
//   var spaceNeedle = prompt('How tall is Space Needle?');
//   if(spaceNeedle === '605') {
//     alert('Congratulation!!!');
//     break;
//   } else if(height > 3) {
//     alert('Is 605 Feet tall');
//     break;
//   }
//   height++;
// }
//
// while(true) {
//   var duiString = prompt('What is the alcohol level to be consider as DUI?');
//   var number = parseInt(duiString);
//   if(number === 0.08) {
//     alert('How do you know!!!');
//     break;
//   } else if(number < 0.1 && number > 0.08) {
//     alert('Too high');
//     break;
//   } else if(number > 0.07) {
//     alert('Too low');
//     break;
//   }
//   console.log('is 0.08');
// }

function question7() {
  var hobbies = ['running', 'biking', 'lego', 'rc racing', 'music'];

  for (var i = 1; i < 7; i++) {
    var hobbyAnswer = prompt('What are some of my hobbies?');
    if (hobbies.includes(hobbyAnswer.toLowerCase())) {
      alert('Congratulations, that\'s correct!');
      console.log('Congratulations, that\'s correct!');
      break;
    } else if (i < 6) {
      alert('No, try again');
      console.log('no try again');
    } else {
      alert('better luck next time');
      console.log('better luck next time');
    }
  }
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

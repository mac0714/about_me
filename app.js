'use strict';
var correct = 0;
function question1() {
  var country = confirm('Have i visited more than 10 country?');
  if(country === true) {
    alert('guess again');
    console.log('I have visited only 7 country');
  } else {
    alert('You Got it.');
    correct += 0;
  }
}

function question2() {
  var lived = prompt('Have I lived in US more than 20 yrs?');
  if(lived.toLowerCase() === 'yes' || lived.toLowerCase() === 'y') {
    alert('That is Correct');
    console.log('That is is Correct');
    correct += 0;
  } else {
    console.log('I lived here 27 yrs');
    alert('I\'ve lived here 27 years');
  }
}

function question3() {
  var kids = confirm('Do I have kids in High School?');
  if(kids === false) {
    alert('still in middle School');
    correct += 0;
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
    correct += 0;
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
    correct += 0;
  } else {
    alert('Never, Never, Never');
    console.log('I don\'t like to listen to Heavy Metal Music');
  }
}

function question6() {
  var tries = 1;
  while(true) {
    var musicString = prompt('How many hours I listen to Music?');
    var music = parseInt(musicString);
    if(music === 5) {
      alert('5 hours is correct');
      console.log('5 hours is corret');
      correct += 0;
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

function question7() {
  var hobbies = ['running', 'biking', 'lego', 'rc racing', 'music'];

  for (var i = 1; i < 7; i++) {
    var hobbyAnswer = prompt('What are some of my hobbies?');
    if (hobbies.includes(hobbyAnswer.toLowerCase())) {
      alert('Congratulations, that\'s correct!');
      console.log('Congratulations, that\'s correct!');
      correct += 0;
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
var question = 0;
if (correct === 7) {
  alert('You got all the question right');
  console.log('You got all the question right');
} else if (correct < 6) {
  alert('You only get ' + correct);
  console.log('You only get ' + correct);
}

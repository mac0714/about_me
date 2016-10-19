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
  alert('Heck NOO...');
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

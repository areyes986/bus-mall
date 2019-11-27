'use script';

//Global variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');

var picArray = [];
//create constructor

function Pictures(src, name) {
  this.src = `../img/${src}.jpg`;
  this.title = name;
  this.alt = name;

  picArray.push(this);
}

function createOnPageLoad() {
  new Pictures('bag', 'Bag');
  new Pictures('banana', 'Banana');
  new Pictures('bathroom', 'Bathroom');
  new Pictures('boots', 'Boots');
  new Pictures('breakfast', 'Breakfast');
  new Pictures('bubblegum', 'Bubble Gum');
  new Pictures('chair', 'Chair');
  new Pictures('cthulhu', 'Cthulhu');
  new Pictures('dog-duck', 'Dog Duck');
  new Pictures('dragon', 'Dragon');
  new Pictures('pen', 'Pen');
  new Pictures('pet-sweep', 'Pet Sweep');
  new Pictures('scissors', 'Scissors');
  new Pictures('shark', 'Shark');
  new Pictures('sweep', 'Sweep');
  new Pictures('tauntaun', 'Tauntaun');
  new Pictures('unicorn', 'Unicorn');
  new Pictures('usb', 'USB');
  new Pictures('water-can', 'Water Can');
  new Pictures('wine-glass', 'Win Glass');
}


createOnPageLoad();
console.table(picArray);

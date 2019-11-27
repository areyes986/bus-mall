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

//Random index gen
function randomIndex(max){
  return Math.floor(Math.random() * Math.floor(max));
}


function generateImages(){
  var index = randomIndex(picArray.length);

  picOne.src = picArray[index].src;
  picOne.title = picArray[index].title;
  picOne.alt = picArray[index].alt;

  var indexTwo = randomIndex(picArray.length);

  while(indexTwo === index){
    indexTwo = randomIndex(picArray.length);
  }

  picTwo.src = picArray[indexTwo].src;
  picTwo.title = picArray[indexTwo].title;
  picTwo.alt = picArray[indexTwo].alt;

  var indexThree = randomIndex(picArray.length);

  while(indexThree === indexTwo){
    indexThree = randomIndex(picArray.length);
  }

  picThree.src = picArray[indexThree].src;
  picThree.title = picArray[indexThree].title;
  picThree.alt = picArray[indexThree].alt;

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
generateImages();
// console.table(picArray);

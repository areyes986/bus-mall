'use script';

//Global variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');

var pictureContainer = document.getElementById('imageContainer');

var picArray = [];
var rounds = 0;

//create constructor
function Pictures(src, name) {
  this.src = `../img/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.click = 0;
  this.viewed = 0;
  this.product = `${name} had $`

  picArray.push(this);
}

//Random index gen
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function generateImages() {
  var indexOne = randomIndex(picArray.length);

  picOne.src = picArray[indexOne].src;
  picOne.title = picArray[indexOne].title;
  picOne.alt = picArray[indexOne].alt;

  picArray[indexOne].viewed++;

  var indexTwo = randomIndex(picArray.length);

  while (indexTwo === indexOne) {
    indexTwo = randomIndex(picArray.length);
  }
  picTwo.src = picArray[indexTwo].src;
  picTwo.title = picArray[indexTwo].title;
  picTwo.alt = picArray[indexTwo].alt;

  picArray[indexTwo].viewed++;

  var indexThree = randomIndex(picArray.length);

  while (indexThree === indexTwo || indexThree === indexOne) {
    indexThree = randomIndex(picArray.length);
  }

  picThree.src = picArray[indexThree].src;
  picThree.title = picArray[indexThree].title;
  picThree.alt = picArray[indexThree].alt;

  picArray[indexThree].viewed++;
}



//event listener
function handleClick(event) {
  var vote = event.target.title;
  for (var i = 0; i < picArray.length; i++) {
    if (vote === picArray[i].title) {
      picArray[i].click++;
    }
  }
  rounds++;
  console.log(rounds);
  if (rounds === 25){
    document.getElementById('imageContainer').innerHTML = '';
  }
  generateImages();
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
  new Pictures('dragon', 'Dragon Meat');
  new Pictures('pen', 'Pen');
  new Pictures('pet-sweep', 'Pet Sweep');
  new Pictures('scissors', 'Scissors');
  new Pictures('shark', 'Shark');
  new Pictures('sweep', 'Sweep');
  new Pictures('tauntaun', 'Tauntaun');
  new Pictures('unicorn', 'Unicorn');
  new Pictures('usb', 'USB');
  new Pictures('water-can', 'Water Can');
  new Pictures('wine-glass', 'Wine Glass');
}


createOnPageLoad();
pictureContainer.addEventListener('click', handleClick);
generateImages();
// console.table(picArray);

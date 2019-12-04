'use script';

//Global variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');

var getRounds = document.getElementById('rounds');
var pictureContainer = document.getElementById('imageContainer');
var getProducts = document.getElementById('product-list');

var chartContainer = document.getElementById('myChart');

var picArray = [];
var picArrayGenerate = [picOne, picTwo, picThree,];
var rounds = 25;

//create constructor
function Pictures(src, name) {
  this.src = `../img/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.click = 0;
  this.viewed = 0;

  picArray.push(this);
}

//Random index gen
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function generateImages() {
  var currentImages = [];
  for (var i = 0; i < picArrayGenerate.length; i++) {
    var indexes = randomIndex(picArray.length);
    while (currentImages.includes(indexes)) {
      indexes = randomIndex(picArray.length);

    }
    currentImages.push(indexes);
    // console.log(currentImages);

    picArrayGenerate[i].src = picArray[indexes].src;
    picArrayGenerate[i].title = picArray[indexes].title;
    picArrayGenerate[i].alt = picArray[indexes].alt;
    picArray[indexes].viewed++;
  }
}



//event listener
function handleClick(event) {
  var vote = event.target.title;
  for (var i = 0; i < picArray.length; i++) {
    if (vote === picArray[i].title) {
      picArray[i].click++;
    }
  }
  rounds--;
  countRounds();
  generateImages();
  if (rounds === 0) {
    hide(getRounds);
    hide(pictureContainer);
    makeChart();
    // listProducts();
  }
  generateImages();
  // console.table(picArray);
}

//stating which round user is on
function countRounds() {
  getRounds.textContent = `Round ${rounds}`;
}

// show hide elem
// function show(elem){
//   elem.style.display = 'block';
// }

function hide(elem) {
  elem.style.display = 'none';
}

// list of products
// function listProducts() {
//   for (var i = 0; i < picArray.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${picArray[i].title} had ${picArray[i].click} votes and was shown ${picArray[i].viewed} times`;
//     getProducts.appendChild(liEl);
//   }
// }

//my chart

function makeChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
      }]
    },

    // Configuration options go here
    options: {}
  });
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
countRounds();
// console.table(picArray);

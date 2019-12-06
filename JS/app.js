'use script';

///// GLOBAL VARIABLES /////
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');

var getRounds = document.getElementById('rounds');
var pictureContainer = document.getElementById('imageContainer');

var picArray = [];
var picArrayGenerate = [picOne, picTwo, picThree,];
var rounds = 25;
var picArrayTitle = [];
var picArrayViewed = [];
var picArrayClicked = [];

///// CREATE CONSTRUCTOR /////
function Pictures(src, name) {
  this.src = `../img/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.click = 0;
  this.viewed = 0;

  picArray.push(this);
}

///// RANDOM INDEX GEN /////
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

    picArrayGenerate[i].src = picArray[indexes].src;
    picArrayGenerate[i].title = picArray[indexes].title;
    picArrayGenerate[i].alt = picArray[indexes].alt;
    picArray[indexes].viewed++;
  }
}



///// EVENT LISTENER /////
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
    saveData();
    // listProducts();
  }
  generateImages();
  // console.table(picArray);
}

///// SAVE DATA /////
function saveData(){
  var makeIntoString = JSON.stringify(picArray);
  localStorage.setItem('pictures', makeIntoString);
}

/// GET DATA /////
function getData(){
  var retrieveData = localStorage.getItem('pictures');
  var makeIntoObject = JSON.parse(retrieveData);

  if (makeIntoObject !== null ){
    for(var i = 0; i < picArray.length; i++){
      picArray[i].click =+ makeIntoObject[i].click;
      console.log(makeIntoObject[i].click);
    }
  }
}


///// TELLING USER WHICH ROUNDS THEY ARE ON /////
function countRounds() {
  getRounds.textContent = `Round ${rounds}`;
}

///// HIDE FUNCTION /////
function hide(elem) {
  elem.style.display = 'none';
}

///// LIST OF PRODUCTS /////
// function listProducts() {
//   for (var i = 0; i < picArray.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${picArray[i].title} had ${picArray[i].click} votes and was shown ${picArray[i].viewed} times`;
//     getProducts.appendChild(liEl);
//   }
// }



///// CHART /////
function makeChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  for (var i = 0; i < picArray.length; i++) {
    picArrayTitle.push(picArray[i].title);
    picArrayViewed.push(picArray[i].viewed);
    picArrayClicked.push(picArray[i].click);

  }

  Chart.defaults.global.defaultFontFamily	= 'Sulphur Point';

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: picArrayTitle,
      datasets: [{
        label: 'Views',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: picArrayViewed
      },

      {
        label: 'Votes',
        backgroundColor: 'rgb(255,177,193)',
        borderColor: 'rgb (255,177,193)',
        data: picArrayClicked
      },
      ],

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
getData();
console.table(picArray);
pictureContainer.addEventListener('click', handleClick);
generateImages();
countRounds();

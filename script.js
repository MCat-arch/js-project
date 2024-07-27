

let title = document.querySelector('.title');
let text = document.querySelector('.text');
const button1 = document.getElementById('button1');
const card = document.querySelector('.card');
const gameDiv = document.querySelector('.game');
const okButton = document.querySelector('.button-ok');
const nameAskDiv = document.querySelector('.name-ask');
const nameButton = document.querySelector('.button-name');
const questionDiv = document.querySelector('.question');
const divcard2 = document.querySelector('.div-card2');

//LETS USE BOOLEAN FUNCTION ON EACH SECTION. IF DISPLAY = TRUE, 


//button1.classList.add("fButton");


/*
button1.addEventListener('click', event =>{
    event.preventDefault;
    event.target.classList.replace("fButton", "disablef");
    card.style.visibility = 'visible';
    newBox.classList.add('childBox');
    document.body.append(newBox);
});
*/

// Get the necessary elements

// Show the game div when button1 is clicked
button1.addEventListener('click', () => {
    card.style.visibility = 'visible';
    gameDiv.style.display = 'block';



});

// Show the name-ask div when the OK button is clicked
okButton.addEventListener('click', () => {
  nameAskDiv.style.display = 'block';
  gameDiv.style.display = 'none';
});

// Show the question div and hide other elements when the Done button is clicked
nameButton.addEventListener('click', () => {
  questionDiv.style.display = 'block';
  nameAskDiv.style.display = 'none';
  gameDiv.style.display = 'none';

  // Hide all elements that are not part of the question div
  const otherElements = document.querySelectorAll('body > :not(.question)');
  otherElements.forEach(element => {
    element.style.display = 'none';
  });
});

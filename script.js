

let title = document.querySelector('.title');
let text = document.querySelector('.text');
const newBox = document.createElement('div');

const button1 = document.getElementById('button1');
const card = document.querySelector('.card');
isDiplay(false, card);

const nav = document.querySelector('nav');


const navSection = document.getElementById('nav-section');
const divCard3 = document.querySelector('.div-card3');
isDiplay(false, divCard3);

const divCard2 = document.querySelector('.div-card2');

const imgdiv = document.querySelector('.div-card-img');
const buttonimg = document.getElementById('button-img');
let imageOpt1 = document.querySelectorAll('.image-options');
let imageOpt2 = document.querySelectorAll('image-opt');

const result = document.querySelector('.result');
isDiplay(false, result);

const divLast = document.querySelector('.div-last');
const buttonFinish = document.getElementById('finish');
isDiplay(false, divLast);

button1.classList.add("fButton");

let totalScore = 0;

//LETS USE BOOLEAN FUNCTION ON EACH SECTION. IF DISPLAY = TRUE, 
function isDiplay(bool, element, style){
  const showElement = ()=>{
    if(style === 'flex'){
      element.style.display = 'flex';
    }else if(style === 'content'){
      element.style.display = 'content';
    }else{
      element.style.display = 'block';
    }
  }

  const hideElement = () =>{
    element.style.display = 'none';
  }
  if(bool){
   showElement();
  }else{
    hideElement();
  }
}

button1.addEventListener('click', event =>{
    event.preventDefault;
    event.target.classList.replace("button1", "disablef");
    isDiplay(true, card, 'flex');
    card.scrollIntoView({ behavior: 'smooth' });
    //nav.style.visibility = 'visible';
   // newBox.classList.add('childBox');
    document.body.append(newBox);
});

function doneButton() {
  isDiplay(true, divCard3, 'block');
  // divCard3.style.display = 'content';
  isDiplay(false, card);
  isDiplay(false, divCard2)

  navSection.style.visibility = 'visible';
 

}

buttonimg.addEventListener('click', event =>{
  console.log("tes");
  calculateFormScore();
  divCard3.style.display ='none';
  imgdiv.style.display = 'block';
})

buttonFinish.addEventListener('click', ()=>{
  isDiplay(true, divLast, 'flex');
  isDiplay(false, imgdiv);
  isDiplay(false, result);
})


let score = 0;
let selectedImages = { group1: false, group2: false };

// Function to handle image click
const handleImageClick = (event) => {
    event.preventDefault(); // Prevent default action (e.g., zoom)

    const group = event.target.dataset.group;
    const optionValue = parseInt(event.target.dataset.option);

    // Reset other images in the same group
    document.querySelectorAll(`img[data-group='${group}']`).forEach(img => {
        img.style.pointerEvents = 'auto';
        img.style.border = 'none';
    });

    // Mark the clicked image as selected
    event.target.style.pointerEvents = 'none';
    event.target.style.border = '2px solid red';

    // Update the score and selection status
    score += optionValue;
    selectedImages[`group${group}`] = true;

    // Check if all images are selected and display the result
    if (selectedImages.group1 && selectedImages.group2) {
        isDiplay(true, result, 'flex');
        console.log("current score:", score);
        document.getElementById('score').innerText = score;
    }
};

// Add event listeners to all images in both groups
document.querySelectorAll('.image-options img, .image-opt img').forEach(img => {
    img.addEventListener('click', handleImageClick);
});


  const formScore = {
    question1: {
      paris: 10,
      london: 5,
      berlin: 0
    },
    question2: {
      one: 0,
      two: 10,
      three: 0
    },
    question3: {
        val1: 10,
        val2: 0,
        val3: 0
    }
  };
  function calculateFormScore () {
   // event.preventDefault();
    const formIds = ['quizForm', 'quizForm2', 'quizForm3'];
    formIds.forEach(id => {
        const form = document.getElementById(id);
        const formData = new FormData(form);
        for (let entry of formData.entries()) {
            score += entry[1] === 'correct' ? 10 : 0; // Adjust as per your scoring logic
        }
    });

    // Display the final score
    document.getElementById('score').innerText = score;
};

// Get the necessary elements

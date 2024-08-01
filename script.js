

let title = document.querySelector('.title');
let text = document.querySelector('.text');
const newBox = document.createElement('div');

const button1 = document.getElementById('button1');
const card = document.querySelector('.card');
const nav = document.querySelector('nav');


const navSection = document.getElementById('nav-section');
const divCard3 = document.querySelector('.div-card3');
const divCard2 = document.querySelector('.div-card2');
const mainFrame = document.querySelector('.main-frame');

const imgdiv = document.querySelector('.div-card-img');
const buttonimg = document.getElementById('button-img');



//LETS USE BOOLEAN FUNCTION ON EACH SECTION. IF DISPLAY = TRUE, 


button1.classList.add("fButton");
card.style.visibility = 'hidden';



button1.addEventListener('click', event =>{
    event.preventDefault;
    card.scrollIntoView({ behavior: 'smooth' });
    nav.style.visibility = 'visible';
    event.target.classList.replace("fButton", "disablef");
    card.style.visibility = 'visible';
   // newBox.classList.add('childBox');
    document.body.append(newBox);
});

function doneButton() {
  card.style.display = 'none';
  divCard2.style.display = 'none';
  navSection.style.visibility = 'visible';

}

buttonimg.addEventListener('click', event =>{
  console.log("tes");
  divCard3.style.display ='none';
  imgdiv.style.display = 'block';
})


// Get the necessary elements

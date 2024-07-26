
const button1 = document.getElementById('button1');
button1.classList.add("fButton");
let text = document.createElement('h1');

button1.addEventListener('click', event =>{
    event.preventDefault;
    text = window.prompt('enter any text');
    event.target.classList.replace("fButton", "disablef");
    let newBox = document.createElement("div");
    newBox.textContent = text;
    newBox.classList.add('childBox');
    document.body.append(newBox);
});
// Your code goes here

function getSem(selector) {
    return document.querySelector(selector)
}

// Titles change color/mouseover
const welcome = getSem('.intro h2');

function highlight(event){
    event.target.style.color = 'blue';
}

welcome.addEventListener('mouseover', highlight)  

// keydown/escape 


const cantLeave = getSem('.nope');

function onEscape(event) {
    if (event.key === 'Escape'){
        cantLeave.classList.remove('nope')
        console.log('ah ah ah you didnt say they magic words')
    }
}

window.addEventListener('keydown', onEscape)


// wheel

const bigAdv = getSem('.footer p');

function fontZoom(event) {
    event.target.style.fontSize = '25px';
}

bigAdv.addEventListener('wheel', fontZoom);

// drag/drop-have to finish still don't get it

// function dragStartHandler(event){
//     event.dataTransfer.setData('img/jpeg', event.target.class)
//     event.dataTransfer.dropEffect = 'move';
// }

// window.addEventListener('DomContentLoaded',() => {
//     const bus = getSem('.buspic')
//     bus.addEventListener('dragstart', dragStartHandler);


// load 

window.addEventListener('load', (event) => {
    console.log('say the magic word to escape');
});

// focus

const navBco = getSem('.nav a');

function blueBackg (event) {
    event.target.style.background = 'lightblue'
}

function clearBackg (event) {
    event.target.style.background = '';
}

navBco.addEventListener('focus', blueBackg);
  
navBco.addEventListener('blur', clearBackg);

// resize

function windowSize (event) {
    console.log('windowheight:', window.innerHeight);
    console.log('windowwidth', window.innerWidth)
}

window.addEventListener('resize', windowSize);

// scroll 

const funTitle = getSem('.logo-heading');

function rotateLogo (event) {
    funTitle.style.transform = 'rotate('+window.pageYOffset+'deg)';
}

window.addEventListener('scroll', rotateLogo )

// select 

const trapped = getSem('#warning')

function selectAlert (event){
    trapped.select();
    alert('You will be kidnapped');
}

trapped.addEventListener('select', selectAlert)

// DoubleClick

const bigTitle = getSem('.intro h2');

function change (event) {
    event.target.style.color = 'red';
}

bigTitle.addEventListener('dblclick', change)

  
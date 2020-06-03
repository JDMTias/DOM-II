// Your code goes here

function getSelect(selector) {
    return document.querySelector(selector)
}

// Change Color of Nav on mouseover
const navTitle= getSelect('.logo-heading')

function turnColor(event) {
    event.target.style.color = 'red';
}

navTitle.addEventListener('mouseover', turnColor)

// keydown/escape

const dontLeave = getSelect('.dont')

function spanishEscape(event) {
    if (event.key === 'Escape'){
        dontLeave.classList.remove('dont')
        console.log('please dont leave')
    }
}

window.addEventListener('keydown', spanishEscape)

// wheel 

const bigFun = getSelect('.intro h2')

function makeFunBig(event) {
    event.target.style.fontSize = '50px'
}

bigFun.addEventListener('wheel', makeFunBig)

// drag/drop yay finally

var dragged;

document.addEventListener('dragstart', function(event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false)

document.addEventListener('dragend', function(event){
    event.target.style.opacity='';
}, false)

window.addEventListener('load', (event) => {
    console.log('Hit Escape I dare ya')
})

// focus/blur

const passWord = getSelect('input[type="password"')

function whitebg(event) {
    event.target.style.background= '';
}

function blackbg(event) {
    event.target.style.background= 'black'
}

passWord.addEventListener('focus', whitebg)

passWord.addEventListener('blur', blackbg)

// resize 


function windowSize (event) {
    console.log('windowheight:', window.innerHeight);
    console.log('windowwidth', window.innerWidth)
}

window.addEventListener('resize', windowSize);

// scroll 

const spin= getSelect('.logo-heading')

function spinMe (event) {
    spin.style.transform= 'rotate('+window.pageYOffset+'deg)';
}

window.addEventListener('scroll', spinMe)

// select

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `This is what you highlighted: ${selection}`;
  }
  
  const input = getSelect('.selectMe');
input.addEventListener('select', logSelection);

// Nav no refresh and event propagation
const noRefresh = document.querySelectorAll('a');

noRefresh.forEach(function(a) {
    a.addEventListener("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
    });
  });
  
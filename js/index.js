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
    }
}

window.addEventListener('keydown', onEscape)


// wheel


// drag/drop

function dragStartHandler(event){
    event.dataTransfer.setData('img/jpeg', event.target.class)
    event.dataTransfer.dropEffect = 'move';
}

window.addEventListener('DomContentLoaded',() => {
    const bus = getSem('.buspic')
    bus.addEventListener('dragstart', dragStartHandler);
})


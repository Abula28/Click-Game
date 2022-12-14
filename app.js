const main = document.querySelector('.main');
const box = document.querySelector('.box')
const score = document.querySelector('.score')
let scoreCount = 0;

const boxWidth = box.getBoundingClientRect().width
const boxHeight = box.getBoundingClientRect().height

const mainWidth = main.getBoundingClientRect().width
const mainHeight = main.getBoundingClientRect().height

box.addEventListener('click', function(){
    box.style.top = `${Math.floor(Math.random() * (mainHeight))}px`;
    box.style.right = `${Math.floor(Math.random() * (mainWidth))}px`;
    if(box.style.top == "0px"){
        box.style.top = "100px"
    }else if(box.style.top >= boxHeight){
        box.style.top = `${boxHeight - 100}px`
    }
    if(box.style.right == "0px"){
        box.style.right == "100px"
    }else if(box.style.right >= boxWidth){
        box.style.left = "100px"
    }
    if(box.style.width == "10px"){
        box.style.width = "20px"
    }
    if(box.style.height == "10px"){
        box.style.height = "20px"
    }
    box.style.width = `${Math.floor(Math.random() * (boxWidth + 50))}px`;
    box.style.height = `${Math.floor(Math.random()* (boxHeight + 50))}px`;
    scoreCount++;
    score.textContent = `Score ${scoreCount}`
})
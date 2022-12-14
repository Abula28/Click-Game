const main = document.querySelector('.main');
const box = document.querySelector('.box')
const score = document.querySelector('.score')
let scoreCount = 0;
let timer = document.querySelector('.timer')
let timerCounter = 30;
let timerInterval = 1000;
let interval = setInterval(startTimer, timerInterval)

const boxWidth = box.getBoundingClientRect().width
const boxHeight = box.getBoundingClientRect().height

const mainWidth = main.getBoundingClientRect().width
const mainHeight = main.getBoundingClientRect().height


box.addEventListener('click', function(){
    let randomWidthHeight = Math.floor(Math.random() * 100)
    box.style.top = `${Math.floor(Math.random() * (mainHeight - 100))}px`;
    box.style.right = `${Math.floor(Math.random() * (mainWidth - 100))}px`;
    box.style.width = `${randomWidthHeight}px`;
    box.style.height = `${randomWidthHeight}px`;
    if(randomWidthHeight < 30){
        randomWidthHeight = 40;
        box.style.width = `${randomWidthHeight}px`;
        box.style.height = `${randomWidthHeight}px`;
    }
    scoreCount++;
    score.textContent = `Score ${scoreCount}`
})

function startTimer(){
    timerCounter--;
    timer.innerHTML = `Timer: ${timerCounter}`
    if(timerCounter == 0){
        endGame()
    }
}

function endGame(){
    Swal.fire(`Times out... Your Score Was: ${scoreCount}`)
    clearInterval(interval)
}
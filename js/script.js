const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const buttom = document.querySelector('.buttom');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    console.log(marioPosition);
    
    if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 102){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width ='80px';
        mario.style.left = '40px';

        gameOver.style.visibility = 'visible';
        buttom.style.visibility = 'visible';



        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
'use strict';

//Generating a secret number 
let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;

document.querySelector('.again').addEventListener('click', function(){
    score = 20; 
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    secretNumber = Math.trunc(Math.random()*20)+1;
})



document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No value has been entered!😣';
    }
    else if(guess > 20 ){
        document.querySelector('.message').textContent = 'Guess values need to be between 1 to 20...';  
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'You win 🎉';
        document.querySelector('body').style.backgroundColor = '#007500';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        let highscore = Number(document.querySelector('.highscore').textContent);

        if(score > highscore)
            document.querySelector('.highscore').textContent = score;
    }
    else if(guess > secretNumber){
        if(score > 1 ){
            document.querySelector('.message').textContent = 'Guess is too High! 😪'; 
            score--; 
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
        }

    }
    else if(guess <secretNumber){
        if(score >1){
            document.querySelector('.message').textContent = 'Guess is too Low! 😪';
            score--;
            document.querySelector('.score').textContent = score;    
        }
        else{
            document.querySelector('.score').textContent = 0;
        }
    }
})

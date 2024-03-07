

const guess = document.querySelector('.guess');
const reset = document.querySelector('.reset');
const enter = document.querySelector('.enter');
const body = document.getElementById('body');
const display = document.querySelector('.guess-display');
const counter = document.querySelector('.counter');

const allB =  document.querySelectorAll('li');

let answer = createAnswer();
let count = 0;


console.log(answer);
function resetGame(){
  answer = createAnswer();
  count = 0;
  counter.innerText = count;
  console.log(answer);
}

function createAnswer(){
   let answer = (Math.floor(Math.random()*100))+1;
   return answer;
}

function submitGuess(){
  let userGuess = parseInt(guess.value);
  console.log(userGuess);

  guess.value = '';
  
  if (userGuess === answer){
    display.innerText = 'Correct';
  }
  else if (userGuess > answer){
    display.innerText = 'Too High';
  }
  else if (userGuess < answer){
    display.innerText = 'Too Low';
  }
  count+=1;
  counter.innerText = count;
}
  

enter.addEventListener('click', submitGuess);
reset.addEventListener('click', resetGame);



//Randomizer
function randomNumberBetween(a,b){
  let x  = (Math.random() * (b - a) + a).toString();

  return x;
}

function randomizeSize(element){
  let x = randomNumberBetween(10,100);
  element.style.width = x+'px';
  element.style.height = x+'px';
  return element;
}

function randomizeLeft(element){
  let x = randomNumberBetween(1,90);
  element.style.left = x+'%';
  return element;
}



//Stuff I stole From Yang
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  const h1 = document.querySelector('h1');
  const btn_login = document.querySelector('.btn-login');


  allB.forEach(randomizeSize);
  allB.forEach(randomizeLeft);

});




console.log(allB);






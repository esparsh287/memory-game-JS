document.addEventListener('DOMContentLoaded',()=>{
const cardArray=[
{
  name:'fries',
  img:'images/fries.png'
},
{
  name:'cheeseburger',
  img:'images/cheeseburger.png'
},
{
  name:'hotdog',
  img:'images/hotdog.png'
},
{
  name:'ice-cream',
  img:'images/ice-cream.png'
},
{
  name:'milkshake',
  img:'images/milkshake.png'
},
{
  name:'pizza',
  img:'images/pizza.png'
},
{
  name:'fries',
  img:'images/fries.png'
},
{
  name:'cheeseburger',
  img:'images/cheeseburger.png'
},
{
  name:'hotdog',
  img:'images/hotdog.png'
},
{
  name:'ice-cream',
  img:'images/ice-cream.png'
},
{
  name:'milkshake',
  img:'images/milkshake.png'
},
{
  name:'pizza',
  img:'images/pizza.png'
},
];

cardArray.sort(()=>  0.5-Math.random());

const gridDisplay=document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const buttonElement=document.querySelector('#js-button');

let cardsChosen= [];
let cardsChosenIds=[];
let cardsWon=[];

function resetGame(){
   cardsChosen= [];
   cardsChosenIds=[];
   cardsWon=[];
   resultDisplay.innerHTML=0;
   gridDisplay.innerHTML='';
   cardArray.sort(()=>  0.5-Math.random());
  createBoard();
}

function createBoard(){
  for (let i=0; i<cardArray.length; i++){
    const card=document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id',i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
    
  }
}
function checkMatch(){
  const cards=document.querySelectorAll('img');
  const optionOneId=cardsChosenIds[0];
  const optionTwoId=cardsChosenIds[1];
  if(optionOneId===optionTwoId){
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('you have clicked the same image');
  }

  else if(cardsChosen[0]===cardsChosen[1]){
    alert('You found a match');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  }else{
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('Sorry! Try Again');
  }
  resultDisplay.innerHTML=cardsWon.length;
  cardsChosen=[];
  cardsChosenIds=[];
  if(cardsWon.length==cardArray.length/2){
    resultDisplay.innerHTML= 'Congratulations you found them all';

  }
}

function flipCard(){
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if(cardsChosen.length===2){
    setTimeout(checkMatch,500)
  }
}

buttonElement.addEventListener('click', resetGame);
createBoard();
});

var result = ['n','n','n',
              'n','n','n',
              'n','n','n']
var turn = 0
var xWinCounter = 0
var oWinCounter = 0
var roundCounter = 0

  var declareWinner = document.querySelector('p')
  var resetButton = document.querySelector('button').addEventListener('click',reset)
  var allBoxes = document.querySelectorAll('main>div')
  var inpToken = document.querySelectorAll('.disp')
  var board = document.querySelector('main')
  var roundCount = document.querySelector('#r-count')


for(var i = 0 ; i < allBoxes.length; i++){
  allBoxes[i].addEventListener("click",boxAny)
  }



function boxAny(event){

  var box = event.target
  console.log(event.target)
  var idx = Number(box.dataset.block)

  if(turn % 2 === 0) {
    //box.textContent = 'X'
    console.log('box', box)
   box.querySelector('span').textContent = 'X'
    
    box.classList.add('x-turn')
    result[idx]='x'
  } else {
      box.textContent='O'
      box.classList.add('o-turn')
      result[idx]='o'
  }

  turn++
  
    if (result[0] === 'x' && result[1] === 'x' && result[2] === 'x' || result[3] === 'x' && result[4] === 'x' && result[5] === 'x' ||
        result[6] === 'x' && result[7] === 'x' && result[8] === 'x' || result[0] === 'x' && result[4] === 'x' && result[8] === 'x' ||
        result[2] === 'x' && result[4] === 'x' && result[6] === 'x' || result[0] === 'x' && result[3] === 'x' && result[6] === 'x' ||
        result[1] === 'x' && result[4] === 'x' && result[7] === 'x' || result[2] === 'x' && result[5] === 'x' && result[8] === 'x'){
      declareWinner.textContent="X WON"
      board.classList.add('alrdwon')
      xWinCounter++
      roundCounter++
      xScored.textContent= xWinCounter
    } else if(
        result[0] === 'o' && result[1] === 'o' && result[2] === 'o' || result[3] === 'o' && result[4] === 'o' && result[5] === 'o' ||
        result[6] === 'o' && result[7] === 'o' && result[8] === 'o' || result[0] === 'o' && result[4] === 'o' && result[8] === 'o' ||
        result[2] === 'o' && result[4] === 'o' && result[6] === 'o' || result[0] === 'o' && result[3] === 'o' && result[6] === 'o' ||
        result[1] === 'o' && result[4] === 'o' && result[7] === 'o' || result[2] === 'o' && result[5] === 'o' && result[8] === 'o'){
      declareWinner.textContent="O WON"
      board.classList.add('alrdwon')
      oWinCounter++
      roundCounter++
      oScored.textContent = oWinCounter
    } else if (turn === 9){
      declareWinner.textContent="IT'S a DRAW!"
      roundCounter++
    }
}

var xScored = document.querySelector('#x')
var oScored = document.querySelector('#o')


function reset(){

  result = ['n','n','n','n','n','n','n','n','n']
  for(var i = 0 ; i < allBoxes.length; i++){
  allBoxes[i].classList.remove('x-turn','o-turn')
  board.classList.remove('alrdwon')
  allBoxes[i].textContent = ""
  roundCount.textContent = roundCounter

  }
}




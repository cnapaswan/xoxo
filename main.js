
var result = ['n','n','n',
              'n','n','n',
              'n','n','n']
var turn = 0
var xWinCounter = 0
var oWinCounter = 0
var roundCounter = 1

  var winBox = document.querySelector('.result-box')
  var declareWinner = document.querySelector('.win-result')
  var resetButton = document.querySelector('i').addEventListener('click',reset)
  var allBoxes = document.querySelectorAll('main>div')
  var allText = document.querySelectorAll('main>div>span')
  var board = document.querySelector('main')
  var roundCount = document.querySelector('#r-count')


for(var i = 0 ; i < allBoxes.length; i++){
  allBoxes[i].addEventListener("click",boxAny)
}

function boxAny(event){
  var box = event.target
  var boxText = event.target.querySelector('span')
  var idx = Number(box.dataset.block)
  boxText.classList.add('bounceInDown')

  if(turn % 2 === 0) {
    boxText.textContent = 'X'
    boxText.classList.add('x-clr')
    box.classList.add('x-turn')
    result[idx]='x'
  } else {
      boxText.textContent = 'O'
      boxText.classList.add('o-clr')
      box.classList.add('o-turn')
      result[idx]='o'
  }

  turn++
  
  if (result[0] === 'x' && result[1] === 'x' && result[2] === 'x' || result[3] === 'x' && result[4] === 'x' && result[5] === 'x' ||
      result[6] === 'x' && result[7] === 'x' && result[8] === 'x' || result[0] === 'x' && result[4] === 'x' && result[8] === 'x' ||
      result[2] === 'x' && result[4] === 'x' && result[6] === 'x' || result[0] === 'x' && result[3] === 'x' && result[6] === 'x' ||
      result[1] === 'x' && result[4] === 'x' && result[7] === 'x' || result[2] === 'x' && result[5] === 'x' && result[8] === 'x'){
      winBox.classList.add('result-pop')
      declareWinner.textContent="YEAH~! X WON"
      board.classList.add('alrdwon')
      xWinCounter++
      xScored.textContent= xWinCounter
      document.querySelector('.result-pop').addEventListener('click',reset)
    } else if(
        result[0] === 'o' && result[1] === 'o' && result[2] === 'o' || result[3] === 'o' && result[4] === 'o' && result[5] === 'o' ||
        result[6] === 'o' && result[7] === 'o' && result[8] === 'o' || result[0] === 'o' && result[4] === 'o' && result[8] === 'o' ||
        result[2] === 'o' && result[4] === 'o' && result[6] === 'o' || result[0] === 'o' && result[3] === 'o' && result[6] === 'o' ||
        result[1] === 'o' && result[4] === 'o' && result[7] === 'o' || result[2] === 'o' && result[5] === 'o' && result[8] === 'o'){
      winBox.classList.add('result-pop')
      declareWinner.textContent="YO~! O WON"
      board.classList.add('alrdwon')
      oWinCounter++
      oScored.textContent = oWinCounter
      document.querySelector('.result-pop').addEventListener('click',reset)
    } else if (turn === 9){
      winBox.classList.add('result-pop')
      declareWinner.textContent="IT'S a DRAW!"
      document.querySelector('.result-pop').addEventListener('click',reset)    
    }


  }


var xScored = document.querySelector('#x')
var oScored = document.querySelector('#o')

function reset(){

  roundCounter++

  result = ['n','n','n','n','n','n','n','n','n']
  for(var i = 0 ; i < allBoxes.length; i++){
  allBoxes[i].classList.remove('x-turn','o-turn')
  board.classList.remove('alrdwon')
  allText[i].textContent = ""
  allText[i].classList.remove('bounceInDown')
  roundCount.textContent = roundCounter
  winBox.classList.remove('result-pop')
  declareWinner.textContent=""
  turn = 0

  }
}



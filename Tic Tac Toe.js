let buttons = document.querySelectorAll('.box')
let reset = document.querySelector('.reset')
let winner = document.querySelector('.winner')
let turn0 = true;
// jb turn0 true hoga to 0 ki turn wrna X ki

const win = [
  [0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]
]

buttons.forEach((box) => {
  box.addEventListener('click',function(){
    if(turn0){
      box.style.color = 'green'
      box.innerHTML = '0'
      turn0 = false
    }else{
      box.style.color = 'red'
      box.innerHTML = 'X'
      turn0 = true
    }
    box.disabled = true

    checkWinner();
  })
})


function checkWinner(){
  for(let element of win){
    let val1 = (buttons[element[0]].innerText);
    let val2 = (buttons[element[1]].innerText);
    let val3 = (buttons[element[2]].innerText);
    
    if(val1 != '' && val2 != '' && val3 != ''){
       if(val1 == val2 && val2 == val3){
         winner.classList.remove('hide')
         disableBoxes()
       }
      
    }
  
  }  
}

function disableBoxes(){
  for(let box of buttons){
    box.disabled = true
  }
}
function enableBoxes(){
  for(let box of buttons){
    box.disabled = false
    box.innerText = ''
  }
}

reset.addEventListener('click',function(){
  turn0 = true
  enableBoxes()
  winner.classList.add('hide')
})

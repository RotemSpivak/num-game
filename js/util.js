'use strict'

var gStartTimer = document.querySelector('.timer')
var gElModal = document.querySelector('.modal')

function createBoard(num){
    var strHTML = ''
    for(var i = 0; i < num; i++){
        strHTML += '<tr>'
        for(var j = 0; j < num; j++){
        var randomIdx = getRandomIntInclusive(0,gNums.length-1)
        var randomNum = gNums.splice(randomIdx,1)
            strHTML += `<td id="clickedNum${randomNum}" class="currCell" onclick="cellClicked(this)">${randomNum}</td>` 
        }
        strHTML += "</tr>"
    }
    var elTable = document.querySelector('table')
    console.log(elTable)
    elTable.innerHTML = strHTML
}


function startTimer(start){
    var end = Date.now()
    var timePassed = end - start
    var fixed = (timePassed / 1000).toFixed(3)
    gStartTimer.innerText = fixed
}

function wrongAnswer(clickedNum){
    console.log(clickedNum)
    var elWrong = document.querySelector(`#clickedNum${clickedNum}`)
    elWrong.classList.add('wrong')
    setTimeout(()=>{
        elWrong.classList.remove('wrong')
    }, 500)
}

var gNums = []
function getNums(num){
    for(var i = 0; i< num; i++){
        gNums.push(i+1)
    }
    return gNums
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function showModal(){
gElModal.style.display = "block"
}
function hideModal(){
gElModal.style.display = "none"
}


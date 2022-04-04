"use strict";
var boardLength

var gBoard;
var gStopTimer
var gNextNum = 1;

function init() {
  hideModal()
  getNums(boardLength**2);
  createBoard(boardLength);
}

function easy(){
    boardLength = 4
    init()
}
function medium(){
    boardLength = 5
    init()
}
function hard(){
    boardLength = 6
    init()
}

function cellClicked(clickedNum) {
  if (+clickedNum.innerText === 1) {
    if (!gStopTimer) {
        var start = Date.now()
        gStopTimer = setInterval(() => startTimer(start), 1);
    }
  }
  if (+clickedNum.innerText === gNextNum) {
    clickedNum.style.backgroundColor = "darkgreen";
    clickedNum.style.color = "white";
    gNextNum++;
  } else{
    wrongAnswer(+clickedNum.innerText)
  }
  if (+clickedNum.innerText === boardLength **2) {
    clearInterval(gStopTimer);
    showModal()
  }
}

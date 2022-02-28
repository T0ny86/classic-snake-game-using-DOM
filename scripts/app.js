let apple = document.getElementById(randomeLoaction());
log(apple);
apple.className = "apple";

let snakeHead = document.getElementById("cell-10-10");
snakeHead.className = "snake-head";

const snakeTail = [];

const objStep = {
    yStep : 10,
    xStep : 10,
    lastKey : "up"
}
function snakeMove() {
  switch (objStep.lastKey) {
    case "up":
        objStep.yStep--;
      break;
    case "right":
        objStep.xStep++;
      break;
    case "left":
        objStep.xStep--;
      break;
    case "down":
        objStep.yStep++;
      break;
  }
  objStep.yStep > 20? objStep.yStep = 1 : objStep.yStep < 1 ? objStep.yStep = 20: objStep.yStep;
  objStep.xStep > 20? objStep.xStep = 1 : objStep.xStep < 1 ? objStep.xStep = 20: objStep.xStep;
  return objStep;
}

window.addEventListener("keydown", (e)=>{

    switch (e.key) {
        case "ArrowUp":
           objStep.lastKey = "up"
          break;
        case "ArrowRight":
            objStep.lastKey = "right"
          break;
        case "ArrowLeft":
            objStep.lastKey = "left"
          break;
        case "ArrowDown":
            objStep.lastKey = "down"
          break;
      }
    //   snakeMove(objStep.lastKey);
// snakeMove()
})


function setNextMove(y,x) {
    const nextDivName = `cell-${y}-${x}`
    const nextDiv = document.getElementById(nextDivName)
    nextDiv.className = "snake-head"
    log(nextDivName)
}

// game loop:
setInterval(() => {
    snakeMove()
    setNextMove(objStep.yStep, objStep.xStep)
    // log(objStep)
}, 1000);
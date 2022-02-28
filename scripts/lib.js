const log = console.log;

    const gameGrid = document.getElementById("game-grid");

    const GRID_ROWS = 20;
    const GRID_COLUMNS = 20;
    
    for (let i = 1; i <= GRID_ROWS; i++) {
        for (let j = 1; j <= GRID_COLUMNS; j++) {
            const newDivName = `cell-${i}-${j}`;
            // log(newDivName)
            const newCell = document.createElement("div");
            newCell.id = newDivName;
            newCell.className = "game-cell";
            gameGrid.appendChild(newCell);
        }
        
    }


function randomeLoaction() {
    // 'cell-y-x'
    const y = Math.floor(Math.random()*20)+1;
    const x = Math.floor(Math.random()*20)+1;
    return `cell-${y}-${x}`
}
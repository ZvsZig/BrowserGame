let freddyTile;
let aftonTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
};

function setGame() {
    //set up game on the grid
    for (let i = 0; i < 9; i++) {
        //i starts from 0 ends at 9
        //creates div tags with the id tags numbered "0-8" to let us know which game tile was clicked
        let tile = document.createElement("div");
        tile.id = i.toString();
        // tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile); //creates new divs in the board section of the html
    }

    setInterval(createFreddy, 1000); //every 1 secs Freddy will appear in a random tile
    setInterval(createAfton, 2000); //every 2 secs Afton will appear in a random tile
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function createFreddy() {
    setTimeout(() => {
        if (freddyTile) {
            freddyTile.innerHTML = "";
        }
    }, 1000);

    let freddy = document.createElement("img");
    freddy.src = "./assets/bad-guy.png";

    let num = getRandomTile();
    if (aftonTile && aftonTile.id == num) {
        return;
    }
    let freddyTile = document.getElementById(num);
    freddyTile.appendChild(freddy);
    freddyTile.addEventListener("click", () => {
        score += 1; {
            document.getElementById("score").innerText = score.toString();
        }
    })
}

function createAfton() {
    setTimeout(() => {
        if (aftonTile) {
            aftonTile.innerHTML = "";
        }
    }, 2000);

    let afton = document.createElement("img");
    afton.src = "./assets/purp-guy.png";

    let num = getRandomTile();
    if (freddyTile && freddyTile.id == num) {
        return;
    }
    let aftonTile = document.getElementById(num);
    aftonTile.appendChild(afton);
    aftonTile.addEventListener("click", () => {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    })
}

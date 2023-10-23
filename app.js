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
    document.getElementById("board").appendChild(tile); //creates new divs in the board section of the html
  }

  setInterval(createFreddy, 2000); //every 2 secs a skeleton will appear in a random tile
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
  }, 2000);

  let freddy = document.createElement("img");
  freddy.src = "./assets/bad-guy.png";

  let num = getRandomTile();
  let freddyTile = document.getElementById(num);
  freddyTile.appendChild(freddy);
}

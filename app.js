window.onload = function(){
    setGame();
}

function setGame() {
    //set up game on the grid
    for (let i = 0; i < 9; i++) { //i starts from 0 ends at 9
        //creates div tags with the id tags numbered "0-8" to let us know which game tile was clicked
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);//creates new divs in the board section of the html
    }
}
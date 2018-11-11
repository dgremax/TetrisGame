$(document).ready(function() {

function genColour() {
    var colours = ['red','blue','yellow','green'];
    return colours[Math.floor((Math.random() * colours.length))];
}

// Generates a random piece
function genPiece() {
    
}

// Returns the html for the grid table 
function initMap(gameMap) {

}

function printMap(gameMap) {
    var tableString = `<table id="gameGrid">`;
    // console.log("Rows: " + gameMap.length + "\n");
    
    for(var i = 0; i < gameMap.length; i++) {
        tableString += `<tr style="height:50px;">`;

        for(var j = 0; j < gameMap[i].length; j++) {
            // console.log(gameMap[i][j]["colour"] + " ");
            tableString += `<td style="width:` + (500 / gameMap[i].length) + `px; background:` + gameMap[i][j]["colour"] + `;"></td>`
        }
        tableString += `</tr>`;
    }
    tableString += `</table>`;

    $("#gameContainer").html(tableString);
}


// *** BUILD THE TABLE IN "BUILD MAP"
function buildMap(rows, cols) {
    console.log("Building map of " + rows + " rows and " + cols + " columns.\n");
    var gameMap = [];
    // Initialize the 2D array
    for(var i = 0; i < rows; i++) {
        gameMap[i] = [];

        for(var j=0; j < cols; j++) {
            gameMap[i][j] = {
                "isSolid" : true,
                "colour" : genColour()
            }
        }
    }

    return gameMap;
}

// Shifts map down one row
function advanceMap(gameMap) {
    console.log();

}

gameMap = buildMap(10,10);
printMap(gameMap);

});
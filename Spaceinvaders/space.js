//board 
let tileSize = 32;
let rows = 16;
let columns  = 16;

let board;
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;
let context;
//ship
let shipWidth = tileSize*2;
let shipHeight = tileSize;
let shipX = tileSize*columns/2 - tileSize;
let shipY = tileSize * rows - tileSize*2;

let ship = {
    x: shipX,
    y: shipY,
    width : shipWidth,
    height : shipHeight,
}
let shipImg;

window.onload = function(){
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");

    //drawing the ship
    //context.fillStyle ="Red"
    //context.fillRect(ship.x,ship.y, ship.width,ship.height);

    shipImg = new Image();
    shipImg.src = "./Ship.png";
    shipImg.onload= function(){
        context.drawImage(shipImg,ship.x, ship.y,ship.width,ship.height);
    }


}
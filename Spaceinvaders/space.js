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
let shipVelocityX = tileSize;

let alienWidth = tileSize*2;
let alienHeight = tileSize;
let alienX = tileSize;
let alienY = tileSize;
let alienImg;

let alienRows=2;

let alienCount = 0; //Number of aliens to fight in game 
let alienVelocityX =1; // alien movement speed

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
    alienImg = new Image();
    alienImg.src = "./ogAlien.png";
    alienImg.onload = function(){
    alienImg = new Image();
    alienImg.src = "./ogAlien.png";
    alienImg.onload = function(){
        context.drawImage(alienImg, )

    }
    createAliens();


        context.drawImage(alienImg, )
    document.addEventListener("keydown", moveShip);

    }
    createAliens();
//update 


    context.clearRect(0,0, board.width,board.height);

    //ship
    requestAnimationFrame(update);
    document.addEventListener("keydown", moveShip);
    //alien images
    // alien images
for (let i = 0; i < alienArray.length; i++) {
    let alien = alienArray[i];
    if (alien.alive) {
        alien.x += alienVelocityX;
        // edge detection
        if (alien.x + alien.width >= board.width || alien.x <= 0) {
            alienVelocityX *= -1;
        }

        // draw the alien using the img property of the alien object
        context.drawImage(alien.img, alien.x, alien.y, alien.width, alien.height);
    }
}


}
// ship Movement 
function moveShip(e){
    if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0){
        ship.x -=  shipVelocityX; // Movement for Left one tile
    }
    else if (e.code == "ArrowRight" && ship.x + shipVelocityX + shipWidth <= board.width){
        ship.x += shipVelocityX; //Movemtnet Right one tile 
    }
}
function createAliens() {
    for(let a = 0; a <alienColumns;a++){ //for loop going thorugh clomuns and rows
        for(let b = 0; b < alienRows; b++){
            let alien ={
                img : alienImg,
                x : alienX + a * alienWidth,
                y : alienY + b * alienHeight,
                width : alienWidth,
                height : alienHeight,
                alive : true,
            }
            alienArray.push(alien);
        
        }

    }
    alienCount = alienArray.length;


}
//update 
function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0, board.width,board.height);

    //ship
    context.drawImage(shipImg,ship.x, ship.y,ship.width,ship.height);

    //alien images
    // alien images
for (let i = 0; i < alienArray.length; i++) {
    let alien = alienArray[i];
    if (alien.alive) {
        alien.x += alienVelocityX;
        // edge detection
        if (alien.x + alien.width >= board.width || alien.x <= 0) {
            alienVelocityX *= -1;
        }

        // draw the alien using the img property of the alien object
        context.drawImage(alien.img, alien.x, alien.y, alien.width, alien.height);
    }
}


}
// ship Movement 
function moveShip(e){
    if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0){
        ship.x -=  shipVelocityX; // Movement for Left one tile
    }
    else if (e.code == "ArrowRight" && ship.x + shipVelocityX + shipWidth <= board.width){
        ship.x += shipVelocityX; //Movemtnet Right one tile 
    }
}
function createAliens() {
    for(let a = 0; a <alienColumns;a++){ //for loop going thorugh clomuns and rows
        for(let b = 0; b < alienRows; b++){
            let alien ={
                img : alienImg,
                x : alienX + a * alienWidth,
                y : alienY + b * alienHeight,
                width : alienWidth,
                height : alienHeight,
                alive : true,
            }
            alienArray.push(alien);
        
        }

    }
    alienCount = alienArray.length;
}
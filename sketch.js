var game
var database
var gameState = 0;
var playerCount =0;
var form , player


function setup(){
    createCanvas(500,500);
    
    database=firebase.database()
    game = new Game();
    game.getState();
    game.startGame();
   
}


function draw(){
    background("white");
    drawSprites();
}


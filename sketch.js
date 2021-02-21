var canvas;
var music;
var block1, block2, block3, block4;
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,500,100,30);
    block1.shapeColor = "blue";
    block2 = createSprite(300,500,100,30);
    block2.shapeColor = "red";
    block3 = createSprite(500,500,100,30);
    block3.shapeColor = "green";
    block4 = createSprite(700,500,100,30);
    block4.shapeColor = "pink";

    box = createSprite(random(200,750), 20, 50,50);
    box.shapeColor = "white";
    box.velocityX =Math.round(random(-5,10));
    box.velocityY = Math.round(random(5, 10));


    //playSound
    music.play(); 
    loop = true;   
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    
    box.bounceOff(edges);
   
    

    //add condition to check if box touching surface and make it box
    collision();

    //stop the box if the box touches a block
    if(box.isTouching(block1) || box.isTouching(block2) || box.isTouching(block3) || box.isTouching(block4) ) {
        box.setVelocity(0,0);
        music.stop();
    }
    drawSprites();
}

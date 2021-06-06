var seaImage,shipImg1,shipImg2,shipImg3,shipImg4,sea,ship;

function preload(){
  seaImage = loadImage("sea.png"); 
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

function setup(){
  createCanvas(800,800);

  //puting the image of the sea 
  sea = createSprite(400,400,800,800);
  sea.addImage(seaImage);
  sea.x = sea.width/2;
  sea.scale=2;


  //making edges 
  edges = createEdgeSprites();
   
  
  //putting the image of ships
  ship = createSprite(50,160,20,50);
  ship.addAnimation("ship_sailing",shipImg1);
  ship.velocityX = 10;

}

function draw() { 

  //adding background
  background("blue");
  sea.velocityX = -2;

  //for repeating the background
  if(sea.x<0){
   sea.x=sea.width/2;
  }

  //for making the ship repeatedly sailing 
  if(ship > 800){
    ship = 0;
  }


 drawSprite();

}
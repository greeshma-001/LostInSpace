var bg,astro,astroImage;
var diamond,diamondImage;

function preload(){
  bg=loadImage("mygamebg(1).jpg");
  astroImage=loadImage("pro8 astro.png");
  diamondImage=loadImage("diamond.png");
}

function setup(){
	createCanvas(1350,620);
  astro=createSprite(400,500,50,50);
  astro.addImage(astroImage);
  astro.scale=0.4;

  diamond=createSprite(450,400,50,50);
  diamond.addImage(diamondImage);
  diamond.scale=0.4;

}

function draw(){
background(bg);
if(keyDown(UP_ARROW)){
  astro.y=astro.y-2;
}
if(keyDown(DOWN_ARROW)){
  astro.y=astro.y+2;
}
if(keyDown(LEFT_ARROW)){
  astro.x=astro.x-2;
}
if(keyDown(RIGHT_ARROW)){
  astro.x=astro.x+2;
}
astro.display();
diamond.display();
}

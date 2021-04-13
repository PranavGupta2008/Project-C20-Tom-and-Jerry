var bgImg;
var tom,tomImg1,tomImg2;
var jerry,jerryImg1,jerryImg2;

function preload() {
    bgImg=loadImage("images/garden.png");
tomImg1=loadAnimation("images/cat1.png");
tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
tomImg3=loadAnimation("images/cat4.png")
jerryImg1=loadAnimation("images/mouse1.png");
jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  tom=createSprite(870,700);
  tom.addAnimation("tomSleaping",tomImg1);
 tom.scale=0.18;
//tom.debug=false;
tom.setCollider("rectangle",0,0,600,800);

jerry=createSprite(200,700);
jerry.addAnimation("jerryStanding",jerryImg1);
jerry.scale=0.13;
//jerry.debug=false;
jerry.setCollider("rectangle",0,0,550,800);
}

function draw() {

background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.velocityX=0;
tom.addAnimation("tomLastImage",tomImg3);
tom.x=300;
tom.scale=0.18;
tom.changeAnimation("tomLastImage");
jerry.addAnimation("jerryLastImage",jerryImg3);
jerry.scale=0.13;
jerry.changeAnimation("jerryLastImage");
}

    drawSprites();

    
}


function keyPressed(){

if(keyCode===LEFT_ARROW){

tom.velocityX=-3;
tom.addAnimation("tomRunning",tomImg2);
tom.changeAnimation("tomRunning");
tom.scale=0.18;

jerry.addAnimation("jerryTeasing",jerryImg2);
jerry.frameDelay=25;
jerry.changeAnimation("jerryTeasing");
jerry.scale=0.13;
}




}
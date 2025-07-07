
let furby



function preload(){
	furby = loadImage('loo.png')
}

function setup(){
 createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
  imageMode(CENTER)

}
  for(let i = 0; i<100; i++){
   image(furby, random(windowWidth), random(windowHeight), 30, 30)

  }  




function draw(){
	
   

  if(keyIsPressed == true){
	  background(160, 230, 88)
	}else{
	  background(230, 160, 88)
    }
    textSize(50)
    fill(25)
    text('FOR LOOPS', width/2, height/2);

     for(let i = 0; i < windowWidth; i = i+10){
     	line(0, 0, i, windowHeight);
     }
     for(let i = 0; i < windowHeight; i = i+10){     	
     	line(0, i, windowWidth, i);
     
     }




image(furby, windowWidth/2, windowHeight/2)
}
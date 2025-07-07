let ellipseBrusheBool = false
let squareBrushBool = false
let imageBrushBool = false

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}

function preload(){
	furby = loadImage('loo.png')

}

function setup(){
 	createCanvas(windowWidth, windowHeight)
 	rectMode(CENTER)
 	imageMode(CENTER)
}

function draw(){
	if(ellipseBrusheBool == true){
		ellipseBrushe()
	}
	if(squareBrushBool == true){
		squareBrush()
	}

	if(imageBrushBool == true){
		imageBrush()
	}

}


function keyPressed(){
	//ellipse brush
	if(key === 'q'){
		ellipseBrusheBool = true
        squareBrushBool = false
        imageBrushBool = false
  }


    //square brush
    if(key === 'w'){
    	ellipseBrusheBool = false
        squareBrushBool = true
        imageBrushBool = false

  }

   //image brush
   if(key === "e"){
   	ellipseBrusheBool = false
        squareBrushBool = false
        imageBrushBool = true

  }

  if(key === "o"){
  ellipseBrusheBool = false
   squareBrushBool = false
   imageBrushBool = false
  }

}

function ellipseBrushe(){
	if(mouseIsPressed == true){
	
	fill(random(255), random(255), random(255))
	ellipse(mouseX, mouseY, 50, 50)
	strokeWeight(10)
	stroke(0)
	line(pmouseX, pmouseY, mouseX, mouseY)
 }

}


function squareBrush(){
    fill(random(255), random(255), random(255))
	rect(mouseX, mouseY, 80, 80)


}


function imageBrush(){
	fill(random(255), random(255), random(255))
	image(furby, mouseX, mouseY, 40, 40)

}
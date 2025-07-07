let xPos = 0
let yPos = 0

let xSpeed = 5
let ySpeed = 5
let furby
let chicken


let score = 0

let mouseDist

let startBool = true
let winBool = false




let ballDiameter = 30


function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}

function preload(){
	furby = loadImage('loo.png')
	chicken = loadImage('chicken.png')
	 
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2

   
	imageMode(CENTER)

}

function draw(){
   if(startBool == true){
   	startGame()
  }


   if(winBool == true){
   	winGame()
 }





}
function startGame(){
	background(0)

    textSize(30)
    fill(255)
	text('Boom Boom Tag Get The Bomb! Your Score:' + score + ' points', 20, 100)
    //image(furby, xPos, yPos, ballDiameter, ballDiameter)
	image(furby, xPos, yPos, ballDiameter, ballDiameter)

    //distance between mouse and image
    mouseDist = dist(mouseX, mouseY, xPos, yPos)

    print(mouseDist)


//bomb animation
if(xPos >= windowWidth - ballDiameter/2 || xPos <=ballDiameter/2){
	//reverse xspeed
	xSpeed = xSpeed * -1;
}

if(yPos >= windowHeight - ballDiameter/2 || yPos <=ballDiameter/2){
	//reverse xspeed
	ySpeed = ySpeed * -1;
}

//  moving the furby
	xPos = xPos + xSpeed
	yPos = yPos + ySpeed
    //Game mechanics image speed and position
	if(mouseDist < 25){
		score ++
		xPos = random(16, windowWidth - 16)
		yPos = random(16, windowHeight - 16)

		xSpeed = xSpeed * 1.5
		ySpeed = ySpeed * 1.5

		if(score == 5){
			winBool = true
			startBoolv= false
		}

	}
}

function winGame(){
	background(0, 255, 100)
	fill(255)
	textSize(40)
	text('WINNER WINNER CHICKEN DINNER', 20, 50)
	image(chicken, windowWidth/2, windowHeight/2)

}














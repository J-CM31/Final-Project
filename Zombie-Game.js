let AH
let startScreenBool = true
let GameBool = false
let begin
let airstrikeFont
let playButton
let music
function preload(){
	AH = loadImage('AH.jpg')
	begin = loadImage('begin.jpeg')
	airstrikeFont = loadFont('title.ttf')
	music = loadSound('music.mp3')


}




function setup(){
 createCanvas(windowWidth, windowHeight)
 imageMode(CENTER)
 textFont(airstrikeFont)
 music.play()
 music.loop()
 playButton = createButton('PLAY')
   playButton.position(windowWidth/2, windowHeight/2)
   playButton.mousePressed()//GameBool = true, startScreenBool = false)
}
 

 function draw(){
 	if(GameBool == true){
 		startGame()
 	}

    if(startScreenBool == true){
    	startScreen()
    }
  
}




function startGame(){
	image(AH, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

  
}

function startScreen(){
	image(begin, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	fill(125, 25, 150)
	text('Tale of the LOST FORREST', 25, windowHeight/3)
	textFont(airstrikeFont)
	textSize(30)
}

let AH
let startScreenBool = true
let GameBool = false
let begin
let airstrikeFont
let playButton
let music
let hero
function preload(){
	hero = loadImage('hero.png')
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
   playButton.mousePressed(startGame)
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
	GameBool = true
	startScreenBool = false
	playButton.hide()
	image(AH, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	image(hero, windowWidth/8, 700, 200, 200)

  
}

function startScreen(){
	image(begin, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	fill(125, 25, 150)
	text('Tale of the LOST FORREST', 25, windowHeight/3)
	textFont(airstrikeFont)
	textSize(30)
}

let AH
let startScreenBool = true
let GameBool = false
let begin
let airstrikeFont
let playButton
let music
let hero
var playerx = 200
let wiz
let winscreenBool = false
let losescreenBool = false
let GameBool2 = false
let win
let screen2
let GameBool3 = false
let boss
let room
let zom
let loser




function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}


function preload(){
	hero = loadImage('hero.png')
	hero2 = loadImage('hero.png')
	AH = loadImage('AH.jpg')
	begin = loadImage('begin.jpeg')
	airstrikeFont = loadFont('title.ttf')
	music = loadSound('music.mp3')
	wiz = loadImage('wiz.png')
	win = loadImage('win.jpeg')
	screen2 = loadImage('screen2.jpg')
	zom = loadImage('zom.png')
	room = loadImage('room.jpeg')
	boss = loadImage('boss.png')
	loser = loadImage('loser.jpeg')


}


function setup(){
 createCanvas(windowWidth, windowHeight)
 imageMode(CENTER)
 textFont(airstrikeFont)
 music.play()
 music.loop()
 playButton = createButton('PLAY')
   playButton.position(500, windowHeight/2)
   playButton.mousePressed(startGame)
}
 

 function draw(){
 	
 	if(GameBool == true){
 		startGame()
 	}

    if(startScreenBool == true){
    	startScreen()
    }
    
    if(playerx <= 0){
		winScreen()
    }

    if(GameBool2 == true){
    
    		gameScreen2()

    if(GameBool3 == true){
    	endgame()
    	
    }

    if(losescreenBool == true){
    	LoseScreen()
    }
    }
}




function startGame(){
	GameBool = true
	startScreenBool = false
	playButton.hide()
	
	image(AH, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

	image(wiz, windowWidth - 200, windowHeight - 100, 200, 200)
	

	image(hero, playerx, windowHeight - 100, 200, 200)

	if(playerx >= windowWidth){
		playerx = 200
    	GameBool2 = true
    	
    	
    }

	if(playerx >= windowWidth - 400){
		fill(255)
		text('BEWARE OF THE FORREST DO NOT PROCEED', 130, windowHeight - 175)
		textFont(airstrikeFont)
	}

  
}

function startScreen(){
	image(begin, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	fill(125, 25, 150)
	text('Tale of the LOST FORREST', 25, windowHeight/3)
	textFont(airstrikeFont)
	textSize(30)
}
function winScreen(){
	GameBool = false
	startScreenBool = false
	image(win, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	music.stop()
	fill(255)
	textSize(24)
	text('You were smart and listened to the wizards warning', 15, windowHeight/3)
	text(' So you left and went home', 300, windowHeight * 2/3)
	textFont(airstrikeFont)
}

function gameScreen2(){
	GameBool = false
	
	image(screen2, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	image(hero, playerx, windowHeight - 100, 200, 200)
	image(zom, windowWidth - 200, windowHeight - 100, 200, 200)
	if(playerx >= windowWidth - 400){
		fill(250, 225, 25)
		text('To late to turn back now', 130, windowHeight - 255)
		text('so might as well defeat the Boss', 130, windowHeight - 195)
		textFont(airstrikeFont)

}
	if(playerx >= windowWidth){
		playerx = 200
		GameBool3 = true

    	
    	
    }



}



function endgame(){
 image(room, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
 image(hero, playerx, windowHeight - 100, 200, 200)
 image(boss, windowWidth - 200, windowHeight - 250, 500, 500)
 fill(5)
 textFont(airstrikeFont)
 text('Come I have something to tell you', 200, windowHeight/8)


if(playerx >= windowWidth - 350){
		playerx = 200
		losescreenBool = true

    	
    	
    }
}
function LoseScreen(){
	GameBool3 = false
	image(loser, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	fill(255)
	textSize(35)
	textFont(airstrikeFont)
	text('Did you real trust the Giant Monster', 200, windowHeight/8 )

}


function keyPressed(){
if (keyCode === LEFT_ARROW) {
    playerx = playerx - 30;
  }
  if (keyCode === RIGHT_ARROW) {
    playerx = playerx + 30;
  }

  //  if(keyCode === LEFT_ARROW) {
  //   playerx2 = playerx2 - 30;
  // } else if (keyCode === RIGHT_ARROW) {
  //   playerx2 = playerx2 + 30;
  // }
}


















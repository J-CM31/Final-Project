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
let yesButton
let noButton
let restartButton
let losescreenBool2
let musicButton
let jokeText1 = 'Wanna hear a joke'
let jokeText2 = ''
let jokeBool = false
let yesButton2
let noButton2
let bossBool = false
let bossText = 'Can we be friends'
let fight
let fightButton
let canvas
let text1  
let text2 
let text3  
let text4  
let catButton
let losescreenBool4
let wizText1 = 'Beware of the forerest do not procceed'
let wizText2 ='there is a big scary monster'


let actButton
function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}


function preload(){
	fight = loadImage('fight.jpeg')
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

function musicFunc(){
	music.play()
	music.loop()
}
function playVideo(){
	bossBool = true
	GameBool3 = false
	fightButton.hide()
	image(fight, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	yesButton2.hide()
	noButton2.hide()
	restartButton.mousePressed(restart)
	restartButton.show()
	

	let i = int(random(4))
		if(i == 0){
			text1 = 'You fought in an epic Battle and died in combat'
			text2 = 'With this victory comes nothing because the monster'
			text3 = 'Was minding his business and you started fighting him'
			text4 = 'BAD ENDING'

		}
		if(i == 1){
			text1 = 'The Moster was secrently planning to destroy the village'
			text2 = 'Eventhough youd didnt know this you are a hero'
			text3 = 'Your name is remembered across eons'
			text4 = 'GOOD ENDING'
        }
        if(i == 2){
			text1 = 'After challenging the monster to a fight'
			text2 = 'He effortlessly obliterates you into nothing'
			text3 = 'Should have listened to the wizard'
			text4 = 'BAD ENDING'
        }
        if(i == 3){
			text1 = 'The Monster Beats you in a heated battle to the death'
			text2 = 'The monster was so aggrevated He destroyed your village'
			text3 = 'The wizard told everyone it was you'
			text4 = 'BAD ENDING'
        }
        if(i == 4){
			text1 = 'The Moster was secrently planning to destroy the village'
			text2 = 'Eventhough youd didnt know this you are a hero'
			text3 = 'Your name is remembered across eons'
			text4 = 'GOOD ENDING'
        }

        fill(200, 5, 200)
	textSize(20)
	text(text1, 50, windowHeight/8)
	text(text2, 5, windowHeight/6)
	text(text3, 5, windowHeight/5)

    textSize(75)
	text(text4, 50, windowHeight - 200)
    

    
	//if()
}
function setup(){

 canvas = createCanvas(windowWidth, windowHeight)
   canvas.style('z-index', '-1')
   canvas.position(0, 0)
 imageMode(CENTER)
 textFont(airstrikeFont)
 playButton = createButton('PLAY')
   playButton.position(500, windowHeight/2)
   playButton.mousePressed(startGame)
   musicButton = createButton('Music')
   musicButton.position(500, windowHeight/2 + 100)
   musicButton.mousePressed(musicFunc)
   catButton = createButton('Someones scared')
   catButton.position(200, 300)
   yesButton = createButton('yes')
		yesButton.position(200, windowHeight - 150)
		noButton = createButton('no')
		noButton.position(350, windowHeight - 150)
		 yesButton2 = createButton('Sure')
		yesButton2.position(200, windowHeight/6)
		noButton2 = createButton('Nah')
		noButton2.position(350, windowHeight/6)
		actButton = createButton('I will defeat Him')
		actButton.position(200, 400)

		restartButton = createButton('retry')
	restartButton.position(400, windowHeight - 100)

	restartButton.hide()
	catButton.hide()
	actButton.hide()

		yesButton.hide()
		noButton.hide()

		yesButton2.hide()
		noButton2.hide()

		fightButton = createButton('fight')
   fightButton.position(350,windowHeight - 100)
   fightButton.hide()
   
  
}		

   


 

 function draw(){
 	
 	if(GameBool == true){
 		startGame()
 		
 	}

    if(startScreenBool == true){
    	startScreen()
    }
    
    if(winscreenBool == true){
		winScreen()
    }

    if(GameBool2 == true){
    
    		gameScreen2()
    }

    if(GameBool3 == true){
    	endgame()
    	
    }

    if(losescreenBool == true){
    	LoseScreen()
    }
    if(losescreenBool2 == true){
    	loseScreen()
    
    }
    if(losescreenBool4 == true){
    	losescreen4()
    }
}

function losescreen4(){
	GameBool = false
	losescreenBool4 = true
	catButton.hide()
	actButton.hide()
	image(loser, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	fill(255)
	textSize(45)
	textFont(airstrikeFont)
	text('Next time be nicer', 20, windowHeight/8)
	restartButton.mousePressed(restart)
	restartButton.show()
	wizText1 = ' '
	wizText2 = ' '
	

}

function dialog(){
	wizText1 = 'Just go home'
	wizText2 = 'you cant defeat him'
	fill(255)
	catButton.hide()
	actButton.hide()
	print('press')
	textSize(45)
	textFont(airstrikeFont)
	
}




function startGame(){
	

	GameBool = true
	startScreenBool = false
	playButton.hide()
	musicButton.hide()

	catButton.mousePressed(losescreen4)
	actButton.mousePressed(dialog)


	image(AH, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

	image(wiz, windowWidth - 200, windowHeight - 100, 200, 200)
	

	image(hero, playerx, windowHeight - 100, 200, 200)

	if(playerx >= windowWidth){
		playerx = 200
    	GameBool2 = true

    	
    	
    }

	if(playerx >= windowWidth - 400){
		fill(255)
		textFont(airstrikeFont)
		textSize(25)
		text(wizText1, 5, windowHeight - 250)
		text(wizText2, 75, windowHeight - 200)
		catButton.show()
		actButton.show()

	
	}else{
		catButton.hide()
		actButton.hide()
	}
	if(playerx <= 0){
		winscreenBool = true
	}
  
}

function startScreen(){
	playButton.show()
	musicButton.show()
	playerx = 200
	image(begin, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	fill(125, 25, 150)
	text('Tale of the LOST FORREST', 25, windowHeight/3)
	text('Left and Right arrow to move', 25, windowHeight - 100)
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
    textSize(75)
	text('Secret Ending', 30, windowHeight - 100)
	catButton.hide()
	actButton.hide()
	restartButton.mousePressed(restart)
	restartButton.show()
}

function gameScreen2(){
	GameBool = false
    catButton.hide()
	actButton.hide()
	 
	image(screen2, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	image(hero, playerx, windowHeight - 100, 200, 200)
	image(zom, windowWidth - 200, windowHeight - 100, 200, 200)
	if(playerx >= windowWidth - 450){
		fill(250, 225, 25)
		text(jokeText1, 25, windowHeight - 350)
		text(jokeText2, 100, windowHeight - 300)
		yesButton.show()
		noButton.show()
	}else{
		yesButton.hide()
		noButton.hide()
	}
		//text('Can I pick your brain', 50, windowHeight - 300)
		if(jokeBool == true){
			yesButton.hide()
			noButton.hide()
	}
		
	
        noButton.mousePressed(loseScreen)
        yesButton.mousePressed(jokeFunction)
		// if(yesButton.mousePressed()){
		// 	textSize(25)
		// 	text('What did the Zombie ask the Human', 50, windowHeight - 400)
		// 	text('Can I pick your brain', 50, windowHeight - 300)
		// 	yesButton.hide()
		// }

	if(playerx >= windowWidth){
		playerx = 200
		GameBool3 = true

    	
    	
    }



}

function jokeFunction(){
	jokeBool = true
	print('Joke!')
	let j = int(random(4))
		if(j == 0){
			jokeText1 = 'What did the Zombie ask the Human'
	        jokeText2 = 'Can I pick your brain'
		}
		if(j == 1){
			jokeText1 = 'Why do zombies avoid eating clowns'
			jokeText2 = 'Because they taste funny'
			}
        if(j == 2){
			jokeText1 = 'Why do zombies go to sleep early'
			jokeText2 = 'Because they are dead tired'
			
        }
        if(j == 3){
			jokeText1 = 'What do you call a zombie that cooks stir-frys'
			jokeText2 = 'Dead Man Wok-ing'
			
        }
        if(j == 4){
			jokeText1 = 'What do you call a Mexican zombie'
			jokeText2 = 'Zombre'
			
        }
	noButton.hide()
	yesButton.hide()
}



function endgame(){
 GameBool2 = false
noButton.hide()
	yesButton.hide()
 image(room, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
 image(hero, playerx, windowHeight - 100, 200, 200)
 image(boss, windowWidth - 200, windowHeight - 250, 500, 500)
 fill(5)
 textFont(airstrikeFont)
 text(bossText, 20, windowHeight/8)
 if(bossBool == false){
			yesButton2.show()
			noButton2.show()
			fightButton.show()
		}else{
			yesButton2.hide()
			noButton2.hide()
			fightButton.hide()
}


            yesButton2.mousePressed(loseScreen2)
            noButton2.mousePressed(losescreen3)
            fightButton.mousePressed(playVideo)

}

function loseScreen2(){
	GameBool3 = false
	bossBool = true
	image(loser, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	yesButton2.hide()
	noButton2.hide()
	fightButton.hide()
	fill(255)
	textSize(25)
	textFont(airstrikeFont)
	text('Did you really trust the Giant Monster', 20, windowHeight/8)
	restartButton.mousePressed(restart)
	restartButton.show()
	bossText = ' '

}
function losescreen3(){
	GameBool3 = false
	bossBool = true
	image(loser, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	yesButton2.hide()
	noButton2.hide()
	fightButton.hide()
	fill(255)
	textSize(25)
	textFont(airstrikeFont)
	text('He just wanted to be friends', 20, windowHeight/8)
	restartButton.mousePressed(restart)
	restartButton.show()
	bossText = ' '

}




// if(playerx >= windowWidth - 350){
// 		playerx = 200
// 		losescreenBool = true

    	
    	
    //}

function LoseScreen(){
	GameBool3 = false

	image(loser, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	fill(255)
	textSize(25)
	textFont(airstrikeFont)
	text('Did you really trust the Giant Monster', 20, windowHeight/8)
	restartButton.mousePressed(restart)
	restartButton.show()

}

function loseScreen(){
	GameBool2 = false
	startScreenBool = false
	losescreenBool2 = true
	noButton.hide()
	yesButton.hide()
	image(loser, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	fill(255)
	textSize(35)
	textFont(airstrikeFont)
	text('Its a good joke I promise', 100, windowHeight/8)
	restartButton.mousePressed(restart)
	restartButton.show()
}

function restart(){
	losescreenBool2 = false
	losescreenBool4 = false
	losescreenBool = false
	startScreenBool = true
	restartButton.hide()
	yesButton.hide()
	jokeText1 = 'Wanna hear a joke'
	jokeText2 = ''
	bossText = 'Can we be friends'
	jokeBool = false
	bossBool = false
	wizText1 = 'Beware of the forerest do not procceed'
    wizText2 ='there is a big scary monster'


}


function keyPressed(){
if (keyCode === LEFT_ARROW) {
    playerx = playerx - 100;
  }
  if (keyCode === RIGHT_ARROW) {
    playerx = playerx + 100;
  }

  //  if(keyCode === LEFT_ARROW) {
  //   playerx2 = playerx2 - 30;
  // } else if (keyCode === RIGHT_ARROW) {
  //   playerx2 = playerx2 + 30;
  // }
}


















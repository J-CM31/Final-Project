let hellcat
let playButton
let canvas

let hellcatVolSlider
let hellcatRateSlider

let level
let amp

function preload(){
	hellcat = loadSound('hellcat.mp3')
}


function setup(){
   canvas = createCanvas(windowWidth, windowHeight)
   canvas.style('z-index', '-1')
   canvas.position(0, 0)
   

   playButton = createButton('Play Audio')
   playButton.position(300, 300)
   playButton.mousePressed(playHellCat)


   hellcatVolSlider = createSlider(0, 1, 1, 0.01)
   hellcatRateSlider = createSlider(0.1, 3, 1, 0.01)

   amp = new p5.Amplitude()




}




	if(!hellcat.isPlaying()){
		hellcat.loop()
		playButton.html('Pause Audio')

	}else{
		hellcat.pause()
		playButton.html('Play Audio')

	}



function draw(){
	background(5)
	level = amp.getLevel()
	print(level)
	let size = map(level, 0, .6, 100, 800)

	ellipse(windowWidth/2, windowHeight/2, size, size)
	hellcat.setVolume(hellcatVolSlider.value())
	hellcat.rate(hellcatRateSlider.value())
}

let squareNums = [25, 36, 49, 64, 81, 100]


function setup(){
	createCanvas(windowWidth, windowHeight)

	print(squareNums[2])

	for(let i = 0; i < squareNums. length; i++){
		let xPos = random(100, windowWidth-100)
		let yPos = random(100, windowHeight-100)

        fill(255, 30, 50)
		ellipse(xPos, yPos, squareNums[i], squareNums[i])
		fill(0)
		textSize(20)
		text(squareNums[i], xPos, yPos)

	}
}

function draw(){

}

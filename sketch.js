let poop, loo
 let hellcat
let day = false
let night = false

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function preload(){
  loo = loadImage('loo.png')
  poop = loadImage('poop.jpeg')
 hellcat = loadSound('hellcat.mp3')

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  background(25)



 //soundFormats('mp3')




// function keyPressed(){
//   if(key === 'SPACE'){
//     mySound.play()
//     return false
  
}



function draw() {
  
if(day == true){
  background(0, 255, 255)
}

if(night == true){
  background(255, 0, 255);//sky

}
  


  strokeWeight(5)
  fill(0)
  stroke(0)


 


 stroke(0)
 fill(0)
 rect(0, 400, windowWidth,)//street


  fill(255, 255, 0)//street lines
  rect(25, 550, 100, 20)
  rect(325, 550, 150, 20)
  rect(700, 550, 150, 20)




  stroke(0, 0, 0)
  fill(255)// car body
  rect(100, 300, 600, 200)
  fill(0, 255, 255)//car window
  quad(400, 200, 300, 200, 200, 300, 450, 300)

  

  fill(255)
  quad(500, 150, 300, 200, 200, 300, 600, 300)//car roof
  
  
  image(poop, 400, 400, 200, 200); 




  fill(200)//wheel
  circle(200, 500, 150)
  circle(600, 500, 150)
  
  fill(0, 255, 255)//car window
  quad(400, 200, 300, 200, 200, 300, 450, 300)
  
  stroke(255)
  fill(255)
  ellipse(125, 125, 200, 100)//cloud
  ellipse(200, 75, 200, 100)
  ellipse(300, 125, 200, 100)
  
  strokeWeight(5)
  stroke(255, 255, 0)
  fill(255, 255, 0)
  circle(700, 105, 175)//sun
  line(600, 5, 795, 200)
  line(795, 5, 600, 200)
  line(700, 5, 700, 225)
  line(575, 105, 800, 105)

  
  image(loo, 175, 300)

   }
   
//   if(!hellcat.isPlaying()){
//     hellcat.loop()
// }else{
//     hellcat.pause()
//      }
   

    // if(key === 'h'){
    // hellcat.play()
    // print('spacebar')

    
    
  //}
//}
 



 
function keyPressed(){
 if(key === 'd'){
  day = true
  night = false
}
 if(key === 'n'){
  night = true
  day = false
 }

 if(keyCode === 32){
    hellcat.play()
    print('spacebar')

//   if(!hellcat.isPlaying()){
//     hellcat.loop()
// }else{
//     hellcat.pause()
//      }

 
}
  
}


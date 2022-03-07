let mic;
let pupilSize = 10;

function setup() {
  bg = loadImage('hearts.jpg');
  createCanvas(400, 400);
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {  
  background(bg);

  drawBody();
  
  drawFace(100);
  
  drawLegs();

  //microphone input as a halo
  let vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0)/2;
  
  stroke(251, 255, 130);
  strokeWeight(8);
  fill(255,255,255,0);
  ellipse(140, -140 + h,100,20);
  
}

function drawBody(){
  // bird body 
  fill(146, 202, 240);
  noStroke();
  rect(100, 100, 80, 200);

  noStroke();
  rect(180, 180, 80, 120);
  ellipse(140, 95, 80, 80); 
  triangle(260, 180, 260, 300, 300, 180);
}

function drawFace(size){
  // bird beak
  fill(255, 234, 145);
  triangle(size, size, size, 140, 60, 120);
  
  //eye whites
  fill(255, 255, 255);
  circle(140, 120, 30);  
  
  //pupil
  fill(44, 42, 74);  
  circle(140, 120, pupilSize);
  
  //pupil shine
  fill(255, 255, 255);
  circle(146.5, 116.5, 5.5);
}

function drawLegs(){
  //feet
  fill(44, 42, 74); 
  rect(140, 300, 5, 40);
  rect(120, 335, 20, 5);
  
  rect(220, 300, 5, 40);
  rect(200, 335, 20, 5);
}

function mouseClicked() {
  if (pupilSize === 10) {
    pupilSize = 20;
  } else {
    pupilSize = 10;
  }
}

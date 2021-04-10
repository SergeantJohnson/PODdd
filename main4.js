img = "";

function preload() {
    img=loadImage('4.1.jpg');
}

function setup() {
    canvas = createCanvas(600, 410);
    canvas.center();
}

function draw() {
    image(img,0,0,600,410);
    fill('#73ff00');
    text("TV",60,130);
    noFill();
    stroke('#07c6db');
    rect(40,110,550,150);
    fill('#73ff00');
    text("Monitor",200,50);
    noFill();
    rect(200,40,300,110);
}
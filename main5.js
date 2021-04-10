img = "";

function preload() {
    img=loadImage('5.1.jpg');
}

function setup() {
    canvas = createCanvas(600, 410);
    canvas.center();
}

function draw() {
    image(img,0,0,600,410);
    fill('#ff0000');
    text("Bottle",115,25);
    noFill();
    stroke('#ff0000');
    rect(110,0,125,400);
    fill('#ff0000');
    text("Bottle",265,60);
    noFill();
    stroke('#ff0000');
    rect(240,50,125,360);
    fill('#ff0000');
    text("Bottle",405,40);
    noFill();
    stroke('#ff0000');
    rect(370,25,125,380);
}
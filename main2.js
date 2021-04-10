img = "";
status="";
objects=[];

function preload() {
    img=loadImage('2.1.jpg');
}

function setup() {
    canvas = createCanvas(600, 410);
    canvas.center();
}

function draw() {
    image(img,0,0,600,410);
    fill('#00ff66');
    text("Bed",100,200);
    noFill();
    stroke('#4c00ff');
    rect(100,190,495,200);
}
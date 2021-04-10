img = "";


function preload() {
    img=loadImage('3.1.jpg');
    
}

function setup() {
    canvas = createCanvas(600, 410);
    canvas.center();
}

function draw() {
     image(img,0,0,600,410);
     fill('#73ff00');
     text("TV",350,130);
     noFill();
     stroke('#07c6db');
     rect(350,120,150,100);
     fill('#73ff00');
     text("AC",360,65);
     noFill();
     rect(350,50,150,50);
}
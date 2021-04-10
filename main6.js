img = "";

function preload() {
    img=loadImage('6.1.jpg');
}

function setup() {
    canvas = createCanvas(600, 410);
    canvas.center();
}

function draw() {
    image(img,0,0,600,410);
    fill('#00ff66');
    text("Fruit Basket",40,40);
    noFill();
    stroke('#4c00ff');
    rect(10,10,580,385)
}
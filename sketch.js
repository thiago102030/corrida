function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;

function draw() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }

  textSize(40);, 
  text(";-;", marlon, 140);
  text("+-+", alfredo, 250);
  rect(350, 0, 10, 400);
  if (xJogador1 > 350) {
    text("marlon venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("alfredo venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "q") {
    xJogador1 += random(20);
  }
  if (key == "e") {
    xJogador2 += random(20);
  }
}
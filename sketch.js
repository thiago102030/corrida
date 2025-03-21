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
  
    textSize(40);
    text(";-;", alberto, 100);
    text(".-.", malro, 300);
    rect(350, 0, 10, 400);
    if (xJogador1 > 350) {
      text("alberto venceu!", 50, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("malro 2 venceu!", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "w") {
      xJogador1 += random(20);
    }
    if (key == "q") {
      xJogador2 += random(20);
    }
  }
  
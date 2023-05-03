//p5 sound library https://p5js.org/reference/#/libraries/p5.sound

let mushroom, water, tree;

//declare variable up at the top
let mySound1, mySound2, mySound3;

// var dragging = false; // Is the object being dragged?


//load sounds before you use them
function preload(){

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/Plantasia.mp3');
  mySound2 = loadSound('audio/fanfare.mp3');
  mySound3 = loadSound('audio/kirakira.mp3');

}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //play sound when mouse is pressed on the canvas
    //cnv.mousePressed(toggleSound);

    mushroom = createImg("images/mushroom.png");
    mushroom.class('forest');

    mushroom.position(100, 200);

    water = createImg("images/water.png");
    water.class('forest');
    water.position(600, 200);

    tree = createImg("images/tree.png");
    tree.class('forest');
    tree.position(1100, 200);
    
  }
  
  function draw() {
    background(0);
    mushroom.mousePressed(makeMushroom);
    water.mousePressed(makeWater);
    tree.mousePressed(makeTree);
  }

  function makeMushroom() {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeWater() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }


  function makeTree() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }

  // function toggleSound(){
  //   mySound1.play();
  // }

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

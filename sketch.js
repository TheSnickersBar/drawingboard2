var database;
var line1 = [];


function setup(){
    database = firebase.database();
    createCanvas(500,500);
    this.line = null;
    
    
}

function draw(){
    background(0);
    if (mouseIsPressed){
      var point = {
        x: mouseX, 
        y: mouseY
      }
      line1.push(point);
    }

    beginShape();
    stroke(255);
    noFill();
    for(var i=0; i<this.line1.length; i++){     
        vertex(line1[i].x, line1[i].y);
      }
    endShape();
   
    update(){
  var updateline = database.ref('x');
  updateline.on("value",(data)=>{
  this.line = data.val(); 
  })
    

  }
}


   


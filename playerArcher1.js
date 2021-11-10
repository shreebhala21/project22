class playerArcher1 {
    constructor(x, y, width, height, angle) {
      var options={
        isStatic:true
      }
      this.body=Matter.Bodies.rectangle(x,y,width,height,options)
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.playerArcher1Image = loadImage("assets/playerArcher.png");
      
    }
    show(){
    push ()
    imageMode(CENTER)
    image (this.playerArcher1Image,this.body.position.x,this.body.position.y,this.width,this.height)
    pop ()
    }
  }
  
class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
      var pos= this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x,pos.y,this.width, this.height);
      if (this.body.speed < 3){
       
      }
    }
}
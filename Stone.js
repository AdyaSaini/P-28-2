class Stone{
    constructor(x,y){
      var options= {
          isStatic:true,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x, y, 1, options);
      World.add(world, this.body);
      this.image = loadImage("sprites/stone.png");
    }
  
    display() {
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
    }
}
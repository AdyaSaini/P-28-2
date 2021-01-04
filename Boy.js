class Boy{
  constructor(x, y) {
    var options= {
       'isStatic' : true,
       'restitution':0.3,
       'friction':0.5,
       'density':1.2
    }
      this.body = Bodies.rectangle(x, y, 20, 20, options); 
      World.add(world, this.body);
      this.image = loadImage("sprites/boy.png");
  }
  display(){
    
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, x, y);
  }
}
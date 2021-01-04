class Ground{
    constructor(width, height) {
        var options= {
            'isStatic' : false,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(400,290, width, height, options);
        this.width = width;
        this.height = height;
    }
    display(){
      var pos =this.body.position;
      fill("gray");
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
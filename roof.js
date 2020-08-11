class Roof {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(400,200,250,25,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, 250, 25);
    }
  }
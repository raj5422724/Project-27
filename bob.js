class bob {
    constructor(x,y) {
        this.body = Bodies.circle(x,y,25);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill("magenta");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,50);
    }
}

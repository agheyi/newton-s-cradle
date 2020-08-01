class Bob
{
    constructor(x, y)
    {
        this.bob = Bodies.circle(x, y, 70, {isStatic: true, restitution:0.3, friction: 0.5, density:1.2});
        World.add(world, this.bob);
        this.x = x
        this.y = y
    }
    
    display()
    {
        noStroke();
        var pos = this.bob.position;
        push();
        fill(100, 100, 0)
        translate(pos.x, pos.y)
        ellipseMode(RADIUS)
        ellipse(0, 0, 70, 70);
        fill(255);
    pop();
    }

}


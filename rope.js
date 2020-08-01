class rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{
                x: this.offsetX, 
                y: this.offsetY
            }
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        
    }
    display(){
        if (this.chain.bodyA)
        {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.BodyB.position;
        stroke("white");
        strokeWeight(4);
        line(pointA.x, pointA.y - 50, pointB.x + this.offsetX, pointB.y + this.offsetY);
        }
        
    }
    
}
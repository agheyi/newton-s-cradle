class Bob{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{isStatic:false,restitution:1,density:1,frictionStatic:0,friction:0,frictionAir:0});
        World.add(world,this.body);
        this.radius=2*radius;
    }
    display(){
      var pos =this.body.position;
      fill("purple");
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
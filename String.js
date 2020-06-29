class String {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.string = Constraint.create(options);
        World.add(world,this.string);
}

    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;
        strokeWeight(10);
        stroke(255);
        line(pointA.x, pointA.y, pointB.x, pointB.y)

    }
}

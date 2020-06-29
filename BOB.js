class BOB {
    constructor(x,y){
        var options = {
            'restitution' : 1 ,
            'density' : 1
        }

        this.body = Bodies.circle(x,y, 20 , options);
        this.x= x ;
        this.y =y;
        World.add(world , this.body);
    }
    display(){
      

   var pos =this.body.position;
      pos.x=this.x;
      pos.y=this.y;
    
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke("green");
      fill("blue");
      ellipse(this.x,this.y, 100);
        
     }


}
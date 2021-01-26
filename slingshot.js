class Slingshot{
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        this.sling=constraite.create(options);
        this.pointB = pointB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA= null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA= this.sling.bodyA.position;
            var pointB = this.bodyB;

            strokeWeight(4);
            stroke("turquosie");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        }

        
}
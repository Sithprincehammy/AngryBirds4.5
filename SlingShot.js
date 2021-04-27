class SlingShot{
    constructor(Body1, Point2){
        var options = {
            bodyA: Body1,
            pointB: Point2,
            stiffness: 0.04,
            length: 10,
        }
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.pointB = Point2
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        push();
        strokeWeight(4);
        stroke(84, 39, 15);
        if(pointA.x > 220){
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
        }
        else{
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        
        pop();
       } 
    }
}
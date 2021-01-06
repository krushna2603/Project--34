class Pendulum{
    constructor(x,y){
        var options = {
          isStatic: false,
          density: 7.8,
          friction : 0,
          restitution: 1.3
        }
        this.body = Bodies.circle(x,y,40,options);
        this.r = 40;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        stroke("#fff");
        strokeWeight(3);
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop ();
    }
}

class Arrow{
    constructor(x,y,width,height,bowAngle){
     var options = {
         isStatic : true
        }
     this.width = width
     this.height = height
     this.body = Bodies.rectangle(x,y,this.width,this.height,options)
     this.image = loadImage("arrow.png")
     this.bowAngle = bowAngle
     this.velocity = p5.Vector.fromAngle(bowAngle);
     
     World.add(world,this.body)
    }

    display(){    

        var pos = this.body.position;
        var angle = this.body.angle;

        if (keyIsDown(39) && angle < 20) {
            angle += 1;
            Matter.Body.setAngle(this.body, angle);
          }
      
          if (keyIsDown(37) && angle > -20) {
            angle -=1;
            Matter.Body.setAngle(this.body, angle);
          }
        

        push ()
        translate(pos.x, pos.y)
        rotate(angle);
        imageMode(CENTER)
        image (this.image,0,0,this.width,this.height)
        pop ()

        
    }



    shoot(bowAngle) {
   
    this.velocity = p5.Vector.fromAngle(bowAngle * (3.14 / 180));

    this.velocity.mult(0.4);

    Matter.Body.setVelocity(this.body, {
      x: this.velocity.x * (180 / 3.14),
      y: this.velocity.y * (180 / 3.14)
    });

    Matter.Body.setStatic(this.body, false);
      }
    


 remove(){
  Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
  Matter.World.remove(world, this.body);
 }



}

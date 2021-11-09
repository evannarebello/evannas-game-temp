class Bow{
    constructor(x, y, width, height, ){
     const options = {
            isStatic: true
        };
        
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    
     this.image = loadImage("bow.png");
     World.add(world,this.body)

     Matter.Body.setAngle(this.body, 0);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;  
        console.log(angle)
        
        if (keyIsDown(39) && angle < 20 ) {
            angle += 1;
            Matter.Body.setAngle(this.body, angle);
          }
      
          if (keyIsDown(37) && angle > -20) {
            angle -=1;
            Matter.Body.setAngle(this.body, angle);
          }

     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
     pop();
          
    }


  
}
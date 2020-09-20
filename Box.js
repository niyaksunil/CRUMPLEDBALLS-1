// creating the Box class
class Box {
    constructor(x,y,width,height, color){
      var options = {
        isStatic: true
      }

// setting the parameters of the Box
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
    }

// displaying the function
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
// creating the Paper class
class Paper {
  constructor(x,y,radius){
    var options = {
      'restitution':0.5,
      'friction':1.0,
      'density':1.0       
    }
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world, this.body);
  } 
  
  // displaying the function
   display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    strokeWeight(14);
    stroke(0);
    fill(255);
    ellipse(0, 0);
    pop();
   }
}

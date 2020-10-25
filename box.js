class Box  {
    constructor(x,y,width,height)   {
        var options = {
            isStatic:true
        }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
     this.height = height;
   
     World.add(world,this.body);
    }

    display()   {
      push();
        var pos2= this.body.position;
        translate(pos2.x,pos2.y);
    rectMode(CENTER);
        fill("red");
       rect(0,0,this.width,this.height);
        pop();
    }
}
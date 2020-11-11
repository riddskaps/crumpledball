class Ball{
   
    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }

        //this.body.Bodies.circle(x,y,r,options)
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        World.add(world,this.body)

    }
  display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      //rotate(this.body.angle)
      rectMode(RADIUS)
      fill("pink")
      ellipse(0,0,this.r) 
      pop()

  }
}
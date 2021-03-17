class Drops{
    constructor(x,y,radius,options){
    var options={
        isStatic:false,
        friction:0.5

    }
    this.radius=radius
    this.body=Bodies.circle(x,y,radius,options)
    World.add(world,this.body)
}

display(){
    var pos=this.body.position
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.radius,this.radius)
    fill("blue")

    if(this.body.position.y>height){
        
    
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
}
}

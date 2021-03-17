class Umbrella{
    constructor(x,y,options){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,70,70,options)
        
        this.image=loadImage("Walking Frame/walking_1.png")
        World.add(world,this.body)
    }
        display(){
            var pos=this.body.position
            imageMode(CENTER)
            image(this.image,pos.x,pos.y,300,300)
        }

}
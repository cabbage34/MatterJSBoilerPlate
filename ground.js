class Ground{
    constructor(x,y,w,h){
this.w = w
this.h = h
this.body = Matter.Bodies.rectangle(x,y,w,h,{isStatic:true})
World.add(world,this.body)
    } 

display(){
    var pos = this.body.position
    push()
    rectMode(CENTER)
    rect(pos.x,pos.y,this.w,this.h)
    pop()
}
}
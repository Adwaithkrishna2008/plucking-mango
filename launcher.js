class Launcher{
constructor(bodyA,pointB){

var opt={

bodyA:bodyA,
pointB:pointB,
stiffness:0.004,
length:7

}
this.pointB=pointB
this.launcher=Constraint.create(opt)
World.add(world,this.launcher)
}

fly(){

    this.launcher.bodyA = null
}


display(){
if(this.launcher.bodyA){
var pointA = this.launcher.bodyA.position
var pointB = this.pointB
strokeWeight(10)
line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}


    
}
class Rope{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
		//	bodyC:body3,
			pointB :{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
	  //  var pointC=this.rope.bodyC.position;

		strokeWeight(2);

		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY
/*
		var Anchor3Y=pointC.y+this.offsetY
        var Anchor3X=pointC.y+this.offsetY

        var Anchor4Y=pointD.y+this.offsetY
        var Anchor4X=pointD.y+this.offsetY
		*/

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	}

}
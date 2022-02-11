export default class NiceShape {
    constructor(x,y,contextRef){
this.x=x
this.y=y
this.color="black"
this.size=0.01

    }

    draw(contextRef){
        contextRef.current.beginPath()
        contextRef.current.lineWidth=this.size

        contextRef.current.fillStyle="black"

        contextRef.current.arc(this.x,this.y,this.size,0,Math.PI*2)
        contextRef.current.fill()
      
        contextRef.current.closePath()
    

    }
    update(o,t,contextRef){
        let xx=o
        let yy=t
      let dx=xx-this.x
      let dy=yy-this.y
      let distance=Math.sqrt(dx*dx+dy*dy)
    
if(distance<30){
    contextRef.current.beginPath()
    contextRef.current.moveTo(xx,yy)
    contextRef.current.lineTo(this.x,this.y)
    contextRef.current.stroke()


   
}
    }
}
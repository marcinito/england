export default class Spray{
    constructor(ctxRef,sizeLine){
        this.x=window.event.offsetX
        this.y=window.event.offsetY
        this.sizeSpray=sizeLine
        this.size=Math.floor(Math.random()*this.sizeSpray)
    }
    sprayDraw(ctxRef){
        ctxRef.current.beginPath()
        ctxRef.current.arc(this.x,this.y,this.size,0,Math.PI*2)
ctxRef.current.fill()

    }
    dispose(ctxRef){
  
 
    }
}
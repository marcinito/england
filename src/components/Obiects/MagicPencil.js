export default class MagicPencil{
    constructor(ctxRef,sizeLine,directionMove){
      this.x=window.event.offsetX
      this.y=window.event.offsetY
      this.size=sizeLine
  
    }
    magicDraw(ctxRef){
      ctxRef.current.beginPath()
   
      ctxRef.current.arc(this.x,this.y,this.size,0,Math.PI*2)
      
      ctxRef.current.fill()
      
      ctxRef.current.stroke()
    }
    effectDraw(){
      if(this.size>1)this.size+=0.3
    }
    effectDrawSub(){
      if(this.size>1)this.size-=0.3
    }
    moveEffect(directionMove){
      this.x +=Math.floor(Math.random()*directionMove.x-directionMove.y)
      this.y-=Math.floor(Math.random()*directionMove.x-directionMove.y)
    }
  }
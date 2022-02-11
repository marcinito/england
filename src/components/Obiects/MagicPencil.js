export default class MagicPencil{
    constructor(contextRef,sizeObject){
      this.x=window.event.offsetX
      this.y=window.event.offsetY
      this.size=5
  
    }
    magicDraw(contextRef){
      contextRef.current.beginPath()
   
      contextRef.current.arc(this.x,this.y,this.size,0,Math.PI*2)
      
      contextRef.current.fill()
      
      contextRef.current.stroke()
    }

    effectDrawSub(arrayRef){
      if(this.size>5){this.size-=0.3}
      if(this.size<5){this.size-=0.3}
    
      

    }
    moveEffect(){
      
      this.y-=Math.floor(Math.random()*3-1.5)
      this.x-=Math.floor(Math.random()*3-1.5)
     
      
    }
  }
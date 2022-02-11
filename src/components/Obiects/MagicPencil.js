export default class MagicPencil{
    constructor(contextRef,x,y,size,color){
      this.x=x
      this.y=y
      this.size=size
      this.color=color
  
    }

    drawContour(contextRef){


    
            contextRef.current.strokeRect(this.x,this.y,this.size,this.size)
          
           
          
       
            
         
          }



    magicDraw(contextRef){
      contextRef.current.beginPath()
    
 
      
  
      contextRef.current.arc(this.x,this.y,this.size,0,Math.PI*2)
      
      contextRef.current.fill()
      
      
      contextRef.current.stroke()
    }

    magicSquare(contextRef){


      contextRef.current.fillRect(this.x,this.y,this.size,this.size)
    
      
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
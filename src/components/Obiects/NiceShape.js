export default class NiceShape{
    constructor(mouse,canvasRef){
        this.mousex=mouse.x
        this.mousey=mouse.y
        this.x=Math.floor(Math.random()*canvasRef.current.width)
        this.y=Math.floor(Math.random()*canvasRef.current.height)
       this.color="green"
        this.sizeOne=0.1
    }
    drawNiceShape(contextRef){
        contextRef.current.beginPath()
        contextRef.current.strokeStyle=this.color

        contextRef.current.arc(this.x,this.y,0.1,0,Math.PI*2)
        contextRef.current.fill()
        contextRef.current.stroke()

    }
    drawGit(contextRef){
        let dx=this.mousex-this.x
        let dy=this.mousey-this.y
        let distance=Math.sqrt(dx*dx+dy*dy)
        if(distance<200){
            contextRef.current.beginPath()
            contextRef.current.styleStroke="white"
contextRef.current.moveTo(this.mousex,this.mousey)
contextRef.lineTo(this.mousex,this.mousey)
contextRef.current.stroke()
contextRef.current.closePath()
console.log(dx)
        }
        
    }
}
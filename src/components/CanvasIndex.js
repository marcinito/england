import React,{useEffect,useRef} from 'react';

function CanvasIndex() {
  const canvasRef=useRef(null)
  const ctxRef=useRef(null)
  const cancelAnimationRef=useRef(null)

  const mouse={
    x:null,
  }
useEffect(()=>{
canvasRef.current.addEventListener("mousemove",(e)=>{
mouse.x=e.offsetX
mouse.y=e.offsetY
})
})
  class Particle {
    constructor(){
      this.size=Math.floor(Math.random()*15)
      this.x=Math.floor(Math.random()*window.innerWidth)
      this.y=Math.floor(Math.random()*window.innerHeight)
      this.speedX=Math.floor(Math.random()*3-1.5)
      this.speedY=Math.floor(Math.random()*3-1.5)
      this.color=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    }
    draw(){
      ctxRef.current.beginPath()
      ctxRef.current.fillStyle=this.color
      ctxRef.current.arc(this.x,this.y,this.size,0,Math.PI*2)
      ctxRef.current.fill()
      ctxRef.current.stroke()

    }
    went(){
this.x+=this.speedX
this.y+=this.speedY
    }
    check(){
      let dx=mouse.x-this.x
      let dy=mouse.y-this.y
      let distance=Math.sqrt(dx*dx+dy*dy)
      if(distance<100){
       
      }
    }
  }
  useEffect(()=>{
    const canvas=canvasRef.current
    const ctx=canvas.getContext("2d")
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    ctxRef.current=ctx


  },[])

useEffect(()=>{
  let tablica=[]
  

  function makeParticle(){
for(let i=0;i<100;i++){
  tablica.push(new Particle())
}}
function rysuj(){
  for(let i=0;i<100;i++){
    tablica[i].draw()
    tablica[i].went()
  }
}
console.log(tablica)


  
  makeParticle()

let timestamps =0

function checkDis(){
  for(let i=0;i<tablica.length;i++){
    tablica[i].check()
  }
}

  const animate=(frame)=>{
   checkDis()
timestamps++
if(timestamps%10===0){


ctxRef.current.clearRect(0,0,1500,1500)
  rysuj(canvasRef.current)


}
        cancelAnimationRef.current=requestAnimationFrame(animate)
      }
      animate()

return ()=>{
  cancelAnimationFrame(cancelAnimationRef.current)
}

})

  return <div>
      <canvas id="canvas2" ref={canvasRef}></canvas>
  </div>;
}

export default CanvasIndex;

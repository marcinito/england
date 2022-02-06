import React,{useEffect,useRef} from 'react';

function CanvasIndex() {
  const canvasRef=useRef(null)
  const ctxRef=useRef(null)

  class Particle {
    constructor(){
      this.size=Math.floor(Math.random()*15)
      this.x=Math.floor(Math.random()*window.innerWidth-300)
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
  }
  useEffect(()=>{
    const canvas=canvasRef.current
    const ctx=canvas.getContext("2d")
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight-200
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
let frame=0
  const animate=(frame)=>{
    console.log(timestamps)
timestamps++
if(timestamps%10===0){


ctxRef.current.clearRect(0,0,1500,1500)
  rysuj(canvasRef.current)


}
        requestAnimationFrame(animate)
      }
      animate()

})

  return <div>
      <canvas id="canvas2" ref={canvasRef}></canvas>
  </div>;
}

export default CanvasIndex;

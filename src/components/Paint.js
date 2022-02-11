import React,{useRef,useState,useEffect} from 'react'
import NiceShape from './Obiects/NiceShape'

function Paint() {
const [isDraw,setIsDraw]=useState(false)
const [effect,setEffect]=useState({spiderEffect:false,pencil:true})
  const canvasRef=useRef(null)
  const paintRef=useRef(null)
  const contextRef=useRef(null)
  const dashboardRef=useRef(null)
  const webArrayRef=useRef(null)
  const widthRef=useRef(null)
  const heightRef=useRef(null)



  useEffect(()=>{
  
    const canvas=canvasRef.current
    const context=canvas.getContext("2d")
    canvas.width=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("width"))
    canvas.height=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("height"))-parseInt(window.getComputedStyle(dashboardRef.current).getPropertyValue("height"))

widthRef.current=canvas.width
heightRef.current=canvas.height



   contextRef.current=context
  
   
},[])
useEffect(()=>{
  contextRef.current.fillStyle="red"
  contextRef.current.lineCap="square"
  contextRef.current.lineWidth=0.1
  contextRef.current.strokeStyle="red"
})

let mouse={
  x:undefined,
  y:undefined
}
const mouseDown=()=>{
  
setIsDraw(true)
if(effect.spiderEffect){
function makeWeb(){
  for(let i=0;i<1500;i++){
   let x=Math.floor(Math.random()*widthRef.current)
   let y=Math.floor(Math.random()*heightRef.current)
    webArrayRef.current.push(new NiceShape(x,y))
  }
}
makeWeb()
function rysuj(contextRef){
  for(let i=0;i<webArrayRef.current.length;i++){
    webArrayRef.current[i].draw(contextRef)
  }
}
rysuj(contextRef)
}
console.log("counter")
}
const draw=()=>{
  canvasRef.current.addEventListener("mousemove",(e)=>{
mouse.x=e.offsetX
mouse.y=e.offsetY

  })
if(isDraw && effect.spiderEffect){

  





let o=mouse.x
let t=mouse.y

function spiderEffect(){
  for(let i=0;i<webArrayRef.current.length;i++){
    webArrayRef.current[i].update(o,t,contextRef)
  }
}


const animation=()=>{
spiderEffect()
return
  window.requestAnimationFrame(animation)
}
animation()

}

}
const mouseUp=()=>{
setIsDraw(false)
webArrayRef.current=[]
setEffect({...effect,spiderEffect:true})
}
const takeNiceShape=()=>{
  
}
const takeSpiderEffect=()=>{
 setEffect({...effect,spiderEffect:true}) 
}


console.log(webArrayRef.current)
  return (
    <div className="paint" ref={paintRef}>
      <div className="dashboard" ref={dashboardRef} >
        <button onClick={()=>takeNiceShape()}>klik</button>
        <button onClick={()=>takeSpiderEffect()}>spiderEffect</button>
      </div>
      <canvas id="canvasPaint" ref={canvasRef}
      onMouseDown={mouseDown}
      onMouseMove={draw}
      onMouseUp={mouseUp}
      
      ></canvas>
    </div>
  )
}

export default Paint
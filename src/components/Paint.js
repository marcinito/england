import React,{useRef,useState,useEffect} from 'react'
import NiceShape from './Obiects/NiceShape'
import MagicPencil from './Obiects/MagicPencil'

function Paint() {
const [isDraw,setIsDraw]=useState(false)
const [effect,setEffect]=useState({spiderEffect:false,pencil:true,circle:false})
const [lineWidth,setLineWidth]=useState(5)
const [size,setSize]=useState(5)
const [lineCap,setLineCap]=useState("square")
const [contour,setContour]=useState("red")
  const canvasRef=useRef(null)
  const paintRef=useRef(null)
  const contextRef=useRef(null)
  const dashboardRef=useRef(null)
  const webArrayRef=useRef(null)
  const magicArrayRef=useRef(null)
  const widthRef=useRef(null)
  const heightRef=useRef(null)
  const paletRef=useRef(null)



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
  contextRef.current.lineCap=lineCap
  contextRef.current.lineWidth=lineWidth
  contextRef.current.strokeStyle=contour

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
//*DRAWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW*//
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

  
}
animation()

}

if(effect.pencil && isDraw){
  contextRef.current.beginPath()
  contextRef.current.moveTo(mouse.x,mouse.y)
  contextRef.current.lineTo(mouse.x,mouse.y)

  contextRef.current.fill()
  contextRef.current.stroke()

return

}

if(effect.circle && isDraw){
  magicArrayRef.current=[]
function makeCircle(){
  for(let i=0;i<1;i++){
    magicArrayRef.current.push(new MagicPencil(contextRef,mouse.x,mouse.y,size))
  }
}
makeCircle()

function drawCircle(){
  for(let i=0;i<1;i++){
    magicArrayRef.current[i].magicDraw(contextRef)

  }
}

const animation=()=>{
  drawCircle(contextRef)
 
}
animation()

}
if(effect.square && isDraw){
  magicArrayRef.current=[]
function makeSquare(){
  for(let i=0;i<1;i++){
    magicArrayRef.current.push(new MagicPencil(contextRef,mouse.x,mouse.y,size))
  }
}
makeSquare()
function drawSquare(){
  for(let i=0;i<1;i++){
    magicArrayRef.current[i].magicSquare(contextRef)
  }
}
const animation=()=>{

drawSquare()

}
animation()
}
}
const mouseUp=()=>{
setIsDraw(false)
webArrayRef.current=[]
magicArrayRef.current=[]
}
const takeNiceShape=()=>{
  setEffect({...effect,spiderEffect:false,pencil:true,circle:false,square:false}) 
  setLineWidth(5)
}
const takeSpiderEffect=()=>{
 setEffect({...effect,spiderEffect:true,pencil:false,circle:false,square:false}) 
 setLineWidth(0.2)
 
}
const takeCircle=()=>{
  setEffect({...effect,spiderEffect:false,pencil:false,circle:true,square:false}) 
  setSize(100)
}
const takeSquare=()=>{
  setEffect({...effect,spiderEffect:false,pencil:false,circle:false,square:true}) 
  setSize(100)
}

console.log(lineWidth)
console.log(magicArrayRef.current)
  return (
    <div className="paint" ref={paintRef}>
      <div className="dashboard" ref={dashboardRef} >
      <div className="palet" ref={paletRef}>
      <button className="colorToPaint" style={{backgroundColor:"red"}} onClick={()=>setContour("red")}></button>
    <button className="colorToPaint" style={{backgroundColor:"green"}} onClick={()=>setContour("green")}></button>
    <button className="colorToPaint" style={{backgroundColor:"blue"}} onClick={()=>setContour("blue")}></button>
    <button className="colorToPaint" style={{backgroundColor:"pink"}} onClick={()=>setContour("pink")}></button>
    <button className="colorToPaint" style={{backgroundColor:"yellow"}} onClick={()=>setContour("yellow")}></button>
    <button className="colorToPaint" style={{backgroundColor:"orange"}} onClick={()=>setContour("orange")}></button>
    <button className="colorToPaint" style={{backgroundColor:"cyan"}} onClick={()=>setContour("cyan")}></button>
    <button className="colorToPaint" style={{backgroundColor:"crimson"}} onClick={()=>setContour("crimson")}></button>
    <button className="colorToPaint" style={{backgroundColor:"plum"}} onClick={()=>setContour("plum")}></button>
    <button className="colorToPaint" style={{backgroundColor:"brown"}} onClick={()=>setContour("brown")}></button>
    <button className="colorToPaint" style={{backgroundColor:"skyblue"}} onClick={()=>setContour("skyblue")}></button>
    <button className="colorToPaint" style={{backgroundColor:"darkorange"}} onClick={()=>setContour("darkorange")}></button>
    <button className="colorToPaint" style={{backgroundColor:"gray"}} onClick={()=>setContour("gray")}></button>
    <button className="colorToPaint" style={{backgroundColor:"darkcyan"}} onClick={()=>setContour("darkcyan")}></button>
    <button className="colorToPaint" style={{backgroundColor:"white"}} onClick={()=>setContour("white")}></button>
    <button className="colorToPaint" style={{backgroundColor:"coral"}} onClick={()=>setContour("coral")}></button>
    <button className="colorToPaint" style={{backgroundColor:"darksalmon"}} onClick={()=>setContour("darksalmon")}></button>
    <button className="colorToPaint" style={{backgroundColor:"deeppink"}} onClick={()=>setContour("deeppink")}></button>
    <button className="colorToPaint" style={{backgroundColor:"gold"}} onClick={()=>setContour("gold")}></button>
    <button className="colorToPaint" style={{backgroundColor:"greenyellow"}} onClick={()=>setContour("greenyellow")}></button>
    <button className="colorToPaint" style={{backgroundColor:"indigo"}} onClick={()=>setContour("indigo")}></button>
    <button className="colorToPaint" style={{backgroundColor:"peru"}} onClick={()=>setContour("peru")}></button>
      </div>
        <button onClick={()=>takeNiceShape()}>klik</button>
        <button onClick={()=>setLineCap("round")}>o</button>
        <button onClick={()=>setLineCap("square")}>[]</button>
        <button onClick={()=>takeSpiderEffect()}>spiderEffect</button>
        <button onClick={()=>takeCircle()}>Circle</button>
        <button onClick={()=>takeSquare()}>square</button>
      </div>
      <div className="lineWidth">
       
        <button disabled={lineWidth===0?true:false}  onClick={()=>setLineWidth((lW)=>lW-1)}>sub</button>
        <button disabled={lineWidth===20?true:false} onClick={()=>setLineWidth((lW)=>lW+1)}>add</button>
        <input type="number" value={size} onChange={(e)=>setSize(e.target.value)}></input>
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
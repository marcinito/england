import React,{useEffect,useState,useRef, useLayoutEffect} from 'react';

function Paint() {
  const [isDraw,setIsDraw]=useState(false)
const [sizeSquare,setSizeSquare]=useState({width:100,height:100})
  const [suwak,setSuwak]=useState(false)
  const [color,setColor]=useState("black")
  const [sizeLine,setSizeLine]=useState(10)
  const [drawSquare,setDrawSquare]=useState(false)
  const [drawPencil,setDrawPencil]=useState(true)
  const [drawCircle,setDrawCircle]=useState(true)
  const [btnDis,setBtnDis]=useState(false)
  const [inputDis,setInputDis]=useState(false)
  const canvasRef=useRef(null)
  const moveRef=useRef(null)

  const navRef=useRef()
  const paintRef=useRef()
  const ctxRef=useRef()

useEffect(()=>{

  const canvas = canvasRef.current
  canvas.width=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("width"))
  canvas.height=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("height"))
 const CANVAS_WIDTH=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("width"))
 const CANVAS_HEIGHT=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("height"))
  const ctx=canvas.getContext("2d")
 
  ctx.lineCap="round"
  
  
  ctxRef.current=ctx
},[])

useEffect(()=>{

  ctxRef.current.strokeStyle=color
  ctxRef.current.lineWidth=sizeLine
  ctxRef.current.fillStyle=color
},[color,sizeLine])
const startDrawing=(e)=>{
 
let cx=e.nativeEvent.offsetX
let cy=e.nativeEvent.offsetY
if(drawSquare===true){
  let cx2=moveRef.current
  let cy2=moveRef.current

  ctxRef.current.fillRect(cx,cy,sizeSquare.width,sizeSquare.height)
}
setIsDraw(true)
if(drawPencil===true){
ctxRef.current.beginPath()
ctxRef.current.moveTo(cx,cy)
}
}
const finishDrawing=()=>{

  if(drawPencil===true){
  ctxRef.current.closePath()
  }
setIsDraw(false)
  

}
const draw=(e)=>{
  moveRef.current+=1
if(!isDraw){
  return
}
let cx=e.nativeEvent.offsetX
let cy=e.nativeEvent.offsetY
if(drawPencil===true){
ctxRef.current.lineTo(cx,cy)
ctxRef.current.stroke()

    
}

}
const changeSizeLineSub=()=>{

  setSizeLine((prevLine)=>prevLine-1)
if(sizeLine===1){
  setBtnDis(true)
}
console.log(sizeLine)
}
const changeSizeLineAdd=()=>{
  console.log(sizeLine)
  setSizeLine((prevLine)=>prevLine+1)
  if(sizeLine>0){
    setBtnDis(false)
  }
}
const activeSquare=()=>{
  setDrawPencil(false)
  setDrawSquare(true)
  setDrawCircle(false)
  moveRef.current=0
}
const activePencil=()=>{
  setDrawPencil(true)
  setDrawSquare(false)
  setDrawCircle(false)
}
const activeCircle=()=>{
  setDrawPencil(false)
  setDrawSquare(false)
  setDrawCircle(true)
  setInputDis(true)
}
console.log(moveRef.current)
  return <div className="paint" ref={paintRef}>
  <div className="dashboard" onMouseMove={()=>draw()} ref={navRef}>
    <div className="colorsToPaintContainer">
    <button className="colorToPaint" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}></button>
    <button className="colorToPaint" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}></button>
    <button className="colorToPaint" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}></button>
    <button className="colorToPaint" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}></button>
    <button className="colorToPaint" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}></button>
    <button className="colorToPaint" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}></button>
    <button className="colorToPaint" style={{backgroundColor:"cyan"}} onClick={()=>setColor("cyan")}></button>
    <button className="colorToPaint" style={{backgroundColor:"crimson"}} onClick={()=>setColor("crimson")}></button>
    <button className="colorToPaint" style={{backgroundColor:"plum"}} onClick={()=>setColor("plum")}></button>
    <button className="colorToPaint" style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}></button>
    <button className="colorToPaint" style={{backgroundColor:"skyblue"}} onClick={()=>setColor("skyblue")}></button>
    <button className="colorToPaint" style={{backgroundColor:"darkorange"}} onClick={()=>setColor("darkorange")}></button>
    <button className="colorToPaint" style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}></button>
    <button className="colorToPaint" style={{backgroundColor:"darkcyan"}} onClick={()=>setColor("darkcyan")}></button>
    <button className="colorToPaint" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}></button>
    <button className="colorToPaint" style={{backgroundColor:"coral"}} onClick={()=>setColor("coral")}></button>
    <button className="colorToPaint" style={{backgroundColor:"darksalmon"}} onClick={()=>setColor("darksalmon")}></button>
    <button className="colorToPaint" style={{backgroundColor:"deeppink"}} onClick={()=>setColor("deeppink")}></button>
    <button className="colorToPaint" style={{backgroundColor:"gold"}} onClick={()=>setColor("gold")}></button>
    <button className="colorToPaint" style={{backgroundColor:"greenyellow"}} onClick={()=>setColor("greenyellow")}></button>
    <button className="colorToPaint" style={{backgroundColor:"indigo"}} onClick={()=>setColor("indigo")}></button>
    <button className="colorToPaint" style={{backgroundColor:"peru"}} onClick={()=>setColor("peru")}></button>
    </div>
    <div className="widthLine">
      <button disabled={btnDis} onClick={()=>changeSizeLineSub()}>←</button><span> LINE <em >{sizeLine}</em> WIDTH</span>
      <button  onClick={()=>changeSizeLineAdd()} >→</button>
    </div>
    <div className="shapes">
   
      <button onClick={()=>activeSquare()}>square</button>
      <button onClick={()=>activeCircle()}>circle</button>
      <div className="suwak">
       <input type="number" value={sizeSquare.width} onChange={(e)=>setSizeSquare({...sizeSquare,width:e.target.value})} placeholder="width" style={{width:"50%",textAlign:"center"}}></input>
       <input type="number" disabled={inputDis} value={sizeSquare.height} onChange={(e)=>setSizeSquare({...sizeSquare,height:e.target.value})} placeholder="height" style={{width:"50%",textAlign:"center"}}></input>
      </div>

  
     
    
    </div>
    <button onClick={()=>activePencil()}>pencil</button>
    </div>
  <canvas id="canvas1"
 
   onMouseDown={startDrawing}
   onMouseUp={finishDrawing}
   onMouseMove={draw}
   ref={canvasRef}
   ></canvas>
  </div>;
}

export default Paint;

import React,{useEffect,useState,useRef} from 'react';
import kosz from '../img/kosz.jpg'
import pedzel from '../img/pedzel.jpg'
import spray from '../img/spray.jpg'
import Spray from './Obiects/Spray';
function Paint() {
  const [isDraw,setIsDraw]=useState(false)
const [sizeSquare,setSizeSquare]=useState({width:100,height:100})
  const [suwak,setSuwak]=useState(false)
  const [magicPencilActive,setMagicPencilActive]=useState(false)
  const [contour,setContour]=useState("black")
  
 
  const [obrys,setObrys]=useState(false)
  const [color,setColor]=useState("red")
  const [strokeColor,setStrokeColor]=useState(false)
  const [sizeLine,setSizeLine]=useState(10)
  /*MAGICPENCIL*/
  const [moveEffect,setMoveEffect]=useState(false)
  const [magicPenA,setMagicPenA]=useState(true)
  const [onlyDraw,setOnlyDraw]=useState(true)
  const [subEffect,setSubEffect]=useState(false)
  const [sizeMagicStroke,setSizeMagicStroke]=useState(10)
  const [directionMove,setDirectionMove]=useState({x:3,y:1})
  const [squareM,setSquareM]=useState(true)

  /**/
  const [drawSquare,setDrawSquare]=useState(false)
  const [drawPencil,setDrawPencil]=useState(true)
  const [drawCircle,setDrawCircle]=useState(false)
  const [drawSpray,setDrawSpray]=useState(false)
  const [btnDis,setBtnDis]=useState(false)
  const [inputDis,setInputDis]=useState(false)
  const canvasRef=useRef(null)
  const moveRef=useRef(null)
  const paletRef=useRef(null)
  const btnShape=useRef(null)
 

  const navRef=useRef()
  const animationRef=useRef()
  const paintRef=useRef()
  const ctxRef=useRef()
  const tabRef=useRef()
  const tabSprayRef=useRef()



class MagicPencil{
  constructor(){
    this.x=window.event.offsetX
    this.y=window.event.offsetY
    this.size=sizeMagicStroke

  }
  magicDraw(){
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
  moveEffect(){
    this.x +=Math.floor(Math.random()*directionMove.x-directionMove.y)
    this.y-=Math.floor(Math.random()*directionMove.x-directionMove.y)
  }
}

useEffect(()=>{

  const canvas = canvasRef.current
  canvas.width=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("width"))
  canvas.height=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("height"))
 
  const ctx=canvas.getContext("2d")

  
  
  
  ctxRef.current=ctx
},[])




useEffect(()=>{

  ctxRef.current.strokeStyle=contour
  ctxRef.current.fillStyle=color
  ctxRef.current.lineWidth=sizeLine
  
    ctxRef.current.lineCap="round"
  

},[color,sizeLine,contour])
//*START DRAWING*//
const startDrawing=(e)=>{
 
let cx=e.nativeEvent.offsetX
let cy=e.nativeEvent.offsetY
if(drawSquare===true && obrys===false){


  ctxRef.current.fillRect(cx,cy,sizeSquare.width,sizeSquare.height)
}
else if(drawSquare===true && obrys===true){
 
 
 
  ctxRef.current.strokeRect(cx,cy,sizeSquare.width,sizeSquare.height)

 
}
setIsDraw(true)
if(drawPencil===true){
ctxRef.current.beginPath()
ctxRef.current.moveTo(cx,cy)

}
if(drawCircle===true && obrys===false){
  ctxRef.current.beginPath()
  ctxRef.current.arc(cx,cy,sizeSquare.width,0,Math.PI*2)
  ctxRef.current.fill()
  
 
}
else if(obrys===true && drawCircle===true){
  ctxRef.current.beginPath()
  ctxRef.current.arc(cx,cy,sizeSquare.width,0,Math.PI*2)
  ctxRef.current.fill()
 
  ctxRef.current.strokeStyle=contour
ctxRef.current.stroke()

}
}
//*FINISH DRAWING*//
const finishDrawing=()=>{
  setIsDraw(false)
  tabSprayRef.current=[]
  tabRef.current=[]
    cancelAnimationFrame(animationRef.current)
  
  if(drawPencil===true){
  ctxRef.current.closePath()
  }

  

}
//*DRAW*//
const draw=(e)=>{

if(drawSpray===true && isDraw===true)
{
tabSprayRef.current=[]
function fillSpray(){
  for(let i=0;i<5;i++){
    tabSprayRef.current.push(new Spray(ctxRef,sizeLine))
  }
}
fillSpray()

function getSpray(){
  for(let i=0;i<5;i++){
  tabSprayRef.current[i].sprayDraw(ctxRef)
  tabSprayRef.current[i].dispose(ctxRef)
  }
}

const animation=(timestamps)=>{



  getSpray(ctxRef)

  requestAnimationFrame(animation)
}
animation()

}


  if(magicPencilActive===true && isDraw===true){
    tabRef.current=[]
function make100(){
  for(let i=0;i<1;i++){
    tabRef.current.push(new MagicPencil())
  }
}
make100()
function magicPencilOnlyDraw(){
  for(let i=0;i<1;i++){
    tabRef.current[i].magicDraw()
  
  }
}
function drawMoveEffect(){
  for(let i=0;i<1;i++){
    tabRef.current[i].magicDraw()
   
  
    tabRef.current[i].moveEffect()
  }
}
function subDrawEffect(){
  for(let i=0;i<1;i++){
    tabRef.current[i].magicDraw()
   
  
    tabRef.current[i].moveEffect()
    tabRef.current[i].effectDrawSub()
  }
}
const animate=()=>{
 if(onlyDraw===true){
magicPencilOnlyDraw()
 }
else if(moveEffect===true){
  drawMoveEffect()
}
else if(subEffect===true){
  subDrawEffect()
}
 animationRef.current= requestAnimationFrame(animate)
}
animate()
  }
 
  moveRef.current+=1
if(!isDraw){
  return
}
let cx=e.nativeEvent.offsetX
let cy=e.nativeEvent.offsetY
if(drawPencil===true){
ctxRef.current.lineTo(cx,cy)
ctxRef.current.fillStyle=color
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
  if(sizeLine>-1){
    setBtnDis(false)
  }
}
const activeSquare=()=>{
  setDrawPencil(false)
  setDrawSquare(true)
  setDrawCircle(false)
  setInputDis(false)
  moveRef.current=0
  setMagicPencilActive(false)
  setMagicPenA(true)
  setDrawSpray(false)
}
const activePencil=()=>{
  setDrawPencil(true)
  setDrawSquare(false)
  setDrawCircle(false)
  setInputDis(false)
  setMagicPencilActive(false)
  setSizeLine(10)
  setMagicPenA(true)
  setDrawSpray(false)
}
const activeCircle=()=>{
  setDrawPencil(false)
  setDrawSquare(false)
  setDrawCircle(true)
  setInputDis(true)
  setMagicPencilActive(false)
  setMagicPenA(true)
  setDrawSpray(false)
}

const colorPaletStroke=()=>{
setStrokeColor(true)
if(strokeColor===true){
  paletRef.current.classList.add("paletactive")
  setStrokeColor(!strokeColor)
  return
}
if(strokeColor===false){
  paletRef.current.classList.remove("paletactive")
}

}
const cleanPage=()=>{
  ctxRef.current.clearRect(0,0,10000,10000)
  setMagicPencilActive(false)
  setIsDraw(false)
  setMagicPenA(true)
}
const takeSpray=()=>{
setDrawSpray(true)
setDrawPencil(false)
  setDrawSquare(false)
  setDrawCircle(false)
  setInputDis(false)
  setMagicPencilActive(false)
  setMagicPenA(true)
}
/*MagicPencil*/
const getMagicPencil=()=>{
  setMagicPencilActive(true)
  setDrawPencil(false)
  setDrawSquare(false)
  setDrawCircle(false)
  setInputDis(false)
  setSizeLine(1)
  setMoveEffect(false)
  setOnlyDraw(true)
  setSubEffect(false)
  setMagicPenA(false)
  setDrawSpray(false)

}
const getMoveEffect=()=>{
  setMoveEffect(true)
  setOnlyDraw(false)
  setSubEffect(false)
  setDrawSpray(false)
}
const getSubEffect=()=>{
  setMoveEffect(false)
  setOnlyDraw(false)
  setSubEffect(true)
  setDrawSpray(false)
}
/**/ 

console.log(btnShape.current)
  return <div className="paint" ref={paintRef}>
  <div className="dashboard"  ref={navRef}>
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
  
    <br/>
  
    </div>
 
    
  
    <div className="shapes" >
   
      <button onClick={()=>activeSquare()}style={{width:"50%"}}>☐</button>
      <button onClick={()=>activeCircle()} style={{width:"50%"}}>☯</button>
      <label style={{border:"2px solid black",color:"darkblue",display:"block",textAlign:"center",fontSize:"1rem",width:"100%"}}>Contour
      <input type="checkbox" value={obrys} onChange={()=>setObrys(!obrys)}></input>
      </label>
      
      <button onClick={()=>colorPaletStroke()} style={{width:"100%"}}><span style={{fontSize:"1rem",fontWeight:"bold",color:"darkblue"}}>Color↓Pen</span></button>
      
      <div className="suwak">
       <input type="number" value={sizeSquare.width} onChange={(e)=>setSizeSquare({...sizeSquare,width:e.target.value})} placeholder="width" style={{width:"50%",textAlign:"center"}}></input>
       <input type="number" disabled={inputDis} value={sizeSquare.height} onChange={(e)=>setSizeSquare({...sizeSquare,height:e.target.value})} placeholder="height" style={{width:"50%",textAlign:"center"}}></input>
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
      </div>

  
     
    
    </div>
    <div className="magicItem">
    <button onClick={()=>getMagicPencil()}><i className="icon-brush" /></button>
    <button disabled={magicPenA} onClick={()=>getMoveEffect()}><i className="icon-brush" />++</button>
    <button disabled={magicPenA} onClick={()=>getSubEffect()}><i className="icon-brush" />+++</button>
    <input disabled={magicPenA} type="number" placeholder="size" value={sizeMagicStroke} onChange={(e)=>setSizeMagicStroke(e.target.value)}></input>
    <input disabled={magicPenA} type="number" placeholder="size" value={directionMove.x} onChange={(e)=>setDirectionMove({...directionMove,x:e.target.value})}></input>
    <input disabled={magicPenA} type="number" placeholder="size" value={directionMove.y} onChange={(e)=>setDirectionMove({...directionMove,y:e.target.value})}></input>
    </div>
    <div className="widthLine">
      <button disabled={btnDis} onClick={()=>changeSizeLineSub()}>←</button><span><em >{sizeLine}</em></span>
      <button  onClick={()=>changeSizeLineAdd()} >→</button><br/>
      

    
    </div>
    <img onClick={()=>activePencil()} className="kitTool" src={pedzel}alt="pedzel" ></img>
<img onClick={()=>takeSpray()} className="kitTool"  src={spray} alt="spray"></img>
<img onClick={()=>cleanPage()} className="kitTool"  src={kosz} alt="kosz"></img>
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

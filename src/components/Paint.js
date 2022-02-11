import React,{useRef,useState,useEffect} from 'react'
import NiceShape from './Obiects/NiceShape'
import MagicPencil from './Obiects/MagicPencil'
import Image from './Obiects/Image'
import drzewo from '../img/drzewo.png'
import chmura from '../img/chmura.png'
import krzak from '../img/krzak.png'
import info1 from '../img/info1.png'
import info2 from '../img/info2.png'
import info3 from '../img/info3.png'
import {useSelector,useDispatch} from 'react-redux'

function Paint() {
const [isDraw,setIsDraw]=useState(false)
const [effect,setEffect]=useState({spiderEffect:false,pencil:true,circle:false,square:false,square2:false,image:false})
const [lineWidth,setLineWidth]=useState(5)
const [shadow,setShadow]=useState(false)
const [size,setSize]=useState(5)
const [index,setIndex]=useState(0)
const [lineCap,setLineCap]=useState("square")
const [contour,setContour]=useState("red")
const [color,setColor]=useState("plum")
const [img,setImg]=useState({tree:true,chmura:false,krzak:false})
const dispatch=useDispatch()
const exit=useSelector(state=>state.exit.exit)
  const canvasRef=useRef(null)
  const paintRef=useRef(null)
  const contextRef=useRef(null)
  const dashboardRef=useRef(null)
  const webArrayRef=useRef(null)
  const magicArrayRef=useRef(null)
  const squareArrayRef=useRef(null)
  const widthRef=useRef(null)
  const heightRef=useRef(null)
  const paletRef=useRef(null)
  const drzewotRef=useRef(null)
  const chmuraRef=useRef(null)
  const krzakRef=useRef(null)
  const imgTakeRef=useRef(null)
  const infoRef=useRef(null)
  const infoCloseRef=useRef(null)
  infoRef.current=[info1,info2,info3]



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
  if(exit){
  setTimeout(()=>{
    infoCloseRef.current.style.opacity="1"
  },1500)
}
else{
  infoCloseRef.current.remove()
}

},[])
useEffect(()=>{

  if(shadow){
    contextRef.current.shadowBlur=30
    contextRef.current.shadowColor="black"

  }
  else{
    contextRef.current.shadowBlur=0
  }


 
  
  contextRef.current.lineCap=lineCap
  contextRef.current.fillStyle=color
  contextRef.current.lineWidth=lineWidth
  contextRef.current.strokeStyle=contour



contextRef.current.font="20px Arial"
contextRef.current.fillText=("Siema",100,20)




})

let mouse={
  x:undefined,
  y:undefined
}
const mouseDown=()=>{
  
setIsDraw(true)
squareArrayRef.current=[]
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
  //*SPIDER EFFECT*//
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
 //*PENCIL*//
if(effect.pencil && isDraw){
  contextRef.current.beginPath()
  contextRef.current.moveTo(mouse.x,mouse.y)
  contextRef.current.lineTo(mouse.x,mouse.y)


  contextRef.current.fill()
  contextRef.current.stroke()

return

}
 //*circle*//
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
 return
}
animation()

}
//*SQUARE**//
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
    magicArrayRef.current[i].magicSquare(contextRef,mouse.x,mouse.y,size)
  }
}
const animation=()=>{

drawSquare()

}
animation()
}
//**SQUARE2 **/
if(effect.square2 && isDraw){
  console.log("siema")
squareArrayRef.current=[]
function drawSquareTwo(){
  for(let i=0;i<1;i++){
    squareArrayRef.current.push(new MagicPencil(contextRef,mouse.x,mouse.y,size,contour))
  }
}
drawSquareTwo()
function drawC(){
  for(let i=0;i<1;i++){
    squareArrayRef.current[i].drawContour(contextRef,mouse.x,mouse.y,size,contour)
    
  }
}
const animate=()=>{
  drawC(contextRef)
  console.log(squareArrayRef.current)
}
animate()
}

if(img.tree && isDraw){





const picture=()=>{
  contextRef.current.drawImage(drzewotRef.current,mouse.x,mouse.y,100,100)
}

const animation=()=>{
  
  picture()
}
animation()
}

if(img.chmura && isDraw){





  const picture=()=>{
    contextRef.current.drawImage(chmuraRef.current,mouse.x,mouse.y,100,100)
  }
  
  const animation=()=>{
  
    picture()
  }
  animation()
  }

  if(img.krzak && isDraw){





    const picture=()=>{
      contextRef.current.drawImage(krzakRef.current,mouse.x,mouse.y,100,100)
    }
    
    const animation=()=>{
   
      picture()
    }
    animation()
    }


}
const mouseUp=()=>{
setIsDraw(false)
webArrayRef.current=[]
magicArrayRef.current=[]
squareArrayRef.current=[]
console.log("mouse up")
}
const takeNiceShape=()=>{
  setEffect({...effect,spiderEffect:false,pencil:true,circle:false,square:false,square2:false,image:false}) 
  setLineWidth(5)
  setImg({tree:false,chmura:false,krzak:false})
}
const takeSpiderEffect=()=>{
 setEffect({...effect,spiderEffect:true,pencil:false,circle:false,square:false,square2:false,image:false}) 
 setLineWidth(0.2)
 setImg({tree:false,chmura:false,krzak:false})
 
}
const takeCircle=()=>{
  setEffect({...effect,spiderEffect:false,pencil:false,circle:true,square:false,square2:false,image:false}) 
  setSize(100)
  setImg({tree:false,chmura:false,krzak:false})
}
const takeSquare=()=>{
  setEffect({...effect,spiderEffect:false,pencil:false,circle:false,square:true,square2:false,image:false}) 
  setSize(100)
  setImg({tree:false,chmura:false,krzak:false})
}
const takeSquare2=()=>{
  setSize(100)
  setEffect({...effect,spiderEffect:false,pencil:false,circle:false,square:false,square2:true,image:false}) 
  setImg({tree:false,chmura:false,krzak:false})
}
const cleanAll=()=>{
  contextRef.current.clearRect(0,0,widthRef.current,heightRef.current)
 
}

const takeImage=()=>{
  setEffect({...effect,spiderEffect:false,pencil:false,circle:false,square:false,square2:false,image:!effect.image})
  if(effect.image){
imgTakeRef.current.classList.add("active")
  }
  else{
    imgTakeRef.current.classList.remove("active") 
    setImg({tree:false,chmura:false,krzak:false})
  }
}
const closed=(e)=>{
  dispatch({type:"EXIT"})
e.target.parentNode.remove()
}

console.log(exit)
  return (
    <div className="paint" ref={paintRef}>
      <div className="dashboard" ref={dashboardRef} >
      <div className="palet" ref={paletRef}>
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
    <button className="colorToPaint" style={{backgroundColor:"darkcyan"}} onClick={()=>setContour("darkcyan")}></button>
    <button className="colorToPaint" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}></button>
    <button className="colorToPaint" style={{backgroundColor:"coral"}} onClick={()=>setColor("coral")}></button>
    <button className="colorToPaint" style={{backgroundColor:"darksalmon"}} onClick={()=>setColor("darksalmon")}></button>
    <button className="colorToPaint" style={{backgroundColor:"deeppink"}} onClick={()=>setColor("deeppink")}></button>
    <button className="colorToPaint" style={{backgroundColor:"gold"}} onClick={()=>setColor("gold")}></button>
    <button className="colorToPaint" style={{backgroundColor:"greenyellow"}} onClick={()=>setColor("greenyellow")}></button>
    <button className="colorToPaint" style={{backgroundColor:"indigo"}} onClick={()=>setColor("indigo")}></button>
    <button className="colorToPaint" style={{backgroundColor:"peru"}} onClick={()=>setColor("peru")}></button>
    <div className="lineWidth">
       
       <button disabled={lineWidth===0?true:false}  onClick={()=>setLineWidth((lW)=>lW-1)}><i className="icon-minus"></i></button>
      <span className="lineWidthShow">{lineWidth}</span>
       <button disabled={lineWidth===20?true:false} onClick={()=>setLineWidth((lW)=>lW+1)}><i className="icon-plus"></i></button>
       <input style={{width:"25%",textAlign:"center",fontWeight:"bold"}} type="number" value={size} onChange={(e)=>setSize(e.target.value)}></input>
     </div>
      </div>
      
        <div className="boxTools">
        <button className="btnkit" onClick={()=>takeNiceShape()}><i style={{color:"dakrblue",fontWeight:"bold"}} className="icon-brush"></i></button>
        <button className="btnkit" onClick={()=>setLineCap("round")}><i style={{color:"dakrblue",fontWeight:"bold"}} className="icon-dribbble"></i></button>
        <button className="btnkit" onClick={()=>setLineCap("square")}><i className="icon-stop-1"></i></button>
        <button className="btnkit" style={shadow?{backgroundColor:"black"}:{backgroundColor:"white"}} onClick={()=>setShadow(!shadow)}><em style={{fontWeight:"bold"}}>shadow</em></button>


        </div>
        <div className="effectTools">
        <button onClick={()=>takeSpiderEffect()}><i className="icon-pencil-alt"/></button>
        <button onClick={()=>takeCircle()}><i className="icon-adjust"></i><em style={{fontWeight:"bold",color:"darkgreen"}} >cirle</em></button>
        <button onClick={()=>takeSquare()}><i className="icon-stop"></i><em style={{fontWeight:"bold",color:"darkgreen"}} >square</em></button>
        <button onClick={()=>takeSquare2()}><i style={{fontSize:"1rem"}} className="icon-popup"></i></button>
        <button onClick={()=>takeImage()}><i className="icon-down"></i></button>
        <button onClick={()=>cleanAll()}><i style={{fontSize:"1rem"}} className="icon-trash-1"></i></button>
        </div>
        <div className="imgTake" ref={imgTakeRef}>
          <div className="imgg"  onClick={()=>setImg({tree:false,chmura:false,krzak:true})}><img style={img.krzak===true?{backgroundColor:"darkcyan",width:"55%",border:"1px solid yellow"}:{backgroundColor:"gray",width:"50%"}} src={krzak} alt="krzak"></img></div>
          <div className="imgg" onClick={()=>setImg({tree:false,chmura:true,krzak:false})}><img style={img.chmura===true?{backgroundColor:"darkcyan",width:"55%",border:"1px solid yellow"}:{backgroundColor:"gray",width:"50%"}} src={chmura} alt="chmura"/></div>
          <div className="imgg" onClick={()=>setImg({tree:true,chmura:false,krzak:false})}><img style={img.tree===true?{backgroundColor:"darkcyan",width:"55%",border:"1px solid yellow"}:{backgroundColor:"gray",width:"50%"}} src={drzewo} alt="drzewo"/></div>
        </div>
        <div className="paletTwo">

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
    
      <canvas id="canvasPaint" ref={canvasRef}
      onMouseDown={mouseDown}
      onMouseMove={draw}
      onMouseUp={mouseUp}
      onTouchMove={draw}
      
      ></canvas>
      <div className="zdj">
      <img className="drawPicture" src={drzewo}  alt="drzewo" ref={drzewotRef}></img>
      <img className="drawPicture" src={chmura}  alt="drzewo" ref={chmuraRef}></img>
      <img className="drawPicture" src={krzak}  alt="drzewo" ref={krzakRef}></img>
   

      </div>
      <div className="info" ref={infoCloseRef}>
        <button className="closeBtn" onClick={(e)=>closed(e)}>X</button>
        <div className="slide">
        <img className="imgInfo" src={infoRef.current[index]} alt="info"></img>
        </div>
        <br/>
        <div className="btnInfo">
      
        <button className="btnSlideInfo"  disabled={index===0?true:false} onClick={()=>setIndex((i)=>i-1)}>←</button>
        <button className="btnSlideInfo"  disabled={index===2?true:false} onClick={()=>setIndex((i)=>i+1)}>→</button>
        </div>
        
      </div>
    </div>
  )
}

export default Paint
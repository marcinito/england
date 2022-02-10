import React,{useRef,useEffect,useState,useReducer,useMemo} from 'react'
import MagicPencil from './Obiects/MagicPencil'
import NiceShape from './Obiects/NiceShape'
const initialShapePencil="square"
const reducerShapePencil=(state=initialShapePencil,action)=>{
  switch(action){
    case "S":
      return state="square"
      case "R":
        return state="round"
        default:
          return state
  }

}

function Paint() {
  const [shapePencil,dispatch]=useReducer(reducerShapePencil,initialShapePencil)
const [isDraw,setIsDraw]=useState(false)
const [pencil,setPencil]=useState(false)
const [sizeLine,setSizeLine]=useState(5)
const [sizeObject,setSizeObject]=useState(10)
const [contour,setContour]=useState("black")
const [disabledButton,setDisabledButton]=useState({lineWidthSub:false,lineWidthAdd:false})
const [magicPencil,setMagicPencil]=useState({magic1:false,magic2:false})
const [jeden,setJeden]=useState(false)

const mouse={
  x:null,
  y:null
}

const canvasRef=useRef(null)
const paintRef=useRef(null)
const dashboardRef=useRef(null)
const contextRef=useRef(null)
const mouseRef=useRef(null)
const paletRef=useRef(null)
const arrayRef=useRef(null)
const cAnimationRef=useRef(null)

  useEffect(()=>{
  
      const canvas=canvasRef.current
      const context=canvas.getContext("2d")
      canvas.width=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("width"))
      canvas.height=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("height"))-parseInt(window.getComputedStyle(dashboardRef.current).getPropertyValue("height"))

     contextRef.current=context
  },[])

useEffect(()=>{
  contextRef.current.fillStyle="red"
  contextRef.current.lineCap=shapePencil
  contextRef.current.lineWidth=sizeLine
  contextRef.current.strokeStyle=contour
})

useEffect(()=>{

if(jeden){
  arrayRef.current=[]
  function makeWeb(){
    for(let i=0;i<1000;i++){
      arrayRef.current.push(new NiceShape(contextRef,canvasRef))
    }
  }
  makeWeb()
  const rysuj=()=>{
    for(let i=0;i<100;i++){
      arrayRef.current[i].drawNiceShape(contextRef,canvasRef)
    }
  }

rysuj()
}
},[jeden])


const getMouse=()=>{
  canvasRef.current.addEventListener("mousemove",(e)=>{
   
    mouse.x=e.offsetX
    mouse.y=e.offsetY
 

  })
}


const mouseDown=(e)=>{
setIsDraw(true)



}
const draw=(e)=>{
  let coX=e.nativeEvent.offsetX
let coY=e.nativeEvent.offsetY
//*PENCIL**//
if(pencil && isDraw){
  contextRef.current.beginPath()
  contextRef.current.moveTo(coX,coY)
  contextRef.current.lineTo(coX,coY)
 
  contextRef.current.stroke()

return
}
//*--------*//
if((magicPencil.magic1 || magicPencil.magic2) && isDraw){
arrayRef.current=[]

function makeMagic(){
  for(let i=0;i<1;i++){
    arrayRef.current.push(new MagicPencil(contextRef,sizeObject))
  }
}
makeMagic()
function magicPencilOne(){
  for(let i=0;i<1;i++){
    arrayRef.current[i].magicDraw(contextRef)
  }
}
const magicPencilTwo=()=>{
  for(let i=0;i<1;i++){
 
    arrayRef.current[i].magicDraw(contextRef)
    arrayRef.current[i].effectDrawSub(contextRef,sizeObject,arrayRef)
    arrayRef.current[i].moveEffect(contextRef,sizeObject)
    
    
  }

}

const animation=()=>{
if(magicPencil.magic1){
magicPencilOne(contextRef,sizeObject)

}
if(magicPencil.magic2){
magicPencilTwo()

}

  requestAnimationFrame(animation)
}

animation()

}

if(jeden && isDraw){
  if(jeden){

    function makeWeb(){
      for(let i=0;i<1000;i++){
        arrayRef.current.push(new NiceShape(mouse,canvasRef))
      }
    }
    makeWeb()


  const cos=()=>{
    for(let i=0;i<arrayRef.current;i++){
      arrayRef.current[i].drawGit(contextRef)
      console.log(arrayRef.current)
    }
  }
 
    const animate=()=>{
cos(contextRef)
   
          requestAnimationFrame(animate)
        }
        animate()

  }

  
}



}


const mouseUp=()=>{
setIsDraw(false)

arrayRef.current=[]

}



const changeSizeLineAdd=(e)=>{

setSizeLine((sL)=>sL+1)

if(sizeLine>-1 && sizeLine<20){
  setDisabledButton({...disabledButton,lineWidthSub:false})
}
}
const changeSizeLineSub=(e)=>{
  setSizeLine((sL)=>sL-1)
  if(sizeLine<=1){
    setDisabledButton({...disabledButton,lineWidthSub:true})
  }
  if(sizeLine<20){
    setDisabledButton({...disabledButton,lineWidthAdd:false})
  }
}

//*Magic PENCIL*//
const takeMagicPencil1=()=>{
  setMagicPencil({...magicPencil,magic1:true,magic2:false})
  setPencil(false)
  setSizeLine(1)
}
const takeMagicPencil2=()=>{
  setMagicPencil({...magicPencil,magic1:false,magic2:true})
  setPencil(false)
  setSizeLine(1)
}

const takeNiceShape=()=>{
  setJeden(!jeden)
}


  return (
    <div className="paint" ref={paintRef}>
      <div className="dashboard" ref={dashboardRef}>
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
        <div className="pencil">
        <button onClick={()=>setPencil(!pencil)}>pencil</button>
        <button onClick={()=>dispatch("S")}>[]</button>
        <button onClick={()=>dispatch("R")}>o</button>
        
        </div>
        <div className="sizeStroke">
          <button  disabled={disabledButton.lineWidthSub} onClick={(e)=>changeSizeLineSub(e)}>less</button>
          <div className="wskaznik" style={{height:sizeLine}}>line{sizeLine} width</div>
          <button  disabled={disabledButton.lineWidthAdd} onClick={(e)=>changeSizeLineAdd(e)}>more</button>
        </div>
        <div className="magicPencil">
          <button onClick={()=>takeMagicPencil1()}>magicPencil1</button>
          <button onClick={()=>takeMagicPencil2()}>magicPencil2</button>
          <button onClick={()=>takeNiceShape()}>DrawNiceShape</button>
        </div>
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
import React,{useRef,useEffect,useState} from 'react'

function Paint() {
const [isDraw,setIsDraw]=useState(false)
const [pencil,setPencil]=useState(true)

const canvasRef=useRef(null)
const paintRef=useRef(null)
const dashboardRef=useRef(null)
const contextRef=useRef(null)
const mouseRef=useRef(null)

  useEffect(()=>{
  
      const canvas=canvasRef.current
      const context=canvas.getContext("2d")
      canvas.width=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("width"))
      canvas.height=parseInt(window.getComputedStyle(paintRef.current).getPropertyValue("height"))-parseInt(window.getComputedStyle(dashboardRef.current).getPropertyValue("height"))
      canvas.addEventListener("mousemove",(e)=>{
mouseRef.current={
  x:e.offsetX,
  y:e.offsetX
  
}
console.log(mouseRef.current.x)
      })
     contextRef.current=context
  },[])

useEffect(()=>{
  contextRef.current.fillStyle="red"
  contextRef.current.lineCap="square"
  contextRef.current.lineWidth=20
})


const mouseDown=()=>{
setIsDraw(true)
contextRef.current.beginPath()

}
const draw=()=>{
if(pencil && isDraw){
 
  

  contextRef.current.arc(mouseRef.current.x,mouseRef.current.y,30,0,Math.PI*2)

  contextRef.current.stroke()
  console.log("siema")

}
}

const mouseUp=()=>{
setIsDraw(false)
}

  return (
    <div className="paint" ref={paintRef}>
      <div className="dashboard" ref={dashboardRef}>
        <button>pencil</button>
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
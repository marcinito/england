import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux'
function Vocabulary() {
  let vocSav=["omit"]
  let vocTran=["pomijać,ominąć,przeoczyć"]
   const keys=useSelector(state=>state.key.key)
   const dispatch=useDispatch()
  const kitRef=useRef()
  const vocabularyRef=useRef()
  const sWordsRef=useRef()
  const tWordsRef=useRef()
  const [sWords,setSWords]=useState("")
  const [tWords,setTWords]=useState("")
  useEffect(()=>{
    if(sWords.length>3){
      sWordsRef.current.style.backgroundColor="white"
      
    }
    if(tWords.length>3){
    
      tWordsRef.current.style.backgroundColor="white"
    }
  })
  const addWords=()=>{
   if(sWords.length>3 && tWords.length>3){
     setSWords("")
     setTWords("")
   }

    if(sWords.length>3 && tWords.length>3){
     
   

let sW=document.createElement("div")
let tW=document.createElement("div")
let btn=document.createElement("button")
sW.classList.add("saveWords")
tW.classList.add("translateWords")
btn.classList.add("delete")
sW.dataset.key=keys
tW.dataset.key=keys
btn.dataset.key=keys

sW.textContent=sWords
tW.textContent=tWords
btn.textContent="X"
dispatch({type:"addWords"})
kitRef.current.appendChild(sW)
kitRef.current.appendChild(tW)
kitRef.current.appendChild(btn)

    }
else{

  
  if(sWords.length<3){
    sWordsRef.current.style.backgroundColor="red"

sWordsRef.current.style.fontSize="1rem"


  }
 if(tWords.length<3){
  tWordsRef.current.style.backgroundColor="red"
    tWordsRef.current.style.fontSize="1rem"


  

  }
  if(sWords.length<3 || tWords.length<3){
    let toolTip=document.createElement("div")
    toolTip.textContent="You have to write at least 3 characters"
    toolTip.classList.add("toolTip")
    vocabularyRef.current.appendChild(toolTip)
setTimeout(()=>{
  vocabularyRef.current.removeChild(toolTip)
},2000)
  }
}

  }
  const deleteWords=(e)=>{
    console.log(e.target)
  }
  console.log(keys)
  return <div className="vocabulary" ref={vocabularyRef} >
      
  <div className="addWord"><input ref={sWordsRef} className="input1" value={sWords} type="text" placeholder="write word.. " onChange={(e)=>setSWords(e.target.value)}></input><input ref={tWordsRef} value={tWords} className="input2" type="text" placeholder="what this mean?" onChange={(e)=>setTWords(e.target.value)}></input><button className="btnAdd" onClick={(e)=>addWords(e)}>Add</button></div>
  <div className="kit" ref={kitRef}>
    <div className="saveWords"><p className="voc">{vocSav[keys]}</p></div>
    <div className="translateWords"><p className="voc">{vocTran[keys]}</p></div>
    <button className="delete" onClick={(e)=>deleteWords(e)}>X</button>
  </div>
  </div>;
}

export default Vocabulary;

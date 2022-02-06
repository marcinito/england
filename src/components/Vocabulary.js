import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux'


function Vocabulary() {
  const siemaRef=useRef()
  const keys=useSelector(state=>state.key.key)
const [tablica,setTablica]=useState([])
const [klik,setKlik]=useState(true)
const dispatch=useDispatch()

  
 const words=useSelector(state=>state.words.worrds)
 const siema=useSelector(state=>state.words.worrds)
  const vocabularyRef=useRef()
  const showsRef=useRef()
  const sWordsRef=useRef()
  const tWordsRef=useRef()
  const [sWords,setSWords]=useState("")
  const [tWords,setTWords]=useState("")

  const deleteWords=(e,index)=>{
    

index=index*1

console.log(index)

dispatch({type:"sub",payload:index})
    setKlik(!klik)
  }
  showsRef.current=words.map((el,index)=>{
    return(
      <>
     <li className="saveWord" data-key={el.id} key={el.id} > <span className="aW">{el.word}</span><span className="tW">{el.translate}</span><button className="btnAddWord"  onClick={(e)=>deleteWords(e,e.target.parentElement.dataset.key)}>X</button></li>
      </>
    )
  })
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
    
     dispatch({type:"addWords"})
 
   dispatch({type:"add",payload1:sWords,payload2:tWords,payload3:Math.ceil(Math.random()*100)})


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

  

 
console.log(words)
 
  return <div className="vocabulary" ref={vocabularyRef} >
      
  <div className="addWord"><input ref={sWordsRef} className="input1" value={sWords} type="text" placeholder="write word.. " onChange={(e)=>setSWords(e.target.value)}></input><input ref={tWordsRef} value={tWords} className="input2" type="text" placeholder="what this mean?" onChange={(e)=>setTWords(e.target.value)}></input><button className="btnAdd" onClick={(e)=>addWords(e)}>Add</button></div>
  {showsRef.current}



  </div>;
}

export default Vocabulary;

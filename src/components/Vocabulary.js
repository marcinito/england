import React,{useState,useEffect,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux'


function Vocabulary() {
 
  const keys=useSelector(state=>state.key.key)



const dispatch=useDispatch()

  
 const words=useSelector(state=>state.words.worrds)

  const vocabularyRef=useRef()
  const showsRef=useRef()
  const sWordsRef=useRef()
  const tWordsRef=useRef()
  const [wordToLearn,setWordToLearn]=useState({word:"",translate:"",important:false})


  const deleteWords=(e,index)=>{
    

index=index*1

console.log(index)

dispatch({type:"sub",payload:index})
  
  }
  showsRef.current=words.map((el,index)=>{
    return(
      <>
     <li className="saveWord" data-key={el.id} key={el.id} > <span className={el.important?"importantElementWords":"aW"}>{el.word}</span><span className={el.important?"importantElementTranslate":"tW"}>{el.translate}</span><button className="btnAddWord"  onClick={(e)=>deleteWords(e,e.target.parentElement.dataset.key)}>X</button></li>
      </>
    )
  })
  useEffect(()=>{
   
  vocabularyRef.current.style.height=window.innerHeight+"px"

    if(wordToLearn.word.length>3){
      sWordsRef.current.style.backgroundColor="white"
      
    }
    if(wordToLearn.translate.length>3){
    
      tWordsRef.current.style.backgroundColor="white"
    }
  })
  const addWords=()=>{
   if(wordToLearn.word.length>3 && wordToLearn.translate.length>3){
    //  setWordToLearn({...wordToLearn,word:"",translate:"",important:false})
    

   }

    if(wordToLearn.word.length>3 && wordToLearn.translate.length>3){
    
     dispatch({type:"addWords"})
 
   dispatch({type:"add",payload1:wordToLearn.word,payload2:wordToLearn.translate,payload3:Math.ceil(Math.random()*100),payload4:wordToLearn.important})


    }
else{

  
  if(wordToLearn.word.length<3){
    sWordsRef.current.style.backgroundColor="red"

sWordsRef.current.style.fontSize="1rem"


  }
 if(wordToLearn.translate.length<3){
  tWordsRef.current.style.backgroundColor="red"
    tWordsRef.current.style.fontSize="1rem"


  

  }
  if(wordToLearn.word.length<3 || wordToLearn.translate.length<3){
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
console.log(wordToLearn.important)
 
  return <div className="vocabulary" ref={vocabularyRef} >
      
  <div className="addWord"><input ref={sWordsRef} className="input1" value={wordToLearn.word} type="text" placeholder="write word.. " onChange={(e)=>setWordToLearn({...wordToLearn,word:e.target.value})}>
    </input><input ref={tWordsRef} value={wordToLearn.translate} className="input2" type="text" placeholder="what this mean?" onChange={(e)=>setWordToLearn({...wordToLearn,translate:e.target.value})}></input><label className="labelImportant">*<input  className="importantInput"  type="checkbox" checked={wordToLearn.important} onChange={()=>setWordToLearn({...wordToLearn,important:true})}/></label ><button className="btnAdd" onClick={(e)=>addWords(e)}>Add</button></div>
  <br/>
  {showsRef.current}

<div className="footer"></div>

  </div>;
}

export default Vocabulary;

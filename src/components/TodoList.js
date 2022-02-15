import React,{useState,useRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {add,usun,stack} from '../redux/todo'
function TodoList() {
    const [tasks,setTasks]=useState({what:"",important:false})
    const dispatch=useDispatch()
const dane=useSelector(state=>state.todo)
const inputWhatRef=useRef()

let undone=dane.filter(el=>el.done===false)
let done=dane.filter(el=>el.done===true)
console.log(dane)
const addNewTask=()=>{

if(tasks.what.length>5){
    dispatch(add({what:tasks.what,imp:tasks.important}))
}
else{
inputWhatRef.current.style.backgroundColor="red"
inputWhatRef.current.placeholder="At least 5 character"
setTimeout(()=>{
    inputWhatRef.current.style.backgroundColor="white"
    inputWhatRef.current.placeholder="What task doy you want to do?"
},2000)
}
}

  return (
    <div className="appTodo">
        <div className="addTaks">
            <input className="writeTask"
             placeholder="What task do you want to do?"
              type="text" value={tasks.what}
               onChange={(e)=>setTasks({...tasks,what:e.target.value})}
               ref={inputWhatRef}
               >
                
                </input><input className="checkTask" type="checkbox" checked={tasks.important} onChange={()=>setTasks({...tasks,important:!tasks.important})}></input>
            <button className="btnTaskAdd" onClick={()=>addNewTask()}>add</button>
        </div>
       <h1 style={{textAlign:"center",color:"darkblue",boxShadow:"3px 3px 3px 4px gray",marginTop:"3%"}}>To do....</h1>
        <div className="undone">
            {undone.length===0?<p style={{textAlign:"center",fontWeight:"bold"}}>Think what can you do</p>:null}
        {undone.map(el=>{
                    return(
                        <li className="liTaskToDo"  
                         style={el.important?{backgroundColor:"red"}:null} data-key={el.id}
                        onClick={(e)=>dispatch(stack(e.target.parentNode.dataset.key))}>
                            <em className="em">{el.what}</em>
                            <span className="span">{el.when}
                            </span>
                            <button
                             onClick={(e)=>dispatch(usun({id:e.target.parentNode.dataset.key}))} className="btnDoneTask">X</button>
                            </li>
                    )
                })}
        </div>
        <h1 style={{textAlign:"center",color:"darkblue",boxShadow:"3px 3px 3px 4px gray"}}>Completed</h1>
        <div className="done">
           
           {done.length===0?<p>...</p>:null}
                {done.map(el=>{
                    return(
                        <li className="liDone"
                          data-key={el.id} 
                         >
                               <em className="emDone">{el.what}</em>
                               <span className="spanDone">{el.when}</span>
                               </li>
                    )
                })}
           
        </div>
    </div>
  )
}

export default TodoList
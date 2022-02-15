import { createSlice } from "@reduxjs/toolkit";


const initialState=[
    {what:"Isc po zakupy",when:new Date().toLocaleString(),important:false,done:false,id:0,},
    {what:"kupic mleko",when:new Date().toLocaleString(),important:false,done:true,id:1,}
]
export const todosSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        add:(state,action)=>{
            let news={
                what:action.payload.what,
                when:new Date().toLocaleString(),
                important:action.payload.imp,
                done:false,
                id:Math.floor(Math.random()*345643)

            }
            state.push(news)
        },
        usun:(state,action)=>{
let dwa=Number(action.payload.id)
let index=state.findIndex(el=>el.id===dwa)
state[index].done=true
state[index].when=new Date().toLocaleString()
        },
        stack:(state,action)=>{
        
            let dwa=Number(action.payload)
            let index=state.findIndex(el=>el.id===dwa);
         console.log(index)
           if(state[index].important===false){
               state[index].important=true
               console.log("false")
               return
           }
           if(state[index].important===true){
            state[index].important=false
            console.log("true")
            return
        }
       
        }
    }
})
export const {add,usun,stack}= todosSlice.actions
export default todosSlice.reducer
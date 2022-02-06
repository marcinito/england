const initialV={
    worrds:[{word:"scheme",translate:"program,system", id:Math.ceil(Math.random()*100)}]
}

const wordsReducer=(state=initialV,action)=>{
    switch(action.type){
        case "add":
            return  {...state,worrds:[...state.worrds,{word:action.payload1,translate:action.payload2,id:action.payload3}]}
            case "sub":
            return {...state,worrds:state.worrds.filter((el)=>el.id!==action.payload)}
            default:
                return state
    }

}
export default wordsReducer
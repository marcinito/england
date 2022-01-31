const iValue={
    key:0
}

const keyReducer=(state=iValue,action)=>{
switch(action.type){
    case "addWords":
        return{...state,key:state.key+=1}
        case "deleteWords":
        return{...state,key:state.key-=1}
        default:
            return state
}
}

export default keyReducer

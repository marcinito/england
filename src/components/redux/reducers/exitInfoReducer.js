const ivalue={
    exit:true

}

const exitInfoReducer=(state=ivalue,action)=>{
    switch(action.type){
        case "EXIT":{
            return{...state,exit:false}
            
            
                
        }
        default:
            return state
    }
}

export default exitInfoReducer
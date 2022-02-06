const initialV={
    worrds:[
        {word:"scheme",translate:"program,system", id:Math.ceil(Math.random()*100)},
        {word:"bail",translate:"kaucja,poręczenie(np:za więzienie)", id:Math.ceil(Math.random()*100)},
        {word:"inadvertently",translate:"nie chacy,przez nie uwage, nie umyślnie", id:Math.ceil(Math.random()*100)},
        {word:"coincidence",translate:"zbieg okoliczności", id:Math.ceil(Math.random()*100)},
        {word:"stand out",translate:"wyróżniać się, być lepszym od kogoś-czegos", id:Math.ceil(Math.random()*100)},
        {word:"dimensional",translate:"wymiarowy", id:Math.ceil(Math.random()*100)},
        {word:"multiplication",translate:"mnożenie", id:Math.ceil(Math.random()*100)},
]
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
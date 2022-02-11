export const keyHandle=(what)=>{
    return{
        type:what
    }
}

export const addWordToLearn=(a,b,c,d)=>{
    return{
        type:"add",
        payload1:a,
        payload2:b,
        payload3:c,
        payload4:d,
    }
}

export const subWordToLearn=(yo)=>{
 return {
    type:"sub",
    payload:yo,
 }
 
       


}
export const off=()=>{
    return {
        type:"EXIT"
    }
}
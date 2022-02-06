export const keyHandle=(what)=>{
    return{
        type:what
    }
}

export const addWordToLearn=(a,b,c)=>{
    return{
        type:"add",
        payload1:a,
        payload2:b,
        payload3:c,
    }
}

export const subWordToLearn=(yo)=>{
 return {
    type:"sub",
    payload:yo,
 }
 
       


}
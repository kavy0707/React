export const deposit=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type : "DEPOSITE",
            payload : amount 
        })
    }
}

export const withdraw=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type : "WITHDRAW",
            payload : amount 
        })
    }
}
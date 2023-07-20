let initialState = {
    loading : false,
    error : false,
    status:"",
    success : false,
}

export const data = (state=initialState,action) =>{
    if(action.type === "LOADING") {
        return {...state,loading:action.payload}
    }else if(action.type === "STATUS") {
        return {...state,status:action.payload.generatedText,success:action.payload.success}
    }else if(action.type === "STATUS_ERROR") {
        return {...state,error:true}
    }
    return state;
}
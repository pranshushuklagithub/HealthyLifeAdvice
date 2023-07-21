import axios from "axios"

export const  handlePostRequest = ({feelingRightNow,profession,issues})=>{
    // console.log(feelingRightNow,profession,issues)
    
    const userData = {
        "usecase": "GPT_MEDITATION_CREATOR",
        "userInput": `feeling ${feelingRightNow} right now, they currently are ${profession} and facing ${issues} issues today`
    }

    
    return async(dispatch)=>{
        dispatch({type:"LOADING",payload:true})
        await axios.post("https://gpt-api.richexplorer.com/api/general",userData)
        .then((res)=>{
        console.log(res.data)
        dispatch({type:"STATUS",payload:res.data})
        }).catch((error)=>{
        console.log(error)
        alert("Please Use Cors Unblocker Extension While Submitting The Querries")
        dispatch({type:"STATUS_ERROR"})
        })
    dispatch({type:"LOADING",payload:false})
    }
    
}
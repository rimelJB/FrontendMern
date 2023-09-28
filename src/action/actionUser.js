import axios from"axios"

export const register=({name,email,password}, navigate)=>async(dispatch)=>{
try {
    dispatch({type:"registerProcess"})
    await axios.post("http://localhost:5000/api/user/register",{name,email,password})
    dispatch({type:"registerSuccess"})
    navigate("/login")
} catch (error) {
    dispatch({type:"registerFailed",payload:error.response.data.msg})
}
}

export const login=({email,password})=>async(dispatch)=>{
    try {
        dispatch({type:"loginProcess"})
        const res=await axios.post("http://localhost:5000/api/user/login",{email,password})
        console.log("res.data.token=",res.data.token);
          await localStorage.setItem("token", res.data.token)
        dispatch({type:"loginSuccess"})
    
    } catch (error) {
        dispatch({type:"loginFailed",payload:error.response.data.msg})
    
    }
    }

    export const auth=()=>async(dispatch)=>{
        try {
            dispatch({type:'authProcess'})
            const token=await localStorage.getItem("token")
            console.log("token",token);
            const res=await axios.get('http://localhost:5000/api/user/auth',
            {
                // headers:{'authorization':token}
                headers:{'authorization':token}

            })
            dispatch({type:'authSucceeded'})
        } catch (error) {
            dispatch({type:'authFailed'})
        }
    }
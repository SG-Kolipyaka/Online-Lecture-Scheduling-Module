import React from 'react'
import { login } from '../Redux/AuthReducer/action'
import {useDispatch,useSelector} from "react-redux"
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const dispatch=useDispatch()

    const state1=useSelector((store)=> store.authreducer)

    const handelSubmit=(e)=>{
        e.preventDefault() 
        const userData={
            email,password
        }
        dispatch(login(userData))

    }

if(state1.isAdmin){
return <Navigate to={"/adminpanel"}/>
}else if(state1.isInstructor){
return <Navigate to={"/"}/>
}else{
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <h1>User Login</h1>
            <h3>{state1.isAdmin?"Login Successful":"Please Login "}</h3>
            <h3>{state1.token}</h3>
            <input type="text" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
<button>Login</button>

        </form>
    </div>
  )
}
}

export default Login
import React, { useState } from 'react'

import './auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const Login = () => {
  
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const res=await  axios.post('/api/v1/auth/login',{email,password})
          if( res && res.data.success){
            toast.success(res.data.message)
            localStorage.setItem("authToken", true);
            navigate('/home')
            
          }else{
            toast.error(res.data.message)
          }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }
  return (
    <div>
      <div className='login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
  
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    
    </div>
  <div className="mb-3">
    
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Login</button>
  
</form>
</div>
      
    </div>
  )
}

export default Login

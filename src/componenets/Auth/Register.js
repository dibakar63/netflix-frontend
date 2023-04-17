import React, { useState } from 'react'
import './auth.css'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const res=await  axios.post('https://netflix-bakend.onrender.com/api/v1/auth/register',{name,email,password,phone,address})
          if( res && res.data.success){
            toast.success(res.data.message)
            navigate('/login')
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
      <div className='register'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    
    </div>
  <div className="mb-3">
    
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
  </div>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your phone no' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your adress'  value={address} onChange={(e)=>setAddress(e.target.value)} required/>
    
    </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/login' className='register-link'>Register?Login here</Link>
</form>
</div>
      
    </div>
  )
}

export default Register

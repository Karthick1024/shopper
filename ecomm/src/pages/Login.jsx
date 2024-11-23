/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './css/loginsignup.css'
import { Link } from "react-router-dom";

export const Login = () => {
  
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
 
  const login = async () => {
    console.log("Login function",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
         Accept:'application/json',
         'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
      
    }
    else{
      alert(responseData.errors)
    }
    
  }

  const signup = async () => {
    console.log("Sign Up function",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
         Accept:'application/json',
         'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
      
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div>
      <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state === "Sign Up" ?<input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input type="password" name='password' value={formData.password} onChange={changeHandler}  placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}} type="button">Continue</button>
        {state==="Sign Up"?
        <p className='loginsignup-login'>Already have and account? <span onClick={()=>{setState("Login")}}><Link to>Login here</Link></span></p>:<p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}><Link to>Click here</Link></span></p>}
        
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Login

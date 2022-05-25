import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import './signup.css'

function Signup() {
    const [name1, setName] = useState('')
    const namevalue = (e)=>{setName(e.target.value)}


    const [email, setEmail] = useState('')
    const emailvalue = (e)=>{setEmail(e.target.value)}

    const [password, setPassword] = useState('')
    const passwordvalue = (e)=>{setPassword(e.target.value)}

    const senddata = ()=>{
      Axios.post("http://localhost:3000/data",{
        name:"name1",
        email:"email",
        password:"password"
      }).then(()=>{console.log("data successfully passed...");})
    }


  return (
    <div className='overallsignup'>
    <h1>Enter Your Details</h1>
    <div className='signupcontainer'>
        <label>Name:</label><input type="text" name='name1' onChange={namevalue}/><br/>
        <label>Email:</label><input type="text" name='email' onChange={emailvalue} /><br/>
        <label>Password:</label><input type="password" name='password' onChange={passwordvalue}/><br/>
        
        <button onClick={senddata}>Submit</button>
    </div>
    </div>
  )
}


export default Signup
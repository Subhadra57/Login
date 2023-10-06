import React, { useState } from 'react'

function Loginpage() {
const [username,setUsername]= useState("")
const [password,setPassword]=useState("")
const [valid,setValid]=useState(false);
 const handlesubmit=()=>{
  if(username==="abc"&&password==="123"){
    setValid(true);
  }

}

  return (
     

    
    <div>
      <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" name='Username' onChange={(e)=>setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="text" name='password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={ handlesubmit}>Submit</button>
      </form>
    </div>
  
  )
}

export default Loginpage
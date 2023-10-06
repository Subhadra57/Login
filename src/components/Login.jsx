import React from 'react'

function Login() {
  return (
  <>
  <form action="">
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="Username"/>
    </div>

    <div>
      <label htmlFor="password">Password</label>
      <input type="text" name="password" id="Password"/>
    </div>

    <button type="submit">Submit</button>

  </form>
  </>
  )
}

export default Login
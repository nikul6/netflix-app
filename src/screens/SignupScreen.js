import React from 'react'
import './SignupScreen.css'
import { useNavigate } from 'react-router-dom'

function SignupScreen() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  }

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email' />
        <input placeholder='Password' type='password' />
        <button type="submit" onClick={goToHome}>Sign In</button>
        <h4>
          <span className='signupScreen_gray'>New to Netflix? </span>
          <span className='signupScreen_link'>Sign Up Now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen
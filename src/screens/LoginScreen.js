import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                    alt='' />
                <button className='loginScreen_button' onClick={()=> setSignIn(true)}>
                    SIgn In
                </button>
                <div className='loginScreen_gradinet' />
            </div>
            <div className='loginScreen_body'>
                {signIn ? (
                    <SignupScreen/>
                ) : (
                    <>
                    <h1>Unlimited films, Tv programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter you email to create or restart your membership.</h3>
                    <div className='loginScreen_input'>
                        <form>
                            <input type='email' placeholder='Email Address' />
                            <button className='loginScreen_getStarted' onClick={()=> setSignIn(true)}>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
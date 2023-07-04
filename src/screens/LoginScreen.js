import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                    alt='' />
                <button className='loginScreen_button'>
                    SIgn In
                </button>
                <div className='loginScreen_gradinet' />
            </div>
            <div className='loginScreen_body'>
                <>
                    <h1>Unlimited films, Tv programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter you email to create or restart your membership.</h3>
                    <div className='loginScreen_input'>
                        <form>
                            <input type='email' placeholder='Email Address' />
                            <button className='loginScreen_getStarted'>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
            </div>
        </div>
    )
}

export default LoginScreen
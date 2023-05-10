import React from 'react'
import './header.css'

export default function Header() {
    return (
        <>
            <div className='header'>
                <h1 className='headertitle'>EV-lution</h1>
                <a href=''>Home</a>
                <a href=''>About</a>
                <a href=''>Vehicle Models</a>
                <a href=''>Contact</a>
                <div className='headerbuttoncontainer'>
                    <div className='signin-container'>
                        <button type="button" className="btn btn-success signinbutton">Sign In</button>
                    </div>
                    <div className='register-container'>
                        <button type="button" className="btn btn-success registerbutton">Register</button>
                    </div>
                </div>

            </div>
            <div className='imgcontainer'>
                <img src='https://assets1.lottiefiles.com/private_files/lf30_skwgamub.json'></img>
            </div>
        </>
    )
}

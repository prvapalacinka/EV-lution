import React from 'react'
import './header.css'

export default function Header() {
  return (
    <>
    <div className='header'>
        <h1 className='headertitle'>EV-lution</h1>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Vehicle Models</h2>
        <h2>Contact</h2>
        <div className='signin-container'><button className='signinbutton'>Sign In / Register</button></div>

    </div>
    <div className='imgcontainer'><img src= 'https://assets1.lottiefiles.com/private_files/lf30_skwgamub.json'></img></div>
    </>
  )
}

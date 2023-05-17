import React from 'react'
import './header.css'

export default function Header() {
    return (
        <>
            <div className=' navbar navbar-expand-m header'>

                <a className='navbar-brand headertitle' href='#'><img src='../../src/assets/images/logo.png' alt='Logo' width="30" height="24" className="d-inline-block align-text-top"></img>EV-lution</a>


                <div className='headerlinkscontainer'>
                    <a href=''>Home</a>
                    <a href=''>About</a>
                    <a href=''>Vehicle Models</a>
                    <a href=''>Contact</a>
                </div>
                <div className='headerbuttoncontainer'>
                    <div className='signin-container'>
                        <button type="button" className="btn btn-success signinbutton">Sign In</button>
                    </div>
                    <div className='register-container'>
                        <button type="button" className="btn btn-success registerbutton">Register</button>
                    </div>
                </div>

            </div>
        </>
    )
}

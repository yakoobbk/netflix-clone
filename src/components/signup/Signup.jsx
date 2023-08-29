import React from 'react'
import './signup.css'
import Shade from '../maindiv/pages/Shade'
import SignupPage from './signup-components/SignupPage'
import Footer2 from './signup-components/Footer2'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className='sign-up'>
        <div className="logo2">
        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png" alt="netflix-logo" />
      </div>
      <Shade />

      <SignupPage />
      <Footer2 />
      <button className='sign button-style'>
         <Link to='/' className='link'>
             HOME 
             </Link>
             </button>
    </div>
  )
}

export default Signup

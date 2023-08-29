import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className='nav-bar fullwidth'> 
     <div className="logo">
        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png" alt="netflix-logo" />
      </div>
  
      <div className="button">
        <select className='select'>
          <option value="Englis">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      
        <button className='sign-in button-style'> 
        <Link to='/Signup' className='link'> 
        Sign in
         </Link>
         </button>
      
       </div>
      
    </div>
  )
}

export default Navigation

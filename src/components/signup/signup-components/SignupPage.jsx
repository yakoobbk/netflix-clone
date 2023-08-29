import React ,{ useState }from 'react'
import '../signup.css'
import { Link } from 'react-router-dom'
function SignupPage() {

    const [isVisible,setVisible]= useState(false)

    function handleClick(){
      setVisible(pre => !pre)
    }
    return (
      <div className='sign-in-page'>
  
          <div className="sign-in-wrapper">
              <h2 className="sign-on">Sign In</h2>
  
              <form className="login-form">
                  <input type="text" placeholder='Email or phone number' className='inp' />
                  <input type="password"  placeholder='Password' className='inp'/>
  
                  <button className="sign-button">Sign In</button>
  
  
                  <div className="help">
  
              <h5><input type="checkbox"  id="check" /><label htmlFor="check">Remember me?</label></h5> 
                <a href="https://www.netflix.com/in/LoginHelp" className='anc'>Need help?</a>
  
                  </div>
               
  
              </form>
  
              <div className="signup-now">
                  <h3 className="new">New to Nerflix? <Link to='/' className='sign-up-home'> Sign up now. </Link></h3>
                  <p >This page is protected by Google reCAPTCHA to ensure you're not a bot.  <button className='learn-more' style={{visibility: isVisible? 'hidden' : 'visible'}}   onClick={handleClick}>Learn more.</button></p>
  
                 <div className="learn-para" style={{visibility: isVisible? 'visible' : 'hidden'}} onClick={handleClick} >
                  <p>The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy"> Privacy Policy </a> and <a href="https://policies.google.com/terms">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>
                  </div>
              </div>
          </div>
        
      </div>
    )
  
}

export default SignupPage

import React ,{useState}from 'react'
// import validator from 'validator'
import './form.css'
function Form() {
      const [msg,setMsg]= useState('')

function validateEmail(e){
  let email= e.target.value;
   
  email ?  setMsg(email): setMsg('not a valid email');
}
return (
  <div className='form-page'>
    <p className='desc'> Ready to watch? Enter your email to create or restart your membership</p>
     <form className='form'>
      <input type="email"  placeholder='Email address' className='email'  onChange={(e)=> validateEmail(e)} />
      <button className='get-start button-style'>Get Started</button>
   
    </form>
    <p className='wrong'>{msg}</p> 
  </div>
)
}

export default Form

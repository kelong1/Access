import React from 'react'
import{Link} from "react-router-dom"

export const Register = () => {
  return (
    <div className='reg'>
        <form  className='form-control register'>
            <h2>Register Form</h2>
            <input type="text" name="username" className='form-control'/>
            <input type="Email" name='email' className='form-control' />
            <input type="password" name='password'className='form-control'/>
            <input type="confirm_password" name='confirm_password'className='form-control' />
            <button  className='btn btn-primary'>Register</button><br></br>
            <Link to="/login">Already have a account</Link>
        </form>
    </div>
  )
}

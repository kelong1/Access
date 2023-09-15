import React from 'react'
import{Link} from "react-router-dom";

export const Login = () => {
  return (
    <div className='log'>
        <form className='form-control login'>
            <h2>Login Form</h2>
            <input type="text" name="username"className='form-control'/>
            <input type="password" name='password'className='form-control' />
            <button className='btn btn-primary'>Login</button><br></br>
            <Link to="/Register" > Create an account</Link>
        </form>
    </div>
  )
}

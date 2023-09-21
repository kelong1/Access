import React, { useState } from 'react'
import{Link,useNavigate} from "react-router-dom"
import{useSelector,useDispatch} from "react-redux";
import{logout,reset} from "../features/auth/authSlice";






export const Header=()=>{
    const [isActive,setActive]=useState("false")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const{user}=useSelector((state)=>state.auth)
    const onLogout=()=>{
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

    const toggle=()=>{
        setActive(!isActive)
    }
   
  return (
    <div className='header'>
        <div className='logo'>
            <div className='logoname'>Navbar</div>
           
          
        </div>
      
        <div className={isActive?'nav':"links"}>
            <ul>
            <li>
                    <Link to="/" className='li'>Home</Link>
                </li>
               
             
                    {user?( 
                    <li>
                    <button className='btn btn-dark' onClick={onLogout}>Logout</button>
                     </li>):(<>
                     <li>
                     <Link to="/Login"className='li'>Login</Link>
                     </li>
                     <li>
                     <Link to="/Register"className='li'>Register</Link>
                     </li></>)}
            
                
               
                
              
            </ul>
        </div>
    </div>
  )
}


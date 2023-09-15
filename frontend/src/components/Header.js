import React from 'react'
import{Link} from "react-router-dom"

export const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <h2>Navbar</h2>
        </div>
        <div className='nav'>
            <ul>
                <li><Link to="/" className='li'>Home</Link></li>
                <li><Link to="/Login"className='li'>Login</Link></li>
                <li><Link to="/Register"className='li'>Register</Link></li>
            </ul>
        </div>
    </div>
  )
}

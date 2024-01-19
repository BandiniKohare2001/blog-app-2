import React from 'react'
import "./Footer.css"

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer-container'>
    <Link to='/'className='logo' ><span className='logo-name'><span className='e'>Blog App</span></span></Link>
      <div className='container'>
        <div>
       
        </div>
        <div>
          <h3 className='f-link'>Quick Links👇</h3>
          <p> <Link to="/" className='text-decoration'>Home</Link></p>
          <p><Link to="/myblogs" className='text-decoration'>My Blogs</Link></p>
        

        </div>
    
        <div>
          <h3 className='f-link'>Starts Here😊</h3>
          <p><Link to="/login" className='text-decoration'><i class="bi bi-box-arrow-in-right"></i> Login</Link> </p>
          <p> <Link to="/signup" className='text-decoration'><i class="bi bi-unlock"></i> SignUp</Link></p>
         
         
            
        
          </div>
        </div>

    <div className='copyright'>Copyright © BGK💗2024</div>
    </footer>
  )
}

export default Footer;
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  const [user, setUser] = useState({});


 
  useEffect(()=>{
    const userStorage = JSON.parse(localStorage.getItem('bloguser') || '{}');
    setUser(userStorage);
},[])

  return (
    <div className='nav-container'>
      <Link to='/'className='logo' ><span className='logo-name'>Blog App</span></Link>
    
      <div className='nav-links'>

        <Link to="/" className='nav-btn'>Home</Link>
     
        <Link to="/myblogs" className='nav-btn'>My Blogs</Link>
        

        {user?.name ? null : (<>
         
                <Link className="nav-btn" to="/signup">SignUp</Link>
                <Link className="nav-btn" to="/login">Login</Link>
            </>)}



      </div>

      <div className='user'>
       😊{user.name} 

        {
          user?.name ? (<button className='btn-logout'
          onClick={()=>{
            localStorage.removeItem("bloguser");
            window.location.href = "/login"
          }}
          >Logout</button>) : null
        }
      </div>

    </div>
  )
}

export default Navbar;
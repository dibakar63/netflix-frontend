import React from 'react'
import '../home.scss'
import img from '../../logo.jpg'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

import {FiSearch} from 'react-icons/fi'


const Header = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className='header'>
      <img src={img} className='logo' alt='logo'/>
      <div>
      {/* <Link to='/tvshows' className='link'>Tv Shows</Link> */}
        
        <Link to='/movies' className='link'>Movies</Link>
        <Link to='/recent' className='link'>Recently Added</Link>
        {/* <Link to='/mylist' className='link'>My List</Link> */}
        <FiSearch className='search'/>
    
      {loggedIn ? (
        <>
          <Link to='/login' onClick={handleLogout} className='link'>Logout</Link>
        </>
      ) :
      (
        <>
          <Link to='register' className='link'>Register</Link>
          <Link to='/login' className='link'>Login</Link>
        </>
      )}
        
      
      </div>
      
    </nav>
  )
}

export default Header

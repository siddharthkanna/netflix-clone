import React, {useState, useEffect}from 'react';
import './css/Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    const transistionNavBar=()=>{
        if (window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false)
        }
    }
    useEffect(() => {
      window.addEventListener("scroll", transistionNavBar);
    
      return () => {
        window.removeEventListener('scroll', transistionNavBar);
      }
    }, [])
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents '>
            <img 
             onClick={() => navigate('/')}
            className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt='Netflix'
            />
            <img 
            onClick={() => navigate('/profile')}
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Netflix'
            />
        </div>
    </div>
  )
}

export default Nav;
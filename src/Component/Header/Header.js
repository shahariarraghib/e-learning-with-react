import React from 'react';
import './Header.css'
import logo1 from '../../image/logo1.png'
import logo2 from '../../image/logo2.png'
const Header = () => {
    return (
        <div className='header-container'>
        <div className='logo-part'>
            <div className='logo-img'>
            <img  src={logo1} alt="" />
            </div>
            <div className='logo-name' >
                 <img src={logo2} alt="" />
            </div>
           </div>

       <div className='for-title'>
       <h1>Build Skills With Online Courses</h1>
       </div>
</div>
    );
};

export default Header;
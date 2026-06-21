import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className=' flex justify-center flex-col items-center gap-3 m-4'>
            <img className='w-87.5' src={logo} alt="logo" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;
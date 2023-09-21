import React, { useState } from 'react';
import logo from '../assets/images/logoal.svg';
import Input from '../components/Input';

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="logo image" className='image-fluid logo-image' />
      <h1 className='display-5 text-light p-2'>Stop looking for an item - find it</h1>
      <Input/>
    </div>
  );
}

export default Header;

import React from 'react';
import Logo from '../Logo.png'
import SearchBar from './SearchBar.jsx';


function Nav({onSearch}) {
  return (
    <div className='navbar'>

    <img src={Logo} alt='img not found'/>

    <SearchBar onSearch={onSearch}  type="search" placeholder="Search" aria-label="Search"/>

  
  </div>
  );
};

export default Nav;

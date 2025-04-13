import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='text-white absolute top-8 right-14 flex space-x-6 text-2xl font-mono '>
        <Link to = "/">home</Link>
        <Link to ="/projects">projects </Link>
        <Link to ="/blogs">blogs </Link>
        <Link to ="contact">contact </Link>

      </div>
    
  )
}

export default Navbar;
 
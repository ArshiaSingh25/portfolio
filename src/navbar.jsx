import React from 'react'
import Projects from './projects';
import Blogs from './blogs';
import Contact from './contact';

const Navbar = () => {
  return (
    <div className='text-white absolute top-8 right-14 flex space-x-6 text-2xl font-mono '>
     <Projects/>
     <Blogs/>
     <Contact/>
    </div>
  )
}

export default Navbar;

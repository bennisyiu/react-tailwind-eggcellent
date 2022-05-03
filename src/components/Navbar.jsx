import React from 'react'
import { Link } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";

const Navbar = ({toggle}) => {
  return (
    <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
      <Link to='/' className='pl-8'>
        EGG
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <HiMenu />
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to='/'>Home</Link>
        <Link className="p-4" to='/menu'>Menu</Link>
        <Link className="p-4" to='/about'>About</Link>
        <Link className="p-4" to='/contact'>Contact</Link>
      </div>


    </nav>
  )
}

export default Navbar

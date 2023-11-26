import React, { useState } from 'react'
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from '/logo.jpeg'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    {title: "Baby and Kids", path: "/" },
    {title: "Woman", path: "/" },
    {title: "Suplemen", path: "/" },
    {title: "Baby Toys and Entertainment Kids", path: "/" },
    
  ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 '>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
        <FaSearch className='text-black w-5 h05 cursor-pointer hidden md:block:' />
        
        {/* logo */}
        <a href="/"><img src={logo} alt="" /></a>

        {/* account and shopingbutton */}
        <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
            <a href='/'className='flex items-center gap-2'> <FaUser/> Account</a>
            <a href='/' className='flex items-center gap-2'> <FaShoppingBag/> Shopping</a>
       
        </div>

      {/* navbar for sm device */}
      <div>
        <button onClick={toggleMenu}>
          {
            isMenuOpen ? <FaTimes className='w-5 h-5 text-black'/> : <FaBars className='w-5 h-5 text-black '/>
          }
        </button>
      </div>
        
      </nav>
        <hr/>

        {/* category item */}

        <div className='pt-3'>
        <ul className='lg:flex items-center justify-between text-black hidden '>
          {
          navItems.map(({title, path}) => (
            <li key={title} className='hover:text-orange-700'>
                <Link to="/">{title}</Link>
            </li>
          ))
          }
        </ul>
        </div>
    </header>
  )
}

export default Navbar;
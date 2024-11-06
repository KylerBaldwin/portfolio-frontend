import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-14 w-full mx-auto px-8 bg-white shadow-md border-b-2 border-gray-200'>
            <h1 className=' text-2xl font-serif'>Kyler Baldwin</h1>
            <ul className='hidden md:flex'>
                <li className='m-4 font-serif'><Link to="/">Home</Link></li>
                <li className='m-4 font-serif'><Link to="/about">About</Link></li>
                <li className='m-4 font-serif'><Link to="/projects">Projects</Link></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-600 bg-white ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl m-4'>Kyler Baldwin</h1>
                <ul className='p-4'>
                    <li className='py-4 border-b border-gray-600'>Home</li>
                    <li className='py-4 border-b border-gray-600'>Blog</li>
                    <li className='py-4'>Projects</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
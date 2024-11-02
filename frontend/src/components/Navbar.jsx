import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-16 w-full mx-auto px-4 bg-emerald-800 text-white'>
                <h1 className='w-full text-2xl font-bold'>KYLER BALDWIN</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Blog</li>
                    <li className='p-4'>Projects</li>
                </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-600 bg-emerald-800 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl m-4'>Kyler Baldwin</h1>
                <ul className='p-4'>
                    <li className='py-4 border-b border-white-600'>Home</li>
                    <li className='py-4 border-b border-white-600'>Blog</li>
                    <li className='py-4'>Projects</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
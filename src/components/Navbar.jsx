import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
const Navbar = () => {
    return (
        <div className='flex items-baseline justify-end md:justify-center pt-5 font-sans px-6 lg:px-8'>
            <ul className='hidden md:flex gap-6 rounded-full bg-zinc-800 py-2 px-6 outline-slate-700 outline-2 hover:outline '>
                <li className='hover:text-teal-400'><Link to="/">Home</Link></li>
                <li className='hover:text-teal-400'><Link to="/about">About</Link></li>
                <li className='hover:text-teal-400'><Link to="/projects">Projects</Link></li>
            </ul>
            <div className='md:hidden'>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar
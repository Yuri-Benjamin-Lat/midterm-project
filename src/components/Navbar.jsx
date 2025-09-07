import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='glass-navbar m-2 '>
            <ul className='flex flex-wrap gap-3 sm:gap-6 md:gap-10 p-3 px-4 sm:px-8 md:px-16 lg:px-25 relative items-center'>
                <li style={{ fontFamily: 'KGSimplytheBest, sans-serif' }} className='text-lg sm:text-xl md:text-2xl'>
                    StudySpot 
                    <span style={{ fontFamily: 'SFDistantGalaxy, sans-serif' }} className='text-xl sm:text-2xl md:text-3xl'>PH</span>
                </li>
                <li className='tracking-wide navbar-btn text-sm sm:text-base hidden sm:block'>
                    <Link to="/">Home</Link>
                </li>
                <li className='tracking-wide navbar-btn text-sm sm:text-base hidden md:block'>
                    <Link to="/Dashboard">My Dashboard</Link>
                </li>
                <li className='ml-auto login-btn text-base sm:text-lg md:text-xl tracking-wider font-bold' style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                    Log In
                </li>
            </ul>
        </div>
    );
} 
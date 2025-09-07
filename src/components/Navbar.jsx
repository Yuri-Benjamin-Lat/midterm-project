import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { isAuthenticated, login, logout } = useAuth();

    const handleAuthClick = () => {
        if (isAuthenticated) {
            logout();
        } else {
            login();
        }
    };

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
                {isAuthenticated && (
                    <li className='tracking-wide navbar-btn text-sm sm:text-base hidden md:block'>
                        <Link to="/Dashboard">My Dashboard</Link>
                    </li>
                )}
                {/* This empty li with ml-auto will push the following items to the right */}
                <li className='ml-auto'></li>
                {isAuthenticated && (
                    <li className='mr-4 text-sm sm:text-base md:text-lg tracking-wide' style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                        Welcome, Yuri Lat
                    </li>
                )}
                <li>
                    <button
                        onClick={handleAuthClick}
                        className='login-btn text-base sm:text-lg md:text-xl tracking-wider font-bold'
                        style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}
                    >
                        {isAuthenticated ? 'Log Out' : 'Log In'}
                    </button>
                </li>
            </ul>
        </div>
    );
}
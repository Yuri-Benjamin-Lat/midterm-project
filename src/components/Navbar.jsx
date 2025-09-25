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
        <div className='fixed w-full top-0 left-0 right-0 z-50 pr-2 sm:pr-4'> {/* Added fixed positioning */}
            <div className='glass-navbar m-1 sm:m-2 '>
                <ul className='flex flex-wrap gap-2 sm:gap-3 md:gap-6 lg:gap-8 xl:gap-10 p-2 sm:p-3 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-25 relative items-center'>
                    <li
                        style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}
                        className="flex items-center gap-1 sm:gap-2 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                    >
                        <img
                            src="/assets/book.png"
                            alt="Book"
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                        />
                        StudySpot
                        <span
                            style={{ fontFamily: 'SFDistantGalaxy, sans-serif' }}
                            className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                        >
                            PH
                        </span>
                    </li>
                    <li className='tracking-wide navbar-btn text-xs sm:text-sm md:text-base lg:text-lg hidden sm:block'>
                        <Link to="/">Home</Link>
                    </li>
                    {isAuthenticated && (
                        <li className='tracking-wide navbar-btn text-xs sm:text-sm md:text-base lg:text-lg hidden md:block'>
                            <Link to="/Dashboard">My Dashboard</Link>
                        </li>
                    )}
                    {/* This empty li with ml-auto will push the following items to the right */}
                    <li className='ml-auto'></li>
                    {isAuthenticated && (
                        <li className='mr-2 sm:mr-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wide' style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                            Welcome, Yuri Lat
                        </li>
                    )}
                    <li>
                        <button
                            onClick={handleAuthClick}
                            className='login-btn text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider font-bold'
                            style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}
                        >
                            {isAuthenticated ? 'Log Out' : 'Log In'}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
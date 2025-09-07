// DashboardCont means Dashboard Contents
import { Link } from "react-router-dom";

export default function Spaces() {
    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-50'>
            <div className='glass-searchbar text-center p-4 sm:p-5 pt-8 sm:pt-12 md:pt-15 pb-8 sm:pb-12 md:pb-15 mt-5 mb-5'>
                <p className='text-2xl sm:text-3xl md:text-4xl leading-tight' style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                    Welcome to your Dashboard, "Username Placeholder"
                </p>
            </div>
        </div>
    );
}   

/* style={{ fontFamily: 'SFDistantGalaxy, sans-serif' }} style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}*/
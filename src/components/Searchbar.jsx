import { Link } from "react-router-dom";

export default function Searchbar({ onSearch }) {

    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-50'>
            <div className='glass-searchbar text-center p-4 sm:p-5 pt-8 sm:pt-12 md:pt-15 pb-8 sm:pb-12 md:pb-15 mt-5 mb-5'>
                <p className='text-2xl sm:text-3xl md:text-4xl leading-tight' style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>
                    ✎ Where Focus Meets Comfort ★
                </p>
                <p className='mt-4 sm:mt-6 md:mt-7 mb-4 sm:mb-6 md:mb-7 text-sm sm:text-base px-2'>
                    A space designed to help you concentrate, stay relaxed, and make the most of every study session
                </p>
                <div className="default-margin mt-3 sm:mt-4 md:mt-5 mb-3 sm:mb-4 md:mb-5">
                    <input 
                        type="text" 
                        placeholder="Search your study spot  •°. *࿐" 
                        className='searchbar w-full max-w-lg mx-auto'
                        onChange={(e) => onSearch(e.target.value)} 
                    />
                </div>
            </div>
        </div>
    );
}

/*
    The original searchbar
        <div className='ml-50 mr-50'>
            <div className='glass-searchbar text-center p-5 pt-15 pb-15 mt-5 mb-5'>
                <p className='text-4xl' style={{ fontFamily: 'KGSimplytheBest, sans-serif' }}>✎ Where Focus Meets Comfort ★</p>
                <p className='mt-7 mb-7'>A space designed to help you concentrate, stay relaxed, and make the most of every study session</p>
                <div className="default-margin mt-5 mb-5">
                    <input type="text" placeholder="Search your study spot  •°. *࿐" className='searchbar' />
                </div>
            </div>
        </div>
*/

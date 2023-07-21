import React from "react";

function SearchBar() {
    return (
        <>
            <div className='flex justify-between p-2 rounded-3xl custem-searchBar-width m-auto bg-white mt-6 '>
                <input
                    type='text'
                    className='bg-transparnt w-80 pl-4'
                    placeholder="Think of a domain name"
                />
                <button className='p-3 rounded-2xl bg-teal-300'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 '>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                        />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default SearchBar;

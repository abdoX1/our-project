import React from "react";

function SearchBar() {
    return (
        <>
            <div className='bg-blue-400 flex justify-center py-2 rounded-3xl w-96 '>
                <input
                    type='text'
                    className='bg-red-500 w-60 '
                    placeholder="Think of a domain name"
                />
                <button className='bg-green-600 p-3 rounded-xl'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'>
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

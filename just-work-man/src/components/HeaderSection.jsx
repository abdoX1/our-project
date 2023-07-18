import React from 'react'
import SearchBar from './SearchBar'


function HeaderSection() {
    return (
        <div className='relative'>
            <div className='custemed-width text-center header-sec-bg m-auto py-3 flex flex-col'>
                <h1 className='text-4xl mx-12 p-6 font-sans font-extrabold text-white'>Claim your space in the digital world</h1>
                <SearchBar />
            </div>
        </div>
    )
}

export default HeaderSection
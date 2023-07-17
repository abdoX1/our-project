import React from 'react'
import SearchBar from './SearchBar'

function HeaderSection() {
    return (
        <div className='max-w-1/3 text-center bg-zinc-800 mx-56 flex flex-col'>
            <h1 className='text-2xl mx-12 p-6 font-sans font-extrabold'>Claim your space in the digital world</h1>
            <SearchBar />
        </div>
    )
}

export default HeaderSection
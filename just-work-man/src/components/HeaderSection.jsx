import React from 'react'
import SearchBar from './SearchBar'
import { ReactComponent as HomeLeftLogo } from '../pics/home-left.svg';
import { ReactComponent as HomeRightLogo } from '../pics/home-right.svg';
import { ReactComponent as HomeHeaderFloor } from '../pics/home-header-floor.svg';

function HeaderSection() {
    return (
        <div className='relative'>
            <div className='custemed-width text-center header-sec-bg m-auto py-3 hard-bottom-padding flex flex-col pt-28'>
                <h1 className='text-6xl mx-12 p-6 font-sans font-extrabold text-white'>Claim your space in the digital world</h1>
                <SearchBar />
                
            </div>
            <div className='absolute top-0'>
                <HomeLeftLogo />
            </div>
            <div className='absolute right-0 top-0'>
                <HomeRightLogo />
            </div>
            <div className='absolute top-full left-1/2  header-sec-bg custem-scale'>
                    <HomeHeaderFloor />
            </div>
            <div className='-bottom-24 absolute hide-width left-1/2 -translate-x-1/2 bg-white hide-height'>

            </div>
        </div>
    )
}

export default HeaderSection
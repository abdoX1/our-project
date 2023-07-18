import React from 'react'
import { ReactComponent as RightArrow } from '../pics/arrow-right2.svg';
import { NavLink } from 'react-router-dom';

function Section3Card({ card }) {
    return (
        <div className='card text-center p-5'>
            <div className='m-auto'>
                {card.svg}
            </div>
            <h2 className='card--title font-bold my-3 '> {card.title} </h2>
            <span> {card.description} </span>
            <div className='flex justify-center items-center gap-2 '>
                <NavLink className={'block mt-2 font-bold tracking-wider text-base hover:underline hover:text-sky-900 hover:underline-offset-4'}> {card.link} </NavLink>
                <RightArrow className={'right-arrow mt-2 cursor-pointer hover:underline hover:underline-offset-4'} />
            </div>
        </div>
    )
}

export default Section3Card
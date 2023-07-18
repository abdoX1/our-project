import React, { useState } from 'react'
import { ReactComponent as Cards } from '../pics/3cards.svg';
import { ReactComponent as Flame } from '../pics/flame.svg';
import { ReactComponent as Suit } from '../pics/suit.svg';
import Section3Card from './Section3Card';

function Section3Cards() {
    const [data, setData] = useState([
        {
            svg: <Flame />,
            title: 'Popular domain names',
            description: 'Take a look at the most popular domain names. And buy them immediately. Or make a good offer.',
            link: 'See what’s hot',
        },
        {
            svg: <Cards />,
            title: '3-letter domain names',
            description: '3-letter domain names are short, sweet, and super easy to remember. Check ‘em all out here.',
            link: 'Check 3-letter domains',
        },
        {
            svg: <Suit />,
            title: 'Premium domain names',
            description: 'Premium domain names are usually short, easy to brand, and use a popular extension like .com.',
            link: 'Browse premium domains',
        },
    ])
    return (
        <div className='flex items-center gap-28 card--container'>
            {
                data.map((d, i) => <Section3Card key={i} card={d} />)
            }
        </div>
    )
}

export default Section3Cards
import React from 'react'
import { ReactComponent as Water } from '../pics/water-drop.svg'
import { ReactComponent as Arrows } from '../pics/opposite-arrows.svg'
import { ReactComponent as RightArrow } from '../pics/arrow-right2.svg';
import { NavLink } from 'react-router-dom'

function Section1() {
    return (
        <div className='section1--container flex justify-center items-center gap-28'>
            <div className="section1--left w-2/6">
                <h1 className='text-5xl font-bold mb-6'>Buy and sell domains</h1>
                <span className='text-xl block mb-6'>
                    Dan.com is a marketplace for
                    domain names. We make sure buying, selling and transferring domains goes smoothly and hassle-free.
                </span>
                <div className="section1--left--list">

                    <div className="section1--left--list--row flex items-start gap-6 mb-5">
                        <Water />
                        <div>
                            <h3 className='font-bold text-2xl mb-2'>Transparency first</h3>
                            <span>No hidden costs. No complicated math. You’ll never be in the dark, whether you’re buying or selling.</span>
                        </div>
                    </div>

                    <div className="section1--left--list--row flex items-start gap-6 mb-5">
                        <Arrows />
                        <div>
                            <h3 className='font-bold text-2xl mb-2'>Effortless trading</h3>
                            <span>
                                By using state of the art technology, domain name trading is super
                                simple thanks to our easy-to-use platform.
                            </span>
                        </div>
                    </div>

                    <div className="section1--left--list--row flex items-start gap-6 mb-5">
                        <img src={require('../pics/bouclier.png')} style={{ width: '35px', height: '35px' }} alt="" />
                        <div>
                            <h3 className='font-bold text-2xl mb-2'>Secure transactions</h3>
                            <span>
                                Security is important to us. Our fraud prevention team monitors all transactions & keeps you safe.
                            </span>
                        </div>
                    </div>


                </div>

                <div className="button flex gap-3 items-center rounded-lg py-6 px-8 w-fit cursor-pointer">
                    <NavLink className={'font-bold'}>Get to know us </NavLink>
                    <RightArrow className={'right-arrow'} />

                </div>
            </div>

            <div className="section1--right">
                <img src={require('../pics/section1_img.png')} alt="" />
            </div>

        </div>
    )
}

export default Section1
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../pics/logo.svg';
import { ReactComponent as DownArrow } from '../pics/down-arrow.svg';


function Navbar() {
    const [showDropdown1, setShowDropdown1] = useState(false)
    const [showDropdown2, setShowDropdown2] = useState(false)
    const show1 = () => {
        if (showDropdown1) {
            document.querySelector('.down-arrow').classList.add('rotate')
        } else {
            document.querySelector('.down-arrow').classList.remove('rotate')

        }
        setShowDropdown1(!showDropdown1)
        setShowDropdown2(false)
        // showDropdown1 ? document.querySelector('.down-arrow').classList.add('rotate') : document.querySelector('.down-arrow').classList.remove('rotate')
    }
    const show2 = () => {
        setShowDropdown2(!showDropdown2)
        setShowDropdown1(false)
        // showDropdown2 ? document.querySelector('.down-arrow').classList.add('rotate') : document.querySelector('.down-arrow').classList.remove('rotate')
        if (showDropdown2) {
            document.querySelector('.drop .down-arrow').classList.add('rotate')
        } else {
            document.querySelector('.drop .down-arrow').classList.remove('rotate')

        }
    }
    return (
        <>
            <div className="mynav flex justify-between py-9 px-12 text-white text-base font-medium items-center">
                <div>
                    <Logo />
                </div>
                <div className="flex items-center gap-x-11">
                    <NavLink to={"Buy-a-domain"}>Buy a domain</NavLink>
                    <NavLink to={"sell-your-domain"}>sell your domain</NavLink>
                    <div className="flex gap-x-1 hover:cursor-pointer relative ">
                        <NavLink onClick={show1} to={"learn"} >learn</NavLink>
                        <DownArrow onClick={show1} />
                        {showDropdown1 ? <>
                            <div className="arrow-up"></div>

                            <div
                                className="
                            my-dropdown absolute text-black w-96 bg-white grid grid-cols-2 p-8 bg-white-500 shadow-lg shadow-black-500/50 rounded gap-9 -left-4 top-12
                            
                            ">
                                <div>
                                    <NavLink className="block font-semibold text-base hover:underline hover:underline-offset-2">News</NavLink>
                                    <span className="text-slate-950 font-light text-sm">
                                        Learn more about the company, PR and product updates here.
                                    </span>
                                </div>
                                <div>
                                    <NavLink className="block font-semibold text-base hover:underline hover:underline-offset-2">Trust & Security</NavLink>
                                    <span className="text-slate-950 font-light text-sm">
                                        Connects you to the latest information on security
                                    </span>
                                </div>
                                <div>
                                    <NavLink className="block font-semibold text-base hover:underline hover:underline-offset-2">Help center</NavLink>
                                    <span className="text-slate-950 font-light text-sm">
                                        Learn how to configure, and use Dan.com products
                                    </span>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-base hover:underline hover:underline-offset-2">Transaction explorer</h2>
                                    <span className="text-slate-950 font-light text-sm">
                                        Find out if a domain is under an active rent or lease contract or how many owners a domain has
                                    </span>
                                </div>
                            </div>
                        </> : null}
                    </div>
                    <div className="flex gap-x-1  relative">
                        <NavLink onClick={show2} to={"company"}>company</NavLink>
                        <div className="drop">
                            <DownArrow onClick={show2} />
                        </div>
                        {showDropdown2 ? <>
                            <div className="arrow-up"></div>

                            <div
                                className="
                            my-dropdown absolute text-black w-96 bg-white grid grid-cols-2 p-8 bg-white-500 shadow-lg shadow-black-500/50 rounded gap-9 -left-4 top-12
                            
                            ">
                                <div>
                                    <NavLink className="block font-semibold text-base hover:underline hover:underline-offset-2">Our story</NavLink>
                                    <span className="text-slate-950 font-light text-sm">
                                        We’re on a mission to make domain name trading available to everyone
                                    </span>
                                </div>
                                <div>
                                    <NavLink className="block font-semibold text-base hover:underline hover:underline-offset-2">API Partnership Program</NavLink>
                                    <span className="text-slate-950 font-light text-sm">
                                        Use our APIs to integrate with your services
                                    </span>
                                </div>
                                <div>
                                    <NavLink className="block font-semibold text-base hover:underline hover:underline-offset-2">Careers - We’re hiring!</NavLink>
                                    <span className="text-slate-950 font-light text-sm">
                                        Learn how to configure, and use Dan.com products
                                    </span>
                                </div>
                                <div>
                                    <NavLink className="block font-semibold text-base hover:underline hover:underline-offset-2">Contact us</NavLink>
                                    <span className="text-slate-950 font-light text-sm">
                                        Didn’t find the information you’re looking for? Reach out to our team! Our team is friendly, knowledgeable & ready to assist!
                                    </span>
                                </div>
                            </div>
                        </> : null}

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <NavLink
                        to={"login"}
                        className={
                            "border-2 hover:bg-white hover:text-black border-white p-2 px-5 rounded-md"
                        }
                    >
                        login
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;

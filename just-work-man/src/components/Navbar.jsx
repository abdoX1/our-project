import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../pics/logo.svg';
import { ReactComponent as DownArrow } from '../pics/down-arrow.svg';


function Navbar() {
    return (
        <>
            <div className="mynav flex justify-between py-9 px-12 text-white text-base font-medium items-center">
                <div>
                    <Logo />
                </div>
                <div className="flex items-center gap-x-11">
                    <NavLink to={"Buy-a-domain"}>Buy a domain</NavLink>
                    <NavLink to={"sell-your-domain"}>sell your domain</NavLink>
                    <div className="flex gap-x-1 hover:cursor-pointer ">
                        <NavLink to={"learn"}>learn</NavLink>
                        <DownArrow />
                    </div>
                    <div className="flex gap-x-1 hover:cursor-pointer ">
                        <NavLink to={"company"}>company</NavLink>
                        <DownArrow />

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

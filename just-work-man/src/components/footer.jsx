import React, { useState } from "react";
import { ReactComponent as Twitter } from "../pics/twitter.svg";
import { ReactComponent as LinkedIn } from "../pics/linkedin.svg";
import { ReactComponent as Medium } from "../pics/m-solid.svg";
import { ReactComponent as Dee } from "../pics/d-solid.svg";
import { ReactComponent as TriUp } from "../pics/caret-up-solid.svg";
import { NavLink } from "react-router-dom";

function Footer() {
    const [langTaggle, setLangTaggle] = useState(false)
    function handleclick() {
        setLangTaggle(prev => !prev)
        console.log(langTaggle)
    }

    return (
        <>
            <footer style={{ backgroundColor: "#00112C", paddingTop: "80px" }}>
                <div class='mx-auto w-full max-w-screen-xl'>
                    <div class='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
                        <div>
                            <h2 class='mb-6 text-lg font-semibold  uppercase text-white'>
                                Company
                            </h2>
                            <ul class='text-white dark:text-gray-400 font-medium'>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class=' hover:underline'>
                                        About
                                    </a>
                                </li>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Careers
                                    </a>
                                </li>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Brand Center
                                    </a>
                                </li>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class='mb-6 text-lg font-semibold  uppercase text-white'>
                                Help center
                            </h2>
                            <ul class='text-white dark:text-gray-400 font-medium'>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Discord Server
                                    </a>
                                </li>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Twitter
                                    </a>
                                </li>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Facebook
                                    </a>
                                </li>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class='mb-6 text-lg font-semibold  uppercase text-white'>
                                Legal
                            </h2>
                            <ul class='text-white dark:text-gray-400 font-medium'>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Licensing
                                    </a>
                                </li>
                                <li class='mb-4'>
                                    <a
                                        href='#'
                                        class='hover:underline'>
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class='mb-6 text-lg font-semibold  uppercase text-white'>
                                Follow us
                            </h2>
                            <div className='inline-block w-6 mr-3 whitee'>
                                <Twitter />
                            </div>
                            <div className='inline-block w-5 mr-3 whitee'>
                                <Dee />
                            </div>
                            <div className='inline-block w-5 mr-3 whitee'>
                                <LinkedIn />
                            </div>
                            <div className='inline-block w-5 mr-3 whitee'>
                                <Medium />
                            </div>
                        </div>
                        <hr style={{ width: "1200px", padding: "15px 0" }} />
                    </div>
                    <div className='text-sm text-white text-opacity-90 tracking-wide pb-16 pl-4 flex justify-between'>
                        <div className='w-3/4 inline-block'>
                            <NavLink
                                className='footer-links'
                                to={"#"}>
                                Privacy policy·
                            </NavLink>
                            .
                            <NavLink
                                className='footer-links'
                                to={"#"}>
                                Do not sell my personal information·
                            </NavLink>
                            .
                            <NavLink
                                className='footer-links'
                                to={"#"}>
                                Manage cookies·
                            </NavLink>
                            .
                            <NavLink
                                className='footer-links'
                                to={"#"}>
                                Terms of use·
                            </NavLink>
                            .
                            <NavLink
                                className='footer-links'
                                to={"#"}>
                                Disclaimer·
                            </NavLink>
                            .
                            <NavLink
                                className='footer-links'
                                to={"#"}>
                                Sitemap·
                            </NavLink>
                            . © 2023 Dan.com an Undeveloped BV subsidiary. All
                            Rights Reserved.
                        </div>

                        <div
                            className='inline-block mr-16 text-lg font-extrabold cursor-pointer relative'
                            onClick={handleclick}>
                            English
                            <div className='w-4 inline-block pl-2'>
                                <TriUp />
                            </div>
                            <div
                                id='dropdownDelay'
                                className='z-10 absolute bottom-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
                                style={{display: langTaggle === false ? "none" : "block"}}
                            >
                                <ul
                                    class='py-2 text-sm text-gray-700 dark:text-gray-200'
                                    aria-labelledby='dropdownDelayButton'>
                                    <li>
                                        <a
                                            href='#'
                                            class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                            Earnings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

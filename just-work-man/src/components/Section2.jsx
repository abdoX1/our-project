import React from "react";


/* import { NavLink } from "react-router-dom"; */

function Section2() {
    return (
        <div
            className="flex justify-around my-20 mx-auto p-18"
            style={{
                width: "1200px",
                color: "#00112C",
            }}>
            <div style={{ width: "600px" }}>
                <img src={require("../pics/home_domains.png")} alt="just work please" />
            </div>
            <div style={{ width: "600px", lineHeight: "4rem" }}>
                <h2 className='title-home-domains text-5xl tracking-wide my-8 font-bold'>
                    Here for domain investors too
                </h2>
                <p className='para-home-domains text-xl tracking-wide mb-8'>
                    As a domain investor, you have particular needs. We get it!
                    So we built a special platform just for domain investors.
                    With its clear interface, bulk domain name uploading and
                    editing features, selling is easier than ever.
                </p>
                <button
                    type='button'
                    class='border-4 font-bold border-black on-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-6 text-center inline-flex items-center '>
                    Discover our platform
                    <svg
                        class='w-5 h-5 ml-4'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'>
                        <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M1 5h12m0 0L9 1m4 4L9 9'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Section2;

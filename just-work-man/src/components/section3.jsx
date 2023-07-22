import React from "react";
import SearchBar from "./SearchBar";

function Section3() {
    return (
        <div style={{backgroundColor: '#04294F'}} className="text-center py-28 text-white">
            <h2 className="text-5xl font-extrabold py-5">Build your online business</h2>
            <p className="tracking-wide py-5 pb-8">Lay a solid foundation for your business with a killer domain name.</p>
            <div className="">
                <SearchBar placeHolder = "Your killer domain name goes here" />
            </div>
        </div>
    )
    
}

export default Section3;

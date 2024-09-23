import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Dropdown from "./Dropdown";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileMenu = ({ mobileIsOpen, setMobileOpen }) => {
    const shopItems = [
        { label: 'Shop All', link: '/shop' },
        { label: 'Shop by Diet', link: '/shop' },
        { label: 'Shop by Goal', link: '/shop' }
    ];

    const aboutItems = [
        { label: 'Yolked Yummies', link: '/about' },
        { label: 'Contact Us', link: '/about' }
    ];

    return (
        <div className={`fixed top-0 left-0 w-64 bg-slate-400 transform ${mobileIsOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40`}>
            <div className="p-3 pl-5">
                <button className="" onClick={() => setMobileOpen(false)} >
                    <FontAwesomeIcon icon={faX} />
                </button>  

                <div>
                    <Dropdown title="Shop" menuItems={shopItems} setMobileOpen={setMobileOpen}/>
                </div>

                <div><Link to="/flavour-of-the-month" onClick={() => setMobileOpen(false)}>Flavour of the Month</Link></div>

                <div>
                    <Dropdown title="About Us" menuItems={aboutItems} setMobileOpen={setMobileOpen}/>
                </div>
                
            </div>
            <div>
                
            </div>

        </div>
    )

    
}

export default MobileMenu;
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Dropdown from "./Dropdown";
import { faX, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
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
        <div className={`fixed top-0 left-0 w-64 h-[1000px] bg-white transform ${mobileIsOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40 drop-shadow-lg`}>
            <div className="p-3 pl-5">
                <button className="" onClick={() => setMobileOpen(false)} >
                    <FontAwesomeIcon icon={faX} />
                </button>  

                

                <div className="m-5 font-lato">
                    
                    <div className="flex">
                        <div className="pr-3"><FontAwesomeIcon icon={faUser} /></div>
                        <p>Account</p>
                    </div>

                    <div className="flex pt-6">
                        <div className="pr-3"><FontAwesomeIcon icon={faCartShopping} /></div>
                        <p>Cart</p>
                    </div>
                    

                    <div className="pt-6">
                        <Dropdown title="Shop" menuItems={shopItems} setMobileOpen={setMobileOpen}/>
                    </div>

                    <div className="pt-6"><Link to="/flavour-of-the-month" onClick={() => setMobileOpen(false)}>Flavour of the Month</Link></div>

                    <div className="pt-6">
                        <Dropdown title="About Us" menuItems={aboutItems} setMobileOpen={setMobileOpen}/>
                    </div>
                </div>
                
            </div>
            <div>
                
            </div>

        </div>
    )

    
}

export default MobileMenu;
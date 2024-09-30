import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faCartShopping, faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import MobileMenu from "./MobileMenu";




const Navbar = () => {

    const shopItems = [
        { label: 'Shop All', link: '/shop' },
        { label: 'Shop by Diet', link: '/shop' },
        { label: 'Shop by Goal', link: '/shop' }
    ];

    const aboutItems = [
        { label: 'Yolked Yummies', link: '/about' },
        { label: 'Contact Us', link: '/about' }
    ];

    const [isOpen, setIsOpen] = useState(false)
    const [mobileIsOpen, setMobileOpen] = useState(false);


    return (
        // menu
        <div className="relative z-50">
            <div className="flex justify-between bg-white p-3 lg:p-4 xl:p-5 drop-shadow-md">
                <div className="hidden lg:flex flex-1 space-x-10 items-center text-xl lg:text-base lg:space-x-8 xl:text-lg 2xl:text-xl pl-3 font-lato">
                    
                    <div className="flex items-center" >
                        <Dropdown title="Shop" menuItems={shopItems} setMobileOpen={setMobileOpen}/>
                    </div>

                    <div className=" hover:text-blue-400"><Link to="/flavour-of-the-month">Flavour of the Month</Link></div>

                    <div className="flex items-center" >
                        <div><Dropdown title="About Us" menuItems={aboutItems} setMobileOpen={setMobileOpen}/></div>
                    </div>
                </div>
                
                {/* hamburger menu for mobile/tablet */}
                <div className="lg:hidden sm:flex md:flex, text-xl items-center pt-1 pl-3">
                    <button onClick={() => setMobileOpen(!mobileIsOpen)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                </div>

                
                {/* logo */}
                <div className="flex flex-1 justify-center items-center">
                    <div className="font-sans text-2xl lg:text-3xl xl:text-4xl font-bold"><Link to="/">Yolked Yummies</Link></div>   
                </div>

                {/* Search icon for mobile/tablet */}
                <div className="lg:hidden sm:flex md:flex, text-xl items-center pt-1 pr-3">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>

                {/* icons */}
                    <div className="hidden lg:flex flex-1 space-x-10 justify-end items-center pr-3 text-xl md:text-lg 2xl:text-2xl">
                        <FontAwesomeIcon icon={faUser} className="hover:text-blue-400 cursor-pointer"/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:text-blue-400 cursor-pointer"/>
                        <FontAwesomeIcon icon={faCartShopping} className="hover:text-blue-400 cursor-pointer"/>
                    </div>

                {/* 모바일 메뉴가 열렸을 때 MobileMenu 렌더링 */}
            {mobileIsOpen && (
                <MobileMenu mobileIsOpen={mobileIsOpen} setMobileOpen={setMobileOpen} />
            )}

            </div>
        </div>
    )
}


export default Navbar;

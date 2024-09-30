import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Dropdown = ({ title, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseEvents = isMobile ? { onClick: () => setIsOpen(!isOpen)} 
    : {onMouseEnter: () => setIsOpen(true), onMouseLeave:() => setIsOpen(false)
    };

    const dropdownStyles = isMobile 
        ? "relative bg-white pt-3 pl-2 pr-2 -ml-2 drop-shadow-2sm divide-y" //Mobile style
        : "absolute w-max bg-white pt-3 pl-2 pr-2 -ml-2 drop-shadow-2sm divide-y"; //Desktop style


    return (
        <div className="relative" {...handleMouseEvents}>
            
            <button className={isMobile ? "" : "hover:text-blue-400"}>{title}</button>
            <FontAwesomeIcon icon={faChevronDown} className={`ml-1 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />

            {isOpen && (
                <div className={`${dropdownStyles}`}>
                    {menuItems.map((menuItems, index) => (
                        <Link key={index} to={menuItems.link} className=" hover:text-blue-400 flex py-5 px-4" onClick={() => {
                            setMobileOpen(false); // 사이드바 닫기
                            setIsOpen(false); // 드롭다운 닫기
                        }}>
                                {menuItems.label}
                            {/* 반복되는 항목은 key={index}로 고유하게 구분됩니다 */}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
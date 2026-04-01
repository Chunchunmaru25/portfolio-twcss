import React from 'react';
import styled from 'styled-components';
import '../../../src/index.css'
import { useState, useEffect } from 'react';
import FlowingMenu from '../reactbits/FlowingMenu';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import {
    aboutImg,
    contactImg,
    formalImg,
    homeImg,
    lanyardImg,
    beachImg,
    portfolioImg,
    resumeImg,
    servicesImg,
    skillsImg,
    togaTransShadeImg,
    togaTransImg,
    togaImg,
    witiLogoCircleImg,
    witiImg,
} from '../../components/path/imagesPath'
const StyledWrapper = styled.div`
        .hamburger {
            cursor: pointer;
        }

        .hamburger input {
            display: none;
        }

        .hamburger svg {
            height: 3em;
            transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 3;
            transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line-top-bottom {
            stroke-dasharray: 12 63;
        }

        .hamburger input:checked + svg {
            transform: rotate(-45deg);
        }

        .hamburger input:checked + svg .line-top-bottom {
            stroke-dasharray: 20 300;
            stroke-dashoffset: -32.42;
        }`;

const ControlsWrapper = styled.div`
  position: fixed;
  top: 2.5rem;  
  right: 2.5rem;
  display: flex;
  align-items: center; 
  gap: 2rem; 
  z-index: 1000;

  .toggler {
    width: 2rem;   
    height: 2rem; 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger-wrapper {
    width: 2.5rem;   
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .hamburger svg {
      width: 100%;
      height: 100%;
    }
  }
`;
const demoItems = [
    { link: '#', text: 'Home', image: homeImg },
    { link: '#', text: 'About', image: aboutImg },
    { link: '#', text: 'Skills', image: skillsImg },
    { link: '#', text: 'Resume', image: resumeImg },
    { link: '#', text: 'Services', image: servicesImg },
    { link: '#', text: 'Portfolio', image: portfolioImg },
    { link: '#', text: 'Contact', image: contactImg },
];
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setShowMenu(false);
            setTimeout(() => setIsOpen(false), 500);
        }
    };

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setShowMenu(true), 10);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div
                    id="openStagger"
                    className={`h-full w-full fixed top-0 left-0 z-[999] transition-opacity duration-500 ${showMenu ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <FlowingMenu
                        items={demoItems}
                        speed={15}
                        textColor="#ffffff"
                        bgColor="#060010"
                        marqueeBgColor="#ffffff"
                        marqueeTextColor="#060010"
                        borderColor="#ffffff"
                    />
                </div>
            )}

            <ControlsWrapper>
                <div className="toggler">
                    <AnimatedThemeToggler />
                </div>

                <div className="hamburger-wrapper">
                    <StyledWrapper>
                        <label className="hamburger cursor-pointer">
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={isOpen}
                                onChange={toggleMenu}
                            />
                            <svg viewBox="0 0 32 32">
                                <path
                                    className="line line-top-bottom stroke-current"
                                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                />
                                <path
                                    className="line stroke-current"
                                    d="M7 16 27 16"
                                />
                            </svg>
                        </label>
                    </StyledWrapper>
                </div>
            </ControlsWrapper>
            <div className='fixed bottom-0 right-0 text-[10px] font-extralight z-[9999999] p-2 text-gray-500'>
                {import.meta.env.VITE_APP_VERSION}
            </div>
        </>
    );
}

export default Header;
import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import ProfileCard from "@/components/reactbits/ProfileCard";
import { TypingAnimation } from "@/components/ui/typing-animation";
import ContainedBtn from "@/components/twcss/ContainedBtn";
import OutlinedBtn from "@/components/twcss/OutlinedBtn";
import Hero from "@/components/sections/Hero";
import GridBackground from "@/components/twcss/GridBackground";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScrollDown from "@/components/twcss/ScrollDown";

const StyledWrapper = styled.div`
  --bg: ${({ theme }) => (theme === "dark" ? "#050505" : "#f0f0f0")};
  --vignette: ${({ theme }) => (theme === "dark" ? "#000" : "#ccc")};
  --cyan: ${({ theme }) => (theme === "dark" ? "3, 233, 244" : "0, 100, 255")};
  --magenta: ${({ theme }) => (theme === "dark" ? "217, 3, 244" : "255, 50, 200")};

  .cyber-pattern {
    width: 100%;
    height: 100%;
    background-color: var(--bg);
    background-image: 
      radial-gradient(circle at center, transparent 30%, var(--vignette) 90%),
      linear-gradient(rgba(var(--cyan), 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(var(--cyan), 0.1) 1px, transparent 1px),
      linear-gradient(rgba(var(--magenta), 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(var(--magenta), 0.05) 1px, transparent 1px);
    background-size: 100% 100%, 60px 60px, 60px 60px, 20px 20px, 20px 20px;
    animation: cyber-move 10s linear infinite;
  }
`;
function Welcome() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const updateTheme = () => {
            const theme = localStorage.getItem('theme');
            setIsDarkMode(
                theme === 'dark' ||
                (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
            );
        };
        updateTheme();
        window.addEventListener('storage', updateTheme);
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        return () => {
            window.removeEventListener('storage', updateTheme);
            observer.disconnect();
        };
    }, []);


    const [showScroll, setShowScroll] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 && showScroll) {
                setFadeOut(true);
                setTimeout(() => setShowScroll(false), 500);
            } else if (window.scrollY <= 100 && !showScroll) {
                setShowScroll(true);
                setFadeOut(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [showScroll]);

    return (
        <>
            <Header />
            <StyledWrapper className="relative w-full min-h-screen overflow-hidden" theme={isDarkMode ? "dark" : "light"}>
                <div className="cyber-pattern absolute inset-0 z-0" />
                <div className="relative z-10">
                    <Hero />
                    {showScroll && (
                        <div className={`transition-opacity duration-500 absolute bottom-0 left-1/2 -translate-x-1/2 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
                            <ScrollDown />
                        </div>
                    )}
                </div>
            </StyledWrapper>

            <div className="bg-blue-100 h-screen">
                asasd
            </div>
        </>
    )

}

export default Welcome;
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScrollDown from "@/components/twcss/ScrollDown";
import Lanyard from "@/components/reactbits/Lanyard";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/portfolio";
import Faqs from "@/components/sections/Faqs";
import Contact from "@/components/sections/Contact";

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
                theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
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
                    <div className="bg-transparent absolute top-0 left-0 pointer-events-auto z-[99999]">
                        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                    </div>
                    {showScroll && (
                        <div className={`transition-opacity duration-500 absolute bottom-0 left-1/2 -translate-x-1/2 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
                            <ScrollDown />
                        </div>
                    )}
                </div>
            </StyledWrapper>

            {/* about me */}
            <div id="about" className="bg-background dark:bg-background" >
                <section id="about" className="py-20">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                <div className="flex items-center gap-4">
                                    <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                                    <p className="whitespace-nowrap">About Me</p>
                                    <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                                </div>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                                I am dedicated to continuous learning and growth, always eager to
                                take on new challenges and improve my skills.
                            </p>
                        </div>
                        <About />
                    </div>
                </section>
            </div>

            {/* STATS */}
            <div className="flex justify-center items-center gap-8 flex-wrap py-20 bg-pallete-1 dark:bg-pallete-1" >
                <Stats />
            </div>
            <div className="mt-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-4">
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                            <p className="whitespace-nowrap">Skills</p>
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                        </div>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                        Experienced in building academic responsive and dynamic web applications, with a passion for learning and improving my craft.
                    </p>
                </div>
                <Skills />
            </div>
            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-4">
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                            <p className="whitespace-nowrap">Resume</p>
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                        </div>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                        A summary of my education, experience, and technical skills, showcasing my journey and growth as a developer.
                    </p>
                </div>
                <Resume />
            </div>

            {/* TECH STACK */}
            <div id='techstack'>
                <TechStack />
            </div>

            {/* PORTFOLIO */}
            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-4">
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                            <p className="whitespace-nowrap">Resume</p>
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                        </div>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                        A summary of my education, experience, and technical skills, showcasing my journey and growth as a developer.
                    </p>
                </div>
                {/* <Portfolio /> */}
                Fetching . . .
            </div>

            {/* ACCORDION */}
            <div>
                <Faqs />
            </div>

            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-4">
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                            <p className="whitespace-nowrap">Contact</p>
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                        </div>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                        Have a project in mind, a question, or just want to connect? I’m always open to discussing new opportunities, creative ideas, or collaborations—feel free to reach out anytime.
                    </p>
                </div>
                <Contact />
            </div>
        </>
    )

}

export default Welcome;
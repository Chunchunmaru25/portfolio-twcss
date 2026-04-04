import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import React, { useState, useEffect } from 'react';
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/portfolio";
import Faqs from "@/components/sections/Faqs";
import Contact from "@/components/sections/Contact";
import Card from "../components/twcss/PrajapatiCard";
import techData from "../assets/json/TechData";
import GridBackground from "@/components/twcss/GridBackground";
import TitleLine from "@/components/twcss/TitleLine";
import MarqueeImport from "react-fast-marquee";

const Marquee = MarqueeImport.default;

function Welcome() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const mode = isDark ? "dark" : "light";
    const theme = localStorage.getItem("theme") || mode;
    const path = theme === "dark" ? "black" : "white";

    const frontend = techData.frontend;
    const backend = techData.backend;
    const database_server = techData.database_server;
    const tools = techData.tools;
    const template_design = techData.template_design;
    return (
        <>

            <Header />
            {/* HERO */}
            <div className="relative">
                <GridBackground className="absolute inset-0 -z-10" />

                <Hero />
            </div>

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
                <TitleLine title="Skills" subtitle="Experienced in building academic responsive and dynamic web applications, with a passion for learning and improving my craft." />
                <Skills />
            </div >
            <div>
                <TitleLine title="Resume" subtitle="A summary of my education, experience, and technical skills, showcasing my journey and growth as a developer." />
                <Resume />
            </div>

            {/* TECH STACK */}
            <div id='techstack'>
                <TitleLine title="FRONT END WEB DEVELOPMENT TOOLS" subtitle="Essential tools I use to build modern, responsive, and beautiful web interfaces." />
                <Marquee
                    autoFill
                    pauseOnHover
                    pauseOnClick
                    direction="right"
                    gradient
                    gradientColor={path}
                >
                    {frontend.map((card, index) => (
                        <div key={index} className="mx-4">
                            <Card
                                style="size-[200px] my-10"
                                imgSize="size-[100px]"
                                title={card.stack}
                                svg={card.path}
                                sideColor={card.bg_color}
                            />
                        </div>
                    ))}
                </Marquee>
                <TitleLine title="BACK END WEB DEVELOPMENT TOOLS" subtitle="Technologies and tools I use to build secure, scalable, and fast web applications." />
                <Marquee
                    autoFill
                    pauseOnHover
                    pauseOnClick
                    direction="left"
                    gradient
                    gradientColor={path}
                >
                    {backend.map((card, index) => (
                        <div key={index} className="mx-4">
                            <Card
                                style="size-[200px] my-10"
                                imgSize="size-[100px]"
                                title={card.stack}
                                svg={card.path}
                                sideColor={card.bg_color}
                            />
                        </div>
                    ))}
                </Marquee>
                <TitleLine title="DATABASE AND SERVERS" subtitle="Database management systems and server technologies that support scalable applications." />
                <Marquee
                    autoFill
                    pauseOnHover
                    pauseOnClick
                    direction="right"
                    gradient
                    gradientColor={path}
                >
                    {database_server.map((card, index) => (
                        <div key={index} className="mx-4">
                            <Card
                                style="size-[200px] my-10"
                                imgSize="size-[100px]"
                                title={card.stack}
                                svg={card.path}
                                sideColor={card.bg_color}
                            />
                        </div>
                    ))}
                </Marquee>
                <TitleLine title="DEVELOPMENT TOOLS" subtitle="Productivity tools, version control, and IDEs that help me code efficiently." />
                <Marquee
                    autoFill
                    pauseOnHover
                    pauseOnClick
                    direction="left"
                    gradient
                    gradientColor={path}
                >
                    {tools.map((card, index) => (
                        <div key={index} className="mx-4">
                            <Card
                                style="size-[200px] my-10"
                                imgSize="size-[100px]"
                                title={card.stack}
                                svg={card.path}
                                sideColor={card.bg_color}
                            />
                        </div>
                    ))}
                </Marquee>
                <TitleLine title="TEMPLATE AND DESIGN TOOLS" subtitle="Design and prototyping tools that I use for UI/UX and creative workflows." />
                <Marquee
                    autoFill
                    pauseOnHover
                    pauseOnClick
                    direction="right"
                    gradient
                    gradientColor={path}
                >
                    {template_design.map((card, index) => (
                        <div key={index} className="mx-4">
                            <Card
                                style="size-[200px] my-10"
                                imgSize="size-[100px]"
                                title={card.stack}
                                svg={card.path}
                                sideColor={card.bg_color}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* PORTFOLIO */}
            <div className="h-screen">
                <TitleLine title="Portfolio" subtitle="Check My Portfolio" />
                Fetching . . .
            </div>

            {/* ACCORDION */}
            <div>
                <Faqs />
            </div>

            <div>
                <TitleLine title="Contact" subtitle="Have a project in mind, a question, or just want to connect? I’m always open to discussing new opportunities, creative ideas, or collaborations—feel free to reach out anytime." />
                <Contact />
            </div>
        </>
    )

}

export default Welcome;
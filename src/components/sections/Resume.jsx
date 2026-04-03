import RangeProgressWTooltip from "@/components/twcss/RangeProgressWTooltip";
import {
    CircleUserRound, Calendar, MapPinHouse, PersonStanding, Mars, Flag, MapPin, Mail, Smartphone, Phone,
    GraduationCap, Building
} from 'lucide-react';

// json
import Skill from '../../assets/json/skills.json';
import About from '../../assets/json/AboutMe.json';

// assets
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
import { linkinSvg } from "../path/svgPath";


export default function Resume() {
    const softSkills = Skill.softSkills;
    const backendSkills = Skill.backendSkills;
    const frontendSkills = Skill.frontendSkills;
    return (
        <>
            <section id="about" className="py-20 bg-white dark:bg-background">
                <div className="max-w-[80%] mx-auto px-4">
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
                    <div className="grid lg:grid-cols-[40%_60%] gap-10">
                        <div className="flex">
                            <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 border border-gray-200
                             dark:border-neutral-700 rounded-3xl p-8 text-center shadow-xl overflow-hidden w-full flex flex-col">
                                <div className="flex justify-center items-center size-40 border-3 border-solid border-indigo-500 rounded-full mx-auto mb-4 overflow-hidden">
                                    <img src={togaImg} alt="Toga" />
                                </div>
                                <div>
                                    <h1>Personal Profile</h1>
                                    <hr />
                                    <div className="flex text-left justify-start items-center my-3">
                                        <CircleUserRound />
                                        <strong className="mx-3">FULL NAME:</strong><span> {About.firstName} {About.lastName}</span>
                                    </div>
                                    <div className="flex  text-left justify-start items-center my-3">
                                        <Calendar />
                                        <strong className="mx-3">BIRTH DATE:</strong><span>{About.birthdayNumeric}</span>
                                    </div>
                                    <div className="flex text-left justify-start items-center my-3">
                                        <MapPinHouse />
                                        <strong className="mx-3">BIRTH PLACE:</strong><span>{About.birthplace}</span>
                                    </div>
                                    <div className="flex  text-left justify-start items-center my-3">
                                        <PersonStanding />
                                        <strong className="mx-3">HEIGHT:</strong><span>{About.height}</span>
                                    </div>
                                    <div className="flex text-left justify-start items-center my-3">
                                        <Mars />
                                        <strong className="mx-3">GENDER:</strong><span>{About.gender}</span>
                                    </div>
                                    <div className="flex  text-left justify-start items-center my-3">
                                        <Flag />
                                        <strong className="mx-3">CITIZENSHIP:</strong><span>{About.citizenship}</span>
                                    </div>

                                    <h1>Professional Summary</h1>
                                    <hr />
                                    <span className="flex justify-start text-left">Hardworking and motivated individual with a strong willingness to learn and grow. Adaptable and detail-oriented, with the ability to work well independently or in a team. Open to various roles and committed to delivering quality service in every task.</span>
                                    <hr />
                                    <h1>Contact Information</h1>
                                    <hr />

                                    <a href={About.addressUrl} target="_blank" className="flex  text-left justify-start items-center my-3">
                                        <CircleUserRound />
                                        <span className="text-sm mx-3">{About.barangay} {About.city} {About.province} {About.country}</span>
                                    </a>
                                    <a href={`mailto:${About.email}`} target="_blank" className="flex text-left justify-start items-center my-3">
                                        <Mail />
                                        <span className="text-sm mx-3">{About.email}</span>
                                    </a>
                                    <a href={`tel:${About.phone1}`} target="_blank" className="flex  text-left justify-start items-center my-3">
                                        <Smartphone />
                                        <span className="text-sm mx-3">{About.phone1Format}</span>
                                    </a>
                                    <a href={`tel:${About.hometelephone}`} target="_blank" className="flex text-left justify-start items-center my-3">
                                        <Phone />
                                        <span className="text-sm mx-3">{About.hometelephoneFormat}</span>
                                    </a>
                                    <a href={About.linkedinUrl} target="_blank" className="flex text-left justify-start items-center my-3">
                                        <img className="size-7" src={linkinSvg} alt="LinkIn Image" />
                                        <span className="text-sm mx-3">{About.linkedinUrl}</span>
                                    </a>

                                    <h1>Soft Skills</h1>
                                    <hr />
                                    <div className="text-[14px]">
                                        {/* {softSkills.map((skill, index) => (
                                            <RangeProgressWTooltip
                                                key={index}
                                                language={skill.name}
                                                progress={skill.progress}
                                                margin='my-4'
                                            />
                                        ))} */}
                                    </div>

                                    <h1>Technical Skills</h1>
                                    <hr />
                                    <div className="text-[14px]">
                                        {/* {frontendSkills.map((skill, index) => (
                                            <RangeProgressWTooltip
                                                key={index}
                                                language={skill.language}
                                                progress={skill.progress}
                                                margin='my-4'
                                            />
                                        ))}
                                        {backendSkills.map((skill, index) => (
                                            <RangeProgressWTooltip
                                                key={index}
                                                language={skill.language}
                                                progress={skill.progress}
                                                margin='my-4'
                                            />
                                        ))} */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="relative text-center overflow-hidden w-full flex flex-col">
                                <div className="flex justify-start">
                                    <GraduationCap size={40} />
                                    <span>EDUCATION</span>
                                </div>
                                <div className="flex">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="bg-gray-300 w-[30px] h-[30px] border rounded-full"></div>
                                        <div className="bg-gray-300 w-[2px] h-[100px] border rounded-4xl"></div>
                                    </div>
                                    <div>
                                        <div>
                                            Tertiary - BS Computer Science
                                        </div>
                                        <div>
                                            2022 - 2026
                                        </div>
                                        <div>
                                            <Building /> Westbridge Institute of Technology Inc.
                                        </div>
                                        <div>
                                            Specialized in Web Development with a enough knowledge in Artificial Intelligence and Machine Learning.
                                        </div>
                                        asdasdsadsad
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
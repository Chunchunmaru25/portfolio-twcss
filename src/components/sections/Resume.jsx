import RangeProgressWTooltip from "@/components/twcss/RangeProgressWTooltip";
import {
    CircleUserRound, Calendar, MapPinHouse, PersonStanding, Mars, Flag, MapPin, Mail, Smartphone, Phone,
    GraduationCap, Building, BriefcaseBusiness,
    Download, MessageCircleMore
} from 'lucide-react';
import ContainedBtn from "@/components/twcss/ContainedBtn";
import OutlinedBtn from "@/components/twcss/OutlinedBtn";
import CV from '../../../public/pdf/CV.pdf'

// json
import Skill from '../../assets/json/Skills.json';
import About from '../../assets/json/AboutMe.json';
import ResumeJson from '../../assets/json/Resume.json';

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

    const Education = ResumeJson.Education;
    const Personal = ResumeJson.Personal;
    const Achievements = ResumeJson.Achievements

    return (
        <>
            <section id="about" className="py-20 bg-white dark:bg-background">
                <div className="max-w-[80%] mx-auto px-4">
                    <div className="grid lg:grid-cols-[40%_60%] gap-10">
                        <div className="flex">
                            <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 border border-gray-200
                             dark:border-neutral-700 rounded-3xl p-8 text-center shadow-xl overflow-hidden w-full flex flex-col">
                                <div className="flex justify-center items-center size-40 border-3 border-solid border-indigo-500 rounded-full mx-auto mb-4 overflow-hidden">
                                    <img src={togaImg} alt="Toga" />
                                </div>
                                <div>
                                    <h1 className="text-2xl flex mt-3 mb-3"><b>Personal Profile</b></h1>
                                    <hr />
                                    <div className="flex flex-col gap-3 my-5">

                                        <div className="flex items-start">
                                            <CircleUserRound className="mr-3 mt-1 shrink-0" />
                                            <span className="w-36 text-sm text-gray-500">FULL NAME</span>
                                            <span className="font-semibold">
                                                {About.firstName} {About.lastName}
                                            </span>
                                        </div>

                                        <div className="flex items-start">
                                            <Calendar className="mr-3 mt-1 shrink-0" />
                                            <span className="w-36 text-sm text-gray-500">BIRTH DATE</span>
                                            <span className="font-semibold">{About.birthdayNumeric}</span>
                                        </div>

                                        <div className="flex items-start">
                                            <MapPinHouse className="mr-3 mt-1 shrink-0" />
                                            <span className="w-36 text-sm text-gray-500">BIRTH PLACE</span>
                                            <span className="font-semibold">{About.birthplace}</span>
                                        </div>

                                        <div className="flex items-start">
                                            <PersonStanding className="mr-3 mt-1 shrink-0" />
                                            <span className="w-36 text-sm text-gray-500">HEIGHT</span>
                                            <span className="font-semibold">{About.height}</span>
                                        </div>

                                        <div className="flex items-start">
                                            <Mars className="mr-3 mt-1 shrink-0" />
                                            <span className="w-36 text-sm text-gray-500">GENDER</span>
                                            <span className="font-semibold">{About.gender}</span>
                                        </div>

                                        <div className="flex items-start">
                                            <Flag className="mr-3 mt-1 shrink-0" />
                                            <span className="w-36 text-sm text-gray-500">CITIZENSHIP</span>
                                            <span className="font-semibold">{About.citizenship}</span>
                                        </div>
                                    </div>

                                    <h1 className="text-2xl flex mt-10 mb-3"><b>Professional Summary</b></h1>
                                    <hr />
                                    <span className="flex justify-start text-left my-4">Hardworking and motivated individual with a strong willingness to learn and grow. Adaptable and detail-oriented, with the ability to work well independently or in a team. Open to various roles and committed to delivering quality service in every task.</span>

                                    <h1 className="text-2xl flex mt-10 mb-3"><b>Contact Information</b></h1>
                                    <hr />

                                    <a href={About.addressUrl} target="_blank" className="flex  text-left justify-start items-center my-3">
                                        <CircleUserRound />
                                        <span className="text-sm mx-3 my-2">{About.barangay} {About.city} {About.province} {About.country}</span>
                                    </a>
                                    <a href={`mailto:${About.email}`} target="_blank" className="flex text-left justify-start items-center my-3">
                                        <Mail />
                                        <span className="text-sm mx-3 my-2">{About.email}</span>
                                    </a>
                                    <a href={`tel:${About.phone1}`} target="_blank" className="flex  text-left justify-start items-center my-3">
                                        <Smartphone />
                                        <span className="text-sm mx-3 my-2">{About.phone1Format}</span>
                                    </a>
                                    <a href={`tel:${About.hometelephone}`} target="_blank" className="flex text-left justify-start items-center my-3">
                                        <Phone />
                                        <span className="text-sm mx-3 my-2">{About.hometelephoneFormat}</span>
                                    </a>
                                    <a href={About.linkedinUrl} target="_blank" className="flex text-left justify-start items-center my-3">
                                        <img className="size-7" src={linkinSvg} alt="LinkIn Image" />
                                        <span className="text-sm mx-3 my-2">{About.linkedinUrl}</span>
                                    </a>

                                    <h1 className="text-2xl flex mt-10 mb-3"><b>Soft Skills</b></h1>
                                    <hr />
                                    <div className="text-[14px]">
                                        {softSkills.map((skill, index) => (
                                            <RangeProgressWTooltip
                                                key={index}
                                                language={skill.name}
                                                progress={skill.progress}
                                                margin='my-6'
                                            />
                                        ))}
                                    </div>

                                    <h1 className="text-2xl flex mt-10 mb-3"><b>Technical Skills</b></h1>
                                    <hr />
                                    <div className="text-[14px]">
                                        {frontendSkills.map((skill, index) => (
                                            <RangeProgressWTooltip
                                                key={index}
                                                language={skill.language}
                                                progress={skill.progress}
                                                margin='my-6'
                                            />
                                        ))}
                                        {backendSkills.map((skill, index) => (
                                            <RangeProgressWTooltip
                                                key={index}
                                                language={skill.language}
                                                progress={skill.progress}
                                                margin='my-6'
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="relative text-center overflow-hidden w-full flex flex-col">
                                {/* EDUCATION */}
                                <div className="flex items-center">
                                    <span className="ml-10 mr-4">
                                        <GraduationCap size={40} />
                                    </span>
                                    <b className="text-2xl">Education</b>
                                </div>
                                {Education.map((i, index) => (
                                    <div key={index}>
                                        <div className="flex my-5">
                                            <div className="flex flex-col items-center justify-center mt-3">
                                                <div className="bg-gray-300 size-[25px] border rounded-full"></div>
                                                <div className="bg-gray-300 w-[2px] h-full border rounded-4xl"></div>
                                            </div>

                                            <div className="flex flex-col text-start">
                                                <p className="mx-3 my-1 text-xl">
                                                    <b>{i.program}</b>
                                                </p>
                                                <p className="mx-3 my-1">
                                                    {i.year}
                                                </p>
                                                <p className="flex mx-3 mb-4 mt-2 items-center">
                                                    <span><Building /></span>
                                                    <span className="mx-3 text-sm italic">{i.branch}</span>
                                                </p>
                                                <div className="ml-10">
                                                    {i.description.map((desc, i) => (
                                                        <p key={i} className="my-2">
                                                            {desc}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* PERSONAL */}
                                <div className="flex items-center">
                                    <span className="ml-10 mr-4">
                                        <GraduationCap size={40} />
                                    </span>
                                    <b className="text-2xl">Personal Experience</b>
                                </div>
                                {Personal.map((i, index) => (
                                    <div key={index}>
                                        <div className="flex my-5">
                                            <div className="flex flex-col items-center justify-center mt-3">
                                                <div className="bg-gray-300 size-[25px] border rounded-full"></div>
                                                <div className="bg-gray-300 w-[2px] h-full border rounded-4xl"></div>
                                            </div>

                                            <div className="flex flex-col text-start">
                                                <p className="mx-3 my-1 text-xl">
                                                    <b>{i.program}</b>
                                                </p>
                                                <p className="mx-3 my-1">
                                                    {i.year}
                                                </p>
                                                <p className="flex mx-3 mb-4 mt-2 items-center">
                                                    <span><Building /></span>
                                                    <span className="mx-3 text-sm italic">{i.branch}</span>
                                                </p>
                                                <div className="ml-10">
                                                    {i.description.map((desc, i) => (
                                                        <p key={i} className="my-2">
                                                            {desc}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* ACHIEVEMENTS AND CERTIFICATIONS */}
                                <div className="flex items-center">
                                    <span className="ml-10 mr-4">
                                        <GraduationCap size={40} />
                                    </span>
                                    <b className="text-2xl">Achievements and Certifications</b>
                                </div>
                                {Achievements.map((i, index) => (
                                    <div key={index}>
                                        <div className="flex my-5">
                                            <div className="flex flex-col items-center justify-center mt-3">
                                                <div className="bg-gray-300 size-[25px] border rounded-full"></div>
                                                <div className="bg-gray-300 w-[2px] h-full border rounded-4xl"></div>
                                            </div>

                                            <div className="flex flex-col text-start">
                                                <p className="mx-3 my-1 text-xl">
                                                    <b>{i.program}</b>
                                                </p>
                                                <p className="mx-3 my-1">
                                                    {i.year}
                                                </p>
                                                <p className="flex mx-3 mt-2 items-center">
                                                    <span className="mx-3 text-sm italic">{i.branch}</span>
                                                </p>
                                                <div className="ml-10">
                                                    {i.description.map((desc, i) => (
                                                        <p key={i} className="my-2">
                                                            {desc}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex flex-row gap-2 justify-center my-5">
                                    <a href={CV} download>
                                        <ContainedBtn text="Download CV" icon={<Download />} />
                                    </a>
                                    <a href="#contact">
                                        <OutlinedBtn text="Let's Talk" icon={<MessageCircleMore />} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
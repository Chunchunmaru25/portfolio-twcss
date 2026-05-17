import React from "react";
import BorderGlow from "../BorderGlow";
import SpotlightCard from '../SpotlightCard';
import { CircleUserRound, Mail, PenLine, Phone, ArrowRight } from 'lucide-react'
import About from '../../assets/json/AboutMe.json'
import GridTwo from "../twcss/GridTwo";
import { facebookSvg, instagramSvg, tiktokSvg, githubSvg, linkinSvg } from '../path/svgPath'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Input from "../twcss/Input";
import Captcha from "../twcss/Recaptcha";
import SubmitBtn from "../twcss/SubmitBtn";
import ReCAPTCHA from "react-google-recaptcha";
const Contact = function () {
    return (
        <>
            <GridTwo maxWidth="90%" flexPortion={["1fr", "2fr"]}>
                {/* LEFT */}
                <div>
                    <div className="flex flex-col gap-3">
                        <BorderGlow
                            edgeSensitivity={30}
                            glowColor="40 80 80"
                            backgroundColor="#FFFFF"
                            borderRadius={28}
                            glowRadius={40}
                            glowIntensity={1}
                            coneSpread={25}
                            animated={false}
                            colors={['#c084fc', '#f472b6', '#38bdf8']}
                        >
                            <div className="flex" style={{ padding: '1em' }}>
                                <SpotlightCard
                                    className="w-20 h-20 flex justify-center items-center border-black dark:border-white"
                                    spotlightColor="rgba(0, 229, 255, 0.2)"
                                >
                                    <Mail className="w-10 h-10 text-black dark:text-white flex-shrink-0 flex" />
                                </SpotlightCard>
                                <div className="flex flex-col justify-around px-4 py-1">
                                    <b className="text-xl">Send Email</b>
                                    <span className="italic">{About.email}</span>
                                </div>
                            </div>
                        </BorderGlow>
                        <BorderGlow
                            edgeSensitivity={30}
                            glowColor="40 80 80"
                            backgroundColor="#FFFFF"
                            borderRadius={28}
                            glowRadius={40}
                            glowIntensity={1}
                            coneSpread={25}
                            animated={false}
                            colors={['#c084fc', '#f472b6', '#38bdf8']}
                        >
                            <div className="flex" style={{ padding: '1em' }}>
                                <SpotlightCard
                                    className="w-20 h-20 flex justify-center items-center border-black dark:border-white"
                                    spotlightColor="rgba(0, 229, 255, 0.2)"
                                >
                                    <Phone className="w-10 h-10 text-black dark:text-white flex-shrink-0 flex" />
                                </SpotlightCard>
                                <div className="flex flex-col justify-around px-4 py-1">
                                    <b className="text-xl">Direct Contact</b>
                                    <span className="italic">{About.phone1Format}</span>
                                    <span className="italic">{About.phone2Format}</span>
                                </div>
                            </div>
                        </BorderGlow>
                        <BorderGlow
                            edgeSensitivity={30}
                            glowColor="40 80 80"
                            backgroundColor="#FFFFF"
                            borderRadius={28}
                            glowRadius={40}
                            glowIntensity={1}
                            coneSpread={25}
                            animated={false}
                            colors={['#c084fc', '#f472b6', '#38bdf8']}
                        >
                            <div className="flex justify-center items-center" style={{ padding: '1em' }}>
                                <div className="flex flex-col justify-center items-center gap-2 px-4 py-1">
                                    <b className="text-md">Follow My Journey</b>
                                    <div className="flex gap-2 justify-around">
                                        <div>
                                            <a href="https://www.facebook.com/clarence.duerme40" target="_blank">
                                                <Avatar>
                                                    <AvatarImage src={facebookSvg} />
                                                    <AvatarFallback>facebookSvg</AvatarFallback>
                                                </Avatar>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.instagram.com/moriii__pawsa" target="_blank">
                                                <Avatar>
                                                    <AvatarImage src={instagramSvg} />
                                                    <AvatarFallback>instagramSvg</AvatarFallback>
                                                </Avatar>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.tiktok.com/@sh1raase" target="_blank">
                                                <Avatar>
                                                    <AvatarImage src={tiktokSvg} />
                                                    <AvatarFallback>tiktokSvg</AvatarFallback>
                                                </Avatar>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://github.com/Chunchunmaru25" target="_blank">
                                                <Avatar>
                                                    <AvatarImage src={githubSvg} />
                                                    <AvatarFallback>githubSvg</AvatarFallback>
                                                </Avatar>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.linkedin.com/in/clarence-duerme-2232b4374/" target="_blank">
                                                <Avatar>
                                                    <AvatarImage src={linkinSvg} />
                                                    <AvatarFallback>linkinSvg</AvatarFallback>
                                                </Avatar>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BorderGlow>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col text-center">
                    <div className="flex flex-col">
                        <b className="text-2xl tracking-[5px] px-10 py-3">Send A Message</b>
                        <span>Whether you're looking to start a project, ask a question, or simply say hello, I'm just a message away. Let's build something great together.</span>
                    </div>
                    <Input />
                </div>
            </GridTwo >
        </>
    )
}

export default Contact;
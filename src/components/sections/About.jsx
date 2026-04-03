import React from "react";
import {
    Mail, Phone, MapPin, Download, MessageCircle,
    CheckCircle, BriefcaseBusiness, MessageCircleMore
} from "lucide-react";
import Toga from '../../assets/images/toga.jpg'
import CV from '../../../public/pdf/CV.pdf'
import ContainedBtn from "@/components/twcss/ContainedBtn";
import OutlinedBtn from "@/components/twcss/OutlinedBtn";

const About = () => {
    return (

        <>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                    <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-3xl p-8 text-center shadow-xl overflow-hidden">

                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />

                        <div className="relative mb-6">
                            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
                                <img
                                    src={Toga}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-4 right-[calc(50%-60px)] w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center border-4 border-white dark:border-neutral-900">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Clarence Duerme
                        </h3>
                        <p className="text-indigo-500 mb-6">
                            Web Developer
                        </p>


                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:clarenceduerme40@gmail.com"
                                className="flex items-center gap-3 p-3 rounded-lg border text-sm bg-gray-50 dark:bg-neutral-800 hover:bg-indigo-500 hover:text-white transition"
                            >
                                <Mail size={16} />
                                clarenceduerme40@gmail.com
                            </a>

                            <a
                                href="tel:+639766522812"
                                className="flex items-center gap-3 p-3 rounded-lg border text-sm bg-gray-50 dark:bg-neutral-800 hover:bg-indigo-500 hover:text-white transition"
                            >
                                <Phone size={16} />
                                +63 976 652 2812
                            </a>

                            <a
                                href="tel:+639261232826"
                                className="flex items-center gap-3 p-3 rounded-lg border text-sm bg-gray-50 dark:bg-neutral-800 hover:bg-indigo-500 hover:text-white transition"
                            >
                                <Phone size={16} />
                                +63 926 123 2826
                            </a>

                            <a
                                href="https://www.google.com/maps/place/Mamatid,+Cabuyao+City,+Laguna/@14.2346491,121.1633434,8742m/data=!3m1!1e3!4m6!3m5!1s0x33bd62147654b0f5:0xfaaafa6833d28a05!8m2!3d14.2373479!4d121.1509924!16s%2Fm%2F05q4x0c?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                                className="flex items-center gap-3 p-3 rounded-lg border text-sm bg-gray-50 dark:bg-neutral-800 hover:bg-indigo-500 hover:text-white transition"
                            >
                                <MapPin size={16} />
                                Cabuyao Laguna Philippines
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
                            Get to Know Me
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Passionate About Website Development
                        </h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
                        <p>
                            I’m a detail-oriented developer dedicated to building modern,
                            responsive websites that prioritize user experience and
                            functionality.
                        </p>
                        <p>
                            Whether it’s creating a portfolio, business site, or web app, I
                            focus on performance, accessibility, and visual appeal. I thrive
                            in both collaborative and freelance settings.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8 bg-gray-100 dark:bg-neutral-800 p-6 rounded-2xl shadow">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-500">fetching ...</div>
                            <div className="text-sm text-gray-500">
                                Projects Completed
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-500">fetching ...</div>
                            <div className="text-sm text-gray-500">
                                Years Experience
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <span className="text-sm text-gray-400">Specialization</span>
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    UI/UX Web Design & Web Development
                                </p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-400">
                                    Experience Level
                                </span>
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    Entry Level Developer
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <span className="text-sm text-gray-400">Education</span>
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    Bachelor of Science in Computer Science
                                </p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-400">Languages</span>
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    English, Tagalog
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href={CV}
                            download
                        >
                            <ContainedBtn text="Download CV" icon={<Download />} />
                        </a>

                        <a
                            href="#contact"
                        >
                            <OutlinedBtn text="Let's Talk" icon={<MessageCircleMore />} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
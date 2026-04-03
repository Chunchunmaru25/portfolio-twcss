import BorderGlow from "../BorderGlow";
import SpotlightCard from '../SpotlightCard';
import { Mail, Phone } from 'lucide-react'
import About from '../../assets/json/AboutMe.json'
const Contact = function () {
    return (
        <>
            <section id="about" className="py-20 bg-white dark:bg-background">
                <div className="max-w-[80%] mx-auto px-4">
                    <div className="grid lg:grid-cols-[40%_60%] gap-10">
                        <div className="flex">
                            <div className="relative overflow-hidden w-full flex flex-col">
                                <h1>Connect With Me</h1>
                                <hr />
                                <div className="mt-10">
                                    <BorderGlow
                                        edgeSensitivity={100}
                                        glowColor="40 80 80"
                                        // backgroundColor="#060010"
                                        borderRadius={28}
                                        glowRadius={1}
                                        glowIntensity={1}
                                        coneSpread={100}
                                        animated={false}
                                        colors={['#000AFF', '#F714CB', '#A003FF']}
                                    >
                                        <div className="p-5 flex">
                                            <SpotlightCard
                                                className="bg-gradient-to-r from-indigo-500 to-purple-500 custom-spotlight-card flex items-center justify-center size-20"
                                                spotlightColor="rgba(0, 229, 255, 0.2)"
                                            >
                                                <Mail className="text-white" />
                                            </SpotlightCard>
                                            <div className="px-5 flex flex-col justify-center items-start gap-4">
                                                <h1 className="text-2xl">Send Email</h1>
                                                <a href="mailto:clarenceduerme40@gmail.com">clarenceduerme40@gmail.com</a>
                                            </div>
                                        </div>
                                    </BorderGlow>
                                </div>
                                <div className="mt-10">
                                    <BorderGlow
                                        edgeSensitivity={100}
                                        glowColor="40 80 80"
                                        // backgroundColor="#060010"
                                        borderRadius={28}
                                        glowRadius={1}
                                        glowIntensity={1}
                                        coneSpread={100}
                                        animated={false}
                                        colors={['#000AFF', '#F714CB', '#A003FF']}
                                    >
                                        <div className="p-5 flex">
                                            <SpotlightCard
                                                className="bg-gradient-to-r from-indigo-500 to-purple-500 custom-spotlight-card flex items-center justify-center size-20"
                                                spotlightColor="rgba(0, 229, 255, 0.2)"
                                            >
                                                <Phone className="text-white" />
                                            </SpotlightCard>
                                            <div className="px-5 flex flex-col justify-center items-start gap-4">
                                                <h1 className="text-2xl">Call Direct</h1>
                                                <a href={`tel:${About.phone1}`}>{About.phone1Format}</a>
                                                <a href={`tel:${About.phone2}`}>{About.phone2Format}</a>
                                            </div>
                                        </div>
                                    </BorderGlow>
                                </div>

                            </div>
                        </div>

                        <div className="flex">
                            <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 border border-gray-200
                             dark:border-neutral-700 rounded-3xl p-8 text-center shadow-xl overflow-hidden w-full flex flex-col">
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact;
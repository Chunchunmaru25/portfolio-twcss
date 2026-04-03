
import ProfileCard from "@/components/reactbits/ProfileCard";
import { TypingAnimation } from "@/components/ui/typing-animation";
import ContainedBtn from "@/components/twcss/ContainedBtn";
import OutlinedBtn from "@/components/twcss/OutlinedBtn";
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
function Hero() {

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const mode = isDark ? 'dark' : 'light';
    const theme = localStorage.getItem('theme') || mode;
    const path = theme === 'dark'
        ? togaTransShadeImg
        : togaTransImg;

    return (
        <>
            <section className="relative flex flex-col md:flex-row items-center max-w-screen-xl px-4 py-8 mx-auto f-full lg:h-screen">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10 h-full">
                    <div className="text-left w-full">
                        <i className="mb-30">Hi, I'm</i>
                        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                            Clarence <span className="font-bold text-blue-500">Duerme</span>
                        </h2>
                        <p className="text-3xl pt-5">
                            I'm a <span>
                                <TypingAnimation words={["Web Developer"]}
                                    typeSpeed={50}
                                    deleteSpeed={150}
                                    pauseDelay={2000}
                                    loop />
                            </span>
                        </p>
                        <p className="max-w-md mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Passionate about delivering quality creative and technical solutions—whether it’s design, development, or strategy. Let’s turn your ideas into reality!
                        </p>
                        <div className="mt-5 sm:flex md:mt-8">
                            <div className="flex gap-2">
                                <ContainedBtn text="View My Work" />
                                <OutlinedBtn text="Get in Touch" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10 h-full">
                    <div className="relative w-full p-3 rounded-md md:p-8">
                        <ProfileCard
                            name="Clarence Duerme"
                            title="Web Developer"
                            handle="clarenceduerme"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl={path}
                            showUserInfo
                            enableTilt
                            enableMobileTilt
                            onContactClick={() => console.log('Contact clicked')}
                            behindGlowColor="rgba(125, 190, 255, 0.67)"
                            iconUrl="/svg/code.svg"
                            behindGlowEnabled
                            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                        />
                    </div>
                </div>
            </section>

        </>
    )
}
export default Hero;
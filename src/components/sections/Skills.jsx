import RangeProgressWTooltip from "@/components/twcss/RangeProgressWTooltip";
import Skill from '../../assets/json/skills.json';
export default function Skills() {
    const frontendSkills = Skill.frontendSkills;
    const backendSkills = Skill.backendSkills;
    return (
        <>
            <section id="about" className="py-20 bg-white dark:bg-background">
                <div className="max-w-[80%] mx-auto px-4">
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
                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                        <div className="flex">
                            <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-3xl p-8 text-center shadow-xl overflow-hidden w-full flex flex-col">
                                <h1 className="mb-4 flex">Frontend Development</h1>
                                <hr className="w-1/3 bg-gray-400 border rounded-xl h-[3px] mb-5" />
                                <div className="flex-1 flex flex-col justify-start">
                                    {frontendSkills.map((skill, index) => (
                                        <RangeProgressWTooltip
                                            key={index}
                                            language={skill.language}
                                            description={skill.description}
                                            progress={skill.progress}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-3xl p-8 text-center shadow-xl overflow-hidden w-full flex flex-col">
                                <h1 className="mb-4 flex">Backend Development</h1>
                                <hr className="w-1/3 bg-gray-400 border rounded-xl h-[3px] mb-5" />
                                <div className="flex-1 flex flex-col justify-start">
                                    {backendSkills.map((skill, index) => (
                                        <RangeProgressWTooltip
                                            key={index}
                                            language={skill.language}
                                            description={skill.description}
                                            progress={skill.progress}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
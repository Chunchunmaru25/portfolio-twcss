import RangeProgressWTooltip from "@/components/twcss/RangeProgressWTooltip";
import Skill from '../../assets/json/Skills.json';
export default function Skills() {
    const frontendSkills = Skill.frontendSkills;
    const backendSkills = Skill.backendSkills;
    return (
        <>
            <section id="about" className="py-20 bg-white dark:bg-background">
                <div className="max-w-[80%] mx-auto px-4">
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
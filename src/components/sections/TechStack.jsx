import MarqueeImport from "react-fast-marquee";
import Card from "../twcss/PrajapatiCard";
import techData from "../../assets/json/TechData";

const Marquee = MarqueeImport.default;

const TechStack = () => {
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
            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-4">
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                            <p className="whitespace-nowrap">FRONT END WEB DEVELOPMENT TOOLS</p>
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                        </div>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                        Essential tools I use to build modern, responsive, and beautiful web interfaces.
                    </p>
                </div>
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
            </div>

            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-4">
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                            <p className="whitespace-nowrap">BACK END WEB DEVELOPMENT TOOLS</p>
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                        </div>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                        echnologies and tools I use to build secure, scalable, and fast web applications.
                    </p>
                </div>
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
            </div>


            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-4">
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                            <p className="whitespace-nowrap">DATABASE AND SERVERS</p>
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                        </div>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                        Database management systems and server technologies that support scalable applications.
                    </p>
                </div>
                <Marquee
                    autoFill
                    pauseOnHover
                    pauseOnClick
                    direction="left"
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
            </div>

            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-4">
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                            <p className="whitespace-nowrap">DEVELOPMENT TOOLS</p>
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                        </div>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                        Productivity tools, version control, and IDEs that help me code efficiently.
                    </p>
                </div>
                <Marquee
                    autoFill
                    pauseOnHover
                    pauseOnClick
                    direction="right"
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
            </div>

            <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-4">
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                            <p className="whitespace-nowrap">TEMPLATE AND DESIGN TOOLS</p>
                            <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                        </div>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                        Design and prototyping tools that I use for UI/UX and creative workflows.
                    </p>
                </div>
                <Marquee
                    autoFill
                    pauseOnHover
                    pauseOnClick
                    direction="left"
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
        </>
    );
};

export default TechStack;
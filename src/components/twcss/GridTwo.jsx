import React from "react";

const GridTwo = ({
    maxWidth = "80%",
    flexPortion = ["1fr", "1fr"],
    children,
    className = "",
}) => {
    const [leftContent, rightContent] = React.Children.toArray(children);

    const leftFlex = parseFloat(String(flexPortion[0]).replace("fr", "")) || 1;
    const rightFlex = parseFloat(String(flexPortion[1]).replace("fr", "")) || 5;

    return (
        <section
            id="about"
            className="py-20 bg-white dark:bg-background overflow-hidden"
        >
            <div
                className={`mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
                style={{ maxWidth }}
            >
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">

                    {/* Left Column */}
                    <div
                        className="w-full"
                        style={{ flex: leftFlex }}
                    >
                        <div className="
                        relative p-8 overflow-hidden flex flex-col h-full 
                        ">
                            {leftContent}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div
                        className="w-full"
                        style={{ flex: rightFlex }}
                    >
                        <div className="
                        relative p-8 overflow-hidden flex flex-col h-full
                                                bg-gradient-to-br from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 
                        border border-gray-200 dark:border-neutral-700 rounded-3xl shadow-xl
                        ">
                            {rightContent}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GridTwo;
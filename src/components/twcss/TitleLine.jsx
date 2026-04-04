const TitleLine = function ({ title, subtitle }) {
    return (
        <>
            <div className="text-center mb-12 px-4">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                        <span className="h-[2px] w-full sm:flex-1 sm:max-w-[80px] bg-gray-400 rounded"></span>
                        <p className="text-center whitespace-normal my-2 sm:my-0">
                            {title}
                        </p>
                        <span className="h-[2px] w-full sm:flex-1 sm:max-w-[80px] bg-gray-400 rounded"></span>

                    </div>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                    {subtitle}
                </p>
            </div>
        </>
    )
}

export default TitleLine;
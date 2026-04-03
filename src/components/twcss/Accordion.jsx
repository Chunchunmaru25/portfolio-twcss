
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Accordion({
    items = [],
    allowMultiple = false,
    className = '',
}) {
    const [openIds, setOpenIds] = useState(new Set());

    const toggleItem = (id) => {
        setOpenIds((prev) => {
            const newSet = new Set(prev);

            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                if (!allowMultiple) newSet.clear();
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className={`w-full space-y-2 ${className}`}>
            {items.map((item) => {
                const isOpen = openIds.has(item.id);

                return (
                    <div
                        key={item.id}
                        className="border rounded-lg mt-2 py-2 px-5"
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full py-5 flex items-center justify-between text-left group"
                        >
                            <span className="text-lg font-medium text-black dark:text-white group-hover:text-indigo-500 transition-colors">
                                {item.title}
                            </span>

                            <motion.span
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.25 }}
                                className="text-zinc-500 text-xl leading-none"
                            >
                                <svg fill="#ff0000" stroke="#ff0000" width="15px" height="15px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="" d="M488.832 344.32l-339.84 356.672a32 32 0 000 44.16l.384.384a29.44 29.44 0 0042.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0042.688 0l.384-.384a32 32 0 000-44.16L535.168 344.32a32 32 0 00-46.336 0z"></path></g></svg>
                            </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-6 text-zinc-400 text-[15px] leading-relaxed">
                                        {item.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
// USAGE


// export default function Page() {
//     const faqs = [
//         {
//             id: '1',
//             title: 'What is this Morphing Card?',
//             content: 'A smooth interactive card that expands into a full gallery with its own image carousel when clicked.',
//         },
//         {
//             id: '2',
//             title: 'How do I customize each image?',
//             content: 'Pass an array of objects with src, caption, and description. Each image will show its own text when selected.',
//         },
//         {
//             id: '3',
//             title: 'Is it responsive?',
//             content: 'Yes, the card and carousel work beautifully on mobile, tablet, and desktop.',
//         },
//         {
//             id: '4',
//             title: 'Can I use it multiple times?',
//             content: 'Absolutely. Each MorphingCard is independent and fully reusable.',
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-zinc-950 py-16 px-6">
//             <div className="max-w-2xl mx-auto">
//                 <h1 className="text-4xl font-light text-white mb-12 text-center tracking-tight">
//                     Questions
//                 </h1>

//                 <Accordion
//                     items={faqs}
//                     allowMultiple={true}
//                 />
//             </div>
//         </div>
//     );
// }
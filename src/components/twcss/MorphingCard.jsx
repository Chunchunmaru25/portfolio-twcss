'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useId } from 'react';

export default function MorphingCard({
    id,
    title,
    subtitle = '',
    icon = '🃏',
    images = [],
    expandedTitle,
    children,
    className = '',
    techstack = [],
}) {
    const uniqueId = useId();
    const cardId = id || uniqueId;
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const sliderRef = useRef(null);

    const thumbnailSrc = images.length > 0 ? images[0].src : null;

    const currentItem = images[activeIndex] || { src: '', caption: '', description: '' };

    const scrollToActive = (index) => {
        if (!sliderRef.current) return;
        const slides = sliderRef.current.children;
        if (slides[index]) {
            slides[index].scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
            });
        }
    };

    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
        scrollToActive(index);
    };

    const handlePrev = () => {
        const newIndex = (activeIndex - 1 + images.length) % images.length;
        setActiveIndex(newIndex);
        scrollToActive(newIndex);
    };

    const handleNext = () => {
        const newIndex = (activeIndex + 1) % images.length;
        setActiveIndex(newIndex);
        scrollToActive(newIndex);
    };

    useEffect(() => {
        if (!isOpen) setActiveIndex(0);
    }, [isOpen]);

    return (
        <>
            <motion.div
                layout
                layoutId={`morph-card-${cardId}`}
                onClick={() => setIsOpen(true)}
                className={`bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-3xl active:scale-[0.98] transition-shadow ${className}`}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
                <div className="aspect-video bg-zinc-800 relative">
                    {thumbnailSrc ? (
                        <motion.img
                            layoutId={`card-image-${cardId}`}
                            src={thumbnailSrc}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-2xl rounded-3xl flex items-center justify-center text-6xl">
                                    {icon}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-8">
                        <p className="text-white/90 text-sm font-medium tracking-widest flex items-center gap-2">
                            📸 CLICK TO OPEN GALLERY
                        </p>
                    </div> */}

                    {/* <div className="absolute bottom-6 left-6 bg-black/70 text-white text-xs px-4 py-2 rounded-3xl backdrop-blur-md">
                        {title}
                    </div> */}
                </div>

                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2 line-clamp-1">{title}</h3>
                    {subtitle && <p className="text-zinc-400 text-sm ">{subtitle}</p>}
                </div>

                <div className="p-4 flex flex-wrap justify-center gap-1">
                    {techstack.map((tech, index) => (
                        <span
                            key={index}
                            className="text-[10px] bg-gray-500 px-2 py-1 rounded-3xl"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            layout
                            layoutId={`morph-card-${cardId}`}
                            className="bg-zinc-900 rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-video bg-black flex-shrink-0 overflow-hidden">
                                <motion.img
                                    key={activeIndex}
                                    src={currentItem.src}
                                    alt={currentItem.caption || title}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                />

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 bg-black/60 hover:bg-black/80 text-white w-11 h-11 rounded-3xl flex items-center justify-center text-2xl transition-all z-10"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col gap-6 flex-1 overflow-auto">
                                <h2 className="text-3xl font-bold text-white">
                                    {currentItem.caption || expandedTitle || title}
                                </h2>

                                {currentItem.description && (
                                    <p className="text-zinc-300 text-lg leading-relaxed">
                                        {currentItem.description}
                                    </p>
                                )}

                                {children && <div className="text-zinc-300">{children}</div>}

                                {images.length > 1 && (
                                    <div className="image-thumbnail-carousel">
                                        <div className="thumbnail-carousel flex items-center gap-4">
                                            <button
                                                type="button"
                                                className="carousel__btn prev flex-shrink-0"
                                                onClick={handlePrev}
                                            >
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                                </svg>
                                            </button>

                                            <ul
                                                ref={sliderRef}
                                                className="carousel__slider flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
                                            >
                                                {images.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className={`carousel__slide flex-shrink-0 cursor-pointer rounded-xl overflow-hidden border-2 transition-all snap-center ${index === activeIndex ? 'border-blue-500 scale-105' : 'border-transparent'
                                                            }`}
                                                        onClick={() => handleThumbnailClick(index)}
                                                    >
                                                        <div className="thumbnail w-28 md:w-32 aspect-video">
                                                            <img
                                                                src={item.src}
                                                                alt={item.caption || `Image ${index + 1}`}
                                                                loading="lazy"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>

                                            <button
                                                type="button"
                                                className="carousel__btn next flex-shrink-0"
                                                onClick={handleNext}
                                            >
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
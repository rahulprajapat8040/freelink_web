'use client';

import Image from "next/image";
import { Icon } from "../assets/icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import projects from '@/data/projects.json';

const HomeProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(4);

    // Update items per view based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 640) { // mobile
                setItemsPerView(1);
            } else if (window.innerWidth < 768) { // sm
                setItemsPerView(2);
            } else if (window.innerWidth < 1024) { // md
                setItemsPerView(3);
            } else { // lg and above
                setItemsPerView(4);
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const maxIndex = Math.max(0, projects.length - itemsPerView);

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    // Calculate transform percentage - moves one item at a time
    const getTransformPercentage = () => {
        return (currentIndex * 100) / itemsPerView;
    };

    return (
        <section className="py-8 sm:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
                    <div className="text-center sm:text-left">
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
                            The latest freelance work!
                        </h4>
                        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
                            Recently Posted <span className="text-blue-primary">Works</span>
                        </h4>
                    </div>

                    {/* Navigation Arrows */}
                    {maxIndex > 0 && (
                        <div className="flex items-center gap-2 sm:gap-4 self-center sm:self-auto">
                            <button
                                onClick={prevSlide}
                                className={`${currentIndex === 0
                                        ? 'bg-white border border-gray-300'
                                        : 'bg-blue-primary'
                                    } w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-50`}
                                disabled={currentIndex === 0}
                            >
                                <Icon.ArrowLeft
                                    color={currentIndex === 0 ? '#1E88E5' : 'white'}
                                />
                            </button>
                            <button
                                onClick={nextSlide}
                                className={`${currentIndex === maxIndex
                                        ? 'bg-white border border-gray-300'
                                        : 'bg-blue-primary'
                                    } w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-50`}
                                disabled={currentIndex === maxIndex}
                            >
                                <Icon.ArrowRight
                                    color={currentIndex === maxIndex ? '#1E88E5' : 'white'}
                                />
                            </button>
                        </div>
                    )}
                </div>

                {/* Carousel */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${getTransformPercentage()}%)`
                        }}
                    >
                        {projects.map((item, idx) => (
                            <div
                                key={idx}
                                className={`px-2 sm:px-3 flex-shrink-0 ${itemsPerView === 1 ? 'w-full' :
                                        itemsPerView === 2 ? 'w-1/2' :
                                            itemsPerView === 3 ? 'w-1/3' : 'w-1/4'
                                    }`}
                            >
                                <div className="py-4 sm:py-6 flex flex-col items-center justify-center shadow-xl border border-gray-light rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300 h-full">

                                    {/* Logo */}
                                    <div className="mb-4">
                                        <Image
                                            src={'/assets/img/mui.png'}
                                            alt="project logo"
                                            width={50}
                                            height={50}
                                            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center px-4 flex-1 flex flex-col justify-between w-full">
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl py-2 sm:py-3 font-medium text-gray-900">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-dark pb-3 sm:pb-4 text-sm sm:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Footer */}
                                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-100 mt-4">
                                            <div className="text-center sm:text-left">
                                                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                                                    Highest bid
                                                </p>
                                                <p className="text-base sm:text-lg font-semibold text-gray-extra-dark">
                                                    {item.price}
                                                </p>
                                            </div>
                                            <Link
                                                href="/"
                                                className="text-blue-primary font-bold underline underline-offset-2 hover:underline-offset-4 transition-all duration-200 text-sm sm:text-base px-3 py-1 hover:bg-blue-50 rounded-md"
                                            >
                                                Apply
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeProjects;
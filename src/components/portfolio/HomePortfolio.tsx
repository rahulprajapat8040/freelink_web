'use client'
import Image from "next/image";
import { Icon } from "../assets/icons";
import portfolio from '@/data/portfolio.json'
import { useState } from "react";

const HomePortfolio = () => {
    const itemsPerSlide = 3;
    const [currentSlide, setCurrentSlide] = useState(0);

    // Calculate total number of slides
    const totalSlides = Math.ceil(portfolio.length / itemsPerSlide);

    // Get items for current slide
    const getCurrentSlideItems = () => {
        const startIndex = currentSlide * itemsPerSlide;
        const endIndex = startIndex + itemsPerSlide;
        return portfolio.slice(startIndex, endIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <section>
            <div className="max-w-6xl py-3 mx-auto">
                <div>
                    <h3 className="text-3xl text-center py-2 text-gray-dark">
                        Logos, websites, book covers & more!
                    </h3>
                    <h4 className="text-5xl text-center font-medium py-2">
                        Checkout The Best <span className="text-blue-primary">Portfolios</span> Here
                    </h4>
                </div>

                {/* Portfolio Items Container */}
                <div className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
                        {getCurrentSlideItems().map((item, idx) => {
                            const actualIndex = currentSlide * itemsPerSlide + idx;
                            return (
                                <div
                                    key={actualIndex}
                                    className="cursor-pointer overflow-hidden group pb-4 shadow border-gray-light border rounded-lg flex flex-col justify-between items-center animate-fadeIn"
                                >
                                    <Image
                                        src={'/assets/img/portfolio.png'}
                                        alt="portfolio"
                                        width={250}
                                        height={100}
                                        className="w-full group-hover:scale-110 transition-transform duration-300 ease-in h-56 object-cover rounded-lg"
                                    />
                                    <div className="flex w-full px-4 mt-2 py-2 justify-between items-center">
                                        <div>
                                            <h5 className="text-lg font-medium">{item.name}</h5>
                                            <span className="text-gray-dark">{item.category}</span>
                                        </div>
                                        <div className="group-hover:translate-x-2 duration-300">
                                            <Icon.ArrowRight color="#1E88E5" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Egg-shaped Dot Navigation */}
                {totalSlides > 1 && (
                    <div className="flex justify-center items-center mt-8 space-x-3">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none ${currentSlide === index
                                    ? 'bg-blue-primary shadow-lg scale-110 '
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                style={{
                                    width: currentSlide === index ? '34px' : '24px',
                                    height: '16px',
                                    borderRadius: '50px',
                                    border: 'none',
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                {/* Optional: Add inner dot for active state */}
                                {currentSlide === index && (
                                    <div
                                        className="bg-white mx-auto"
                                        style={{
                                            width: '8px',
                                            height: '6px',
                                            borderRadius: '50px',
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </section>
    );
};

export default HomePortfolio;
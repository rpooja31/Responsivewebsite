import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
    return (
        <div className="container pt-8">
            <div className="grid xl:grid-cols-4 gap-8 items-center">
                {/* Left Section (Main Image + Text) */}
                <div className="relative">
                    <img 
                        className="w-full max-w-[500px] h-[300px] object-cover rounded-lg" 
                        src="images/hero__1.webp" 
                        alt="hero image" 
                    />
                    <div className="absolute left-8 sm:left-16 top-[50%] -translate-y-[50%] space-y-2 sm:space-y-4 bg-white/70 p-4 rounded-lg">
                        <p className="text-sm font-medium">100% Original Dry Fruits</p>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">
                            Dried Fruits Best Quality
                        </h2>
                        <p className="text-gray-600 text-base">Starting At</p>
                        <div className="font-medium text-red-600 text-xl sm:text-2xl">$18.36</div>
                        <button className="bg-accentDark hover:bg-accent text-white rounded-full flex items-center gap-1 px-3 py-1 text-[10px] sm:px-4 sm:py-2 sm:text-[12px] cursor-pointer">
                            Shop Now <BsArrowRight size={14} />
                        </button>
                    </div> 
                </div>

                {/* Right Section (Second Image + Text) */}
                <div className="relative">
                    <img 
                        className="w-full max-w-[500px] h-[300px] object-cover rounded-lg inline-block" 
                        src="images/hero__2.webp" 
                        alt="hero image" 
                    />
                    <div className="absolute left-8 sm:left-16 top-[50%] -translate-y-[50%] space-y-2 sm:space-y-4 bg-white/70 p-4 rounded-lg">
                        <p className="text-sm font-medium">Premium Quality Nuts</p>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">
                            Best Yummy Pizza
                        </h2>
                        <p className="text-gray-600 text-base">Starting At</p>
                        <div className="font-medium text-red-600 text-xl sm:text-2xl">$22.50</div>
                        <button className="bg-accentDark hover:bg-accent text-white rounded-full flex items-center gap-1 px-3 py-1 text-[10px] sm:px-4 sm:py-2 sm:text-[12px] cursor-pointer">
                            Shop Now <BsArrowRight size={14} />
                        </button>
                    </div> 
                </div>
                <div className="relative">
                    <img 
                        className="w-full max-w-[500px] h-[300px] object-cover rounded-lg" 
                        src="images/hero__3.webp" 
                        alt="hero image" 
                    />
                    <div className="absolute left-8 sm:left-16 top-[50%] -translate-y-[50%] space-y-2 sm:space-y-4 bg-white/70 p-4 rounded-lg">
                        <p className="text-sm font-medium">100% Original Dry Fruits</p>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">
                              Best Yummy Chips
                        </h2>
                        <p className="text-gray-600 text-base">Starting At</p>
                        <div className="font-medium text-red-600 text-xl sm:text-2xl">$10</div>
                        <button className="bg-accentDark hover:bg-accent text-white rounded-full flex items-center gap-1 px-3 py-1 text-[10px] sm:px-4 sm:py-2 sm:text-[12px] cursor-pointer">
                            Shop Now <BsArrowRight size={14} />
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Hero;


import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";



const Navbar = (props) => {
    return (
        
        <div className="container mx-auto p-4 ">
        <div className="flex  flex-wrap justify-between items-center pt-8">
            <h1 className="text-2xl font-medium">LOGO</h1>

            <div className="relative w-full max-w-[300px]">
                <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Product......"/>
                <CiSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20}/>
            </div>
            <div className="flex gap-4">
            <div className="p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition">
            <FiUser size={22}/>
                </div>
                <div className="p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition relative">
                <CiShoppingCart size={22}/>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2">
              3
            </span>
                    {/* <CardCountBadge size="w-[25px] h-[25px]"/> */}
                </div>
            </div>
          
        </div>
    </div>
    
    );
};

export default Navbar;
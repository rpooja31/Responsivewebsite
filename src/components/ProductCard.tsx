import React from 'react';
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from 'react-icons/ai';

interface PropsType {
    img: string;
    name: string;
    price: string;
}

const ProductCard: React.FC<PropsType> = ({ img, name, price }) => {
    return (
        <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative overflow-hidden">
            <img src={img} alt={name} className="w-full h-auto" />
            <div className="space-y-2 relative p-4">
                {/* Star Ratings */}
                <div className="text-yellow-400 flex gap-[2px] text-[20px]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>

                {/* Product Name */}
                <h3 className="font-medium">{name}</h3> 

                {/* Price */}
                <h3 className="text-2xl font-medium text-red-600">{price}</h3>

                {/* Cart Icon Button */}
                <div className="absolute top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer shadow-lg">
                    <AiOutlineShopping />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


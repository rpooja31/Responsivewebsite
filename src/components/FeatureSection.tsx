import React from 'react';
import { 
    LiaShippingFastSolid, 
    LiaMoneyBillWaveSolid, 
    LiaGiftSolid 
} from "react-icons/lia"; 
import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from './FeatureCard';  

const data = [
    {
        title: "Free Shipping",
        icon: <LiaShippingFastSolid size={40} className="text-accent" />,
    },
    {
        title: "Best Price Guarantee",
        icon: <LiaMoneyBillWaveSolid size={40} className="text-accent" />,
    },
    {
        title: "Free Curbside Pickup",  
        icon: <LiaGiftSolid size={40} className="text-accent" />,
    },
    {
        title: "Support 24/7",
        icon: <FiPhoneCall size={40} className="text-accent" />,
    },
];

const FeatureSection = () => {
    return (
        <div className="container pt-16">
            <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4">
                {data.map((el) => (
                    <FeatureCard key={el.title} title={el.title} icon={el.icon} />
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;


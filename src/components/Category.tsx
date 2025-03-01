import React from 'react';
import CategoryCard from './CategoryCard';

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 products",
        img: "images/category__1.webp"
    },
    {
        id: 1,
        name: "Fresh & Vegetables",
        count: "8 products",
        img: "images/category__2.webp"
    },
    {
        id: 2,
        name: "Canned Goods",
        count: "10 products",
        img: "images/category__3.webp"
    },
    {
        id: 3,
        name: "Bread & Bakery ",
        count: "15 products",
        img: "images/category__4.webp"
    },
    {
        id: 4,
        name: "Fishes",
        count: "15 products",
        img: "images/category__5.webp"
    },
    {
        id: 5,
        name: "Snacks & Beverages",
        count: "15 products",
        img: "images/category__6.webp"
    },
    {
        id: 6,
        name: "Snacks & Beverages",
        count: "15 products",
        img: "images/category__7.webp"
    },
    {
        id: 7,
        name: "Snacks & Beverages",
        count: "15 products",
        img: "images/category__3.webp"
    }
];

const Category = () => {
    return (
        <div className="container pt-16">
            {/* <h2 className="text-2xl font-bold mb-6">Shop by Category</h2> */}
            <div className="grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((el) => (
                    <CategoryCard key={el.id} img={el.img} name={el.name} count={el.count} />
                ))}
            </div>
        </div>
    );
};

export default Category;


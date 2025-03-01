import React from 'react'
import ProductCard from './ProductCard'

const data = [
    {id: 0, img:"images/product__1.webp",name:"Dried Mango", price:"$500"},
    {id: 1, img:"images/product__2.webp",name:"Crunchy Crisps", price:"$300"},
    {id: 2, img:"images/product__3.webp",name:"Jewel Cranberries", price:"$200"},
    {id: 3, img:"images/product__4.webp",name:"Almond organic", price:"$100"},
    {id: 4, img:"images/product__5.webp",name:"Almond organic", price:"$100"},



]

const FeatureSectionBreakfast = (props) => {
    return (
        <div className='container pt-16'>
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h3 className='font-medium text-2xl'>Breakfast & Dairy</h3>
                    <p className='text-gray-600 mt-2'>buy best quality breakfast online from big-basket stop near you</p>
                </div>
                <div className='space-x-4 mt-8 lg:mt-0 flex justify-end items-center'>
                    <button className='feature_btn'>Fruits</button>
                    <button className='text-gray-600 hover:text-accent'> Vegitable</button>
                    <button className='text-gray-600 hover:text-accent'>Bread & Bakery</button>
                </div>    
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8 gap-2'>
                <div>
                    <img src='images/feature__1.webp' alt='banner'/>
                </div>
                {data.map((el) => (
                    <ProductCard
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    price={el.price} />
                    ))}

            </div>
            
            
        </div>
    )
}

export default FeatureSectionBreakfast;

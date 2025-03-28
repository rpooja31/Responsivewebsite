import React from 'react'
interface propsType{
    img: string;
    title:string;
    comment:number;
    date:string;
}

const BlogCard: React.FC<propsType> = ({img,title,date,comment}) => {

    return (
        <div className='space-y-4'>
            <img className='rounded-lg hover:scale-105 transition-transform' src={img} alt=''/>
            <div className='text-accent font-medium'>
                <span>{date}</span>
                <span>{comment}</span>
            </div>
            <h3 className='font-bold text-xl'>{title}</h3>
            
        </div>
    )
}

export default BlogCard

import React, { useState } from 'react'
import items from './data'
import { Link } from 'react-router-dom';
import Navbar from "./Component/navbar";


const Menu = () => {
    
    return (
        <div>
            <Navbar />
            {items.map((item) => {
                const { id, title, img, price, desc } = item;

                return (
                    <div key={id}>
                        <Link to={`/singelMenu/${id}`} className='flex items-center justify-center'>
                            <div className='my-5 w-1/2 rounded-2xl h-82 md:flex'>
                                <div className='md:mx-3 w-full md:w-2/5 md:h-full'>
                                    <img src={img} alt={title} className='h-32 w-56' />
                                </div>
                                <div className=' md:w-3/5 '>
                                    <h1 className=' text-2xl md:text-3xl'>{title}</h1>
                                    <p>Price: {price}$</p>
                                    <p className=' w-96'>{desc}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu;
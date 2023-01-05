import React from 'react'
import { useParams } from 'react-router-dom'
import items from './data'

const SingelMenu = () => {
  const { id } = useParams()


  return (
    <div>
      {items.map((item) => {
        // const { id, title, img, price, desc } = item;
        if (id == item.id) {
          return (
            <div key={item.id} className=' flex justify-center pt-10 '>
              <div className='my-5 w-1/2 rounded-2xl h-82 md:flex justify-center'>
                <div className='md:mx-3 w-full md:w-2/5 md:h-full'>
                  <img src={item.img} alt={item.title} className='h-52 w-72' />
                </div>
                <div className=' md:w-3/5 '>
                  <h1 className=' text-2xl md:text-3xl py-3'>{item.title}</h1>
                  <p>Price: {item.price}$</p>
                  <p className=' w-96 py-3'>{item.desc}</p>
                </div>
              </div>
            </div>
          )
        }
      })
      }
    </div>
  )
}

export default SingelMenu;
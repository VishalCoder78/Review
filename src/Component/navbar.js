import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [topBookOpt, setTopBookOpt] = useState(false);
  const [exploreOpt, setExploreOpt] = useState(false);

  const handelBookOpt = () => {
      setTopBookOpt(!topBookOpt);
  };
  const handelExploreOpt = () => {
      setExploreOpt(!exploreOpt);
  };
  return (
    <header className="header " style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_960_720.jpg")` ,}}>
            <nav className="bg-none text-white py-4 flex justify-center text-lg h-20">

                <a href="/" className="m-5 hover:text-green-400">Home</a>
                <a href="/menu" className="m-5 hover:text-green-400">Genre</a>

                <div className="flex flex-col py-4">
                    <div>
                        <button onClick={handelBookOpt} className="m-1 mx-3 hover:text-green-400">
                            Top Books
                        </button>
                    </div>
                    {topBookOpt && (
                        <div className="flex flex-col items-center my-1">
                            <a href="#" className='hover:text-green-400'>Year</a>
                            <a href="#" className='hover:text-green-400'>Genre</a>
                        </div>
                    )}
                </div>

                <div className="flex flex-col py-4">
                    <div>
                        <button onClick={handelExploreOpt} className="m-1 hover:text-green-400">
                            Explore
                        </button>
                    </div>
                    {exploreOpt && (
                        <div className="flex flex-col items-center my-1">
                            <a href="#" className='hover:text-green-400'>Title</a>
                            <a href="#" className='hover:text-green-400'>Author</a>
                        </div>
                    )}
                </div>
            </nav>
            <div className=" h-full">
                <div className="flex items-center justify-center h-full">
                    <h1 className="lg:text-5xl text-2xl text-center mb-20 w-1/2  text-white ">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h1>
                </div>
            </div>
        </header>
  )
}

export default Navbar;
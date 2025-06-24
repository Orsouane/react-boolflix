import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import VideoPlayer from './VideoPlayer';
import { useContext } from "react";

import { GlobalContext } from "../Context/GlobalContext";
import Slider from "react-slick";
import Card from "./Card";
import SplitText from './Text';
function Jumbutron() {
     const offset = window.innerWidth < 600 ? 710 : window.innerWidth < 1024 ? 950 : 820;
     const RefScroll = useRef()
  
    return( 
    <>
        
         <div className=" text-white flex flex-col items-center justify-center  "  >
              <section className='boxShad text-center' style={{ padding: "10px", marginBottom: "20px" }}>
 <SplitText />

                        <button className="w-28 rounded-2xl sm:w-38 lg:w-48 shadow-2xl  bg-gradient-to-r from-red-500 via-red-100 to-red-300 bg-clip-text text-transparent font-bold border border-red-500 duration-200 animate-pulse  py-2  cursor-pointer" onClick={() => window.scrollBy({ top: offset, behavior: 'smooth' })} >
                        Explore Now
                   </button>


              </section>
              <div className='px-4 pb-50 sm:pd-50' >
                   <VideoPlayer />
              </div>
              {/* EXPLORE SERIES AND MOVIES */}
              
              <section className='flex flex-col gap-40 '>
                        <section>

                             <NavLink to="/MainMovie" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold   rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex gap-1 items-center" style={{ padding: 5, marginTop: 20, marginBottom: 10 }}>
                                  <span ref={RefScroll} >🎬 </span> See More Movies
                                  <span className='animate-bounce ' style={{ animationDelay: '200ms' }}> .</span>
                                  <span className='animate-bounce ' style={{ animationDelay: '400ms' }}>.</span>
                                  <span className='animate-bounce ' style={{ animationDelay: '600ms' }}>.</span>
                             </NavLink>
                             <CarouselMovie />
                        </section>
                        <section>
                             <NavLink to="/MainMovie" className="group bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700  py-3 px-6 rounded-lg  hover:scale-105 shadow-lg text-white font-bold   transition-all duration-300 transform  flex gap-1 items-center" style={{ padding: 5, marginTop: 20, marginBottom: 10 }}>
                                  <span>📺 </span> See More Series
                                  <span className='animate-bounce ' style={{ animationDelay: '200ms' }}> .</span>
                                  <span className='animate-bounce ' style={{ animationDelay: '400ms' }}>.</span>
                                  <span className='animate-bounce ' style={{ animationDelay: '600ms' }}>.</span>
                             </NavLink>
                             <ExploreSerie />
                        </section>
              </section>
              
            
            
         </div >
         
    </>
   )
}

//?Function carousel
//*Movies

function CarouselMovie() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: " w-[330px] md:w-[800px] lg:w-[1200px] "

    };
    const { Movies, searchDone } = useContext(GlobalContext);
    return (
    
              <section className="flex justify-center " >
                   <Slider {...settings} >
                        {Movies && Movies.length > 0 ? (
                             Movies.slice(0, 6).map((movie) => (
                                  <div key={movie.id} >
                                       <p className='text-xs'>{movie.title.length > 12 ?  movie.title.slice(0, 12)+"..."  : movie.title}</p>
                                       <Card movie={movie} searchDone={searchDone} />
                                  </div>
                             ))
                        ) : (
                             <p>No movie found.</p> // Display a message if no movies are found
                        )}
                   </Slider>
              </section>



    )
}
//*Series
function ExploreSerie() {
    const settings = {
        dots: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: " w-[330px] md:w-[800px] lg:w-[1200px] "

    };
    const { Series, searchDone } = useContext(GlobalContext);
     console.log(Series.title)

    return (
        <section className="flex justify-center pb-50">
            <Slider {...settings} >
                {Series && Series.length > 0 ? (
                    Series.slice(0, 6).map((Serie) => (
                         
                        <div key={Serie.id} >
               
                                   <p className='text-xs'>{Serie.original_name.length > 12 ? Serie.original_name.slice(0, 12) + "..." : Serie.original_name}</p>
                            <Card movie={Serie} searchDone={searchDone} />
                        </div>
                    ))
                ) : (
                    <p>No Series found.</p> // Display a message if no movies are found
                    
                )}
                
            </Slider>
        </section >




    )

}


export default Jumbutron

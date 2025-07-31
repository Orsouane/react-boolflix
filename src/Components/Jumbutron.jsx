import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import VideoPlayer from './VideoPlayer';
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Slider from "react-slick";
import Card from "./Card";
import SplitText from './Text';

function Jumbutron() {
     const RefScroll = useRef()

     return (
          <div className="text-white flex flex-col items-center justify-center">
               <section className='boxShad text-center' style={{ padding: "10px" }}>
                    <SplitText />
               </section>

               <section className='flex flex-col gap-20'>
                    <section>
                         <NavLink to="/MainMovie" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex gap-1 items-center justify-center" style={{ padding: 5, marginBottom: 20 }}>
                              <span ref={RefScroll}>🎬 </span> See More Movies
                              <span className='animate-bounce' style={{ animationDelay: '200ms' }}> .</span>
                              <span className='animate-bounce' style={{ animationDelay: '400ms' }}>.</span>
                              <span className='animate-bounce' style={{ animationDelay: '600ms' }}>.</span>
                         </NavLink>
                         <CarouselMovie />
                    </section>

                    <section className=''>
                         <NavLink to="/MainMovie" className="group bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 py-3 px-6 rounded-lg hover:scale-105 shadow-lg text-white font-bold transition-all duration-300 transform flex gap-1 items-center justify-center" style={{ padding: 5, marginTop: 20, marginBottom: 20 }}>
                              <span>📺 </span> See More Series
                              <span className='animate-bounce' style={{ animationDelay: '200ms' }}> .</span>
                              <span className='animate-bounce' style={{ animationDelay: '400ms' }}>.</span>
                              <span className='animate-bounce' style={{ animationDelay: '600ms' }}>.</span>
                         </NavLink>
                         <ExploreSerie />
                    </section>
               </section>
          </div>
     )
}

//*Movies
function CarouselMovie() {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          arrows: true,
          slidesToShow: window.innerWidth < 600 ? 3 : window.innerWidth < 1200 ? 3 : 6,
          slidesToScroll: 1,
          className: "!mx-auto w-[290px] md:w-[620px] lg:w-[1200px]"
     };
     const { Movies, searchDone } = useContext(GlobalContext);
     return (
          <section className="flex justify-center ">
               <Slider {...settings}>
                    {Movies && Movies.length > 0 ? (
                         (window.innerWidth < 600
                              ? Movies.slice(0, 3)
                              : window.innerWidth < 1200
                                   ? Movies.slice(0, 4)
                                   : Movies.slice(0, 6)
                         ).map((movie) => (
                              <div key={movie.id}>
                                   <p className="text-xs">
                                        {movie.title.length > 12 ? movie.title.slice(0, 12) + "..." : movie.title}
                                   </p>
                                   <Card movie={movie} searchDone={searchDone} />
                              </div>
                         ))
                    ) : (
                         <p>No movie found.</p>
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
          slidesToShow: window.innerWidth < 600 ? 3 : window.innerWidth < 1200 ? 3 : 6,
          slidesToScroll: 1,
          className: "mx-auto w-[290px] md:w-[620px] lg:w-[1200px]"
     };
     const { Series, searchDone } = useContext(GlobalContext);

     return (
          <section className="flex justify-center pb-50">
               <Slider {...settings}>
                    {Series && Series.length > 0 ? (
                         Series.slice(0, 6).map((Serie) => (
                              <div key={Serie.id}>
                                   <p className='text-xs'>
                                        {Serie.original_name.length > 12 ? Serie.original_name.slice(0, 12) + "..." : Serie.original_name}
                                   </p>
                                   <Card movie={Serie} searchDone={searchDone} />
                              </div>
                         ))
                    ) : (
                         <p>No Series found.</p>
                    )}
               </Slider>
          </section>
     )
}

export default Jumbutron

import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import VideoPlayer from './VideoPlayer';
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Slider from "react-slick";
import Card from "./Card";
function Jumbutron() {
    return (
        <div className=" text-white flex flex-col items-center justify-center gap-3 " style={{ paddingTop: "10px", paddingBottom: "100px" }}  >
            <section className='boxShad' style={{ padding: "10px", marginBottom: "20px" }}>
                <div className='text-[2rem] sm:text-8xl text-center ' style={{ paddingBottom: "20px" }}>
                    Film, serie TV e tanto altro, <br /> senza limiti </div >

                <NavLink to="/MainMovie" className="w-48 sm:w-64 lg:w-96 boxShad2" style={{ display: "flex", margin: "auto", padding: "20px" }} >
                    <img src="./flags/Explore.png" alt="" />
                </NavLink>

                <VideoPlayer />
            </section>
            {/* EXPLORE SERIES AND MOVIES */}
            <NavLink to="/MainMovie" className="w-48 sm:w-64 lg:w-96 ">
                <img src="./flags/moremovies.gif" alt="" />
            </NavLink>
            <CarouselMovie />
            <NavLink to="/MainSerie" className="w-48 sm:w-64 lg:w-96 " style={{ paddingTop: "40px" }}>
                <img src="./flags/moreseries.gif" alt="" />
            </NavLink>
            <ExploreSerie />
        </div >
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
        className: " w-[330px] md:w-[650px] lg:w-[1000px] "

    };
    const { Movies, searchDone } = useContext(GlobalContext);
    return (
        <section className="flex justify-center">
            <Slider {...settings} >
                {Movies && Movies.length > 0 ? (
                    Movies.slice(0, 6).map((movie) => (
                        <div key={movie.id} >
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
        slidesToShow: 5,
        slidesToScroll: 1,
        className: " w-[330px] md:w-[650px] lg:w-[1000px] "

    };
    const { Series, searchDone } = useContext(GlobalContext);
    return (
        <section className="flex justify-center">
            <Slider {...settings} >
                {Series && Series.length > 0 ? (
                    Series.slice(0, 6).map((Serie) => (
                        <div key={Serie.id} >
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

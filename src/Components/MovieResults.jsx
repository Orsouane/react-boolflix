import React, { useState, useRef, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "./Card"; // Import the custom Card component
import Slider from "react-slick";
import Form from "./Form";

function MoviesResults() {


  return (
    <>
      <section className="w-[100%] h-[100vh]"   >
        <div className="text-white" style={{ paddingBottom: "80px" }} >
          <Form />
        </div>
        <div className="flex justify-center  " >
          <img className="h-8 " src="/flags/logo1.png" alt="" />

        </div>
        <CarouselMovie />
      </section>
    </>

  );
}
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
            <div key={movie.id} className="w-[150px]">
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

export default MoviesResults;

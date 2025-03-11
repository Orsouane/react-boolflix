import React from "react";
import CreateStars from "../Components/Stars"
import GetFlagCode from "../Components/Flags"
import { baseUrl } from "../Api/Config";
const getImageUrl = (poster_path, size = "w342") => {
  return `${baseUrl}${size}${poster_path}`;
};
<>
//?creation of flags
  <GetFlagCode />
//?creation of the stars
  <CreateStars />
</>
//?Generare le cards
function Card({ movie, searchDone }) {
  return (
    <div className=" ">
      <div className="card-img-container">
        {/* Overlay che sarà visibile con il hover */}
        <div className="card-overlay ">

          <p className="flex w-20 text-white  items-center"> <span className="text-xs">Vote: </span> {CreateStars(movie.vote_average)}</p>
          <h3 className="sm:xs">{movie.title}</h3>
          <p className="flex  text-white  w-20 items-center"> <span className="text-xs">Lang: </span>
            <img
              className="w-3"
              src={`/flags/${GetFlagCode(movie.original_language)}`}
              alt={movie.original_language}
            />

          </p>
        </div>

        {/* L'immagine sottostante non deve essere duplicata */}
        <img
          src={getImageUrl(movie.poster_path, "w342")}
          className="card-img-top"
          alt={movie.title}
        />
      </div>

      {/* If searchDone is false, display a simple image, otherwise show detailed information */}
      {searchDone &&
        <div className="details">

          <p className="title">{movie.title}</p>
          <div className="slide">
            <p className=" text-white text-[7px] sm:text-[14px]">
              {movie.overview.slice(0, 150)}
            </p>
            <p className="flex  text-white  w-20 items-center"> <span className="text-xs">Lang: </span>
              <img
                className="w-3"
                src={`/flags/${GetFlagCode(movie.original_language)}`}
                alt={movie.original_language}
              />

            </p>
            <p className="flex w-20 text-white  items-center"> <span className="text-xs">Vote: </span> {CreateStars(movie.vote_average)}</p>
          </div>
        </div>
      }

    </div>

  );
}

export default Card;

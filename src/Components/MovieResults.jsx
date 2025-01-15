import React, { useState, useRef, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { FaStar, FaRegStar } from "react-icons/fa";

const langFlag = ["en", "it", "fr", "es", "de", "us", "ja", "ko"];

function MoviesResults() {
  const { Movies, searchDone } = useContext(GlobalContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const getFlagCode = (original_language) => {
    const code = langFlag.includes(original_language.toLowerCase())
      ? `${original_language.toLowerCase()}.png`
      : "placeholder.jpg";
    return code;
  };

  const CreateStars = (vote_average) => {
    const stars = [];
    const maxStars = 5;
    const star = Math.ceil(vote_average / 2);
    for (let i = 0; i < maxStars; i++) {
      stars.push(
        i < star ? (
          <FaStar key={i} style={{ color: "yellow" }} />
        ) : (
          <FaRegStar key={i} />
        )
      );
    }
    return stars;
  };

  const getImageUrl = (poster_path, size = "w342") => {
    const baseUrl = "http://image.tmdb.org/t/p/";
    return `${baseUrl}${size}${poster_path}`;
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setScrollPosition(scrollPosition + 300);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setScrollPosition(scrollPosition - 300);
    }
  };

  return (
    <>
      <div className="container">
        <h3>Film Trovati</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={scrollLeft} className="button-left2 button-54">
            &#8592;
          </button>
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              overflowX: "auto",
              paddingBottom: "10px",
              flex: 1,
              gap: "10px",
            }}
          >
            {Movies &&
              Movies.map((movie) => (
                <div
                  className="card"
                  key={movie.id}
                  style={{
                    minWidth: "200px",
                    marginRight: "10px",
                    flexShrink: 0,
                  }}
                >
                  <div className="card-img-container">
                    {!searchDone ? (
                      <img
                        src={getImageUrl(movie.poster_path, "w342")}
                        className="card-img-top"
                        alt={movie.name}
                      />
                    ) : (
                      <div className="card-body">
                        <img
                          src={getImageUrl(movie.poster_path, "w342")}
                          className="card-img-top"
                          alt={movie.name}
                        />
                        <h5 className="card-title">{movie.title}</h5>
                        <div className="card-text">
                          <span> lingua : </span>
                          <img
                            className="flags"
                            src={`/flags/${getFlagCode(
                              movie.original_language
                            )}`}
                            alt=""
                          />
                        </div>
                        <p> Voto:{CreateStars(movie.vote_average)}</p>
                      </div>
                    )}
                    <div className="card-overlay">
                      <h3>{movie.title}</h3>
                      <p> Voto:{CreateStars(movie.vote_average)}</p>
                      <img
                        className="flags"
                        src={`/flags/${getFlagCode(movie.original_language)}`}
                        alt={movie.original_language}
                      />
                      <p className="text-center m-2">
                        {movie.overview.slice(0, 150)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button className="button-54 button-right" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
}

export default MoviesResults;

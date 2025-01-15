import { FaStar, FaRegStar } from "react-icons/fa";

import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
const langFlag = ["en", "it", "fr", "es", "de", "us", "ja", "ko"];
function MoviesResults() {
  const { Movies, searchDone } = useContext(GlobalContext);
  const getFlagCode = (original_language) => {
    const code = langFlag.includes(original_language.toLowerCase())
      ? `${original_language.toLowerCase()}.png`
      : "placeholder.jpg";
    return code;
  };

  // Creazione del,le stelle
  function CreateStars(vote_average) {
    let stars = [];
    let maxStars = 5;
    const star = Math.ceil(vote_average / 2);
    for (let i = 0; i <= maxStars; i++) {
      if (i < star) {
        stars.push(<FaStar key={i} style={{ color: "yellow" }} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  }
  // contruire l'url
  const getImageUrl = (poster_path, size = "w342") => {
    const baseUrl = "http://image.tmdb.org/t/p/";
    return `${baseUrl}${size}${poster_path}`;
  };
  return (
    <>
      <h3>Film Trovati</h3>
      <div className="row">
        {Movies &&
          Movies.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-4">
              <div className="card">
                <div className="card-img-container">
                  {/* Se searchDone è false, mostra solo l'immagine */}
                  {!searchDone ? (
                    <img
                      src={getImageUrl(movie.poster_path, "w342")}
                      className="card-img-top"
                      alt={movie.name}
                    />
                  ) : (
                    <div className="card-body">
                      {/* Se searchDone è true, mostra i dettagli con l'immagine*/}
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
                          src={`/flags/${getFlagCode(movie.original_language)}`}
                          alt=""
                        />
                      </div>
                      <p> Voto:{CreateStars(movie.vote_average)}</p>
                    </div>
                  )}
                  {/* overlay */}
                  <div className="card-overlay">
                    <h3>{movie.title}</h3>
                    <p> Voto:{CreateStars(movie.vote_average)}</p>
                    <img
                      className="flags"
                      src={`/flags/${getFlagCode(movie.original_language)}`}
                      alt={movie.original_language}
                    />
                    <p className="text-center m-2">{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MoviesResults;

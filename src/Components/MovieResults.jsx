import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

function MoviesResults() {
  const { Movies, searchDone } = useContext(GlobalContext);

  return (
    <>
      <h3>Film Trovati</h3>
      <div className="row">
        {Movies &&
          Movies.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-4">
              <div className="card">
                {/* Se searchDone è false, mostra solo l'immagine */}
                {!searchDone ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                  />
                ) : (
                  <div className="card-body">
                    {/* Se searchDone è true, mostra i dettagli */}
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      className="card-img-top"
                      alt={movie.title}
                    />
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">
                      {"Lingua: " + movie.original_language}
                    </p>
                    <p className="card-text">{"Voto: " + movie.vote_average}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MoviesResults;

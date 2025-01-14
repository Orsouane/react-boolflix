import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

function SeriesResults() {
  const { Series, searchDone } = useContext(GlobalContext);

  return (
    <>
      <h3>Serie Trovate</h3>
      <div className="row">
        {Series &&
          Series.map((serie) => (
            <div key={serie.id} className="col-md-3 mb-4">
              <div className="card">
                {/* Se searchDone è false, mostra solo l'immagine */}
                {!searchDone ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    className="card-img-top"
                    alt={serie.name}
                  />
                ) : (
                  <div className="card-body">
                    {/* Se searchDone è true, mostra i dettagli */}
                    <img
                      src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                      className="card-img-top"
                      alt={serie.name}
                    />
                    <h5 className="card-title">{serie.name}</h5>
                    <p className="card-text">
                      {"Lingua: " + serie.original_language}
                    </p>
                    <p className="card-text">{"Voto: " + serie.vote_average}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default SeriesResults;

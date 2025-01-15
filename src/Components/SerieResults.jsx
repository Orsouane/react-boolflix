import { useContext, useState, useRef } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { FaStar, FaRegStar } from "react-icons/fa";
const langFlag = ["en", "it", "fr", "es", "de", "us", "ja", "ko"];

function SeriesResults() {
  const { Series, searchDone } = useContext(GlobalContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);
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
  const getImageUrl = (poster_path, size = "w500") => {
    const baseUrl = "http://image.tmdb.org/t/p/";
    return `${baseUrl}${size}${poster_path}`;
  };
  // funciozne per scorrere a destra
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setScrollPosition(scrollPosition + 300);
    }
  };
  // funciozne per scorrere a destra
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setScrollPosition(scrollPosition - 300);
    }
  };
  return (
    <>
      <h3>Serie Trovati</h3>
      <div className="container">
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
            {Series &&
              Series.map((serie) => (
                <div
                  className="card"
                  key={serie.id}
                  style={{
                    minWidth: "200px",
                    marginRight: "10px",
                    flexShrink: 0,
                  }}
                >
                  <div className="card-img-container">
                    {/* Se searchDone è false, mostra solo l'immagine */}
                    {!searchDone ? (
                      <img
                        src={getImageUrl(serie.poster_path, "w342")}
                        className="card-img-top"
                        alt={serie.name}
                      />
                    ) : (
                      <div className="card-body">
                        {/* Se searchDone è true, mostra i dettagli con l'immagine*/}
                        <img
                          src={getImageUrl(serie.poster_path, "w342")}
                          className="card-img-top"
                          alt={serie.name}
                        />
                        <h5 className="card-title">{serie.title}</h5>
                        <div className="card-text">
                          <span> lingua : </span>
                          <img
                            className="flags"
                            src={`/flags/${getFlagCode(
                              serie.original_language
                            )}`}
                            alt=""
                          />
                        </div>
                        <p> Voto:{CreateStars(serie.vote_average)}</p>
                      </div>
                    )}
                    {/* overlay */}
                    <div className="card-overlay">
                      <h3>{serie.title}</h3>
                      <p> Voto:{CreateStars(serie.vote_average)}</p>
                      <img
                        className="flags"
                        src={`/flags/${getFlagCode(serie.original_language)}`}
                        alt={serie.original_language}
                      />
                      <p className="text-center m-2">
                        {serie.overview.slice(0, 150)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button className="button-54 button-right2" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
}

export default SeriesResults;

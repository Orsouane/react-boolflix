import axios from "axios";
import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
function Header() {
  const { setMovies, setSeries, handleSearch } = useContext(GlobalContext);
  const [query, setQuery] = useState(""); //stato del query
  const [selection, setSelection] = useState(""); // stato del selection

  // function er gestire l'input
  function handlenput(e) {
    setQuery(e.target.value);
  }

  // function per gestire il form
  async function handleSubmit(e) {
    e.preventDefault();
    const url = "https://api.themoviedb.org/3/";
    const apikey = "1178f9d163f3f6e6446146dc43c4f22e";
    const movieEndpoint = `search/movie?api_key=${apikey}&query=${query}`;
    const tvEndpoint = `search/tv?api_key=${apikey}&query=${query}`;

    try {
      const movieResponse = await axios.get(`${url}${movieEndpoint}`);
      setMovies(movieResponse.data.results);
      const tvResponse = await axios.get(`${url}${tvEndpoint}`);
      setSeries(tvResponse.data.results);
      handleSearch();
    } catch (error) {
      console.error("errore durante la ricerca", error);
    }
  }
  // fuznione per gestire dal select i film che siano POPULARE O NON
  async function handleSelectioneChange(e) {
    const selectOption = e.target.value;
    setSelection(selectOption);
    const url = "https://api.themoviedb.org/3/";
    const apikey = "1178f9d163f3f6e6446146dc43c4f22e";
    let endPoint = "";
    //  Gestisco la selection e costruisco l'end point in base alal ricerca
    if (selectOption === "film_populare") {
      endPoint = "movie/popular";
    } else if (selectOption === "film_non_populare") {
      endPoint = "movie/popular";
    } else if (selectOption === "serie_populare") {
      endPoint = "tv/popular";
    } else if (selectOption === "serie_non_populare") {
      endPoint = "tv/popular";
    }

    try {
      const res = await axios.get(`${url}${endPoint}?api_key=${apikey}`);
      // FILTRO LE FILM E LE SERIE ON POPULARITà BASSA
      if (selectOption === "film_populare") {
        const filtredResults = res.data.results.filter(
          (item) => item.popularity > 1800
        );
        setMovies(filtredResults);
      } else if (selectOption === "film_non_populare") {
        const filtredResults = res.data.results.filter(
          (item) => item.popularity < 1800
        );
        setMovies(filtredResults);
      } else if (selectOption === "serie_populare") {
        const filtredResults = res.data.results.filter(
          (item) => item.popularity < 2500
        );
        setSeries(filtredResults);
      } else if (selectOption === "serie_non_populare") {
        const filtredResults = res.data.results.filter(
          (item) => item.popularity < 2500
        );
        setSeries(filtredResults);
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <div className="bg-black p-3">
      <div className="d-flex justify-content-between ">
        <div className="w-25 text-danger">
          <img style={{ width: "200px" }} src="/flags/logo.png" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <select
            className="form-select w-50"
            aria-label="Default select example "
            onChange={handleSelectioneChange}
            value={selection}
          >
            <option>Popularità</option>
            <option value="film_populare">Film Populare</option>
            <option value="film_non_populare"> Film Non Populare</option>
            <option value="serie_populare">Serie Populare</option>
            <option value="serie_non_populare"> Serie Non Populare</option>
          </select>

          {/* search */}
          <nav className="navbar navbar-light  ">
            <form className="form-inline d-flex " onSubmit={handleSubmit}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search "
                aria-label="Search"
                onChange={handlenput}
              />
              <button className="btn btn-danger my-2 my-sm-0" type="submit">
                Cerca
              </button>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

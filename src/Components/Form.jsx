import axios from "axios";

import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { url, REACT_APP_API_KEY, MovieEndpoint, tvEndPoint } from "../Api/Config"
function Form() {
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
    try {
      const movieResponse = await axios.get(`${url}${MovieEndpoint}&query=${query}`);
      setMovies(movieResponse.data.results);
      const tvResponse = await axios.get(`${url}${tvEndPoint}&query=${query}`);
      setSeries(tvResponse.data.results);
      handleSearch();
    } catch (error) {
      console.error("errore durante la ricerca", error);
    }
  }
  //* funzione per gestire dal select i film che siano POPULARE O NON
  async function handleSelectioneChange(e) {
    const selectOption = e.target.value;
    setSelection(selectOption);
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
      const res = await axios.get(`${url}${endPoint}?api_key=${REACT_APP_API_KEY}`);
      // FILTRO LE FILM E LE SERIE ON POPULARITà BASSA
      if (selectOption === "film_populare") {
        const filtredResults = res.data.results.filter(
          (item) => item.popularity > 500
        );
        setMovies(filtredResults);
      } else if (selectOption === "film_non_populare") {
        const filtredResults = res.data.results.filter(
          (item) => item.popularity < 500
        );
        setMovies(filtredResults);
      } else if (selectOption === "serie_populare") {
        const filtredResults = res.data.results.filter(
          (item) => item.popularity > 1500
        );
        setSeries(filtredResults);
      } else if (selectOption === "serie_non_populare") {
        const filtredResults = res.data.results.filter(
          (item) => item.popularity < 1500
        );
        setSeries(filtredResults);
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <div className="flex justify-center  gap-10 boxShad  bg-red-200 " style={{ paddingTop: "20px", paddingBottom: "20px", marginBottom: "20px" }} >
            <section className="">
        <select
          className="form-select w-24 sm:w-36 lg:w-48 bg-stone-700   "
          aria-label="Default select example "
          onChange={handleSelectioneChange}
          value={selection}
        >
          <option className="text-xs  ">Popularity</option>
          <option value="film_populare" className="text-xs ">Popular Movies</option>
          <option value="film_non_populare" className="text-xs ">Unpopular Movies</option>
          <option value="serie_populare" className="text-xs ">Popular Series</option>
          <option value="serie_non_populare" className="text-xs ">Unpopular Series</option>
        </select>
      </section>

      {/* search */}
      <section className="flex ">
        <nav className="navbar navbar-light flex  ">
          <form className="form-inline flex gap-2  " onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-2 w-24 border-1 border-stone-500 sm:w-36 lg:w-48"
              type="search"
              placeholder="Search "
              aria-label="Search"
              onChange={handlenput}
            />
            <button className="btn  border-1 border-stone-500  " type="submit">
              Search
            </button>
          </form>
        </nav>
      </section>



    </div>


  );
}

export default Form;

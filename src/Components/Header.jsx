import axios from "axios";
import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
function Header() {
  const { setMovies, setSeries, handleSearch } = useContext(GlobalContext);
  const [query, setQuery] = useState("");
  function handlenput(e) {
    setQuery(e.target.value);
  }

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

  return (
    <div className="bg-black p-3">
      <div className="d-flex justify-content-between ">
        <h2 className="w-25 text-danger"> Boolflix</h2>
        <div className="d-flex  justify-content-end  align-items-center g-5 ">
          <select
            className="form-select w-50"
            aria-label="Default select example "
          >
            <option>Tutti i generi</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          {/* search */}
          <nav className="navbar navbar-light ">
            <form className="form-inline d-flex" onSubmit={handleSubmit}>
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

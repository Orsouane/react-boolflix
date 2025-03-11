import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { url, REACT_APP_API_KEY, MovieEndPt, SerieEndPt } from "../Api/Config"
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [Movies, setMovies] = useState([]);
  const [Series, setSeries] = useState([]);
  // lo stato della ricerca (inizialmente false (non è fatta la ricerca ancora))
  const [searchDone, setSearchDone] = useState(false);
  // è true solo dopo la ricerca(Funzioine per gestire la ricerca )
  const handleSearch = () => {
    // quando la ricerca è fata aggiorno lo stato in "true"
    setSearchDone(true);
  };

  useEffect(() => {
    //* FUNCTION TO GET MOVIES DATA
    const getMoviesData = async () => {
      try {
        const res = await axios.get(`${url}${MovieEndPt}?api_key=${REACT_APP_API_KEY}`);
        // UPDATING AFTER RECIEVING MOVIE DATA
        setMovies(res.data.results.slice(8, 16));
      } catch (error) {
        // IN CASE THERE IS AN ERROR
        console.error("Error fetching movies:", error);
      }
    };
    //* FUNCTION TO GET SERIES DATA
    const getSeriesData = async () => {
      try {
        const response = await axios.get(
          `${url}${SerieEndPt}?api_key=${REACT_APP_API_KEY}`
        );
        // UPDATING  SERIES AFTER RECIEVING DATA
        setSeries(response.data.results);
      } catch (error) {
        // IN CASE THERE IS AN ERROR
        console.error("Error fetching series:", error);
      }
    };
    //? CALL THE 2 FUNCTIONS AFTER RECIEVING DATA
    getSeriesData();
    getMoviesData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        Movies,
        Series,
        setMovies,
        setSeries,
        searchDone,
        setSearchDone,
        handleSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };

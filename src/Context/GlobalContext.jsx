import axios from "axios";
import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const url = "https://api.themoviedb.org/3/";
const apikey = "1178f9d163f3f6e6446146dc43c4f22e";
const MovieEndPoint = "movie/popular";
const SerieEndPoint = "tv/popular";

const GlobalProvider = ({ children }) => {
  const [Movies, setMovies] = useState([]);
  const [Series, setSeries] = useState([]);
  const [searchDone, setSearchDone] = useState(false);
  // è true solo dopo la ricerca
  const handleSearch = () => {
    setSearchDone(true);
  };

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const res = await axios.get(`${url}${MovieEndPoint}?api_key=${apikey}`);
        setMovies(res.data.results.slice(8, 16));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const getSeriesData = async () => {
      try {
        const response = await axios.get(
          `${url}${SerieEndPoint}?api_key=${apikey}`
        );
        setSeries(response.data.results.slice(0, 8));
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };

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

// importo axios
import axios from "axios";
// importo from react
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
const url = "https://api.themoviedb.org/3/";
const apikey = "1178f9d163f3f6e6446146dc43c4f22e";
const MovieEndPoint = "movie/popular";
const SerieEndPoint = "tv/popular";

const GlobalProvider = ({ children }) => {
  const [Movies, setMovies] = useState([]);
  const [Series, setSeries] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const res = await axios.get(`${url}${MovieEndPoint}?api_key=${apikey}`);
        setMovies(res.data.results.slice(8, 16));
      } catch (error) {
        console.error("error", error);
      }
    };
    const getSeriesData = async () => {
      try {
        const response = await axios.get(
          `${url}${SerieEndPoint}?api_key=${apikey}`
        );

        console.log(response.data.results);
        setSeries(response.data.results.slice(14, 20));
      } catch (error) {
        console.error("error", error);
      }
    };
    getSeriesData();
    getMoviesData();
  }, []);
  return (
    <GlobalContext.Provider value={{ Movies, Series }}>
      {children}
    </GlobalContext.Provider>
  );
};

// espotazione del contexto
export { GlobalProvider, GlobalContext };

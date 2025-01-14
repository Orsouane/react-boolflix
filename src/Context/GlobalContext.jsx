// importo axios
import axios from "axios";
// importo from react
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
const url = "https://api.themoviedb.org/3/";
const apikey = "1178f9d163f3f6e6446146dc43c4f22e";
const MovieEndPoint = "movie/popular";
const serieEndPoint = "tv/popular";

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
    getMoviesData();
  }, []);
  return (
    <GlobalContext.Provider value={{ Movies }}>
      {children}
    </GlobalContext.Provider>
  );
};

// espotazione del contexto
export { GlobalProvider, GlobalContext };

import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Cards from "./MovieCards";
function Movies() {
  const { Movies } = useContext(GlobalContext);

  console.log(Movies);
  const imgUrl = "https://image.tmdb.org/t/p/w200";
  return (
    <>
      <h2 className="text-light bg-black"> Movies</h2>
      <div className="bg-black d-flex flex-wrap p-3">
        {Movies && Movies.length > 0
          ? Movies.map((post) => (
              <div key={post.id}>
                <Cards
                  image={`${imgUrl}${post.poster_path}`}
                  nome={post.title}
                />
              </div>
            ))
          : " array vuoto"}
      </div>
    </>
  );
}

export default Movies;

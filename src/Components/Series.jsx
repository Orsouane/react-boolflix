import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import SerieCards from "./SerieCard";
function Series() {
  const { Series } = useContext(GlobalContext);

  console.log(Series);
  const imgUrl = "https://image.tmdb.org/t/p/w200";
  return (
    <>
      <h2 className="text-light bg-black"> Series</h2>
      <div className="bg-black d-flex flex-wrap p-3">
        {Series && Series.length > 0
          ? Series.map((post) => (
              <div key={post.id}>
                <SerieCards
                  image={`${imgUrl}${post.poster_path}`}
                  nome={post.name}
                />
              </div>
            ))
          : " array vuoto"}
      </div>
    </>
  );
}

export default Series;

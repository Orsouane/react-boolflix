
import CreateStars from "../Components/Stars";
import GetFlagCode from "../Components/Flags";
import { baseUrl } from "../Api/Config";

const getImageUrl = (poster_path, size = "w342") => {
     return `${baseUrl}${size}${poster_path}`;
};

function Card({ movie, searchDone }) {
     return (
          <div className="group relative h-[400px] w-[280px] flex flex-col justify-end p-4 rounded-2xl overflow-hidden shadow-[0px_2px_10px_0px_#FF0000] bg-[#111] z-10 m-1">
               <div className="absolute top-0 left-0 h-full w-full bg-[#111111] z-0" />

               <img
                    src={getImageUrl(movie?.poster_path, "w342")}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
                    alt={movie?.title}
               />

               <div className="relative z-10 text-white flex flex-col gap-2 font-nunito">
                    <h3
                         className="text-[1.5em] tracking-[.2em]"
                         style={{
                              fontWeight: 900,
                              WebkitTextFillColor: "transparent",
                              WebkitTextStrokeWidth: "1px",
                              textShadow: "0 0 7px #fff",
                         }}
                    >
                         {movie?.title || movie.original_name}
                    </h3>


                    <div className="flex items-center gap-4 my-1">
                         <div className="flex gap-2">{CreateStars(movie?.vote_average)}</div>

                      
                    </div>

                    <div className="flex gap-2">
                         <div className="border-2 border-white rounded-md px-2 py-1 text-white hover:bg-white hover:text-[#222] duration-300 cursor-pointer">
                              <p>{(movie.release_date || movie.first_air_date).slice(0,4)}</p>

                         </div>
                       
                       
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                         <span className="text-xs">Lang:</span>
                         <img
                              className="w-4 h-3"
                              src={`/flags/${GetFlagCode(movie?.original_language)}`}
                              alt={movie?.original_language}
                         />
                    </div>
               </div>

               <p className="text-white text-sm mt-2 font-light h-0 group-hover:h-28 overflow-hidden duration-500 leading-tight z-10">
                    {movie?.overview?.slice(0, 150)}
               </p>
          </div>
     );
}

export default Card;

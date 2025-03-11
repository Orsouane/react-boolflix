import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Slider from "react-slick";
import Card from "./Card";
import Form from "./Form";
function SeriesResults() {

  return (
    <>
      <section className="w-[100%] h-[100vh] " >
        <div className="text-white" style={{ paddingBottom: "80px" }}>
          <Form />
        </div>
        <div className="flex justify-center" >
          <img className="h-8 " src="/flags/logo2.png" alt="" />

        </div>
        <CarouselSerie />
      </section>

    </>
  );
}

//?Function carousel
export function CarouselSerie() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: " w-[330px] md:w-[650px] lg:w-[1000px] "

  };
  const { Series, searchDone } = useContext(GlobalContext);
  return (
    <section className="flex justify-center">
      <Slider {...settings} >
        {Series && Series.length > 0 ? (
          Series.map((serie) => (
            <div key={serie.id} className="w-[150px]">
              <Card movie={serie} searchDone={searchDone} />
            </div>
          ))
        ) : (
          <p>No serie found.</p> // Display a message if no movies are found
        )}
      </Slider>
    </section>




  )

}
export default SeriesResults;

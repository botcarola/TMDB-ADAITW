import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import useFetch from "../hooks/useFetch";

 const Carrousel = () => {

    const [ elemento ] = useFetch(true, "movie", "popular", 1)
    console.log(elemento)
  return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
          {elemento && elemento.map(curr =>
             <SwiperSlide key={curr.id}>
                 <img src={`https://image.tmdb.org/t/p/original${curr.backdrop_path}`} alt={curr.title} />
             </SwiperSlide>
          )}    
      </Swiper>
    </>
  );
}

export default Carrousel;

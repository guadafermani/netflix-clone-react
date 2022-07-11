import React from "react";
import useApi from "../../hooks/useApi"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Separator from "../Separator/Separator";
import Card from "../Card/Card";

const Carousel = ({entity, title}) => {
  const [ values, isLoading, error, nextPage, previousPage] = useApi(entity)

  return (
    <>
    <div className="title">
      <h1 style={{color: 'white'}}>{title}</h1>
    </div>
    <Separator height={40}/>
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {isLoading? (
          <div style={{color: 'white'}}>Loading...</div>
        ) : (
          values.map((value) =>
          <SwiperSlide>
            <Card key={value.id} movie={value}/>
          </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default Carousel;

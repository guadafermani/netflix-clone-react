import React from "react";
import { apiEntity } from "../apiConfig/apiConfig";
import Banner from "../Components/Banner/Banner";
import Carousel from "../Components/Carousel/Carousel";
import Separator from "../Components/Separator/Separator";

const Homepage = () => {
  return (
    <div>
      <Banner />

      <Separator height={"40px"} />
      <Carousel
        entity={apiEntity.popularMovies}
        title={"Películas populares"}
      />

      <Separator height={"40px"} />
      <Carousel
        entity={apiEntity.topRatedMovies}
        title={"Películas mejor valoradas"}
      />

      <Separator height={"40px"} />
      <Carousel
        entity={apiEntity.movieUpcoming}
        title={"Películas próximas a estrenar"}
      />

<Separator height={"40px"} />
      <Carousel
        entity={apiEntity.popularTv}
        title={"Series populares"}
      />
      
<Separator height={"40px"} />
      <Carousel
        entity={apiEntity.topRatedTv}
        title={"Series mejor valoradas"}
      />
    </div>
  );
};

export default Homepage;

import React from "react";
import Banner from "../Components/Banner/Banner";
import Carousel from "../Components/Carousel/Carousel";
import Separator from "../Components/Separator/Separator";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Separator height={"50px"}/>
      <Carousel />
      <div>
        <div style={{ height: "80%" }}>div</div>
      </div>
    </div>
  );
};

export default Homepage;

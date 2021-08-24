import React from "react";
import { BannerOne, BannerTwo } from "./HomeElements";
import bOne from "../../images/bannerOne.jpg";
import bTwo from "../../images/bannerTwo.jpg";

const Home = () => {
  return (
    <>
      <h1>Banner</h1>
      <BannerOne src={bOne}></BannerOne>
      <BannerTwo src={bTwo}></BannerTwo>
    </>
  );
};

export default Home;

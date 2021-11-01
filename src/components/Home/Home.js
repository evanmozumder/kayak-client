import React from "react";
import Faq from "../Faq/Faq";
import RecommendedDeals from "../RecommendedDeals/RecommendedDeals";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <img
        style={{ maxWidth: "100%" }}
        src="https://i.ibb.co/mvsGB7P/banner.jpg"
        alt=""
      />
      <Services></Services>
      <RecommendedDeals></RecommendedDeals>
      <Faq></Faq>
    </div>
  );
};

export default Home;

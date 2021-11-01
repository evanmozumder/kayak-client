import React, { useEffect, useState } from "react";
import RecommendedDeal from "../RecommendedDeal/RecommendedDeal";

const RecommendedDeals = () => {
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-plains-87841.herokuapp.com/deals")
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);
  return (
    <div>
      <h2 className="my-5">Our Recommended Deals</h2>
      <div className="container">
        <div className="row">
          {deals.map((deal) => (
            <RecommendedDeal deal={deal} key={deal._id}></RecommendedDeal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedDeals;

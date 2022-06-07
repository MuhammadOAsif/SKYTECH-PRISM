import React, { useState } from "react";
import "./Review.css";
const Review = (props) => {
  const [seeMore, setSeeMore] = useState(false);
  const { name, img, ratings, review } = props.review;
  return (
    <div>
      <div className="p-3 mx-auto mt-16 font-serif text-sm border-4 pt- xl:w-11/12 rounded-3xl">
        <div className="pr-5 my-auto rounded-img ">
          <img src={img} alt="" />
        </div>
        <div className="w-full text-[#758283]">
          <h1 className="pt-3 pb-2 text-3xl">Name: {name}</h1>
          <span className="text-red-500">Rating: {ratings}</span>
          <p className="">
            <span className="text-[#758283]">
              Review Comment: {seeMore ? review : review.slice(0, 200)}
            </span>
            <button
              onClick={() => setSeeMore(!seeMore)}
              className="font-semibold text-orange-500"
            >
              , see more...
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;

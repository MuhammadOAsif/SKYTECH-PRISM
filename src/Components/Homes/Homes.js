import React, { useState } from "react";

const Homes = (props) => {
  const [seeMore, setSeeMore] = useState(false);
  const { name, img, ratings, review } = props.review;
  return (
    <div>
      <div className="p-3 mx-auto mt-16 font-sans text-sm border-4 xl:w-11/12  text-slate-500 rounded-3xl">
        <div className="my-auto rounded-img ">
          <img src={img} alt="" />
        </div>
        <div className="w-full">
          <h1 className="pt-3 pb-2 text-3xl text-teal-700">Name: {name}</h1>
          <span className="text-red-500">Rating: {ratings}</span>
          <p>
            Review Comment: {seeMore ? review : review.slice(0, 200)}
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

export default Homes;

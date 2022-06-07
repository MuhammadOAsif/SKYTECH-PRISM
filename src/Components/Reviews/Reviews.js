import React from "react";
import useReview from "../../Hooks/Hooks";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReview();
  return (
    <div>
      <div className="mx-auto font-sans text-3xl font-extrabold text-center text-orange-400 xl:mb-5 xl:w-11/12 xl:text-6xl xl:mt-28">
        <h2 className="md:text-5xl">
          Customer <span className="text-[#242B2E]">Reviews</span>
        </h2>
      </div>
      <div className="grid grid-cols-3">
        {reviews.map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

import React from "react";
import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import img1 from "../assets/images/abc.png";
import img2 from "../assets/images/abc.png";
import img3 from "../assets/images/abc.png";

const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Our" title2="Reviews" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} />
        <ReviewCard img={img2} />
        <ReviewCard img={img3} />
      </div>
    </div>
  );
};

export default Reviews;

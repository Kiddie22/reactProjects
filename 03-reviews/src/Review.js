import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const currentReview = reviews[index];

  const nextReview = () => {
    const tempIndex = index + 1;
    tempIndex > reviews.length - 1 ? setIndex(0) : setIndex(tempIndex);
  };

  const previousReview = () => {
    const tempIndex = index - 1;
    tempIndex < 0 ? setIndex(reviews.length - 1) : setIndex(tempIndex);
  };

  const randomReview = () => {
    const random = Math.floor(Math.random() * reviews.length);
    if (random == index) {
      if (random + 1 > reviews.length - 1) {
        setIndex(0);
      } else {
        setIndex(random + 1);
      }
    } else {
      setIndex(random);
    }
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img
            className="person-img"
            src={currentReview.image}
            alt={currentReview.name}
          />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{currentReview.name}</h4>
        <p className="job">{currentReview.job}</p>
        <p className="info">{currentReview.text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={() => previousReview()}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => nextReview()}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={() => randomReview()}>
          surprise me
        </button>
      </article>
    </>
  );
};

export default Review;

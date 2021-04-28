import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  return (
    <>
      {reviews.map((review) => {
        const { id, name, job, image, text } = review;
        return (
          <article className="review">
            <div className="img-container">
              <img className="person-img" src={image} alt={name} />
              <span className="quote-icon">
                <FaQuoteRight />
              </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
              <button className="prev-btn">
                <FaChevronLeft />
              </button>
              <button className="next-btn">
                <FaChevronRight />
              </button>
            </div>
            <button className="random-btn">surprise me</button>
          </article>
        );    
      })}
    </>
  );
};

export default Review;

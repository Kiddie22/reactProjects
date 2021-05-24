import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const review = data[index];

  const lastIndex = data.length - 1;

  const nextReview = () => {
    if (index + 1 > lastIndex) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevReview = () => {
    if (index - 1 < 0) {
      setIndex(lastIndex);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <Review review={review} nextReview={nextReview} prevReview={prevReview} />
    </div>
  );
};

const Review = (props) => {
  const { id, image, name, title, quote } = props.review;
  const nextReview = props.nextReview;
  const prevReview = props.prevReview;
  return (
    <>
      <div className="section-center">
        <article>
          <img className="person-img" src={image} alt={name} />
          <h4>{name}</h4>
          <div className="title">{title}</div>
          <div className="text">{quote}</div>
          <div className="icon">
            <FaQuoteRight />
          </div>
          <div className="prev">
            <FiChevronLeft onClick={prevReview} />
          </div>
          <div className="next">
            <FiChevronRight onClick={nextReview} />
          </div>
        </article>
      </div>
    </>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

const App = () => {
  const [review, setReview] = useState(data[0]);
  return (
    <div className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <Review review={review} />
    </div>
  );
};

const Review = (props) => {
  const { id, image, name, title, quote } = props.review;
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
            <FiChevronLeft />
          </div>
          <div className="next">
            <FiChevronRight />
          </div>
        </article>
      </div>
    </>
  );
};

export default App;

import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image, price } = props.tour;
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <p>$ {price}</p>
        </div>
        <p>
          {!readMore && info.substring(0, 200) + "..."}
          {readMore && info}
          <button className="button" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="button">Not Interested</button>
      </footer>
    </div>
  );
};

export default Tour;

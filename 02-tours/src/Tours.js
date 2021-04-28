import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  const tours = props.tours;
  return (
    <>
      {tours.map((tour) => {
        console.log(tour);
        return <Tour tour={tour} />;
      })}
    </>
  );
};

export default Tours;

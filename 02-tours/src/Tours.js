import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  var tours = props.tours;
  const remove = props.remove;

  return (
    <>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} remove={remove} />;
      })}
    </>
  );
};

export default Tours;

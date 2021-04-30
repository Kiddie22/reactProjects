import React from "react";

const Categories = (props) => {
  const filter = props.filter;
  return (
    <>
      <div className="btn-container">
        <div className="filter-btn" onClick={() => filter("all")}>
          All
        </div>
        <div className="filter-btn" onClick={() => filter("breakfast")}>
          Breakfast
        </div>
        <div className="filter-btn" onClick={() => filter("lunch")}>
          Lunch
        </div>
        <div className="filter-btn" onClick={() => filter("shakes")}>
          Shakes
        </div>
      </div>
    </>
  );
};

export default Categories;

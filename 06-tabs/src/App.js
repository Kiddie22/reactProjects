import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
    setIsLoading(false);
  }, []);

  const { title, company, dates, duties } = data[order];

  return (
    <div className="section">
      {isLoading && <div className="loading">Loading...</div>}
      {!isLoading && (
        <>
          <div className="title">
            <h2>Experience</h2>
            <div className="underline"></div>
          </div>

          {/* Jobs navbar */}
          <div className="jobs-center">
            <div className="btn-container">
              {data.map((job) => (
                <button className="job-btn">{job.company}</button>
              ))}
            </div>

            {/* Job info */}
            <div className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <div className="job-date">{dates}</div>
              {/* {duties.map((duty) => (
                <div className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              ))} */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
    setIsLoading(false);
  }, []);

  return (
    <main>
      <div className="section">
        {isLoading && <div className="loading">Loading...</div>}
        {!isLoading && (
          <>
            <div className="title">
              <h2>Experience</h2>
              <div className="underline"></div>
            </div>
            {data.map((job) => {
              return job.title;
            })}
          </>
        )}
      </div>
    </main>
  );
};

export default App;

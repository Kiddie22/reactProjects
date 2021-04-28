import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      });
  }, []);

  const fetchTours = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTours(data);
      });
  };

  const remove = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id != id;
    });
    setTours(newTours);
  };

  return (
    <>
      <main>
        {isLoading && <Loading />}
        {!isLoading && (
          <div>
            <div className="title">
              <h2>our tours</h2>
              <div className="underline"></div>
            </div>
            <Tours tours={tours} remove={remove} />
          </div>
        )}
        {tours.length == 0 && (
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        )}
      </main>
    </>
  );
};

export default App;

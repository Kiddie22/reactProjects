import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const App = () => {
  return (
    <>
      <main>
        <div className="container">
          <h3>Questions and answers about login</h3>
          <section className="info">
            {data.map((question) => (
              <SingleQuestion question={question} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default App;

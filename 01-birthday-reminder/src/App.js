import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          {people.map((person) => {
            return <List key={person.id} person={person} />;
          })}
          <button onClick={clearAll}> Clear All </button>
        </section>
      </main>
    </>
  );
};

export default App;

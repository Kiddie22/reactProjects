import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  const [isEmpty, setIsEmpty] = useState(false);

  const clearAll = () => {
    setPeople([]);
    setIsEmpty(true);
  };

  const reset = () => {
    setPeople(data);
    setIsEmpty(false);
  };

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          {people.map((person) => {
            return <List key={person.id} person={person} />;
          })}
          {!isEmpty && <button onClick={clearAll}> Clear All </button>}
          {isEmpty && <button onClick={reset}> Reset </button>}
        </section>
      </main>
    </>
  );
};

export default App;

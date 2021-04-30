import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";

const App = () => {
  const [items, setItems] = useState(menu);

  const filter = (category) => {
    if (category == "all") {
      setItems(menu);
    } else {
      const newItems = menu.filter((item) => item.category === category);
      setItems(newItems);
    }
  };

  return (
    <>
      <main>
        <div className="menu">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filter={filter} />
          <Menu items={items} />
        </div>
      </main>
    </>
  );
};

export default App;

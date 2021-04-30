import React from "react";

const Menu = (props) => {
  const items = props.items;
  return (
    <>
      <div className="section-center">
        {items.map((item) => {
          const { id, title, category, price, img, desc } = item;
          return (
            <>
              <div className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <div className="price">
                      <b>${price}</b>
                    </div>
                  </header>
                  <div className="item-text">{desc}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Menu;

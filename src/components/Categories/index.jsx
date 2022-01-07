import React, { useState } from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const onSelectCategory = (index) => {
    setActiveCategory(index);
    onClickItem(index);
  };

  console.log("RERENDER CATEGORIES");

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => onSelectCategory(index)}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;

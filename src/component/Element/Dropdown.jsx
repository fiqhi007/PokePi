import React from "react";

const Dropdown = ({ label, items, onItemClick }) => {
  return (
    <div className="dropdown dropdown-bottom mb-2">
      <div tabIndex={0} role="button" className="btn m-1">
        {label} ⬇️
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
      >
        {items.map((item, index) => (
          <li key={index}>
            <a onClick={() => onItemClick(item.value)}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

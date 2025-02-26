import React from "react";

const SortControls = ({ onSortChange }) => {
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1">
        Sort By ⬇️
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
      >
        <li>
          <a onClick={() => onSortChange("name")}>Alphabet (A-Z)</a>
        </li>
        <li>
          <a onClick={() => onSortChange("hp")}>HP (Highest)</a>
        </li>
        <li>
          <a onClick={() => onSortChange("attack")}>Attack (Highest)</a>
        </li>
        <li>
          <a onClick={() => onSortChange("defense")}>Defense (Highest)</a>
        </li>
        <li>
          <a onClick={() => onSortChange("speed")}>Speed (Highest)</a>
        </li>
      </ul>
    </div>
  );
};

export default SortControls;

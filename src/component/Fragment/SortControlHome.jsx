import React from "react";
import Dropdown from "../Element/Dropdown"; // Sesuaikan path-nya

const SortControls = ({ onSortChange }) => {
  // Daftar item untuk dropdown
  const sortItems = [
    { label: "Alphabet (A-Z)", value: "name" },
    { label: "HP (Highest)", value: "hp" },
    { label: "Attack (Highest)", value: "attack" },
    { label: "Defense (Highest)", value: "defense" },
    { label: "Speed (Highest)", value: "speed" },
  ];

  return (
    <Dropdown label="Sort By" items={sortItems} onItemClick={onSortChange} />
  );
};

export default SortControls;

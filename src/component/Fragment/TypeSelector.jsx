import React from "react";
import Dropdown from "../Element/Dropdown"; // Sesuaikan path-nya

const TypeSelector = ({ onTypeChange }) => {
  // Daftar tipe Pokémon
  const typeItems = [
    { label: "Fire", value: "fire" },
    { label: "Water", value: "water" },
    { label: "Grass", value: "grass" },
    { label: "Electric", value: "electric" },
    { label: "Psychic", value: "psychic" },
    { label: "Dark", value: "dark" },
    { label: "Fairy", value: "fairy" },
  ];

  return (
    <div className="mb-6">
      <label htmlFor="type" className="mr-2">
        Pilih Tipe Pokémon:
      </label>
      <Dropdown
        label="Select Type"
        items={typeItems}
        onItemClick={(value) => onTypeChange(value)}
      />
    </div>
  );
};

export default TypeSelector;

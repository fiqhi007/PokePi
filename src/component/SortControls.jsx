// src/components/SortControls.jsx
const SortControls = ({ onSortChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="sort" className="mr-2">
        Sort By:
      </label>
      <select
        id="sort"
        onChange={(e) => onSortChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded"
      >
        <option value="name">Alphabet (A-Z)</option>
        <option value="hp">HP (Highest)</option>
        <option value="attack">Attack (Highest)</option>
        <option value="defense">Defense (Highest)</option>
        <option value="speed">Speed (Highest)</option>
      </select>
    </div>
  );
};

export default SortControls;

import { useState } from "react";
import "../styles/Filter.css";

function Filter({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    onFilter(searchTerm);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by brand and/or model..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Filter</button>
    </div>
  );
}

export default Filter;

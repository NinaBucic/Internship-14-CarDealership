import { useState } from "react";
import "../styles/Filter.css";

function Filter({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilter(value);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by brand and/or model..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;

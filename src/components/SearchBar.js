import React, { useState } from "react";
import "../style/SearchBar.css";

function SearchBar({ setCity, fetchWeather }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() === "") return;
    setCity(input);
    fetchWeather();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Shahar nomini kiriting..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Qidirish</button>
    </div>
  );
}

export default SearchBar;
